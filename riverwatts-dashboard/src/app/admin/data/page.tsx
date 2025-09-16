'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Input } from "@/app/components/ui/input";
import { 
  Database, 
  Download,
  Upload,
  HardDrive,
  Server,
  Archive,
  FileText,
  Calendar,
  Filter,
  RefreshCw,
  Settings,
  Search,
  BarChart3,
  Activity,
  Clock,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle,
  Trash2,
  Copy,
  Eye
} from 'lucide-react';
import { useState } from 'react';

export default function DataManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const databaseStats = {
    totalSize: '2.4 TB',
    usedSpace: 1.8,
    totalSpace: 2.4,
    dailyGrowth: '12.3 GB',
    totalRecords: '45.2M',
    tablesCount: 28,
    lastBackup: '2024-02-10 03:00:00',
    backupSize: '1.2 TB'
  };

  const dataCategories = [
    {
      name: 'Turbine Performance',
      size: '890 GB',
      records: '18.2M',
      growth: '+2.1 GB/day',
      status: 'healthy',
      lastUpdate: '2 min ago'
    },
    {
      name: 'Environmental Data',
      size: '340 GB',
      records: '12.8M',
      growth: '+1.8 GB/day',
      status: 'healthy',
      lastUpdate: '1 min ago'
    },
    {
      name: 'System Logs',
      size: '280 GB',
      records: '8.9M',
      growth: '+3.2 GB/day',
      status: 'warning',
      lastUpdate: '30 sec ago'
    },
    {
      name: 'User Activity',
      size: '45 GB',
      records: '2.1M',
      growth: '+0.8 GB/day',
      status: 'healthy',
      lastUpdate: '5 min ago'
    },
    {
      name: 'Maintenance Records',
      size: '120 GB',
      records: '1.8M',
      growth: '+0.5 GB/day',
      status: 'healthy',
      lastUpdate: '10 min ago'
    },
    {
      name: 'Alert History',
      size: '85 GB',
      records: '1.4M',
      growth: '+1.1 GB/day',
      status: 'healthy',
      lastUpdate: '3 min ago'
    }
  ];

  const exportTemplates = [
    {
      name: 'Daily Performance Report',
      description: 'Turbine performance metrics for the last 24 hours',
      format: 'CSV',
      size: '~2.5 MB',
      frequency: 'Daily',
      lastExport: '2024-02-10 06:00:00'
    },
    {
      name: 'Weekly Analytics Summary',
      description: 'Comprehensive weekly performance and efficiency analysis',
      format: 'Excel',
      size: '~8.2 MB',
      frequency: 'Weekly',
      lastExport: '2024-02-05 00:00:00'
    },
    {
      name: 'Environmental Data Export',
      description: 'Water temperature, flow rate, and weather conditions',
      format: 'JSON',
      size: '~1.8 MB',
      frequency: 'On-demand',
      lastExport: '2024-02-08 14:30:00'
    },
    {
      name: 'Maintenance History',
      description: 'Complete maintenance records and schedules',
      format: 'PDF',
      size: '~5.1 MB',
      frequency: 'Monthly',
      lastExport: '2024-02-01 09:00:00'
    }
  ];

  const backupHistory = [
    {
      id: 'BK-001',
      type: 'Full Backup',
      size: '1.2 TB',
      duration: '2h 15m',
      status: 'completed',
      timestamp: '2024-02-10 03:00:00',
      location: 'AWS S3 - Primary'
    },
    {
      id: 'BK-002',
      type: 'Incremental',
      size: '45 GB',
      duration: '25m',
      status: 'completed',
      timestamp: '2024-02-09 03:00:00',
      location: 'AWS S3 - Primary'
    },
    {
      id: 'BK-003',
      type: 'Incremental',
      size: '38 GB',
      duration: '22m',
      status: 'completed',
      timestamp: '2024-02-08 03:00:00',
      location: 'AWS S3 - Primary'
    },
    {
      id: 'BK-004',
      type: 'Full Backup',
      size: '1.1 TB',
      duration: '2h 8m',
      status: 'completed',
      timestamp: '2024-02-07 03:00:00',
      location: 'AWS S3 - Secondary'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy': return 'badge--success';
      case 'warning': return 'badge--warning';
      case 'error': return 'badge--error';
      case 'completed': return 'badge--success';
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
              Data Management
            </h1>
            <p className="text-slate-600 mt-2">Database administration, backups, and data export tools</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Archive className="h-4 w-4 mr-2" />
              Backup Now
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              DB Settings
            </Button>
          </div>
        </div>

        {/* Database Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <HardDrive className="h-8 w-8 text-blue-600" />
                <Badge className="badge--success">Healthy</Badge>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{databaseStats.totalSize}</div>
              <div className="text-sm text-slate-600 mb-2">Total Database Size</div>
              <Progress value={(databaseStats.usedSpace / databaseStats.totalSpace) * 100} className="h-2" />
              <div className="text-xs text-slate-500 mt-1">
                {databaseStats.usedSpace} TB of {databaseStats.totalSpace} TB used
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Database className="h-8 w-8 text-green-600" />
                <Activity className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{databaseStats.totalRecords}</div>
              <div className="text-sm text-slate-600 mb-2">Total Records</div>
              <div className="text-sm text-green-600">+{databaseStats.dailyGrowth} daily</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Server className="h-8 w-8 text-purple-600" />
                <span className="text-sm text-slate-600">{databaseStats.tablesCount} tables</span>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{databaseStats.backupSize}</div>
              <div className="text-sm text-slate-600 mb-2">Last Backup Size</div>
              <div className="text-sm text-slate-500">{databaseStats.lastBackup}</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">99.9%</div>
              <div className="text-sm text-slate-600 mb-2">Uptime (30d)</div>
              <div className="text-sm text-green-600">All systems operational</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 border animate-slide-up">
          {[
            { id: 'overview', label: 'Overview', icon: Database },
            { id: 'export', label: 'Data Export', icon: Download },
            { id: 'backup', label: 'Backups', icon: Archive },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
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
          <div className="space-y-6">
            {/* Data Categories */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Data Categories</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search categories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dataCategories.filter(cat => 
                    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                          <Database className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{category.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span>{category.records} records</span>
                            <span>•</span>
                            <span>Last update: {category.lastUpdate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold text-blue-800">{category.size}</div>
                          <div className="text-sm text-slate-600">{category.growth}</div>
                        </div>
                        <Badge className={getStatusBadge(category.status)}>
                          {category.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'export' && (
          <div className="space-y-6">
            {/* Export Templates */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Download className="h-5 w-5" />
                  Export Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {exportTemplates.map((template, index) => (
                    <div key={index} className="p-4 rounded-xl border border-slate-200 bg-gradient-to-r from-white to-slate-50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">{template.name}</h3>
                          <p className="text-sm text-slate-600 mb-2">{template.description}</p>
                        </div>
                        <Badge variant="outline">{template.format}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-slate-600">Size:</span>
                          <span className="ml-2 font-medium">{template.size}</span>
                        </div>
                        <div>
                          <span className="text-slate-600">Frequency:</span>
                          <span className="ml-2 font-medium">{template.frequency}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">Last: {template.lastExport}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Settings className="h-3 w-3 mr-1" />
                            Configure
                          </Button>
                          <Button size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Custom Export */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="text-blue-800">Custom Data Export</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Date Range</label>
                    <div className="flex gap-1">
                      {['1d', '7d', '30d', 'custom'].map((range) => (
                        <Button
                          key={range}
                          variant={selectedTimeRange === range ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedTimeRange(range)}
                        >
                          {range}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Format</label>
                    <div className="flex gap-1">
                      {['CSV', 'JSON', 'Excel'].map((format) => (
                        <Button key={format} variant="outline" size="sm">
                          {format}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'backup' && (
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Archive className="h-5 w-5" />
                  Backup History
                </CardTitle>
                <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                  <Archive className="h-4 w-4 mr-2" />
                  Create Backup
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {backupHistory.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Archive className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{backup.type}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>ID: {backup.id}</span>
                          <span>•</span>
                          <span>{backup.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold text-blue-800">{backup.size}</div>
                        <div className="text-sm text-slate-600">{backup.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-600">{backup.timestamp}</div>
                        <Badge className={getStatusBadge(backup.status)}>
                          {backup.status}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'analytics' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <BarChart3 className="h-5 w-5" />
                  Storage Growth Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <p className="text-slate-700 font-medium">Storage Analytics</p>
                    <p className="text-slate-500 text-sm mt-1">Growth trends and projections</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Activity className="h-5 w-5" />
                  Database Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <span className="text-sm font-medium text-slate-700">Query Performance</span>
                    <span className="text-sm font-bold text-green-600">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <span className="text-sm font-medium text-slate-700">Connection Pool</span>
                    <span className="text-sm font-bold text-blue-800">85% utilized</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <span className="text-sm font-medium text-slate-700">Index Efficiency</span>
                    <span className="text-sm font-bold text-green-600">96.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <span className="text-sm font-medium text-slate-700">Cache Hit Ratio</span>
                    <span className="text-sm font-bold text-green-600">98.7%</span>
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