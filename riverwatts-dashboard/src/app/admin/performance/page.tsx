'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  Zap, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  Activity,
  Thermometer,
  Droplets,
  Wind,
  Calendar,
  Download,
  RefreshCw,
  Target,
  Clock,
  Gauge,
  Battery,
  Sun,
  CloudRain
} from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerformancePage() {
  const [timeRange, setTimeRange] = useState('24h');

  const performanceMetrics = {
    totalOutput: 156.7,
    targetOutput: 180.0,
    avgEfficiency: 87.3,
    peakOutput: 198.4,
    uptime: 98.7,
    energyToday: 3247,
    energyWeek: 22890,
    energyMonth: 98450
  };

  const sitePerformance = [
    {
      site: 'River Alpha',
      turbines: 12,
      output: 45.2,
      capacity: 50.0,
      efficiency: 94.2,
      status: 'optimal',
      trend: 'up',
      change: '+2.3%'
    },
    {
      site: 'River Beta',
      turbines: 8,
      output: 28.1,
      capacity: 32.0,
      efficiency: 89.7,
      status: 'good',
      trend: 'up',
      change: '+1.8%'
    },
    {
      site: 'River Gamma',
      turbines: 15,
      output: 52.8,
      capacity: 60.0,
      efficiency: 91.5,
      status: 'good',
      trend: 'down',
      change: '-0.5%'
    },
    {
      site: 'River Delta',
      turbines: 10,
      output: 30.6,
      capacity: 40.0,
      efficiency: 85.2,
      status: 'warning',
      trend: 'down',
      change: '-3.2%'
    }
  ];

  const environmentalData = [
    {
      parameter: 'Water Temperature',
      current: '18.5°C',
      optimal: '15-20°C',
      status: 'optimal',
      impact: 'Positive',
      icon: Thermometer,
      color: 'text-blue-600'
    },
    {
      parameter: 'Flow Rate',
      current: '2.3 m/s',
      optimal: '2.0-3.0 m/s',
      status: 'optimal',
      impact: 'Positive',
      icon: Droplets,
      color: 'text-cyan-600'
    },
    {
      parameter: 'Wind Speed',
      current: '12 km/h',
      optimal: '< 25 km/h',
      status: 'good',
      impact: 'Neutral',
      icon: Wind,
      color: 'text-green-600'
    },
    {
      parameter: 'Water Level',
      current: '3.2 m',
      optimal: '2.5-4.0 m',
      status: 'optimal',
      impact: 'Positive',
      icon: Activity,
      color: 'text-indigo-600'
    },
    {
      parameter: 'Turbidity',
      current: '15 NTU',
      optimal: '< 20 NTU',
      status: 'good',
      impact: 'Neutral',
      icon: CloudRain,
      color: 'text-gray-600'
    },
    {
      parameter: 'Debris Level',
      current: 'Low',
      optimal: 'Low-Medium',
      status: 'optimal',
      impact: 'Positive',
      icon: Sun,
      color: 'text-yellow-600'
    }
  ];

  const hourlyData = [
    { hour: '00:00', output: 142, efficiency: 85, target: 150 },
    { hour: '02:00', output: 138, efficiency: 83, target: 150 },
    { hour: '04:00', output: 135, efficiency: 82, target: 150 },
    { hour: '06:00', output: 148, efficiency: 86, target: 150 },
    { hour: '08:00', output: 165, efficiency: 89, target: 150 },
    { hour: '10:00', output: 172, efficiency: 91, target: 150 },
    { hour: '12:00', output: 178, efficiency: 92, target: 150 },
    { hour: '14:00', output: 185, efficiency: 94, target: 150 },
    { hour: '16:00', output: 182, efficiency: 93, target: 150 },
    { hour: '18:00', output: 175, efficiency: 90, target: 150 },
    { hour: '20:00', output: 172, efficiency: 91, target: 150 },
    { hour: '22:00', output: 158, efficiency: 87, target: 150 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'optimal': return 'badge--success';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'badge--warning';
      case 'critical': return 'badge--error';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Performance Metrics
            </h1>
            <p className="text-slate-600 mt-2">Real-time performance analysis and optimization insights</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <div className="flex gap-1 bg-white rounded-lg p-1 border">
              {['1h', '24h', '7d', '30d'].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className="text-xs"
                >
                  {range}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Zap className="h-8 w-8 text-blue-600" />
                <Badge className="badge--success">Live</Badge>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{performanceMetrics.totalOutput} MW</div>
              <div className="text-sm text-slate-600 mb-2">Current Output</div>
              <div className="flex items-center text-sm">
                <Target className="h-3 w-3 mr-1 text-slate-500" />
                <span className="text-slate-600">{performanceMetrics.targetOutput} MW target</span>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Gauge className="h-8 w-8 text-green-600" />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{performanceMetrics.avgEfficiency}%</div>
              <div className="text-sm text-slate-600 mb-2">Avg Efficiency</div>
              <div className="text-sm text-green-600">+2.1% from last week</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{performanceMetrics.peakOutput} MW</div>
              <div className="text-sm text-slate-600 mb-2">Peak Output</div>
              <div className="text-sm text-green-600">Today at 14:30</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-8 w-8 text-blue-600" />
                <Badge className="badge--success">{performanceMetrics.uptime}%</Badge>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{performanceMetrics.uptime}%</div>
              <div className="text-sm text-slate-600 mb-2">System Uptime</div>
              <div className="text-sm text-green-600">Above target (95%)</div>
            </CardContent>
          </Card>
        </div>

        {/* Energy Production Summary */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Battery className="h-5 w-5" />
                Energy Production
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                  <span className="text-sm font-medium text-slate-700">Today</span>
                  <span className="text-lg font-bold text-green-700">{performanceMetrics.energyToday.toLocaleString()} kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                  <span className="text-sm font-medium text-slate-700">This Week</span>
                  <span className="text-lg font-bold text-blue-700">{performanceMetrics.energyWeek.toLocaleString()} kWh</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50">
                  <span className="text-sm font-medium text-slate-700">This Month</span>
                  <span className="text-lg font-bold text-purple-700">{performanceMetrics.energyMonth.toLocaleString()} kWh</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <BarChart3 className="h-5 w-5" />
                Performance Trends (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="hour" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="output" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Site Performance Comparison */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="text-blue-800">Site Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sitePerformance.map((site, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{site.site}</h3>
                      <p className="text-sm text-slate-600">{site.turbines} turbines active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Output</div>
                      <div className="font-semibold text-blue-800">{site.output} MW</div>
                      <div className="text-xs text-slate-500">of {site.capacity} MW</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Efficiency</div>
                      <div className="font-semibold text-blue-800">{site.efficiency}%</div>
                      <div className={`text-xs flex items-center gap-1 ${
                        site.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {site.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {site.change}
                      </div>
                    </div>
                    <div className="w-32">
                      <Progress value={(site.output / site.capacity) * 100} className="h-2 mb-1" />
                      <div className="text-xs text-slate-500 text-center">
                        {Math.round((site.output / site.capacity) * 100)}% capacity
                      </div>
                    </div>
                    <Badge className={getStatusBadge(site.status)}>
                      {site.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact Analysis */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Droplets className="h-5 w-5" />
              Environmental Conditions & Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {environmentalData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className={`h-6 w-6 ${item.color}`} />
                      <Badge className={getStatusBadge(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.parameter}</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Current:</span>
                        <span className="font-medium text-blue-800">{item.current}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Optimal:</span>
                        <span className="text-slate-700">{item.optimal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Impact:</span>
                        <span className={`font-medium ${
                          item.impact === 'Positive' ? 'text-green-600' :
                          item.impact === 'Negative' ? 'text-red-600' : 'text-slate-600'
                        }`}>
                          {item.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}