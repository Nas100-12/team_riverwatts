'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar,
  Filter,
  BarChart3,
  TrendingUp,
  Zap,
  Users
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function AdminReportsPage() {
  const reportTypes = [
    { 
      title: "Energy Production Report", 
      description: "Comprehensive energy output analysis",
      icon: Zap, 
      color: "from-blue-500 to-cyan-500",
      frequency: "Daily",
      lastGenerated: "2 hours ago"
    },
    { 
      title: "System Performance Report", 
      description: "Turbine efficiency and maintenance metrics",
      icon: BarChart3, 
      color: "from-green-500 to-emerald-500",
      frequency: "Weekly",
      lastGenerated: "1 day ago"
    },
    { 
      title: "User Activity Report", 
      description: "Dashboard usage and user engagement",
      icon: Users, 
      color: "from-purple-500 to-pink-500",
      frequency: "Monthly",
      lastGenerated: "3 days ago"
    },
    { 
      title: "Financial Analysis Report", 
      description: "Cost savings and revenue analysis",
      icon: TrendingUp, 
      color: "from-orange-500 to-red-500",
      frequency: "Monthly",
      lastGenerated: "1 week ago"
    }
  ];

  const recentReports = [
    { name: "Q4 Energy Production Summary", type: "PDF", size: "2.4 MB", date: "Dec 15, 2024", status: "completed" },
    { name: "November Performance Analysis", type: "Excel", size: "1.8 MB", date: "Dec 1, 2024", status: "completed" },
    { name: "System Health Report", type: "PDF", size: "3.1 MB", date: "Nov 28, 2024", status: "completed" },
    { name: "User Engagement Metrics", type: "PDF", size: "1.2 MB", date: "Nov 25, 2024", status: "completed" },
    { name: "Cost Analysis Report", type: "Excel", size: "2.7 MB", date: "Nov 20, 2024", status: "completed" }
  ];

  const reportTrendsData = [
    { month: 'Jul', generated: 12, downloaded: 45, automated: 8 },
    { month: 'Aug', generated: 15, downloaded: 52, automated: 10 },
    { month: 'Sep', generated: 18, downloaded: 61, automated: 12 },
    { month: 'Oct', generated: 22, downloaded: 68, automated: 15 },
    { month: 'Nov', generated: 25, downloaded: 74, automated: 18 },
    { month: 'Dec', generated: 28, downloaded: 82, automated: 20 }
  ];

  const reportTypeData = [
    { type: 'Energy', count: 45, percentage: 35 },
    { type: 'Performance', count: 32, percentage: 25 },
    { type: 'Financial', count: 28, percentage: 22 },
    { type: 'User Activity', count: 23, percentage: 18 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
            <p className="text-slate-600 mt-2">Generate and manage system reports</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <FileText className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {reportTypes.map((report, index) => {
            const Icon = report.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${report.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900">{report.title}</CardTitle>
                        <p className="text-sm text-slate-600 mt-1">{report.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <Badge variant="outline">{report.frequency}</Badge>
                      <span>Last: {report.lastGenerated}</span>
                    </div>
                    <Button size="sm" className="focus-ring">
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Report Analytics */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <BarChart3 className="h-5 w-5" />
                Report Generation Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={reportTrendsData}>
                    <defs>
                      <linearGradient id="colorGenerated" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorDownloaded" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="downloaded" 
                      stackId="1"
                      stroke="#10b981" 
                      fillOpacity={1} 
                      fill="url(#colorDownloaded)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="generated" 
                      stackId="2"
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorGenerated)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <TrendingUp className="h-5 w-5" />
                Report Types Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reportTypeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="type" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                    <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <FileText className="h-5 w-5" />
              Recent Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-gradient-to-r from-white to-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{report.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>{report.type}</span>
                        <span>{report.size}</span>
                        <span>{report.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="badge--success">
                      {report.status}
                    </Badge>
                    <Button variant="outline" size="sm" className="focus-ring">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}