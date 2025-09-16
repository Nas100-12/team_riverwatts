'use client';

import { useState } from 'react';
import { Search, Book, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight, HelpCircle, FileText, Video, Download } from 'lucide-react';

const faqData = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I set up my RiverWatts system?',
        answer: 'Your RiverWatts system comes with a comprehensive setup guide. Our technicians will handle the initial installation, and you\'ll receive login credentials to access your dashboard within 24 hours of installation completion.'
      },
      {
        question: 'What information do I need to get started?',
        answer: 'You\'ll need your system serial number, installation address, and the email address you want associated with your account. All of this information is provided during the installation process.'
      }
    ]
  },
  {
    category: 'Dashboard & Monitoring',
    questions: [
      {
        question: 'How often is my energy data updated?',
        answer: 'Your energy production data is updated in real-time. The dashboard refreshes every 30 seconds to show the most current information about your system\'s performance.'
      },
      {
        question: 'What do the different charts and metrics mean?',
        answer: 'Each chart represents different aspects of your system: Energy Production shows daily/monthly generation, Battery Status displays charge levels, and System Health monitors component performance. Hover over any chart for detailed explanations.'
      }
    ]
  },
  {
    category: 'Troubleshooting',
    questions: [
      {
        question: 'What should I do if my system shows an error?',
        answer: 'First, check the System Status page for specific error details. Most issues resolve automatically. If the error persists for more than 30 minutes, contact our support team through the dashboard or call our 24/7 helpline.'
      },
      {
        question: 'Why is my energy production lower than expected?',
        answer: 'Energy production can vary based on water flow, seasonal changes, and maintenance schedules. Check the Environmental Conditions section in your dashboard for current water flow data and any scheduled maintenance alerts.'
      }
    ]
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: '24/7 Phone Support',
    description: 'Immediate assistance for urgent issues',
    contact: '+1 (555) 123-4567',
    availability: 'Available 24/7',
    color: 'blue'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed technical assistance',
    contact: 'support@riverwatts.com',
    availability: 'Response within 4 hours',
    color: 'green'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Quick answers to common questions',
    contact: 'Available in dashboard',
    availability: 'Mon-Fri 8AM-8PM EST',
    color: 'purple'
  }
];

const resources = [
  {
    icon: FileText,
    title: 'User Manual',
    description: 'Complete guide to your RiverWatts system',
    type: 'PDF',
    size: '2.4 MB'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step visual guides',
    type: 'Video Series',
    size: '12 videos'
  },
  {
    icon: Book,
    title: 'Technical Specifications',
    description: 'Detailed system specifications and requirements',
    type: 'PDF',
    size: '1.8 MB'
  }
];

export default function HelpSupportPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Getting Started']);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleQuestion = (index: number) => {
    setExpandedQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(q => q !== index)
        : [...prev, index]
    );
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const getChannelColor = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-800',
      green: 'from-green-50 to-green-100 border-green-200 text-green-800',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Help & Support</h1>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg">
          <HelpCircle className="h-5 w-5" />
          <span className="font-semibold">We're Here to Help</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportChannels.map((channel, index) => {
          const IconComponent = channel.icon;
          return (
            <div key={index} className={`bg-gradient-to-br ${getChannelColor(channel.color)} rounded-xl p-6 border cursor-pointer hover:shadow-lg transition-all duration-200`}>
              <div className="flex items-center justify-between mb-4">
                <IconComponent className="h-8 w-8" />
                <Clock className="h-4 w-4 opacity-60" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
              <p className="text-sm opacity-80 mb-3">{channel.description}</p>
              <div className="space-y-1">
                <p className="font-medium">{channel.contact}</p>
                <p className="text-xs opacity-70">{channel.availability}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <Book className="h-6 w-6 mr-3 text-blue-600" />
              Frequently Asked Questions
            </h2>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* FAQ Categories */}
            <div className="space-y-4">
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-800">{category.category}</h3>
                    {expandedCategories.includes(category.category) ? (
                      <ChevronDown className="h-5 w-5 text-slate-600" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-slate-600" />
                    )}
                  </button>
                  
                  {expandedCategories.includes(category.category) && (
                    <div className="border-t border-slate-200">
                      {category.questions.map((faq, questionIndex) => {
                        const globalIndex = categoryIndex * 100 + questionIndex;
                        return (
                          <div key={questionIndex} className="border-b border-slate-100 last:border-b-0">
                            <button
                              onClick={() => toggleQuestion(globalIndex)}
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                            >
                              <span className="font-medium text-slate-700">{faq.question}</span>
                              {expandedQuestions.includes(globalIndex) ? (
                                <ChevronDown className="h-4 w-4 text-slate-600 flex-shrink-0 ml-2" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-slate-600 flex-shrink-0 ml-2" />
                              )}
                            </button>
                            {expandedQuestions.includes(globalIndex) && (
                              <div className="px-4 pb-4">
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <Download className="h-5 w-5 mr-2 text-blue-600" />
              Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-800 truncate">{resource.title}</h4>
                      <p className="text-sm text-slate-600 truncate">{resource.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded">{resource.type}</span>
                        <span className="text-xs text-slate-500">{resource.size}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Tips</h3>
            <ul className="space-y-3 text-sm text-blue-700">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Check System Status first for any alerts or maintenance notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Use the search function to quickly find specific topics</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Contact support immediately for any safety-related concerns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}