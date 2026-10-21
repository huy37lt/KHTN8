import React, { useState, useEffect, useCallback, useId } from 'react';
import { 
  ArrowLeft, ArrowRight, Flag, CheckCircle2, XCircle, 
  Clock, AlertCircle, Sparkles, Send, RotateCcw, HelpCircle
} from 'lucide-react';
import { Question, PracticeConfig, ExamResult, QuizSet } from '../types/quiz';
import { playSound } from '../utils/audio';
import { recordMistake, resolveMistake } from '../utils/storage';

interface PracticeSessionViewProps {
  quizSet: QuizSet;
  questions: Question[];
  config: PracticeConfig;
  fontSize: 'normal' | 'large';
  onExit: () => void;
  onFinish: (result: ExamResult) => void;
}

export const PracticeSessionView: React.FC<PracticeSessionViewProps> = ({
  quizSet,
  questions,
  config,
  fontSize,
  onExit,
  onFinish
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [startTime] = useState(Date.now());
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(
    config.timeLimitMinutes > 0 ? config.timeLimitMinutes * 60 : 0
  );
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const currentQ = questions[currentIndex];
  const totalQ = questions.length;
  const isExam = config.mode === 'exam';

  // Timer countdown for exam mode
  useEffect(() => {
    if (!isExam || config.timeLimitMinutes <= 0) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExam, config.timeLimitMinutes]);

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ) return;
    
    // In immediate mode, if already answered, don't allow changing to learn from mistake
    if (!isExam && userAnswers[currentQ.id] !== undefined) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));

    if (!isExam) {
      const isCorrect = optionIndex === currentQ.correctAnswer;
      if (isCorrect) {
        playSound('correct');
        resolveMistake(currentQ.id);
      } else {
        playSound('wrong');
        recordMistake(currentQ, quizSet.id, quizSet.title);
      }
    } else {
      playSound('click');
    }
  };

  const handleToggleFlag = (qId: string) => {
    setFlaggedIds(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const handleSubmitExam = useCallback(() => {
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;

    questions.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected !== undefined && selected === q.correctAnswer) {
        correctCount++;
        resolveMistake(q.id);
      } else if (selected !== undefined && selected !== q.correctAnswer) {
        recordMistake(q, quizSet.id, quizSet.title);
      }
    });

    const elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
    const score = Number(((correctCount / totalQ) * 10).toFixed(1));

    const result: ExamResult = {
      quizSetId: quizSet.id,
      quizTitle: quizSet.title,
      mode: config.mode,
      questions,
      userAnswers,
      flaggedQuestionIds: flaggedIds,
      score,
      correctCount,
      totalQuestions: totalQ,
      durationSeconds: elapsedSeconds,
      date: new Date().toISOString()
    };

    onFinish(result);
  }, [questions, userAnswers, flaggedIds, quizSet, config.mode, startTime, totalQ, onFinish]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' && currentIndex < totalQ - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        if (currentQ && optIdx < currentQ.options.length) {
          handleSelectOption(optIdx);
        }
      } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        const map: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
        const optIdx = map[e.key.toLowerCase()];
        if (currentQ && optIdx < currentQ.options.length) {
          handleSelectOption(optIdx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalQ, currentQ, userAnswers, isExam]);

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQ) * 100);
  const currentAnswer = userAnswers[currentQ?.id];
  const isCurrentAnswered = currentAnswer !== undefined;

  return (
    <div className={`min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-6 px-4 sm:px-6 lg:px-8 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Control Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Thoát</span>
            </button>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
              {quizSet.title}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Exam Countdown Timer */}
            {isExam && config.timeLimitMinutes > 0 && (
              <div className={`flex items-center gap-1.5 font-mono font-bold text-sm tabular-nums px-3 py-1 rounded-lg ${
                timeRemainingSeconds < 120 
                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 animate-pulse'
                  : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeRemainingSeconds)}</span>
              </div>
            )}

            {/* Progress counter */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Đã làm: <span className="font-bold text-slate-900 dark:text-white tabular-nums">{answeredCount}</span>/{totalQ} câu ({progressPercent}%)
            </div>

            {/* Submit Button */}
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp Bài</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-emerald-600 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Main Test Taking Area: 2-Zone Grid (Stage + Question Palette) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* Zone 1: Question Stage (Takes 3 columns on desktop) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
              
              {/* Question Header & Flag Toggle */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md">
                    Câu {currentIndex + 1} / {totalQ}
                  </span>
                  {currentQ.topic && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      · {currentQ.topic}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleToggleFlag(currentQ.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    flaggedIds.includes(currentQ.id)
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 ring-1 ring-amber-400'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title="Đánh dấu để xem lại câu này trước khi nộp"
                >
                  <Flag className={`w-3.5 h-3.5 ${flaggedIds.includes(currentQ.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
                  <span>{flaggedIds.includes(currentQ.id) ? 'Đã ghim' : 'Ghim xem lại'}</span>
                </button>
              </div>

              {/* Question Content */}
              <div className="text-slate-900 dark:text-white font-semibold leading-relaxed tracking-normal mb-8 select-text">
                {currentQ.content}
              </div>

              {/* Options List */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  const isSelected = currentAnswer === idx;
                  const isCorrect = idx === currentQ.correctAnswer;

                  // Immediate feedback styling
                  let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200';
                  let badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

                  if (isExam) {
                    if (isSelected) {
                      optionStyle = 'border-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-600';
                      badgeStyle = 'bg-emerald-600 text-white font-bold';
                    }
                  } else if (isCurrentAnswered) {
                    if (isCorrect) {
                      optionStyle = 'border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-600';
                      badgeStyle = 'bg-emerald-600 text-white font-bold';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100 ring-1 ring-rose-500';
                      badgeStyle = 'bg-rose-600 text-white font-bold';
                    } else {
                      optionStyle = 'opacity-60 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={!isExam && isCurrentAnswered}
                      className={`w-full min-h-[50px] p-4 rounded-xl border text-left transition-all duration-150 flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${optionStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${badgeStyle}`}>
                        {letter}
                      </span>
                      <span className="flex-1 pt-0.5 leading-normal">
                        {opt}
                      </span>
                      {!isExam && isCurrentAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {!isExam && isCurrentAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Mode Explanation Box */}
              {!isExam && isCurrentAnswered && (
                <div className={`mt-6 p-5 rounded-xl border animate-in fade-in duration-200 ${
                  currentAnswer === currentQ.correctAnswer
                    ? 'bg-emerald-50/70 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/60'
                    : 'bg-amber-50/70 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/60'
                }`}>
                  <div className="flex items-center gap-2 mb-2 font-bold text-sm text-slate-900 dark:text-white">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>
                      {currentAnswer === currentQ.correctAnswer
                        ? 'Chính xác! Lời giải chi tiết:'
                        : `Chưa đúng! Đáp án đúng là: ${String.fromCharCode(65 + currentQ.correctAnswer)}`}
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentQ.explanation || 'Hãy ghi nhớ câu trả lời chính xác này cho các lần thi thử tiếp theo nhé!'}
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Câu Trước</span>
                </button>

                <div className="text-xs text-slate-400 hidden sm:block">
                  Phím tắt: [1, 2, 3, 4] hoặc [A, B, C, D] · Phím mũi tên [← / →]
                </div>

                {currentIndex < totalQ - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(prev => Math.min(totalQ - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Câu Tiếp Theo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSubmitConfirm(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Hoàn Thành & Nộp Bài</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Zone 2: Question Palette / Phiếu trả lời trắc nghiệm (1 column) */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Bảng Câu Hỏi
                </h4>
                <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                  {answeredCount}/{totalQ}
                </span>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-600 inline-block" />
                  <span>Đã làm</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded border border-slate-300 dark:border-slate-600 inline-block" />
                  <span>Chưa làm</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-amber-400 inline-block" />
                  <span>Đã ghim</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded ring-2 ring-slate-900 dark:ring-white inline-block" />
                  <span>Đang xem</span>
                </div>
              </div>

              {/* Grid of Questions */}
              <div className="grid grid-cols-5 gap-2 max-h-[360px] overflow-y-auto pr-1">
                {questions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isFlagged = flaggedIds.includes(q.id);
                  const isCurrent = idx === currentIndex;

                  let bg = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200';
                  if (isAnswered) {
                    bg = 'bg-emerald-600 text-white font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative h-9 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${bg} ${
                        isCurrent ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-2 dark:ring-offset-slate-900' : ''
                      }`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white dark:border-slate-900" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quick Submit CTA */}
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="w-full mt-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Nộp Bài Thi
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-xl animate-in fade-in zoom-in-95">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Dừng Luyện Tập?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Tiến trình làm bài hiện tại chưa được lưu vào bảng điểm. Bạn có chắc muốn quay lại không?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Tiếp Tục Làm
              </button>
              <button
                onClick={onExit}
                className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg cursor-pointer"
              >
                Rời Khỏi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-xl animate-in fade-in zoom-in-95">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Xác Nhận Nộp Bài
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mb-6">
              <p>Bạn đã hoàn thành <strong className="text-slate-900 dark:text-white tabular-nums">{answeredCount}/{totalQ}</strong> câu hỏi.</p>
              {answeredCount < totalQ && (
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-lg text-amber-800 dark:text-amber-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Còn <strong>{totalQ - answeredCount}</strong> câu chưa có câu trả lời. Bạn có muốn nộp bài luôn không?
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Làm Tiếp
              </button>
              <button
                onClick={() => {
                  setShowSubmitConfirm(false);
                  handleSubmitExam();
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg cursor-pointer shadow-xs"
              >
                Đồng Ý Nộp Bài
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
