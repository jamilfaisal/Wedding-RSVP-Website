import { useState, useEffect, SetStateAction } from 'react';
import VenueMapError from './venue-map-error';
import VenueMapLoading from './venue-map-loading';

function VenueMap({ venueName }: { venueName: string }) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isMapError, setIsMapError] = useState(false);

  useEffect(() => {
    const timer = loadMapAfterDelay(setIsMapLoaded);
    return () => clearTimeout(timer);
  }, []);

  const handleMapError = () => {
    setIsMapError(true);
  };

  return (
    <div className="relative w-full">
      {isMapError && <VenueMapError />}
      {!isMapLoaded && <VenueMapLoading />}
      {isMapLoaded && !isMapError && (
        <iframe
          src="https://storage.googleapis.com/maps-solutions-cz8j820ovi/locator-plus/86xv/locator-plus.html"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${venueName}`}
          onError={handleMapError}
          className="w-full"
        ></iframe>
      )}
    </div>
  );
}

export default VenueMap;
function loadMapAfterDelay(setIsMapLoaded: {
  (value: SetStateAction<boolean>): void;
  (arg0: boolean): void;
}) {
  return setTimeout(() => {
    setIsMapLoaded(true);
  }, 800);
}
