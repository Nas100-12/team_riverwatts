'use client';

import { useState } from 'react';
import { Plus, Clock, CheckCircle, AlertTriangle, Calendar, User, FileText, Phone, MapPin } from 'lucide-react';

const serviceRequests = [
  {
    id: 'SR-2024-001',
    type: 'Routine Maintenance',
    priority: 'Medium',
    status: 'Scheduled',
    title: 'Quarterly System Inspection',
    description: 'Regular maintenance check for turbine components and electrical systems',
    submittedDate: '2024-01-15',
    scheduledDate: '2024-01-22',
    technician: 'Mike Johnson',
    estimatedDuration: '2-3 hours'
  },
  {
    id: 'SR-2024-002',
    type: 'Issue Report',
    priority: 'High',
    status: 'In Progress',
    title: 'Unusual Vibration Detected',
    description: 'System sensors detected abnormal vibration levels in the main turbine assembly',
    submittedDate: '2024-01-18',
    scheduledDate: '2024-01-19',
    technician: 'Sarah Chen',
    estimatedDuration: '4-6 hours'
  },
  {
    id: 'SR-2024-003',
    type: 'Upgrade Request',
    priority: 'Low',
    status: 'Completed',
    title: 'Firmware Update',
    description: 'Update system firmware to latest version for improved performance',
    submittedDate: '2024-01-10',
    scheduledDate: '2024-01-12',
    technician: 'David Park',
    estimatedDuration: '1-2 hours',
    completedDate: '2024-01-12'
  }
];

export default function ServiceRequestsPage() {
  const [activeTab, setActiveTab] = useState('requests');
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Issue Report',
    priority: 'Medium',
    title: '',
    description: '',
    preferredDate: '',
    contactPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowNewRequestForm(false);
    setFormData({
      type: 'Issue Report',
      priority: 'Medium',
      title: '',
      description: '',
      preferredDate: '',
      contactPhone: ''
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'Scheduled':
        return <Calendar className="h-4 w-4 text-purple-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Scheduled':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-orange-100 text-orange-800 border-orange-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Service Requests</h1>
        <button
          onClick={() => setShowNewRequestForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
        >
          <Plus className="h-5 w-5" />
          <span className="font-semibold">New Request</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Total Requests</p>
              <p className="text-2xl font-bold text-blue-800">{serviceRequests.length}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Scheduled</p>
              <p className="text-2xl font-bold text-purple-800">{serviceRequests.filter(r => r.status === 'Scheduled').length}</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Completed</p>
              <p className="text-2xl font-bold text-green-800">{serviceRequests.filter(r => r.status === 'Completed').length}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-600 text-sm font-medium">In Progress</p>
              <p className="text-2xl font-bold text-orange-800">{serviceRequests.filter(r => r.status === 'In Progress').length}</p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* New Request Modal */}
      {showNewRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-800">Submit New Service Request</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Request Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option>Issue Report</option>
                    <option>Routine Maintenance</option>
                    <option>Emergency Repair</option>
                    <option>Upgrade Request</option>
                    <option>Inspection Request</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Emergency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Brief description of the issue or request"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Provide detailed information about the issue or request..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Phone</label>
                  <input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewRequestForm(false)}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Service Requests List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-800">Your Service Requests</h2>
        <div className="space-y-4">
          {serviceRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-800">{request.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)} flex items-center space-x-1`}>
                      {getStatusIcon(request.status)}
                      <span>{request.status}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(request.priority)}`}>
                      {request.priority} Priority
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                    <span className="bg-slate-100 px-2 py-1 rounded">{request.id}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">{request.type}</span>
                    <span>Submitted: {request.submittedDate}</span>
                  </div>
                  <p className="text-slate-700 mb-4">{request.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">Scheduled: {request.scheduledDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">Technician: {request.technician}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">Duration: {request.estimatedDuration}</span>
                    </div>
                  </div>
                  
                  {request.completedDate && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <CheckCircle className="h-4 w-4 inline mr-2" />
                        Completed on {request.completedDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}