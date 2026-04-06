import "./globals.css";
import { Logo } from "@/components/Logo";

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

        {/* Header */}
        <header className="border-b bg-white">
          <div style={{ background: "red", color: "white", padding: "4px" }}>
  LAYOUT TEST
</div>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Logo as Home link (FINAL VERSION) */}
            <a href="https://wastedriver.com" className="flex items-center">
              <Logo size={40} />
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-6 text-sm font-medium">

              <a href="/services" className="hover:text-emerald-600">
                Services & Pricing
              </a>

              <a href="/users" className="hover:text-emerald-600">
                Users
              </a>

              <a href="/drivers" className="hover:text-emerald-600">
                Drivers
              </a>

              <a href="/technology" className="hover:text-emerald-600">
                Technology
              </a>

              <a href="/contact" className="hover:text-emerald-600">
                Contact
              </a>

              {/* Phone Number */}
              <span className="text-slate-700 font-semibold">
                1‑8‑WD‑875‑4000
              </span>

              {/* Download App */}
              <a
                href="/download"
                className="ml-4 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
              >
                Download App
              </a>

              {/* Login */}
              <a href="/login" className="hover:text-emerald-600">
                Login
              </a>

              {/* Create Profile */}
              <a
                href="/signup"
                className="rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
              >
                Create Profile
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="mx-auto max-w-7xl px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">

            {/* Contact Section */}
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

            {/* Social Media */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-slate-900">Follow Us</h3>

              <div className="mt-4 flex flex-wrap gap-4 text-slate-700">
                <a href="https://twitter.com/wastedriver4000" target="_blank" className="hover:text-emerald-600">
                  X / Twitter: @wastedriver4000
                </a>

                <a href="https://instagram.com/WasteDriver" target="_blank" className="hover:text-emerald-600">
                  Instagram: WasteDriver
                </a>

                <a href="https://tiktok.com/@wastedriver4000" target="_blank" className="hover:text-emerald-600">
                  TikTok: @wastedriver4000
                </a>

                <a href="https://youtube.com/@WasteDriver" target="_blank" className="hover:text-emerald-600">
                  YouTube: WasteDriver
                </a>

                <a href="https://facebook.com/WasteDriver" target="_blank" className="hover:text-emerald-600">
                  Facebook: WasteDriver
                </a>

                <a href="https://linkedin.com/company/WasteDriver" target="_blank" className="hover:text-emerald-600">
                  LinkedIn: WasteDriver
                </a>
              </div>
            </div>

            {/* App Download Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900">Get the App</h3>
              <p className="text-slate-600 mt-1">
                Request pickups, receive quotes, and manage your profile.
              </p>

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

      </body>
    </html>
  );
}
