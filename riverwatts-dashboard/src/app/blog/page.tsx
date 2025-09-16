'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { 
  Search,
  Calendar,
  User,
  Tag,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Hydrokinetic Energy: Trends to Watch in 2023",
      excerpt: "Explore the latest innovations and developments in hydrokinetic technology that are shaping the future of renewable energy.",
      author: "Sarah Johnson",
      date: "June 15, 2023",
      category: "Industry Insights",
      readTime: "5 min read",
      image: "hydrokinetic-trends"
    },
    {
      id: 2,
      title: "Maximizing Energy Output: Tips for Optimizing Your RiverWatts System",
      excerpt: "Learn practical strategies to get the most from your hydrokinetic installation and improve energy generation efficiency.",
      author: "Michael Chen",
      date: "June 10, 2023",
      category: "User Guides",
      readTime: "7 min read",
      image: "energy-optimization"
    },
    {
      id: 3,
      title: "Environmental Benefits of Hydrokinetic Power: A Deep Dive",
      excerpt: "Discover how hydrokinetic energy systems contribute to environmental conservation and carbon footprint reduction.",
      author: "Elena Rodriguez",
      date: "June 5, 2023",
      category: "Sustainability",
      readTime: "6 min read",
      image: "environmental-benefits"
    },
    {
      id: 4,
      title: "Installing Hydrokinetic Systems in Urban Environments",
      excerpt: "Case study: How RiverWatts systems are being successfully deployed in city settings with limited space.",
      author: "David Kim",
      date: "May 28, 2023",
      category: "Case Studies",
      readTime: "8 min read",
      image: "urban-installation"
    },
    {
      id: 5,
      title: "Comparing Renewable Energy Sources: Hydrokinetic vs Solar vs Wind",
      excerpt: "An objective analysis of the advantages and disadvantages of different renewable energy technologies.",
      author: "Sarah Johnson",
      date: "May 20, 2023",
      category: "Comparisons",
      readTime: "10 min read",
      image: "renewable-comparison"
    },
    {
      id: 6,
      title: "Maintaining Your Hydrokinetic System: A Seasonal Guide",
      excerpt: "Essential maintenance tasks to perform throughout the year to ensure optimal system performance.",
      author: "Michael Chen",
      date: "May 15, 2023",
      category: "Maintenance",
      readTime: "6 min read",
      image: "seasonal-maintenance"
    }
  ];

  const categories = [
    "Industry Insights",
    "User Guides",
    "Sustainability",
    "Case Studies",
    "Comparisons",
    "Maintenance",
    "Technology",
    "Policy"
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Blog</Badge>
          <h1 className="text-4xl font-bold text-blue-700 mb-6">RiverWatts Insights</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Stay informed with the latest news, insights, and tips about hydrokinetic energy 
            and sustainable technology.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 py-6 text-lg" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <div className="bg-slate-200 border-2 border-dashed rounded-t-lg w-full h-48" />
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge variant="outline">{post.readTime}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-slate-500 mr-2" />
                        <span className="text-sm text-slate-600">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                        <span className="text-sm text-slate-600">{post.date}</span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 mt-4">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-between mt-12">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-blue-600 text-white">
                  1
                </Button>
                <Button variant="outline">
                  2
                </Button>
                <Button variant="outline">
                  3
                </Button>
                <Button variant="outline">
                  ...
                </Button>
              </div>
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between hover:bg-slate-100"
                      >
                        <span>{category}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "The Future of Hydrokinetic Energy",
                    "Maximizing Energy Output",
                    "Environmental Benefits of Hydrokinetic Power"
                  ].map((title, index) => (
                    <li key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium text-slate-900 hover:text-blue-600 cursor-pointer">
                        {title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-3 w-3 text-slate-500 mr-1" />
                        <span className="text-xs text-slate-500">June 15, 2023</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Subscribe</CardTitle>
                <CardDescription>
                  Get the latest articles delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}