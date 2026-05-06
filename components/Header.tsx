"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <Logo size={42} />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">

          <a href="/services" className="hover:text-emerald-600 transition-colors">
            Services & Pricing
          </a>

          <a href="/users" className="hover:text-emerald-600 transition-colors">
            Users
          </a>

          <a href="/drivers" className="hover:text-emerald-600 transition-colors">
            Drivers
          </a>

          <a href="/technology" className="hover:text-emerald-600 transition-colors">
            Technology
          </a>

          <a href="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </a>

          {/* PHONE NUMBER */}
          <a
            href="tel:18339992783"
            className="font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
          >
            1‑833‑99‑WASTE
          </a>

          {/* CTA BUTTONS */}
          <a
            href="/download"
            className="rounded-lg bg-emerald-600 px-5 py-2 text-white font-semibold shadow-sm hover:bg-emerald-700 transition"
          >
            Download App
          </a>

          <a href="/login" className="hover:text-emerald-600 transition-colors">
            Login
          </a>

          <a
            href="/signup"
            className="rounded-lg border border-emerald-600 px-5 py-2 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
          >
            Create Profile
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5 text-[15px] font-medium text-slate-700 shadow-lg">

          <a href="/services" className="block hover:text-emerald-600 transition-colors">
            Services & Pricing
          </a>

          <a href="/users" className="block hover:text-emerald-600 transition-colors">
            Users
          </a>

          <a href="/drivers" className="block hover:text-emerald-600 transition-colors">
            Drivers
          </a>

          <a href="/technology" className="block hover:text-emerald-600 transition-colors">
            Technology
          </a>

          <a href="/contact" className="block hover:text-emerald-600 transition-colors">
            Contact
          </a>

          <a
            href="tel:18339992783"
            className="block font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
          >
            1‑833‑99‑WASTE
          </a>

          <a
            href="/download"
            className="block rounded-lg bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700 transition"
          >
            Download App
          </a>

          <a href="/login" className="block hover:text-emerald-600 transition-colors">
            Login
          </a>

          <a
            href="/signup"
            className="block rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
          >
            Create Profile
          </a>
        </div>
      )}
    </header>
  );
}
