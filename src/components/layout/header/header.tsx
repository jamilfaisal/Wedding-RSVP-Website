'use client';

import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WeddingInfo } from '../types';
import HeaderWeddingLogo from './header-wedding-logo';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';
import { checkIsHomePage } from '../utils';

const sectionLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Ceremony', href: '#ceremony' },
  { name: 'Details', href: '#details' },
  { name: 'Timeline', href: '#timeline' },
];

const pageLinks = [
  { name: 'RSVP', href: '/rsvp' },
  { name: 'Accommodations', href: '/accomodations' },
  { name: 'Touristy Things', href: '/touristy-things' },
  { name: 'Contact & FAQ', href: '/contact' },
];

const combinedLinksForMobileNav = [
  ...sectionLinks.map((link) => ({ ...link, typeOfHref: 'scroll' as const, label: link.name })),
  ...pageLinks.map((link) => ({ ...link, typeOfHref: 'page' as const, label: link.name })),
];

function Header({ weddingInfo: weddingInfo }: { weddingInfo: WeddingInfo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPage = usePathname();
  const isHomePage = checkIsHomePage(currentPage);

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
      className={`fixed top-0 w-full z-50 transition-all duration-700
       ${
         isHomePage
           ? isScrolled
             ? 'bg-ivory-50/95 backdrop-blur-sm shadow-lg border-b border-sage-100'
             : 'bg-transparent'
           : 'bg-ivory-50/95 backdrop-blur-sm shadow-lg border-b border-sage-100'
       }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center relative">
          <Link href="/#home">
            <HeaderWeddingLogo {...weddingInfo} />
          </Link>

          <DesktopNav
            sectionLinks={sectionLinks}
            pageLinks={pageLinks}
            currentPage={currentPage}
            isHomePage={isHomePage}
            scrollToSection={scrollToSection}
          />
          <MobileNav
            navItems={combinedLinksForMobileNav}
            isHomePage={isHomePage}
            currentPage={currentPage}
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

export default Header;
