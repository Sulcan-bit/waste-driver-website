// app/page.tsx
import Image from "next/image";
import { CanadaMap } from "@/components/CanadaMap";

export default function HomePage() {
  return (
    <div className="space-y-48">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION — Premium Tech Marketplace (Stripe‑level)                 */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Atmospheric Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-40">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                AI‑Powered Junk & Waste Transportation
              </h1>

              <p className="mt-8 text-2xl text-slate-600 max-w-xl leading-relaxed">
                Fast, safe, reliable curbside pickup from verified Independent Drivers.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/download"
                  className="rounded-xl bg-emerald-600 px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
                >
                  Download the App
                </a>
              </div>

              <p className="mt-14 text-2xl font-semibold text-slate-900 max-w-xl leading-relaxed">
                A more efficient alternative to big junk haulers — lower User costs without reducing Independent Driver earnings.
              </p>
            </div>

            {/* RIGHT IMAGE — Updated with new Waste Driver truck */}
            <div className="relative h-96 w-full md:h-[500px]">
              <Image
                src="/images/WasteDriver_EndDumpTrailer1.jpg"
                alt="Waste Driver white pickup truck with black end dump trailer"
                fill
                className="rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* METRICS — Premium Tech Marketplace                                    */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">

          <div className="space-y-3">
            <h3 className="text-6xl font-bold text-emerald-600">XX,XXX kg</h3>
            <p className="text-slate-600 text-lg">CO₂e Saved</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-6xl font-bold text-emerald-600">X,XXX+</h3>
            <p className="text-slate-600 text-lg">Loads Moved</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-6xl font-bold text-emerald-600">XXX+</h3>
            <p className="text-slate-600 text-lg">Active Drivers</p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* WHY USERS CHOOSE — Premium Cards                                      */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold text-slate-900">Why Users Choose Waste Driver</h2>

        <p className="mt-8 max-w-3xl text-xl text-slate-600 leading-relaxed">
          Our AI‑enhanced marketplace lowers User costs by 30–40% while protecting Driver revenue.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">30–40% Lower Cost</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Lower than 1‑800 junk removal companies — without reducing Driver revenue.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Fast Pickup</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Real‑time matching with verified Independent Drivers.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Quotes Before Accepting Jobs</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Users receive quotes upfront — no hidden fees.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CANADIAN NETWORK — Premium Layout                                     */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold text-slate-900">Our Canadian Network</h2>

        <p className="mt-8 max-w-3xl text-xl text-slate-600 leading-relaxed">
          Waste Driver operates across Canada with verified Independent Drivers in major cities.
        </p>

        <div className="mt-16 w-full overflow-auto">
          <div className="min-w-[900px]">
            <CanadaMap />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CITY LIST — Clean, Modern                                             */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h3 className="text-3xl font-semibold text-slate-900 mb-8">Cities Served</h3>

        <ul className="grid grid-cols-2 gap-5 text-slate-700 md:grid-cols-3 text-xl">
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

      {/* ---------------------------------------------------------------------- */}
      {/* HOW IT WORKS — Premium Card Grid                                      */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-40">
        <h2 className="text-5xl font-bold text-slate-900">How It Works</h2>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">1. Snap a Photo</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Upload photos of what you need removed.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">2. Receive Driver Quotes</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Drivers review your photos and send quotes directly to your phone.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">3. Accept a Quote & Book</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Choose the best quote and confirm instantly.  
              You can reject any quote and wait for another Driver.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">4. Responsible Disposal</h3>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Driver routes are tracked to confirm arrival at approved landfill or recycling facilities.  
              Photos are taken at Quote, Arrival, and Completion for transparency and dispute protection.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CTA — Premium Tech Marketplace                                        */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-40 text-center">
        <h2 className="text-5xl font-bold text-slate-900">Ready to Clean Up Your Space?</h2>

        <p className="mt-8 text-xl text-slate-600 leading-relaxed">
          Download the app to request pickups, receive quotes, and manage your profile.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <a
            href="/download"
            className="rounded-xl bg-emerald-600 px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
          >
            Download the App
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-emerald-600 px-8 py-4 text-emerald-700 text-lg font-semibold hover:bg-emerald-50 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Footer Logo — New */}
        <div className="mt-20 flex justify-center">
          <Image
            src="/images/WasteDriver_TruckandTextLogo.jpg"
            alt="Waste Driver truck and text logo"
            width={260}
            height={120}
            className="opacity-90"
          />
        </div>
      </section>

    </div>
  );
}

