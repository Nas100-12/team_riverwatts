'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  Wrench, 
  Calendar, 
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Filter,
  Download,
  RefreshCw,
  User,
  MapPin,
  Zap,
  TrendingUp,
  TrendingDown,
  Activity,
  Settings,
  FileText,
  Camera
} from 'lucide-react';
import { useState } from 'react';

export default function MaintenancePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [filterStatus, setFilterStatus] = useState('all');

  const maintenanceStats = {
    scheduled: 12,
    overdue: 3,
    completed: 45,
    inProgress: 2,
    predictive: 8
  };

  const upcomingMaintenance = [
    {
      id: 'M-001',
      turbine: 'T-023',
      site: 'River Alpha',
      type: 'Routine Inspection',
      priority: 'medium',
      scheduledDate: '2024-02-15',
      estimatedDuration: '4 hours',
      technician: 'John Smith',
      status: 'scheduled',
      description: 'Quarterly turbine blade inspection and lubrication'
    },
    {
      id: 'M-002',
      turbine: 'T-045',
      site: 'River Beta',
      type: 'Bearing Replacement',
      priority: 'high',
      scheduledDate: '2024-02-12',
      estimatedDuration: '8 hours',
      technician: 'Sarah Johnson',
      status: 'overdue',
      description: 'Replace worn bearing assembly - vibration detected'
    },
    {
      id: 'M-003',
      turbine: 'T-012',
      site: 'River Gamma',
      type: 'Generator Service',
      priority: 'low',
      scheduledDate: '2024-02-18',
      estimatedDuration: '6 hours',
      technician: 'Mike Wilson',
      status: 'scheduled',
      description: 'Annual generator maintenance and testing'
    },
    {
      id: 'M-004',
      turbine: 'T-067',
      site: 'River Delta',
      type: 'Control System Update',
      priority: 'medium',
      scheduledDate: '2024-02-20',
      estimatedDuration: '3 hours',
      technician: 'Lisa Chen',
      status: 'in-progress',
      description: 'Firmware update and calibration'
    }
  ];

  const predictiveMaintenance = [
    {
      turbine: 'T-089',
      site: 'River Alpha',
      issue: 'Bearing Wear',
      confidence: 87,
      timeToFailure: '45 days',
      severity: 'medium',
      recommendation: 'Schedule bearing inspection within 30 days'
    },
    {
      turbine: 'T-034',
      site: 'River Beta',
      issue: 'Blade Imbalance',
      confidence: 92,
      timeToFailure: '21 days',
      severity: 'high',
      recommendation: 'Immediate blade balancing required'
    },
    {
      turbine: 'T-156',
      site: 'River Gamma',
      issue: 'Generator Overheating',
      confidence: 78,
      timeToFailure: '60 days',
      severity: 'low',
      recommendation: 'Monitor temperature trends, schedule cooling system check'
    }
  ];

  const maintenanceHistory = [
    {
      id: 'M-098',
      turbine: 'T-023',
      site: 'River Alpha',
      type: 'Blade Cleaning',
      completedDate: '2024-02-08',
      duration: '3 hours',
      technician: 'John Smith',
      status: 'completed',
      cost: '$450',
      notes: 'Routine cleaning completed successfully'
    },
    {
      id: 'M-097',
      turbine: 'T-045',
      site: 'River Beta',
      type: 'Emergency Repair',
      completedDate: '2024-02-05',
      duration: '12 hours',
      technician: 'Emergency Team',
      status: 'completed',
      cost: '$2,340',
      notes: 'Replaced damaged control unit after storm'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'badge--error';
      case 'medium': return 'badge--warning';
      case 'low': return 'badge--success';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <Activity className="h-4 w-4 text-blue-500" />;
      case 'scheduled': return <Clock className="h-4 w-4 text-slate-500" />;
      case 'overdue': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return 'badge--success';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-slate-100 text-slate-800';
      case 'overdue': return 'badge--error';
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
              Maintenance Management
            </h1>
            <p className="text-slate-600 mt-2">Proactive maintenance scheduling and predictive analytics</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Maintenance
            </Button>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Scheduled</p>
                  <p className="text-2xl font-bold text-blue-600">{maintenanceStats.scheduled}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">{maintenanceStats.overdue}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">In Progress</p>
                  <p className="text-2xl font-bold text-yellow-600">{maintenanceStats.inProgress}</p>
                </div>
                <Activity className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{maintenanceStats.completed}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Predictive</p>
                  <p className="text-2xl font-bold text-purple-600">{maintenanceStats.predictive}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 border animate-slide-up">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'scheduled', label: 'Scheduled', icon: Calendar },
            { id: 'predictive', label: 'Predictive', icon: TrendingUp },
            { id: 'history', label: 'History', icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upcoming Maintenance */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Calendar className="h-5 w-5" />
                  Upcoming Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMaintenance.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
                      {getStatusIcon(item.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-slate-900">{item.type}</h4>
                          <Badge className={getPriorityBadge(item.priority)}>
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            {item.turbine}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.site}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.scheduledDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Predictive Maintenance Alerts */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <TrendingUp className="h-5 w-5" />
                  Predictive Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictiveMaintenance.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border border-slate-200 bg-gradient-to-r from-white to-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-slate-900">{item.issue}</h4>
                        <Badge className={getPriorityBadge(item.severity)}>
                          {item.confidence}% confidence
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <span className="text-xs text-slate-600">Turbine:</span>
                          <p className="font-medium text-blue-800">{item.turbine}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-600">Time to Failure:</span>
                          <p className="font-medium text-red-600">{item.timeToFailure}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 mb-3">{item.recommendation}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Calendar className="h-3 w-3 mr-1" />
                          Schedule
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'scheduled' && (
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-800">Scheduled Maintenance Tasks</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMaintenance.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                        <Wrench className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.type}</h3>
                        <p className="text-sm text-slate-600">{item.description}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            {item.turbine}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.site}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.technician}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-slate-600">Scheduled</div>
                        <div className="font-semibold text-blue-800">{item.scheduledDate}</div>
                        <div className="text-xs text-slate-500">{item.estimatedDuration}</div>
                      </div>
                      <Badge className={getStatusBadge(item.status)}>
                        {item.status}
                      </Badge>
                      <Badge className={getPriorityBadge(item.priority)}>
                        {item.priority}
                      </Badge>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'predictive' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <TrendingUp className="h-5 w-5" />
                  AI Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictiveMaintenance.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-slate-900">{item.issue}</h4>
                        <div className="flex items-center gap-2">
                          <Progress value={item.confidence} className="w-16 h-2" />
                          <span className="text-sm font-medium">{item.confidence}%</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Turbine:</span>
                          <p className="font-medium">{item.turbine}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Site:</span>
                          <p className="font-medium">{item.site}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Severity:</span>
                          <Badge className={getPriorityBadge(item.severity)}>
                            {item.severity}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-slate-50 rounded">
                        <p className="text-sm text-slate-700">{item.recommendation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Activity className="h-5 w-5" />
                  Maintenance Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-xl bg-gradient-to-br from-purple-50 to-slate-100 flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <p className="text-slate-700 font-medium">Predictive Analytics</p>
                    <p className="text-slate-500 text-sm mt-1">AI-powered maintenance forecasting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'history' && (
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="text-blue-800">Maintenance History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.type}</h3>
                        <p className="text-sm text-slate-600">{item.notes}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            {item.turbine}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.site}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.technician}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-slate-600">Completed</div>
                        <div className="font-semibold text-blue-800">{item.completedDate}</div>
                        <div className="text-xs text-slate-500">{item.duration} • {item.cost}</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <FileText className="h-3 w-3 mr-1" />
                        Report
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}