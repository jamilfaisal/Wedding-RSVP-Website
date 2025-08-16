'use client';

import { Disclosure } from '@headlessui/react';
import { HeaderWeddingLogo } from './header-wedding-logo';
import { useEffect, useState } from 'react';
import { HeaderProps } from '../types';
import Link from 'next/link';

const sectionLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Ceremony', href: '#ceremony' },
  { name: 'Details', href: '#details' },
  { name: 'Timeline', href: '#timeline' },
];

const pageLinks = [
  { name: 'RSVP', href: '/rsvp' },
  { name: 'Touristy Things', href: '/touristy-things' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

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
          <Link href="/">
            <HeaderWeddingLogo {...headerProps.coupleInfo} />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {/* Home section links */}
            <ul className="flex space-x-6">
              {sectionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={`/${link.href}`}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="cursor-pointer text-amber-800 hover:text-amber-600 transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
                    </button>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Page links */}
            <ul className="flex space-x-6">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-amber-800 hover:text-amber-600 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
