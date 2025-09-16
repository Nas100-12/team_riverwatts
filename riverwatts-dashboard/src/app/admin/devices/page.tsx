'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Input } from "@/app/components/ui/input";
import { 
  Zap, 
  Settings, 
  Power, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Search,
  Filter,
  RotateCcw,
  Play,
  Pause,
  StopCircle,
  Wrench,
  MapPin,
  Activity,
  Thermometer,
  Droplets,
  Wind,
  Battery,
  Wifi,
  WifiOff
} from 'lucide-react';
import { useState } from 'react';

export default function DeviceManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const turbines = [
    {
      id: 'T-001',
      name: 'Alpha River Turbine 1',
      location: 'Site Alpha - Section A',
      status: 'operational',
      output: 4.2,
      efficiency: 94,
      temperature: 18.5,
      vibration: 0.3,
      lastMaintenance: '2024-01-15',
      nextMaintenance: '2024-04-15',
      connectivity: 'online',
      alerts: 0
    },
    {
      id: 'T-002',
      name: 'Alpha River Turbine 2',
      location: 'Site Alpha - Section A',
      status: 'warning',
      output: 3.8,
      efficiency: 87,
      temperature: 22.1,
      vibration: 0.7,
      lastMaintenance: '2024-01-10',
      nextMaintenance: '2024-04-10',
      connectivity: 'online',
      alerts: 2
    },
    {
      id: 'T-003',
      name: 'Beta River Turbine 1',
      location: 'Site Beta - Section B',
      status: 'offline',
      output: 0,
      efficiency: 0,
      temperature: 15.2,
      vibration: 0,
      lastMaintenance: '2024-01-20',
      nextMaintenance: '2024-04-20',
      connectivity: 'offline',
      alerts: 1
    },
    {
      id: 'T-004',
      name: 'Gamma River Turbine 1',
      location: 'Site Gamma - Section C',
      status: 'maintenance',
      output: 0,
      efficiency: 0,
      temperature: 16.8,
      vibration: 0,
      lastMaintenance: '2024-01-25',
      nextMaintenance: '2024-04-25',
      connectivity: 'online',
      alerts: 0
    },
    {
      id: 'T-005',
      name: 'Delta River Turbine 1',
      location: 'Site Delta - Section D',
      status: 'operational',
      output: 4.5,
      efficiency: 96,
      temperature: 17.3,
      vibration: 0.2,
      lastMaintenance: '2024-01-12',
      nextMaintenance: '2024-04-12',
      connectivity: 'online',
      alerts: 0
    },
    {
      id: 'T-006',
      name: 'Delta River Turbine 2',
      location: 'Site Delta - Section D',
      status: 'operational',
      output: 4.1,
      efficiency: 92,
      temperature: 18.9,
      vibration: 0.4,
      lastMaintenance: '2024-01-18',
      nextMaintenance: '2024-04-18',
      connectivity: 'online',
      alerts: 1
    }
  ];

  const filteredTurbines = turbines.filter(turbine => {
    const matchesSearch = turbine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         turbine.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         turbine.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || turbine.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'offline': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'maintenance': return <Wrench className="h-5 w-5 text-blue-500" />;
      default: return <XCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational': return 'badge--success';
      case 'warning': return 'badge--warning';
      case 'offline': return 'badge--error';
      case 'maintenance': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const statusCounts = {
    operational: turbines.filter(t => t.status === 'operational').length,
    warning: turbines.filter(t => t.status === 'warning').length,
    offline: turbines.filter(t => t.status === 'offline').length,
    maintenance: turbines.filter(t => t.status === 'maintenance').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Device Management
            </h1>
            <p className="text-slate-600 mt-2">Monitor and control hydrokinetic turbines</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <RotateCcw className="h-4 w-4 mr-2" />
              Refresh All
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              System Config
            </Button>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Operational</p>
                  <p className="text-2xl font-bold text-green-600">{statusCounts.operational}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Warning</p>
                  <p className="text-2xl font-bold text-yellow-600">{statusCounts.warning}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Offline</p>
                  <p className="text-2xl font-bold text-red-600">{statusCounts.offline}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Maintenance</p>
                  <p className="text-2xl font-bold text-blue-600">{statusCounts.maintenance}</p>
                </div>
                <Wrench className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="modern-card animate-slide-up mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search turbines by ID, name, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('all')}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === 'operational' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('operational')}
                >
                  Operational
                </Button>
                <Button
                  variant={filterStatus === 'warning' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('warning')}
                >
                  Warning
                </Button>
                <Button
                  variant={filterStatus === 'offline' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('offline')}
                >
                  Offline
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Turbine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTurbines.map((turbine, index) => (
            <Card key={turbine.id} className="modern-card animate-slide-up hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      {turbine.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600 mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {turbine.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {turbine.connectivity === 'online' ? 
                      <Wifi className="h-4 w-4 text-green-500" /> : 
                      <WifiOff className="h-4 w-4 text-red-500" />
                    }
                    <Badge className={getStatusBadge(turbine.status)}>
                      {turbine.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 rounded-lg bg-slate-50">
                    <div className="text-2xl font-bold text-blue-800">{turbine.output} kW</div>
                    <div className="text-xs text-slate-600">Output</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-slate-50">
                    <div className="text-2xl font-bold text-blue-800">{turbine.efficiency}%</div>
                    <div className="text-xs text-slate-600">Efficiency</div>
                  </div>
                </div>

                {/* Efficiency Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Efficiency</span>
                    <span className="font-medium">{turbine.efficiency}%</span>
                  </div>
                  <Progress value={turbine.efficiency} className="h-2" />
                </div>

                {/* Environmental Data */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div className="flex items-center gap-1 p-2 rounded bg-blue-50">
                    <Thermometer className="h-3 w-3 text-blue-600" />
                    <span className="text-slate-700">{turbine.temperature}°C</span>
                  </div>
                  <div className="flex items-center gap-1 p-2 rounded bg-green-50">
                    <Activity className="h-3 w-3 text-green-600" />
                    <span className="text-slate-700">{turbine.vibration}g</span>
                  </div>
                  <div className="flex items-center gap-1 p-2 rounded bg-yellow-50">
                    <Battery className="h-3 w-3 text-yellow-600" />
                    <span className="text-slate-700">98%</span>
                  </div>
                </div>

                {/* Alerts */}
                {turbine.alerts > 0 && (
                  <div className="mb-4 p-2 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center gap-2 text-sm text-yellow-800">
                      <AlertTriangle className="h-4 w-4" />
                      {turbine.alerts} active alert{turbine.alerts > 1 ? 's' : ''}
                    </div>
                  </div>
                )}

                {/* Control Buttons */}
                <div className="flex gap-2">
                  {turbine.status === 'operational' ? (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Pause className="h-3 w-3 mr-1" />
                      Pause
                    </Button>
                  ) : turbine.status === 'offline' ? (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Play className="h-3 w-3 mr-1" />
                      Start
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="flex-1" disabled>
                      <StopCircle className="h-3 w-3 mr-1" />
                      {turbine.status}
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Settings className="h-3 w-3" />
                  </Button>
                </div>

                {/* Maintenance Info */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-600">
                    <div className="flex justify-between mb-1">
                      <span>Last Maintenance:</span>
                      <span>{turbine.lastMaintenance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Maintenance:</span>
                      <span>{turbine.nextMaintenance}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTurbines.length === 0 && (
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No turbines found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}