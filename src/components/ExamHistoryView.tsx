import React from 'react';
import { History, Clock, ArrowLeft, Trophy, CheckCircle2, RotateCcw } from 'lucide-react';
import { ExamResult } from '../types/quiz';

interface ExamHistoryViewProps {
  history: ExamResult[];
  onReviewResult: (result: ExamResult) => void;
  onBackToLibrary: () => void;
}

export const ExamHistoryView: React.FC<ExamHistoryViewProps> = ({
  history,
  onReviewResult,
  onBackToLibrary
}) => {
  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return iso;
    }
  };

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s > 0 ? `${s}s` : ''}`;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kho Đề</span>
            </button>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Lịch Sử Ôn Luyện & Thi Thử
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Theo dõi quá trình tiến bộ qua từng bài luyện tập
              </p>
            </div>
          </div>
        </div>

        {/* List of past results */}
        {history.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 max-w-lg mx-auto shadow-xs">
            <History className="w-10 h-10 mx-auto text-slate-400 mb-2" />
            <p className="font-semibold text-slate-700 dark:text-slate-300">Chưa có bài thi nào được ghi nhận.</p>
            <p className="text-xs mt-1">Hãy bắt đầu một bài luyện tập bất kỳ trong kho đề cương nhé!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((h, idx) => {
              const isExcellent = h.score >= 8.0;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-between gap-4 flex-wrap"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{formatDate(h.date)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{h.mode === 'exam' ? 'Thi thử tính giờ' : 'Ôn từng câu'}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{formatDuration(h.durationSeconds)}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {h.quizTitle}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                        {h.score}
                        <span className="text-xs font-normal text-slate-400 ml-0.5">/10</span>
                      </div>
                      <div className="text-[11px] text-slate-500 tabular-nums">
                        {h.correctCount}/{h.totalQuestions} câu đúng
                      </div>
                    </div>

                    <button
                      onClick={() => onReviewResult(h)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Xem Lời Giải
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
