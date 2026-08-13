import React from 'react';
import { Link } from 'react-router-dom';

export function AppFooter() {
  return (
    <footer className="bg-footer-bg text-text-muted py-12 border-t border-footer-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
        
        {/* Brand Info */}
        <div className="max-w-sm">
          <span className="text-surface font-bold text-lg block mb-2">Hamro Subidha</span>
          <p className="text-xs text-text-muted leading-relaxed">
            Find Government Benefits. Instant eligibility checks, plain-language guides, and step-by-step checklists for local benefits.
          </p>
        </div>

        {/* Sectors */}
        <div className="text-end">
          <h5 className="text-surface font-semibold mb-3">Sectors</h5>
          <ul className="space-y-2 text-xs">
            <li><Link to="/benefits?sector=education" className="hover:text-surface transition-colors">Education & Scholarships</Link></li>
            <li><Link to="/benefits?sector=senior" className="hover:text-surface transition-colors">Senior Citizen Welfare</Link></li>
            <li><Link to="/benefits?sector=agriculture" className="hover:text-surface transition-colors">Agriculture & Subsidies</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-footer-card text-center text-xs text-text-muted">
        © 2026 Hamro Subidha. Empowering Nepalis with direct access to public social benefits.
      </div>
    </footer>
  );
}