'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Building, 
  Home, 
  Factory,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Leaf,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Residential Solutions",
      description: "Perfect for homes and small communities looking to reduce energy costs and environmental impact.",
      icon: Home,
      color: "from-emerald-500 to-emerald-600",
      features: ["Home energy monitoring", "Battery storage integration", "Grid-tie capabilities", "Mobile app control"],
      capacity: "1-5 kW",
      ideal: "1-4 households",
      savings: "Up to 70% reduction"
    },
    {
      title: "Commercial Solutions",
      description: "Scalable solutions for businesses, schools, and medium-sized facilities seeking sustainable energy.",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      features: ["Multi-site management", "Advanced analytics", "Demand response", "ROI tracking"],
      capacity: "5-50 kW",
      ideal: "Small to medium businesses",
      savings: "Up to 60% reduction"
    },
    {
      title: "Industrial Solutions",
      description: "Enterprise-grade systems for large facilities, manufacturing, and utility-scale deployments.",
      icon: Factory,
      color: "from-blue-600 to-blue-700",
      features: ["Enterprise dashboard", "Predictive maintenance", "Grid integration", "Custom reporting"],
      capacity: "50+ kW",
      ideal: "Large facilities & utilities",
      savings: "Up to 50% reduction"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Reduce energy costs by up to 70% with clean hydrokinetic power",
      icon: DollarSign,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Environmental Impact",
      description: "Significantly reduce carbon footprint and support sustainability goals",
      icon: Leaf,
      color: "from-emerald-600 to-emerald-400"
    },
    {
      title: "Reliable Power",
      description: "Consistent energy generation with 99.9% system uptime",
      icon: Zap,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Scalable Technology",
      description: "Grow your system as your energy needs expand",
      icon: TrendingUp,
      color: "from-blue-600 to-blue-700"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "Reliable power for critical medical facilities" },
    { name: "Education", icon: "🎓", description: "Sustainable energy for schools and universities" },
    { name: "Manufacturing", icon: "🏭", description: "Cost-effective power for production facilities" },
    { name: "Agriculture", icon: "🌾", description: "Clean energy for farming operations" },
    { name: "Hospitality", icon: "🏨", description: "Eco-friendly power for hotels and resorts" },
    { name: "Retail", icon: "🏪", description: "Sustainable energy for retail chains" }
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
            🌊 Energy Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">Tailored Solutions for</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
              Every Energy Need
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            From residential homes to industrial facilities, we provide scalable hydrokinetic power solutions that fit your specific requirements and budget.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="modern-card h-full group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-3">{solution.title}</CardTitle>
                    <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-slate-500">Capacity</div>
                          <div className="font-semibold text-blue-800">{solution.capacity}</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Ideal For</div>
                          <div className="font-semibold text-blue-800">{solution.ideal}</div>
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="text-slate-500">Cost Savings</div>
                        <div className="font-semibold text-green-600">{solution.savings}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full focus-ring" asChild>
                      <Link href="/contact">
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose RiverWatts?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our hydrokinetic solutions deliver measurable benefits across all sectors and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="modern-card text-center group">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by organizations across diverse sectors for reliable, sustainable energy solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="modern-card group">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{industry.name}</h3>
                      <p className="text-sm text-slate-600">{industry.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center glass-card p-12 rounded-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Your Perfect Solution</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let our experts help you design the ideal hydrokinetic power system for your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white focus-ring" asChild>
              <Link href="/contact">
                💬 Get Custom Quote
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="focus-ring" asChild>
              <Link href="/login">
                📊 View Demo Dashboard
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}