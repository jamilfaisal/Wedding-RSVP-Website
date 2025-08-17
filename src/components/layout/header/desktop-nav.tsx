'use client';

import Link from 'next/link';

export interface DesktopSectionLink {
  name: string;
  href: string;
}

export interface DesktopPageLink {
  name: string;
  href: string;
}

interface DesktopNavProps {
  sectionLinks: DesktopSectionLink[];
  pageLinks: DesktopPageLink[];
  isHomePage: boolean;
  scrollToSection: (hash: string) => void;
}

export function DesktopNav({
  sectionLinks,
  pageLinks,
  isHomePage,
  scrollToSection,
}: DesktopNavProps) {
  return (
    <div className="hidden lg:flex space-x-8">
      <ul className="flex space-x-6">
        {/* Section Links */}
        {sectionLinks.map((link) => (
          <li key={link.name}>
            <Link href={`/${link.href}`}>
              <button
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
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
      {/* Page Links */}
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
  );
}
