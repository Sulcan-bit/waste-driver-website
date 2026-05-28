// app/sms-compliance/page.tsx
export default function SMSCompliancePage() {
  return (
    <div className="space-y-32">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION                                                           */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Waste Driver SMS & Toll‑Free Messaging Policy
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            This page explains how Waste Driver collects consent, sends operational messages,
            protects User and Driver privacy, and complies with Canadian and U.S. carrier
            requirements for Toll‑Free SMS.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* TABLE OF CONTENTS                                                     */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Table of Contents</h2>

          <ol className="space-y-3 text-lg text-slate-700">
            <li>1. Purpose of SMS Messaging</li>
            <li>2. How Users & Drivers Provide Consent (Opt‑In)</li>
            <li>3. Opt‑Out Instructions</li>
            <li>4. Types of SMS Messages Sent (Examples)</li>
            <li>5. Legitimate Business Purpose</li>
            <li>6. Safety, Verification & Responsible Disposal</li>
            <li>7. Toll‑Free Number</li>
            <li>8. Contact Information</li>
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN CONTENT                                                           */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6 space-y-20 text-slate-800">

        {/* PURPOSE */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">1. Purpose of SMS Messaging</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver uses SMS messaging strictly for operational, transactional, and
            account‑related communication, including verification codes and job‑related
            notifications. SMS is used to:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Send Users quotes, booking confirmations, arrival notifications, and job updates.</li>
            <li>Send Drivers job opportunities, quote requests, and operational updates.</li>
            <li>Verify User and Driver phone numbers during onboarding with 2FA/verification codes.</li>
            <li>Provide support information, profile reminders, and account‑related alerts.</li>
            <li>Send service notifications related to account activity and booking status.</li>
          </ul>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            For carrier classification, Waste Driver’s Toll‑Free messaging use case is considered
            <strong> Mixed</strong>, covering both verification codes (2FA) and operational
            notifications for Users and Drivers.
          </p>
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
            <li>Entering their mobile number during account creation in the WasteDriver app.</li>
            <li>Checking an SMS consent checkbox (unchecked by default and separate from email and Terms acceptance).</li>
            <li>Verifying their phone number via a 6‑digit SMS code.</li>
            <li>Agreeing to receive SMS messages during onboarding and in the Terms of Service.</li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold text-slate-900">Drivers</h3>
          <ul className="mt-4 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>Entering their mobile number during Driver onboarding.</li>
            <li>Checking an SMS consent checkbox (unchecked by default) to receive job and operational messages.</li>
            <li>Verifying their phone number via a 6‑digit SMS code.</li>
            <li>Agreeing to receive job alerts, quote requests, and operational messages.</li>
          </ul>

{/* ---------------------------------------------------------------------- */}
{/* CTIA REQUIRED DISCLOSURES (MANDATORY FOR TELNYX APPROVAL)             */}
{/* ---------------------------------------------------------------------- */}
<div className="p-8 bg-white rounded-3xl shadow-xl ring-1 ring-black/5">
  <h2 className="text-3xl font-bold text-slate-900">
    Required SMS Disclosures (CTIA & Carrier Compliance)
  </h2>

  <p className="mt-6 text-lg text-slate-700 leading-relaxed">
    Before receiving any SMS messages from Waste Driver, all Users and Drivers are
    shown the following mandatory disclosures as part of the SMS opt‑in process:
  </p>

  <div className="mt-8 space-y-4 text-lg text-slate-700 leading-relaxed">
    <p><strong>Brand:</strong> Waste Driver Inc.</p>
    <p><strong>Use Case:</strong> Transactional and operational SMS messages including verification codes, driver quotes, booking confirmations, arrival notifications, and job status updates.</p>
    <p><strong>Message Frequency:</strong> Message frequency may vary based on account activity.</p>
    <p><strong>STOP Instructions:</strong> Reply STOP to opt out at any time.</p>
    <p><strong>HELP Instructions:</strong> Reply HELP for help or support.</p>
    <p><strong>Rates Disclosure:</strong> Standard message and data rates may apply.</p>
    <p>
      <strong>Terms & Privacy Policy:</strong><br />
      View our <a href="/terms" className="text-emerald-700 hover:text-emerald-800 underline">Terms</a> and 
      <a href="/privacy-policy" className="text-emerald-700 hover:text-emerald-800 underline ml-1">Privacy Policy</a>.
    </p>
  </div>

  <p className="mt-8 text-lg text-slate-700 leading-relaxed">
    These disclosures are presented directly beside the SMS opt‑in checkbox during
    account creation and must be acknowledged before any SMS messages are sent.
  </p>
</div>


          {/* ⭐ REQUIRED BY TELNYX — DIGITAL OPT-IN WORKFLOW */}
          <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl font-semibold text-slate-900">Digital Opt‑In Workflow</h3>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              During account creation in the WasteDriver app, the User or Driver enters their mobile
              number and taps a checkbox labeled <strong>“Send me SMS updates from WasteDriver”</strong>
              (unchecked by default and separate from email opt‑in and Terms acceptance). After
              submitting the form, our system sends a confirmation SMS:
            </p>

            <p className="mt-6 text-lg font-medium text-slate-900 italic">
              “WasteDriver: Reply YES to confirm SMS updates.”
            </p>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              The User or Driver must reply YES before any further messages are sent. This satisfies
              Canadian toll‑free double opt‑in requirements and ensures that only recipients who
              have explicitly confirmed consent receive SMS messages.
            </p>
          </div>

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
            To resume messages, reply:
          </p>

          {/* ⭐ REQUIRED BY TELNYX — OPT-IN KEYWORD */}
          <p className="mt-4 text-2xl font-semibold text-slate-900">START</p>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            For help or support, reply:
          </p>

          <p className="mt-4 text-2xl font-semibold text-slate-900">HELP</p>

          {/* ⭐ REQUIRED BY TELNYX — HELP AUTO-REPLY */}
          <div className="mt-6 p-6 bg-slate-100 rounded-2xl border border-slate-300">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>HELP Auto‑Reply:</strong><br />
              “WasteDriver Support: For help, email info@wastedriver.com or call 1‑833‑99‑WASTE.
              Reply STOP to opt out.”
            </p>
          </div>
        </div>

        {/* TYPES OF MESSAGES */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">4. Types of SMS Messages Sent</h2>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Waste Driver sends only operational, transactional, and account‑related messages. Message
            types include:
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>2FA/verification codes for account signup and phone verification.</li>
            <li>Driver onboarding and job alerts (e.g., new job opportunities, profile completion reminders).</li>
            <li>Customer pickup/booking status updates (e.g., confirmations, arrival notifications, completion updates).</li>
            <li>Service notifications related to account activity, payment status, and support.</li>
          </ul>

          {/* ⭐ REQUIRED BY TELNYX — BRANDED SAMPLE MESSAGE */}
          <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl font-semibold text-slate-900">Sample Verification Message</h3>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              “WasteDriver: Your verification code is 123456. Do not share. Reply STOP to opt out,
              HELP for help. Msg & data rates may apply.”
            </p>
          </div>

          {/* ⭐ REQUIRED BY TELNYX — OPT-IN CONFIRMATION */}
          <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl font-semibold text-slate-900">Opt‑In Confirmation Message</h3>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              “WasteDriver: You're subscribed. Reply STOP to opt out, HELP for help. Msg & data
              rates may apply. Msg frequency varies. Terms: https://wastedriver.com/terms
              Privacy: https://wastedriver.com/privacy-policy”
            </p>
          </div>

          {/* USER MESSAGES */}
          <h3 className="mt-10 text-2xl font-semibold text-slate-900">User Messages</h3>
          <ul className="mt-4 list-disc pl-6 space-y-4 text-lg text-slate-700">
            <li>“Welcome to WasteDriver! 🛻 Text a photo of your junk + your address for an instant quote. Reply STOP to opt out anytime.”</li>
            <li>“Thanks for your request! We'll send you a quote shortly. You can also reply with more photos or details. 1‑833‑99‑WASTE | wastedriver.com Reply STOP to unsubscribe.”</li>
            <li>“Your quote is ready: $248 for your couch + appliances (includes pickup & disposal). Reply YES to accept or NO to decline. We'll hold $248 on your card until completion. Reply STOP to opt out.”</li>
            <li>“Booking confirmed! Your driver will arrive between 1‑3 PM today. Driver name: Mike | Track here: [short link] Reply STOP to opt out.”</li>
            <li>“Your WasteDriver is arriving in ~10 minutes. License: ABC‑1234 | Silver Ford F150. Any last‑minute changes? Reply here.”</li>
            <li>“Job complete! $248 has been charged. Thank you for using WasteDriver. Rate your driver: [short link] Reply STOP to opt out.”</li>
            <li>“Your final charge has been adjusted. $56 refund issued to your card. Thank you! Questions? Text us. Reply STOP to opt out.”</li>
          </ul>

          {/* DRIVER MESSAGES */}
          <h3 className="mt-12 text-2xl font-semibold text-slate-900">Driver Messages</h3>
          <ul className="mt-4 list-disc pl-6 space-y-4 text-lg text-slate-700">
            <li>“Hi, this is WasteDriver. Saw your junk removal ad. Want steady paid jobs with the commission you request? Reply YES to learn more or STOP to opt out.”</li>
            <li>“Great! WasteDriver sends pre‑paid junk jobs. To join: Text your name, city, and truck type (e.g. ‘John, Calgary, Ford F150’). We'll send the agreement next. Reply STOP to opt out.”</li>
            <li>“Welcome to WasteDriver, [Driver First Name]! You're now approved. We'll text you job leads during launch. Download the app: wastedriver.com/driver Reply STOP to opt out.”</li>
            <li>“Your WasteDriver profile is 80% complete. Please add your fuel efficiency and preferred work areas to get better jobs. Text ‘PROFILE’ to continue. Reply STOP to opt out.”</li>
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
            Waste Driver Inc.<br />
            info@wastedriver.com<br />
            1‑833‑999‑2783
          </p>
        </div>

      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CTA — Premium Footer                                                   */}
      {/* ---------------------------------------------------------------------- */}
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


