'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Zap,
  Battery,
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  RefreshCw,
  Settings,
  Wifi,
  Server
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function SystemStatusPage() {
  const systemOverview = {
    status: "operational",
    uptime: "99.8%",
    lastUpdate: "2 minutes ago",
    nextMaintenance: "June 15, 2024"
  };

  const statusMetrics = [
    { title: "System Health", value: "98.7%", status: "excellent", icon: Activity, color: "from-green-500 to-emerald-500" },
    { title: "Power Output", value: "2.4 kW", status: "optimal", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { title: "Battery Level", value: "87%", status: "good", icon: Battery, color: "from-green-500 to-emerald-500" },
    { title: "Connectivity", value: "Strong", status: "connected", icon: Wifi, color: "from-blue-500 to-blue-600" }
  ];

  const systemComponents = [
    { name: "Hydrokinetic Turbine", status: "operational", health: 98, lastCheck: "5 min ago", icon: Zap },
    { name: "Battery Storage", status: "operational", health: 95, lastCheck: "3 min ago", icon: Battery },
    { name: "Power Inverter", status: "operational", health: 97, lastCheck: "1 min ago", icon: Server },
    { name: "Control System", status: "operational", health: 99, lastCheck: "30 sec ago", icon: Settings },
    { name: "Monitoring Sensors", status: "warning", health: 85, lastCheck: "2 min ago", icon: Gauge },
    { name: "Communication Module", status: "operational", health: 96, lastCheck: "1 min ago", icon: Wifi }
  ];

  const environmentalData = [
    { label: "Water Temperature", value: "18.5°C", status: "normal", icon: Thermometer, trend: "stable" },
    { label: "Flow Rate", value: "2.3 m/s", status: "optimal", icon: Droplets, trend: "increasing" },
    { label: "Wind Speed", value: "12 km/h", status: "normal", icon: Wind, trend: "stable" },
    { label: "System Temperature", value: "42°C", status: "normal", icon: Thermometer, trend: "stable" }
  ];

  const performanceHistory = [
    { time: '00:00', efficiency: 94, output: 2.1, health: 98 },
    { time: '04:00', efficiency: 92, output: 1.8, health: 97 },
    { time: '08:00', efficiency: 96, output: 2.8, health: 98 },
    { time: '12:00', efficiency: 98, output: 3.2, health: 99 },
    { time: '16:00', efficiency: 97, output: 2.9, health: 98 },
    { time: '20:00', efficiency: 95, output: 2.4, health: 98 },
  ];

  const alerts = [
    { id: 1, type: "info", message: "System maintenance scheduled for next week", time: "1 hour ago", component: "System" },
    { id: 2, type: "warning", message: "Sensor calibration recommended", time: "3 hours ago", component: "Monitoring" },
    { id: 3, type: "success", message: "Battery optimization completed", time: "6 hours ago", component: "Battery" },
    { id: 4, type: "info", message: "Performance report generated", time: "1 day ago", component: "System" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      default: return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-slate-600 mt-2">Real-time monitoring of your energy system</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600">System operational • Last updated {systemOverview.lastUpdate}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statusMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="pt-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="badge--success">
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-[#014174] mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Performance Chart */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Activity className="h-5 w-5" />
              System Performance History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceHistory}>
                  <defs>
                    <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
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
                  <Area type="monotone" dataKey="efficiency" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEfficiency)" name="Efficiency %" />
                  <Area type="monotone" dataKey="health" stroke="#10b981" fillOpacity={1} fill="url(#colorHealth)" name="Health %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Component Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Server className="h-5 w-5" />
                Component Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemComponents.map((component, index) => {
                  const StatusIcon = getStatusIcon(component.status);
                  const Icon = component.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#014174] to-[#0a8ac6] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{component.name}</h3>
                          <p className="text-sm text-slate-600">Last check: {component.lastCheck}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm text-slate-600">Health</div>
                          <div className="font-semibold text-[#014174]">{component.health}%</div>
                        </div>
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(component.status)}`}>
                          <StatusIcon className="h-4 w-4" />
                          <span className="text-sm font-medium capitalize">{component.status}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Gauge className="h-5 w-5" />
                Environmental Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {environmentalData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{item.label}</h3>
                          <p className="text-sm text-slate-600">Trend: {item.trend}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-[#014174] text-lg">{item.value}</div>
                        <Badge className={
                          item.status === 'optimal' ? 'badge--success' :
                          item.status === 'normal' ? 'badge--info' : 'badge--warning'
                        }>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <AlertTriangle className="h-5 w-5" />
              Recent System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => {
                const AlertIcon = alert.type === 'success' ? CheckCircle : 
                                 alert.type === 'warning' ? AlertTriangle : 
                                 alert.type === 'error' ? XCircle : Activity;
                return (
                  <div key={alert.id} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className={`p-2 rounded-lg ${
                      alert.type === 'success' ? 'bg-green-100 text-green-600' :
                      alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                      alert.type === 'error' ? 'bg-red-100 text-red-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      <AlertIcon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{alert.message}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-slate-600">{alert.component}</span>
                        <span className="text-sm text-slate-500">{alert.time}</span>
                      </div>
                    </div>
                    <Badge className={
                      alert.type === 'success' ? 'badge--success' :
                      alert.type === 'warning' ? 'badge--warning' :
                      alert.type === 'error' ? 'badge--error' :
                      'badge--info'
                    }>
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
  );
}