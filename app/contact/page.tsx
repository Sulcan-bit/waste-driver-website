// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="space-y-48">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO SECTION — Premium Tech Marketplace                                */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Atmospheric Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-slate-100 opacity-90" />

        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Contact Us
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have questions about junk removal, driving with us, or partnerships?
            Our team is here to help. Waste Driver operates across Canada with
            headquarters in Calgary, Alberta.
          </p>

          <p className="mt-6 text-lg text-slate-700 font-medium">
            Phone:{" "}
            <a
              href="tel:18339992783"
              className="text-emerald-700 font-semibold hover:text-emerald-800 transition"
            >
              1‑833‑99‑WASTE
            </a>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* CONTACT FORM — Premium Card                                            */}
      {/* ---------------------------------------------------------------------- */}
      <section className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl bg-white p-12 shadow-xl ring-1 ring-black/5">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Send an Inquiry</h2>

          <form
            action="https://formsubmit.co/info@wastedriver.com"
            method="POST"
            className="space-y-8"
          >
            {/* FormSubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Waste Driver Inquiry" />
            <input type="hidden" name="_template" value="table" />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-lg focus:border-emerald-600 focus:ring-emerald-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-lg focus:border-emerald-600 focus:ring-emerald-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-lg focus:border-emerald-600 focus:ring-emerald-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Question / Comments
              </label>
              <textarea
                name="message"
                maxLength={200}
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 h-36 text-lg resize-none focus:border-emerald-600 focus:ring-emerald-600"
              />
              <p className="text-xs text-slate-500 mt-1">Max 200 characters</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-white text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* DIRECT EMAIL — Premium Footer Text                                     */}
      {/* ---------------------------------------------------------------------- */}
      <section className="text-center text-lg text-slate-600 px-6">
        Or email us directly at{" "}
        <a
          href="mailto:info@wastedriver.com"
          className="text-emerald-700 font-semibold hover:underline"
        >
          info@wastedriver.com
        </a>
      </section>

    </div>
  );
}
