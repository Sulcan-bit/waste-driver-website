// app/page.tsx
export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          Residential Waste Removal Made Simple
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Waste Drivers keep your home and community decluttered and clean with
          economical, fast, safe, reliable, and accountable curbside or alley
          pickup service.
        </p>

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

        {/* Taglines */}
        <div className="mt-6 space-y-2 text-slate-700 max-w-xl">
          <p className="italic">
            “Any time you clean out your garage, make sure you order a Waste Driver.”
          </p>
          <p className="italic">
            “All Waste Drivers provide their identification and information to ensure a safe service for Users.”
          </p>
        </div>
      </section>

      {/* Residential Image Banner */}
      <section className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80"
          alt="Clean residential neighborhood"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Services Preview */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          What Our Drivers Handle
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Drivers keep your home and community decluttered and clean with
          economical, fast, safe, reliable, and accountable curbside or alley
          pickup service.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Household Junk</h3>
            <p className="mt-2 text-slate-600">
              Old furniture, appliances, boxes, and general clutter removed quickly.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Yard Waste</h3>
            <p className="mt-2 text-slate-600">
              Branches, leaves, soil, and outdoor debris — we take care of it.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Eco‑Friendly Disposal</h3>
            <p className="mt-2 text-slate-600">
              We prioritize recycling and responsible disposal to protect your community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Clean Up Your Space?</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Book a pickup today and keep your home and neighbourhood looking great.
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
