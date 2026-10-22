import React, { useState } from 'react';
import { SUBJECT_MINDMAPS, MindmapNode } from '../data/mindmapData';
import { ChevronRight, ChevronDown, AlertTriangle, Sparkles, Search, ZoomIn, ZoomOut, RotateCcw, BookOpen } from 'lucide-react';

interface MindmapViewProps {
  fontSize: 'normal' | 'large';
}

export const MindmapView: React.FC<MindmapViewProps> = ({ fontSize }) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(SUBJECT_MINDMAPS[0].subjectId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedNodes, setCollapsedNodes] = useState<Record<string, boolean>>({});
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeMindmap = SUBJECT_MINDMAPS.find((m) => m.subjectId === selectedSubjectId) || SUBJECT_MINDMAPS[0];

  const toggleCollapse = (nodeId: string) => {
    setCollapsedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  const expandAll = () => {
    setCollapsedNodes({});
  };

  const collapseAll = () => {
    const allIds: Record<string, boolean> = {};
    const traverse = (node: MindmapNode) => {
      if (node.children && node.children.length > 0) {
        allIds[node.id] = true;
        node.children.forEach(traverse);
      }
    };
    traverse(activeMindmap.root);
    setCollapsedNodes(allIds);
  };

  const renderNode = (node: MindmapNode, depth: number = 0) => {
    const isCollapsed = !!collapsedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;
    const matchesSearch = searchQuery.trim() !== '' && (
      node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (node.description && node.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (node.formula && node.formula.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (node.details && node.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    return (
      <div key={node.id} className="relative flex flex-col items-start my-2">
        <div
          className={`group relative rounded-xl border transition-all duration-200 p-3 sm:p-4 max-w-xl text-left shadow-sm ${
            depth === 0
              ? 'bg-gradient-to-r from-slate-900 to-indigo-950 text-white border-indigo-500/30 shadow-md ring-2 ring-indigo-500/20'
              : depth === 1
              ? 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm'
              : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-400'
          } ${matchesSearch ? 'ring-2 ring-amber-400 bg-amber-50/20' : ''}`}
        >
          <div className="flex items-center gap-2.5">
            {hasChildren && (
              <button
                onClick={() => toggleCollapse(node.id)}
                className="p-1 rounded-md bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors text-slate-700 dark:text-slate-200 cursor-pointer"
                title={isCollapsed ? 'Mở rộng nhánh' : 'Thu gọn nhánh'}
              >
                {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4
                  className={`font-bold tracking-tight ${
                    depth === 0
                      ? 'text-lg sm:text-xl text-white'
                      : depth === 1
                      ? 'text-base sm:text-lg text-slate-900 dark:text-white'
                      : 'text-sm sm:text-base text-slate-800 dark:text-slate-100'
                  }`}
                >
                  {node.label}
                </h4>
                {node.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                    depth === 0
                      ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-400/40'
                      : 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300'
                  }`}>
                    {node.badge}
                  </span>
                )}
              </div>

              {node.description && (
                <p className={`mt-1 text-sm ${depth === 0 ? 'text-indigo-200/90' : 'text-slate-600 dark:text-slate-300'}`}>
                  {node.description}
                </p>
              )}

              {node.formula && (
                <div className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-mono font-medium flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{node.formula}</span>
                </div>
              )}

              {node.trapAlert && (
                <div className="mt-2 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs sm:text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Bẫy đề thi: </span>
                    {node.trapAlert}
                  </div>
                </div>
              )}

              {node.details && node.details.length > 0 && (
                <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-indigo-500">
                  {node.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {hasChildren && !isCollapsed && (
          <div className="pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-5 mt-1 space-y-2">
            {node.children!.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      {/* Top Banner & Control Bar */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Phương Pháp Học Tập Visual Learning Hiện Đại
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            🌳 Bản Đồ Tư Duy Tương Tác
          </h2>
          <p className="mt-1 text-indigo-100 text-sm sm:text-base leading-relaxed">
            Hệ thống hóa toàn bộ kiến thức Giữa Học Kì 1 dưới dạng cây sơ đồ tư duy đa cấp. Bấm vào từng nhánh để xem công thức, sơ đồ phân cấp và cảnh báo bẫy đề thi.
          </p>
        </div>
      </div>

      {/* Subject Filter Bar with Large, Bold Badges */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
          Chọn môn học để khám phá sơ đồ:
        </div>
        <div className="flex flex-wrap gap-2.5">
          {SUBJECT_MINDMAPS.map((item) => {
            const isSelected = item.subjectId === selectedSubjectId;
            return (
              <button
                key={item.subjectId}
                onClick={() => {
                  setSelectedSubjectId(item.subjectId);
                  setCollapsedNodes({});
                }}
                className={`px-4 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.subjectName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Controls: Search, Expand All, Collapse All, Zoom */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Tìm nhanh công thức / từ khóa trong ${activeMindmap.subjectName}...`}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            Mở rộng hết
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            Thu gọn hết
          </button>
          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 mx-1" />
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.1, 1.4))}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.1, 0.8))}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
            title="Đặt lại tỉ lệ"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mindmap Canvas Area */}
      <div className="bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 min-h-[500px] overflow-x-auto">
        <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left', transition: 'transform 0.15s ease-out' }}>
          {renderNode(activeMindmap.root)}
        </div>
      </div>
    </div>
  );
};
