'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { 
  Settings, 
  Shield,
  Bell,
  Database,
  Globe,
  Users,
  Lock,
  Mail,
  Smartphone,
  Server,
  Activity,
  Save,
  RefreshCw,
  Download,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertTriangle,
  Clock,
  Zap,
  Thermometer,
  Droplets
} from 'lucide-react';
import { useState } from 'react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // General Settings
    systemName: 'RiverWatts Hydrokinetic System',
    timezone: 'UTC-8 (Pacific)',
    language: 'English',
    dateFormat: 'MM/DD/YYYY',
    
    // Security Settings
    sessionTimeout: '30',
    passwordMinLength: '8',
    mfaRequired: true,
    loginAttempts: '5',
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    alertThresholds: {
      temperature: '85',
      efficiency: '80',
      vibration: '0.5'
    },
    
    // System Settings
    dataRetention: '365',
    backupFrequency: 'daily',
    maintenanceWindow: '02:00-04:00',
    apiRateLimit: '1000'
  });

  const systemStatus = {
    version: '2.1.4',
    uptime: '45 days, 12 hours',
    lastUpdate: '2024-02-01 10:30:00',
    nextMaintenance: '2024-02-15 02:00:00',
    diskUsage: 78,
    memoryUsage: 65,
    cpuUsage: 42
  };

  const integrations = [
    {
      name: 'AWS S3',
      type: 'Cloud Storage',
      status: 'connected',
      lastSync: '2024-02-10 14:30:00',
      description: 'Backup and data archival'
    },
    {
      name: 'SendGrid',
      type: 'Email Service',
      status: 'connected',
      lastSync: '2024-02-10 14:25:00',
      description: 'Email notifications and alerts'
    },
    {
      name: 'Twilio',
      type: 'SMS Service',
      status: 'disconnected',
      lastSync: '2024-02-08 09:15:00',
      description: 'SMS notifications and alerts'
    },
    {
      name: 'Slack',
      type: 'Team Communication',
      status: 'connected',
      lastSync: '2024-02-10 14:20:00',
      description: 'Team notifications and updates'
    }
  ];

  const handleSettingChange = (category: string, key: string, value: any) => {
    if (category === 'alertThresholds') {
      setSettings(prev => ({
        ...prev,
        alertThresholds: {
          ...prev.alertThresholds,
          [key]: value
        }
      }));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected': return 'badge--success';
      case 'disconnected': return 'badge--error';
      case 'pending': return 'badge--warning';
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
              System Settings
            </h1>
            <p className="text-slate-600 mt-2">Configure system preferences and global settings</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Export Config
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* System Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Server className="h-8 w-8 text-blue-600" />
                <Badge className="badge--success">Online</Badge>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">v{systemStatus.version}</div>
              <div className="text-sm text-slate-600 mb-2">System Version</div>
              <div className="text-sm text-slate-500">Uptime: {systemStatus.uptime}</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Activity className="h-8 w-8 text-green-600" />
                <span className="text-sm text-green-600">{systemStatus.cpuUsage}%</span>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{systemStatus.memoryUsage}%</div>
              <div className="text-sm text-slate-600 mb-2">Memory Usage</div>
              <div className="text-sm text-green-600">Performance optimal</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Database className="h-8 w-8 text-purple-600" />
                <span className="text-sm text-purple-600">{systemStatus.diskUsage}%</span>
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">{systemStatus.diskUsage}%</div>
              <div className="text-sm text-slate-600 mb-2">Disk Usage</div>
              <div className="text-sm text-slate-500">2.1 TB available</div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-8 w-8 text-blue-600" />
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-blue-800 mb-1">Feb 15</div>
              <div className="text-sm text-slate-600 mb-2">Next Maintenance</div>
              <div className="text-sm text-blue-600">Scheduled: 02:00 AM</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 border animate-slide-up">
          {[
            { id: 'general', label: 'General', icon: Settings },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'integrations', label: 'Integrations', icon: Globe },
            { id: 'system', label: 'System', icon: Server }
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
        {activeTab === 'general' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Settings className="h-5 w-5" />
                  General Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="systemName" className="text-sm font-medium text-slate-700">System Name</Label>
                  <Input
                    id="systemName"
                    value={settings.systemName}
                    onChange={(e) => setSettings(prev => ({ ...prev, systemName: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="timezone" className="text-sm font-medium text-slate-700">Timezone</Label>
                  <Input
                    id="timezone"
                    value={settings.timezone}
                    onChange={(e) => setSettings(prev => ({ ...prev, timezone: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="language" className="text-sm font-medium text-slate-700">Language</Label>
                  <Input
                    id="language"
                    value={settings.language}
                    onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="dateFormat" className="text-sm font-medium text-slate-700">Date Format</Label>
                  <Input
                    id="dateFormat"
                    value={settings.dateFormat}
                    onChange={(e) => setSettings(prev => ({ ...prev, dateFormat: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Zap className="h-5 w-5" />
                  System Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="dataRetention" className="text-sm font-medium text-slate-700">Data Retention (days)</Label>
                  <Input
                    id="dataRetention"
                    type="number"
                    value={settings.dataRetention}
                    onChange={(e) => setSettings(prev => ({ ...prev, dataRetention: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="backupFrequency" className="text-sm font-medium text-slate-700">Backup Frequency</Label>
                  <Input
                    id="backupFrequency"
                    value={settings.backupFrequency}
                    onChange={(e) => setSettings(prev => ({ ...prev, backupFrequency: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="maintenanceWindow" className="text-sm font-medium text-slate-700">Maintenance Window</Label>
                  <Input
                    id="maintenanceWindow"
                    value={settings.maintenanceWindow}
                    onChange={(e) => setSettings(prev => ({ ...prev, maintenanceWindow: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="apiRateLimit" className="text-sm font-medium text-slate-700">API Rate Limit (req/hour)</Label>
                  <Input
                    id="apiRateLimit"
                    type="number"
                    value={settings.apiRateLimit}
                    onChange={(e) => setSettings(prev => ({ ...prev, apiRateLimit: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Shield className="h-5 w-5" />
                  Authentication Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sessionTimeout" className="text-sm font-medium text-slate-700">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings(prev => ({ ...prev, sessionTimeout: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="passwordMinLength" className="text-sm font-medium text-slate-700">Minimum Password Length</Label>
                  <Input
                    id="passwordMinLength"
                    type="number"
                    value={settings.passwordMinLength}
                    onChange={(e) => setSettings(prev => ({ ...prev, passwordMinLength: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="loginAttempts" className="text-sm font-medium text-slate-700">Max Login Attempts</Label>
                  <Input
                    id="loginAttempts"
                    type="number"
                    value={settings.loginAttempts}
                    onChange={(e) => setSettings(prev => ({ ...prev, loginAttempts: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div>
                    <Label className="text-sm font-medium text-slate-700">Multi-Factor Authentication</Label>
                    <p className="text-xs text-slate-600">Require MFA for all users</p>
                  </div>
                  <Button
                    variant={settings.mfaRequired ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSettings(prev => ({ ...prev, mfaRequired: !prev.mfaRequired }))}
                  >
                    {settings.mfaRequired ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Lock className="h-5 w-5" />
                  Security Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg border border-slate-200 bg-gradient-to-r from-white to-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">Password Complexity</h4>
                    <Badge className="badge--success">Enabled</Badge>
                  </div>
                  <p className="text-sm text-slate-600">Requires uppercase, lowercase, numbers, and symbols</p>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 bg-gradient-to-r from-white to-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">Account Lockout</h4>
                    <Badge className="badge--success">Enabled</Badge>
                  </div>
                  <p className="text-sm text-slate-600">Lock accounts after {settings.loginAttempts} failed attempts</p>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 bg-gradient-to-r from-white to-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">Session Management</h4>
                    <Badge className="badge--success">Active</Badge>
                  </div>
                  <p className="text-sm text-slate-600">Automatic logout after {settings.sessionTimeout} minutes of inactivity</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Bell className="h-5 w-5" />
                  Notification Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <div>
                      <Label className="text-sm font-medium text-slate-700">Email Notifications</Label>
                      <p className="text-xs text-slate-600">Send alerts via email</p>
                    </div>
                  </div>
                  <Button
                    variant={settings.emailNotifications ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSettings(prev => ({ ...prev, emailNotifications: !prev.emailNotifications }))}
                  >
                    {settings.emailNotifications ? 'On' : 'Off'}
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-green-600" />
                    <div>
                      <Label className="text-sm font-medium text-slate-700">SMS Notifications</Label>
                      <p className="text-xs text-slate-600">Send alerts via SMS</p>
                    </div>
                  </div>
                  <Button
                    variant={settings.smsNotifications ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSettings(prev => ({ ...prev, smsNotifications: !prev.smsNotifications }))}
                  >
                    {settings.smsNotifications ? 'On' : 'Off'}
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-purple-600" />
                    <div>
                      <Label className="text-sm font-medium text-slate-700">Push Notifications</Label>
                      <p className="text-xs text-slate-600">Browser push notifications</p>
                    </div>
                  </div>
                  <Button
                    variant={settings.pushNotifications ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSettings(prev => ({ ...prev, pushNotifications: !prev.pushNotifications }))}
                  >
                    {settings.pushNotifications ? 'On' : 'Off'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <AlertTriangle className="h-5 w-5" />
                  Alert Thresholds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="tempThreshold" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    Temperature Threshold (°C)
                  </Label>
                  <Input
                    id="tempThreshold"
                    type="number"
                    value={settings.alertThresholds.temperature}
                    onChange={(e) => handleSettingChange('alertThresholds', 'temperature', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="efficiencyThreshold" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Efficiency Threshold (%)
                  </Label>
                  <Input
                    id="efficiencyThreshold"
                    type="number"
                    value={settings.alertThresholds.efficiency}
                    onChange={(e) => handleSettingChange('alertThresholds', 'efficiency', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="vibrationThreshold" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Vibration Threshold (g)
                  </Label>
                  <Input
                    id="vibrationThreshold"
                    type="number"
                    step="0.1"
                    value={settings.alertThresholds.vibration}
                    onChange={(e) => handleSettingChange('alertThresholds', 'vibration', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'integrations' && (
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Globe className="h-5 w-5" />
                Third-Party Integrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{integration.name}</h3>
                        <p className="text-sm text-slate-600">{integration.description}</p>
                        <div className="text-xs text-slate-500 mt-1">
                          Type: {integration.type} • Last sync: {integration.lastSync}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusBadge(integration.status)}>
                        {integration.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'system' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Server className="h-5 w-5" />
                  System Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className="text-sm font-medium text-slate-700">Version</span>
                  <span className="text-sm font-bold text-blue-800">{systemStatus.version}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className="text-sm font-medium text-slate-700">Uptime</span>
                  <span className="text-sm font-bold text-blue-800">{systemStatus.uptime}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className="text-sm font-medium text-slate-700">Last Update</span>
                  <span className="text-sm font-bold text-blue-800">{systemStatus.lastUpdate}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className="text-sm font-medium text-slate-700">Next Maintenance</span>
                  <span className="text-sm font-bold text-blue-800">{systemStatus.nextMaintenance}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Activity className="h-5 w-5" />
                  System Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download System Logs
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Configuration
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Restart System Services
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Run System Diagnostics
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}