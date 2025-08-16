'use client';

import { Disclosure } from '@headlessui/react';
import { WeddingLogo } from './wedding-logo';
import { useEffect, useState } from 'react';

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Ceremony', href: '#ceremony' },
  { name: 'Details', href: '#details' },
  { name: 'Timeline', href: '#timeline' },
];

type HeaderProps = {
  brideName: string;
  groomName: string;
};

export default function Header(headerProps: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionHref: string) => {
    const element = document.querySelector(sectionHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Disclosure
      as="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300
     ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <WeddingLogo {...headerProps} />

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-amber-800 hover:text-amber-600 transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Disclosure>
  );
}
