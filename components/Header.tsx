"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="/" className="flex items-center">
          <Logo size={40} />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/services" className="hover:text-emerald-600">Services & Pricing</a>
          <a href="/users" className="hover:text-emerald-600">Users</a>
          <a href="/drivers" className="hover:text-emerald-600">Drivers</a>
          <a href="/technology" className="hover:text-emerald-600">Technology</a>
          <a href="/contact" className="hover:text-emerald-600">Contact</a>

          <span className="text-slate-700 font-semibold">1‑8‑WD‑875‑4000</span>

          <a href="/download" className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
            Download App
          </a>

          <a href="/login" className="hover:text-emerald-600">Login</a>

          <a href="/signup" className="rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
            Create Profile
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-slate-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm font-medium">
          <a href="/services" className="block hover:text-emerald-600">Services & Pricing</a>
          <a href="/users" className="block hover:text-emerald-600">Users</a>
          <a href="/drivers" className="block hover:text-emerald-600">Drivers</a>
          <a href="/technology" className="block hover:text-emerald-600">Technology</a>
          <a href="/contact" className="block hover:text-emerald-600">Contact</a>

          <span className="block text-slate-700 font-semibold">1‑8‑WD‑875‑4000</span>

          <a href="/download" className="block rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
            Download App
          </a>

          <a href="/login" className="block hover:text-emerald-600">Login</a>

          <a href="/signup" className="block rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
            Create Profile
          </a>
        </div>
      )}
    </header>
  );
}