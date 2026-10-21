import { Question, StudySummary } from '../types/quiz';

/**
 * Parses raw text pasted from Word, TXT, or PDF into structured Question objects.
 */
export function parseQuestionsFromText(rawText: string): Question[] {
  if (!rawText.trim()) return [];

  // Normalize line endings and strip special Word chars
  const normalized = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'");

  // Regex to split into question blocks: Câu 1, Câu 2, 1., 1), etc.
  const questionBlocks: string[] = [];
  const lines = normalized.split('\n');
  let currentBlock: string[] = [];

  const questionStartRegex = /^(?:câu|cau|question|\d+[\.\)])\s*(\d+)?[\.:\s]/i;

  for (const line of lines) {
    const trimmed = line.trim();
    if (questionStartRegex.test(trimmed) && currentBlock.length > 0) {
      questionBlocks.push(currentBlock.join('\n'));
      currentBlock = [line];
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) {
    questionBlocks.push(currentBlock.join('\n'));
  }

  // If no "Câu X" was found, try splitting by double newline
  const blocksToParse = questionBlocks.length > 1 ? questionBlocks : normalized.split(/\n\s*\n/).filter(b => b.trim().length > 0);

  const results: Question[] = [];

  blocksToParse.forEach((block, index) => {
    const question = parseSingleQuestionBlock(block, index + 1);
    if (question) {
      results.push(question);
    }
  });

  return results;
}

function parseSingleQuestionBlock(block: string, defaultIndex: number): Question | null {
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  let content = '';
  const rawOptions: { letter: string; text: string; isMarkedCorrect: boolean }[] = [];
  let detectedAnswer: number | null = null;
  let explanation = '';
  let inExplanation = false;

  const optRegex = /^([*•]?[A-D])[.\)]\s*(.*)$/i;
  const answerRegex = /(?:đáp\s*án|đáp\s*an|da|đ\/a|key|ans|answer)\s*[:=]\s*([A-D])/i;
  const explainRegex = /(?:giải\s*thích|giai\s*thich|lời\s*giải|loi\s*giai|hướng\s*dẫn|hd)\s*[:=]\s*(.*)$/i;

  let questionContentLines: string[] = [];
  let foundFirstOption = false;

  for (const line of lines) {
    // Check explanation
    const explainMatch = line.match(explainRegex);
    if (explainMatch) {
      inExplanation = true;
      explanation = explainMatch[1] || '';
      continue;
    }

    if (inExplanation) {
      explanation += (explanation ? ' ' : '') + line;
      continue;
    }

    // Check explicit answer line: "Đáp án: A"
    const ansMatch = line.match(answerRegex);
    if (ansMatch) {
      const letter = ansMatch[1].toUpperCase();
      detectedAnswer = ['A', 'B', 'C', 'D'].indexOf(letter);
      continue;
    }

    // Check if line contains one or more options, e.g. "A. x >= 3   B. x < 3"
    const inlineOptions = extractInlineOptions(line);
    if (inlineOptions.length > 0) {
      foundFirstOption = true;
      inlineOptions.forEach(opt => rawOptions.push(opt));
      continue;
    }

    // Single option line e.g. "A. 15 km" or "*A. 15 km"
    const optMatch = line.match(optRegex);
    if (optMatch) {
      foundFirstOption = true;
      let mark = optMatch[1];
      const isMarked = mark.startsWith('*') || mark.startsWith('•');
      mark = mark.replace(/[*•]/g, '').toUpperCase();
      rawOptions.push({
        letter: mark,
        text: optMatch[2].trim(),
        isMarkedCorrect: isMarked
      });
      continue;
    }

    // Still in question content
    if (!foundFirstOption) {
      questionContentLines.push(line);
    }
  }

  // Clean up question content
  content = questionContentLines.join(' ')
    .replace(/^(?:câu|cau|question)\s*\d+[\.:\s]*/i, '')
    .replace(/^\d+[\.\)]\s*/, '')
    .trim();

  if (!content) {
    // Fallback if content was not cleaned properly
    content = lines[0] || `Câu hỏi ${defaultIndex}`;
  }

  // Check if any option had an asterisk
  const markedIndex = rawOptions.findIndex(o => o.isMarkedCorrect);
  if (markedIndex !== -1 && detectedAnswer === null) {
    detectedAnswer = markedIndex;
  }

  // Ensure 4 options or pad if necessary
  const options = rawOptions.map(o => o.text);
  if (options.length < 2) {
    // If not standard multiple choice, create fallback dummy options
    return null;
  }

  const finalCorrectAnswer = detectedAnswer !== null && detectedAnswer >= 0 && detectedAnswer < options.length
    ? detectedAnswer
    : 0;

  return {
    id: `q-custom-${Date.now()}-${defaultIndex}-${Math.random().toString(36).substring(2, 6)}`,
    content,
    options,
    correctAnswer: finalCorrectAnswer,
    explanation: explanation.trim() || undefined,
    difficulty: 'medium'
  };
}

