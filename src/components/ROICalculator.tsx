'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [artistCount, setArtistCount] = useState(1);
  const [teamSize, setTeamSize] = useState(1);

  // Calculate potential savings and growth
  const calculateROI = () => {
    // Base revenue calculations - more conservative baseline
    const averageArtistRevenue = 30000; // $30k annual revenue per artist (more realistic starting point)
    const estimatedRevenue = averageArtistRevenue * artistCount;
    
    // Growth calculations based on industry benchmarks
    const baseGrowthRate = 0.12; // 12% base growth rate (industry average)
    
    // Team efficiency impacts growth (diminishing returns)
    const teamEfficiency = Math.min(1.5, 1 + (Math.log2(teamSize) * 0.15)); // Max 50% improvement
    
    // Portfolio synergy - more artists = more cross-promotion
    const portfolioEffect = Math.min(1.3, 1 + (Math.log2(artistCount) * 0.1)); // Max 30% boost
    
    // Calculate potential revenue growth
    const potentialGrowth = Math.round(
      estimatedRevenue * baseGrowthRate * teamEfficiency * portfolioEffect
    );

    // Time savings calculations based on real-world data
    // Each artist typically requires 5-10 hours/week of manual work
    const baseHoursPerArtistPerWeek = 6;
    const automationEfficiency = 0.4; // 40% of tasks can be automated
    const teamScaleFactor = Math.min(1.2, 1 + (Math.log2(teamSize) * 0.06)); // Max 20% team efficiency
    
    // Calculate hours saved with realistic caps
    const weeksPerMonth = 4;
    const maxHoursPerPerson = 25; // Realistic max hours saved per person
    const rawHoursSaved = baseHoursPerArtistPerWeek * artistCount * automationEfficiency * teamScaleFactor;
    const monthlyHoursSaved = Math.min(
      maxHoursPerPerson * teamSize,
      Math.round(rawHoursSaved * weeksPerMonth)
    );
    
    // Labor cost calculations based on industry averages
    const hourlyRate = 45; // More conservative hourly rate
    const monthlyLaborSavings = monthlyHoursSaved * hourlyRate;
    const annualLaborSavings = Math.round(monthlyLaborSavings * 12);

    // Platform cost calculations
    const monthlyPricePerArtist = 200;
    const annualCost = artistCount * monthlyPricePerArtist * 12;
    
    // Calculate total benefit and ROI with realistic caps
    const totalBenefit = potentialGrowth + annualLaborSavings;
    let roi = Math.round(((totalBenefit - annualCost) / annualCost) * 100);
    
    // Cap ROI at realistic maximum based on industry data
    const maxRoi = 800; // Cap at 800% for credibility
    roi = Math.min(roi, maxRoi);

    console.log({
      artistCount,
      teamSize,
      estimatedRevenue,
      teamEfficiency,
      portfolioEffect,
      potentialGrowth,
      monthlyHoursSaved,
      annualLaborSavings,
      annualCost,
      totalBenefit,
      roi
    });

    return {
      revenueGrowth: potentialGrowth,
      monthlyHoursSaved,
      laborSavings: annualLaborSavings,
      roi: roi
    };
  };

  const roi = calculateROI();

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${Math.round(value / 1000)}k`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-3">
            Calculate Your ROI
          </h2>
          <p className="text-gray-600">
            See how Recoup can impact your bottom line.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Input Section */}
          <div className="p-6 border-b border-gray-100">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium group relative cursor-help">
                    Number of Artists
                    <span className="hidden group-hover:block absolute left-0 bottom-full mb-2 bg-black text-white text-xs p-2 rounded-lg w-48">
                      The total number of artists in your roster that you&apos;ll manage with Recoup
                    </span>
                  </label>
                  <span className="text-sm text-gray-500">{artistCount} artists</span>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={artistCount}
                    onChange={(e) => setArtistCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="Number of Artists"
                    title="Adjust number of artists"
                  />
                </motion.div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium group relative cursor-help">
                    Team Size
                    <span className="hidden group-hover:block absolute left-0 bottom-full mb-2 bg-black text-white text-xs p-2 rounded-lg w-48">
                      The number of team members who will use Recoup to manage artists
                    </span>
                  </label>
                  <span className="text-sm text-gray-500">{teamSize} people</span>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="Team Size"
                    title="Adjust team size"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <motion.div 
            className="bg-black text-white p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 rounded-lg bg-white/5"
              >
                <p className="text-gray-400 text-sm mb-1">Potential Revenue Growth</p>
                <p className="text-2xl font-semibold">
                  {formatCurrency(roi.revenueGrowth)}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 rounded-lg bg-white/5"
              >
                <p className="text-gray-400 text-sm mb-1">Monthly Hours Saved</p>
                <p className="text-2xl font-semibold">
                  {roi.monthlyHoursSaved}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 rounded-lg bg-white/5"
              >
                <p className="text-gray-400 text-sm mb-1">Annual Labor Savings</p>
                <p className="text-2xl font-semibold">
                  {formatCurrency(roi.laborSavings)}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 rounded-lg bg-white/5"
              >
                <p className="text-gray-400 text-sm mb-1">Return on Investment</p>
                <p className="text-2xl font-semibold text-green-400">
                  {roi.roi}%
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 