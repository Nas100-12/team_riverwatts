'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Activity, Zap, Globe, Users } from 'lucide-react';

export default function EnergyVisualizationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.08),transparent_50%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Activity className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Clean Energy Innovation</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Powering Tomorrow with 
            <span className="text-blue-600"> Hydrokinetic Energy</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Harness the natural flow of water to generate clean, renewable energy for communities worldwide
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">How It Works</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Water Flow Capture</h4>
                      <p className="text-slate-600">Advanced turbines capture kinetic energy from flowing water without environmental disruption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Energy Conversion</h4>
                      <p className="text-slate-600">Efficient generators convert mechanical energy into clean electricity with 95%+ efficiency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Grid Integration</h4>
                      <p className="text-slate-600">Smart systems seamlessly integrate with existing power infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl overflow-hidden border border-blue-100/50">
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-8 bg-gradient-to-b from-blue-400/60 to-blue-600/40 rounded-full"
                    style={{
                      left: `${10 + (i * 7)}%`,
                      bottom: '-10px',
                    }}
                    animate={{
                      y: ['-10px', '-400px'],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-full bg-white/90 border-4 border-blue-200 flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
              </div>
              
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 rounded-xl px-4 py-2 border border-blue-100">
                  <div className="text-sm font-medium text-blue-900">Live Generation</div>
                  <div className="text-lg font-bold text-blue-600">2.4 MW</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/90 rounded-xl px-4 py-2 border border-blue-100">
                  <div className="text-sm font-medium text-blue-900">Efficiency</div>
                  <div className="text-lg font-bold text-green-600">96%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}