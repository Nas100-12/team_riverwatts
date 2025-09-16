'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { 
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Server,
  Database,
  Wifi,
  Cloud
} from 'lucide-react';

export default function ApiStatusPage() {
  // Mock status data
  const services = [
    {
      id: 1,
      name: "Authentication API",
      status: "operational",
      description: "User authentication and authorization services",
      uptime: "99.98%",
      responseTime: "42ms",
      icon: Server
    },
    {
      id: 2,
      name: "Energy Data API",
      status: "operational",
      description: "Real-time energy generation and consumption data",
      uptime: "99.95%",
      responseTime: "68ms",
      icon: Database
    },
    {
      id: 3,
      name: "Monitoring API",
      status: "degraded",
      description: "System monitoring and alerting services",
      uptime: "98.7%",
      responseTime: "124ms",
      icon: Wifi
    },
    {
      id: 4,
      name: "Reporting API",
      status: "operational",
      description: "Analytics and reporting services",
      uptime: "99.99%",
      responseTime: "87ms",
      icon: Cloud
    },
    {
      id: 5,
      name: "Notification Service",
      status: "operational",
      description: "Email and SMS notification delivery",
      uptime: "99.8%",
      responseTime: "56ms",
      icon: Server
    },
    {
      id: 6,
      name: "Dashboard API",
      status: "operational",
      description: "Frontend dashboard data services",
      uptime: "99.97%",
      responseTime: "73ms",
      icon: Database
    }
  ];

  const incidents = [
    {
      id: 1,
      title: "Increased Latency in Monitoring API",
      status: "resolved",
      description: "Experienced higher than normal response times for 2 hours",
      date: "June 14, 2023",
      duration: "2 hours"
    },
    {
      id: 2,
      title: "Scheduled Maintenance",
      status: "completed",
      description: "Planned maintenance for database optimization",
      date: "June 10, 2023",
      duration: "4 hours"
    },
    {
      id: 3,
      title: "Authentication Service Outage",
      status: "resolved",
      description: "Intermittent authentication failures",
      date: "June 5, 2023",
      duration: "45 minutes"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "bg-green-500";
      case "degraded": return "bg-yellow-500";
      case "down": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational": return "Operational";
      case "degraded": return "Degraded Performance";
      case "down": return "Service Disruption";
      default: return "Unknown";
    }
  };

  const overallStatus = services.some(service => service.status === "down") 
    ? "down" 
    : services.some(service => service.status === "degraded") 
      ? "degraded" 
      : "operational";

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">API Status</h1>
        <p className="text-xl text-slate-600 mb-8">
          Real-time status of RiverWatts services and infrastructure
        </p>
        
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center">
              <div className={`w-4 h-4 rounded-full mr-3 ${getStatusColor(overallStatus)}`}></div>
              <span className="text-lg font-medium">
                All Systems {getStatusText(overallStatus)}
              </span>
            </div>
            <p className="text-slate-600 mt-2">
              Last updated: Just now
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${getStatusColor(service.status)}`}></div>
                    <Icon className="h-5 w-5 text-blue-600 mr-2" />
                    <CardTitle>{service.name}</CardTitle>
                  </div>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Status</span>
                  <Badge 
                    variant={service.status === "operational" ? "default" : "destructive"}
                    className={service.status === "degraded" ? "bg-yellow-500" : ""}
                  >
                    {getStatusText(service.status)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Uptime</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Response Time</span>
                  <span className="font-medium">{service.responseTime}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
          <CardDescription>
            Historical record of service incidents and maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="flex items-start border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                <div className="mr-4 mt-1">
                  {incident.status === "resolved" || incident.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : incident.status === "investigating" ? (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{incident.title}</h3>
                  <p className="text-slate-600 mb-2">{incident.description}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{incident.date} • {incident.duration}</span>
                  </div>
                </div>
                <Badge 
                  variant={
                    incident.status === "resolved" || incident.status === "completed" 
                      ? "default" 
                      : incident.status === "investigating" 
                        ? "secondary" 
                        : "destructive"
                  }
                  className={
                    incident.status === "investigating" 
                      ? "bg-yellow-500" 
                      : incident.status === "resolved" || incident.status === "completed"
                        ? "bg-green-500"
                        : ""
                  }
                >
                  {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Subscribe to Status Updates</h2>
        <p className="text-slate-600 mb-6">
          Get notified when we have service incidents or maintenance schedules
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="border border-slate-300 rounded-md px-4 py-2"
          />
          <Button>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}