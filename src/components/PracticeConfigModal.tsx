import React, { useState } from 'react';
import { X, Shuffle, Clock, CheckCircle2, Award, Zap } from 'lucide-react';
import { QuizSet, PracticeConfig } from '../types/quiz';

interface PracticeConfigModalProps {
  quizSet: QuizSet;
  isOpen: boolean;
  onClose: () => void;
  onStart: (config: PracticeConfig) => void;
}

export const PracticeConfigModal: React.FC<PracticeConfigModalProps> = ({
  quizSet,
  isOpen,
  onClose,
  onStart
}) => {
  const totalAvailable = quizSet.questions.length;
  const [mode, setMode] = useState<'immediate' | 'exam'>('immediate');
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);
  const [questionCount, setQuestionCount] = useState(Math.min(10, totalAvailable));
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(15);

  if (!isOpen) return null;

  const countOptions = [5, 10, 15, 20, totalAvailable].filter((c, i, arr) => c <= totalAvailable && arr.indexOf(c) === i);
  if (!countOptions.includes(totalAvailable)) countOptions.push(totalAvailable);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart({
      mode,
      questionCount: Math.min(questionCount, totalAvailable),
      shuffleQuestions,
      shuffleOptions,
      timeLimitMinutes: mode === 'exam' ? timeLimitMinutes : 0
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Thiết Lập Luyện Tập</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-sm">
              {quizSet.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Mode Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
              Chọn Chế Độ Luyện Tập
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMode('immediate')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  mode === 'immediate'
                    ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-600'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
                    <Zap className="w-4 h-4" />
                  </div>
                  {mode === 'immediate' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Ôn Từng Câu</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Biết đáp án & lời giải ngay sau khi chọn
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMode('exam')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  mode === 'exam'
                    ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-600'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-indigo-700 dark:text-indigo-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  {mode === 'exam' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Thi Thử Tính Giờ</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Đếm ngược thời gian, nộp bài mới chấm điểm
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Question Count Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Số Lượng Câu Hỏi
              </label>
              <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                Tổng có sẵn: {totalAvailable} câu
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {countOptions.map(cnt => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setQuestionCount(cnt)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    questionCount === cnt
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {cnt === totalAvailable ? `Tất cả (${cnt} câu)` : `${cnt} câu`}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Time Limit (if exam mode) */}
          {mode === 'exam' && (
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Thời Gian Làm Bài
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 15, 30, 45].map(min => (
                  <button
                    key={min}
                    type="button"
                    onClick={() => setTimeLimitMinutes(min)}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                      timeLimitMinutes === min
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {min} phút
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Randomization switches */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 font-medium">
                <Shuffle className="w-4 h-4 text-emerald-600" />
                <span>Xáo trộn ngẫu nhiên thứ tự câu hỏi</span>
              </div>
              <button
                type="button"
                onClick={() => setShuffleQuestions(!shuffleQuestions)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  shuffleQuestions ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    shuffleQuestions ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 font-medium">
                <Shuffle className="w-4 h-4 text-indigo-600" />
                <span>Xáo trộn thứ tự các đáp án (A, B, C, D)</span>
              </div>
              <button
                type="button"
                onClick={() => setShuffleOptions(!shuffleOptions)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  shuffleOptions ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    shuffleOptions ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Bắt Đầu Làm Bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
