"use client";

import "./globals.css";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export const metadata = {
  title: "Waste Driver Inc. – AI‑Powered Junk & Waste Transportation",
  description:
    "Waste Driver connects Users with verified Independent Drivers for fast, affordable, environmentally responsible junk removal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Header />
        <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ---------------- HEADER ---------------- */

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Logo size={40} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

          <a href="/services" className="hover:text-emerald-600">Services & Pricing</a>
          <a href="/users" className="hover:text-emerald-600">Users</a>
          <a href="/drivers" className="hover:text-emerald-600">Drivers</a>
          <a href="/technology" className="hover:text-emerald-600">Technology</a>
          <a href="/contact" className="hover:text-emerald-600">Contact</a>

          <span className="text-slate-700 font-semibold">1‑8‑WD‑875‑4000</span>

          <a
            href="/download"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            Download App
          </a>

          <a href="/login" className="hover:text-emerald-600">Login</a>

          <a
            href="/signup"
            className="rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
          >
            Create Profile
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-slate-300"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle Menu</span>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm font-medium">

          <a href="/services" className="block hover:text-emerald-600">Services & Pricing</a>
          <a href="/users" className="block hover:text-emerald-600">Users</a>
          <a href="/drivers" className="block hover:text-emerald-600">Drivers</a>
          <a href="/technology" className="block hover:text-emerald-600">Technology</a>
          <a href="/contact" className="block hover:text-emerald-600">Contact</a>

          <span className="block text-slate-700 font-semibold">1‑8‑WD‑875‑4000</span>

          <a
            href="/download"
            className="block rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            Download App
          </a>

          <a href="/login" className="block hover:text-emerald-600">Login</a>

          <a
            href="/signup"
            className="block rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
          >
            Create Profile
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
          <p className="mt-2">
            Phone: <span className="font-medium">1‑8‑WD‑875‑4000</span>
          </p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:info@wastedriver.com"
              className="text-emerald-700 hover:underline"
            >
              info@wastedriver.com
            </a>
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-900">Follow Us</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-slate-700">
            <a href="https://twitter.com/wastedriver4000" target="_blank" className="hover:text-emerald-600">X / Twitter</a>
            <a href="https://instagram.com/WasteDriver" target="_blank" className="hover:text-emerald-600">Instagram</a>
            <a href="https://tiktok.com/@wastedriver4000" target="_blank" className="hover:text-emerald-600">TikTok</a>
            <a href="https://youtube.com/@WasteDriver" target="_blank" className="hover:text-emerald-600">YouTube</a>
            <a href="https://facebook.com/WasteDriver" target="_blank" className="hover:text-emerald-600">Facebook</a>
            <a href="https://linkedin.com/company/WasteDriver" target="_blank" className="hover:text-emerald-600">LinkedIn</a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-900">Get the App</h3>
          <p className="text-slate-600 mt-1">Request pickups, receive quotes, and manage your profile.</p>
          <div className="mt-4 flex gap-4">
            <a
              href="/download"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
            >
              Download App
            </a>
          </div>
        </div>

        <p>© {new Date().getFullYear()} Waste Driver Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
