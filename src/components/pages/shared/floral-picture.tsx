import floralIllustration from '@public/images/floral-illustration.png';
import ImageWithFallback from '../../ui/image-with-fallback';

interface FloralPictureProps {
  className?: string;
  width?: number;
  height?: number;
  opacity?: string;
}

export function FloralPicture({
  className = 'mt-8 mb-4',
  width = 200,
  height = 150,
  opacity = 'opacity-60',
}: FloralPictureProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="relative">
        <ImageWithFallback
          src={floralIllustration}
          alt="Elegant floral illustration"
          width={width}
          height={height}
          className={opacity}
        />
      </div>
    </div>
  );
}
