'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { 
  Users, 
  UserPlus, 
  Filter,
  MoreHorizontal,
  Shield,
  User,
  Mail,
  Calendar
} from 'lucide-react';
import { DataTable } from '@/app/components/ui/data-table';

export default function AdminUsersPage() {
  const userStats = [
    { title: "Total Users", value: "1,247", change: "+23", icon: Users, color: "from-blue-500 to-cyan-500" },
    { title: "Active Today", value: "892", change: "+12", icon: User, color: "from-green-500 to-emerald-500" },
    { title: "Administrators", value: "8", change: "0", icon: Shield, color: "from-purple-500 to-pink-500" },
    { title: "New This Month", value: "156", change: "+45", icon: UserPlus, color: "from-orange-500 to-red-500" }
  ];

  const users = [
    { id: 1, name: "John Smith", email: "john@riverwatts.com", role: "Admin", status: "active", lastLogin: "2 hours ago", avatar: "JS" },
    { id: 2, name: "Sarah Johnson", email: "sarah@customer.com", role: "Customer", status: "active", lastLogin: "5 minutes ago", avatar: "SJ" },
    { id: 3, name: "Mike Chen", email: "mike@customer.com", role: "Customer", status: "inactive", lastLogin: "2 days ago", avatar: "MC" },
    { id: 4, name: "Emma Wilson", email: "emma@riverwatts.com", role: "Admin", status: "active", lastLogin: "1 hour ago", avatar: "EW" },
    { id: 5, name: "David Brown", email: "david@customer.com", role: "Customer", status: "active", lastLogin: "30 minutes ago", avatar: "DB" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="text-slate-600 mt-2">Manage system users and permissions</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <UserPlus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 mb-2">{stat.title}</div>
                  <div className="text-xs text-green-600">+{stat.change} this week</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Users Table */}
        <Card className="modern-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Users className="h-5 w-5" />
              All Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                {
                  key: 'name',
                  label: 'User',
                  sortable: true,
                  render: (value, row) => (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                        {row.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{value}</div>
                        <div className="text-sm text-slate-600 flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {row.email}
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  key: 'role',
                  label: 'Role',
                  sortable: true,
                  render: (value) => (
                    <Badge className={value === 'Admin' ? 'badge--warning' : 'badge--success'}>
                      {value}
                    </Badge>
                  )
                },
                {
                  key: 'status',
                  label: 'Status',
                  sortable: true,
                  render: (value) => (
                    <Badge className={value === 'active' ? 'badge--success' : 'badge--error'}>
                      {value}
                    </Badge>
                  )
                },
                {
                  key: 'lastLogin',
                  label: 'Last Login',
                  sortable: true,
                  render: (value) => (
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {value}
                    </div>
                  )
                }
              ]}
              data={users}
              searchPlaceholder="Search users..."
              title="Users"
              actions={(row) => (
                <Button variant="ghost" size="sm" className="focus-ring">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}