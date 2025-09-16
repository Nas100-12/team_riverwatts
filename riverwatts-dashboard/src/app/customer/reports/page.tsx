'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Zap,
  DollarSign,
  Leaf,
  BarChart3,
  PieChart,
  Filter,
  Share
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Area, AreaChart } from 'recharts';

export default function CustomerReportsPage() {
  const reportSummary = [
    { title: "Monthly Generation", value: "542.1 kWh", change: "+12.3%", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { title: "Cost Savings", value: "$127.45", change: "+8.7%", icon: DollarSign, color: "from-green-500 to-emerald-500" },
    { title: "Carbon Offset", value: "3.2 tons", change: "+15.2%", icon: Leaf, color: "from-emerald-500 to-green-400" },
    { title: "Efficiency", value: "94.2%", change: "+2.1%", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
  ];

  const monthlyData = [
    { month: 'Jan', generation: 485, savings: 98, carbon: 2.8, efficiency: 91 },
    { month: 'Feb', generation: 512, savings: 103, carbon: 3.1, efficiency: 93 },
    { month: 'Mar', generation: 478, savings: 96, carbon: 2.9, efficiency: 89 },
    { month: 'Apr', generation: 534, savings: 108, carbon: 3.2, efficiency: 95 },
    { month: 'May', generation: 542, savings: 127, carbon: 3.2, efficiency: 94 },
  ];

  const energyBreakdown = [
    { name: 'Peak Hours', value: 45, fill: '#3b82f6' },
    { name: 'Off-Peak', value: 35, fill: '#10b981' },
    { name: 'Night', value: 20, fill: '#f59e0b' },
  ];

  const weeklyComparison = [
    { week: 'Week 1', thisMonth: 128, lastMonth: 115, target: 135 },
    { week: 'Week 2', thisMonth: 142, lastMonth: 128, target: 135 },
    { week: 'Week 3', thisMonth: 135, lastMonth: 122, target: 135 },
    { week: 'Week 4', thisMonth: 137, lastMonth: 118, target: 135 },
  ];

  const reports = [
    { 
      title: "Monthly Energy Report", 
      description: "Comprehensive analysis of energy generation and consumption",
      date: "May 2024",
      size: "2.4 MB",
      type: "PDF",
      status: "ready"
    },
    { 
      title: "Cost Analysis Report", 
      description: "Detailed breakdown of savings and ROI calculations",
      date: "May 2024",
      size: "1.8 MB",
      type: "PDF",
      status: "ready"
    },
    { 
      title: "Environmental Impact", 
      description: "Carbon footprint reduction and sustainability metrics",
      date: "May 2024",
      size: "1.2 MB",
      type: "PDF",
      status: "generating"
    },
    { 
      title: "System Performance", 
      description: "Technical performance analysis and efficiency metrics",
      date: "May 2024",
      size: "3.1 MB",
      type: "PDF",
      status: "ready"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
            <p className="text-slate-600 mt-2">Comprehensive insights into your energy system performance</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reportSummary.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="pt-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="badge--success">
                      {item.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-[#014174] mb-2">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <BarChart3 className="h-5 w-5" />
                Monthly Performance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Bar dataKey="generation" fill="#3b82f6" name="Generation (kWh)" />
                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} name="Efficiency (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <PieChart className="h-5 w-5" />
                Energy Generation Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={energyBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {energyBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {energyBreakdown.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                      <span className="text-xs text-slate-600">{item.name}</span>
                    </div>
                    <div className="font-bold text-slate-800">{item.value}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Comparison */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <TrendingUp className="h-5 w-5" />
              Weekly Performance Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar dataKey="thisMonth" fill="#3b82f6" name="This Month" />
                  <Bar dataKey="lastMonth" fill="#94a3b8" name="Last Month" />
                  <Bar dataKey="target" fill="#10b981" name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Available Reports */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <FileText className="h-5 w-5" />
              Available Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#014174] to-[#0a8ac6] flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{report.title}</h3>
                      <p className="text-sm text-slate-600">{report.description}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                        <span>{report.date}</span>
                        <span>{report.size}</span>
                        <span>{report.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={
                      report.status === 'ready' ? 'badge--success' : 'badge--warning'
                    }>
                      {report.status}
                    </Badge>
                    {report.status === 'ready' && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="focus-ring">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="gradient-primary text-white focus-ring">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    {report.status === 'generating' && (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm text-slate-600">Generating...</span>
                      </div>
                    )}
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