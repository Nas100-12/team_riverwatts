'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  Users,
  Zap,
  Leaf,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  Send
} from 'lucide-react';

export default function CareersPage() {
  const departments = [
    {
      id: 1,
      title: "Engineering",
      description: "Innovate the future of hydrokinetic energy technology",
      icon: Zap,
      positions: 12
    },
    {
      id: 2,
      title: "Sales & Marketing",
      description: "Drive adoption of clean energy solutions worldwide",
      icon: Globe,
      positions: 8
    },
    {
      id: 3,
      title: "Operations",
      description: "Ensure smooth deployment and maintenance of systems",
      icon: Clock,
      positions: 5
    },
    {
      id: 4,
      title: "Sustainability",
      description: "Advance our environmental impact and initiatives",
      icon: Leaf,
      positions: 3
    }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Hydrokinetic Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $160,000"
    },
    {
      id: 2,
      title: "Renewable Energy Sales Manager",
      department: "Sales & Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $130,000"
    },
    {
      id: 3,
      title: "Field Service Technician",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2+ years",
      salary: "$60,000 - $80,000"
    },
    {
      id: 4,
      title: "Environmental Impact Analyst",
      department: "Sustainability",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$85,000 - $110,000"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Above-market compensation packages",
      icon: DollarSign
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage",
      icon: Users
    },
    {
      title: "Remote Work",
      description: "Flexible work arrangements and remote options",
      icon: Globe
    },
    {
      title: "Professional Development",
      description: "Continuous learning and growth opportunities",
      icon: Zap
    }
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4">Join Our Team</Badge>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Careers at RiverWatts</h1>
        <p className="text-xl text-slate-600 mb-8">
          Help us revolutionize the energy industry with clean, renewable hydrokinetic power. 
          Join a team passionate about sustainability and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <Card key={dept.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{dept.title}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{dept.positions} positions</span>
                  <Button variant="ghost" size="sm">
                    View Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Featured Positions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription>{job.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-slate-500 mr-2" />
                    <span className="text-sm text-slate-600">{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{job.type}</Badge>
                      <Badge variant="outline">{job.experience}</Badge>
                    </div>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                </div>
                <Button className="w-full mt-6">
                  Apply Now
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 text-white mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Work at RiverWatts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Life at RiverWatts</CardTitle>
          <CardDescription>
            Our culture of innovation, collaboration, and sustainability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Innovation First</h3>
              <p className="text-slate-600">
                We encourage experimentation and creative problem-solving to push the boundaries 
                of hydrokinetic technology.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Sustainability Focus</h3>
              <p className="text-slate-600">
                Our mission-driven approach means every project contributes to a cleaner, 
                more sustainable future.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Collaborative Culture</h3>
              <p className="text-slate-600">
                We believe the best solutions come from diverse perspectives working together 
                toward common goals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Ready to Join Us?</h2>
        <p className="text-slate-600 mb-6">
          Explore all open positions and find your perfect role at RiverWatts
        </p>
        <Button size="lg">
          View All Jobs
        </Button>
      </div>
    </div>
  );
}