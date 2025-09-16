'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { 
  Activity,
  Zap,
  MapPin,
  AlertTriangle,
  TrendingUp,
  Droplets,
  Thermometer,
  Wind,
  Settings,
  Download,
  RefreshCw,
  User,
  Bell,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import GoogleMap from '@/app/components/GoogleMap';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const sites = [
    { id: '1', name: 'St. Paul River Station', location: 'Monrovia, Liberia', coordinates: { lat: 6.3106, lng: -10.8047 }, status: 'operational' },
    { id: '2', name: 'Farmington River Station', location: 'Margibi County, Liberia', coordinates: { lat: 6.5469, lng: -10.7453 }, status: 'operational' },
    { id: '3', name: 'Cavalla River Station', location: 'Maryland County, Liberia', coordinates: { lat: 4.7362, lng: -7.6944 }, status: 'warning' },
    { id: '4', name: 'Cestos River Station', location: 'River Cess County, Liberia', coordinates: { lat: 5.9022, lng: -9.5611 }, status: 'operational' }
  ];

  const systemHealth = {
    overall: 98,
    operational: 45,
    total: 50,
    warning: 2,
    offline: 3
  };

  const performanceMetrics = {
    currentOutput: 3.2,
    dailyTarget: 4.0,
    efficiency: 87,
    progress: 82
  };

  const alerts = [
    { id: 1, type: 'warning', message: 'Turbine T-23 efficiency below threshold', location: 'Site Alpha', time: '5 min ago' },
    { id: 2, type: 'critical', message: 'Communication lost with Site Beta', location: 'Site Beta', time: '12 min ago' },
    { id: 3, type: 'info', message: 'Scheduled maintenance completed', location: 'Site Gamma', time: '1 hour ago' },
    { id: 4, type: 'warning', message: 'High water temperature detected', location: 'Site Delta', time: '2 hours ago' }
  ];

  const environmentalData = [
    { label: 'Water Temperature', value: '18.5°C', status: 'normal', icon: Thermometer },
    { label: 'Flow Rate', value: '2.3 m/s', status: 'optimal', icon: Droplets },
    { label: 'Wind Speed', value: '12 km/h', status: 'normal', icon: Wind }
  ];

  const energyData = [
    { time: '00:00', output: 2.1, efficiency: 85 },
    { time: '04:00', output: 1.8, efficiency: 82 },
    { time: '08:00', output: 2.8, efficiency: 89 },
    { time: '12:00', output: 3.2, efficiency: 92 },
    { time: '16:00', output: 3.5, efficiency: 94 },
    { time: '20:00', output: 2.9, efficiency: 88 },
  ];

  const systemStatusData = [
    { name: 'Operational', value: 45, color: '#10b981' },
    { name: 'Warning', value: 2, color: '#f59e0b' },
    { name: 'Offline', value: 3, color: '#ef4444' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              System Overview
            </h1>
            <p className="text-slate-600 mt-2">Real-time monitoring and control center</p>
          </div>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="focus-ring">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" className="focus-ring">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 text-white focus-ring">
                <Settings className="h-4 w-4 mr-2" />
                Settings
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
                  <p className="text-sm font-semibold text-slate-900">Admin User</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-500">System Administrator</span>
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
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Health Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="modern-card animate-slide-up lg:col-span-2 bg-white border border-slate-200">
            <CardHeader className="pb-4 border-b border-slate-100">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Activity className="h-5 w-5 text-blue-600" />
                System Health Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="relative w-36 h-36">
                    <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18" cy="18" r="15.9155"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="18" cy="18" r="15.9155"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeDasharray={`${systemHealth.overall}, 100`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-slate-800">{systemHealth.overall}%</div>
                        <div className="text-sm text-slate-500 font-medium">Operational</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 ml-8">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium text-slate-700">Online Systems</span>
                      </div>
                      <span className="text-xl font-bold text-slate-800">{systemHealth.operational}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-sm font-medium text-slate-700">Warning Status</span>
                      </div>
                      <span className="text-xl font-bold text-slate-800">{systemHealth.warning}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm font-medium text-slate-700">Offline Systems</span>
                      </div>
                      <span className="text-xl font-bold text-slate-800">{systemHealth.offline}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-xs font-medium text-blue-700 uppercase tracking-wide mb-1">System Status</div>
                    <div className="text-sm text-blue-600">All critical systems operational. {systemHealth.warning} minor alerts require attention.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <MapPin className="h-5 w-5" />
                Geographic Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <GoogleMap 
                  sites={sites}
                  selectedSite={selectedSite}
                  onSiteSelect={setSelectedSite}
                  mapType="roadmap"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-600">Operational ({sites.filter(s => s.status === 'operational').length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-slate-600">Warning ({sites.filter(s => s.status === 'warning').length})</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">Current Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-800">{performanceMetrics.currentOutput} MW</span>
              </div>
              <p className="text-sm text-green-600 mt-1">+0.3 MW from yesterday</p>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">Daily Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-blue-800">{performanceMetrics.progress}%</span>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <Progress value={performanceMetrics.progress} className="h-2 mb-2" />
              <p className="text-sm text-slate-600">{performanceMetrics.currentOutput}/{performanceMetrics.dailyTarget} MW target</p>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-800">{performanceMetrics.efficiency}%</span>
              </div>
              <p className="text-sm text-green-600 mt-1">Above average</p>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">Active Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span className="text-2xl font-bold text-blue-800">{alerts.filter(a => a.type !== 'info').length}</span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Energy Generation Chart */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Zap className="h-5 w-5" />
              Energy Generation Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={energyData}>
                  <defs>
                    <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
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
                    dataKey="output" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorOutput)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="modern-card animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Activity className="h-5 w-5" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={systemStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {systemStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {systemStatusData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs text-slate-600">{item.name}</span>
                    </div>
                    <div className="font-bold text-slate-800">{item.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up lg:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <AlertTriangle className="h-5 w-5" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'critical' ? 'bg-red-500' :
                      alert.type === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{alert.message}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-slate-600">{alert.location}</span>
                        <span className="text-sm text-slate-500">{alert.time}</span>
                      </div>
                    </div>
                    <Badge className={
                      alert.type === 'critical' ? 'badge--error' :
                      alert.type === 'warning' ? 'badge--warning' :
                      'badge--success'
                    }>
                      {alert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}