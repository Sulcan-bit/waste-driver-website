// app/drivers/page.tsx
export default function DriversPage() {
  return (
    <div className="space-y-48">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION — Premium Tech Marketplace                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Atmospheric Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Earn More With AI‑Optimized Routes
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Waste Driver brings the marketplace directly to Independent Drivers. We handle the
            advertising, branding, and User trust — you focus on the work. Our AI‑enhanced routing
            reduces deadhead time, increases route density, and helps you complete more jobs per hour.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/signup"
              className="rounded-xl bg-emerald-600 px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
            >
              Become a Driver Partner
            </a>

            <a
              href="/download"
              className="rounded-xl border border-emerald-600 px-8 py-4 text-emerald-700 text-lg font-semibold hover:bg-emerald-50 transition"
            >
              Download the App
            </a>
          </div>

          {/* SMS COMPLIANCE BUTTON — moved near top */}
          <div className="mt-6">
            <a
              href="/sms-compliance"
              className="inline-block rounded-xl border border-slate-300 px-6 py-3 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition"
            >
              Driver SMS Messaging Policy
            </a>
          </div>

          {/* DRIVER PHILOSOPHY */}
          <div className="mt-14 space-y-4 max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            <p>Your truck + our platform = a more efficient, more profitable workday.</p>
            <p>We help Independent Drivers compete with big junk haulers — without taking your revenue.</p>
            <p>Users trust verified Drivers, which means more jobs and less downtime.</p>
            <p className="font-semibold text-slate-800">
              Waste Driver is built to help Independent Drivers win.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* WHY DRIVERS GET MORE WORK — Premium Cards                              */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          Why Drivers Get More Work Through Waste Driver
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Waste Driver gives Independent Drivers the same advantages large junk‑hauling companies use —
          without taking a cut of your earnings.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">We Bring Users to You</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              No more searching for jobs. The marketplace sends Users directly to your phone.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Verified Drivers Get Chosen First</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Users prefer vetted Drivers over random trucks. Verified status = more trust = more jobs.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Compete With Big Junk Haulers</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Waste Driver handles the branding and advertising so you can compete with large companies.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">No Haggling or Bidding Wars</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              You send a quote. Users choose instantly. No endless messaging or price battles.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">AI Reduces Deadhead Time</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Our routing system increases route density so you complete more jobs per hour.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">You Keep Your Earnings</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Drivers set the profit they require — above their costs. Waste Driver never takes a cut.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* HOW IT WORKS FOR DRIVERS — Premium List                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          How It Works for Drivers
        </h2>

        <ol className="mt-16 space-y-10 text-slate-700 text-lg leading-relaxed">

          <li>
            <p className="text-2xl font-semibold text-slate-900">1. Create a Driver Profile</p>
            <p className="mt-2">
              Sign up, verify your license, insurance, and vehicle details — become a trusted Driver in the marketplace.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">2. Receive Job Requests</p>
            <p className="mt-2">
              Users upload photos. You get notified instantly when a job is available in your area.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">3. Send Quotes</p>
            <p className="mt-2">
              Review User photos, set your price, and send your quote. Users can accept or wait for another Driver.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">4. Complete the Job & Dispose Responsibly</p>
            <p className="mt-2">
              Take arrival and completion photos. Routes are tracked to confirm disposal at approved landfill or recycling facilities.
            </p>
          </li>

        </ol>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* MARKETPLACE ADVANTAGE — Premium Section                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          Marketplace Advantage
        </h2>

        <p className="mt-10 max-w-3xl mx-auto text-center text-xl text-slate-700 leading-relaxed">
          Waste Driver’s independent‑partner and AI‑enhanced routing model lowers User costs by
          30–40% while keeping Driver revenue intact. This positions Waste Driver as the marketplace
          alternative to expensive branded junk haulers.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-center text-xl text-slate-700 leading-relaxed">
          Our platform connects verified Independent Drivers with Users through a trusted, transparent,
          AI‑powered system — giving Drivers the tools big companies use, without taking their money.
        </p>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CTA SECTION — Premium Tech Marketplace                                 */}
      {/* ---------------------------------------------------------------------- */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-20 text-center text-white shadow-xl mx-6">
        <h2 className="text-4xl font-bold">Ready to Start Driving?</h2>
        <p className="mt-4 text-xl text-emerald-100">
          Join the Waste Driver network and earn more with AI‑optimized routes.
        </p>

        <a
          href="/signup"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 text-emerald-700 text-lg font-semibold shadow hover:bg-slate-100 transition"
        >
          Become a Driver Partner
        </a>
      </section>

    </div>
  );
}
