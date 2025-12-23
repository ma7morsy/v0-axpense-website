import type { Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Axpense",
  description: "Axpense privacy policy and data protection information.",
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Axpense. We respect your privacy and are committed to protecting your personal data. This
              privacy policy explains how we collect, use, disclose, and safeguard your information when you use our
              fleet, asset, and equipment management platform.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and company information</li>
              <li>Fleet, asset, and equipment data you input into the platform</li>
              <li>GPS location data from tracked vehicles and assets</li>
              <li>Usage data and analytics about how you interact with our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
              internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
              privacy policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, payment processing, and other functionalities. These third
              parties have access to your data only to perform specific tasks on our behalf and are obligated not to
              disclose or use it for other purposes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside of your country where
              data protection laws may differ. We take steps to ensure your data receives adequate protection.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the effective date.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact us through our
              contact form or reach out to our support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
