import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  HeartHandshake, 
  Tractor, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  FileText,
  BookOpen,
  ChevronDown
} from 'lucide-react';

const teamMembers = [
  { 
    id: "MNT-01", 
    name: "Samprada Pradhan", 
    role: "Mentor", 
    photo: "/team/samprada.jpg",
    bio: "Guided the team's overall direction and approach, helping shape how the research findings turned into a working product.",
    mentor: true 
  },
  { 
    id: "MEM-01", 
    name: "Aarju Bohora", 
    role: "Research Team", 
    photo: "/team/aarju.png",
    bio: "Aarju has a soft spot for people and a sharp mind for numbers. She's the kind of friend who'll patiently untangle a confusing situation for you, then still make time to talk about the book she's currently obsessed with. On Team Hamro Subidha, she dug through dense scholarship rules and eligibility criteria to map out exactly what benefits exist and who qualifies, work that now shapes the platform's Education section. She brought the same care to shaping the eligibility logic itself and turning confusing rules into simple questions citizens can actually answer." 
  },
  { 
    id: "MEM-05", 
    name: "Kapil Dhungana", 
    role: "Research Team", 
    photo: "/team/kapil.jpg",
    bio: "Kapil is an 18-year-old gap-year student and student-athlete, currently serving on the Research Team at Hamro Subidha. He is passionate about research, technology, and developing solutions that improve access to essential services in Nepal."
  },
  { 
    id: "MEM-03", 
    name: "Sambriddha Bikram Karki", 
    role: "Research Team", 
    photo: "/team/sambriddha.jpg",
    bio: "AI/ Health Care enthusiast interested in building tools that make complex medical information more simpler." 
  },
  { 
    id: "CMT-01", 
    name: "Atith Adhikari", 
    role: "Co-Mentor", 
    photo: "/team/atith.jpg",
    bio: "TBD.",
    mentor: true 
  },
  { 
    id: "MEM-04", 
    name: "Aarya Karki", 
    role: "Tech Team", 
    photo: "/team/aarya.jpeg",
    bio: "Aarya is a mentee and contributor to Hamro Subidha. In the tech team, she codes the website structure, designs the benefit form, and manages benefits data storage. In her free time, she enjoys reading books, listening to music, and learning languages." 
  },
  { 
    id: "MEM-02", 
    name: "Manjil Aryal", 
    role: "Tech Team", 
    photo: "/team/manjil.jpg",
    bio: "Focused on system architecture and code organization for the portal." 
  }
];

