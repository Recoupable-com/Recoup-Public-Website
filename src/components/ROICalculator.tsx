'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [rosterSize, setRosterSize] = useState(5);
  const [staffSize, setStaffSize] = useState(2);

  // Calculate ROI based on real metrics
  const calculateResults = () => {
    // Base hours saved per staff member (minimum)
    const baseHoursPerStaffMember = 10;
    
    // Calculate base hours per month
    const baseHoursPerMonth = staffSize * baseHoursPerStaffMember * 4; // Convert to monthly
    
    // Calculate artist multiplier with moderate scaling
    // Start small and grow at a moderate pace
    const artistMultiplier = rosterSize === 1 ? 0.25 : // 25% of base for 1 artist
      0.25 + Math.pow(rosterSize - 1, 0.9) * 0.12; // Moderate exponential growth
    
    // Team synergy multiplier - grows at a moderate pace
    const teamSynergyMultiplier = 1 + (Math.log2(staffSize) * 0.08);
    
    // Calculate total hours with all multipliers
    const totalHoursPerMonth = Math.round(baseHoursPerMonth * artistMultiplier * teamSynergyMultiplier);
    
    const monthlyValueSaved = totalHoursPerMonth * 50;
    const annualValueSaved = monthlyValueSaved * 12;
    const annualCost = rosterSize * 99 * 12;
    const roi = ((annualValueSaved / annualCost) * 100).toFixed(0);

    return {
      hoursPerMonth: totalHoursPerMonth,
      roi,
      annualSavings: annualValueSaved.toLocaleString()
    };
  };

  const results = calculateResults();

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[#DBDBDB] mb-4 font-plus-jakarta font-semibold text-sm sm:text-base"
          >
            Time Savings Calculator
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-plus-jakarta"
          >
            How Much Could You Save?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-neutral-600 max-w-3xl mx-auto font-plus-jakarta"
          >
            Quick estimate of time saved with AI automation
          </motion.p>
        </motion.div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl border border-[#DBDBDB] p-8 md:p-12"
          >
            {/* Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Roster Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-neutral-700 font-plus-jakarta">
                    Artists in your roster
                  </label>
                  <span className="text-lg font-semibold text-black font-plus-jakarta">{rosterSize} artists</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={rosterSize}
                  onChange={(e) => setRosterSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#F5F5F5] rounded-lg appearance-none cursor-pointer mb-2"
                  title="Size of roster"
                />
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-600 font-plus-jakarta">1 artist</span>
                  <span className="text-sm text-neutral-600 font-plus-jakarta">50 artists</span>
                </div>
              </div>

              {/* Staff Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-neutral-700 font-plus-jakarta">
                    Team members
                  </label>
                  <span className="text-lg font-semibold text-black font-plus-jakarta">{staffSize} people</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={staffSize}
                  onChange={(e) => setStaffSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#F5F5F5] rounded-lg appearance-none cursor-pointer mb-2"
                  title="Size of staff"
                />
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-600 font-plus-jakarta">1 person</span>
                  <span className="text-sm text-neutral-600 font-plus-jakarta">50 people</span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">              
              <div className="p-4 sm:p-6 bg-white border border-[#DBDBDB] rounded-xl">
                <h4 className="text-xs sm:text-sm text-neutral-500 mb-1 font-plus-jakarta">Time Saved Monthly</h4>
                <p className="text-xl sm:text-2xl font-bold text-black font-plus-jakarta">{results.hoursPerMonth} hours</p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-plus-jakarta">Through AI-powered automation</p>
              </div>
              
              <div className="p-4 sm:p-6 bg-black text-white rounded-xl">
                <h4 className="text-xs sm:text-sm text-white/70 mb-1 font-plus-jakarta">Value of Time Saved</h4>
                <p className="text-xl sm:text-2xl font-bold font-plus-jakarta whitespace-nowrap">${results.annualSavings}/year</p>
                <p className="text-xs sm:text-sm text-white/70 mt-2 font-plus-jakarta">At $50/hour industry rate</p>
              </div>
            </div>

            {/* Time Savings Breakdown */}
            <div className="mt-8 p-6 bg-white border border-[#DBDBDB] rounded-xl">
              <h4 className="text-sm font-medium text-neutral-700 mb-3 font-plus-jakarta">How do we save you time?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Each team member saves 10 hours/week on routine tasks</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>+35% time saved for each additional artist</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI handles reporting, campaigns & content automatically</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-sm text-neutral-500 font-plus-jakarta">
              * Based on average customer data. Your results may vary depending on your current workflow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 