/**
 * Extracts options when multiple options are on the same line, e.g.:
 * "A. 10m    B. 20m    C. 30m    D. 40m"
 */
function extractInlineOptions(line: string): { letter: string; text: string; isMarkedCorrect: boolean }[] {
  const parts: { letter: string; text: string; isMarkedCorrect: boolean }[] = [];
  const regex = /([*•]?[A-D])[.\)]\s*([^A-D\n]+(?=[*•]?[A-D][.\)]|$))/gi;
  let match;
  while ((match = regex.exec(line)) !== null) {
    const rawLetter = match[1];
    const isMarked = rawLetter.startsWith('*') || rawLetter.startsWith('•');
    const letter = rawLetter.replace(/[*•]/g, '').toUpperCase();
    const text = match[2].trim();
    if (text) {
      parts.push({ letter, text, isMarkedCorrect: isMarked });
    }
  }
  return parts.length >= 2 ? parts : [];
}

/**
 * Parses summary keynotes pasted by teacher
 */
export function parseSummariesFromText(rawText: string): StudySummary[] {
  if (!rawText.trim()) return [];
  const sections = rawText.split(/\n\s*#+\s*|\n\s*Chương\s+|\n\s*Bài\s+|\n\s*Phần\s+/i).filter(Boolean);
  
  if (sections.length <= 1) {
    // Single summary
    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
    const title = lines[0] || 'Tóm tắt kiến thức trọng tâm';
    const keyPoints = lines.slice(1).filter(l => l.length > 2);
    return [{
      id: `s-${Date.now()}`,
      title,
      keyPoints: keyPoints.length > 0 ? keyPoints : ['Nắm vững định nghĩa và các định lý liên quan.', 'Luyện tập làm bài theo từng dạng từ cơ bản đến nâng cao.']
    }];
  }

  return sections.map((sec, idx) => {
    const lines = sec.split('\n').map(l => l.trim()).filter(Boolean);
    const title = lines[0] || `Chủ đề ${idx + 1}`;
    const keyPoints = lines.slice(1).filter(l => l.length > 2);
    return {
      id: `s-${Date.now()}-${idx}`,
      title,
      keyPoints: keyPoints.length > 0 ? keyPoints : ['Ghi nhớ kiến thức trọng tâm của chủ đề này.']
    };
  });
}

/**
 * Fisher-Yates shuffle with immutability
 */
export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Randomize question options and track the new correct index
 */
export function shuffleQuestionOptions(question: Question): Question {
  const originalCorrect = question.options[question.correctAnswer];
  const indices = question.options.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  const newOptions = shuffledIndices.map(i => question.options[i]);
  const newCorrectAnswer = newOptions.indexOf(originalCorrect);

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectAnswer >= 0 ? newCorrectAnswer : 0
  };
}