const getInitials = (name) => {
  if (!name) return "?";
  return name
    .split(' ')
    .filter((word) => word.length > 0)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

export function Home() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPerson(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-text-main font-sans antialiased scroll-smooth">

      {/* 1. HERO SECTION: The Problem & The Solution */}
      <section id="hero" className="min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
  
        {/* Ambient Theme Background Glows (Red + Blue) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

        {/* Main Center Content */}
        <div className="my-auto max-w-4xl text-center space-y-8 w-full">

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-text-main tracking-tight leading-[1.15]">
            Find Government Benefits <br className="hidden sm:inline" />
            <span className="text-primary">You Deserve</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Instant eligibility checks, plain-language guides, and step-by-step checklists for local benefits.
          </p>

          {/* HERO ACTION BUTTONS & BADGES */}
          <div className="pt-2 max-w-xl mx-auto w-full space-y-6">
            
            {/* Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/eligibility"
                className="w-full sm:w-2/3 inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200 text-base group"
              >
                <FileText className="w-5 h-5" />
                <span>Check Your Benefits</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
              
              <Link
                to="/benefits"
                className="w-full sm:w-1/3 inline-flex items-center justify-center gap-2 bg-surface hover:bg-muted-bg text-text-main font-semibold py-4 px-6 rounded-xl border border-border-subtle shadow-xs hover:shadow transition-all duration-200 text-sm"
              >
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Directory</span>
              </Link>
            </div>

            {/* Feature Badges anchoring the space */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-text-muted pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 100% Free Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 70+ Schemes Mapped
              </span>
            </div>

          </div>

        </div>

        {/* Scroll Cue */}
        <a href="#how-it-works" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors text-xs font-medium animate-bounce pb-2">
          <span>Learn how it works</span>
          <ChevronDown className="w-4 h-4" />
        </a>

      </section>

      {/* 3. HOW IT WORKS: The Journey */}
      <section id="how-it-works" className="min-h-screen flex flex-col justify-center items-center bg-muted-bg py-16 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Eligibility Form</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main">How It Works</h2>
            <p className="text-text-muted text-base sm:text-lg">
              3 simple steps to find benefits you may qualify for.
            </p>
          </div>

          {/* 3-Step Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Step 1 */}
            <div className="group bg-surface p-8 rounded-2xl border border-border-subtle transition-all duration-300 hover:shadow-lg hover:border-primary/40 flex flex-col justify-between">
              <div>
                <span className="text-4xl font-black text-text-muted/30 group-hover:text-primary transition-colors duration-300 block mb-4">01</span>
                <h3 className="font-bold text-lg text-text-main mb-2">Filter Your Profile</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">Submit your basic information and preferences to narrow down relevant benefits.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group bg-surface p-8 rounded-2xl border border-border-subtle transition-all duration-300 hover:shadow-lg hover:border-primary/40 flex flex-col justify-between">
              <div>
                <span className="text-4xl font-black text-text-muted/30 group-hover:text-primary transition-colors duration-300 block mb-4">02</span>
                <h3 className="font-bold text-lg text-text-main mb-2">Check Eligibility</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">Get instant feedback on which benefits you qualify for, based on your submitted profile.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group bg-surface p-8 rounded-2xl border border-border-subtle transition-all duration-300 hover:shadow-lg hover:border-primary/40 flex flex-col justify-between">
              <div>
                <span className="text-4xl font-black text-text-muted/30 group-hover:text-primary transition-colors duration-300 block mb-4">03</span>
                <h3 className="font-bold text-lg text-text-main mb-2">Get Checklist</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">Receive a clear list of required documents for each benefit you qualify for.</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/eligibility"
              className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-9 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-base group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. FOCUS SECTORS: The Core Experience */}
      <section id="sectors" className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Benefits Directories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main">Explore Benefits by Sector</h2>
            <p className="text-text-muted text-base sm:text-lg">
              Centralized access to the most common benefits in Nepal, with clear eligibility criteria and step-by-step checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Education */}
            <div className="bg-surface rounded-2xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-3">Education & Scholarships</h3>
                <p className="text-sm text-text-muted mb-6">Centralized access to school fee waivers, municipal quotas, and national grants.</p>
                <ul className="space-y-3 text-sm text-text-muted mb-8">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Municipal & International Scholarships</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> SEE Fee Waiver Scheme</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> District Hostel & Stipend Quotas</li>
                </ul>
              </div>
              <Link to="/benefits?sector=education" className="w-full py-3 px-4 bg-muted-bg hover:bg-border-subtle text-primary font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <span>View Education Schemes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Senior Citizens */}
            <div className="bg-surface rounded-2xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-3">Senior Citizen Welfare</h3>
                <p className="text-sm text-text-muted mb-6">Direct guides for social security pensions, transport discounts, and medical coverage.</p>
                <ul className="space-y-3 text-sm text-text-muted mb-8">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Social Security Allowance (Pensions)</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Health Insurance Registration</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Public Transport Discount Cards</li>
                </ul>
              </div>
              <Link to="/benefits?sector=senior" className="w-full py-3 px-4 bg-muted-bg hover:bg-border-subtle text-primary font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <span>View Senior Benefits</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Agriculture */}
            <div className="bg-surface rounded-2xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                  <Tractor className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-3">Agriculture & Loans</h3>
                <p className="text-sm text-text-muted mb-6">Filter regional pocket grants, fertilizer quotas, and low-interest startup capital.</p>
                <ul className="space-y-3 text-sm text-text-muted mb-8">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> PMAMP Pocket Area Subsidies</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Low-Interest Enterprise Financing</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Local Cooperative Fertilizer Access</li>
                </ul>
              </div>
              <Link to="/benefits?sector=agriculture" className="w-full py-3 px-4 bg-muted-bg hover:bg-border-subtle text-primary font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <span>View Agri Subsidies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ABOUT US: The Story & Vision */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-muted-bg py-16 px-4 sm:px-6 lg:px-8 border-y border-border-subtle">
        <div className="max-w-5xl mx-auto w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main">Driven by a Simple Observation</h2>
            <p className="text-text-muted text-base sm:text-lg">
              The benefits exist. What was missing was a straightforward place to find them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Who we are */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-text-main mb-4">
                  Who we are
                </h3>
                <p className="text-text-muted leading-relaxed text-base mb-4">
                  We're a student-led team that came together around a simple, shared observation: the
                  benefits meant to help people in Nepal — scholarships after SEE, agricultural loans and
                  subsidies, municipal grants — already exist in large numbers. What's missing isn't the
                  money. It's a place to find it.
                </p>
                <p className="text-text-muted leading-relaxed text-base">
                  Our team spans research, design, and engineering. Two mentors guide the project;
                  five of us do the digging, building, and writing — pulling primary sources from ministry
                  notices, municipal websites, and school circulars, then turning that into something a
                  16-year-old right after their SEE result can actually use.
                </p>
              </div>
            </div>

            {/* Why this project */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-text-main mb-4">
                  Why this project
                </h3>
                <p className="text-text-muted leading-relaxed text-base mb-4">
                  Every one of us ran into the same wall doing this research: information about who
                  qualifies for what is scattered across a school notice board, a municipality's website,
                  and word of mouth — never in one place. Government scholarships, private-school quotas,
                  city entrance exams, agricultural credit — each has its own rules and no shared directory.
                </p>
                <p className="text-text-muted leading-relaxed text-base">
                  Because of that, benefits skew toward people who already know how to look — urban,
                  connected, already banked. Hamro Subidha exists to close that gap: one directory, one
                  plain-language screener, and a portal that tells you exactly what you qualify for instead
                  of making you search blindly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TEAM GRID: The Faces Behind the Portal */}
      <section id="team" className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main">Meet Everyone on Team Hamro Subidha</h2>
            <p className="text-text-muted text-base">
              The researchers, designers, and engineers behind the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {teamMembers.map((person) => (
              <div
                key={person.id}
                tabIndex={0}
                onClick={() => setSelectedPerson(person)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPerson(person);
                  }
                }}
                className="bg-surface border border-border-subtle hover:border-primary/50 rounded-2xl p-3 cursor-pointer shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md text-left focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                <div className={`w-full aspect-square rounded-xl flex items-center justify-center font-bold text-3xl mb-4 overflow-hidden ${person.mentor ? 'bg-blue-100/70 text-blue-900 border border-blue-200' : 'bg-blue-50 text-primary'}`}>
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    getInitials(person.name)
                  )}
                </div>
                <div className="font-bold text-[16px] text-text-main truncate" title={person.name}>
                  {person.name}
                </div>
                <div className="text-xs font-semibold text-primary mt-0.5">
                  {person.role}
                </div>
                <div className="mt-3.5 pt-3 border-t border-dashed border-border-subtle text-[11.5px] text-text-muted">
                  Hamro Subidha
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ SECTION: Reassurance & Clarity */}
      <section id="faq" className="min-h-screen flex flex-col justify-center items-center bg-muted-bg py-16 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto w-full">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main">Frequently Asked Questions</h2>
            <p className="text-text-muted text-base">Get instant answers to common questions about Hamro Subidha.</p>
          </div>

          <div className="space-y-4">
            
            <div className="bg-surface p-6 rounded-2xl border border-border-subtle shadow-xs">
              <h4 className="font-bold text-text-main flex items-center gap-3 text-lg">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                Is Hamro Subidha an official government agency?
              </h4>
              <p className="text-base text-text-muted mt-2 pl-8 leading-relaxed">
                No. Hamro Subidha is an independent open discovery platform that aggregates, translates, and simplifies government benefits into a single, accessible system.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border-subtle shadow-xs">
              <h4 className="font-bold text-text-main flex items-center gap-3 text-lg">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                Can I submit my application directly through this platform?
              </h4>
              <p className="text-base text-text-muted mt-2 pl-8 leading-relaxed">
                We provide exact requirements and customized document checklists. For official submission, we direct you straight to the correct government portal or local Ward Office.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border-subtle shadow-xs">
              <h4 className="font-bold text-text-main flex items-center gap-3 text-lg">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                Do I need to pay to use this platform?
              </h4>
              <p className="text-base text-text-muted mt-2 pl-8 leading-relaxed">
                No. Hamro Subidha is 100% free for all Nepali citizens.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Profile Detail Modal */}
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedPerson(null);
        }}
        className={`fixed inset-0 bg-slate-900/45 flex items-center justify-center p-6 z-50 transition-opacity duration-200 ${
          selectedPerson ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {selectedPerson && (
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[680px] max-h-[80vh] overflow-hidden bg-surface border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-2xl relative transform transition-transform duration-250 scale-100 translate-y-0"
          >
            <button
              onClick={() => setSelectedPerson(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-muted-bg border border-border-subtle text-text-muted hover:text-text-main hover:border-primary flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 overflow-y-auto max-h-[72vh] pr-1">
              <div className={`w-full aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden border border-border-subtle ${selectedPerson.mentor ? 'bg-blue-100/70 text-blue-900' : 'bg-blue-50 text-primary'}`}>
                {selectedPerson.photo ? (
                  <img
                    src={selectedPerson.photo}
                    alt={selectedPerson.name}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <span className="text-4xl font-bold">{getInitials(selectedPerson.name)}</span>
                )}
              </div>

              <div className="min-w-0 pt-1">
                <div className="text-2xl font-extrabold text-text-main leading-tight">
                  {selectedPerson.name}
                </div>
                <div className="text-sm font-semibold text-primary mt-1 mb-4">
                  {selectedPerson.role}
                </div>
                <div className="max-h-[42vh] overflow-y-auto pr-2">
                  <p className="text-text-muted text-[14.5px] leading-relaxed whitespace-normal break-words">
                    {selectedPerson.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}