'use client';

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function CTASection() {
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl mx-6 shadow-xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Ready to Harness the Power of Water?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of energy providers who trust RiverWatts for clean, renewable energy management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="transform hover:-translate-y-1"
              asChild
              aria-label="Schedule a demo with RiverWatts team"
              onMouseEnter={() => setIsDemoHovered(true)}
              onMouseLeave={() => setIsDemoHovered(false)}
            >
              <a href="/contact">
                Schedule a Demo
                <motion.span 
                  className="ml-2 inline-block"
                  animate={isDemoHovered ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              aria-label="View RiverWatts solutions"
              onMouseEnter={() => setIsSolutionsHovered(true)}
              onMouseLeave={() => setIsSolutionsHovered(false)}
            >
              <a href="/solutions">
                View Solutions
                <motion.span 
                  className="ml-2 inline-block"
                  animate={isSolutionsHovered ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}