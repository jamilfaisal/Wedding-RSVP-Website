import { HeaderDiamondLogo } from './header-diamond-logo';
import { CoupleInfo } from '../types';

export function HeaderWeddingLogo({ brideName, groomName }: CoupleInfo) {
  return (
    <div className="flex items-center space-x-2">
      <HeaderDiamondLogo />
      <span className="text-amber-500">
        {brideName} & {groomName}
      </span>
    </div>
  );
}
