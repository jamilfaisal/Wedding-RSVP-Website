'use client';

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
  handleNavigation: (href: string, type: 'scroll' | 'page') => void;
}

function DesktopNav({
  sectionLinks,
  pageLinks,
  currentPage,
  isHomePage,
  scrollToSection,
  handleNavigation,
}: DesktopNavProps) {
  return (
    <div className="hidden lg:flex">
      <ul className="flex space-x-8">
        {sectionLinks.map((link) =>
          renderSectionLinks(link, isHomePage, scrollToSection, handleNavigation)
        )}
        {pageLinks.map((link) => renderPageLinks(link, currentPage, handleNavigation))}
      </ul>
    </div>
  );
}

function renderPageLinks(
  link: DesktopLink,
  currentPage: string,
  handleNavigation: (href: string, type: 'scroll' | 'page') => void
) {
  const isCurrentPage = link.href === currentPage;
  return (
    <li key={`page-${link.name}`}>
      <button
        onClick={() => handleNavigation(link.href, 'page')}
        className={`cursor-pointer text-base tracking-wide transition-all duration-300 relative group px-3 py-2
                ${isCurrentPage ? 'text-sage-700' : 'text-brown-700 hover:text-sage-600'}`}
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {link.name}
        {renderUnderline(isCurrentPage)}
        {renderBotanicalDot()}
      </button>
    </li>
  );
}

function renderBotanicalDot() {
  return (
    <div className="absolute -top-1 -right-1 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
  );
}

function renderSectionLinks(
  link: DesktopLink,
  isHomePage: boolean,
  scrollToSection: (hash: string) => void,
  handleNavigation: (href: string, type: 'scroll' | 'page') => void
) {
  return (
    <li key={`section-${link.name}`}>
      <button
        onClick={() => handleNavigation(link.href, 'scroll')}
        className={`cursor-pointer text-base tracking-wide transition-all duration-300 relative group px-3 py-2
                ${isHomePage ? 'text-sage-700' : 'text-brown-700 hover:text-sage-600'}`}
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {link.name}
        {renderUnderline(isHomePage)}
        {renderBotanicalDot()}
      </button>
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
