'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container-page py-12 pt-48">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Terms of Service</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              Welcome to RiverWatts. These Terms of Service ("Terms") govern your access to and use of our 
              website, services, and applications (collectively, the "Services"). By accessing or using our Services, 
              you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-slate-700">
              Please read these Terms carefully before accessing or using our Services. If you do not agree to 
              these Terms, you may not access or use the Services.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Eligibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              You must be at least 18 years old to use our Services. By agreeing to these Terms, you represent 
              and warrant that you are of legal age to form a binding contract with RiverWatts and meet all 
              eligibility requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Account Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              To access certain features of our Services, you may be required to register for an account. 
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-slate-700 mt-4">
              You are responsible for all activities that occur under your account. We reserve the right 
              to suspend or terminate your account if any information provided during registration 
              is inaccurate or incomplete.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Use of Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Use the Services for any illegal purpose or in violation of any laws</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Attempt to gain unauthorized access to the Services or related systems</li>
              <li>Use any robot, spider, or other automatic device to access the Services</li>
              <li>Transmit any viruses, worms, defects, Trojan horses, or other malicious code</li>
              <li>Use the Services to transmit unsolicited commercial communications</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the Services</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              The Services and all materials contained therein, including, without limitation, RiverWatts logo, 
              trademarks, service marks, text, graphics, logos, button icons, images, audio clips, data 
              compilations, software, and the compilation of all content on this site (collectively, 
              the "Content") are the property of RiverWatts or its licensors and are protected by United States 
              and international intellectual property laws.
            </p>
            <p className="text-slate-700">
              You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
              create derivative works from, transfer, or sell any information, software, products, or services 
              obtained from the Services without our express written permission.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              Certain Services may require payment of fees. You agree to pay all fees and charges 
              incurred in connection with your account at the rates in effect when the charges were incurred.
            </p>
            <p className="text-slate-700">
              All fees are exclusive of taxes. You are responsible for paying any taxes, including 
              but not limited to sales, use, value-added, and similar taxes that may apply to your 
              transactions. We reserve the right to change our pricing at any time.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Disclaimer of Warranties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. RIVERWATTS DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, 
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIVERWATTS SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
              WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER 
              INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE 
              THE SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (III) ANY CONTENT 
              OBTAINED FROM THE SERVICES; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR 
              TRANSMISSIONS OR CONTENT.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We may terminate or suspend your account and bar access to the Services immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever 
              and without limitation, including but not limited to a breach of the Terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              These Terms shall be governed and construed in accordance with the laws of California, 
              without regard to its conflict of law provisions. Our failure to enforce any right or 
              provision of these Terms will not be considered a waiver of those rights.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days' notice prior to any new terms 
              taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>By email: legal@riverwatts.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>By mail: RiverWatts Legal Department, 123 Energy Drive, CleanTech Valley, CA 94000</li>
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