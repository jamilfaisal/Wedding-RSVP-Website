import { groomFirstName, brideFirstName, weddingStartDate } from '@/lib/config/wedding-config';
import { getMonthAsFullWord } from '../utils';
import { DynamicYear } from './dynamic-year';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sage-50 to-ivory-100 py-8 border-t-2 border-sage-100">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <div className="mb-8">
          <FooterLogo />
          <h3
            className="text-3xl text-brown-800 mb-3"
            style={{ fontFamily: 'var(--font-harrington)' }}
          >
            {groomFirstName} & {brideFirstName}
          </h3>
          <p className="text-lg text-brown-600 mb-6 font-light">
            We can&apos;t wait to celebrate with you in {getMonthAsFullWord(weddingStartDate)}!
          </p>
          {BotanicalDecoration()}
        </div>
        <Copyright />
      </div>
    </footer>
  );
}

function BotanicalDecoration() {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <div className="w-1 h-1 bg-sage-300 rounded-full"></div>
      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
      <div className="w-3 h-3 bg-brown-300 rounded-full"></div>
      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
      <div className="w-1 h-1 bg-sage-300 rounded-full"></div>
    </div>
  );
}

function Copyright() {
  return (
    <div>
      <div className="pt-6 border-t border-brown-200 mt-8">
        <p className="text-sm text-brown-500 font-light">
          © <DynamicYear /> {groomFirstName} & {brideFirstName}. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-brown-300 to-transparent"></div>
      <div className="w-12 h-12 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center border-2 border-sage-200">
        <div className="w-5 h-5 border-2 border-sage-600 rounded-sm transform rotate-45"></div>
      </div>
      <div className="w-16 h-px bg-gradient-to-l from-transparent via-brown-300 to-transparent"></div>
    </div>
  );
}

export default Footer;
