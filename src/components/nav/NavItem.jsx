import React from 'react';
import { Link } from 'react-router-dom';

export function NavItem({ item, isActive, onClick }) {
  if (!item) return null;

  return (
    <Link
      to={item.href || '#'}
      onClick={onClick}
      className={`transition-colors ${
        isActive
          ? 'text-primary font-semibold border-b-2 border-primary py-1'
          : 'text-text-muted hover:text-text-main'
      }`}
    >
      {item.name}
    </Link>
  );
}