'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { 
  BookOpen,
  Search,
  Download,
  FileText,
  Video,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

export default function DocumentationPage() {
  const documentationCategories = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics of RiverWatts hydrokinetic systems",
      icon: BookOpen,
      articles: 12
    },
    {
      id: 2,
      title: "Installation Guides",
      description: "Step-by-step installation instructions and best practices",
      icon: FileText,
      articles: 8
    },
    {
      id: 3,
      title: "System Maintenance",
      description: "Maintenance schedules, troubleshooting, and care instructions",
      icon: HelpCircle,
      articles: 15
    },
    {
      id: 4,
      title: "API Documentation",
      description: "Technical documentation for developers and integrators",
      icon: Download,
      articles: 6
    },
    {
      id: 5,
      title: "Video Tutorials",
      description: "Visual guides and instructional videos",
      icon: Video,
      articles: 9
    },
    {
      id: 6,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      icon: HelpCircle,
      articles: 11
    }
  ];

  const popularArticles = [
    "System Installation Checklist",
    "Connecting to the RiverWatts Dashboard",
    "Understanding Your Energy Reports",
    "Maintenance Schedule for Hydrokinetic Systems",
    "Troubleshooting Low Energy Output",
    "Integrating with Smart Home Systems"
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Documentation & Resources</h1>
        <p className="text-xl text-slate-600 mb-8">
          Comprehensive guides, tutorials, and resources to help you get the most 
          from your RiverWatts hydrokinetic system.
        </p>
        
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
          <Input 
            placeholder="Search documentation..." 
            className="pl-10 py-6 text-lg" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {documentationCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{category.articles} articles</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
            <CardDescription>Most frequently accessed documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {popularArticles.map((article, index) => (
                <li key={index} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                  <span className="text-slate-700">{article}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Downloads</CardTitle>
            <CardDescription>Product manuals, specifications, and guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "System Installation Manual", type: "PDF", size: "4.2 MB" },
                { name: "User Guide", type: "PDF", size: "2.8 MB" },
                { name: "Technical Specifications", type: "PDF", size: "1.5 MB" },
                { name: "Maintenance Checklist", type: "PDF", size: "0.9 MB" }
              ].map((download, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{download.name}</h3>
                    <p className="text-sm text-slate-500">{download.type} • {download.size}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-lg mb-6">
                Our support team is available 24/7 to assist you with any questions 
                about your RiverWatts system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="secondary">
                  <a href="/support">
                    Visit Support Center
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="/contact">
                    Contact Support
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/20 p-6 rounded-full">
                <HelpCircle className="h-24 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}