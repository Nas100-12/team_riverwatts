'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Zap, Globe, TrendingUp, Award, Users, Leaf } from 'lucide-react';

interface StatItem {
  value: number;
  label: string;
  suffix: string;
  icon: any;
  color: string;
  displayValue?: number;
}

const initialStats: StatItem[] = [
  { value: 2.4, label: "MW Generated", suffix: "", icon: Zap, color: "from-blue-400 to-blue-600" },
  { value: 45, label: "Active Turbines", suffix: "", icon: TrendingUp, color: "from-emerald-500 to-emerald-600" },
  { value: 98, label: "Efficiency Rate", suffix: "%", icon: Award, color: "from-blue-500 to-blue-700" },
  { value: 12, label: "Countries", suffix: "", icon: Globe, color: "from-blue-600 to-blue-800" },
  { value: 150000, label: "Homes Powered", suffix: "+", icon: Users, color: "from-blue-500 to-blue-600" },
  { value: 85000, label: "Tons CO₂ Saved", suffix: "", icon: Leaf, color: "from-green-500 to-green-600" }
];

export default function StatsSection() {
  const [animatedStats, setAnimatedStats] = useState(initialStats.map(stat => ({ ...stat, displayValue: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => prev.map(stat => ({
        ...stat,
        displayValue: stat.displayValue < stat.value 
          ? Math.min(stat.value, stat.displayValue + (stat.value / 50))
          : stat.value
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, suffix: string) => {
    if (value >= 100000) {
      return `${(value / 1000).toFixed(0)}k${suffix}`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k${suffix}`;
    }
    return `${Math.round(value)}${suffix}`;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Powering the Future
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Real-time impact metrics from our global hydrokinetic energy network
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animatedStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Glass Card */}
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl group-hover:bg-white/15 transition-all duration-300">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                    {formatValue(stat.displayValue, stat.suffix)}
                  </div>
                  
                  {/* Label */}
                  <div className="text-blue-100 text-lg font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
                </div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-100 text-lg mb-6">
            Join the renewable energy revolution and make a lasting impact
          </p>
          <motion.button 
            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-2xl border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}