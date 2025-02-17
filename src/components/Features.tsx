'use client';

export default function Features() {
  const features = [
    {
      title: "Save 450+ Hours Monthly",
      description: "Our AI automates playlist pitching, social media, and fan engagement. Labels save an average of 450 hours per month across their team.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "142% Revenue Growth",
      description: "AI-powered optimization leads to an average of 142% annual revenue growth. Our top-performing labels have seen up to 300% growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "85M+ Playlist Reach",
      description: "Our AI identifies and targets the most relevant playlists for your artists, reaching over 85M monthly listeners across platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "24/7 AI Optimization",
      description: "Our AI works around the clock, analyzing millions of data points to optimize your artists' performance across all major platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-black tracking-wide uppercase">Why Labels Choose Us</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            AI-Powered Label Management
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Join Universal, Sony, and 500+ labels using AI to scale their rosters
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black rounded-2xl border border-gray-200 hover:border-black transition-all duration-200 hover:shadow-lg"
              >
                <div>
                  <span className="rounded-xl inline-flex p-3 bg-black text-white group-hover:scale-110 transition-all duration-200">
                    {feature.icon}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 