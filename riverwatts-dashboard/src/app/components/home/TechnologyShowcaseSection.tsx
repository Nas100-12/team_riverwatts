'use client';

import { motion } from "framer-motion";
import { useState } from 'react';
import AnalyticsIcon from "@/app/components/icons/AnalyticsIcon";
import MaintenanceIcon from "@/app/components/icons/MaintenanceIcon";
import SecurityIcon from "@/app/components/icons/SecurityIcon";
import { 
  Cloud, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network 
} from 'lucide-react';

const technologies = [
  {
    id: 1,
    title: "Advanced Analytics",
    description: "Comprehensive data analysis tools provide insights into energy patterns and system performance optimization.",
    icon: <AnalyticsIcon className="h-8 w-8" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 2,
    title: "Predictive Maintenance",
    description: "Proactive diagnostics identify potential issues before they cause downtime, maximizing system uptime.",
    icon: <MaintenanceIcon className="h-8 w-8" />,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 3,
    title: "Enterprise Security",
    description: "Military-grade encryption and role-based access control protect your critical infrastructure data.",
    icon: <SecurityIcon className="h-8 w-8" />,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture ensures 99.99% uptime and seamless access from anywhere in the world.",
    icon: <Cloud className="h-8 w-8" />,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 5,
    title: "Real-time Processing",
    description: "Millisecond data processing enables instant insights and immediate response to system changes.",
    icon: <Zap className="h-8 w-8" />,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 6,
    title: "IoT Integration",
    description: "Seamless connectivity with all your hydrokinetic systems through our advanced IoT framework.",
    icon: <Network className="h-8 w-8" />,
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function TechnologyShowcaseSection() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Cutting-Edge Technology
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our platform combines the latest innovations in clean energy technology with 
            advanced data analysis to maximize your hydrokinetic power generation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`relative h-full rounded-2xl bg-white border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon container with hover effect */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  
                  {/* Floating particles effect on hover */}
                  {hoveredTech === tech.id && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-white/30"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-slate-600">
                  {tech.description}
                </p>
                
                {/* Animated border on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* RiverWatts Innovation Platform */}
        <motion.div 
          className="mt-20 bg-gradient-to-br from-blue-800 to-blue-700 rounded-3xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">RiverWatts Innovation Platform</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Engineered with advanced hydrokinetic technologies for optimal clean energy generation and intelligent system management
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              { name: "Turbine Control", icon: "⚙️" },
              { name: "Flow Analytics", icon: "📊" },
              { name: "Predictive Systems", icon: "🤖" },
              { name: "IoT Sensors", icon: "📡" },
              { name: "Real-time DB", icon: "💾" },
              { name: "Cloud Sync", icon: "☁️" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-medium text-sm text-center">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}