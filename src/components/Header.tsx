import React from 'react';
import { Volume2, VolumeX, Plus, Moon, Sun, Type } from 'lucide-react';
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
  const [soundOn, setSoundOn] = React.useState(isSoundEnabled());

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Single text wordmark in display face */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('library')}
              className="text-left group cursor-pointer focus-visible:outline-none"
            >
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm font-extrabold shadow-sm">
                  8B
                </span>
                <span>Ôn Luyện Lớp 8B</span>
              </span>
            </button>
          </div>

          {/* Zone 2: Nav links, 1-line text with clean underline */}
          <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => onSelectTab('library')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                currentTab === 'library'
                  ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              Kho Đề Cương
            </button>
            <button
              onClick={() => onSelectTab('lab')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'lab'
                  ? 'border-indigo-600 text-indigo-700 dark:text-indigo-400 font-extrabold'
                  : 'border-transparent text-indigo-700 dark:text-indigo-400 font-bold'
              }`}
            >
              <span className="px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-[11px] font-black uppercase text-indigo-700 dark:text-indigo-300">Mới</span>
              <span>🧪 Phòng Thí Nghiệm Ảo</span>
            </button>
            <button
              onClick={() => onSelectTab('search')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'search'
                  ? 'border-teal-500 text-teal-700 dark:text-teal-400 font-bold'
                  : 'border-transparent text-teal-700 dark:text-teal-400 font-semibold'
              }`}
            >
              <span>🔍 Tra Cứu Nhanh</span>
            </button>
            <button
              onClick={() => onSelectTab('mindmap')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'mindmap'
                  ? 'border-indigo-600 text-indigo-700 dark:text-indigo-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              <span>🌳 Bản Đồ Tư Duy</span>
            </button>
            <button
              onClick={() => onSelectTab('flashcards')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'flashcards'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              <span>🃏 Thẻ Ghi Nhớ 3D</span>
            </button>
            <button
              onClick={() => onSelectTab('speed')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'speed'
                  ? 'border-rose-500 text-rose-600 dark:text-rose-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              <span>🔥 Bí Kíp 5 Phút</span>
            </button>
            <button
              onClick={() => onSelectTab('written')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                currentTab === 'written'
                  ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              Tự Luận & Ngắn
            </button>
            <button
              onClick={() => onSelectTab('mistakes')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'mistakes'
                  ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              <span>Sổ Câu Sai</span>
              {mistakesCount > 0 && (
                <span className="text-xs bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-bold px-1.5 py-0.2 rounded-full tabular-nums">
                  {mistakesCount}
                </span>
              )}
            </button>
            <button
              onClick={() => onSelectTab('history')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                currentTab === 'history'
                  ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 font-bold'
                  : 'border-transparent'
              }`}
            >
              Lịch Sử Thi
            </button>
          </nav>

          {/* Zone 3: Accessibility tools & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
              title={isDark ? 'Chế độ Sáng' : 'Chế độ Tối bảo vệ mắt'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Chuyển chế độ sáng tối"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenImport}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Nhập Đề Cương</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar with smooth horizontal scrolling */}
        <div className="flex lg:hidden items-center gap-3 overflow-x-auto no-scrollbar py-2.5 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold whitespace-nowrap">
          <button
            onClick={() => onSelectTab('library')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'library' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Kho Đề
          </button>
          <button
            onClick={() => onSelectTab('lab')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'lab' ? 'bg-indigo-600 text-white font-bold' : 'text-indigo-600 dark:text-indigo-400 font-semibold'
            }`}
          >
            🧪 Thí Nghiệm Ảo
          </button>
          <button
            onClick={() => onSelectTab('search')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'search' ? 'bg-teal-600 text-white font-bold' : 'text-teal-700 dark:text-teal-400'
            }`}
          >
            🔍 Tra Cứu
          </button>
          <button
            onClick={() => onSelectTab('mindmap')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'mindmap' ? 'bg-indigo-600 text-white font-bold' : 'text-indigo-600 dark:text-indigo-400'
            }`}
          >
            🌳 Sơ Đồ Tư Duy
          </button>
          <button
            onClick={() => onSelectTab('flashcards')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'flashcards' ? 'bg-amber-500 text-white font-bold' : 'text-amber-600 dark:text-amber-400'
            }`}
          >
            🃏 Lật Thẻ 3D
          </button>
          <button
            onClick={() => onSelectTab('speed')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'speed' ? 'bg-rose-500 text-white font-bold' : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            🔥 Bí Kíp 5p
          </button>
          <button
            onClick={() => onSelectTab('written')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'written' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Tự Luận
          </button>
          <button
            onClick={() => onSelectTab('mistakes')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              currentTab === 'mistakes' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
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
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentTab === 'history' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Lịch Sử
          </button>
        </div>
      </div>
    </header>
  );
};
