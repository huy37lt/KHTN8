import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, CheckCircle2, XCircle, Clock, RotateCcw, 
  ArrowLeft, Printer, AlertTriangle, BookOpen, Sparkles
} from 'lucide-react';
import { ExamResult, Question } from '../types/quiz';
import { playSound } from '../utils/audio';

interface ExamResultViewProps {
  result: ExamResult;
  onRetake: () => void;
  onRetakeMistakes: (mistakeQuestions: Question[]) => void;
  onBackToLibrary: () => void;
}

export const ExamResultView: React.FC<ExamResultViewProps> = ({
  result,
  onRetake,
  onRetakeMistakes,
  onBackToLibrary
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong'>('all');

  const { score, correctCount, totalQuestions, durationSeconds, questions, userAnswers } = result;
  const wrongCount = totalQuestions - correctCount;
  const percent = Math.round((correctCount / totalQuestions) * 100);

  const mistakeQuestions = questions.filter(q => {
    const ans = userAnswers[q.id];
    return ans === undefined || ans !== q.correctAnswer;
  });

  // Confetti effect and celebration sound on mount if score is good
  useEffect(() => {
    playSound('complete');
    if (score >= 7.5) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [score]);

  // Pedagogical feedback rating
  let feedbackText = '';
  let badgeColor = '';
  if (score >= 9.0) {
    feedbackText = 'Xuất sắc! Bạn nắm bài rất chắc chắn và có phản xạ làm bài cực kỳ tốt!';
    badgeColor = 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950/80 dark:text-emerald-300';
  } else if (score >= 7.5) {
    feedbackText = 'Rất tốt! Chỉ một vài lỗi nhỏ cần chú ý, xem lại lời giải bên dưới để khắc phục nhé!';
    badgeColor = 'text-blue-700 bg-blue-100 dark:bg-blue-950/80 dark:text-blue-300';
  } else if (score >= 5.0) {
    feedbackText = 'Khá ổn! Hãy dành thêm thời gian ôn lại sổ tay kiến thức và luyện tập thêm một lần nữa nhé!';
    badgeColor = 'text-amber-700 bg-amber-100 dark:bg-amber-950/80 dark:text-amber-300';
  } else {
    feedbackText = 'Đừng nản lòng! Đọc kỹ phần tóm tắt lý thuyết trước khi làm lại, bạn sẽ tiến bộ vượt bậc!';
    badgeColor = 'text-rose-700 bg-rose-100 dark:bg-rose-950/80 dark:text-rose-300';
  }

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    if (m === 0) return `${s} giây`;
    return `${m} phút ${s > 0 ? `${s} giây` : ''}`;
  };

  const filteredQuestions = questions.filter(q => {
    const ans = userAnswers[q.id];
    const isCorrect = ans === q.correctAnswer;
    if (filter === 'correct') return isCorrect;
    if (filter === 'wrong') return !isCorrect;
    return true;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation & Print toolbar */}
        <div className="flex items-center justify-between gap-4 no-print">
          <button
            onClick={onBackToLibrary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Về Kho Đề</span>
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>In Kết Quả & Lời Giải</span>
          </button>
        </div>

        {/* Hero Score Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-500 mb-4">
            <Trophy className="w-7 h-7" />
          </div>

          <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Kết Quả Bài Luyện Tập
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {result.quizTitle}
          </h2>

          {/* Large Scaled Score */}
          <div className="my-5 inline-block">
            <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white tabular-nums">
              {score}
              <span className="text-2xl sm:text-3xl font-semibold text-slate-400 dark:text-slate-500 ml-1">/10</span>
            </div>
            <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeColor}`}>
              {score >= 9.0 ? 'Xuất Sắc' : score >= 7.5 ? 'Đạt Điểm Giỏi' : score >= 5.0 ? 'Đạt Yêu Cầu' : 'Cần Cố Gắng'}
            </div>
          </div>

          <p className="max-w-lg mx-auto text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {feedbackText}
          </p>

          {/* Metric Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Số câu đúng</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                {correctCount} / {totalQuestions}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Tỷ lệ chính xác</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                {percent}%
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Thời gian làm</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                {formatDuration(durationSeconds)}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap no-print">
            {mistakeQuestions.length > 0 && (
              <button
                onClick={() => onRetakeMistakes(mistakeQuestions)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-rose-700 dark:text-rose-200 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 hover:bg-rose-100 dark:hover:bg-rose-900/80 rounded-xl transition-colors cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>Luyện Lại {mistakeQuestions.length} Câu Sai</span>
              </button>
            )}

            <button
              onClick={onRetake}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm Lại Toàn Bộ</span>
            </button>

            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Chọn Đề Khác</span>
            </button>
          </div>
        </div>

        {/* Detailed Question Review Section */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Chi Tiết Từng Câu Hỏi & Lời Giải
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Phân tích vì sao chọn đáp án đúng giúp học sinh ghi nhớ bản chất kiến thức
              </p>
            </div>

            {/* Filter Tabs (Interactive Segmented Control) */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg no-print">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Tất cả ({totalQuestions})
              </button>
              <button
                type="button"
                onClick={() => setFilter('wrong')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filter === 'wrong'
                    ? 'bg-white dark:bg-slate-700 text-rose-700 dark:text-rose-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Câu sai ({wrongCount})
              </button>
              <button
                type="button"
                onClick={() => setFilter('correct')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filter === 'correct'
                    ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Câu đúng ({correctCount})
              </button>
            </div>
          </div>

          {/* List of Questions */}
          <div className="space-y-6">
            {filteredQuestions.map((q, qIndex) => {
              const originalIndex = questions.findIndex(orig => orig.id === q.id);
              const chosen = userAnswers[q.id];
              const isCorrect = chosen === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-xl border transition-all ${
                    isCorrect
                      ? 'border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900'
                      : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/20'
                  }`}
                >
                  {/* Question header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}>
                        {originalIndex + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {q.topic || 'Câu hỏi'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Đúng
                        </span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Chưa đúng
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="font-semibold text-slate-900 dark:text-white mb-4 leading-relaxed text-sm">
                    {q.content}
                  </div>

                  {/* Options display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isChosen = chosen === optIdx;
                      const isCorrectOpt = optIdx === q.correctAnswer;

                      let style = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                      if (isCorrectOpt) {
                        style = 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-600';
                      } else if (isChosen && !isCorrectOpt) {
                        style = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 line-through';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-lg border flex items-start gap-2 ${style}`}
                        >
                          <span className="font-bold shrink-0">{letter}.</span>
                          <span className="leading-snug">{opt}</span>
                          {isCorrectOpt && (
                            <span className="ml-auto text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                              (Đáp án đúng)
                            </span>
                          )}
                          {isChosen && !isCorrectOpt && (
                            <span className="ml-auto text-[10px] font-bold text-rose-600 dark:text-rose-400">
                              (Bạn chọn)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Note */}
                  {q.explanation && (
                    <div className="p-3.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-l-2 border-emerald-500">
                      <span className="font-bold text-slate-900 dark:text-white mr-1">Lời giải chi tiết:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
