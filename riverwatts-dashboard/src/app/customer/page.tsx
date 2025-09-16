'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  Zap,
  Battery,
  TrendingUp,
  Calendar,
  Download,
  CheckCircle,
  FileText,
  Settings,
  Leaf,
  BarChart3,
  RefreshCw,
  User,
  Bell,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, ComposedChart, Bar } from 'recharts';

export default function CustomerOverviewPage() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { logout } = useAuth();

  const energyMetrics = [
    { title: "Today's Generation", value: "12.4 kWh", change: "+2.3 kWh", changeType: "positive", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { title: "Battery Level", value: "87%", status: "Optimal", icon: Battery, color: "from-green-500 to-emerald-500" },
    { title: "This Month", value: "342.7 kWh", change: "+45.2 kWh", changeType: "positive", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { title: "Carbon Saved", value: "3.2 tons", change: "+0.4 tons", changeType: "positive", icon: Leaf, color: "from-green-600 to-green-400" },
  ];

  const systemStatus = {
    status: "operational",
    lastUpdate: "2 minutes ago",
    efficiency: 98.7,
    currentOutput: "2.4 kW"
  };

  const energyProductionData = [
    { time: '6AM', production: 1.2, battery: 65 },
    { time: '9AM', production: 2.1, battery: 72 },
    { time: '12PM', production: 2.8, battery: 85 },
    { time: '3PM', production: 2.4, battery: 87 },
    { time: '6PM', production: 1.8, battery: 84 },
    { time: '9PM', production: 1.1, battery: 79 },
  ];

  const batteryUsageData = [
    { hour: '00', usage: 0.8, charge: 85 },
    { hour: '04', usage: 0.6, charge: 82 },
    { hour: '08', usage: 1.2, charge: 78 },
    { hour: '12', usage: 1.8, charge: 87 },
    { hour: '16', usage: 2.1, charge: 89 },
    { hour: '20', usage: 1.4, charge: 87 },
  ];

  const systemHealthData = [
    { name: 'Turbine', value: 98, fill: '#10b981' },
    { name: 'Battery', value: 87, fill: '#3b82f6' },
    { name: 'Inverter', value: 94, fill: '#8b5cf6' },
    { name: 'Grid', value: 91, fill: '#f59e0b' }
  ];

  const weeklyComparisonData = [
    { day: 'Mon', thisWeek: 14.2, lastWeek: 12.8, target: 15.0 },
    { day: 'Tue', thisWeek: 13.8, lastWeek: 13.1, target: 15.0 },
    { day: 'Wed', thisWeek: 15.4, lastWeek: 14.2, target: 15.0 },
    { day: 'Thu', thisWeek: 16.1, lastWeek: 13.9, target: 15.0 },
    { day: 'Fri', thisWeek: 14.7, lastWeek: 14.5, target: 15.0 },
    { day: 'Sat', thisWeek: 13.2, lastWeek: 12.6, target: 15.0 },
    { day: 'Sun', thisWeek: 12.4, lastWeek: 11.8, target: 15.0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Energy Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Your clean energy generation at a glance</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="status-dot status-dot--online"></div>
              <span className="text-sm text-slate-600">System operational • Last updated {systemStatus.lastUpdate}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6 lg:mt-0">
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="focus-ring">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" className="focus-ring">
                <Calendar className="h-4 w-4 mr-2" />
                Range
              </Button>
              <Button variant="outline" size="sm" className="focus-ring">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-50/50 to-blue-50/30 border border-white/20 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Customer User</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-500">Energy Customer</span>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                    <User className="h-4 w-4" />
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </button>
                  <hr className="my-2 border-slate-200" />
                  <button 
                    onClick={logout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {energyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
                  <CardTitle className="text-sm font-medium text-slate-700">{metric.title}</CardTitle>
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-bold text-blue-800 mb-2">{metric.value}</div>
                  {metric.change && (
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">{metric.change}</span>
                    </div>
                  )}
                  {metric.status && (
                    <Badge className="badge--success mt-2">
                      {metric.status}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-5 w-5 text-green-500" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Badge className="badge--success">Operational</Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-800">{systemStatus.efficiency}%</div>
                  <div className="text-sm text-slate-600">Efficiency</div>
                </div>
              </div>
              <p className="text-sm text-slate-600">Last updated: {systemStatus.lastUpdate}</p>
            </CardContent>
          </Card>
          
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Zap className="h-5 w-5 text-blue-500" />
                Current Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-800 mb-4">{systemStatus.currentOutput}</div>
              <Progress value={75} className="h-3 mb-2" />
              <div className="flex justify-between text-sm text-slate-600">
                <span>0 kW</span>
                <span>5 kW capacity</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Battery className="h-5 w-5 text-green-500" />
                Battery Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-800 mb-4">87%</div>
              <Progress value={87} className="h-3 mb-2" />
              <div className="flex justify-between text-sm text-slate-600">
                <span>12.4 kWh stored</span>
                <span>14.3 kWh capacity</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader className="pb-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <CardTitle className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Energy Production Trends
                </CardTitle>
                <CardDescription className="mt-1">24-hour generation overview with peak performance insights</CardDescription>
              </div>
              <div className="flex gap-2 mt-4 lg:mt-0">
                <Button variant="outline" size="sm" className="focus-ring">24h</Button>
                <Button variant="outline" size="sm" className="focus-ring">7d</Button>
                <Button size="sm" className="gradient-primary text-white focus-ring">30d</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={energyProductionData}>
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
                    dataKey="production" 
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

        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-blue-800 flex items-center gap-2">
              <Battery className="h-5 w-5" />
              Battery Usage Patterns
            </CardTitle>
            <CardDescription className="mt-1">Charge levels and usage throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={batteryUsageData}>
                  <defs>
                    <linearGradient id="colorCharge" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
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

        {/* System Health Overview */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                System Health Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={systemHealthData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {systemHealthData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                      <span className="text-sm text-slate-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Weekly Performance Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={weeklyComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }} 
                    />
                    <Bar dataKey="thisWeek" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="lastWeek" fill="#e2e8f0" radius={[2, 2, 0, 0]} />
                    <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="font-semibold text-blue-800">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 focus-ring hover:scale-105 transition-transform" asChild>
                  <a href="/customer/energy">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Energy</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 focus-ring hover:scale-105 transition-transform" asChild>
                  <a href="/customer/battery">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Battery className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Battery</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 focus-ring hover:scale-105 transition-transform" asChild>
                  <a href="/customer/reports">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Reports</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 focus-ring hover:scale-105 transition-transform" asChild>
                  <a href="/customer/settings">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center shadow-lg">
                      <Settings className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Settings</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="modern-card animate-slide-up lg:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="font-semibold text-[#014174] flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    id: 1, 
                    message: "Battery charge level optimal", 
                    time: "2 hours ago", 
                    type: "success",
                    icon: Battery
                  },
                  { 
                    id: 2, 
                    message: "Energy production increased by 15%", 
                    time: "1 day ago", 
                    type: "success",
                    icon: TrendingUp
                  },
                  { 
                    id: 3, 
                    message: "System maintenance scheduled for tomorrow", 
                    time: "2 days ago", 
                    type: "info",
                    icon: Settings
                  },
                  { 
                    id: 4, 
                    message: "Monthly carbon savings milestone reached", 
                    time: "3 days ago", 
                    type: "success",
                    icon: Leaf
                  },
                ].map((alert) => {
                  const Icon = alert.icon;
                  return (
                    <div key={alert.id} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-gradient-to-r from-white to-slate-50">
                      <div className={`p-2 rounded-lg ${
                        alert.type === "success" ? "bg-green-100 text-green-600" :
                        alert.type === "warning" ? "bg-yellow-100 text-yellow-600" :
                        "bg-blue-100 text-blue-600"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900 text-sm">{alert.message}</p>
                        <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                      </div>
                      <Badge className={`${
                        alert.type === "success" ? "badge--success" :
                        alert.type === "warning" ? "badge--warning" :
                        "badge--info"
                      }`}>
                        {alert.type}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
