export default function DriversPage() {
  return (
    <div className="space-y-28">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-6">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl leading-tight">
          Earn More With AI‑Optimized Routes
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Waste Driver brings the marketplace directly to Independent Drivers. 
          We handle the advertising, branding, and User trust — you focus on the work. 
          Our AI‑enhanced routing reduces deadhead time, increases route density, 
          and helps you complete more jobs per hour.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href="/signup"
            className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
          >
            Become a Driver Partner
          </a>

          <a
            href="/download"
            className="rounded-xl border border-emerald-600 px-8 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
          >
            Download the App
          </a>
        </div>

        {/* DRIVER PHILOSOPHY */}
        <div className="mt-10 space-y-3 max-w-2xl text-slate-700">
          <p>Your truck + our platform = a more efficient, more profitable workday.</p>
          <p>We help Independent Drivers compete with big junk haulers — without taking your revenue.</p>
          <p>Users trust verified Drivers, which means more jobs and less downtime.</p>
          <p className="font-semibold text-slate-800">
            Waste Driver is built to help Independent Drivers win.
          </p>
        </div>
      </section>

      {/* WHY DRIVERS GET MORE WORK */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Why Drivers Get More Work Through Waste Driver
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver gives Independent Drivers the same advantages large junk‑hauling companies use — 
          without taking a cut of your earnings.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">We Bring Users to You</h3>
            <p className="mt-2 text-slate-600">
              No more searching for jobs. The marketplace sends Users directly to your phone.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Verified Drivers Get Chosen First</h3>
            <p className="mt-2 text-slate-600">
              Users prefer vetted Drivers over random trucks. Verified status = more trust = more jobs.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Compete With Big Junk Haulers</h3>
            <p className="mt-2 text-slate-600">
              Waste Driver handles the branding and advertising so you can compete with large companies.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">No Haggling or Bidding Wars</h3>
            <p className="mt-2 text-slate-600">
              You send a quote. Users choose instantly. No endless messaging or price battles.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">AI Reduces Deadhead Time</h3>
            <p className="mt-2 text-slate-600">
              Our routing system increases route density so you complete more jobs per hour.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">You Keep Your Earnings</h3>
            <p className="mt-2 text-slate-600">
              Drivers set the profit they require — above their costs. Waste Driver never takes a cut.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS FOR DRIVERS */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          How It Works for Drivers
        </h2>

        <ol className="mt-10 space-y-8 max-w-2xl mx-auto text-slate-700">

          <li>
            <p className="text-xl font-semibold text-slate-900">1. Create a Driver Profile</p>
            <p className="mt-1">
              Sign up, verify your license, insurance, and vehicle details — become a trusted Driver in the marketplace.
            </p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">2. Receive Job Requests</p>
            <p className="mt-1">
              Users upload photos. You get notified instantly when a job is available in your area.
            </p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">3. Send Quotes</p>
            <p className="mt-1">
              Review User photos, set your price, and send your quote. Users can accept or wait for another Driver.
            </p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">4. Complete the Job & Dispose Responsibly</p>
            <p className="mt-1">
              Take arrival and completion photos. Routes are tracked to confirm disposal at approved landfill or recycling facilities.
            </p>
          </li>

        </ol>
      </section>

      {/* MARKETPLACE ADVANTAGE */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Marketplace Advantage
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s independent‑partner and AI‑enhanced routing model lowers User costs by 30–40% 
          while keeping Driver revenue intact. This positions Waste Driver as the marketplace alternative 
          to expensive branded junk haulers.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700">
          Our platform connects verified Independent Drivers with Users through a trusted, transparent, 
          AI‑powered system — giving Drivers the tools big companies use, without taking their money.
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg mx-6">
        <h2 className="text-3xl font-bold">Ready to Start Driving?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Join the Waste Driver network and earn more with AI‑optimized routes.
        </p>

        <a
          href="/signup"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-emerald-700 font-semibold shadow hover:bg-slate-100 transition"
        >
          Become a Driver Partner
        </a>
      </section>

      {/* SMS COMPLIANCE LINK */}
      <p className="text-center text-sm text-slate-500">
        <a href="/sms-driver" className="text-emerald-700 hover:underline">
          Driver SMS Messaging Policy
        </a>
      </p>

    </div>
  );
}
