import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Check, RotateCw, Play, ChevronLeft, 
  ChevronRight, Lightbulb, BookmarkCheck, ArrowLeft 
} from 'lucide-react';
import { QuizSet, StudySummary } from '../types/quiz';
import { playSound } from '../utils/audio';

interface StudyReviewViewProps {
  quizSets: QuizSet[];
  initialSetId?: string;
  onStartPractice: (quizSet: QuizSet) => void;
  onBackToLibrary: () => void;
}

export const StudyReviewView: React.FC<StudyReviewViewProps> = ({
  quizSets,
  initialSetId,
  onStartPractice,
  onBackToLibrary
}) => {
  const [selectedSetId, setSelectedSetId] = useState<string>(
    initialSetId || (quizSets[0] ? quizSets[0].id : '')
  );
  const [viewMode, setViewMode] = useState<'notebook' | 'flashcard'>('notebook');
  
  // Flashcard states
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCardIds, setMasteredCardIds] = useState<string[]>([]);

  const currentSet = quizSets.find(s => s.id === selectedSetId) || quizSets[0];
  const summaries = currentSet?.summaries || [];

  // Generate flashcards from questions and summaries
  const flashcards = React.useMemo(() => {
    if (!currentSet) return [];
    const cards: { id: string; front: string; back: string; topic: string; formula?: string }[] = [];

    // From summaries
    summaries.forEach((s, idx) => {
      cards.push({
        id: `card-s-${idx}`,
        front: s.title,
        back: s.keyPoints.join('\n• '),
        topic: 'Lý thuyết trọng tâm',
        formula: s.formulaOrRule
      });
    });

    // From questions (Question on front, Correct answer + Explanation on back)
    currentSet.questions.forEach((q, idx) => {
      const correctText = q.options[q.correctAnswer];
      cards.push({
        id: `card-q-${q.id}`,
        front: q.content,
        back: `Đáp án: ${correctText}\n\n${q.explanation || ''}`.trim(),
        topic: q.topic || 'Câu hỏi trọng điểm'
      });
    });

    return cards;
  }, [currentSet, summaries]);

  const currentCard = flashcards[cardIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex(prev => Math.min(flashcards.length - 1, prev + 1));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex(prev => Math.max(0, prev - 1));
  };

  const handleToggleMastered = (cardId: string) => {
    setMasteredCardIds(prev => {
      const next = prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId];
      if (!prev.includes(cardId)) {
        playSound('correct');
      }
      return next;
    });
  };

  if (!currentSet) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-slate-500">Chưa có đề cương nào để ôn tập.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Navigation & Subject Select Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kho Đề</span>
            </button>

            {/* Set selector dropdown */}
            <select
              value={selectedSetId}
              onChange={(e) => {
                setSelectedSetId(e.target.value);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
            >
              {quizSets.map(s => (
                <option key={s.id} value={s.id}>
                  {s.subject} · {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode switch: Notebook vs Flashcard */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <button
                type="button"
                onClick={() => setViewMode('notebook')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  viewMode === 'notebook'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Sổ Tay Lý Thuyết
              </button>
              <button
                type="button"
                onClick={() => setViewMode('flashcard')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  viewMode === 'flashcard'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Thẻ Ghi Nhớ ({flashcards.length})
              </button>
            </div>

            {/* Jump to practice */}
            <button
              onClick={() => onStartPractice(currentSet)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Vào Làm Bài</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Notebook / Sổ Tay Tóm Tắt */}
        {viewMode === 'notebook' && (
          <div className="space-y-6">
            {summaries.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-slate-500">
                <BookOpen className="w-10 h-10 mx-auto text-slate-400 mb-2" />
                <p className="font-semibold text-slate-700 dark:text-slate-300">Chưa có phần tóm tắt lý thuyết cho bộ đề này.</p>
                <p className="text-xs mt-1">Bạn có thể chuyển sang tab Thẻ Ghi Nhớ để ôn luyện nhanh qua các câu hỏi!</p>
              </div>
            ) : (
              summaries.map((s, idx) => (
                <div
                  key={s.id || idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4"
                >
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md shrink-0">
                      Chủ đề {idx + 1}
                    </span>
                  </div>

                  {/* Key bullet points */}
                  <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {s.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Formula / Rule Box */}
                  {s.formulaOrRule && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Công Thức / Quy Tắc Cốt Lõi
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-300 select-all">
                        {s.formulaOrRule}
                      </div>
                    </div>
                  )}

                  {/* Mnemonics / Mẹo ghi nhớ */}
                  {s.mnemonics && (
                    <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                      <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold mr-1">Mẹo làm bài nhanh:</span>
                        {s.mnemonics}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* View Mode 2: Flashcards / Thẻ Ghi Nhớ */}
        {viewMode === 'flashcard' && flashcards.length > 0 && currentCard && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Card counter & progress */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white tabular-nums">
                Thẻ {cardIndex + 1} / {flashcards.length}
              </span>
              <span>
                Đã thuộc: <strong className="text-emerald-600 tabular-nums">{masteredCardIds.length}</strong> thẻ
              </span>
            </div>

            {/* Interactive Flipped Card */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[300px] sm:min-h-[340px] bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-3xl p-8 sm:p-10 shadow-md cursor-pointer flex flex-col justify-between transition-all select-none relative group"
            >
              {/* Card Header tag */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {currentCard.topic}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{isFlipped ? 'Mặt sau (Đáp án/Giải thích)' : 'Nhấp để lật xem đáp án'}</span>
                </span>
              </div>

              {/* Card Main Body */}
              <div className="my-6">
                {!isFlipped ? (
                  <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    {currentCard.front}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-base sm:text-lg font-semibold text-emerald-800 dark:text-emerald-300 whitespace-pre-line leading-relaxed">
                      {currentCard.back}
                    </div>
                    {currentCard.formula && (
                      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                        {currentCard.formula}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer status */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span>{isFlipped ? 'Nhấp lần nữa để lật lại' : 'Mặt trước (Câu hỏi / Khái niệm)'}</span>
                {masteredCardIds.includes(currentCard.id) && (
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <BookmarkCheck className="w-4 h-4" /> Đã thuộc
                  </span>
                )}
              </div>
            </div>

            {/* Card Controls */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevCard}
                disabled={cardIndex === 0}
                className="inline-flex items-center gap-1 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </button>

              <button
                type="button"
                onClick={() => handleToggleMastered(currentCard.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  masteredCardIds.includes(currentCard.id)
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{masteredCardIds.includes(currentCard.id) ? 'Đã Ghi Nhớ' : 'Đánh Dấu Đã Thuộc'}</span>
              </button>

              <button
                type="button"
                onClick={handleNextCard}
                disabled={cardIndex === flashcards.length - 1}
                className="inline-flex items-center gap-1 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl disabled:opacity-40 cursor-pointer"
              >
                <span>Tiếp Theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
