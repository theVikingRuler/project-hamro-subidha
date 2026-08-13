import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export function AppHeader() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Top Banner */}
      {/* <div className="bg-primary text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4" />
        <span>
          100% Free & Transparent: Access all Government of Nepal benefit schemes in one place.
        </span>
      </div> */}

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-md">
              ह
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-text-main block leading-none">
                Hamro Subidha
              </span>
              <span className="text-xs text-primary font-semibold tracking-wider">
                हाम्रो सुविधा
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {
              isHomePage && (
                <>
                  <a href="#sectors" className="hover:text-primary transition-colors">Sectors</a>
                  <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
                  <a href="#about" className="hover:text-primary transition-colors">About</a>
                  <a href="#team" className="hover:text-primary transition-colors">Team</a>
                  <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
                </>
              )
            }
            {
              !isHomePage && (
                <>
                  <Link to="/eligibility" className="hover:text-primary transition-colors">Eligibility</Link>
                  <Link to="/benefits" className="hover:text-primary transition-colors">Benefits</Link>
                </>
              )
            }
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/eligibility"
              className="hidden sm:inline-flex bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
            >
              Find My Benefits
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}