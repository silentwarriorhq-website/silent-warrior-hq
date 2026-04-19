export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900">Contact Silent Warrior HQ</h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Use the form below to get in touch about public records advocacy,
        records-based research, or source-linked accountability reports.
      </p>

      <form
        action="mailto:contact@silentwarriorhq.com"
        method="post"
        encType="text/plain"
        className="mt-10 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-900">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-6 py-3 text-white"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}