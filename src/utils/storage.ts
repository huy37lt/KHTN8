import { QuizSet, ExamResult, MistakeRecord, Question } from '../types/quiz';
import { DEFAULT_QUIZ_SETS } from '../data/defaultSets';

const STORAGE_KEYS = {
  CUSTOM_SETS: 'onluyen_custom_sets',
  DELETED_DEFAULT_IDS: 'onluyen_deleted_defaults',
  EXAM_HISTORY: 'onluyen_exam_history',
  MISTAKES: 'onluyen_mistakes',
  FONT_SIZE: 'onluyen_font_size',
  THEME_MODE: 'onluyen_theme_mode'
};

export function getAllQuizSets(): QuizSet[] {
  if (typeof window === 'undefined') return DEFAULT_QUIZ_SETS;
  
  try {
    const customSetsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_SETS);
    const customSets: QuizSet[] = customSetsJson ? JSON.parse(customSetsJson) : [];

    // Filter out obsolete legacy sets if any were cached previously
    const validCustomSets = customSets.filter(s => !s.id.startsWith('set-toan-') && !s.id.startsWith('set-tieng-anh-') && !s.id.startsWith('set-lich-su-'));

    return [...DEFAULT_QUIZ_SETS, ...validCustomSets];
  } catch (e) {
    console.error('Error loading quiz sets', e);
    return DEFAULT_QUIZ_SETS;
  }
}

export function saveQuizSet(quizSet: QuizSet): void {
  try {
    const customSetsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_SETS);
    const customSets: QuizSet[] = customSetsJson ? JSON.parse(customSetsJson) : [];

    const existingIndex = customSets.findIndex(s => s.id === quizSet.id);
    if (existingIndex >= 0) {
      customSets[existingIndex] = quizSet;
    } else {
      customSets.unshift(quizSet);
    }

    localStorage.setItem(STORAGE_KEYS.CUSTOM_SETS, JSON.stringify(customSets));
  } catch (e) {
    console.error('Error saving quiz set', e);
  }
}

export function deleteQuizSet(id: string): void {
  try {
    // If it's a default set, add to deleted defaults
    const isDefault = DEFAULT_QUIZ_SETS.some(s => s.id === id);
    if (isDefault) {
      const deletedDefaultsJson = localStorage.getItem(STORAGE_KEYS.DELETED_DEFAULT_IDS);
      const deletedDefaults: string[] = deletedDefaultsJson ? JSON.parse(deletedDefaultsJson) : [];
      if (!deletedDefaults.includes(id)) {
        deletedDefaults.push(id);
        localStorage.setItem(STORAGE_KEYS.DELETED_DEFAULT_IDS, JSON.stringify(deletedDefaults));
      }
    } else {
      const customSetsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_SETS);
      if (customSetsJson) {
        const customSets: QuizSet[] = JSON.parse(customSetsJson);
        const filtered = customSets.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEYS.CUSTOM_SETS, JSON.stringify(filtered));
      }
    }
  } catch (e) {
    console.error('Error deleting quiz set', e);
  }
}

export function resetToDefaults(): void {
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_SETS);
  localStorage.removeItem(STORAGE_KEYS.DELETED_DEFAULT_IDS);
}

// Mistakes Bank
export function getMistakes(): MistakeRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function recordMistake(question: Question, quizSetId: string, quizTitle: string): void {
  try {
    const mistakes = getMistakes();
    const existingIndex = mistakes.findIndex(m => m.question.id === question.id);

    if (existingIndex >= 0) {
      mistakes[existingIndex].wrongCount += 1;
      mistakes[existingIndex].lastWrongAt = new Date().toISOString();
      mistakes[existingIndex].question = question; // updated question data
    } else {
      mistakes.unshift({
        question,
        quizSetId,
        quizTitle,
        wrongCount: 1,
        lastWrongAt: new Date().toISOString()
      });
    }
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  } catch (e) {
    console.error('Error saving mistake', e);
  }
}

export function resolveMistake(questionId: string): void {
  try {
    const mistakes = getMistakes().filter(m => m.question.id !== questionId);
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  } catch (e) {
    console.error('Error resolving mistake', e);
  }
}

export function clearAllMistakes(): void {
  localStorage.removeItem(STORAGE_KEYS.MISTAKES);
}

// Exam History
export function getExamHistory(): ExamResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveExamResult(result: ExamResult): void {
  try {
    const history = getExamHistory();
    history.unshift(result);
    // Keep last 30 exam sessions
    if (history.length > 30) history.pop();
    localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history));
  } catch (e) {
    console.error('Error saving exam result', e);
  }
}
