'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Zap, 
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';
import { ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, PieChart, Pie, Cell } from 'recharts';

export default function AdminAnalyticsPage() {
  const metrics = [
    { title: "Total Energy Output", value: "3,247 MWh", change: "+12.5%", trend: "up", icon: Zap },
    { title: "System Efficiency", value: "94.2%", change: "+2.1%", trend: "up", icon: TrendingUp },
    { title: "Active Turbines", value: "47/50", change: "-1", trend: "down", icon: BarChart3 },
    { title: "Avg. Performance", value: "87.3%", change: "+5.2%", trend: "up", icon: TrendingUp }
  ];

  const performanceData = [
    { site: "River Alpha", efficiency: 96, output: "245 kW", status: "optimal" },
    { site: "River Beta", efficiency: 89, output: "198 kW", status: "good" },
    { site: "River Gamma", efficiency: 92, output: "221 kW", status: "good" },
    { site: "River Delta", efficiency: 78, output: "156 kW", status: "warning" }
  ];

  const energyTrendsData = [
    { month: 'Jan', production: 2800, efficiency: 89, target: 3000 },
    { month: 'Feb', production: 3100, efficiency: 92, target: 3200 },
    { month: 'Mar', production: 3400, efficiency: 94, target: 3500 },
    { month: 'Apr', production: 3200, efficiency: 91, target: 3300 },
    { month: 'May', production: 3600, efficiency: 96, target: 3700 },
    { month: 'Jun', production: 3800, efficiency: 98, target: 3900 }
  ];

  const efficiencyData = [
    { site: 'Alpha', efficiency: 96, target: 95 },
    { site: 'Beta', efficiency: 89, target: 90 },
    { site: 'Gamma', efficiency: 92, target: 88 },
    { site: 'Delta', efficiency: 78, target: 85 },
    { site: 'Echo', efficiency: 94, target: 92 }
  ];

  const systemDistribution = [
    { name: 'Operational', value: 47, color: '#10b981' },
    { name: 'Maintenance', value: 2, color: '#f59e0b' },
    { name: 'Offline', value: 1, color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Performance insights and system analytics</p>
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
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-slate-700">{metric.title}</CardTitle>
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-800 mb-1">{metric.value}</div>
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {metric.change}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <BarChart3 className="h-5 w-5" />
                Energy Production Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={energyTrendsData}>
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
                    <Bar dataKey="production" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <TrendingUp className="h-5 w-5" />
                Site Efficiency Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="site" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                    <Bar dataKey="efficiency" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="target" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Distribution */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <BarChart3 className="h-5 w-5" />
                System Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={systemDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {systemDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 gap-2 mt-4">
                {systemDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-slate-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-800">Performance Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Excellent Performance</h4>
                  <p className="text-green-700 text-sm">River Alpha site is exceeding efficiency targets by 1.1%</p>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Attention Required</h4>
                  <p className="text-yellow-700 text-sm">River Delta efficiency is 7% below target - maintenance recommended</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">System Overview</h4>
                  <p className="text-blue-700 text-sm">Overall system efficiency increased by 2.1% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Site Performance */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="text-blue-800">Site Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((site, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{site.site}</h3>
                      <p className="text-sm text-slate-600">Output: {site.output}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-slate-600">Efficiency</div>
                      <div className="font-semibold text-blue-800">{site.efficiency}%</div>
                    </div>
                    <div className="w-24">
                      <Progress value={site.efficiency} className="h-2" />
                    </div>
                    <Badge className={
                      site.status === 'optimal' ? 'badge--success' :
                      site.status === 'warning' ? 'badge--warning' : 'badge--success'
                    }>
                      {site.status}
                    </Badge>
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