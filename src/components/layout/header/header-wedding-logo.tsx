import { CoupleInfo } from '../types';

function HeaderWeddingLogo({ brideName, groomName }: CoupleInfo) {
  return (
    <div className="flex items-center space-x-2">
      <HeaderDiamondLogo />
      <span className="text-amber-500">
        {brideName} & {groomName}
      </span>
    </div>
  );
}

function HeaderDiamondLogo() {
  const outerCircleSize = 'w-8 h-8';
  const innerDiamondSize = 'w-4 h-4';
  const gradientFrom = 'from-rose-400';
  const gradientTo = 'to-amber-400';
  const diamondBorderColor = 'border-white';
  return (
    <div
      className={`${outerCircleSize} bg-gradient-to-br ${gradientFrom} ${gradientTo}
      rounded-full flex items-center justify-center`}
    >
      <div
        className={`${innerDiamondSize} border-2 ${diamondBorderColor} rotate-45 flex items-center justify-center`}
      />
    </div>
  );
}

export default HeaderWeddingLogo;
