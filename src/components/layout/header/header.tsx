'use client';

import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import HeaderWeddingLogo from './header-wedding-logo';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';
import LanguageSwitcher from '../../ui/language-switcher';
import { checkIsHomePage } from '../utils';

function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPage = usePathname();
  const router = useRouter();
  const isHomePage = checkIsHomePage(currentPage);

  const sectionLinks = [
    { name: t('navigation.home'), href: '#home' },
    { name: t('navigation.ceremony'), href: '#ceremony' },
    { name: t('navigation.details'), href: '#details' },
    { name: t('navigation.timeline'), href: '#timeline' },
    { name: t('playlist.title').replace(' 🎵', ''), href: '#playlist' },
  ];

  const pageLinks = [
    { name: t('navigation.rsvp'), href: '/rsvp' },
    { name: t('navigation.accommodations'), href: '/accommodations' },
    { name: t('navigation.touristyThings'), href: '/touristy-things' },
    { name: t('navigation.giftRegistry'), href: '/gift-registry' },
    { name: t('navigation.contactFAQs'), href: '/contact-faqs' },
  ];

  const combinedLinksForMobileNav = [
    ...sectionLinks.map((link) => ({ ...link, typeOfHref: 'scroll' as const, label: link.name })),
    ...pageLinks.map((link) => ({ ...link, typeOfHref: 'page' as const, label: link.name })),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isHomePage) {
      scrollToStoredSectionAfterDelay();
    }
  }, [isHomePage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionHref: string) => {
    const element = document.querySelector(sectionHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const storeSectionToScrollThenGoToHomePage = (href: string) => {
    sessionStorage.setItem('scrollToSection', href);
    const locale = currentPage.split('/')[1] || 'en';
    router.push(`/${locale}`);
  };

  const navigateToNewPage = (href: string) => {
    const locale = currentPage.split('/')[1] || 'en';
    router.push(`/${locale}${href}`);
  };

  const handleNavigation = (href: string, type: 'scroll' | 'page') => {
    setIsMobileMenuOpen(false);

    if (type === 'scroll') {
      if (isHomePage) {
        scrollToSection(href);
      } else {
        storeSectionToScrollThenGoToHomePage(href);
      }
    } else {
      navigateToNewPage(href);
    }
  };

  return (
    <Disclosure
      as="header"
      className={`fixed top-0 w-full z-50 transition-colors duration-500
       ${
         isScrolled && !isMobileMenuOpen
           ? 'bg-ivory-50/95 backdrop-blur-sm shadow-lg border-b border-sage-100'
           : 'bg-transparent'
       }`}
    >
      <div className="max-w-4xl mx-auto px-8 py-6">
        <div className="flex items-center relative justify-center">
          <div className="flex-shrink-0 me-8">
            <Link href={`/${currentPage.split('/')[1] || 'en'}`}>
              <HeaderWeddingLogo />
            </Link>
          </div>

          <div className="hidden md:flex flex-1">
            <DesktopNav
              sectionLinks={sectionLinks}
              pageLinks={pageLinks}
              currentPage={currentPage}
              isHomePage={isHomePage}
              handleNavigation={handleNavigation}
            />
          </div>

          <div className="hidden md:flex flex-shrink-0 ms-8">
            <LanguageSwitcher isMobileMenuOpen={isMobileMenuOpen} />
          </div>

          <div className="md:hidden flex items-center gap-4 ms-auto">
            <LanguageSwitcher isMobileMenuOpen={isMobileMenuOpen} />
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
      </div>
    </Disclosure>
  );
}

function scrollToStoredSectionAfterDelay() {
  const sectionToScrollTo = sessionStorage.getItem('scrollToSection');
  if (sectionToScrollTo) {
    sessionStorage.removeItem('scrollToSection');

    setTimeout(() => {
      const element = document.querySelector(sectionToScrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }
}

export default Header;
