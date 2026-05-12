// components/Header.tsx
"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO — spinning tire */}
        <a href="/" className="flex items-center pr-14">
          <Logo size={54} />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-slate-800">

          {/* Center-justified */}
          <a href="/services" className="hover:text-emerald-600 transition-colors text-center">
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

          {/* Center-justified */}
          <a href="/privacy-policy" className="hover:text-emerald-600 transition-colors text-center">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:text-emerald-600 transition-colors">
            Terms
          </a>

          {/* PHONE NUMBER — spacing tightened */}
          <a
            href="tel:18339992783"
            className="font-bold text-slate-900 hover:text-emerald-600 transition-colors pr-1"
          >
            1‑833‑99‑WASTE
          </a>

          {/* CTA BUTTONS — unified sizing */}
          <div className="flex items-center gap-2">

            <a
              href="/download"
              className="min-w-[120px] text-center rounded-lg px-3 py-2 text-[14px] font-semibold 
                         bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition"
            >
              Download App
            </a>

            <a
              href="/login"
              className="min-w-[120px] text-center rounded-lg px-3 py-2 text-[14px] font-semibold 
                         border border-slate-300 text-slate-700 
                         hover:bg-slate-100 hover:border-slate-400 transition"
            >
              Login
            </a>

            <a
              href="/signup"
              className="min-w-[120px] text-center rounded-lg px-3 py-2 text-[14px] font-semibold 
                         border border-emerald-600 text-emerald-700 
                         hover:bg-emerald-50 transition"
            >
              Create Profile
            </a>

          </div>
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
        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5 text-[15px] font-semibold text-slate-800 shadow-lg">

          <a href="/services" className="block hover:text-emerald-600 transition-colors text-center">
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

          <a href="/privacy-policy" className="block hover:text-emerald-600 transition-colors text-center">
            Privacy Policy
          </a>

          <a href="/terms" className="block hover:text-emerald-600 transition-colors">
            Terms
          </a>

          <a
            href="tel:18339992783"
            className="block font-bold text-slate-900 hover:text-emerald-600 transition-colors"
          >
            1‑833‑99‑WASTE
          </a>

          {/* CTA BUTTONS — Mobile */}
          <a
            href="/download"
            className="block rounded-lg px-4 py-2 text-[14px] font-semibold 
                       bg-emerald-600 text-white shadow hover:bg-emerald-700 transition"
          >
            Download App
          </a>

          <a
            href="/login"
            className="block rounded-lg px-4 py-2 text-[14px] font-semibold 
                       border border-slate-300 text-slate-700 
                       hover:bg-slate-100 transition"
          >
            Login
          </a>

          <a
            href="/signup"
            className="block rounded-lg px-4 py-2 text-[14px] font-semibold 
                       border border-emerald-600 text-emerald-700 
                       hover:bg-emerald-50 transition"
          >
            Create Profile
          </a>
        </div>
      )}
    </header>
  );
}


