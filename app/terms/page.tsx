// app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="space-y-32">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Waste Driver Terms of Service
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            These Terms govern your use of the Waste Driver website, mobile apps, and services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 space-y-20 text-slate-800">

        {/* ACCEPTANCE */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            By creating an account or using Waste Driver services, you agree to these Terms of
            Service and our Privacy Policy.
          </p>
        </div>

        {/* USER RESPONSIBILITIES */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">2. User Responsibilities</h2>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Provide accurate account and contact information</li>
            <li>Ensure safe access for Drivers during pickups</li>
            <li>Use the platform for lawful purposes only</li>
            <li>Maintain the confidentiality of your account</li>
          </ul>
        </div>

        {/* DRIVER RESPONSIBILITIES */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">3. Driver Responsibilities</h2>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Maintain valid license, insurance, and vehicle registration</li>
            <li>Provide accurate quotes and complete jobs professionally</li>
            <li>Dispose of waste at approved facilities</li>
            <li>Follow all safety and environmental regulations</li>
          </ul>
        </div>

        {/* PAYMENTS */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">4. Payments</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Payments are processed securely through Stripe. Charges occur only after job completion
            unless otherwise stated. Refunds or adjustments may be issued when appropriate.
          </p>
        </div>

        {/* SMS CONSENT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">5. SMS Messaging</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            By opting in to SMS messaging, you agree to receive operational messages such as
            verification codes, booking updates, and driver notifications. Message frequency varies.
            Reply STOP to opt out, HELP for help.
          </p>
        </div>

        {/* TERMINATION */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">6. Termination</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver may suspend or terminate accounts that violate these Terms or engage in
            fraudulent, unsafe, or unlawful activity.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">7. Contact Us</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            For questions about these Terms, contact:
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
