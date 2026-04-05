"use client";

import { useMemo } from "react";

export default function HomePage() {
  // Taglines to rotate randomly
  const taglines = [
    "Waste Driver — Junk Removal in Minutes.",
    "Your Truck + Our App = A More Efficient Marketplace.",
    "Become a Waste Driver Partner.",
    "Waste Driver — the Uber for waste drivers.",
    "We’re looking for Independent Drivers as partners."
  ];

  const randomTagline = useMemo(() => {
    return taglines[Math.floor(Math.random() * taglines.length)];
  }, []);

  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="relative w-full rounded-3xl overflow-hidden shadow-lg">
        <img
          src="/images/hero-truck.jpg"
          alt="Independent driver truck"
          className="h-[420px] w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            AI‑Powered Junk & Waste Transportation
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-200 drop-shadow">
            Fast, safe, reliable curbside pickup from verified Independent Drivers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
              href="/users"
              className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700"
            >
              Book a Pickup
            </a>

            <a
              href="/download"
              className="rounded-xl border border-white px-8 py-3 text-white font-semibold hover:bg-white/20"
            >
              Download the App
            </a>
          </div>

          {/* Random tagline */}
          <p className="mt-6 text-slate-200 text-lg italic drop-shadow">
            {randomTagline}
          </p>
        </div>
      </section>

      {/* Counters */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
        <div>
          <p className="text-sm text-slate-500">CO₂e Saved</p>
          <p className="text-3xl font-bold text-slate-900">XX,XXX kg</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Loads Moved</p>
          <p className="text-3xl font-bold text-slate-900">X,XXX+</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Active Drivers</p>
          <p className="text-3xl font-bold text-slate-900">XXX+</p>
        </div>
      </section>

      {/* Curbside Waste Banner */}
      <section className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg">
        <img
          src="/images/hero-curbside.jpg"
          alt="Curbside waste ready for pickup"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Why Users Choose Waste Driver */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Why Users Choose Waste Driver
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Our AI‑enhanced marketplace lowers User costs by 30–40% while protecting Driver revenue.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">30–40% Lower Cost</h3>
            <p className="mt-2 text-slate-600">
              Lower than 1‑800 junk removal companies — without reducing Driver revenue.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Fast Pickup</h3>
            <p className="mt-2 text-slate-600">
              Real‑time matching with verified Independent Drivers.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Quotes Before Accepting Jobs</h3>
            <p className="mt-2 text-slate-600">
              Users receive quotes upfront — no hidden fees.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Eco‑Friendly Disposal</h3>
            <p className="mt-2 text-slate-600">
              Every job includes CO₂e savings and anti‑dumping verification.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Trusted Independent Drivers</h3>
            <p className="mt-2 text-slate-600">
              Verified, rated, and supported by Waste Driver’s compliance systems.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">How It Works</h2>

        <ol className="mt-10 space-y-8 max-w-2xl mx-auto text-slate-700">

          <li>
            <p className="text-xl font-semibold text-slate-900">1. Snap a Photo</p>
            <p className="mt-1">Upload photos of what you need removed.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">2. Receive Driver Quotes</p>
            <p className="mt-1">Drivers review your photos and send quotes directly to your phone.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">3. Accept a Quote & Book the Service</p>
            <p className="mt-1">Choose the best quote and confirm the pickup instantly.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">4. Responsible Disposal</p>
            <p className="mt-1">
              Driver routes are tracked to confirm arrival at the landfill or recycling facility.
            </p>
          </li>

        </ol>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Clean Up Your Space?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Book a pickup today and keep your home and neighbourhood looking great.
        </p>

        <a
          href="/users"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-emerald-700 font-semibold shadow hover:bg-slate-100"
        >
          Book a Pickup
        </a>
      </section>

    </div>
  );
}
