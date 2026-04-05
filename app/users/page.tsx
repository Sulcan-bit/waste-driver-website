import { Logo } from "@/components/Logo";

export default function UsersPage() {
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
          Fast, Affordable Junk Removal — Powered by AI
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Waste Driver connects Users with verified Independent Drivers for lowest cost,
          fast, safe, reliable, and accountable curbside or alley pickup service.
        </p>

        <p className="mt-4 max-w-2xl text-slate-700">
          Waste Drivers keep your home and community decluttered and clean with economical,
          fast, safe, reliable, and accountable curbside or alley pickup service.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href="/download"
            className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700"
          >
            Download the App
          </a>

          <a
            href="/signup"
            className="rounded-xl border border-emerald-600 px-8 py-3 text-emerald-700 font-semibold hover:bg-emerald-50"
          >
            Create Profile
          </a>
        </div>
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
            <p className="text-xl font-semibold text-slate-900">2. Receive 1 or More Driver Quotes</p>
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

      {/* What We Take */}
      <section>
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

      {/* Marketplace Advantage */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Marketplace Advantage
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s independent‑partner and AI‑enhanced routing model lowers User costs by 30–40%,
          while keeping Driver revenue intact. It’s easier and more trustworthy than Kijiji, and positions
          Waste Driver as the marketplace alternative to expensive branded junk haulers.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s fundamental model is to connect secured and rated Independent Drivers with Users
          via an AI‑enhanced data platform.
        </p>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Book Your Pickup?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Fast, affordable, environmentally responsible junk removal.
        </p>

        <a
          href="/download"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-emerald-700 font-semibold shadow hover:bg-slate-100"
        >
          Download the App
        </a>
      </section>

    </div>
  );
}