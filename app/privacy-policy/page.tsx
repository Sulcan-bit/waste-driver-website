// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-32">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Waste Driver Privacy Policy
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            How Waste Driver collects, uses, stores, and protects User and Driver information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 space-y-20 text-slate-800">

        {/* INTRO */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">1. Introduction</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver Inc. (“Waste Driver”, “we”, “our”, “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our website, mobile applications, and services.
          </p>
        </div>

        {/* INFORMATION WE COLLECT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">2. Information We Collect</h2>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Account information (name, email, phone number)</li>
            <li>Addresses for quotes, pickups, and deliveries</li>
            <li>Driver license, insurance, and vehicle details (Drivers only)</li>
            <li>Photos uploaded for quotes or job documentation</li>
            <li>Payment method information (processed securely by Stripe)</li>
            <li>Device, usage, and analytics data</li>
            <li>SMS consent status and opt‑in/opt‑out history</li>
          </ul>
        </div>

        {/* SMS PRIVACY REQUIREMENT */}
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
          <h3 className="text-2xl font-semibold text-slate-900">SMS Privacy</h3>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            <strong>We do not share, sell, or transfer your mobile number or SMS consent information
            to third parties for marketing or promotional purposes.</strong> Your phone number is
            used strictly for operational and account‑related messaging.
          </p>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            During account creation in the WasteDriver app, Users and Drivers provide explicit SMS
            consent by entering their mobile number and checking an SMS consent checkbox
            <strong> (unchecked by default)</strong>. After submitting, they receive a confirmation
            SMS and must <strong>reply YES</strong> to activate messaging. This double opt‑in
            process satisfies Canadian and U.S. Toll‑Free carrier requirements.
          </p>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            SMS messages may include:
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>2FA / verification codes for account signup</li>
            <li>Driver onboarding and operational job alerts</li>
            <li>Customer pickup, booking, and arrival updates</li>
            <li>Service notifications related to account activity</li>
          </ul>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Waste Driver’s Toll‑Free messaging use case is classified as
            <strong> Mixed</strong>, covering both verification codes and operational notifications.
          </p>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            You may opt out at any time by replying <strong>STOP</strong>. To resume messages, reply
            <strong> START</strong>. For help, reply <strong>HELP</strong>.
          </p>
        </div>

        {/* HOW WE USE INFORMATION */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">3. How We Use Your Information</h2>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>To create and manage User and Driver accounts</li>
            <li>To send quotes, confirmations, and operational updates</li>
            <li>To send verification codes and confirm identity</li>
            <li>To send job alerts and booking notifications</li>
            <li>To process payments securely through Stripe</li>
            <li>To improve our platform and customer experience</li>
          </ul>
        </div>

        {/* DATA SECURITY */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">4. Data Security</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            We use industry‑standard encryption, secure storage, and access controls to protect your
            information. Payment information is never stored on our servers and is handled directly
            by Stripe. SMS consent and opt‑in records are securely stored to meet carrier compliance
            requirements.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">5. Contact Us</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            For questions about this Privacy Policy, contact:
          </p>

          <p className="mt-6 text-xl font-semibold text-slate-900 leading-relaxed">
            Waste Driver Inc.<br />
            info@wastedriver.com<br />
            1‑833‑99‑WASTE
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <a
          href="/download"
          className="inline-block rounded-xl bg-emerald-600 px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
        >
          Download the Waste Driver App
        </a>
      </section>
    </div>
  );
}

