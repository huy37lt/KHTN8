import React from 'react';
import { BookOpen, Play, Trash2, Printer, FlaskConical, Atom, Dna, Trophy, CheckSquare } from 'lucide-react';
import { QuizSet } from '../types/quiz';

interface QuizCardProps {
  quizSet: QuizSet;
  onStartPractice: (quizSet: QuizSet) => void;
  onReviewStudy: (quizSet: QuizSet) => void;
  onPrintSet: (quizSet: QuizSet) => void;
  onDeleteSet: (id: string) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  quizSet,
  onStartPractice,
  onReviewStudy,
  onPrintSet,
  onDeleteSet
}) => {
  // Determine subject visual theme
  const getSubjectVisual = () => {
    if (quizSet.subject.includes('Vật Lý')) {
      return {
        icon: Atom,
        color: 'text-sky-600 dark:text-sky-400',
        bg: 'bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800/60',
        badge: 'text-sky-800 dark:text-sky-300 bg-sky-100/70 dark:bg-sky-900/40'
      };
    }
    if (quizSet.subject.includes('Hóa Học')) {
      return {
        icon: FlaskConical,
        color: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60',
        badge: 'text-emerald-800 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-900/40'
      };
    }
    if (quizSet.subject.includes('Sinh Học')) {
      return {
        icon: Dna,
        color: 'text-teal-600 dark:text-teal-400',
        bg: 'bg-teal-50 dark:bg-teal-950/50 border-teal-200 dark:border-teal-800/60',
        badge: 'text-teal-800 dark:text-teal-300 bg-teal-100/70 dark:bg-teal-900/40'
      };
    }
    if (quizSet.subject.includes('Đúng / Sai')) {
      return {
        icon: CheckSquare,
        color: 'text-purple-600 dark:text-purple-400',
        bg: 'bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800/60',
        badge: 'text-purple-800 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/40'
      };
    }
    return {
      icon: Trophy,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/60',
      badge: 'text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-900/40'
    };
  };

  const visual = getSubjectVisual();
  const IconComponent = visual.icon;

  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Header Icon + Subject Badges */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${visual.bg}`}>
            <IconComponent className={`w-5 h-5 ${visual.color}`} />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className={`px-2.5 py-0.5 rounded-full font-bold ${visual.badge}`}>
              {quizSet.subject}
            </span>
            <span className="text-slate-400 font-medium">
              {quizSet.grade}
            </span>
          </div>
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {quizSet.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
          {quizSet.description || 'Bộ đề cương ôn tập trọng tâm, rèn luyện kỹ năng và phản xạ làm bài trắc nghiệm.'}
        </p>

        {/* Stats strip */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-900 dark:text-white tabular-nums">
            {quizSet.questions.length} câu trắc nghiệm
          </span>
          {quizSet.summaries && quizSet.summaries.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{quizSet.summaries.length} phần lý thuyết</span>
            </>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          {/* Practice Button */}
          <button
            onClick={() => onStartPractice(quizSet)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Luyện Tập</span>
          </button>

          {/* Study Summary Button */}
          {quizSet.summaries && quizSet.summaries.length > 0 && (
            <button
              onClick={() => onReviewStudy(quizSet)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span>Ôn Lý Thuyết</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1">
          {/* Print/Export */}
          <button
            onClick={() => onPrintSet(quizSet)}
            title="In đề thi ra giấy A4"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Delete only if custom set created by user, never delete official school sets */}
          {!quizSet.isDefault && (
            <button
              onClick={() => {
                if (window.confirm(`Bạn có chắc muốn xóa bộ đề "${quizSet.title}" không?`)) {
                  onDeleteSet(quizSet.id);
                }
              }}
              title="Xóa bộ đề do bạn tự tạo"
              className="p-2 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
