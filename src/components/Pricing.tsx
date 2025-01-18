'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Access to basic AI tools",
        "Limited content generation",
        "Basic analytics",
        "Community support"
      ],
      cta: "Get started",
      link: "/signup",
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for growing artists",
      features: [
        "All Free features",
        "Unlimited content generation",
        "Advanced analytics & insights",
        "Priority support",
        "Custom branding",
        "Team collaboration"
      ],
      cta: "Start free trial",
      link: "/signup?plan=pro",
      popular: true
    },
    {
      name: "Label",
      price: "99",
      description: "For labels and management",
      features: [
        "All Pro features",
        "Multiple artist management",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting"
      ],
      cta: "Contact sales",
      link: "/contact",
      popular: false
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white p-8 rounded-2xl border ${
                tier.popular ? 'border-black' : 'border-gray-100'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-medium">${tier.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.link}
                className={`block text-center py-4 rounded-xl text-[15px] font-medium transition-all ${
                  tier.popular
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 