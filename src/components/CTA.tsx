import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your label operations?
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            Join the industry leaders who are saving 20+ hours per week and accelerating artist growth with Recoupable.
          </p>
          
          {/* Value Props */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white font-medium">30-Day Free Trial</span>
              </div>
              <p className="text-sm text-gray-400">No credit card required. Full access to all features.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white font-medium">Dedicated Support</span>
              </div>
              <p className="text-sm text-gray-400">Personal onboarding and ongoing technical support.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white font-medium">Easy Integration</span>
              </div>
              <p className="text-sm text-gray-400">Connects with all major music platforms in minutes.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.recoupable.com/signin"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Demo
            </a>
            <a
              href="https://docs.recoupable.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 