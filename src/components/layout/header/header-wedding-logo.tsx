import { groomFirstName, brideFirstName } from '@/lib/config/wedding-config';
import { formatWeddingStartDate } from '../utils';

function HeaderWeddingLogo() {
  return (
    <div className="flex flex-col items-left group transition-all duration-300">
      <div
        className="text-2xl text-brown-800 group-hover:text-sage-700 transition-colors duration-300 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {groomFirstName} & {brideFirstName}
      </div>
      <div className="text-xs text-brown-600 font-light tracking-wide">
        {formatWeddingStartDate()}
      </div>
    </div>
  );
}

export default HeaderWeddingLogo;
