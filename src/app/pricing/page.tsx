'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      description: 'For artists just starting their journey in the music industry',
      price: 0,
      credits: 'Basic features',
      features: [
        'AI-powered press release generator',
        'Basic fan analytics dashboard',
        'Social media content suggestions',
        'Release checklist templates',
        'Community support',
        'Limited API access'
      ]
    },
    {
      name: 'Artist',
      description: 'For independent artists ready to grow their fanbase',
      price: 29,
      credits: 'Full feature access',
      features: [
        'Everything in Free, plus',
        'Advanced fan behavior analytics',
        'Personalized marketing strategies',
        'Automated content scheduling',
        'Custom release planning tools',
        'Priority email support'
      ]
    },
    {
      name: 'Pro',
      description: 'For serious artists scaling their music career',
      price: billingPeriod === 'monthly' ? 79 : 65,
      credits: 'Enhanced features',
      isPopular: true,
      discount: 'FIRST MONTH 50% OFF',
      features: [
        'Everything in Artist, plus',
        'Real-time fan engagement tracking',
        'AI-driven revenue optimization',
        'Multi-platform campaign management',
        'Advanced performance analytics',
        'Dedicated success manager'
      ]
    },
    {
      name: 'Label',
      description: 'For labels and management companies',
      price: 199,
      credits: 'Enterprise features',
      features: [
        'Everything in Pro, plus',
        'Multi-artist account management',
        'Custom API integration',
        'Advanced revenue forecasting',
        'White-label reporting',
        'Custom onboarding & training'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-medium mb-4">Pricing</h1>
            <p className="text-xl text-gray-600">
              From emerging artists to established labels, we have a plan to accelerate your growth.
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mb-12">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-black' : 'text-gray-500'}`}>
              MONTHLY
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
              aria-label="Toggle billing period"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${billingPeriod === 'yearly' ? 'text-black' : 'text-gray-500'}`}>
              YEARLY
              <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded">
                2 MONTHS FREE
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`relative bg-white rounded-2xl border ${
                  plan.isPopular ? 'border-black' : 'border-gray-200'
                } p-6`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-black text-white text-sm rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {plan.discount && (
                  <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mb-2">
                    {plan.discount}
                  </div>
                )}

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-medium">${plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>

                <button className={`w-full py-2.5 px-4 rounded-lg mb-6 text-sm font-medium ${
                  plan.isPopular ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
                }`}>
                  GET STARTED
                </button>

                <div className="text-sm font-medium mb-6">{plan.credits}</div>

                <div className="text-sm text-gray-600">
                  <h4 className="font-medium text-black mb-4">What&apos;s included</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-black shrink-0" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 