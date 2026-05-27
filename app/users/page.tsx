// app/users/page.tsx
import Image from "next/image";

export default function UsersPage() {
  return (
    <div className="space-y-48">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION — Premium Tech Marketplace                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Atmospheric Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:items-center">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Fast, Affordable Junk Removal — Powered by AI
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">
              Waste Driver connects Users with verified Independent Drivers for the lowest cost,
              fast, safe, reliable, and accountable curbside or alley pickup service.
            </p>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-3xl">
              Our marketplace ensures proper disposal, transparent pricing, and a trusted experience
              backed by photos and route verification.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/download"
                className="rounded-xl bg-emerald-600 px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
              >
                Download the App
              </a>

              <a
                href="/signup"
                className="rounded-xl border border-emerald-600 px-8 py-4 text-emerald-700 text-lg font-semibold hover:bg-emerald-50 transition"
              >
                Create Profile
              </a>
            </div>

            {/* SMS COMPLIANCE BUTTON */}
            <div className="mt-6">
              <a
                href="/sms-compliance"
                className="inline-block rounded-xl border border-slate-300 px-6 py-3 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition"
              >
                User SMS Messaging Policy
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE — New Waste Driver truck */}
          <div className="relative h-80 w-full md:h-[480px]">
            <Image
              src="/images/WasteDriver_EndDumpTrailer3.jpg"
              alt="Waste Driver truck with end dump trailer"
              fill
              className="rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
              priority
            />
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* WHY USERS TRUST WASTE DRIVER — Premium Cards                           */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          Why Users Trust Waste Driver
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Waste Driver is built for safety, transparency, and accountability — giving Users a
          trusted alternative to random trucks or unverified junk haulers.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Verified Drivers Only</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Every Driver is vetted — license, insurance, registration, and identity verified
              before joining the marketplace.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Photos at Every Stage</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Photos are taken at Quote, Arrival, and Completion — stored securely for
              transparency and dispute protection.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Address Protected</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Drivers never receive your pickup address until you accept their quote and they
              start the job — ensuring privacy and safety.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Proper Disposal Guaranteed</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Driver routes are tracked to confirm arrival at approved landfill and recycling
              facilities — no illegal dumping.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Transparent Pricing</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              You see the maximum price before accepting a quote. No hidden fees. No surprises.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">You’re Never Obligated</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Reject any quote and wait for another Driver. Choose the best price and timing
              for your needs.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* WHY USERS CHOOSE WASTE DRIVER — Premium Cards                          */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          Why Users Choose Waste Driver
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Our AI‑enhanced marketplace lowers User costs by 30–40% while protecting Driver revenue.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">30–40% Lower Cost</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Lower than 1‑800 junk removal companies — without reducing Driver revenue.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Fast Pickup</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Real‑time matching with verified Independent Drivers.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Quotes Before Accepting Jobs</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Users receive quotes upfront — no hidden fees.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* HOW IT WORKS — Premium List                                           */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">How It Works</h2>

        <ol className="mt-16 space-y-10 text-slate-700 text-lg leading-relaxed">

          <li>
            <p className="text-2xl font-semibold text-slate-900">1. Snap a Photo</p>
            <p className="mt-2">Upload photos of what you need removed.</p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">2. Receive 1 or More Driver Quotes</p>
            <p className="mt-2">
              Drivers review your photos and send quotes directly to your phone.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">3. Accept a Quote & Book the Service</p>
            <p className="mt-2">
              Choose the best quote and confirm instantly. You can reject any quote and wait
              for another Driver.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">4. Responsible Disposal</p>
            <p className="mt-2">
              Driver routes are tracked to confirm arrival at approved landfill or recycling
              facilities. Photos are taken at Quote, Arrival, and Completion.
            </p>
          </li>

        </ol>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* WHAT WE TAKE — Premium Layout                                         */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">What We Take</h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Waste Driver supports a wide range of residential waste categories.
        </p>

        {/* FREE ITEMS */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-slate-900">Free Items</h3>
          <ul className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2 text-lg">
            <li>Passenger vehicle tires</li>
            <li>Household hazardous waste (paint, chemicals, batteries, vapes, etc.)</li>
            <li>Electronics (must have plug or battery)</li>
            <li>Blue Cart recyclables (paper & packaging)</li>
            <li>Packaging foam (no black foam)</li>
            <li>Clothing, shoes, textiles</li>
            <li>Automotive motor oil & oil filters</li>
            <li>Lead‑acid and lithium‑ion batteries</li>
            <li>Propane tanks ≤30 lbs</li>
            <li>Helium tanks</li>
            <li>Fire extinguishers</li>
          </ul>
        </div>

        {/* CHARGE ITEMS */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-slate-900">Charge Items</h3>
          <ul className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2 text-lg">
            <li>Furniture</li>
            <li>Small gas‑powered engines (fuel removed)</li>
            <li>Yard waste (no sod)</li>
            <li>Scrap metal</li>
            <li>Appliances</li>
            <li>Appliances with refrigerant</li>
            <li>Garbage (construction materials, mattresses, sod, bagged garbage)</li>
            <li>Household items</li>
            <li>Bikes</li>
            <li>Drywall (clean, separated)</li>
            <li>Clean wood & pallets (separated)</li>
          </ul>
        </div>

        {/* NOT ACCEPTED */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-slate-900">Not Accepted</h3>
          <ul className="mt-6 grid gap-4 text-slate-700 md:grid-cols-2 text-lg">
            <li>Industrial & commercial waste</li>
            <li>Radioactive waste</li>
            <li>Asbestos waste</li>
            <li>Biomedical waste</li>
            <li>Old drugs & medication</li>
            <li>Broken glass</li>
            <li>EV batteries & e‑mobility batteries</li>
            <li>Explosives</li>
            <li>Cooking oil</li>
            <li>Compressed gas cylinders (argon, nitrogen, oxygen, etc.)</li>
          </ul>
        </div>
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
          30–40% while keeping Driver revenue intact. It’s easier and more trustworthy than
          classifieds or random trucks — and positions Waste Driver as the marketplace alternative
          to expensive branded junk haulers.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-center text-xl text-slate-700 leading-relaxed">
          Waste Driver connects verified Independent Drivers with Users through an AI‑enhanced
          data platform — ensuring safety, transparency, and responsible disposal.
        </p>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CTA SECTION — Premium Tech Marketplace                                 */}
      {/* ---------------------------------------------------------------------- */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-20 text-center text-white shadow-xl mx-6">
        <h2 className="text-4xl font-bold">Ready to Book Your Pickup?</h2>
        <p className="mt-4 text-xl text-emerald-100">
          Fast, affordable, environmentally responsible junk removal.
        </p>

        <a
          href="/download"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 text-emerald-700 text-lg font-semibold shadow hover:bg-slate-100 transition"
        >
          Download the App
        </a>

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


