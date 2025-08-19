'use client';

import Link from 'next/link';

interface DesktopLink {
  name: string;
  href: string;
}

interface DesktopNavProps {
  sectionLinks: DesktopLink[];
  pageLinks: DesktopLink[];
  currentPage: string;
  isHomePage: boolean;
  scrollToSection: (hash: string) => void;
}

function DesktopNav({
  sectionLinks,
  pageLinks,
  currentPage,
  isHomePage,
  scrollToSection,
}: DesktopNavProps) {
  return (
    <div className="hidden lg:flex">
      <ul className="flex space-x-8">
        {sectionLinks.map((link) => renderSectionLinks(link, isHomePage, scrollToSection))}
        {pageLinks.map((link) => renderPageLinks(link, currentPage))}
      </ul>
    </div>
  );
}

function renderPageLinks(link: DesktopLink, currentPage: string) {
  const isCurrentPage = link.href === currentPage;
  return (
    <li key={`page-${link.name}`}>
      <Link href={link.href}>
        <button
          className={`cursor-pointer text-base tracking-wide transition-all duration-300 relative group px-3 py-2
                  ${isCurrentPage ? 'text-sage-700' : 'text-brown-700 hover:text-sage-600'}`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {link.name}
          {renderUnderline(isCurrentPage)}
          {renderBotanicalDot()}
        </button>
      </Link>
    </li>
  );
}

function renderBotanicalDot() {
  return (
    <div className="absolute -top-1 -right-1 w-1 h-1 bg-orange-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
  );
}

function renderSectionLinks(
  link: DesktopLink,
  isHomePage: boolean,
  scrollToSection: (hash: string) => void
) {
  return (
    <li key={`section-${link.name}`}>
      <Link href={`/${link.href}`}>
        <button
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              scrollToSection(link.href);
            }
          }}
          className={`cursor-pointer text-base tracking-wide transition-all duration-300 relative group px-3 py-2
                  ${isHomePage ? 'text-sage-700' : 'text-brown-700 hover:text-sage-600'}`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {link.name}
          {renderUnderline(isHomePage)}
          {renderBotanicalDot()}
        </button>
      </Link>
    </li>
  );
}

export default DesktopNav;
function renderUnderline(isHomePage: boolean) {
  return (
    <span
      className={`absolute -bottom-1 left-0 h-px bg-sage-400 transition-all duration-300
                    ${isHomePage ? 'w-full' : 'w-0 group-hover:w-full'}`}
    />
  );
}
