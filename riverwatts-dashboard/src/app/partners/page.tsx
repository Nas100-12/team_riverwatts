'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  Users,
  Zap,
  Globe,
  Handshake,
  TrendingUp,
  Award,
  Mail,
  Phone
} from 'lucide-react';

export default function PartnersPage() {
  const partnerTypes = [
    {
      id: 1,
      title: "Technology Partners",
      description: "Collaborate on innovative solutions and product development",
      icon: Zap,
      benefits: [
        "Joint product development",
        "Technology licensing",
        "Co-marketing opportunities"
      ]
    },
    {
      id: 2,
      title: "Channel Partners",
      description: "Expand market reach through strategic distribution partnerships",
      icon: Globe,
      benefits: [
        "Exclusive territory rights",
        "Sales support and training",
        "Lead sharing programs"
      ]
    },
    {
      id: 3,
      title: "Installation Partners",
      description: "Become certified to install and maintain RiverWatts systems",
      icon: Handshake,
      benefits: [
        "Certification training",
        "Installation support",
        "Ongoing technical assistance"
      ]
    },
    {
      id: 4,
      title: "Research Partners",
      description: "Advance hydrokinetic technology through collaborative research",
      icon: TrendingUp,
      benefits: [
        "Research funding opportunities",
        "Access to test facilities",
        "Joint publications"
      ]
    }
  ];

  const partnerBenefits = [
    {
      title: "Revenue Sharing",
      description: "Attractive commission structures and revenue sharing models",
      icon: TrendingUp
    },
    {
      title: "Marketing Support",
      description: "Co-marketing funds, materials, and campaign support",
      icon: Globe
    },
    {
      title: "Training Programs",
      description: "Comprehensive training and certification programs",
      icon: Award
    },
    {
      title: "Technical Support",
      description: "Dedicated technical support and engineering assistance",
      icon: Zap
    }
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4">Partners</Badge>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Partner With RiverWatts</h1>
        <p className="text-xl text-slate-600 mb-8">
          Join our network of partners to bring clean, renewable hydrokinetic energy 
          to communities worldwide. Together, we can accelerate the transition to sustainable energy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {partnerTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card key={type.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Partner Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-3 rounded-lg w-fit mx-auto mb-4 shadow-sm">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>
              See how our partners are making an impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  name: "AquaTech Solutions",
                  description: "Doubled their renewable energy offerings with our partnership",
                  impact: "35+ installations completed"
                },
                {
                  name: "Green Energy Distributors",
                  description: "Expanded into hydrokinetic market with our channel partnership",
                  impact: "150+ systems deployed"
                }
              ].map((story, index) => (
                <div key={index} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-medium text-lg">{story.name}</h3>
                  <p className="text-slate-600 mb-2">{story.description}</p>
                  <Badge variant="secondary">{story.impact}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Become a Partner</CardTitle>
            <CardDescription>
              Get in touch to explore partnership opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Company Name</label>
                <input 
                  type="text" 
                  className="w-full border border-slate-300 rounded-md px-3 py-2"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-slate-300 rounded-md px-3 py-2"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Partnership Interest</label>
                <select className="w-full border border-slate-300 rounded-md px-3 py-2">
                  <option>Select partnership type</option>
                  <option>Technology Partner</option>
                  <option>Channel Partner</option>
                  <option>Installation Partner</option>
                  <option>Research Partner</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea 
                  className="w-full border border-slate-300 rounded-md px-3 py-2 min-h-[120px]"
                  placeholder="Tell us about your partnership interest"
                ></textarea>
              </div>
              <Button className="w-full">
                Submit Partnership Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our growing network of partners and help accelerate the adoption of clean, 
            renewable hydrokinetic energy worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}