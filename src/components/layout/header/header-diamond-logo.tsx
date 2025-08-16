type DiamondLogoProps = {
  outerCircleSize?: string;
  innerDiamondSize?: string;
  gradientFrom?: string;
  gradientTo?: string;
  diamondBorderColor?: string;
};

export function HeaderDiamondLogo({
  outerCircleSize: sizeClass = 'w-8 h-8',
  innerDiamondSize: diamondSizeClass = 'w-4 h-4',
  gradientFrom = 'from-rose-400',
  gradientTo = 'to-amber-400',
  diamondBorderColor = 'border-white',
}: DiamondLogoProps) {
  return (
    <div
      className={`${sizeClass} bg-gradient-to-br ${gradientFrom} ${gradientTo} 
      rounded-full flex items-center justify-center`}
    >
      <div
        className={`${diamondSizeClass} border-2 ${diamondBorderColor} rotate-45 flex items-center justify-center`}
      />
    </div>
  );
}
