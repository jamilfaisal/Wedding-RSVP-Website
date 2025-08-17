'use client';

import { Disclosure } from '@headlessui/react';
import { HeaderWeddingLogo } from './header-wedding-logo';
import { useEffect, useState } from 'react';
import { HeaderProps } from '../types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

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

const combinedLinksForMobileNav = [
  ...sectionLinks.map((link) => ({ ...link, typeOfHref: 'scroll' as const, label: link.name })),
  ...pageLinks.map((link) => ({ ...link, typeOfHref: 'page' as const, label: link.name })),
];

export default function Header(headerProps: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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

  const handleNavigation = (href: string, type: 'scroll' | 'page') => {
    setIsMobileMenuOpen(false);

    if (type === 'scroll') {
      if (isHomePage) {
        scrollToSection(href);
      } else {
        navigateToHomePageThenScrollToSection(href);
      }
    } else {
      navigateToNewPage(href);
    }
  };

  return (
    <Disclosure
      as="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300
       ${
         isHomePage
           ? isScrolled
             ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100'
             : 'bg-transparent'
           : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100'
       }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center relative">
          <Link href="/#home">
            <HeaderWeddingLogo {...headerProps.coupleInfo} />
          </Link>

          <DesktopNav
            sectionLinks={sectionLinks}
            pageLinks={pageLinks}
            isHomePage={isHomePage}
            scrollToSection={scrollToSection}
          />
          <MobileNav
            navItems={combinedLinksForMobileNav}
            isHomePage={isHomePage}
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen((o) => !o)}
            handleNavigation={handleNavigation}
          />
        </div>
      </div>
    </Disclosure>
  );
}
function navigateToNewPage(href: string) {
  window.location.href = href;
}

function navigateToHomePageThenScrollToSection(href: string) {
  window.location.href = `/${href}`;
}
