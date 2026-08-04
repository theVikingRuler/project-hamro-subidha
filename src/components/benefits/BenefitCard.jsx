import React from 'react';

import { Link } from 'react-router-dom';

export function BenefitCard({ item }) {
  if (!item) return null;

  return (
    <div className="gradient-border relative overflow-hidden bg-white/95 backdrop-blur-[15px] border border-white/40 rounded-3xl p-[22px] shadow-[0_10px_35px_rgba(0,0,0,.05),0_30px_60px_rgba(0,0,0,.06)] transition-all duration-[450ms] ease-in-out hover:-translate-y-[10px] hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(59,130,246,.12),0_40px_80px_rgba(0,0,0,.10)] after:content-[''] after:absolute after:w-[220px] after:h-[220px] after:bg-[radial-gradient(circle,rgba(59,130,246,.18),transparent_70%)] after:-top-[90px] after:-right-[90px] after:pointer-events-none sm:p-[25px]">
      <span className="inline-block text-primary text-[13px] font-bold uppercase tracking-[1px] mb-[15px]">
        {item.program_category}
      </span>

      <h2 className="text-lg text-gray-900 m-0 leading-[1.3]">
        {item.program_name || 'Not present'}
      </h2>

      <p className="text-[#64748b] text-[1.05rem] leading-[1.8] mt-2 mb-4"
        dangerouslySetInnerHTML={{ __html: item.program_description }} 
      >
      </p>

      <div className="flex gap-5 flex-wrap mb-[25px]">
        <Link
          to="#"
          className="text-[#2563eb] no-underline font-semibold transition-all duration-300 hover:text-[#1d4ed8] hover:tracking-[.4px]"
        >
          How to Apply →
        </Link>
        <Link
          to="#"
          className="text-[#2563eb] no-underline font-semibold transition-all duration-300 hover:text-[#1d4ed8] hover:tracking-[.4px]"
        >
          Request Buddy Assistance
        </Link>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f8fbff] border border-[#e8eefc] rounded-2xl p-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_8px_18px_rgba(0,0,0,.03)]">
        <strong className="block text-gray-700 mb-2 text-[15px]">
          Population served
        </strong>
        <p className="m-0 text-gray-500 text-[15px]">
          {item.population_served}
        </p>
      </div>
    </div>
  );
}