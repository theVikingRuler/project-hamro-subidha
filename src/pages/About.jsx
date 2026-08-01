import React, { useState } from 'react';

export default function About() {
    const [contactSubmitted, setContactSubmitted] = useState(false);
    // const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

    const CONTACT_METHODS = [
        {
            id: 'email',
            label: 'Official Email',
            value: 'hamrosubidha@gmail.com',
            href: 'mailto:hamrosubidha@gmail.com',
            icon: '✉️',
        },
        {
            id: 'phone',
            label: 'Phone / WhatsApp',
            value: '+977 9813864797',
            href: 'tel:+9779813864797',
            icon: '📞',
        },
        {
            id: 'linkedin',
            label: 'LinkedIn Page',
            value: 'linkedin.com/company/hamrosubidha',
            href: 'https://www.linkedin.com/company/hamrosubidha',
            icon: '💼',
            external: true,
        },
    ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

//   const handleVolunteerSubmit = (e) => {
//     e.preventDefault();
//     setVolunteerSubmitted(true);
//   };

  return (
    <div className="w-full max-w-5xl mx-auto my-16">
        {/* Header Section */}
        <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-3">
                Contact us
            </h1>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl">
            Browse public support programs by category, understand the key requirement, and get help when you need it.
            </p>
        </div>


        {/* Handles */}
        <div id="contact-info" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {CONTACT_METHODS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className="group relative bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/40 hover:-translate-y-1 transition-all duration-200 flex items-center space-x-4 outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        >
          {/* Icon Badge */}
          <div className="w-12 h-12 shrink-0 bg-[var(--color-muted-bg)] group-hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center text-2xl transition-colors">
            {item.icon}
          </div>

          {/* Info Text */}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
              {item.label}
            </p>
            <p className="text-sm lg:text-base font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors truncate">
              {item.value}
            </p>
          </div>
        </a>
      ))}
    </div>

        {/* Contact Form: Under Progress */}
        <div className="hidden lg:col-span-2 bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-md">
            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-1">
                Send Us a Direct Message
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-6">
                Whether you are an applicant, ward representative, or partner organization, send your query below.
            </p>

            <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                    Your Full Name *
                    </label>
                    <input
                    type="text"
                    required
                    placeholder="e.g. Ram Bahadur"
                    className="w-full p-3 bg-[var(--color-muted-bg)] border border-[var(--color-border-subtle)] rounded-xl text-sm text-[var(--color-text-main)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                    Your Email Address *
                    </label>
                    <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full p-3 bg-[var(--color-muted-bg)] border border-[var(--color-border-subtle)] rounded-xl text-sm text-[var(--color-text-main)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                    />
                </div>
                </div>
                <div>
                <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                    Your Message *
                </label>
                <textarea
                    rows={4}
                    required
                    placeholder="Type your detailed message here..."
                    className="w-full p-3 bg-[var(--color-muted-bg)] border border-[var(--color-border-subtle)] rounded-xl text-sm text-[var(--color-text-main)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                ></textarea>
                </div>

                <button
                type="submit"
                className="w-full py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold rounded-xl shadow-md transition text-sm cursor-pointer"
                >
                Send Message 🚀
                </button>
            </form>

            {/* Success Message */}
            {contactSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-xs font-medium">
                ✅ Thank you for reaching out to <strong>Hamro Subidha</strong>! We have received your message.
                </div>
            )}
        </div>


    </div>
  );
}