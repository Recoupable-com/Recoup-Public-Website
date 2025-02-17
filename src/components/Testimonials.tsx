const testimonials = [
  {
    content: "Within 6 months of using Recoupable, we've seen a 215% increase in streaming revenue and saved over 600 hours in manual work. The AI-powered insights have been game-changing for our roster's growth.",
    author: "Sarah Mitchell",
    role: "Head of Digital",
    company: "Universal Music Group",
    image: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=0D8ABC&color=fff"
  },
  {
    content: "Recoupable's AI has transformed how we manage our 200+ artist roster. We've achieved 142% YoY growth while reducing our team's workload by 40%. The ROI is incredible.",
    author: "Michael Chen",
    role: "CEO",
    company: "88rising",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=FF6B6B&color=fff"
  },
  {
    content: "The platform paid for itself in the first month. Our artists are growing faster than ever, with an average of 85% increase in monthly listeners. The AI insights are incredibly accurate.",
    author: "David Thompson",
    role: "Founder",
    company: "300 Entertainment",
    image: "https://ui-avatars.com/api/?name=David+Thompson&background=4CAF50&color=fff"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-white tracking-wide uppercase">Success Stories</h2>
          <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Trusted by Industry Leaders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            See how leading labels are transforming their operations with AI
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col bg-white rounded-2xl p-8 hover:scale-[1.02] transition-all duration-200 hover:shadow-2xl"
            >
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full border-2 border-gray-100"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">{testimonial.author}</p>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Cloud */}
        <div className="mt-20">
          <p className="text-center text-base font-semibold text-gray-400 tracking-wide uppercase mb-12">
            Powering Growth for Leading Labels
          </p>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-6 lg:grid-cols-5">
            {[
              { name: "Universal Music", logo: "https://placehold.co/160x50/111/FFF?text=Universal" },
              { name: "Sony Music", logo: "https://placehold.co/160x50/111/FFF?text=Sony" },
              { name: "88rising", logo: "https://placehold.co/160x50/111/FFF?text=88rising" },
              { name: "300 Entertainment", logo: "https://placehold.co/160x50/111/FFF?text=300" },
              { name: "EMPIRE", logo: "https://placehold.co/160x50/111/FFF?text=EMPIRE" }
            ].map((company) => (
              <div key={company.name} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img 
                  className="h-12 opacity-50 hover:opacity-100 transition-opacity duration-200" 
                  src={company.logo} 
                  alt={company.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 