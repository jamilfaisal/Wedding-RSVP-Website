import { CoupleInfo } from '../types';
import FooterLogo from './footer-logo';

function Footer(coupleInfo: CoupleInfo) {
  const copyRightInfo = `© ${new Date().getFullYear()} ${coupleInfo.brideName} & ${coupleInfo.groomName}. All rights reserved.`;
  return (
    <footer className="bg-gradient-to-r from-amber-100 to-amber-50 py-12 border-t border-amber-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FooterLogo />
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-amber-600">{copyRightInfo}</p>
      </div>
    </footer>
  );
}

export default Footer;
