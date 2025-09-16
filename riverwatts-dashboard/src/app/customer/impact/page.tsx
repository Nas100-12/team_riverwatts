'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { 
  Leaf,
  TreePine,
  Droplets,
  Globe,
  TrendingUp,
  Award,
  Target,
  Calendar,
  Download,
  Share,
  Recycle,
  Wind
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

export default function EnvironmentalImpactPage() {
  const impactMetrics = [
    { title: "Carbon Avoided", value: "3.2 tons", period: "This Month", change: "+15.2%", icon: Leaf, color: "from-green-500 to-emerald-500" },
    { title: "Trees Equivalent", value: "147", period: "Trees Saved", change: "+12.8%", icon: TreePine, color: "from-emerald-500 to-green-400" },
    { title: "Water Conserved", value: "2,840 L", period: "This Month", change: "+8.3%", icon: Droplets, color: "from-blue-500 to-cyan-500" },
    { title: "Clean Energy", value: "542 kWh", period: "Generated", change: "+18.7%", icon: Wind, color: "from-cyan-500 to-blue-500" }
  ];

  const carbonData = [
    { month: 'Jan', avoided: 2.8, cumulative: 2.8, target: 3.0 },
    { month: 'Feb', avoided: 3.1, cumulative: 5.9, target: 6.0 },
    { month: 'Mar', avoided: 2.9, cumulative: 8.8, target: 9.0 },
    { month: 'Apr', avoided: 3.4, cumulative: 12.2, target: 12.0 },
    { month: 'May', avoided: 3.2, cumulative: 15.4, target: 15.0 },
    { month: 'Jun', avoided: 3.6, cumulative: 19.0, target: 18.0 }
  ];

  const impactBreakdown = [
    { category: 'Energy Generation', impact: 45, fill: '#10b981' },
    { category: 'Grid Offset', impact: 30, fill: '#3b82f6' },
    { category: 'Efficiency Gains', impact: 15, fill: '#f59e0b' },
    { category: 'Storage Benefits', impact: 10, fill: '#8b5cf6' }
  ];

  const sustainabilityGoals = [
    { goal: "Carbon Neutral by 2030", progress: 68, target: 100, icon: Globe },
    { goal: "50% Grid Independence", progress: 42, target: 50, icon: Leaf },
    { goal: "Zero Waste Energy", progress: 78, target: 100, icon: Recycle },
    { goal: "Community Impact", progress: 55, target: 100, icon: Award }
  ];

  const weeklyImpact = [
    { week: 'W1', carbon: 0.8, water: 680, energy: 128 },
    { week: 'W2', carbon: 0.9, water: 720, energy: 142 },
    { week: 'W3', carbon: 0.7, water: 650, energy: 135 },
    { week: 'W4', carbon: 0.8, water: 690, energy: 137 }
  ];

  const achievements = [
    { title: "Carbon Champion", description: "Avoided 10+ tons of CO2", date: "May 2024", icon: Award, color: "bg-green-500" },
    { title: "Clean Energy Pioneer", description: "Generated 1000+ kWh clean energy", date: "April 2024", icon: Leaf, color: "bg-blue-500" },
    { title: "Water Guardian", description: "Conserved 5000+ liters of water", date: "March 2024", icon: Droplets, color: "bg-cyan-500" },
    { title: "Sustainability Leader", description: "Maintained 95%+ efficiency", date: "February 2024", icon: Target, color: "bg-emerald-500" }
  ];

  const comparisons = [
    { metric: "vs. Coal Power", value: "87% less CO2", icon: Leaf, color: "text-green-600" },
    { metric: "vs. Natural Gas", value: "64% less emissions", icon: Wind, color: "text-blue-600" },
    { metric: "vs. Grid Average", value: "73% cleaner", icon: Globe, color: "text-emerald-600" },
    { metric: "Efficiency Rating", value: "A+ Grade", icon: Award, color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#014174] to-[#0a8ac6] bg-clip-text text-transparent">
              Environmental Impact
            </h1>
            <p className="text-slate-600 mt-2">Track your positive contribution to the environment</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Calendar className="h-4 w-4 mr-2" />
              Period
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button size="sm" className="gradient-primary text-white focus-ring">
              <Download className="h-4 w-4 mr-2" />
              Report
            </Button>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="modern-card animate-slide-up group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="pt-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="badge--success">
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-[#014174] mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{metric.period}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Carbon Impact Trends */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Leaf className="h-5 w-5" />
              Carbon Impact Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={carbonData}>
                  <defs>
                    <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Area type="monotone" dataKey="cumulative" stroke="#10b981" fillOpacity={1} fill="url(#colorCarbon)" name="Cumulative CO2 Avoided (tons)" />
                  <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" name="Target" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Impact Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Globe className="h-5 w-5" />
                Impact Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="impact"
                    >
                      {impactBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {impactBreakdown.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                      <span className="text-xs text-slate-600">{item.category}</span>
                    </div>
                    <div className="font-bold text-slate-800">{item.impact}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <TrendingUp className="h-5 w-5" />
                Weekly Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyImpact}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="week" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="carbon" fill="#10b981" name="Carbon Avoided (tons)" />
                    <Bar dataKey="water" fill="#3b82f6" name="Water Saved (L)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sustainability Goals */}
        <Card className="modern-card animate-slide-up mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#014174]">
              <Target className="h-5 w-5" />
              Sustainability Goals Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sustainabilityGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{goal.goal}</h3>
                        <p className="text-sm text-slate-600">{goal.progress}% of {goal.target}% target</p>
                      </div>
                    </div>
                    <Progress value={goal.progress} className="h-3 mb-2" />
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Current: {goal.progress}%</span>
                      <span>Target: {goal.target}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Achievements & Comparisons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Award className="h-5 w-5" />
                Environmental Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                      <div className={`w-12 h-12 rounded-xl ${achievement.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{achievement.title}</h3>
                        <p className="text-sm text-slate-600">{achievement.description}</p>
                        <p className="text-xs text-slate-500 mt-1">Earned: {achievement.date}</p>
                      </div>
                      <Badge className="badge--success">
                        Achieved
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#014174]">
                <Globe className="h-5 w-5" />
                Environmental Comparisons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {comparisons.map((comparison, index) => {
                  const Icon = comparison.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${comparison.color}`} />
                        <span className="font-medium text-slate-900">{comparison.metric}</span>
                      </div>
                      <div className={`font-bold ${comparison.color}`}>
                        {comparison.value}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">Your Impact Summary</h3>
                </div>
                <p className="text-sm text-green-700">
                  Your clean energy system has prevented <strong>15.4 tons of CO2</strong> emissions, 
                  equivalent to planting <strong>147 trees</strong> or removing a car from the road for <strong>8 months</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}