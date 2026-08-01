import React, { useState } from 'react';
import { NavItem } from '../nav/NavItem';
import { Link } from 'react-router-dom';

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const getLangBtnClass = (lang, isMobile = false) => {
    const base = isMobile
      ? 'w-1/2 py-2 rounded-md text-center transition-colors'
      : 'px-2.5 py-1 rounded-md transition-colors';

    if (language === lang) {
      return `${base} bg-surface text-text-main font-semibold shadow-xs`;
    }
    return `${base} text-text-muted hover:text-text-main`;
  };

  const navigationLinks = [
    { name: 'Home', href: '/', active: false },
    { name: 'Eligibility', href: '/eligibility', active: false },
    { name: 'Benefits', href: '/benefits', active: true },
  ];

  return (
    <header className="bg-surface border-b border-border-subtle shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-1 pr-2"
          >
            <span className="text-xl font-bold text-text-main tracking-tight">
              Hamro Subidha
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center pl-4 lg:pl-10">
            <div className="flex items-center gap-7 text-sm font-medium">
              {navigationLinks.map((link) => {
                return <NavItem key={link.name || link.href} item={link} />;
              })}
            </div>
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden md:flex items-center gap-4 ml-auto md:ml-0">
            {/* Language Selector Pill */}
            <div className="inline-flex rounded-lg border border-border-subtle p-1 bg-muted-bg text-xs font-medium text-text-muted">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={getLangBtnClass('en')}
              >
                EN
              </button>
              <span className="self-center px-0.5 text-text-muted/40">|</span>
              <button
                type="button"
                onClick={() => setLanguage('ne')}
                className={getLangBtnClass('ne')}
              >
                नेपाली
              </button>
            </div>

            {/* Primary CTA Button */}
            <Link
              to="/eligibility"
              type="button"
              className="bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2"
            >
              Check Your Benefits
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden text-text-main p-2 rounded-md hover:bg-muted-bg focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-surface">
          <nav className="px-5 py-4 flex flex-col gap-2">
            ${navigationLinks.map((item) => `
              <Link to="${item.href}" className="text-text-muted hover:text-text-main font-medium text-sm py-2">
                ${item.name}
              </Link>
            `).join('')}

            <div className="flex flex-col gap-3 pt-3 mt-2 border-t border-border-subtle">
              <div className="inline-flex rounded-lg border border-border-subtle p-1 bg-muted-bg text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={getLangBtnClass('en', true)}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('ne')}
                  className={getLangBtnClass('ne', true)}
                >
                  नेपाली
                </button>
              </div>
              <button
                type="button"
                className="w-full bg-primary text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary-hover text-center"
              >
                Check Your Benefits
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}