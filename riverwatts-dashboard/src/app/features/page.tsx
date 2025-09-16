'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Smartphone,
  Cloud,
  Settings,
  Bell,
  Users,
  Leaf,
  TrendingUp,
  MapPin,
  Battery
} from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Monitor your hydrokinetic turbines in real-time with live data streams, performance metrics, and instant alerts.",
      icon: BarChart3,
      color: "from-blue-500 to-blue-600",
      benefits: ["Live data updates", "Performance tracking", "Instant notifications"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered insights predict maintenance needs, optimize performance, and prevent costly downtime.",
      icon: TrendingUp,
      color: "from-blue-600 to-blue-700",
      benefits: ["Maintenance prediction", "Performance optimization", "Cost reduction"]
    },
    {
      title: "Mobile Dashboard",
      description: "Access your energy data anywhere with our responsive mobile dashboard and native app support.",
      icon: Smartphone,
      color: "from-emerald-500 to-emerald-600",
      benefits: ["Mobile responsive", "Native app", "Offline access"]
    },
    {
      title: "Cloud Integration",
      description: "Secure cloud infrastructure ensures your data is always available, backed up, and protected.",
      icon: Cloud,
      color: "from-blue-400 to-blue-500",
      benefits: ["99.9% uptime", "Auto backups", "Global access"]
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with role-based access, encryption, and compliance standards.",
      icon: Shield,
      color: "from-blue-700 to-blue-800",
      benefits: ["End-to-end encryption", "Role-based access", "Compliance ready"]
    },
    {
      title: "Smart Alerts",
      description: "Intelligent notification system keeps you informed about system status, maintenance, and opportunities.",
      icon: Bell,
      color: "from-blue-500 to-blue-700",
      benefits: ["Smart filtering", "Custom rules", "Multi-channel delivery"]
    }
  ];

  const additionalFeatures = [
    { title: "Geographic Mapping", icon: MapPin, description: "Visual turbine locations and regional performance" },
    { title: "Battery Management", icon: Battery, description: "Comprehensive energy storage monitoring" },
    { title: "User Management", icon: Users, description: "Multi-user access with permission controls" },
    { title: "Environmental Impact", icon: Leaf, description: "Track carbon savings and sustainability metrics" },
    { title: "System Configuration", icon: Settings, description: "Remote turbine configuration and control" },
    { title: "Energy Optimization", icon: Zap, description: "Automated efficiency improvements" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-blue-700/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-700/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container-page py-24 pt-48 pb-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="info" className="mb-6">
            ⚡ Platform Features
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">Powerful Features for</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
              Clean Energy Management
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover the comprehensive suite of tools designed to maximize your hydrokinetic power generation efficiency and insights.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="modern-card h-full group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">More Powerful Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Additional capabilities that make RiverWatts the complete solution for hydrokinetic power management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="modern-card group">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center glass-card p-12 rounded-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Experience These Features?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users already benefiting from our comprehensive hydrokinetic power management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white focus-ring" asChild>
              <Link href="/login">
                🚀 Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="focus-ring" asChild>
              <Link href="/contact">
                📞 Schedule Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}