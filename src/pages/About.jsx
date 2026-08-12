import React, { useState, useEffect } from 'react';

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
    id: "CMT-01", 
    name: "Atith Adhikari", 
    role: "Co-Mentor", 
    photo: "/team/atith.jpg",
    bio: "TBD.",
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
    id: "MEM-04", 
    name: "Aarya Karki", 
    role: "Tech Team", 
    photo: "/team/aarya.jpeg",
    bio: "Aarya is a mentee and contributor to Hamro Subidha. In the tech team, she codes the website structure, designs the benefit form, and manages benefits data storage. In her free time, she enjoys reading books, listening to music, and learning languages." 
  },
  { 
    id: "MEM-05", 
    name: "Kapil Dhungana", 
    role: "Research Team", 
    photo: "/team/kapil.jpg",
    bio: "Kapil is an 18-year-old gap-year student and student-athlete, currently serving on the Research Team at Hamro Subidha. He is passionate about research, technology, and developing solutions that improve access to essential services in Nepal."
  },
  { 
    id: "MEM-02", 
    name: "Manjil Aryal", 
    role: "Tech Team", 
    photo: "/team/manjil.jpg",
    bio: "Focused on system architecture and code organization for the portal." 
  },
  { 
    id: "MEM-03", 
    name: "Sambriddha Bikram Karki", 
    role: "Research Team", 
    photo: "/team/sambriddha.jpg",
    bio: "AI/ Health Care enthusiast interested in building tools that make complex medical information more simpler." 
  },
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

export default function TeamPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPerson(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4 md:px-0">

        {/* Header Section */}
        <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-3">
                About us
            </h1>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl">
            Browse public support programs by category, understand the key requirement, and get help when you need it.
            </p>
        </div>

        <div className="w-full">
            {/* Story Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">

                {/* Who we are */}
                <div className="bg-surface border border-border-subtle rounded-[20px] p-8 shadow-xs">
                    <h2 className="text-xl font-bold mb-3">
                        Who we are
                    </h2>
                    <p className="text-text-muted leading-relaxed text-[15px]">
                        We're a student-led team that came together around a simple, shared observation: the
                        benefits meant to help people in Nepal — scholarships after SEE, agricultural loans and
                        subsidies, municipal grants — already exist in large numbers. What's missing isn't the
                        money. It's a place to find it.
                    </p>
                    <p className="text-text-muted leading-relaxed text-[15px] mt-3">
                        Our team spans research, design, and engineering. Two mentors guide the project;
                        six of us do the digging, building, and writing — pulling primary sources from ministry
                        notices, municipal websites, and school circulars, then turning that into something a
                        16-year-old right after their SEE result can actually use.
                    </p>
                </div>

                {/* Why this project */}
                <div className="bg-surface border border-border-subtle rounded-[20px] p-8 shadow-xs">
                    <h2 className="text-xl font-bold mb-3">
                        Why this project
                    </h2>
                    <p className="text-text-muted leading-relaxed text-[15px]">
                        Every one of us ran into the same wall doing this research: information about who
                        qualifies for what is scattered across a school notice board, a municipality's website,
                        and word of mouth — never in one place. Government scholarships, private-school quotas,
                        city entrance exams, agricultural credit — each has its own rules and no shared directory.
                    </p>
                    <p className="text-text-muted leading-relaxed text-[15px] mt-3">
                        Because of that, benefits skew toward people who already know how to look — urban,
                        connected, already banked. Hamro Subidha exists to close that gap: one directory, one
                        plain-language screener, and a portal that tells you exactly what you qualify for instead
                        of making you search blindly.
                    </p>
                </div>
            </section>

        {/* Org Chart Section */}
        {/* <section className="pt-5 pb-14">
            <div className="mb-9">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                REPORTING LINE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
                How the team is structured
            </h2>
            <div className="text-text-muted text-sm mt-1.5">
                Two mentors guide mentees across research and tech.
            </div>
            </div>

            <div className="flex flex-col items-center">
            <div className="flex gap-4 justify-center flex-wrap">
                <div className="text-xs sm:text-sm font-semibold text-text-main bg-blue-50 border border-blue-100 rounded-full px-4.5 py-2 whitespace-nowrap">
                Mentor — Samprada Pradhan
                </div>
                <div className="text-xs sm:text-sm font-semibold text-text-main bg-blue-50 border border-blue-100 rounded-full px-4.5 py-2 whitespace-nowrap">
                Co-Mentor — Atith Adhikari
                </div>
            </div>

            <div className="w-full h-7">
                <svg className="w-full h-full block" viewBox="0 0 100 28" preserveAspectRatio="none">
                <line x1="50" y1="0" x2="50" y2="14" stroke="#E2E8F0" strokeWidth="0.6" />
                <line x1="8" y1="14" x2="82" y2="14" stroke="#E2E8F0" strokeWidth="0.6" />
                <line x1="8" y1="14" x2="8" y2="28" stroke="#E2E8F0" strokeWidth="0.6" />
                <line x1="27.4" y1="14" x2="27.4" y2="28" stroke="#E2E8F0" strokeWidth="0.6" />
                <line x1="46.8" y1="14" x2="46.8" y2="28" stroke="#E2E8F0" strokeWidth="0.6" />
                <line x1="66.2" y1="14" x2="66.2" y2="28" stroke="#E2E8F0" strokeWidth="0.6" />
                </svg>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
                {["Aarju Bohora", "Manjil Aryal", "Samriddha Bikram Karki", "Aarya Karki", "Kapil Dhungana"].map((name) => (
                <div key={name} className="text-xs sm:text-sm font-medium text-text-muted bg-muted-bg border border-border-subtle rounded-full px-4.5 py-2 whitespace-nowrap">
                    {name}
                </div>
                ))}
            </div>
            </div>
        </section> */}

        {/* Team Grid Section */}
        <section className="pt-5 pb-24" id="team">
            <div className="mb-9">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                TEAM HAMRO SUBIDHA
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
                Meet everyone
            </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                className="bg-surface border border-border-subtle hover:border-blue-300 rounded-2xl p-5.5 cursor-pointer shadow-xs transition-all duration-200 hover:-translate-y-1 text-left focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                <div className={`w-full aspect-square rounded-xl flex items-center justify-center font-bold text-3xl mb-4 overflow-hidden ${person.mentor ? 'bg-amber-100/70 text-amber-800' : 'bg-blue-50 text-primary'}`}>
                    {person.photo ? (
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                    getInitials(person.name)
                    )}
                </div>
                <div className="font-bold text-[15.5px] text-text-main">
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
        </section>
        </div>

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
            className="w-full max-w-[680px] max-h-[80vh] overflow-hidden bg-surface border border-border-subtle rounded-3xl p-5 sm:p-7 shadow-2xl relative transform transition-transform duration-250 scale-100 translate-y-0"
            >
            <button
                onClick={() => setSelectedPerson(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted-bg border border-border-subtle text-text-muted hover:text-text-main hover:border-primary flex items-center justify-center transition-colors cursor-pointer z-10"
            >
                ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-5 sm:gap-6 overflow-y-auto max-h-[72vh] pr-1">
                <div className={`w-full aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden border border-border-subtle ${selectedPerson.mentor ? 'bg-amber-100/70 text-amber-800' : 'bg-blue-50 text-primary'}`}>
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