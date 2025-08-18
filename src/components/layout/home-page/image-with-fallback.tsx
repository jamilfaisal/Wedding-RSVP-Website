import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

function ImageWithFallback(props: ImageWithFallbackProps) {
  const [errorOccured, setErrorOccured] = useState(false);

  const handleError = () => {
    setErrorOccured(true);
  };

  const { src, alt, width, height, style, className, priority, fill, sizes } = props;

  const originalSrc = typeof src === 'string' ? src : src.src;

  return errorOccured ? (
    loadErrorImage(className, style, width, height, originalSrc)
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      priority={priority}
      fill={fill}
      sizes={sizes}
      onError={handleError}
    />
  );
}

function loadErrorImage(
  className: string | undefined,
  style: React.CSSProperties | undefined,
  width: number | undefined,
  height: number | undefined,
  originalSrc: string
) {
  return (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          width={width || 200}
          height={height || 200}
          data-original-url={originalSrc}
        />
      </div>
    </div>
  );
}

export default ImageWithFallback;
