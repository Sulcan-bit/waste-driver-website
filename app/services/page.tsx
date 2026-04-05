import { CanadaMap } from "@/components/CanadaMap";

export default function ServicesPage() {
  return (
    <div className="space-y-20">

      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Services & Pricing</h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Waste Driver uses an AI‑enhanced marketplace model that lowers User costs by 30–40%
          while protecting Driver revenue. Users receive quotes before accepting jobs, and
          Drivers benefit from efficient routing and increased job density.
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

      {/* How Pricing Works */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          How Pricing Works
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver’s pricing is simple, transparent, and based on real Driver quotes.
          No hidden fees, no inflated rates — Users only pay what it actually costs.
        </p>

        <ol className="mt-12 space-y-8 max-w-2xl mx-auto text-slate-700">

          <li>
            <p className="text-xl font-semibold text-slate-900">1. Upload Photos</p>
            <p className="mt-1">Users upload photos of the items they need removed.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">2. Receive Driver Quotes</p>
            <p className="mt-1">Independent Drivers review the photos and send quotes directly to the User.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">3. Choose the Best Quote</p>
            <p className="mt-1">Users select the quote that fits their budget and timing.</p>
          </li>

          <li>
            <p className="text-xl font-semibold text-slate-900">4. Responsible Disposal</p>
            <p className="mt-1">
              Driver routes are tracked to confirm arrival at the landfill or recycling facility.
            </p>
          </li>

        </ol>
      </section>

      {/* Services Offered */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          What Our Drivers Handle
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver supports a wide range of residential and small commercial waste categories.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Residential Junk</h3>
            <p className="mt-3 text-slate-600">
              Furniture, appliances, boxes, mattresses, electronics, renovation debris,
              garage cleanouts, and general household clutter.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Yard Waste</h3>
            <p className="mt-3 text-slate-600">
              Branches, leaves, trimmings, shrubs, storm debris, and outdoor materials.
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
              Every job includes CO₂e savings, anti‑dumping verification, and confirmed disposal.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing Breakdown */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Transparent, Fair Pricing
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          You only pay for what it actually costs. No hidden fees, no inflated rates.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Landfill Tipping Fees</h3>
            <p className="mt-3 text-slate-600">
              Users pay the exact disposal fee charged by the landfill — no markup.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Vehicle & Fuel Fee</h3>
            <p className="mt-3 text-slate-600">
              A standardized regional fee based on the Driver’s vehicle type and fuel cost.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Driver Time</h3>
            <p className="mt-3 text-slate-600">
              A simple, flat fee for the Driver’s time loading and transporting your waste.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm md:col-span-3">
            <h3 className="text-xl font-semibold text-slate-900">Waste Driver Platform Fee</h3>
            <p className="mt-3 text-slate-600">
              A small service charge that supports the platform and helps reduce emissions
              by optimizing Driver‑to‑User connections.
            </p>
          </div>

        </div>
      </section>

      {/* North America Map Section */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Our North American Network
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver operates across Canada and is expanding across North America.
          Calgary serves as our headquarters and primary operations hub.
        </p>

        <div className="mt-10">
          <CanadaMap />
        </div>

        <p className="mt-6 text-center text-slate-700">
          Major cities include Calgary (HQ), Edmonton, Vancouver, Kelowna, Winnipeg, Toronto,
          Saskatoon, Regina, Ottawa, Hamilton, Montreal, and Quebec City.
        </p>
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