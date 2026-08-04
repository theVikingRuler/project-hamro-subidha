import React from 'react';
import { Link } from 'react-router-dom';

export function AppFooter() {
  return (
    <footer className="bg-footer-bg mt-auto text-white py-14 px-6 md:px-12 font-sans border-t border-border-subtle/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Column 1: Brand & Mission */}
        <div className="md:col-span-6 space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-white">
            Hamro Subidha
          </h2>
          <p className="text-sm text-text-muted max-w-xs leading-relaxed">
            Making Government Benefits Accessible for Every Citizen.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-6 text-end space-y-3">
          <h3 className="text-sm font-semibold text-white tracking-wider">
            Quick links
          </h3>
          <ul className="space-y-2.5 text-sm text-text-muted">
            <li>
              <Link
                to="/eligibility"
                className="hover:text-white transition-colors duration-150"
              >
                Eligibility Checker
              </Link>
            </li>
            <li>
              <Link
                to="/benefits"
                className="hover:text-white transition-colors duration-150"
              >
                Benefits Directory
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-150"
              >
                About
              </Link>
            </li>
          </ul>
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

  /**
   * 
   * return 
   * <>
   * <div></div>
   * <div></div>
   * </>
   * 
   */
}