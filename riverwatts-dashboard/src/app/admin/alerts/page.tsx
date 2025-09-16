'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { 
  AlertTriangle, 
  Bell,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  RefreshCw,
  Settings,
  Zap,
  MapPin,
  User,
  Eye,
  EyeOff,
  Archive,
  MessageSquare,
  Activity,
  Thermometer,
  Droplets,
  Wifi,
  WifiOff
} from 'lucide-react';

import { useState } from 'react';

export default function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showResolved, setShowResolved] = useState(false);

  const alertStats = {
    critical: 2,
    warning: 8,
    info: 12,
    resolved: 45
  };

  const alerts = [
    {
      id: 'ALT-001',
      title: 'Turbine T-045 Bearing Temperature Critical',
      description: 'Bearing temperature has exceeded 85°C threshold. Immediate attention required.',
      severity: 'critical',
      status: 'active',
      turbine: 'T-045',
      site: 'River Beta',
      timestamp: '2024-02-10 14:23:15',
      category: 'temperature',
      assignedTo: 'Sarah Johnson',
      acknowledged: false,
      value: '87.2°C',
      threshold: '85°C'
    },
    {
      id: 'ALT-002',
      title: 'Communication Lost - Site Gamma',
      description: 'Lost communication with 3 turbines at Site Gamma. Network connectivity issue suspected.',
      severity: 'critical',
      status: 'active',
      turbine: 'Multiple',
      site: 'River Gamma',
      timestamp: '2024-02-10 13:45:22',
      category: 'connectivity',
      assignedTo: 'Mike Wilson',
      acknowledged: true,
      value: 'Offline',
      threshold: 'Online'
    },
    {
      id: 'ALT-003',
      title: 'Turbine T-023 Efficiency Below Threshold',
      description: 'Turbine efficiency has dropped to 78%, below the 80% threshold.',
      severity: 'warning',
      status: 'active',
      turbine: 'T-023',
      site: 'River Alpha',
      timestamp: '2024-02-10 12:15:33',
      category: 'performance',
      assignedTo: 'John Smith',
      acknowledged: true,
      value: '78%',
      threshold: '80%'
    },
    {
      id: 'ALT-004',
      title: 'High Vibration Detected - T-067',
      description: 'Vibration levels are elevated, indicating possible mechanical issue.',
      severity: 'warning',
      status: 'active',
      turbine: 'T-067',
      site: 'River Delta',
      timestamp: '2024-02-10 11:30:45',
      category: 'vibration',
      assignedTo: 'Lisa Chen',
      acknowledged: false,
      value: '0.8g',
      threshold: '0.5g'
    },
    {
      id: 'ALT-005',
      title: 'Scheduled Maintenance Reminder',
      description: 'Quarterly maintenance for T-089 is due within 7 days.',
      severity: 'info',
      status: 'active',
      turbine: 'T-089',
      site: 'River Alpha',
      timestamp: '2024-02-10 09:00:00',
      category: 'maintenance',
      assignedTo: 'John Smith',
      acknowledged: false,
      value: '7 days',
      threshold: '14 days'
    },
    {
      id: 'ALT-006',
      title: 'Water Level Optimal',
      description: 'Water levels have returned to optimal range after recent rainfall.',
      severity: 'info',
      status: 'resolved',
      turbine: 'All',
      site: 'All Sites',
      timestamp: '2024-02-10 08:15:12',
      category: 'environmental',
      assignedTo: 'System',
      acknowledged: true,
      value: '3.2m',
      threshold: '2.5-4.0m'
    }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.turbine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.site.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
    const matchesStatus = filterStatus === 'all' || alert.status === filterStatus;
    const shouldShow = showResolved || alert.status !== 'resolved';
    return matchesSearch && matchesSeverity && matchesStatus && shouldShow;
  });

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info': return <CheckCircle className="h-5 w-5 text-blue-500" />;
      default: return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical': return 'badge--error';
      case 'warning': return 'badge--warning';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'temperature': return <Thermometer className="h-4 w-4" />;
      case 'connectivity': return <Wifi className="h-4 w-4" />;
      case 'performance': return <Activity className="h-4 w-4" />;
      case 'vibration': return <Activity className="h-4 w-4" />;
      case 'maintenance': return <Settings className="h-4 w-4" />;
      case 'environmental': return <Droplets className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Alerts & Monitoring
            </h1>
            <p className="text-slate-600 mt-2">Real-time system alerts and notifications</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              Alert Settings
            </Button>
          </div>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Critical</p>
                  <p className="text-2xl font-bold text-red-600">{alertStats.critical}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
              <div className="mt-2">
                <div className="text-xs text-red-600">Requires immediate attention</div>
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Warning</p>
                  <p className="text-2xl font-bold text-yellow-600">{alertStats.warning}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="mt-2">
                <div className="text-xs text-yellow-600">Monitor closely</div>
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Info</p>
                  <p className="text-2xl font-bold text-blue-600">{alertStats.info}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <div className="text-xs text-blue-600">Informational updates</div>
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Resolved</p>
                  <p className="text-2xl font-bold text-green-600">{alertStats.resolved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="mt-2">
                <div className="text-xs text-green-600">Last 24 hours</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="modern-card animate-slide-up mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search alerts by title, description, turbine, or site..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={filterSeverity === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterSeverity('all')}
                >
                  All Severity
                </Button>
                <Button
                  variant={filterSeverity === 'critical' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterSeverity('critical')}
                >
                  Critical
                </Button>
                <Button
                  variant={filterSeverity === 'warning' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterSeverity('warning')}
                >
                  Warning
                </Button>
                <Button
                  variant={filterSeverity === 'info' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterSeverity('info')}
                >
                  Info
                </Button>
                <Button
                  variant={showResolved ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowResolved(!showResolved)}
                >
                  {showResolved ? <EyeOff className="h-3 w-3 mr-1" /> : <Eye className="h-3 w-3 mr-1" />}
                  Resolved
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert, index) => (
            <Card key={alert.id} className={`modern-card animate-slide-up hover:shadow-lg transition-shadow ${
              alert.severity === 'critical' ? 'border-l-4 border-l-red-500' :
              alert.severity === 'warning' ? 'border-l-4 border-l-yellow-500' :
              'border-l-4 border-l-blue-500'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex items-center gap-2">
                      {getSeverityIcon(alert.severity)}
                      {getCategoryIcon(alert.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">{alert.title}</h3>
                        <Badge className={getSeverityBadge(alert.severity)}>
                          {alert.severity}
                        </Badge>
                        {alert.status === 'resolved' && (
                          <Badge className="badge--success">
                            Resolved
                          </Badge>
                        )}
                        {alert.acknowledged && alert.status !== 'resolved' && (
                          <Badge className="bg-blue-100 text-blue-800">
                            Acknowledged
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-700 mb-3">{alert.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Turbine:</span>
                          <span className="font-medium text-blue-800">{alert.turbine}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Site:</span>
                          <span className="font-medium text-blue-800">{alert.site}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <User className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Assigned:</span>
                          <span className="font-medium text-blue-800">{alert.assignedTo}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Time:</span>
                          <span className="font-medium text-blue-800">{formatTimestamp(alert.timestamp)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-50">
                        <div className="text-sm">
                          <span className="text-slate-600">Current Value:</span>
                          <span className={`ml-2 font-medium ${
                            alert.severity === 'critical' ? 'text-red-600' :
                            alert.severity === 'warning' ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            {alert.value}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-slate-600">Threshold:</span>
                          <span className="ml-2 font-medium text-slate-700">{alert.threshold}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    {alert.status === 'active' && (
                      <>
                        {!alert.acknowledged ? (
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Acknowledge
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline">
                            <XCircle className="h-3 w-3 mr-1" />
                            Resolve
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Comment
                        </Button>
                        <Button size="sm" variant="outline">
                          <User className="h-3 w-3 mr-1" />
                          Assign
                        </Button>
                      </>
                    )}
                    {alert.status === 'resolved' && (
                      <Button size="sm" variant="outline">
                        <Archive className="h-3 w-3 mr-1" />
                        Archive
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-12 text-center">
              <Bell className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No alerts found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}