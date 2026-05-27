// app/technology/page.tsx

import Image from "next/image";
import { CanadaMap } from "@/components/CanadaMap";

export default function TechnologyPage() {
  return (
    <div className="space-y-24">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION — Premium Tech Marketplace                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Atmospheric Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:items-center">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl leading-tight">
              AI‑Enhanced Routing & Marketplace Technology
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Waste Driver is an environmental and transportation technology platform company that uses AI 
              to lower the cost of junk and waste transportation while maintaining or increasing profitability 
              for Independent Drivers.
            </p>
          </div>

          {/* RIGHT IMAGE — New Waste Driver truck */}
          <div className="relative h-80 w-full md:h-[420px]">
            <Image
              src="/images/WasteDriver_EndDumpTrailer2.jfif"
              alt="Waste Driver truck with end dump trailer"
              fill
              className="rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
              priority
            />
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* NETWORK MAP                                                            */}
      {/* ---------------------------------------------------------------------- */}
      <section>
        <div className="max-w-5xl mx-auto mt-10">
          <CanadaMap />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 text-center mt-16">
          North American Network
        </h2>

        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Waste Driver operates across North America, with a focus on Canadian cities including Calgary,
          Edmonton, Vancouver, Kelowna, Winnipeg, Toronto, Saskatoon, Regina, Ottawa, Hamilton,
          Montreal, and Quebec City.
        </p>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ROUTING EFFICIENCY                                                     */}
      {/* ---------------------------------------------------------------------- */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Routing Efficiency
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-700 leading-relaxed">
          Waste Driver provides efficient routing that results in routes 30–40% more efficient than 
          1‑800‑type junk removal companies. This reduces emissions, lowers User costs, and increases 
          Driver efficiency — allowing Drivers to complete more jobs per hour.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700 leading-relaxed">
          Our routing engine is built on principles derived from the well‑known 
          <strong> Travelling Salesman Problem (TSP)</strong> — a classic optimization challenge where 
          the goal is to determine the shortest possible route connecting multiple stops. Historically, 
          TSP was extremely difficult to solve at scale, but modern AI compute allows Waste Driver to 
          generate near‑optimal routes instantly. This results in tighter route clustering, reduced 
          deadhead time, and significantly more efficient job sequencing for Independent Drivers.
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

      {/* ---------------------------------------------------------------------- */}
      {/* MARKETPLACE MODEL                                                      */}
      {/* ---------------------------------------------------------------------- */}
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

      {/* ---------------------------------------------------------------------- */}
      {/* ENVIRONMENTAL TECHNOLOGY                                               */}
      {/* ---------------------------------------------------------------------- */}
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

      {/* ---------------------------------------------------------------------- */}
      {/* CTA SECTION — Premium Tech Marketplace                                 */}
      {/* ---------------------------------------------------------------------- */}
      <section className="rounded-3xl bg-emerald-600 px-10 py-16 text-center text-white shadow-lg max-w-4xl mx-auto">
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
