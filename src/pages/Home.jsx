import React from 'react';
import { Link } from 'react-router-dom';
import { BenefitCard } from '../components/benefits/BenefitCard';
// Featured subset of benefits for the homepage
const FEATURED_BENEFITS = [
  {
    id: 1,
    category: 'SCHOLARSHIPS',
    title: 'National Higher Education Scholarship',
    description: 'Financial support for eligible students pursuing higher education.',
    keyRequirement: 'Nepali citizen enrolled in an approved institution.'
  },
  {
    id: 2,
    category: 'SENIOR',
    title: 'Senior Citizen Social Security Allowance',
    description: 'Monthly support for eligible senior citizens through local government.',
    keyRequirement: 'Age and residency requirements apply.'
  }
];

export function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 mb-16 space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-border-subtle rounded-3xl p-8 sm:p-12 md:p-16 shadow-xs">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Public Service Portal
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight leading-[1.15]">
            Access Government Benefits with Dignity &amp; Clarity
          </h1>

          <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
            Hamro Subidha simplifies public support programs. Check your eligibility in minutes, explore requirements clearly, or connect with our local Buddy Support network.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/eligibility"
              className="bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-hover transition-colors shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2"
            >
              Check Your Eligibility
            </Link>
            <Link
              to="/benefits"
              className="bg-surface text-text-main border border-border-subtle font-semibold text-sm px-6 py-3 rounded-xl hover:bg-muted-bg transition-colors"
            >
              Browse All Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className='w-full max-w-5xl mx-auto'>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">
            How can we help you today?
          </h2>
          <p className="text-text-muted text-sm mt-1">
            Select a pathway to get started right away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-xs hover:border-primary/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-105 transition-transform">
              ✓
            </div>
            <h3 className="text-lg font-bold text-text-main mb-2">
              Eligibility Checker
            </h3>
            <p className="text-text-muted text-sm mb-4 leading-relaxed">
              Answer a few simple questions to find out which civic programs and allowances you qualify for.
            </p>
            <Link
              to="/eligibility"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Start Checker &rarr;
            </Link>
          </div>

          <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-xs hover:border-primary/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-105 transition-transform">
              📂
            </div>
            <h3 className="text-lg font-bold text-text-main mb-2">
              Benefits Directory
            </h3>
            <p className="text-text-muted text-sm mb-4 leading-relaxed">
              Browse structured information on education, senior care, farming, and health assistance schemes.
            </p>
            <Link
              to="/benefits"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Explore Directory &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className='w-full max-w-5xl mx-auto'>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-main tracking-tight">
              Featured Programs
            </h2>
            <p className="text-text-muted text-sm mt-1">
              Popular civic support schemes currently accepting applications.
            </p>
          </div>
          <Link
            to="/benefits"
            className="text-primary font-semibold text-sm hover:underline hidden sm:block"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_BENEFITS.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/benefits"
            className="text-primary font-semibold text-sm hover:underline"
          >
            View all programs &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}