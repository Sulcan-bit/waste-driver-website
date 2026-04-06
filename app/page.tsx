import Image from "next/image";
import { CanadaMap } from "@/components/CanadaMap";

export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">

          {/* Left Text */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              AI‑Powered Junk & Waste Transportation
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Fast, safe, reliable curbside pickup from verified Independent Drivers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/download"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
              >
                Download the App
              </a>
            </div>

            {/* NEW TAGLINE */}
            <p className="mt-10 text-xl font-semibold text-slate-900">
              Your success is our success — we grow by helping Independent Drivers earn more with less hassle.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-72 w-full md:h-96">
            <Image
              src="/images/hero-curbside.jpg"
              alt="Curbside waste ready for pickup"
              fill
              className="rounded-2xl object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">

          <div>
            <h3 className="text-3xl font-bold text-emerald-600">XX,XXX kg</h3>
            <p className="mt-2 text-slate-600">CO₂e Saved</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-600">X,XXX+</h3>
            <p className="mt-2 text-slate-600">Loads Moved</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-600">XXX+</h3>
            <p className="mt-2 text-slate-600">Active Drivers</p>
          </div>

        </div>
      </section>

      {/* WHY USERS CHOOSE WASTE DRIVER */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Why Users Choose Waste Driver</h2>

        <p className="mt-4 max-w-3xl text-slate-600">
          Our AI‑enhanced marketplace lowers User costs by 30–40% while protecting Driver revenue.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">30–40% Lower Cost</h3>
            <p className="mt-3 text-slate-600">
              Lower than 1‑800 junk removal companies — without reducing Driver revenue.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Fast Pickup</h3>
            <p className="mt-3 text-slate-600">
              Real‑time matching with verified Independent Drivers.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Quotes Before Accepting Jobs</h3>
            <p className="mt-3 text-slate-600">
              Users receive quotes upfront — no hidden fees.
            </p>
          </div>

        </div>
      </section>

      {/* CANADIAN NETWORK */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-0 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900">Our Canadian Network</h2>

          <p className="mt-4 max-w-3xl text-slate-600">
            Waste Driver operates across Canada with verified Independent Drivers in major cities.
          </p>

          {/* Full‑width mobile map, scrollable + zoomable */}
          <div className="mt-10 w-full overflow-auto touch-pan-y touch-pan-x">
            <div className="min-w-[800px]">
              <CanadaMap />
            </div>
          </div>
        </div>
      </section>

      {/* CITY LIST */}
      <section className="mx-auto max-w-7xl px-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Cities Served</h3>

        <ul className="grid grid-cols-2 gap-3 text-slate-700 md:grid-cols-3">
          <li>Vancouver</li>
          <li>Kelowna</li>
          <li>Edmonton</li>
          <li>Calgary</li>
          <li>Saskatoon</li>
          <li>Regina</li>
          <li>Winnipeg</li>
          <li>Toronto</li>
          <li>Hamilton</li>
          <li>Ottawa</li>
          <li>Montreal</li>
          <li>Quebec City</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">1. Snap a Photo</h3>
            <p className="mt-3 text-slate-600">
              Upload photos of what you need removed.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">2. Receive Driver Quotes</h3>
            <p className="mt-3 text-slate-600">
              Drivers review your photos and send quotes directly to your phone.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">3. Accept a Quote & Book</h3>
            <p className="mt-3 text-slate-600">
              Choose the best quote and confirm the pickup instantly.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">4. Responsible Disposal</h3>
            <p className="mt-3 text-slate-600">
              Driver routes are tracked to confirm arrival at the landfill or recycling facility.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready to Clean Up Your Space?</h2>

        <p className="mt-4 text-slate-600">
          Download the app to request pickups, receive quotes, and manage your profile.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/download"
            className="rounded-lg bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
          >
            Download the App
          </a>

          <a
            href="/contact"
            className="rounded-lg border border-emerald-600 px-6 py-3 text-emerald-700 hover:bg-emerald-50"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
