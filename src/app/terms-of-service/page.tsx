import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Recoupable',
  description: 'Read our Terms of Service to understand the rules and regulations governing the use of Recoupable\'s music industry technology services and platform.',
  openGraph: {
    title: 'Terms of Service | Recoupable',
    description: 'Read our Terms of Service to understand the rules and regulations governing the use of Recoupable\'s services.',
    url: 'https://recoupable.com/terms-of-service',
  },
}

export default function TermsOfService() {
  const lastUpdated = 'January 25, 2025'

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Recoupable (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website, services, and technology platform (collectively, the &quot;Service&quot;) operated by Recoupable.
              </p>
              <p className="text-gray-700 mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
              <p className="text-gray-700">
                These Terms constitute a legally binding agreement between you and Recoupable. Please read them carefully.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">
                Recoupable provides music industry technology services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Music analytics and data insights</li>
                <li>Revenue optimization tools</li>
                <li>Artist and label management solutions</li>
                <li>Content strategy and marketing tools</li>
                <li>Research and consulting services</li>
                <li>Educational resources and blog content</li>
                <li>Demo booking and consultation services</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any part of our Service at any time with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our Service, you may be required to create an account. When you create an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Provide accurate, complete, and current information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="text-gray-700">
                You are responsible for safeguarding your account password and for all activities that happen under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">
                You agree to use our Service only for lawful purposes and in a way that does not infringe the rights of others. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Remove or alter any proprietary notices or labels</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to terminate your access if you violate these acceptable use guidelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content</h3>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Recoupable and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Content</h3>
              <p className="text-gray-700 mb-4">
                By submitting content to our Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with our Service.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Content</h3>
              <p className="text-gray-700">
                Our Service may contain content from third parties, including blog articles from SEObot. We respect the intellectual property rights of others and expect users to do the same.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                If you purchase any paid services from us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>You agree to pay all fees and charges associated with your account</li>
                <li>All payments are due in advance and are non-refundable unless stated otherwise</li>
                <li>We may change our pricing at any time with appropriate notice</li>
                <li>You are responsible for all taxes and fees related to your purchases</li>
                <li>Failure to pay may result in suspension or termination of your account</li>
              </ul>
              <p className="text-gray-700">
                For specific refund policies, please contact our support team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability and Modifications</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide reliable service, but we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Continuous, uninterrupted, or error-free operation</li>
                <li>That defects will be corrected</li>
                <li>That the Service is free of viruses or harmful components</li>
                <li>The accuracy or reliability of any information obtained through the Service</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to modify, update, or discontinue the Service at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations of Liability</h2>
              <p className="text-gray-700 mb-4">
                <strong>DISCLAIMER:</strong> THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>LIMITATION OF LIABILITY:</strong> IN NO EVENT SHALL RECOUPABLE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-700">
                Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless Recoupable and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit through the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Breach of these Terms</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Fraudulent, abusive, or harmful behavior</li>
                <li>Extended periods of inactivity</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You may also terminate your account at any time by contacting us or through your account settings.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will cease immediately, and any data associated with your account may be deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy Policy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Recoupable is incorporated, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700">
                Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of competent jurisdiction in that location, and you hereby consent to personal jurisdiction and venue therein.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid or unenforceable provision will be replaced with a valid and enforceable provision that most closely reflects the intent of the original provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> hi@recoupable.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> <a href="https://recoupable.com" className="text-blue-600 hover:text-blue-800">https://recoupable.com</a>
                </p>

                <p className="text-gray-700">
                  <strong>Response Time:</strong> We aim to respond to all legal inquiries within 30 days.
                </p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-500 text-center">
                By using Recoupable&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 