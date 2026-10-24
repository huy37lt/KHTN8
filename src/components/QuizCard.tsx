import React from 'react';
import { BookOpen, Play, Trash2, Printer, FlaskConical, Atom, Dna, Trophy, CheckSquare, Clock } from 'lucide-react';
import { QuizSet } from '../types/quiz';

interface QuizCardProps {
  quizSet: QuizSet;
  onStartPractice: (quizSet: QuizSet) => void;
  onStartFullExam: (quizSet: QuizSet) => void;
  onReviewStudy: (quizSet: QuizSet) => void;
  onPrintSet: (quizSet: QuizSet) => void;
  onDeleteSet: (id: string) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  quizSet,
  onStartPractice,
  onStartFullExam,
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
        badge: 'text-sky-800 dark:text-sky-300 bg-sky-100/90 dark:bg-sky-900/60 border border-sky-300/50'
      };
    }
    if (quizSet.subject.includes('Hóa Học')) {
      return {
        icon: FlaskConical,
        color: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60',
        badge: 'text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-900/60 border border-emerald-300/50'
      };
    }
    if (quizSet.subject.includes('Sinh Học')) {
      return {
        icon: Dna,
        color: 'text-teal-600 dark:text-teal-400',
        bg: 'bg-teal-50 dark:bg-teal-950/50 border-teal-200 dark:border-teal-800/60',
        badge: 'text-teal-800 dark:text-teal-300 bg-teal-100/90 dark:bg-teal-900/60 border border-teal-300/50'
      };
    }
    if (quizSet.subject.includes('Toán')) {
      return {
        icon: Atom,
        color: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800/60',
        badge: 'text-blue-800 dark:text-blue-200 bg-blue-100/90 dark:bg-blue-900/60 border border-blue-300/50'
      };
    }
    if (quizSet.subject.includes('Ngữ Văn')) {
      return {
        icon: BookOpen,
        color: 'text-amber-600 dark:text-amber-400',
        bg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/60',
        badge: 'text-amber-900 dark:text-amber-200 bg-amber-100/90 dark:bg-amber-900/60 border border-amber-300/50'
      };
    }
    if (quizSet.subject.includes('Tiếng Anh')) {
      return {
        icon: BookOpen,
        color: 'text-sky-600 dark:text-sky-400',
        bg: 'bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800/60',
        badge: 'text-sky-900 dark:text-sky-200 bg-sky-100/90 dark:bg-sky-900/60 border border-sky-300/50'
      };
    }
    if (quizSet.subject.includes('Lịch Sử')) {
      return {
        icon: BookOpen,
        color: 'text-orange-600 dark:text-orange-400',
        bg: 'bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800/60',
        badge: 'text-orange-900 dark:text-orange-200 bg-orange-100/90 dark:bg-orange-900/60 border border-orange-300/50'
      };
    }
    if (quizSet.subject.includes('Tin Học')) {
      return {
        icon: Atom,
        color: 'text-cyan-600 dark:text-cyan-400',
        bg: 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800/60',
        badge: 'text-cyan-900 dark:text-cyan-200 bg-cyan-100/90 dark:bg-cyan-900/60 border border-cyan-300/50'
      };
    }
    if (quizSet.subject.includes('Công Nghệ')) {
      return {
        icon: FlaskConical,
        color: 'text-amber-700 dark:text-amber-400',
        bg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/60',
        badge: 'text-amber-950 dark:text-amber-200 bg-amber-100/90 dark:bg-amber-900/60 border border-amber-300/50'
      };
    }
    if (quizSet.subject.includes('Giáo Dục Công Dân')) {
      return {
        icon: CheckSquare,
        color: 'text-emerald-700 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60',
        badge: 'text-emerald-900 dark:text-emerald-200 bg-emerald-100/90 dark:bg-emerald-900/60 border border-emerald-300/50'
      };
    }
    if (quizSet.subject.includes('HĐTN')) {
      return {
        icon: Trophy,
        color: 'text-indigo-600 dark:text-indigo-400',
        bg: 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800/60',
        badge: 'text-indigo-900 dark:text-indigo-200 bg-indigo-100/90 dark:bg-indigo-900/60 border border-indigo-300/50'
      };
    }
    // Default fallback
    return {
      icon: BookOpen,
      color: 'text-slate-700 dark:text-slate-300',
      bg: 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800',
      badge: 'text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-300/50'
    };
  };

  const visual = getSubjectVisual();
  const IconComponent = visual.icon;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold tracking-tight ${visual.badge}`}>
              <IconComponent className="w-3.5 h-3.5" />
              <span>{quizSet.subject}</span>
            </span>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
              {quizSet.grade}
            </span>
          </div>

          {quizSet.isDefault && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-md">
              Đề Cương Chuẩn
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Thi Full Bài (Exam Mode 100% Questions) */}
          <button
            onClick={() => onStartFullExam(quizSet)}
            title="Vào phòng thi làm toàn bộ 100% câu hỏi, có đồng hồ đếm ngược và chấm điểm thang 10"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-900 dark:text-amber-100 bg-amber-100/90 hover:bg-amber-200 dark:bg-amber-950/70 dark:hover:bg-amber-900/90 border border-amber-300/80 dark:border-amber-700/80 rounded-xl transition-colors cursor-pointer shadow-2xs"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Thi Full Bài</span>
          </button>

          {/* Practice Button (Immediate / Custom) */}
          <button
            onClick={() => onStartPractice(quizSet)}
            title="Tùy chỉnh số lượng câu hỏi hoặc ôn từng câu biết đáp án ngay"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Luyện Tập</span>
          </button>

          {/* Study Summary Button */}
          {quizSet.summaries && quizSet.summaries.length > 0 && (
            <button
              onClick={() => onReviewStudy(quizSet)}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
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
