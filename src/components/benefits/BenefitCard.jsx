import React, { useState, useEffect } from 'react';

export function BenefitCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on 'Esc' key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock background scroll
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!item) return null;

  return (
    <>
      {/* CARD COMPONENT (remains unchanged) */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="gradient-border relative overflow-hidden bg-white/95 backdrop-blur-[15px] border border-white/40 rounded-3xl p-[22px] shadow-[0_10px_35px_rgba(0,0,0,.05),0_30px_60px_rgba(0,0,0,.06)] transition-all duration-[450ms] ease-in-out hover:-translate-y-[6px] hover:scale-[1.01] hover:shadow-[0_25px_60px_rgba(59,130,246,.12),0_40px_80px_rgba(0,0,0,.10)] cursor-pointer sm:p-[25px]"
      >
        <span className="inline-block text-primary text-[13px] font-bold uppercase tracking-[1px] mb-[15px]">
          {item.program_category}
        </span>
        <h2 className="text-lg text-gray-900 m-0 leading-[1.3] font-semibold">
          {item.program_name || 'Not present'}
        </h2>
        <div className="mt-2 mb-4">
          <p
            className="text-[#64748b] text-[1.05rem] leading-[1.6] line-clamp-2"
            dangerouslySetInnerHTML={{ __html: item.program_description }}
          />
          <button
            type="button"
            className="inline-flex items-center gap-1.5 mt-2 text-sm font-bold text-blue-600 focus:outline-none"
          >
            <span>Read full details & requirements</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className="bg-gradient-to-br from-white to-[#f8fbff] border border-[#e8eefc] rounded-2xl p-[18px]">
          <strong className="block text-gray-700 mb-1 text-[15px]">Key Requirement</strong>
          <p className="m-0 text-gray-500 text-[14px] line-clamp-2">{item.key_requirement || 'Not present'}</p>
        </div>
      </div>

      {/* MODAL (With Enhanced Style injection) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20 animate-scaleUp"
          >
            {/* Header (Styling updated for clarity) */}
            <div className="p-6 border-b border-gray-100 flex items-start justify-between bg-gray-50/70">
              <div className="space-y-1">
                <span className="text-primary text-xs font-semibold uppercase tracking-[1px] block">
                  {item.program_category}
                </span>
                <h3 className="text-2xl font-bold text-gray-950 leading-snug">
                  {item.program_name}
                </h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 rounded-full focus:outline-none"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-7 overflow-y-auto space-y-7">
              {/* Key Requirement Callout */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 shadow-sm">
                <strong className="block text-blue-950 mb-1.5 text-sm uppercase font-bold tracking-wide">Key Requirement Summary</strong>
                <p className="m-0 text-blue-900 text-sm leading-relaxed">{item.key_requirement || 'Not present'}</p>
              </div>

              {/* Enhanced Complete HTML Description Container */}
              {/* We REMOVE 'prose prose-blue' and use standard text color */}
              <div 
                className="text-[#475569]"
                dangerouslySetInnerHTML={{ __html: item.program_description }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 bg-gray-950 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm focus:outline-none">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}