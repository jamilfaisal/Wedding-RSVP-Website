type WeddingLogoProps = {
  brideName: string;
  groomName: string;
};

export function WeddingLogo({ brideName, groomName }: WeddingLogoProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="w-8 h-8 bg-gradient-to-br from-rose-400 to-amber-400
        rounded-full flex items-center justify-center"
      >
        <div className="w-4 h-4 border-2 border-white rotate-45 flex items-center justify-center"></div>
      </div>
      <span className="text-amber-500">
        {brideName} & {groomName}
      </span>
    </div>
  );
}
