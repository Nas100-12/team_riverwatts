'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Progress } from "@/app/components/ui/progress";
import { 
  Settings,
  User,
  Bell,
  Shield,
  Zap,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { useState } from 'react';

export default function CustomerSettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    alerts: true,
    reports: true,
    maintenance: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC-8',
    currency: 'USD',
    units: 'metric'
  });

  const systemSettings = [
    { title: "Auto Optimization", description: "Automatically optimize energy generation", enabled: true },
    { title: "Peak Hour Management", description: "Manage energy during peak hours", enabled: true },
    { title: "Battery Protection", description: "Enable battery health protection", enabled: true },
    { title: "Grid Sync", description: "Synchronize with grid operations", enabled: false },
    { title: "Weather Integration", description: "Use weather data for predictions", enabled: true },
    { title: "Maintenance Alerts", description: "Receive maintenance notifications", enabled: true }
  ];

  const securitySettings = [
    { title: "Two-Factor Authentication", description: "Add extra security to your account", status: "enabled" },
    { title: "Login Notifications", description: "Get notified of new logins", status: "enabled" },
    { title: "Session Timeout", description: "Auto logout after inactivity", status: "30 minutes" },
    { title: "API Access", description: "Third-party application access", status: "restricted" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              Settings & Preferences
            </h1>
            <p className="text-slate-600 mt-2">Customize your energy management experience</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Settings */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#014174]">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="123 Energy St, Green City" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." className="mt-1" rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#014174]">
                  <Shield className="h-5 w-5" />
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative mt-1">
                    <Input 
                      id="currentPassword" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter current password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" placeholder="Enter new password" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  {securitySettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                      <div>
                        <h3 className="font-semibold text-slate-900">{setting.title}</h3>
                        <p className="text-sm text-slate-600">{setting.description}</p>
                      </div>
                      <Badge className={
                        setting.status === 'enabled' ? 'badge--success' : 'badge--info'
                      }>
                        {setting.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Configuration */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#014174]">
                  <Zap className="h-5 w-5" />
                  System Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemSettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                      <div>
                        <h3 className="font-semibold text-slate-900">{setting.title}</h3>
                        <p className="text-sm text-slate-600">{setting.description}</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked={setting.enabled}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            {/* Notification Settings */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#014174]">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-900 capitalize">{key}</div>
                        <div className="text-sm text-slate-600">
                          {key === 'email' && 'Email notifications'}
                          {key === 'sms' && 'SMS notifications'}
                          {key === 'push' && 'Push notifications'}
                          {key === 'alerts' && 'System alerts'}
                          {key === 'reports' && 'Weekly reports'}
                          {key === 'maintenance' && 'Maintenance updates'}
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setNotifications({...notifications, [key]: e.target.checked})}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#014174]">
                  <Settings className="h-5 w-5" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <select 
                    id="theme" 
                    className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                    value={preferences.theme}
                    onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="language">Language</Label>
                  <select 
                    id="language" 
                    className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                    value={preferences.language}
                    onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <select 
                    id="timezone" 
                    className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                    value={preferences.timezone}
                    onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
                  >
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC+0">UTC</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="units">Units</Label>
                  <select 
                    id="units" 
                    className="w-full mt-1 p-2 border border-slate-300 rounded-md"
                    value={preferences.units}
                    onChange={(e) => setPreferences({...preferences, units: e.target.value})}
                  >
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="modern-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#014174]">
                  <Download className="h-5 w-5" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Settings
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}