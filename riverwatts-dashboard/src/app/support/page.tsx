'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { 
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  BookOpen,
  Search,
  Clock,
  User,
  Send
} from 'lucide-react';

export default function SupportPage() {
  const supportOptions = [
    {
      id: 1,
      title: "Knowledge Base",
      description: "Search our extensive library of articles and guides",
      icon: BookOpen,
      action: "Browse Articles"
    },
    {
      id: 2,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours",
      icon: Mail,
      action: "Send Email"
    },
    {
      id: 3,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      icon: Phone,
      action: "Call Now"
    },
    {
      id: 4,
      title: "Live Chat",
      description: "Get real-time assistance from our support team",
      icon: MessageCircle,
      action: "Start Chat"
    }
  ];

  const faqs = [
    {
      question: "How do I monitor my system's performance?",
      answer: "You can monitor your system through our web dashboard or mobile app. Both provide real-time data on energy generation, system status, and performance metrics."
    },
    {
      question: "What maintenance is required for my system?",
      answer: "Our systems require minimal maintenance. We recommend an annual inspection and cleaning of the turbine. Detailed maintenance schedules are available in your user manual."
    },
    {
      question: "How do I troubleshoot common issues?",
      answer: "Our knowledge base has comprehensive troubleshooting guides. For technical issues, you can contact our support team through any of the channels below."
    },
    {
      question: "What is the warranty on RiverWatts systems?",
      answer: "All RiverWatts systems come with a standard 10-year warranty covering parts and labor. Extended warranty options are available for purchase."
    }
  ];

  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Support Center</h1>
        <p className="text-xl text-slate-600 mb-8">
          Get help with your RiverWatts system. We're here to assist you with any questions or issues.
        </p>
        
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
          <Input 
            placeholder="Search support articles..." 
            className="pl-10 py-6 text-lg" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {supportOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Card key={option.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Send us a message and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Support Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-slate-600">+231 778065593</p>
                    <p className="text-sm text-slate-500">24/7 Helpline</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-slate-600">service@riverwatts.com</p>
                    <p className="text-sm text-slate-500">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                For urgent technical issues or emergencies, please call our 24/7 helpline:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2" />
                  <span className="font-medium text-red-800">+231 555553831</span>
                </div>
                <p className="text-sm text-red-700 mt-2">
                  Available 24/7 for critical system issues
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Quick answers to common questions about RiverWatts systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}