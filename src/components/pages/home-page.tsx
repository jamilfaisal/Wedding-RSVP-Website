const coupleInfo = {
  brideName: 'Faris',
  groomName: 'Zina',
};

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-cream-100 to-amber-100">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
            <defs>
              <pattern
                id="geometric"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <polygon points="10,2 18,10 10,18 2,10" fill="#d97706" opacity="0.3" />
                <circle cx="10" cy="10" r="1" fill="#f59e0b" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)" />
          </svg>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-200 rotate-45 opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-300 rotate-12 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Arabic welcome */}
        <div className="mb-6">
          <p className="text-2xl text-amber-700 font-light" dir="rtl" lang="ar">
            أهلاً وسهلاً
          </p>
          <p className="text-amber-600 mt-2" dir="rtl" lang="ar">
            يسعدنا دعوتكم لحضور حفل زفافنا
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="w-8 h-8 border-2 border-amber-400 rotate-45"></div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>

        {/* English welcome */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl text-amber-800 mb-4">
            {coupleInfo.brideName} & {coupleInfo.groomName}
          </h1>
          <p className="text-xl text-amber-700 mb-2">Welcome to our Wedding Celebration</p>
          <p className="text-amber-600">
            We invite you to join us as we begin our journey together
          </p>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
      <div
        className="absolute top-3/4 right-16 w-3 h-3 bg-amber-300 rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-amber-500 rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
