'use client';

import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-700/5 via-blue-600/10 to-transparent rounded-bl-[60%]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-blue-700/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-700/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-50/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Badge variant="info">
              ⚡ CLEAN ENERGY INNOVATION
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <span className="block text-slate-900">Hydrokinetic Power</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 animate-pulse">
              Reimagined
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Transform flowing water into clean energy with our advanced monitoring platform. 
            Real-time insights, predictive maintenance, and seamless control at your fingertips.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button 
              size="lg"
              className="transform hover:-translate-y-2 hover:scale-105 text-lg"
              asChild
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="/login">
                🚀 View Solutions
                <motion.span 
                  className="ml-3 inline-block"
                  animate={isHovered ? { x: 8 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg"
              asChild
            >
              <a href="#features">
                ✨ Explore Features
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-8 pt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <div className="flex items-center glass-card px-4 py-2 rounded-full">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-3 animate-pulse shadow-lg"></div>
              <span className="text-sm font-semibold text-slate-700">99.9% Uptime</span>
            </div>
            <div className="flex items-center glass-card px-4 py-2 rounded-full">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-3 animate-pulse shadow-lg"></div>
              <span className="text-sm font-semibold text-slate-700">2.4MW Generated</span>
            </div>
            <div className="flex items-center glass-card px-4 py-2 rounded-full">
              <div className="w-4 h-4 rounded-full bg-purple-500 mr-3 animate-pulse shadow-lg"></div>
              <span className="text-sm font-semibold text-slate-700">50+ Turbines</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-700/20 via-blue-600/10 to-blue-700/20 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
            
            {/* Main image container with enhanced styling */}
            <div className="relative rounded-3xl bg-white/80 backdrop-blur-sm p-2 shadow-2xl border border-slate-200/50 overflow-hidden">
              <div className="relative bg-gradient-to-br from-white to-slate-50/50 rounded-2xl overflow-hidden">
                <img 
                  src="/hero_section_image.jpg" 
                  alt="Hydrokinetic turbine generating clean energy from flowing water" 
                  className="w-full h-auto object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/globe.svg'; // Fallback image
                  }}
                />
                
                {/* Overlay elements for visual enhancement */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#014174]/5 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating elements with enhanced animation */}
              <motion.div 
                className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced floating elements */}
          <motion.div 
            className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-700/20 blur-xl"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            aria-hidden="true"
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-blue-700/20 to-blue-600/20 blur-xl"
            animate={{ 
              y: [0, 15, 0],
              x: [0, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            aria-hidden="true"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}