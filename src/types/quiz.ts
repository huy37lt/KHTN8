export interface Question {
  id: string;
  content: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation?: string;
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface StudySummary {
  id: string;
  title: string;
  keyPoints: string[];
  formulaOrRule?: string;
  mnemonics?: string;
}

export interface QuizSet {
  id: string;
  title: string;
  subject: string; // Toán, Ngữ Văn, Tiếng Anh, Khoa Học Tự Nhiên, Lịch Sử & Địa Lý, Tin Học, Kỹ Năng
  grade: string;   // Lớp 6, 7, 8, 9, 10, 11, 12, hoặc Ôn Thi
  description: string;
  questions: Question[];
  summaries?: StudySummary[];
  createdAt: string;
  isDefault?: boolean;
}

export type PracticeMode = 'immediate' | 'exam';

export interface PracticeConfig {
  mode: PracticeMode;
  questionCount: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  timeLimitMinutes: number; // 0 for unlimited
}

export interface ExamResult {
  quizSetId: string;
  quizTitle: string;
  mode: PracticeMode;
  questions: Question[];
  userAnswers: Record<string, number>;
  flaggedQuestionIds: string[];
  score: number; // scaled to 10
  correctCount: number;
  totalQuestions: number;
  durationSeconds: number;
  date: string;
}

export interface MistakeRecord {
  question: Question;
  quizSetId: string;
  quizTitle: string;
  wrongCount: number;
  lastWrongAt: string;
}
