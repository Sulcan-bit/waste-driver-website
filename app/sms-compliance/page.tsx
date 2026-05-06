// app/sms-compliance/page.tsx
export default function SMSCompliancePage() {
  return (
    <div className="space-y-32">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION — Premium Tech Marketplace                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Atmospheric Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Waste Driver SMS & Toll‑Free Messaging Policy
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            How Waste Driver collects consent, sends operational messages, protects User and Driver
            privacy, and complies with Canadian and U.S. carrier requirements for Toll‑Free SMS.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN CONTENT — Premium Layout                                          */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6 space-y-20 text-slate-800">

        {/* PURPOSE */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">1. Purpose of SMS Messaging</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver uses SMS messaging strictly for operational, transactional, and
            account‑related communication. SMS is used to:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Send Users quotes, booking confirmations, arrival notifications, and job updates.</li>
            <li>Send Drivers job opportunities, quote requests, and operational updates.</li>
            <li>Verify User and Driver phone numbers during onboarding.</li>
            <li>Provide support information, profile reminders, and account‑related alerts.</li>
          </ul>
        </div>

        {/* OPT-IN */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            2. How Users & Drivers Provide Consent (Opt‑In)
          </h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver collects explicit consent before sending SMS messages. Consent is obtained
            in the following ways:
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-slate-900">Users</h3>
          <ul className="mt-4 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Users enter their mobile number during account creation in the Waste Driver app or website.</li>
            <li>Users must verify their phone number via a 6‑digit SMS verification code.</li>
            <li>Users agree to receive SMS messages as part of the Terms of Service and onboarding flow.</li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold text-slate-900">Drivers</h3>
          <ul className="mt-4 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Drivers enter their mobile number during Driver onboarding.</li>
            <li>Drivers verify their phone number via a 6‑digit SMS verification code.</li>
            <li>Drivers agree to receive job alerts, quote requests, and operational SMS messages.</li>
          </ul>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Waste Driver does not send SMS messages to any User or Driver who has not provided
            explicit consent and completed phone verification.
          </p>
        </div>

        {/* OPT-OUT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">3. Opt‑Out Instructions</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Users and Drivers may opt out of SMS messaging at any time by replying:
          </p>

          <p className="mt-4 text-2xl font-semibold text-slate-900">STOP</p>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Once STOP is received, Waste Driver immediately stops sending SMS messages to that
            number unless the User or Driver opts back in by replying:
          </p>

          <p className="mt-4 text-2xl font-semibold text-slate-900">START</p>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            For help or support, Users and Drivers may reply:
          </p>

          <p className="mt-4 text-2xl font-semibold text-slate-900">HELP</p>
        </div>

        {/* TYPES OF MESSAGES */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">4. Types of SMS Messages Sent</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver sends only operational, transactional, and account‑related messages.
            Below are examples of real messages sent to Users and Drivers.
          </p>

          <h3 className="mt-10 text-2xl font-semibold text-slate-900">User Messages</h3>
          <ul className="mt-4 list-disc pl-6 space-y-4 text-lg text-slate-700">
            <li>“Welcome to WasteDriver! Text a photo of your junk + your address for an instant quote. Reply STOP to opt out anytime.”</li>
            <li>“Thanks for your request! We’ll send you a quote shortly. Reply STOP to unsubscribe.”</li>
            <li>“Your quote is ready: $248 for your couch + appliances. Reply YES to accept or NO to decline. Reply STOP to opt out.”</li>
            <li>“Booking confirmed! Your driver will arrive between 1–3 PM today. Reply STOP to opt out.”</li>
            <li>“Your WasteDriver is arriving in ~10 minutes. Any last‑minute changes? Reply here.”</li>
            <li>“Job complete! $248 has been charged. Rate your driver: [link]. Reply STOP to opt out.”</li>
          </ul>

          <h3 className="mt-12 text-2xl font-semibold text-slate-900">Driver Messages</h3>
          <ul className="mt-4 list-disc pl-6 space-y-4 text-lg text-slate-700">
            <li>“Hi, this is WasteDriver. Want steady paid jobs with the commission you request? Reply YES to learn more or STOP to opt out.”</li>
            <li>“Great! To join: Text your name, city, and truck type. Reply STOP to opt out.”</li>
            <li>“Welcome to WasteDriver, John! You’re now approved. We’ll text you job leads during launch.”</li>
            <li>“Your profile is 80% complete. Text ‘PROFILE’ to continue. Reply STOP to opt out.”</li>
            <li>“New job alert – Calgary SE. Couch + 2 appliances. Quoted $248. $6 commission. Accept? Reply YES or NO.”</li>
          </ul>
        </div>

        {/* LEGITIMATE BUSINESS PURPOSE */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">5. Legitimate Business Purpose</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver is a Canadian marketplace platform that connects Users with verified
            Independent Drivers for junk removal and waste transportation. SMS messaging is
            essential for:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Coordinating quotes and bookings</li>
            <li>Providing arrival notifications</li>
            <li>Ensuring safe and responsible disposal</li>
            <li>Supporting Drivers with job opportunities</li>
            <li>Verifying identity and account ownership</li>
          </ul>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Waste Driver does not send promotional or marketing SMS messages without explicit
            opt‑in consent.
          </p>
        </div>

        {/* SAFETY & VERIFICATION */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            6. Safety, Verification & Responsible Disposal
          </h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver maintains a safe and accountable marketplace through:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Driver license, insurance, and vehicle registration verification</li>
            <li>Photo documentation at Quote, Arrival, and Completion</li>
            <li>Route tracking to approved landfill and recycling facilities</li>
            <li>Address protection until a quote is accepted</li>
            <li>Secure storage of job photos for dispute resolution</li>
          </ul>
        </div>

        {/* TOLL-FREE NUMBER */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">7. Toll‑Free Number</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver uses the following Toll‑Free number for all SMS communication:
          </p>

          <p className="mt-6 text-2xl font-semibold text-slate-900">
            1‑833‑999‑2783 (1‑833‑99‑WASTE)
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">8. Contact Information</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            For questions about SMS messaging or to report an issue, contact:
          </p>

          <p className="mt-6 text-xl font-semibold text-slate-900 leading-relaxed">
            Waste Driver Inc.  
            info@wastedriver.com  
            1‑833‑999‑2783
          </p>
        </div>

      </section>
    </div>
  );
}
