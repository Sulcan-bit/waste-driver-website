export default function UsersPage() {
  return (
    <div className="space-y-28">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-6">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl leading-tight">
          Fast, Affordable Junk Removal — Powered by AI
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Waste Driver connects Users with verified Independent Drivers for the lowest cost,
          fast, safe, reliable, and accountable curbside or alley pickup service.
        </p>

        <p className="mt-4 max-w-2xl text-slate-700">
          Our marketplace ensures proper disposal, transparent pricing, and a trusted experience
          backed by photos and route verification.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href="/download"
            className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
          >
            Download the App
          </a>

          <a
            href="/signup"
            className="rounded-xl border border-emerald-600 px-8 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
          >
            Create Profile
          </a>
        </div>
      </section>

      {/* WHY USERS TRUST WASTE DRIVER */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Why Users Trust Waste Driver
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver is built for safety, transparency, and accountability — giving Users a
          trusted alternative to random trucks or unverified junk haulers.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Verified Drivers Only</h3>
            <p className="mt-2 text-slate-600">
              Every Driver is vetted — license, insurance, registration, and identity verified
              before joining the marketplace.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Photos at Every Stage</h3>
            <p className="mt-2 text-slate-600">
              Photos are taken at Quote, Arrival, and Completion — stored securely for
              transparency and dispute protection.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Address Protected</h3>
            <p className="mt-2 text-slate-600">
              Drivers never receive your pickup address until you accept their quote and they
              start the job — ensuring privacy and safety.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Proper Disposal Guaranteed</h3>
            <p className="mt-2 text-slate-600">
              Driver routes are tracked to confirm arrival at approved landfill and recycling
              facilities — no illegal dumping.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Transparent Pricing</h3>
            <p className="mt-2 text-slate-600">
              You see the maximum price before accepting a quote. No hidden fees. No surprises.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">You’re Never Obligated</h3>
            <p className="mt-2 text-slate-600">
              Reject any quote and wait for another Driver. Choose the best price and timing
              for your needs.
            </p>
          </div>

        </div>
      </section>

      {/* WHY USERS CHOOSE WASTE DRIVER (ORIGINAL SECTION) */}
      <section className="px-6">
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

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">How It Works</h2>

        <ol className="mt-10 space-y-8 max-w-2xl mx-auto text-slate-700">

          <li>
            <p className="text-xl font-semibold text-slate-900">1. Snap a Photo</p>
            <p className="mt-1">Upload photos of what you need removed.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">2. Receive 1 or More Driver Quotes</p>
            <p className="mt-1">
              Drivers review your photos and send quotes directly to your phone.
            </p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">3. Accept a Quote & Book the Service</p>
            <p className="mt-1">
              Choose the best quote and confirm instantly. You can reject any quote and wait
              for another Driver.
            </p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">4. Responsible Disposal</p>
            <p className="mt-1">
              Driver routes are tracked to confirm arrival at approved landfill or recycling
              facilities. Photos are taken at Quote, Arrival, and Completion.
            </p>
          </li>

        </ol>
      </section>

      {/* WHAT WE TAKE (UNCHANGED) */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">What We Take</h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver supports a wide range of residential waste categories.
        </p>

        {/* FREE ITEMS */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-slate-900">Free Items</h3>
          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
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
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-slate-900">Charge Items</h3>
          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
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
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-slate-900">Not Accepted</h3>
          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
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

      {/* MARKETPLACE ADVANTAGE */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Marketplace Advantage
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s independent‑partner and AI‑enhanced routing model lowers User costs by
          30–40% while keeping Driver revenue intact. It’s easier and more trustworthy than
          classifieds or random trucks — and positions Waste Driver as the marketplace alternative
          to expensive branded junk haulers.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver connects verified Independent Drivers with Users through an AI‑enhanced
          data platform — ensuring safety, transparency, and responsible disposal.
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg mx-6">
        <h2 className="text-3xl font-bold">Ready to Book Your Pickup?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Fast, affordable, environmentally responsible junk removal.
        </p>

        <a
          href="/download"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-emerald-700 font-semibold shadow hover:bg-slate-100 transition"
        >
          Download the App
        </a>
      </section>

      {/* SMS COMPLIANCE LINK */}
      <p className="text-center text-sm text-slate-500">
        <a href="/sms-user" className="text-emerald-700 hover:underline">
          User SMS Messaging Policy
        </a>
      </p>

    </div>
  );
}
