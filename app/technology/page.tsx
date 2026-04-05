// app/technology/page.tsx
export default function TechnologyPage() {
  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          AI‑Enhanced Routing & Marketplace Technology
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Waste Driver is an environmental and transportation technology company that uses AI to lower
          the cost of junk and waste transportation while maintaining or increasing profitability for
          Independent Drivers.
        </p>
      </section>

      {/* Network Map Placeholder */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          North American Network
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver operates across North America, with a focus on Canadian cities including Calgary,
          Edmonton, Vancouver, Kelowna, Winnipeg, Toronto, Saskatoon, Regina, Ottawa, Hamilton,
          Montreal, and Quebec City.
        </p>

        <div className="mt-10 h-64 w-full rounded-3xl bg-slate-200 flex items-center justify-center text-slate-500">
          {/* Placeholder for future map component */}
          <span>Map Component Coming Soon</span>
        </div>
      </section>

      {/* Routing Efficiency */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Routing Efficiency
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver provides efficient routing that results in routes 30–40% more efficient than
          1‑800‑type junk removal companies. This reduces emissions, lowers User costs, and increases
          Driver efficiency — allowing Drivers to complete more jobs per hour.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">AI‑Optimized Routes</h3>
            <p className="mt-2 text-slate-600">
              Our routing engine reduces deadhead time and increases route density for Drivers.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Lower User Costs</h3>
            <p className="mt-2 text-slate-600">
              AI‑enhanced routing lowers User costs by 30–40% without reducing Driver revenue.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Higher Driver Earnings</h3>
            <p className="mt-2 text-slate-600">
              More efficient routes mean more completed jobs and higher daily earnings.
            </p>
          </div>

        </div>
      </section>

      {/* Marketplace Model */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Marketplace Model
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver is a marketplace that connects Users with Independent Drivers for an all‑in‑one
          solution. Our independent‑partner and AI‑enhanced routing model lowers User costs by up to
          30–40%, while making the experience easier and more trustworthy than Kijiji.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700">
          Waste Driver’s fundamental model is to connect secured and rated Independent Drivers with Users
          through an AI‑enhanced data platform.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Verified Drivers</h3>
            <p className="mt-2 text-slate-600">
              All Drivers are verified, rated, and supported by Waste Driver’s compliance systems.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Secure Platform</h3>
            <p className="mt-2 text-slate-600">
              Users and Drivers interact through a secure, structured, and transparent platform.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">Faster Matching</h3>
            <p className="mt-2 text-slate-600">
              Real‑time matching connects Users with the nearest available Driver.
            </p>
          </div>

        </div>
      </section>

      {/* Environmental Technology */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Environmental Technology
        </h2>

        <ul className="mt-10 space-y-4 max-w-2xl mx-auto text-slate-700 text-lg">
          <li>• CO₂e savings on every job</li>
          <li>• Anti‑dumping safety</li>
          <li>• Verified disposal</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold">Technology That Works for Everyone</h2>
        <p className="mt-3 text-lg text-emerald-100">
          Lower costs for Users. Higher efficiency for Drivers. Better outcomes for communities.
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