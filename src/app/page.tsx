export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Silent Warrior HQ
        </p>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight">
          Public records advocacy, accountability intelligence, and watchdog reporting.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Silent Warrior HQ is the umbrella for Silent Warrior Advocacy and Silent Warrior Intelligence.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/advocacy"
            className="rounded-xl bg-slate-900 px-6 py-3 text-white"
          >
            Explore Advocacy
          </a>
          <a
            href="/intelligence"
            className="rounded-xl border border-slate-300 px-6 py-3"
          >
            Explore Intelligence
          </a>
        </div>
      </section>
    </main>
  );
}