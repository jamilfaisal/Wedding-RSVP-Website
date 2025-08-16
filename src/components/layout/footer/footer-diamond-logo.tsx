export function FooterDiamondLogo() {
  const diamondLogoSeparatorLeft = (
    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
  );
  const diamondLogo = <div className="w-8 h-8 border-2 border-amber-400 rotate-45"></div>;
  const diamondLogoSeparatorRight = (
    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
  );
  return (
    <div className="flex items-center justify-center space-x-4 mb-4">
      {diamondLogoSeparatorLeft}
      {diamondLogo}
      {diamondLogoSeparatorRight}
    </div>
  );
}

export default FooterDiamondLogo;
