import React, { useState, useMemo } from 'react';
import { FLASHCARDS_DATA, Flashcard } from '../data/flashcardData';
import { Sparkles, RotateCw, CheckCircle2, ChevronLeft, ChevronRight, Shuffle, Undo2, Award, Lightbulb } from 'lucide-react';
import { playSound } from '../utils/audio';

interface FlashcardsViewProps {
  fontSize: 'normal' | 'large';
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({ fontSize }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [reviewIds, setReviewIds] = useState<Set<string>>(new Set());

  const subjects = useMemo(() => {
    const list = Array.from(new Set(FLASHCARDS_DATA.map((f) => f.subject)));
    return ['all', ...list];
  }, []);

  const filteredCards = useMemo(() => {
    if (selectedSubject === 'all') return FLASHCARDS_DATA;
    return FLASHCARDS_DATA.filter((f) => f.subject === selectedSubject);
  }, [selectedSubject]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const markMastered = () => {
    if (!currentCard) return;
    playSound('correct');
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    setReviewIds((prev) => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    handleNext();
  };

  const markNeedsReview = () => {
    if (!currentCard) return;
    setReviewIds((prev) => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    setMasteredIds((prev) => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    handleNext();
  };

  const resetProgress = () => {
    setMasteredIds(new Set());
    setReviewIds(new Set());
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const progressPercent = Math.round((masteredIds.size / filteredCards.length) * 100);

  return (
    <div className={`space-y-6 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-amber-100 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Phương Pháp Active Recall & Spaced Repetition
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            🃏 Thẻ Ghi Nhớ 3D - Lật Thẻ Thuộc Bài
          </h2>
          <p className="mt-1 text-amber-100 text-sm sm:text-base leading-relaxed">
            Khoa học chứng minh: Tự thách thức bộ não đoán đáp án trước khi lật thẻ giúp ghi nhớ công thức và khái niệm lâu gấp 3 lần so với việc đọc thụ động.
          </p>
        </div>
      </div>

      {/* Filter Tabs by Subject */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Chọn môn học để lật thẻ:
          </span>
          <button
            onClick={resetProgress}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
          >
            <Undo2 className="w-3.5 h-3.5" />
            Đặt lại tiến độ
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {subjects.map((sub) => {
            const active = selectedSubject === sub;
            return (
              <button
                key={sub}
                onClick={() => {
                  setSelectedSubject(sub);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-4 py-2 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer border ${
                  active
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sub === 'all' ? 'Tất cả các môn' : sub}
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap">
            Đã thuộc: <strong className="text-emerald-600 dark:text-emerald-400">{masteredIds.size}</strong>/{filteredCards.length} ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* Main Flashcard Container */}
      {currentCard ? (
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Card meta */}
          <div className="flex items-center justify-between w-full mb-3 px-2 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              {currentCard.subject} • {currentCard.topic}
            </span>
            <span>
              Thẻ {currentIndex + 1} / {filteredCards.length}
            </span>
          </div>

          {/* 3D Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[320px] sm:min-h-[360px] cursor-pointer perspective-1000 select-none"
          >
            <div
              className={`w-full h-full min-h-[320px] sm:min-h-[360px] rounded-3xl p-8 sm:p-10 border-2 transition-all duration-500 flex flex-col justify-between shadow-xl relative ${
                isFlipped
                  ? 'bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-slate-900 dark:via-emerald-950/30 dark:to-slate-900 border-emerald-400 dark:border-emerald-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500'
              }`}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wider font-extrabold text-slate-400">
                <span>{isFlipped ? 'MẶT SAU (ĐÁP ÁN CỐT LÕI)' : 'MẶT TRƯỚC (CÂU HỎI THỬ THÁCH)'}</span>
                <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <RotateCw className="w-3.5 h-3.5" />
                  Bấm để lật
                </span>
              </div>

              {/* Card Body */}
              <div className="my-auto py-6 text-center">
                {!isFlipped ? (
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
                    {currentCard.front}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-lg sm:text-xl font-bold text-emerald-950 dark:text-emerald-100 whitespace-pre-line leading-relaxed text-left sm:text-center">
                      {currentCard.back}
                    </div>

                    {currentCard.mnemonic && (
                      <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-semibold flex items-center gap-2 text-left">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Mẹo nhớ nhanh: {currentCard.mnemonic}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer prompt */}
              <div className="text-center text-xs text-slate-400 italic">
                {!isFlipped ? '💡 Hãy tự nhẩm câu trả lời trong đầu trước khi lật nhé!' : '✨ Bạn có nhớ chính xác câu trả lời không? Hãy tự đánh giá bên dưới.'}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm cursor-pointer"
                title="Thẻ trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleShuffle}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm cursor-pointer"
                title="Xáo trộn ngẫu nhiên"
              >
                <Shuffle className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm cursor-pointer"
                title="Thẻ tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Self-Rating buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={markNeedsReview}
                className="px-4 py-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/80 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/80 font-bold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                Cần ôn lại
              </button>
              <button
                onClick={markMastered}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                Đã thuộc!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          Không có thẻ ghi nhớ nào trong mục này.
        </div>
      )}
    </div>
  );
};
