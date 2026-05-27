// app/services/page.tsx
import Image from "next/image";
import { CanadaMap } from "@/components/CanadaMap";

export default function ServicesPage() {
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
              Services & Pricing
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">
              Waste Driver uses an AI‑enhanced marketplace model that lowers User costs by 30–40%
              while protecting Driver revenue. Users receive quotes before accepting jobs, and
              Drivers benefit from efficient routing and increased job density.
            </p>

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
          </div>

          {/* RIGHT IMAGE — New Waste Driver truck */}
          <div className="relative h-80 w-full md:h-[480px]">
            <Image
              src="/images/WasteDriver_EndDumpTrailer4.jfif"
              alt="Waste Driver truck with end dump trailer"
              fill
              className="rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
              priority
            />
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* HOW PRICING WORKS — Premium List                                       */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          How Pricing Works
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Waste Driver’s pricing is simple, transparent, and based on real Driver quotes.
          No hidden fees, no inflated rates — Users only pay what it actually costs.
        </p>

        <ol className="mt-16 space-y-10 text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
          <li>
            <p className="text-2xl font-semibold text-slate-900">1. Upload Photos</p>
            <p className="mt-2">Users upload photos of the items they need removed.</p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">2. Receive Driver Quotes</p>
            <p className="mt-2">
              Independent Drivers review the photos and send quotes directly to the User.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">3. Choose the Best Quote</p>
            <p className="mt-2">
              Users select the quote that fits their budget and timing.
            </p>
          </li>

          <li>
            <p className="text-2xl font-semibold text-slate-900">4. Responsible Disposal</p>
            <p className="mt-2">
              Driver routes are tracked to confirm arrival at the landfill or recycling facility.
            </p>
          </li>
        </ol>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* SERVICES OFFERED — Premium Cards                                       */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          What Our Drivers Handle
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Waste Driver supports a wide range of residential and small commercial waste categories.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Residential Junk</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Furniture, appliances, boxes, mattresses, electronics, renovation debris,
              garage cleanouts, and general household clutter.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Yard Waste</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Branches, leaves, trimmings, shrubs, storm debris, and outdoor materials.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Small Commercial Loads</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Office cleanouts, retail waste, small business junk, light construction debris,
              house construction waste, and renovation waste.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Eco‑Friendly Disposal</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Every job includes CO₂e savings, anti‑dumping verification, and confirmed disposal.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* PRICING BREAKDOWN — Premium Cards                                      */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          Transparent, Fair Pricing
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          You only pay for what it actually costs. No hidden fees, no inflated rates.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Landfill Tipping Fees</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Users pay the exact disposal fee charged by the landfill — no markup.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Vehicle & Fuel Fee</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              A standardized regional fee based on the Driver’s vehicle type and fuel cost.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5">
            <h3 className="text-2xl font-semibold text-slate-900">Driver Time</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              A simple, flat fee for the Driver’s time loading and transporting your waste.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition ring-1 ring-black/5 md:col-span-3">
            <h3 className="text-2xl font-semibold text-slate-900">Waste Driver Platform Fee</h3>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              A small service charge that supports the platform and helps reduce emissions
              by optimizing Driver‑to‑User connections.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* NETWORK MAP — Premium Layout                                           */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-5xl font-bold text-slate-900 text-center">
          Our North American Network
        </h2>

        <p className="mt-6 text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Waste Driver operates across Canada and is expanding across North America.
          Calgary serves as our headquarters and primary operations hub.
        </p>

        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-4xl">
            <CanadaMap />
          </div>
        </div>

        <p className="mt-10 text-center text-lg text-slate-700 leading-relaxed">
          Major cities include Calgary (HQ), Edmonton, Vancouver, Kelowna, Winnipeg, Toronto,
          Saskatoon, Regina, Ottawa, Hamilton, Montreal, and Quebec City.
        </p>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CTA — Premium Tech Marketplace                                         */}
      {/* ---------------------------------------------------------------------- */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-20 text-center text-white shadow-xl max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold">Ready to Book a Pickup?</h2>
        <p className="mt-4 text-xl text-emerald-100">
          Fast, clean, affordable waste removal for your home or business.
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
            src="/images/WasteDriver_TruckandTextLogo.jfif"
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
