import { Logo } from "@/components/Logo";

export default function DriversPage() {
  return (
    <div className="space-y-24">

      {/* Header Logo */}
      <header className="flex justify-center pt-6">
        <a href="/">
          <Logo size={48} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          Earn More With AI‑Optimized Routes
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Become a Waste Driver Partner — we bring the jobs to you without lowering your revenue.
          Our AI‑enhanced routing model increases efficiency, reduces deadhead time, and helps you
          complete more jobs per hour.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href="/signup"
            className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700"
          >
            Become a Driver Partner
          </a>

          <a
            href="/download"
            className="rounded-xl border border-emerald-600 px-8 py-3 text-emerald-700 font-semibold hover:bg-emerald-50"
          >
            Download the App
          </a>
        </div>

        {/* Taglines */}
        <div className="mt-6 space-y-2 text-slate-700 max-w-xl">
          <p>Your Truck + Our App = A More Efficient Marketplace for Users and Independent Drivers.</p>
          <p>Waste Driver — the Uber for waste drivers.</p>
          <p>We’re looking for Independent Drivers as partners.</p>
        </div>
      </section>

      {/* Why Drive With Waste Driver */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Why Drive With Waste Driver
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver protects your revenue while increasing your efficiency through AI‑enhanced routing.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Protect Your Revenue</h3>
            <p className="mt-2 text-slate-600">
              Our model lowers User costs without cutting Driver rates — you keep your earnings.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">More Efficient Routes</h3>
            <p className="mt-2 text-slate-600">
              AI‑enhanced routing increases route density and reduces deadhead time, helping you complete more jobs.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">No Haggling</h3>
            <p className="mt-2 text-slate-600">
              No endless messaging or bidding wars — Users receive your quote and choose instantly.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Transparent Payouts</h3>
            <p className="mt-2 text-slate-600">
              Clear, trackable earnings for every completed job — no surprises.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">More Jobs, Less Downtime</h3>
            <p className="mt-2 text-slate-600">
              Our marketplace brings Users directly to you, reducing idle time and increasing daily earnings.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works for Drivers */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          How It Works for Drivers
        </h2>

        <ol className="mt-10 space-y-8 max-w-2xl mx-auto text-slate-700">

          <li>
            <p className="text-xl font-semibold text-slate-900">1. Create a Driver Profile</p>
            <p className="mt-1">Sign up, verify your information, and set up your vehicle details.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">2. Receive Job Requests</p>
            <p className="mt-1">Get notified when Users in your area need junk removal.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">3. Send Quotes</p>
            <p className="mt-1">Review User photos, send your quote, and let Users choose.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">4. Complete the Job & Dispose Responsibly</p>
            <p className="mt-1">
              Perform the pickup and dispose at approved facilities — disposal is verified for safety and compliance.
            </p>
          </li>

        </ol>
      </section>

      {/* Marketplace Advantage */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Marketplace Advantage
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s independent‑partner and AI‑enhanced routing model lowers User costs by 30–40%,
          while keeping Driver revenue intact. This positions Waste Driver as the marketplace alternative
          to expensive branded junk haulers.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s fundamental model is to connect secured and rated Independent Drivers with Users
          through an AI‑enhanced data platform.
        </p>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Start Driving?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Join the Waste Driver network and earn more with AI‑optimized routes.
        </p>

        <a
          href="/signup"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-emerald-700 font-semibold shadow hover:bg-slate-100"
        >
          Become a Driver Partner
        </a>
      </section>

    </div>
  );
}