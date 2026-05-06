// app\layout.tsx

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
      <body className="bg-white text-slate-900">
        <Header />
        <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-slate-600">
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>

          <p className="mt-2">
            Phone:{" "}
            <a
              href="tel:18339992783"
              className="font-medium text-emerald-700 hover:underline"
            >
              1‑833‑99‑WASTE
            </a>
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

        <p className="text-slate-500">
          © {new Date().getFullYear()} Waste Driver Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

