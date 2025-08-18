import { WeddingInfo } from '../types';

function HeaderWeddingLogo({ brideName, groomName, weddingDate }: WeddingInfo) {
  return (
    <div className="flex flex-col items-left group transition-all duration-300">
      <div
        className="text-2xl text-brown-800 group-hover:text-sage-700 transition-colors duration-300 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {groomName} & {brideName}
      </div>
      <div className="text-xs text-brown-600 font-light tracking-wide">
        {convertWeddingDateToString(weddingDate)}
      </div>
    </div>
  );
}

// Output example: December 20, 2025
function convertWeddingDateToString(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default HeaderWeddingLogo;
