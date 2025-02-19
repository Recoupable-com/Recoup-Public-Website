'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const agents = [
  {
    id: 1,
    name: "fan-analysis",
    command: "> analyze fans --all-platforms",
    output: "Analyzing fan behavior...",
    metrics: [
      { label: "Audience reach", value: "2.4M", color: "#3B82F6" },
      { label: "Growth rate", value: "+127%", color: "#22C55E" }
    ],
    peak: "AI processing 50K+ data points daily",
    color: "#9333EA",
    position: { x: 30, y: 25 }
  },
  {
    id: 2,
    name: "campaign-automation",
    command: "> optimize campaigns --cross-platform",
    output: "Automating marketing tasks...",
    metrics: [
      { label: "Time saved", value: "85hrs/mo", color: "#3B82F6" },
      { label: "ROI increase", value: "+312%", color: "#22C55E" }
    ],
    peak: "Automated 1,200+ tasks this month",
    color: "#3B82F6",
    position: { x: 70, y: 15 }
  },
  {
    id: 3,
    name: "revenue-analytics",
    command: "> analyze revenue --forecast-q2",
    output: "Forecasting growth...",
    metrics: [
      { label: "Revenue forecast", value: "$2.1M", color: "#22C55E" },
      { label: "Conversion rate", value: "+45%", color: "#3B82F6" }
    ],
    peak: "Predictive modeling accuracy: 94%",
    color: "#22C55E",
    position: { x: 50, y: 65 }
  }
];

export default function AgentPills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {agents.map((agent) => (
        <motion.div
          key={agent.id}
          className={`absolute ${isMobile && agent.id !== 1 ? 'hidden' : ''}`}
          style={{
            left: isMobile ? '20%' : `${agent.position.x}%`,
            top: isMobile ? '35%' : `${agent.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: agent.id * 0.1,
          }}
        >
          <motion.div 
            className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-[#262626] shadow-lg"
            style={{ width: isMobile ? '260px' : '260px' }}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            {/* Terminal Header */}
            <div className="px-2 py-1.5 bg-[#1A1A1A] border-b border-[#262626] flex items-center">
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[#666666] text-[10px] font-mono tracking-tight">
                  {agent.name}
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 font-mono text-xs space-y-2">
              {/* Command */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: agent.id * 0.2 }}
                className="text-[#9D7CD8]"
              >
                <span className="text-[#666666] mr-1.5">$</span>
                {agent.command}
              </motion.div>

              {/* Output */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: agent.id * 0.2 + 0.2 }}
                className="text-[#9D7CD8] opacity-60"
              >
                {agent.output}
              </motion.div>

              {/* Metrics */}
              <div className="space-y-1.5 mt-2">
                {agent.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: agent.id * 0.2 + 0.4 + (index * 0.1) }}
                    className="flex items-center gap-2 pl-3"
                  >
                    <span className="text-[#666666]">•</span>
                    <motion.span 
                      style={{ color: metric.color }}
                      className="text-shadow-glow font-medium"
                    >
                      {metric.label}: {metric.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Peak Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: agent.id * 0.2 + 0.8 }}
                className="flex items-center gap-2 mt-3 border-t border-[#262626] pt-2"
              >
                <span className="text-[#666666]">&gt;</span>
                <span className="text-[#FFD700] opacity-90 text-[10px]">{agent.peak}</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <style jsx global>{`
        .text-shadow-glow {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
} 