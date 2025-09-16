'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  BookOpen,
  ChevronRight,
  Download,
  Video,
  FileText
} from 'lucide-react';

export default function GuidesPage() {
  const guideCategories = [
    {
      id: 1,
      title: "Installation Guides",
      description: "Step-by-step instructions for setting up your RiverWatts system",
      icon: FileText,
      guides: 8,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "User Manuals",
      description: "Comprehensive documentation for operating your hydrokinetic system",
      icon: BookOpen,
      guides: 12,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "Video Tutorials",
      description: "Visual guides and instructional videos for common tasks",
      icon: Video,
      guides: 15,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      title: "Maintenance Guides",
      description: "Schedules, procedures, and best practices for system care",
      icon: Download,
      guides: 10,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const featuredGuides = [
    {
      id: 1,
      title: "Complete Installation Guide for Residential Systems",
      description: "Detailed walkthrough of installing your home hydrokinetic system",
      category: "Installation",
      readTime: "15 min read",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Dashboard User Guide: Monitoring Your Energy Production",
      description: "Learn how to navigate and use the RiverWatts dashboard effectively",
      category: "User Manual",
      readTime: "8 min read",
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Seasonal Maintenance Checklist",
      description: "Essential maintenance tasks for each season to ensure optimal performance",
      category: "Maintenance",
      readTime: "10 min read",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Troubleshooting Common Issues",
      description: "Solutions for frequently encountered problems with your system",
      category: "User Manual",
      readTime: "12 min read",
      difficulty: "Intermediate"
    }
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4">Guides & Tutorials</Badge>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Helpful Guides & Resources</h1>
        <p className="text-xl text-slate-600 mb-8">
          Comprehensive guides, tutorials, and resources to help you get the most 
          from your RiverWatts hydrokinetic system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {guideCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`${category.color} p-3 rounded-lg w-fit mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{category.guides} guides</span>
                  <Button variant="ghost" size="sm">
                    Browse
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredGuides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{guide.category}</Badge>
                  <Badge variant="outline">{guide.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{guide.readTime}</span>
                  <Button>
                    Read Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Can't Find What You're Looking For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Community Forum</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Connect with other RiverWatts users to share tips and solutions.
              </p>
              <Button variant="outline" className="w-full">
                Visit Forum
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Support Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Get help from our technical support team for specific issues.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Chat with our experts in real-time for immediate assistance.
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}