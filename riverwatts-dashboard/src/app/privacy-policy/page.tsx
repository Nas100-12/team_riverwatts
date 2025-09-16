'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Privacy Policy</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              At RiverWatts, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website and use our services.
            </p>
            <p className="text-slate-700">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site or use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-slate-700 mb-4">
              We may collect personally identifiable information, such as your name, email address, phone number, 
              billing address, and payment information when you register on our site, place an order, subscribe 
              to our newsletter, respond to a survey, or fill out a form.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Usage Data</h3>
            <p className="text-slate-700 mb-4">
              We may also collect information about how you access and use our services, including your IP address, 
              browser type, operating system, referring/exit pages, and click patterns. This information is used 
              to analyze trends, administer the site, track users' movements around the site, and gather demographic 
              information.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Device Information</h3>
            <p className="text-slate-700">
              We collect information about the computer or mobile device you use to access our services, 
              including the hardware model, operating system and version, unique device identifiers, 
              and mobile network information.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>To provide, maintain, and improve our services</li>
              <li>To process and complete transactions, and send you related information</li>
              <li>To send you technical notices, updates, security alerts, and support and administrative messages</li>
              <li>To respond to your comments, questions, and provide customer service</li>
              <li>To communicate with you about products, services, offers, and events</li>
              <li>To monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>To detect, investigate, and prevent fraudulent transactions or other illegal activities</li>
              <li>To personalize and improve your experience with our services</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, 
              service providers, contractors, or agents who perform services for us or on our behalf.</li>
              <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection 
              with, or during negotiations of, any merger, sale of company assets, financing, or acquisition 
              of all or a portion of our business to another company.</li>
              <li><strong>With Affiliates:</strong> We may share your information with our affiliates, 
              in which case we will require those affiliates to honor this Privacy Policy.</li>
              <li><strong>With Business Partners:</strong> We may share your information with our business partners 
              to offer you certain products, services, or promotions.</li>
              <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose 
              with your consent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, 
              please be aware that despite our efforts, no security measures are perfect or impenetrable, 
              and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Your Data Protection Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p className="text-slate-700 mt-4">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, 
              please contact us.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. 
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>By email: privacy@riverwatts.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>By mail: RiverWatts Privacy Department, 123 Energy Drive, CleanTech Valley, CA 94000</li>
            </ul>
            <p className="text-slate-700 mt-4">
              <strong>Last Updated:</strong> June 15, 2023
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}