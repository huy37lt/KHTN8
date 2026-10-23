import React, { useState, useRef, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Plus, 
  Moon, 
  Sun, 
  Type, 
  ChevronDown, 
  GraduationCap, 
  FlaskConical, 
  Search, 
  BookOpen, 
  Network, 
  Layers, 
  Flame, 
  FileText, 
  History, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { isSoundEnabled, setSoundEnabled } from '../utils/audio';

export type NavTab = 'library' | 'study' | 'mindmap' | 'flashcards' | 'search' | 'lab' | 'speed' | 'written' | 'mistakes' | 'history';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenImport: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
  mistakesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenImport,
  isDark,
  onToggleDark,
  fontSize,
  onToggleFontSize,
  mistakesCount
}) => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isToolActive = ['mindmap', 'flashcards', 'speed', 'written'].includes(currentTab);

  const activeToolLabel = (() => {
    switch (currentTab) {
      case 'mindmap': return 'Bản Đồ Tư Duy';
      case 'flashcards': return 'Thẻ Nhớ 3D';
      case 'speed': return 'Bí Kíp 5 Phút';
      case 'written': return 'Tự Luận & Ngắn';
      default: return 'Tiện Ích Ôn Luyện';
    }
  })();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          
          {/* Brand / University Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('library')}
              className="text-left group cursor-pointer focus-visible:outline-none flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold shadow-xs border border-slate-700/50 group-hover:bg-emerald-800 transition-colors">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
                    THCS Bát Tràng
                  </span>
                  <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Lớp 8B
                  </span>
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Cổng Học Liệu Số & Ôn Thi Giữa Kì I
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation - Concise, balanced, university-style */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            {/* 1. Kho Đề */}
            <button
              onClick={() => onSelectTab('library')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'library'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Kho Đề Cương</span>
            </button>

            {/* 2. Phòng Thí Nghiệm Ảo */}
            <button
              onClick={() => onSelectTab('lab')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'lab'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-700'
                  : 'hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 font-semibold'
              }`}
            >
              <FlaskConical className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Phòng Thí Nghiệm Ảo</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-black uppercase bg-emerald-600 text-white tracking-wider">
                Mới
              </span>
            </button>

            {/* 3. Tra Cứu Nhanh */}
            <button
              onClick={() => onSelectTab('search')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'search'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Tra Cứu Đáp Án</span>
            </button>

            {/* 4. Dropdown: Tiện Ích Ôn Luyện */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isToolActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 font-bold'
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
                aria-expanded={toolsDropdownOpen}
              >
                <span>{activeToolLabel}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute top-full right-0 sm:left-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1">
                    Công Cụ Học Tập Thông Minh
                  </div>
                  
                  {/* Item 1: Mindmap */}
                  <button
                    onClick={() => {
                      onSelectTab('mindmap');
                      setToolsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg flex items-start gap-2.5 transition-colors cursor-pointer ${
                      currentTab === 'mindmap'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 shrink-0 mt-0.5">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Bản Đồ Tư Duy (Mindmap)</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Hệ thống hóa kiến thức 9 môn học</div>
                    </div>
                  </button>

                  {/* Item 2: Flashcards 3D */}
                  <button
                    onClick={() => {
                      onSelectTab('flashcards');
                      setToolsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg flex items-start gap-2.5 transition-colors cursor-pointer ${
                      currentTab === 'flashcards'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-1.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Thẻ Ghi Nhớ 3D (Active Recall)</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Lật thẻ ôn phản xạ nhanh</div>
                    </div>
                  </button>

                  {/* Item 3: Bí kíp 5 phút */}
                  <button
                    onClick={() => {
                      onSelectTab('speed');
                      setToolsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg flex items-start gap-2.5 transition-colors cursor-pointer ${
                      currentTab === 'speed'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-1.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 shrink-0 mt-0.5">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Bí Kíp 5 Phút (Bẫy Đề Thi)</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Công thức cốt lõi & lỗi sai hay gặp</div>
                    </div>
                  </button>

                  {/* Item 4: Tự luận */}
                  <button
                    onClick={() => {
                      onSelectTab('written');
                      setToolsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg flex items-start gap-2.5 transition-colors cursor-pointer ${
                      currentTab === 'written'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Tự Luận & Bài Tập Ngắn (60 Câu)</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Bài toán định lượng & câu hỏi thực tế</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 5. Sổ Câu Sai */}
            <button
              onClick={() => onSelectTab('mistakes')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'mistakes'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-slate-500" />
              <span>Sổ Câu Sai</span>
              {mistakesCount > 0 && (
                <span className="text-[11px] bg-rose-500 text-white font-bold px-1.5 py-0.2 rounded-full tabular-nums">
                  {mistakesCount}
                </span>
              )}
            </button>

            {/* 6. Lịch Sử */}
            <button
              onClick={() => onSelectTab('history')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'history'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <History className="w-4 h-4 text-slate-500" />
              <span>Lịch Sử Thi</span>
            </button>
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Font size toggle */}
            <button
              onClick={onToggleFontSize}
              title={`Cỡ chữ: ${fontSize === 'large' ? 'Lớn (Đang bật)' : 'Chuẩn'}`}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Đổi cỡ chữ"
            >
              <Type className={`w-4 h-4 ${fontSize === 'large' ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
            </button>

            {/* Sound toggle */}
            <button
              onClick={handleToggleSound}
              title={soundOn ? 'Âm thanh: Bật' : 'Âm thanh: Tắt'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Bật tắt âm thanh"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              title={isDark ? 'Chế độ Sáng' : 'Chế độ Tối'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Chuyển chế độ sáng tối"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Nhập đề cương */}
            <button
              onClick={onOpenImport}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Thêm Đề Mới</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar py-2.5 border-t border-slate-100 dark:border-slate-800 text-xs font-medium whitespace-nowrap">
          <button
            onClick={() => onSelectTab('library')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'library' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Kho Đề
          </button>
          <button
            onClick={() => onSelectTab('lab')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              currentTab === 'lab' ? 'bg-emerald-700 text-white font-bold' : 'text-emerald-700 dark:text-emerald-400 font-semibold'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Thí Nghiệm Ảo</span>
          </button>
          <button
            onClick={() => onSelectTab('search')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'search' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            🔍 Tra Cứu
          </button>
          <button
            onClick={() => onSelectTab('mindmap')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'mindmap' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Sơ Đồ Tư Duy
          </button>
          <button
            onClick={() => onSelectTab('flashcards')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'flashcards' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Thẻ Nhớ 3D
          </button>
          <button
            onClick={() => onSelectTab('speed')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'speed' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Bí Kíp 5p
          </button>
          <button
            onClick={() => onSelectTab('written')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'written' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Tự Luận
          </button>
          <button
            onClick={() => onSelectTab('mistakes')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              currentTab === 'mistakes' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>Sổ Sai</span>
            {mistakesCount > 0 && (
              <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.2 rounded-full font-bold">
                {mistakesCount}
              </span>
            )}
          </button>
          <button
            onClick={() => onSelectTab('history')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'history' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Lịch Sử
          </button>
        </div>
      </div>
    </header>
  );
};
