import React, { useState } from 'react';
import { X, Printer, FileText } from 'lucide-react';
import { QuizSet } from '../types/quiz';

interface PrintSheetModalProps {
  quizSet: QuizSet | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PrintSheetModal: React.FC<PrintSheetModalProps> = ({
  quizSet,
  isOpen,
  onClose
}) => {
  const [includeAnswers, setIncludeAnswers] = useState(true);
  const [includeExplanations, setIncludeExplanations] = useState(true);

  if (!isOpen || !quizSet) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between no-print shrink-0">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              In Đề Kiểm Tra & Phiếu Ôn Tập
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Định dạng chuẩn trang in A4 cho giáo viên phát cho học sinh làm bài trên giấy
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Toolbar */}
        <div className="px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between gap-4 flex-wrap text-xs no-print shrink-0">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 font-medium">
              <input
                type="checkbox"
                checked={includeAnswers}
                onChange={(e) => setIncludeAnswers(e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span>In kèm Bảng Đáp Án</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 font-medium">
              <input
                type="checkbox"
                checked={includeExplanations}
                onChange={(e) => setIncludeExplanations(e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span>In kèm Lời Giải Chi Tiết</span>
            </label>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>In Ra Giấy / Lưu PDF</span>
          </button>
        </div>

        {/* Printable Paper Preview */}
        <div className="p-8 overflow-y-auto space-y-6 flex-1 bg-white text-black font-sans leading-relaxed">
          
          {/* Official Exam Header */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-black text-xs sm:text-sm">
            <div>
              <div className="font-bold uppercase tracking-wider">TRƯỜNG THCS BÁT TRÀNG</div>
              <div>Bộ môn: <strong>{quizSet.subject}</strong> - {quizSet.grade}</div>
              <div className="text-slate-600">Đề ôn tập: {quizSet.title}</div>
            </div>
            <div className="text-right space-y-1">
              <div>Họ và tên học sinh: ................................................................</div>
              <div>Lớp: <strong>8B</strong> · Ngày làm bài: ....................</div>
              <div>Điểm số: .................... / 10 (Lời phê: .................)</div>
            </div>
          </div>

          {/* Test Questions */}
          <div className="space-y-5 pt-2">
            <div className="font-bold text-sm uppercase text-center tracking-wide">
              PHẦN TRẮC NGHIỆM KHÁCH QUAN ({quizSet.questions.length} CÂU)
            </div>

            {quizSet.questions.map((q, idx) => (
              <div key={q.id} className="text-xs sm:text-sm space-y-2">
                <div className="font-bold">
                  Câu {idx + 1}: <span className="font-normal">{q.content}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4">
                  {q.options.map((opt, oIdx) => {
                    const letter = String.fromCharCode(65 + oIdx);
                    return (
                      <div key={oIdx} className="flex items-start gap-1">
                        <strong className="shrink-0">{letter}.</strong>
                        <span>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Answer Key Grid */}
          {includeAnswers && (
            <div className="pt-8 border-t-2 border-black space-y-3">
              <div className="font-bold text-sm uppercase text-center tracking-wide">
                BẢNG ĐÁP ÁN ĐỀ THI
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center text-xs">
                {quizSet.questions.map((q, idx) => (
                  <div key={q.id} className="border border-black p-1">
                    <div className="font-bold text-[10px] text-slate-500 border-b border-black">
                      {idx + 1}
                    </div>
                    <div className="font-extrabold text-sm py-0.5">
                      {String.fromCharCode(65 + q.correctAnswer)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Explanations Section */}
          {includeExplanations && (
            <div className="pt-6 border-t border-slate-300 space-y-3">
              <div className="font-bold text-sm uppercase tracking-wide">
                HƯỚNG DẪN GIẢI CHI TIẾT
              </div>
              <div className="space-y-3 text-xs leading-relaxed">
                {quizSet.questions.map((q, idx) => (
                  <div key={q.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Câu {idx + 1} ({String.fromCharCode(65 + q.correctAnswer)}):</strong>{' '}
                    <span>{q.explanation || 'Đáp án đúng: ' + q.options[q.correctAnswer]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
