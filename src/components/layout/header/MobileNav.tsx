'use client';

import { Bars3Icon as Menu, XMarkIcon as X } from '@heroicons/react/24/outline';

export interface MobileNavItem {
  name: string;
  href: string;
  typeOfHref: 'scroll' | 'page';
  label: string;
}

interface MobileNavProps {
  navItems: MobileNavItem[];
  isHomePage: boolean;
  pathname: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleNavigation: (href: string, type: 'scroll' | 'page') => void;
}

export function MobileNav({
  navItems,
  isHomePage,
  pathname,
  isMobileMenuOpen,
  toggleMobileMenu,
  handleNavigation,
}: MobileNavProps) {
  return (
    <div className="lg:hidden relative flex items-center">
      <button
        onClick={toggleMobileMenu}
        className="p-2 text-amber-800 hover:text-amber-600 transition-colors"
        aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isMobileMenuOpen}
        aria-haspopup="true"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {/* Dropdown panel */}
      <div
        className={`absolute top-full right-0 mt-2 w-64 origin-top-right rounded-lg border border-amber-200 bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-black/5 transition-all duration-200 z-50 ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="py-2 max-h-[70vh] overflow-y-auto">
          {navItems.map((item, index) => (
            <li key={item.label} role="none">
              <button
                role="menuitem"
                onClick={() => handleNavigation(item.href, item.typeOfHref)}
                className={`w-full text-left px-6 py-3 text-amber-800 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-150 ${
                  (isHomePage && item.typeOfHref === 'scroll') || pathname === item.href
                    ? 'text-amber-600 bg-amber-50'
                    : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full opacity-60" />
                  <span>{item.label}</span>
                </div>
              </button>
              {index < navItems.length - 1 && <div className="mx-6 h-px bg-amber-100" />}
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
