'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  Zap, 
  TrendingUp, 
  Calendar,
  Download,
  BarChart3,
  Sun,
  Moon,
  Activity,
  ArrowUp,
  ArrowDown,
  Gauge
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

export default function CustomerEnergyPage() {
  const energyStats = [
    { title: "Today's Generation", value: "18.4 kWh", target: "20 kWh", progress: 92, icon: Zap },
    { title: "This Week", value: "127.8 kWh", target: "140 kWh", progress: 91, icon: TrendingUp },
    { title: "This Month", value: "542.1 kWh", target: "600 kWh", progress: 90, icon: BarChart3 },
    { title: "Peak Output", value: "3.2 kW", time: "2:30 PM", icon: Activity }
  ];

  const hourlyData = [
    { hour: "6 AM", generation: 0.8, consumption: 1.2, net: -0.4 },
    { hour: "9 AM", generation: 2.1, consumption: 1.8, net: 0.3 },
    { hour: "12 PM", generation: 3.2, consumption: 2.1, net: 1.1 },
    { hour: "3 PM", generation: 2.8, consumption: 1.9, net: 0.9 },
    { hour: "6 PM", generation: 2.3, consumption: 2.4, net: -0.1 },
    { hour: "9 PM", generation: 1.5, consumption: 1.7, net: -0.2 }
  ];

  const weeklyData = [
    { day: 'Mon', generation: 18.2, consumption: 16.8, efficiency: 92 },
    { day: 'Tue', generation: 19.1, consumption: 17.2, efficiency: 94 },
    { day: 'Wed', generation: 17.8, consumption: 16.5, efficiency: 89 },
    { day: 'Thu', generation: 20.3, consumption: 18.1, efficiency: 96 },
    { day: 'Fri', generation: 18.9, consumption: 17.6, efficiency: 93 },
    { day: 'Sat', generation: 16.4, consumption: 15.2, efficiency: 87 },
    { day: 'Sun', generation: 15.8, consumption: 14.9, efficiency: 85 }
  ];

  const realTimeData = [
    { time: '10:00', power: 2.1, voltage: 240, current: 8.8 },
    { time: '10:15', power: 2.3, voltage: 242, current: 9.5 },
    { time: '10:30', power: 2.8, voltage: 241, current: 11.6 },
    { time: '10:45', power: 3.1, voltage: 243, current: 12.8 },
    { time: '11:00', power: 2.9, voltage: 240, current: 12.1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              Energy Management
            </h1>
            <p className="text-slate-600 mt-2">Monitor your energy generation and consumption</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Calendar className="h-4 w-4 mr-2" />
              Range
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Energy Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {energyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {stat.progress && (
                      <div className="text-right">
                        <div className="text-xs text-slate-600">Target</div>
                        <div className="text-sm font-semibold text-slate-700">{stat.target}</div>
                      </div>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-[#014174] mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600 mb-3">{stat.title}</div>
                  {stat.progress && (
                    <div className="space-y-2">
                      <Progress value={stat.progress} className="h-2" />
                      <div className="text-xs text-slate-500">{stat.progress}% of target</div>
                    </div>
                  )}
                  {stat.time && (
                    <div className="text-xs text-slate-500">Peak at {stat.time}</div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Energy Flow Chart */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <BarChart3 className="h-5 w-5" />
              Today's Energy Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hour" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar dataKey="generation" fill="#10b981" name="Generation (kW)" />
                  <Bar dataKey="consumption" fill="#3b82f6" name="Consumption (kW)" />
                  <Line type="monotone" dataKey="net" stroke="#f59e0b" strokeWidth={3} name="Net (kW)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Overview */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <TrendingUp className="h-5 w-5" />
              Weekly Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorGeneration" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="generation" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorGeneration)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Metrics */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Gauge className="h-5 w-5" />
              Real-time System Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={realTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="power" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Hourly Breakdown */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Activity className="h-5 w-5" />
              Hourly Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hourlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#014174] to-[#0a8ac6] flex items-center justify-center">
                      {index < 3 ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{data.hour}</h3>
                      <p className="text-sm text-slate-600">Peak period</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Generated</div>
                      <div className="font-semibold text-green-600">{data.generation} kW</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Consumed</div>
                      <div className="font-semibold text-blue-600">{data.consumption} kW</div>
                    </div>
                    <Badge className={
                      data.generation > data.consumption ? 'badge--success' : 'badge--warning'
                    }>
                      {data.generation > data.consumption ? 'Surplus' : 'Deficit'}
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