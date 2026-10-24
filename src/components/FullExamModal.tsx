import React from 'react';
import { X, Trophy, Clock, CheckCircle2, Award, Zap, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { QuizSet } from '../types/quiz';

interface FullExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  quizSets: QuizSet[];
  onStartExam: (quizSet: QuizSet) => void;
}

export const FullExamModal: React.FC<FullExamModalProps> = ({
  isOpen,
  onClose,
  quizSets,
  onStartExam
}) => {
  if (!isOpen) return null;

  // Filter default/official outline sets
  const officialFullSets = quizSets.filter(s => 
    s.id === 'khtn8-tong-hop-bat-trang' ||
    s.id === 'ta8-u123-full77' ||
    s.id === 'gdcd8-gk1-tracnghiem' ||
    s.id === 'cn8-gk1-tracnghiem' ||
    s.id === 'ls8-gk1-tracnghiem' ||
    s.id === 'tin8-gk1-tracnghiem' ||
    s.id === 'dl8-gk1-tracnghiem' ||
    s.id === 'hdtn8-gk1-tracnghiem' ||
    s.id.includes('gk1')
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-850 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
              <Trophy className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Phòng Thi Thử Toàn Diện (Thi Full Bài)
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/50">
                  Thang Điểm 10
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Thi 100% câu hỏi đề cương THCS Bát Tràng · Đếm ngược thời gian chuẩn · Chấm điểm & Xếp loại học lực
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-white/80 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Exam Rules Strip */}
        <div className="px-6 py-3 bg-amber-500/10 border-b border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Đồng hồ đếm ngược tự động</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Chỉ hiện kết quả khi bấm Nộp Bài</span>
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Phân loại Xuất Sắc / Giỏi / Khá</span>
            </span>
          </div>
        </div>

        {/* Subject Selection Grid */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1 no-scrollbar">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            CHỌN MÔN THI ĐỀ CƯƠNG CHUẨN:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {officialFullSets.map(set => {
              const count = set.questions.length;
              const minutes = count <= 20 ? 25 : count <= 35 ? 45 : count <= 55 ? 60 : 90;

              return (
                <div
                  key={set.id}
                  className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 rounded-xl p-4 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {set.subject}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{minutes} phút</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {set.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Toàn bộ <strong>{count} câu hỏi</strong>
                    </span>

                    <button
                      onClick={() => onStartExam(set)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-2xs transition-colors cursor-pointer"
                    >
                      <span>Vào Thi Ngay</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs text-slate-500">
          <span>* Kết quả thi thử sẽ được lưu tự động vào mục "Lịch Sử Thi"</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
