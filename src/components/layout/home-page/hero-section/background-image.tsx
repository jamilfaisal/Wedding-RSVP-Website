import ImageWithFallback from '../image-with-fallback';
import proposalPhoto from '/public/images/proposal-photo.png';

function BackgroundImage() {
  return (
    <div className="absolute inset-0">
      <ImageWithFallback
        src={proposalPhoto}
        alt="Groom proposing to Bride with romantic heart-shaped floral arrangement"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/70 via-white/50 to-sage-50/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ivory-100/40 via-transparent to-orange-50/30"></div>

      {/* Enhanced colorful gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink-100/25 via-transparent to-pastel-purple-100/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pastel-blue-100/20 via-transparent to-pastel-green-100/25"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-sage-100/35"></div>

      {/* Additional scattered watercolor floral clusters across the center area */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {/* Center-left floral cluster */}
        <div className="absolute top-1/3 left-1/6 w-32 h-32">
          <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-radial from-pastel-pink-200/70 via-pastel-pink-100/50 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-6 left-12 w-6 h-6 bg-gradient-radial from-sage-200/60 via-sage-100/40 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-12 left-4 w-4 h-4 bg-gradient-radial from-pastel-purple-200/50 via-pastel-purple-100/35 to-transparent rounded-full blur-sm"></div>
        </div>

        {/* Center-right floral cluster */}
        <div className="absolute top-2/5 right-1/6 w-28 h-28">
          <div className="absolute top-0 right-0 w-7 h-7 bg-gradient-radial from-orange-200/70 via-orange-100/50 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-8 right-8 w-5 h-5 bg-gradient-radial from-pastel-blue-200/60 via-pastel-blue-100/40 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-4 right-12 w-6 h-6 bg-gradient-radial from-pastel-green-200/55 via-pastel-green-100/38 to-transparent rounded-full blur-sm"></div>
        </div>

        {/* Upper center floral spray */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 w-40 h-20">
          <div className="absolute top-0 left-4 w-5 h-5 bg-gradient-radial from-pastel-pink-200/60 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-2 left-12 w-3 h-3 bg-gradient-radial from-sage-200/55 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-4 left-20 w-4 h-4 bg-gradient-radial from-orange-200/65 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-1 left-28 w-3 h-3 bg-gradient-radial from-pastel-purple-200/50 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-6 left-32 w-5 h-5 bg-gradient-radial from-pastel-blue-200/55 to-transparent rounded-full blur-sm"></div>
        </div>

        {/* Lower center floral spray */}
        <div className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 w-36 h-18">
          <div className="absolute bottom-0 left-2 w-4 h-4 bg-gradient-radial from-pastel-green-200/60 to-transparent rounded-full blur-sm"></div>
          <div className="absolute bottom-2 left-10 w-6 h-6 bg-gradient-radial from-brown-200/65 to-transparent rounded-full blur-sm"></div>
          <div className="absolute bottom-4 left-18 w-3 h-3 bg-gradient-radial from-pastel-pink-200/55 to-transparent rounded-full blur-sm"></div>
          <div className="absolute bottom-1 left-26 w-5 h-5 bg-gradient-radial from-sage-200/60 to-transparent rounded-full blur-sm"></div>
          <div className="absolute bottom-3 left-30 w-4 h-4 bg-gradient-radial from-orange-200/58 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Delicate Floral Border Overlays */}
      {/* Top Left Corner Watercolor Florals */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-30 pointer-events-none">
        <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-radial from-pastel-pink-200/60 via-pastel-pink-100/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-12 left-20 w-12 h-12 bg-gradient-radial from-sage-200/50 via-sage-100/30 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-20 left-8 w-8 h-8 bg-gradient-radial from-pastel-purple-200/40 via-pastel-purple-100/20 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-28 left-28 w-10 h-10 bg-gradient-radial from-orange-200/50 via-orange-100/30 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Top Right Corner Watercolor Florals */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-30 pointer-events-none">
        <div className="absolute top-8 right-8 w-14 h-14 bg-gradient-radial from-pastel-blue-200/50 via-pastel-blue-100/30 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-16 right-24 w-18 h-18 bg-gradient-radial from-sage-200/60 via-sage-100/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-24 right-12 w-10 h-10 bg-gradient-radial from-pastel-purple-200/40 via-pastel-purple-100/20 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-32 right-32 w-12 h-12 bg-gradient-radial from-orange-200/50 via-orange-100/30 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Bottom Left Corner Watercolor Florals */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30 pointer-events-none">
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-radial from-pastel-green-200/50 via-pastel-green-100/30 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-16 left-26 w-12 h-12 bg-gradient-radial from-brown-200/60 via-brown-100/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-24 left-12 w-8 h-8 bg-gradient-radial from-pastel-pink-200/40 via-pastel-pink-100/20 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-radial from-sage-200/50 via-sage-100/30 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Bottom Right Corner Watercolor Florals */}
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-30 pointer-events-none">
        <div className="absolute bottom-8 right-8 w-15 h-15 bg-gradient-radial from-orange-200/60 via-orange-100/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-28 w-10 h-10 bg-gradient-radial from-pastel-blue-200/40 via-pastel-blue-100/20 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-28 right-16 w-12 h-12 bg-gradient-radial from-pastel-purple-200/50 via-pastel-purple-100/30 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-36 right-36 w-8 h-8 bg-gradient-radial from-sage-200/40 via-sage-100/20 to-transparent rounded-full blur-sm"></div>
      </div>
    </div>
  );
}

export default BackgroundImage;
