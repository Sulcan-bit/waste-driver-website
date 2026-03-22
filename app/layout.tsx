import "./globals.css";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "Waste Driver Inc.",
  description:
    "Residential and commercial waste removal made simple, clean, and eco‑friendly.",
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
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Logo */}
            <Logo />

            {/* Navigation */}
            <nav className="flex items-center gap-6 text-sm font-medium">
              <a href="/" className="hover:text-emerald-600">Home</a>
              <a href="/services" className="hover:text-emerald-600">Services & Pricing</a>
              <a href="/contact" className="hover:text-emerald-600">Contact</a>

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

            {/* App Download Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900">Get the App</h3>
              <p className="text-slate-600 mt-1">
                Request pickups, track drivers, and manage your profile.
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
