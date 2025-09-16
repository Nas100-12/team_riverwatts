'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Globe
} from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small residential installations",
      features: [
        "Up to 5 kW system capacity",
        "Basic monitoring dashboard",
        "Email support",
        "Monthly performance reports",
        "Standard installation"
      ],
      icon: Zap,
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for medium-sized commercial applications",
      features: [
        "Up to 50 kW system capacity",
        "Advanced monitoring dashboard",
        "24/7 phone & email support",
        "Weekly performance reports",
        "Priority installation",
        "Custom analytics",
        "API access"
      ],
      icon: Users,
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Unlimited system capacity",
        "Premium monitoring dashboard",
        "Dedicated account manager",
        "Real-time performance reports",
        "Express installation",
        "Advanced analytics",
        "Full API access",
        "Custom integrations",
        "On-site training"
      ],
      icon: Globe,
      popular: false
    }
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4">Pricing</Badge>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 mb-8">
          Choose the perfect plan for your hydrokinetic energy needs. 
          All plans include our core features with options to scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <Card 
              key={plan.id} 
              className={`flex flex-col h-full relative ${
                plan.popular ? "border-2 border-blue-600 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4">Most Popular</Badge>
              )}
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-blue-700">{plan.price}</span>
                  {plan.period && <span className="text-slate-600"> {plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "" 
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "24/7 System Monitoring",
            "Performance Analytics",
            "Maintenance Alerts",
            "Energy Optimization",
            "Environmental Impact Tracking",
            "Mobile App Access",
            "Integration Support",
            "Regular Updates"
          ].map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-12 mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Have Special Requirements?</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Our team can create a custom solution tailored to your specific needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="/contact">
              Contact Sales
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/solutions">
              View All Solutions
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}