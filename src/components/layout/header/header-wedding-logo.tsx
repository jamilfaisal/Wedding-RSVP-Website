import { WeddingInfo } from '../types';
import { formatDateToMonthDayYear } from '../utils';

function HeaderWeddingLogo({ brideFirstName, groomFirstName, weddingStartDate }: WeddingInfo) {
  return (
    <div className="flex flex-col items-left group transition-all duration-300">
      <div
        className="text-2xl text-brown-800 group-hover:text-sage-700 transition-colors duration-300 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {groomFirstName} & {brideFirstName}
      </div>
      <div className="text-xs text-brown-600 font-light tracking-wide">
        {formatDateToMonthDayYear(weddingStartDate)}
      </div>
    </div>
  );
}

export default HeaderWeddingLogo;
