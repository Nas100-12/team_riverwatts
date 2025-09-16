'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { 
  Battery,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Thermometer,
  Activity,
  Settings
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

export default function CustomerBatteryPage() {
  const batteryStats = [
    { title: "Current Charge", value: "87%", status: "optimal", icon: Battery },
    { title: "Capacity", value: "14.3 kWh", total: "16.0 kWh", icon: Zap },
    { title: "Health", value: "98%", status: "excellent", icon: CheckCircle },
    { title: "Temperature", value: "23°C", status: "normal", icon: Thermometer }
  ];

  const chargingHistory = [
    { time: "6:00 AM", level: 65, action: "charging", power: 2.1 },
    { time: "9:00 AM", level: 78, action: "charging", power: 2.8 },
    { time: "12:00 PM", level: 87, action: "full", power: 0.1 },
    { time: "3:00 PM", level: 84, action: "discharging", power: -1.2 },
    { time: "6:00 PM", level: 79, action: "discharging", power: -1.8 },
    { time: "9:00 PM", level: 76, action: "standby", power: -0.3 }
  ];

  const batteryTrends = [
    { time: '00:00', charge: 82, cycles: 1247, health: 98.2 },
    { time: '04:00', charge: 79, cycles: 1247, health: 98.2 },
    { time: '08:00', charge: 85, cycles: 1248, health: 98.1 },
    { time: '12:00', charge: 87, cycles: 1248, health: 98.1 },
    { time: '16:00', charge: 84, cycles: 1248, health: 98.1 },
    { time: '20:00', charge: 81, cycles: 1248, health: 98.1 },
  ];

  const batteryMetrics = [
    { name: 'Charge Level', value: 87, fill: '#10b981' },
    { name: 'Health', value: 98, fill: '#3b82f6' },
    { name: 'Efficiency', value: 94, fill: '#f59e0b' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              Battery Management
            </h1>
            <p className="text-slate-600 mt-2">Monitor your energy storage system</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Clock className="h-4 w-4 mr-2" />
              History
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              Optimize
            </Button>
          </div>
        </div>

        {/* Battery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {batteryStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {stat.status && (
                      <Badge className={
                        stat.status === 'optimal' || stat.status === 'excellent' ? 'badge--success' :
                        stat.status === 'normal' ? 'badge--info' : 'badge--warning'
                      }>
                        {stat.status}
                      </Badge>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-[#014174] mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.title}</div>
                  {stat.total && (
                    <div className="text-xs text-slate-500 mt-1">of {stat.total}</div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Battery Metrics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Activity className="h-5 w-5" />
                Battery Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={batteryMetrics}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Tooltip />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <TrendingUp className="h-5 w-5" />
                Charge Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={batteryTrends}>
                    <defs>
                      <linearGradient id="colorCharge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
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
                    <Area 
                      type="monotone" 
                      dataKey="charge" 
                      stroke="#10b981" 
                      fillOpacity={1} 
                      fill="url(#colorCharge)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Power Flow Chart */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Zap className="h-5 w-5" />
              Power Flow Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chargingHistory}>
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
                    dataKey="level" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                    name="Charge Level (%)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="power" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
                    name="Power Flow (kW)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Activity Timeline */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Clock className="h-5 w-5" />
              Today's Activity Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chargingHistory.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${
                      entry.action === 'charging' ? 'bg-green-500' :
                      entry.action === 'discharging' ? 'bg-blue-500' :
                      entry.action === 'full' ? 'bg-emerald-500' :
                      'bg-slate-400'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-slate-900">{entry.time}</div>
                      <div className="text-sm text-slate-600 capitalize">{entry.action}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Charge</div>
                      <div className="font-semibold text-[#014174]">{entry.level}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600">Power</div>
                      <div className={`font-semibold ${
                        entry.power > 0 ? 'text-green-600' : entry.power < 0 ? 'text-blue-600' : 'text-slate-600'
                      }`}>
                        {entry.power > 0 ? '+' : ''}{entry.power} kW
                      </div>
                    </div>
                    <Progress value={entry.level} className="w-24 h-2" />
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