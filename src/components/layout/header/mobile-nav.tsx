'use client';

import { Bars3Icon as Menu, XMarkIcon as X } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface MobileNavItem {
  name: string;
  href: string;
  typeOfHref: 'scroll' | 'page';
  label: string;
}

interface MobileNavProps {
  navItems: MobileNavItem[];
  isHomePage: boolean;
  currentPage: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleNavigation: (href: string, type: 'scroll' | 'page') => void;
}

function MobileNav({
  navItems,
  isHomePage,
  currentPage,
  isMobileMenuOpen,
  toggleMobileMenu,
  handleNavigation,
}: MobileNavProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="lg:hidden relative flex items-center">
      {renderMobileMenuButton(toggleMobileMenu, isHomePage, isMobileMenuOpen)}
      {renderDropdown(isMobileMenuOpen, navItems, handleNavigation, isHomePage, currentPage)}
      {isMobileMenuOpen && isMounted && renderBackdrop(toggleMobileMenu)}
    </div>
  );
}

function renderMobileMenuButton(
  toggleMobileMenu: () => void,
  isHomePage: boolean,
  isMobileMenuOpen: boolean
) {
  return (
    <button
      onClick={toggleMobileMenu}
      className={`p-2 transition-colors
          ${isHomePage ? 'text-sage-700' : 'text-brown-700 hover:text-sage-600'}`}
      style={{ fontFamily: 'var(--font-serif)' }}
      aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
      aria-expanded={isMobileMenuOpen}
      aria-haspopup="true"
    >
      {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}

function renderDropdown(
  isMobileMenuOpen: boolean,
  navItems: MobileNavItem[],
  handleNavigation: (href: string, type: 'scroll' | 'page') => void,
  isHomePage: boolean,
  currentPage: string
) {
  return (
    <div
      className={`absolute top-full right-0 mt-2 w-64 origin-top-right rounded-lg border border-sage-200 bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-black/5 transition-all duration-200 z-50 ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
      role="menu"
      aria-hidden={!isMobileMenuOpen}
    >
      <ul className="py-2 max-h-[70vh] overflow-y-auto">
        {navItems.map((item, index) => (
          <li key={item.label} role="none">
            <button
              role="menuitem"
              onClick={() => handleNavigation(item.href, item.typeOfHref)}
              className={`cursor-pointer w-full text-left px-6 py-3 text-brown-700 hover:text-sage-600 hover:bg-sage-50 transition-colors duration-150 ${
                (isHomePage && item.typeOfHref === 'scroll') || currentPage === item.href
                  ? 'text-sage-600 bg-sage-50'
                  : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sage-400 rounded-full opacity-60" />
                <span>{item.label}</span>
              </div>
            </button>
            {index < navItems.length - 1 && <div className="mx-6 h-px bg-sage-100" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

function renderBackdrop(toggleMobileMenu: () => void) {
  return createPortal(
    <div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-500"
      onClick={toggleMobileMenu}
      aria-hidden="true"
    />,
    document.body
  );
}

export default MobileNav;
