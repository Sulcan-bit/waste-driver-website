// app/services/page.tsx
export default function ServicesPage() {
  return (
    <div className="space-y-20">

      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Services & Pricing</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Waste Driver connects homeowners and businesses with local drivers for fast,
          clean, and eco‑friendly waste removal. Our model keeps costs low, reduces
          emissions, and makes small‑scale disposal simple and affordable.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/download"
            className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
          >
            Download the App
          </a>

          <a
            href="/signup"
            className="rounded-xl border border-emerald-600 px-6 py-3 text-emerald-700 font-semibold hover:bg-emerald-50"
          >
            Create Profile
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          What Our Drivers Handle
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Drivers keep your home and community decluttered and clean with
          economical, fast, safe, reliable, and accountable curbside or alley pickup service.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Residential Junk</h3>
            <p className="mt-3 text-slate-600">
              Old furniture, appliances, boxes, mattresses, electronics, renovation debris,
              garage cleanouts, and general household clutter.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Yard Waste</h3>
            <p className="mt-3 text-slate-600">
              Branches, leaves, soil, sod, shrubs, storm debris, and outdoor materials.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Small Commercial Loads</h3>
            <p className="mt-3 text-slate-600">
              Office cleanouts, retail waste, small business junk, and light construction debris.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Eco‑Friendly Disposal</h3>
            <p className="mt-3 text-slate-600">
              Our driver‑to‑user model reduces unnecessary trips and lowers greenhouse gas emissions.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">Transparent, Fair Pricing</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          You only pay for what it actually costs. No hidden fees, no inflated rates.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Landfill Tipping Fees</h3>
            <p className="mt-3 text-slate-600">
              You pay the exact disposal fee charged by the landfill. No markup.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Vehicle & Fuel Fee</h3>
            <p className="mt-3 text-slate-600">
              A standardized regional fee based on the driver’s vehicle type and fuel cost.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Driver Time</h3>
            <p className="mt-3 text-slate-600">
              A simple, flat fee for the driver’s time loading and transporting your waste.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm md:col-span-3">
            <h3 className="text-xl font-semibold text-slate-900">Waste Driver Platform Fee</h3>
            <p className="mt-3 text-slate-600">
              A small service charge that supports the platform and helps reduce emissions
              by optimizing driver‑to‑user connections.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Book a Pickup?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Fast, clean, affordable waste removal for your home or business.
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