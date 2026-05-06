// app/layout.tsx

import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Waste Driver Inc. – AI‑Powered Junk & Waste Transportation",
  description:
    "Waste Driver connects Users with verified Independent Drivers for fast, affordable, environmentally responsible junk removal.",
  icons: {
    icon: "/favicon.png",
  },
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-slate-50 to-emerald-50 text-slate-900 antialiased">
        <Header />

        {/* MAIN CONTENT WRAPPER */}
        <main className="mx-auto max-w-7xl px-6 py-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PREMIUM FOOTER                               */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="mt-40 border-t bg-gradient-to-b from-white to-slate-100/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 text-sm text-slate-600">

        {/* CONTACT BLOCK */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
            Contact Us
          </h3>

          <p className="mt-3">
            Phone:{" "}
            <a
              href="tel:18339992783"
              className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              1‑833‑99‑WASTE
            </a>
          </p>

          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:info@wastedriver.com"
              className="text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              info@wastedriver.com
            </a>
          </p>
        </div>

        {/* COPYRIGHT */}
        <p className="text-slate-500">
          © {new Date().getFullYear()} Waste Driver Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

