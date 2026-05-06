import Image from "next/image";
import { CanadaMap } from "@/components/CanadaMap";

export default function HomePage() {
  return (
    <div className="space-y-40">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                AI‑Powered Junk & Waste Transportation
              </h1>

              <p className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed">
                Fast, safe, reliable curbside pickup from verified Independent Drivers.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/download"
                  className="rounded-xl bg-emerald-600 px-7 py-3 text-white font-semibold shadow-lg hover:bg-emerald-700 transition"
                >
                  Download the App
                </a>
              </div>

              <p className="mt-12 text-xl font-semibold text-slate-900 max-w-xl leading-relaxed">
                A more efficient alternative to big junk haulers — lower User costs without reducing Independent Driver earnings.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-80 w-full md:h-[420px]">
              <Image
                src="/images/hero-curbside.jpg"
                alt="Curbside waste ready for pickup"
                fill
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">

          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-emerald-600">XX,XXX kg</h3>
            <p className="text-slate-600">CO₂e Saved</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-emerald-600">X,XXX+</h3>
            <p className="text-slate-600">Loads Moved</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-emerald-600">XXX+</h3>
            <p className="text-slate-600">Active Drivers</p>
          </div>

        </div>
      </section>

      {/* WHY USERS CHOOSE */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">Why Users Choose Waste Driver</h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
          Our AI‑enhanced marketplace lowers User costs by 30–40% while protecting Driver revenue.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">30–40% Lower Cost</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Lower than 1‑800 junk removal companies — without reducing Driver revenue.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">Fast Pickup</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Real‑time matching with verified Independent Drivers.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">Quotes Before Accepting Jobs</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Users receive quotes upfront — no hidden fees.
            </p>
          </div>

        </div>
      </section>

      {/* CANADIAN NETWORK */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">Our Canadian Network</h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
          Waste Driver operates across Canada with verified Independent Drivers in major cities.
        </p>

        <div className="mt-12 w-full overflow-auto">
          <div className="min-w-[800px]">
            <CanadaMap />
          </div>
        </div>
      </section>

      {/* CITY LIST */}
      <section className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Cities Served</h3>

        <ul className="grid grid-cols-2 gap-4 text-slate-700 md:grid-cols-3 text-lg">
          <li><strong>Calgary</strong> (Now Serving)</li>
          <li>Vancouver (Coming Soon)</li>
          <li>Kelowna (Coming Soon)</li>
          <li>Edmonton (Coming Soon)</li>
          <li>Saskatoon (Coming Soon)</li>
          <li>Regina (Coming Soon)</li>
          <li>Winnipeg (Coming Soon)</li>
          <li>Toronto (Coming Soon)</li>
          <li>Hamilton (Coming Soon)</li>
          <li>Ottawa (Coming Soon)</li>
          <li>Montreal (Coming Soon)</li>
          <li>Quebec City (Coming Soon)</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <h2 className="text-4xl font-bold text-slate-900">How It Works</h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">1. Snap a Photo</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Upload photos of what you need removed.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">2. Receive Driver Quotes</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Drivers review your photos and send quotes directly to your phone.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">3. Accept a Quote & Book</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Choose the best quote and confirm instantly.  
              You can reject any quote and wait for another Driver.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-900">4. Responsible Disposal</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Driver routes are tracked to confirm arrival at approved landfill or recycling facilities.  
              Photos are taken at Quote, Arrival, and Completion for transparency and dispute protection.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-32 text-center">
        <h2 className="text-4xl font-bold text-slate-900">Ready to Clean Up Your Space?</h2>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Download the app to request pickups, receive quotes, and manage your profile.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/download"
            className="rounded-xl bg-emerald-600 px-7 py-3 text-white font-semibold shadow-lg hover:bg-emerald-700 transition"
          >
            Download the App
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-emerald-600 px-7 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
