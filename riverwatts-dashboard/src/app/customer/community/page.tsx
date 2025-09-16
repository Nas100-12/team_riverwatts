'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Users, Target, Award, TrendingUp, Leaf, Zap } from 'lucide-react';

const communityData = [
  { month: 'Jan', community: 2400, personal: 400 },
  { month: 'Feb', community: 2800, personal: 450 },
  { month: 'Mar', community: 3200, personal: 520 },
  { month: 'Apr', community: 3600, personal: 580 },
  { month: 'May', community: 4200, personal: 650 },
  { month: 'Jun', community: 4800, personal: 720 }
];

const goalProgress = [
  { name: 'Renewable Energy', value: 85, color: '#10b981' },
  { name: 'Carbon Reduction', value: 72, color: '#3b82f6' },
  { name: 'Energy Efficiency', value: 91, color: '#8b5cf6' },
  { name: 'Community Engagement', value: 68, color: '#f59e0b' }
];

const leaderboard = [
  { name: 'Green Valley', contribution: 1250, rank: 1 },
  { name: 'Riverside Community', contribution: 1180, rank: 2 },
  { name: 'Your Community', contribution: 1120, rank: 3 },
  { name: 'Eco Heights', contribution: 980, rank: 4 },
  { name: 'Solar Springs', contribution: 850, rank: 5 }
];

export default function CommunityGoalsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Community Goals</h1>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg">
          <Award className="h-5 w-5" />
          <span className="font-semibold">Rank #3</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Community Members</p>
              <p className="text-2xl font-bold text-blue-800">1,247</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Monthly Goal</p>
              <p className="text-2xl font-bold text-green-800">85%</p>
            </div>
            <Target className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">CO₂ Saved</p>
              <p className="text-2xl font-bold text-purple-800">2.4T</p>
            </div>
            <Leaf className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-600 text-sm font-medium">Energy Generated</p>
              <p className="text-2xl font-bold text-orange-800">4.8MWh</p>
            </div>
            <Zap className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Community vs Personal Contribution */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            Community Impact Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={communityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Area type="monotone" dataKey="community" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="personal" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Goal Progress */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Goal Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={goalProgress}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {goalProgress.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {goalProgress.map((goal, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: goal.color }}></div>
                <span className="text-sm text-slate-600">{goal.name}: {goal.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Leaderboard */}
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Community Leaderboard</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leaderboard}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }} 
            />
            <Bar dataKey="contribution" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Community Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Energy Challenge</h3>
          <p className="text-blue-600 text-sm mb-4">Reduce energy consumption by 15% this month</p>
          <div className="bg-blue-200 rounded-full h-2 mb-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
          <p className="text-xs text-blue-600">68% Complete</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Carbon Footprint</h3>
          <p className="text-green-600 text-sm mb-4">Offset 5 tons of CO₂ collectively</p>
          <div className="bg-green-200 rounded-full h-2 mb-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '84%' }}></div>
          </div>
          <p className="text-xs text-green-600">84% Complete</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Engagement Goal</h3>
          <p className="text-purple-600 text-sm mb-4">Achieve 90% community participation</p>
          <div className="bg-purple-200 rounded-full h-2 mb-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '76%' }}></div>
          </div>
          <p className="text-xs text-purple-600">76% Complete</p>
        </div>
      </div>
    </div>
  );
}