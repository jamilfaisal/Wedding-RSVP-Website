import Link from 'next/link';
import { HeaderDiamondLogo } from './header-diamond-logo';

type WeddingLogoProps = {
  brideName: string;
  groomName: string;
};

export function HeaderWeddingLogo({ brideName, groomName }: WeddingLogoProps) {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <HeaderDiamondLogo />
      <span className="text-amber-500">
        {brideName} & {groomName}
      </span>
    </Link>
  );
}
