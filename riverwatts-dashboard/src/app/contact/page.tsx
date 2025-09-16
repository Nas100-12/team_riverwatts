'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Headphones
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      title: "Sales Inquiries",
      description: "Get pricing and solution information",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      contact: "service@riverwatts.com",
      phone: "+231 778065593"
    },
    {
      title: "Technical Support",
      description: "Get help with your system",
      icon: Headphones,
      color: "from-emerald-500 to-emerald-600",
      contact: "service@riverwatts.com",
      phone: "+231 555553831"
    },
    {
      title: "General Inquiries",
      description: "Questions about our company",
      icon: MessageCircle,
      color: "from-blue-600 to-blue-700",
      contact: "info@riverwatts.com",
      phone: "+231 778065593"
    }
  ];

  const offices = [
    {
      city: "Monrovia",
      address: "Airfield Sinkor",
      zipcode: "Monrovia, Liberia, West Africa",
      phone: "+231 778065593",
      email: "service@riverwatts.com"
    },
    {
      city: "Regional Office",
      address: "Airfield Sinkor",
      zipcode: "Monrovia, Liberia, West Africa",
      phone: "+231 555553831",
      email: "info@riverwatts.com"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-blue-700/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-700/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container-page py-24 pt-48 pb-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="info" className="mb-6">
            📞 Get In Touch
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">Let's Build a</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
              Sustainable Future
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Ready to harness the power of flowing water? Our team is here to help you find the perfect hydrokinetic solution for your needs.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="modern-card text-center group">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-blue-600">
                        <Mail className="h-4 w-4" />
                        {method.contact}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-600">
                        <Phone className="h-4 w-4" />
                        {method.phone}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#014174] mb-2">Send us a Message</CardTitle>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 focus-ring"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 focus-ring"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-slate-700">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1 focus-ring"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 focus-ring"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 focus-ring"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="mt-1 focus-ring"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full gradient-primary text-white focus-ring">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 mb-16"
          >
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#014174] mb-2">Office Locations</CardTitle>
                <p className="text-slate-600">Visit us at our headquarters in Monrovia.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Map View */}
                  <div className="h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7234567890!2d-10.7969!3d6.2907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAirfield%20Sinkor%2C%20Monrovia%2C%20Liberia!5e0!3m2!1sen!2slr!4v1640995200000!5m2!1sen!2slr&q=Airfield+Sinkor+Monrovia+Liberia"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RiverWatts Office - Airfield Sinkor, Monrovia, Liberia"
                    ></iframe>
                  </div>
                  
                  {/* Office Details */}
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#0a8ac6]" />
                          {office.city}
                        </h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>{office.address}</p>
                          <p>{office.zipcode}</p>
                          <div className="flex items-center gap-2 text-[#0a8ac6]">
                            <Phone className="h-3 w-3" />
                            {office.phone}
                          </div>
                          <div className="flex items-center gap-2 text-[#0a8ac6]">
                            <Mail className="h-3 w-3" />
                            {office.email}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#014174] mb-2">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Monday - Friday</span>
                    <span className="font-medium text-slate-900">8:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Saturday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Sunday</span>
                    <span className="font-medium text-slate-900">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="h-4 w-4" />
                      Emergency support available 24/7
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}