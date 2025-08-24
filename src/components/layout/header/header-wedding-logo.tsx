'use client';

import { useTranslation } from 'react-i18next';
import { formatWeddingStartDate } from '../utils';

function HeaderWeddingLogo() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  return (
    <div className="flex flex-col items-left group transition-all duration-300">
      <div
        className="text-2xl text-brown-800 group-hover:text-sage-700 transition-colors duration-300 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {t('weddingInfo.groomFirstName')} & {t('weddingInfo.brideFirstName')}
      </div>
      <div className="text-xs text-brown-600 font-light tracking-wide">
        {formatWeddingStartDate(locale)}
      </div>
    </div>
  );
}

export default HeaderWeddingLogo;
