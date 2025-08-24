import ImageWithFallback from '@/components/ui/image-with-fallback';
import floralIllustration from '/public/images/floral-illustration.png';

function TouristInfoHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-12 relative">
      <div className="flex items-center justify-center mb-6">
        <ImageWithFallback
          src={floralIllustration}
          alt="Floral Decoration"
          className="w-48 h-auto opacity-90"
        />
      </div>
      <h2 className="text-4xl text-brown-800 mb-4" style={{ fontFamily: 'var(--font-harrington)' }}>
        {title}
      </h2>
    </div>
  );
}

export default TouristInfoHeader;
