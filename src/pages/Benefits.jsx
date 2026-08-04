import React, { useState, useMemo } from 'react';
import { BenefitCard } from '../components/benefits/BenefitCard';
import { useBenefitsData } from '../hooks/useBenefitsData';


const CATEGORIES = ['All', 'Scholarships', 'Senior', 'Agriculture'];

export function Benefits() {
  const { data } = useBenefitsData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBenefits = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    return data;
  }, [data, searchQuery, selectedCategory]);


  return (
    <div className="w-full max-w-5xl my-16 mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-3">
          Benefits Directory
        </h1>
        <p className="text-[var(--color-text-muted)] text-base max-w-2xl">
          Browse public support programs by category, understand the key requirement, and get help when you need it.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div className="w-full md:max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search benefits..."
            className="w-full px-4 py-2.5 bg-white border border-[var(--color-border-subtle)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>
        <div className="text-sm font-medium text-[var(--color-text-muted)] flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <React.Fragment key={cat}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`hover:underline transition-colors ${
                    isActive
                      ? 'text-[var(--color-text-main)] font-bold'
                      : 'cursor-pointer'
                  }`}
                >
                  {cat}
                </button>
                {idx < CATEGORIES.length - 1 && <span>•</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Cards Grid */}
        {filteredBenefits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBenefits.map((item) => (
              <BenefitCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-[var(--color-text-muted)]">
            No benefits found matching your criteria.
          </div>
        )}
      </div>

    </div>
  );
}