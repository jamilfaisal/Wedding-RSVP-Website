import ImageWithFallback from '../image-with-fallback';
import proposalPhoto from '/public/images/proposal-photo.png';

function BackgroundImage() {
  return (
    <div className="absolute inset-0">
      <ImageWithFallback
        src={proposalPhoto}
        alt="Faris proposing to Zina with romantic heart-shaped floral arrangement"
        className="w-full h-full object-cover opacity-50"
        priority={true}
        fill={true}
        sizes="100vw"
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

        {/* Mid-left vertical floral line */}
        <div className="absolute left-1/8 top-1/3 bottom-1/3 w-16">
          <div className="absolute top-8 left-2 w-3 h-3 bg-gradient-radial from-pastel-purple-200/50 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-20 left-4 w-4 h-4 bg-gradient-radial from-sage-200/55 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-32 left-1 w-5 h-5 bg-gradient-radial from-pastel-pink-200/60 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-44 left-6 w-3 h-3 bg-gradient-radial from-orange-200/55 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-56 left-3 w-4 h-4 bg-gradient-radial from-pastel-blue-200/50 to-transparent rounded-full blur-sm"></div>
        </div>

        {/* Mid-right vertical floral line */}
        <div className="absolute right-1/8 top-1/3 bottom-1/3 w-16">
          <div className="absolute top-12 right-2 w-4 h-4 bg-gradient-radial from-pastel-green-200/55 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-24 right-5 w-3 h-3 bg-gradient-radial from-brown-200/60 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-36 right-1 w-5 h-5 bg-gradient-radial from-pastel-purple-200/55 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-48 right-7 w-4 h-4 bg-gradient-radial from-sage-200/50 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-60 right-3 w-3 h-3 bg-gradient-radial from-pastel-pink-200/55 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Additional vibrant accent clusters */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        {/* Bright accent spots */}
        <div className="absolute top-1/5 left-1/3 w-20 h-20">
          <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-radial from-pastel-pink-300/60 via-pastel-pink-200/40 to-transparent rounded-full blur-md"></div>
          <div className="absolute top-8 left-8 w-4 h-4 bg-gradient-radial from-pastel-purple-300/50 via-pastel-purple-200/30 to-transparent rounded-full blur-md"></div>
        </div>

        <div className="absolute top-3/5 right-1/3 w-24 h-24">
          <div className="absolute top-3 right-3 w-7 h-7 bg-gradient-radial from-pastel-blue-300/60 via-pastel-blue-200/40 to-transparent rounded-full blur-md"></div>
          <div className="absolute top-10 right-10 w-5 h-5 bg-gradient-radial from-pastel-green-300/55 via-pastel-green-200/35 to-transparent rounded-full blur-md"></div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 w-18 h-18">
          <div className="absolute bottom-2 left-2 w-5 h-5 bg-gradient-radial from-orange-300/65 via-orange-200/45 to-transparent rounded-full blur-md"></div>
          <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-radial from-brown-300/50 via-brown-200/30 to-transparent rounded-full blur-md"></div>
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

      {/* Top Edge Delicate Floral Border */}
      <div className="absolute top-0 left-1/4 right-1/4 h-32 opacity-25 pointer-events-none">
        <div className="absolute top-4 left-8 w-6 h-6 bg-gradient-radial from-pastel-pink-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-8 left-20 w-4 h-4 bg-gradient-radial from-sage-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-6 left-32 w-5 h-5 bg-gradient-radial from-pastel-purple-300/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-10 right-8 w-6 h-6 bg-gradient-radial from-orange-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-4 right-20 w-4 h-4 bg-gradient-radial from-pastel-blue-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-8 right-32 w-5 h-5 bg-gradient-radial from-brown-300/40 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Bottom Edge Delicate Floral Border */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-32 opacity-25 pointer-events-none">
        <div className="absolute bottom-6 left-12 w-5 h-5 bg-gradient-radial from-pastel-green-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-10 left-24 w-4 h-4 bg-gradient-radial from-orange-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-4 left-36 w-6 h-6 bg-gradient-radial from-sage-300/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-8 right-12 w-5 h-5 bg-gradient-radial from-pastel-pink-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-12 right-24 w-4 h-4 bg-gradient-radial from-pastel-purple-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute bottom-6 right-36 w-6 h-6 bg-gradient-radial from-brown-300/40 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Left Edge Delicate Floral Border */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-32 opacity-25 pointer-events-none">
        <div className="absolute left-4 top-8 w-5 h-5 bg-gradient-radial from-sage-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute left-8 top-20 w-4 h-4 bg-gradient-radial from-pastel-blue-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute left-6 top-32 w-6 h-6 bg-gradient-radial from-orange-300/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute left-10 bottom-8 w-5 h-5 bg-gradient-radial from-pastel-pink-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute left-4 bottom-20 w-4 h-4 bg-gradient-radial from-brown-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute left-8 bottom-32 w-6 h-6 bg-gradient-radial from-pastel-purple-300/40 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Right Edge Delicate Floral Border */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-32 opacity-25 pointer-events-none">
        <div className="absolute right-6 top-12 w-5 h-5 bg-gradient-radial from-pastel-green-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute right-10 top-24 w-4 h-4 bg-gradient-radial from-sage-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute right-4 top-36 w-6 h-6 bg-gradient-radial from-pastel-purple-300/40 to-transparent rounded-full blur-sm"></div>
        <div className="absolute right-8 bottom-12 w-5 h-5 bg-gradient-radial from-orange-300/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute right-12 bottom-24 w-4 h-4 bg-gradient-radial from-pastel-pink-300/60 to-transparent rounded-full blur-sm"></div>
        <div className="absolute right-6 bottom-36 w-6 h-6 bg-gradient-radial from-brown-300/40 to-transparent rounded-full blur-sm"></div>
      </div>
    </div>
  );
}

export default BackgroundImage;
