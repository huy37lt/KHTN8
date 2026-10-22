import React, { useState } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Sparkles, BookOpen, 
  Shuffle, Award, GraduationCap, CheckCircle2, Play, Flame, HelpCircle
} from 'lucide-react';

interface IntroGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartExam: () => void;
}

export const IntroGuideModal: React.FC<IntroGuideModalProps> = ({
  isOpen,
  onClose,
  onStartExam
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      id: 'welcome',
      badge: 'Chào Mừng Các Em Lớp 8B',
      title: 'Ứng Dụng Ôn Thi KHTN 8 - THCS Bát Tràng',
      subtitle: 'Nền tảng số hóa toàn bộ đề cương chính thức Giữa Học Kì I',
      content: [
        'Trọn vẹn 55 câu trắc nghiệm 4 lựa chọn (Vật lý 15 câu, Hóa học 25 câu, Sinh học 15 câu).',
        '30 câu trắc nghiệm Đúng / Sai theo cấu trúc đề thi mới nhất.',
        '30 câu trả lời ngắn & 9 bài tập tự luận có đầy đủ hướng dẫn giải chi tiết.',
        'Sử dụng trực tiếp trên điện thoại và máy tính, không cần tạo tài khoản rườm rà.'
      ],
      icon: GraduationCap,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
    },
    {
      id: 'practice',
      badge: 'Luyện Tập Thông Minh',
      title: 'Hai Chế Độ Học & Xáo Trộn Đề Thi',
      subtitle: 'Không học vẹt, nắm chắc bản chất từng dạng bài',
      content: [
        'Chế độ "Ôn Từng Câu": Làm đến đâu biết ngay Đúng/Sai đến đó kèm bảng giải thích chi tiết.',
        'Chế độ "Thi Thử Bấm Giờ": Đếm ngược thời gian, có phiếu tô câu hỏi trắc nghiệm như trong phòng thi thật.',
        'Tự động xáo trộn ngẫu nhiên thứ tự câu hỏi và 4 phương án A, B, C, D.',
        'Hỗ trợ phím tắt [1, 2, 3, 4] hoặc [A, B, C, D] trên máy tính thao tác cực nhanh.'
      ],
      icon: Shuffle,
      color: 'text-sky-600 dark:text-sky-400',
      bgColor: 'bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800'
    },
    {
      id: 'mistakes',
      badge: 'Bí Kíp Chinh Phục Điểm 10',
      title: 'Sổ Tay Câu Sai (Khắc Phục Lỗ Hổng)',
      subtitle: 'Luyện tập đúng những câu hay nhầm lẫn',
      content: [
        'Hệ thống tự động lưu lại những câu hỏi em trả lời chưa đúng vào "Sổ Câu Sai".',
        'Có nút "Luyện Lại Câu Sai" để em rèn luyện lại riêng những câu bị nhầm.',
        'Khi đã hiểu và trả lời đúng, câu hỏi sẽ được gạch bỏ khỏi sổ sai.',
        'Luyện tập cho đến khi đạt điểm 10 tuyệt đối trước ngày thi chính thức!'
      ],
      icon: Award,
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800'
    },
    {
      id: 'study',
      badge: 'Kho Kiến Thức Toàn Diện',
      title: 'Thẻ Flashcards & Tự Luận Chi Tiết',
      subtitle: 'Đọc lý thuyết trước khi làm bài, tự tin đạt kết quả cao',
      content: [
        'Thẻ ghi nhớ Flashcard 2 mặt: Mặt trước câu hỏi — Mặt sau đáp án và công thức.',
        'Tab "Tự Luận & Ngắn": 39 câu hỏi có sẵn đáp số và các bước giải phương trình hóa học, vật lý.',
        'Có nút "In Đề Thi A4" kèm bảng đáp án nếu em hoặc thầy cô muốn in ra giấy làm bài.',
        'Chế độ tối bảo vệ mắt (Dark mode) và nút đổi cỡ chữ A+ giúp học không mỏi mắt.'
      ],
      icon: BookOpen,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800'
    }
  ];

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      onClose();
      onStartExam();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>HƯỚNG DẪN ÔN THI HIỆU QUẢ · LỚP 8B</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Slide Icon + Badge */}
          <div className="flex items-center gap-3">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs ${slide.bgColor}`}>
              <IconComponent className={`w-7 h-7 ${slide.color}`} />
            </div>
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {slide.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {slide.title}
              </h2>
            </div>
          </div>

          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            {slide.subtitle}
          </p>

          {/* Bullet points list */}
          <div className="space-y-3 bg-slate-50 dark:bg-slate-850/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            {slide.content.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx
                    ? 'w-6 bg-emerald-600'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Chuyển đến slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs text-slate-400 ml-2 tabular-nums">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {currentSlide > 0 && (
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              {currentSlide === slides.length - 1 ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Bắt Đầu Làm Bài Ngay!</span>
                </>
              ) : (
                <>
                  <span>Tiếp Theo</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
