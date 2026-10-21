import React from 'react';
import { AlertCircle, Play, CheckCircle2, Trash2, ArrowLeft, BookOpen } from 'lucide-react';
import { MistakeRecord, Question, QuizSet } from '../types/quiz';

interface MistakesNotebookViewProps {
  mistakes: MistakeRecord[];
  onStartPracticeMistakes: (questions: Question[]) => void;
  onResolveMistake: (questionId: string) => void;
  onClearAllMistakes: () => void;
  onBackToLibrary: () => void;
}

export const MistakesNotebookView: React.FC<MistakesNotebookViewProps> = ({
  mistakes,
  onStartPracticeMistakes,
  onResolveMistake,
  onClearAllMistakes,
  onBackToLibrary
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kho Đề</span>
            </button>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Sổ Tay Câu Sai</span>
                {mistakes.length > 0 && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 tabular-nums">
                    {mistakes.length} câu
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tự động gom lại các câu hỏi từng làm sai để ôn luyện cho tới khi hiểu bản chất
              </p>
            </div>
          </div>

          {mistakes.length > 0 && (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  if (window.confirm('Bạn có chắc muốn xóa tất cả câu trong sổ sai không?')) {
                    onClearAllMistakes();
                  }
                }}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa Hết</span>
              </button>

              <button
                onClick={() => onStartPracticeMistakes(mistakes.map(m => m.question))}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Luyện Lại {mistakes.length} Câu Này</span>
              </button>
            </div>
          )}
        </div>

        {/* Empty state */}
        {mistakes.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-12 text-center max-w-lg mx-auto shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Sổ Tay Trống - Thật Tuyệt Vời!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Bạn chưa có câu hỏi nào bị làm sai, hoặc bạn đã khắc phục hết tất cả các câu sai trước đó. Hãy tiếp tục thử sức với các bộ đề khác nhé!
            </p>
            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Khám Phá Kho Đề Thi</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {mistakes.map((m, idx) => {
              const q = m.question;
              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-rose-600 dark:text-rose-400">
                        Sai {m.wrongCount} lần
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {m.quizTitle}
                      </span>
                      {q.topic && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{q.topic}</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => onResolveMistake(q.id)}
                      title="Đánh dấu đã hiểu để xóa khỏi sổ sai"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Đã nắm vững</span>
                    </button>
                  </div>

                  {/* Question content */}
                  <div className="font-semibold text-slate-900 dark:text-white text-sm leading-relaxed">
                    {q.content}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      const isCorrect = oIdx === q.correctAnswer;
                      return (
                        <div
                          key={oIdx}
                          className={`p-2.5 rounded-lg border flex items-start gap-2 ${
                            isCorrect
                              ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-bold'
                              : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <span className="font-bold shrink-0">{letter}.</span>
                          <span>{opt}</span>
                          {isCorrect && (
                            <span className="ml-auto text-[10px] text-emerald-700 dark:text-emerald-400">
                              (Đáp án đúng)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {q.explanation && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-xs text-slate-700 dark:text-slate-300 border-l-2 border-emerald-500 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white mr-1">Lời giải:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
