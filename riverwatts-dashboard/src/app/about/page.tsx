'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { Zap, Droplets, Leaf, Users, Award, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: "Clean Energy Generated", value: "2.4 MW", icon: Zap, color: "from-blue-500 to-blue-600" },
    { label: "Water Sources Monitored", value: "50+", icon: Droplets, color: "from-blue-600 to-blue-700" },
    { label: "Carbon Footprint Reduced", value: "1,200 tons", icon: Leaf, color: "from-emerald-500 to-emerald-600" },
    { label: "Communities Served", value: "25", icon: Users, color: "from-blue-700 to-blue-800" }
  ];

  const values = [
    {
      title: "Sustainability First",
      description: "Every decision we make prioritizes environmental impact and long-term sustainability.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovation Drive",
      description: "Pushing the boundaries of hydrokinetic technology through continuous research and development.",
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Global Impact",
      description: "Working towards a cleaner future by making renewable energy accessible worldwide.",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    }
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
            🌊 About RiverWatts
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">Powering Tomorrow with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
              Flowing Water
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We're revolutionizing clean energy through advanced hydrokinetic technology, 
            making renewable power accessible, efficient, and intelligent.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="modern-card text-center group">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At RiverWatts, we believe in harnessing the natural power of flowing water to create 
              sustainable energy solutions. Our mission is to make clean energy accessible to 
              communities worldwide while preserving our planet's precious resources.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Through innovative hydrokinetic technology and intelligent monitoring systems, 
              we're building a future where renewable energy is not just an option, but the 
              preferred choice for powering our world.
            </p>
            <Button size="lg" className="gradient-primary text-white focus-ring" asChild>
              <Link href="/contact">
                🚀 Join Our Mission
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="h-64 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#014174] to-[#0a8ac6] flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Droplets className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Clean Energy Vision</h3>
                  <p className="text-slate-600">Sustainable power from nature's flow</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do in our mission to create a sustainable future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="modern-card group text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Go Green?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of communities already benefiting from clean, sustainable hydrokinetic power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white focus-ring" asChild>
              <Link href="/login">
                🌊 Access Dashboard
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="focus-ring" asChild>
              <Link href="/contact">
                📞 Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}