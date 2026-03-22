export default function ContactPage() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Have questions or need help? Send us a message and our team will get back to you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-2xl rounded-2xl border p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send an Inquiry</h2>

        <form
          action="https://formsubmit.co/info@wastedriver.com"
          method="POST"
          className="space-y-6"
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
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:border-emerald-600 focus:ring-emerald-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:border-emerald-600 focus:ring-emerald-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:border-emerald-600 focus:ring-emerald-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Question / Comments</label>
            <textarea
              name="message"
              maxLength={200}
              required
              className="mt-2 w-full rounded-lg border px-4 py-2 h-32 resize-none focus:border-emerald-600 focus:ring-emerald-600"
            />
            <p className="text-xs text-slate-500 mt-1">Max 200 characters</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
          >
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Direct Email */}
      <section className="text-center text-slate-600">
        Or email us directly at:{" "}
        <span className="text-emerald-700 font-medium">info@wastedriver.com</span>
      </section>

    </div>
  );
}