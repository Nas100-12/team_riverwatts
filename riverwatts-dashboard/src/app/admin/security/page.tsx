'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Input } from "@/app/components/ui/input";
import { 
  Shield, 
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Key,
  Users,
  Activity,
  Search,
  Filter,
  RefreshCw,
  Settings,
  Download,
  FileText,
  Clock,
  MapPin,
  User,
  Smartphone,
  Globe,
  Wifi,
  Database,
  Server
} from 'lucide-react';
import { useState } from 'react';

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const securityStats = {
    threatLevel: 'Low',
    activeUsers: 1247,
    failedLogins: 23,
    securityScore: 94,
    lastScan: '2024-02-10 14:30:00',
    vulnerabilities: 2
  };

  const securityEvents = [
    {
      id: 'SEC-001',
      type: 'Failed Login Attempt',
      severity: 'medium',
      user: 'unknown@external.com',
      ip: '192.168.1.100',
      location: 'Unknown',
      timestamp: '2024-02-10 14:23:15',
      status: 'blocked',
      description: 'Multiple failed login attempts detected'
    },
    {
      id: 'SEC-002',
      type: 'Suspicious API Access',
      severity: 'high',
      user: 'api_user_001',
      ip: '10.0.0.45',
      location: 'Internal Network',
      timestamp: '2024-02-10 13:45:22',
      status: 'investigating',
      description: 'Unusual API request pattern detected'
    },
    {
      id: 'SEC-003',
      type: 'Password Policy Violation',
      severity: 'low',
      user: 'john.smith@riverwatts.com',
      ip: '192.168.1.50',
      location: 'Office Network',
      timestamp: '2024-02-10 12:15:33',
      status: 'resolved',
      description: 'User attempted to set weak password'
    },
    {
      id: 'SEC-004',
      type: 'Unauthorized Access Attempt',
      severity: 'critical',
      user: 'admin_impersonator',
      ip: '203.0.113.45',
      location: 'External',
      timestamp: '2024-02-10 11:30:45',
      status: 'blocked',
      description: 'Attempt to access admin panel with invalid credentials'
    }
  ];

  const accessControls = [
    {
      resource: 'Admin Dashboard',
      permissions: ['Read', 'Write', 'Delete'],
      users: 8,
      lastModified: '2024-02-08',
      status: 'active'
    },
    {
      resource: 'Turbine Controls',
      permissions: ['Read', 'Write'],
      users: 15,
      lastModified: '2024-02-05',
      status: 'active'
    },
    {
      resource: 'Performance Data',
      permissions: ['Read'],
      users: 1200,
      lastModified: '2024-02-01',
      status: 'active'
    },
    {
      resource: 'System Configuration',
      permissions: ['Read', 'Write'],
      users: 3,
      lastModified: '2024-01-28',
      status: 'active'
    }
  ];

  const auditLogs = [
    {
      id: 'AUD-001',
      action: 'User Login',
      user: 'sarah.johnson@riverwatts.com',
      resource: 'Dashboard',
      ip: '192.168.1.25',
      timestamp: '2024-02-10 14:45:00',
      result: 'success'
    },
    {
      id: 'AUD-002',
      action: 'Configuration Change',
      user: 'admin@riverwatts.com',
      resource: 'Turbine T-045 Settings',
      ip: '192.168.1.10',
      timestamp: '2024-02-10 14:30:15',
      result: 'success'
    },
    {
      id: 'AUD-003',
      action: 'Data Export',
      user: 'mike.wilson@riverwatts.com',
      resource: 'Performance Reports',
      ip: '192.168.1.35',
      timestamp: '2024-02-10 14:15:30',
      result: 'success'
    },
    {
      id: 'AUD-004',
      action: 'Failed Authentication',
      user: 'unknown',
      resource: 'API Endpoint',
      ip: '203.0.113.100',
      timestamp: '2024-02-10 14:00:45',
      result: 'failed'
    }
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'high': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'medium': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical': return 'badge--error';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'badge--warning';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'blocked': return 'badge--error';
      case 'investigating': return 'badge--warning';
      case 'resolved': return 'badge--success';
      case 'success': return 'badge--success';
      case 'failed': return 'badge--error';
      case 'active': return 'badge--success';
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
              System Security
            </h1>
            <p className="text-slate-600 mt-2">Security monitoring, access control, and threat management</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Security Report
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              Security Settings
            </Button>
          </div>
        </div>

        {/* Security Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Shield className="h-8 w-8 text-green-600" />
                <Badge className="badge--success">Secure</Badge>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{securityStats.securityScore}%</div>
              <div className="text-sm text-slate-600 mb-2">Security Score</div>
              <Progress value={securityStats.securityScore} className="h-2" />
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-8 w-8 text-green-600" />
                <span className="text-sm text-green-600">{securityStats.threatLevel}</span>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{securityStats.vulnerabilities}</div>
              <div className="text-sm text-slate-600 mb-2">Active Threats</div>
              <div className="text-sm text-green-600">All systems secure</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-blue-600" />
                <Activity className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{securityStats.activeUsers}</div>
              <div className="text-sm text-slate-600 mb-2">Active Users</div>
              <div className="text-sm text-blue-600">Currently online</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Lock className="h-8 w-8 text-red-600" />
                <span className="text-sm text-red-600">{securityStats.failedLogins}</span>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{securityStats.failedLogins}</div>
              <div className="text-sm text-slate-600 mb-2">Failed Logins (24h)</div>
              <div className="text-sm text-red-600">Monitoring closely</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 border animate-slide-up">
          {[
            { id: 'overview', label: 'Security Events', icon: Eye },
            { id: 'access', label: 'Access Control', icon: Key },
            { id: 'audit', label: 'Audit Logs', icon: FileText },
            { id: 'monitoring', label: 'Monitoring', icon: Activity }
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
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Eye className="h-5 w-5" />
                  Recent Security Events
                </CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityEvents.filter(event => 
                  event.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  event.user.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((event) => (
                  <div key={event.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors hover:shadow-md ${
                    event.severity === 'critical' ? 'border-l-4 border-l-red-500 bg-red-50' :
                    event.severity === 'high' ? 'border-l-4 border-l-orange-500 bg-orange-50' :
                    event.severity === 'medium' ? 'border-l-4 border-l-yellow-500 bg-yellow-50' :
                    'border-l-4 border-l-blue-500 bg-blue-50'
                  } border-slate-200`}>
                    <div className="flex items-center gap-2">
                      {getSeverityIcon(event.severity)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{event.type}</h3>
                        <Badge className={getSeverityBadge(event.severity)}>
                          {event.severity}
                        </Badge>
                        <Badge className={getStatusBadge(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                      <p className="text-slate-700 mb-3">{event.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">User:</span>
                          <span className="font-medium text-blue-800">{event.user}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">IP:</span>
                          <span className="font-medium text-blue-800">{event.ip}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Location:</span>
                          <span className="font-medium text-blue-800">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">Time:</span>
                          <span className="font-medium text-blue-800">{event.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                      {event.status === 'investigating' && (
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Resolve
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'access' && (
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Key className="h-5 w-5" />
                Access Control Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessControls.map((control, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                        <Lock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{control.resource}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {control.permissions.map((permission, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold text-blue-800">{control.users} users</div>
                        <div className="text-sm text-slate-600">Modified: {control.lastModified}</div>
                      </div>
                      <Badge className={getStatusBadge(control.status)}>
                        {control.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'audit' && (
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <FileText className="h-5 w-5" />
                Audit Trail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        log.result === 'success' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{log.action}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>User: {log.user}</span>
                          <span>•</span>
                          <span>Resource: {log.resource}</span>
                          <span>•</span>
                          <span>IP: {log.ip}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-slate-600">{log.timestamp}</div>
                        <Badge className={getStatusBadge(log.result)}>
                          {log.result}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'monitoring' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Activity className="h-5 w-5" />
                  Real-time Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">System Health</span>
                    </div>
                    <Badge className="badge--success">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-slate-700">Database Security</span>
                    </div>
                    <Badge className="badge--success">Secure</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-slate-700">Network Security</span>
                    </div>
                    <Badge className="badge--success">Protected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-slate-700">Firewall Status</span>
                    </div>
                    <Badge className="badge--success">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Shield className="h-5 w-5" />
                  Security Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-xl bg-gradient-to-br from-green-50 to-slate-100 flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <p className="text-slate-700 font-medium">Security Dashboard</p>
                    <p className="text-slate-500 text-sm mt-1">Real-time security metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}