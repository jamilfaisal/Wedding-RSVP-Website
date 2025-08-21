import ImageWithFallback from '../../ui/image-with-fallback';
import floralIllustration from '/public/images/floral-illustration.png';

function AccommodationsHeader({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="text-center mb-12 relative">
      {renderFloralDecoration()}
      {renderSectionTitle(title)}
    </div>
  );
}

function renderSectionTitle(title: string) {
  return (
    <h2 className="text-4xl text-brown-800 mb-4" style={{ fontFamily: 'var(--font-harrington)' }}>
      {title}
    </h2>
  );
}

function renderFloralDecoration() {
  return (
    <div className="flex items-center justify-center mb-6">
      <ImageWithFallback
        src={floralIllustration}
        alt="Floral Decoration"
        className="w-48 h-auto opacity-90"
      />
    </div>
  );
}

export default AccommodationsHeader;
