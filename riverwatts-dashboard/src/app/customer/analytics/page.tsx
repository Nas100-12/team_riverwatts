'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Filter,
  Zap,
  Battery,
  DollarSign,
  Leaf,
  Clock,
  Target
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function CustomerAnalyticsPage() {
  const kpiMetrics = [
    { title: "Energy Efficiency", value: "94.2%", change: "+2.1%", trend: "up", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { title: "Cost Savings", value: "$1,247", change: "+18.3%", trend: "up", icon: DollarSign, color: "from-green-500 to-emerald-500" },
    { title: "Carbon Reduction", value: "12.4 tons", change: "+15.7%", trend: "up", icon: Leaf, color: "from-emerald-500 to-green-400" },
    { title: "System Uptime", value: "99.8%", change: "-0.1%", trend: "down", icon: Clock, color: "from-purple-500 to-pink-500" }
  ];

  const performanceData = [
    { month: 'Jan', generation: 485, consumption: 420, efficiency: 91, savings: 98 },
    { month: 'Feb', generation: 512, consumption: 445, efficiency: 93, savings: 103 },
    { month: 'Mar', generation: 478, consumption: 410, efficiency: 89, savings: 96 },
    { month: 'Apr', generation: 534, consumption: 465, efficiency: 95, savings: 108 },
    { month: 'May', generation: 542, consumption: 470, efficiency: 94, savings: 127 },
    { month: 'Jun', generation: 558, consumption: 485, efficiency: 96, savings: 135 }
  ];

  const efficiencyBreakdown = [
    { name: 'Generation', value: 94, fill: '#3b82f6' },
    { name: 'Storage', value: 89, fill: '#10b981' },
    { name: 'Distribution', value: 96, fill: '#f59e0b' },
    { name: 'Consumption', value: 92, fill: '#8b5cf6' },
  ];

  const weeklyComparison = [
    { week: 'W1', thisYear: 128, lastYear: 115, target: 135 },
    { week: 'W2', thisYear: 142, lastYear: 128, target: 135 },
    { week: 'W3', thisYear: 135, lastYear: 122, target: 135 },
    { week: 'W4', thisYear: 137, lastYear: 118, target: 135 }
  ];

  const radarData = [
    { subject: 'Generation', A: 94, B: 88, fullMark: 100 },
    { subject: 'Efficiency', A: 96, B: 92, fullMark: 100 },
    { subject: 'Reliability', A: 99, B: 95, fullMark: 100 },
    { subject: 'Savings', A: 87, B: 82, fullMark: 100 },
    { subject: 'Sustainability', A: 93, B: 89, fullMark: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              Usage Analytics
            </h1>
            <p className="text-slate-600 mt-2">Deep insights into your energy system performance</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <Calendar className="h-4 w-4 mr-2" />
              Period
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <Card key={index} className="modern-card animate-slide-up group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="pt-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      <TrendIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">{metric.change}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#014174] mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Trends */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <BarChart3 className="h-5 w-5" />
              Performance Trends Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={performanceData}>
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
                  <Bar dataKey="consumption" fill="#94a3b8" name="Consumption (kWh)" />
                  <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} name="Efficiency (%)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Target className="h-5 w-5" />
                System Performance Radar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Current" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Radar name="Previous" dataKey="B" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.1} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Zap className="h-5 w-5" />
                Efficiency Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={efficiencyBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {efficiencyBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {efficiencyBreakdown.map((item, index) => (
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
                  <Tooltip />
                  <Bar dataKey="thisYear" fill="#3b82f6" name="This Year" />
                  <Bar dataKey="lastYear" fill="#94a3b8" name="Last Year" />
                  <Bar dataKey="target" fill="#10b981" name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Insights Summary */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <BarChart3 className="h-5 w-5" />
              Key Insights & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-green-800">Peak Performance</h3>
                </div>
                <p className="text-sm text-green-700">Your system is performing 12% above average during peak hours. Consider expanding capacity.</p>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Battery className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-blue-800">Storage Optimization</h3>
                </div>
                <p className="text-sm text-blue-700">Battery efficiency can be improved by 3% with optimized charging cycles during off-peak hours.</p>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-purple-800">Cost Savings</h3>
                </div>
                <p className="text-sm text-purple-700">You're saving $127 monthly. Projected annual savings: $1,524 compared to grid electricity.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}