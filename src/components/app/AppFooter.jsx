import React from 'react';

export function AppFooter() {
  return (
    <footer className="bg-footer-bg mt-auto text-white py-14 px-6 md:px-12 font-sans border-t border-border-subtle/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Column 1: Brand & Mission */}
        <div className="md:col-span-4 space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-white">
            Hamro Subidha
          </h2>
          <p className="text-sm text-text-muted max-w-xs leading-relaxed">
            Making Government Benefits Accessible for Every Citizen.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wider">
            Quick links
          </h3>
          <ul className="space-y-2.5 text-sm text-text-muted">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-150"
              >
                Eligibility Checker
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-150"
              >
                Benefits Directory
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-150"
              >
                Buddy Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-150"
              >
                Notices &amp; Opportunities
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Assistance Card */}
        <div className="md:col-span-5">
          <div className="bg-footer-card border border-border-subtle/20 rounded-2xl p-6 shadow-lg hover:border-border-subtle/40 transition-all duration-200">
            <h3 className="text-base font-semibold text-white mb-1">
              Need personal assistance?
            </h3>
            <p className="text-sm text-text-muted mb-4 leading-relaxed">
              Contact our Buddy Network team for friendly, local help.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-150"
            >
              Get personal assistance
              <span aria-hidden="true" className="ml-1.5">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1240px] mx-auto mt-16 pt-6 text-xs text-text-muted/60 border-t border-border-subtle/10">
        <p>
          &copy; {new Date().getFullYear()} Hamro Subidha. Designed for clarity,
          dignity, and access.
        </p>
      </div>
    </footer>
  );
}