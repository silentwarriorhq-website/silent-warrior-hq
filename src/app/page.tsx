import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Silent Warrior HQ
        </p>

        <h1 className="max-w-5xl text-4xl font-bold leading-tight sm:text-5xl">
          Public records advocacy, accountability research, and records-based
          reporting.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Silent Warrior HQ is an umbrella platform for public-interest work
          focused on government transparency, accountability, and records-based
          analysis. Our work includes public records advocacy, records
          litigation, and research products built from lawfully obtained public
          records.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-xl bg-slate-900 px-6 py-3 text-white"
          >
            Learn About Our Work
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-6 py-3 text-slate-900"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">
            Our public-interest focus
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            We use public records to support transparency, accountability,
            journalism, legal research, and public-interest analysis.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            We do not operate as a marketing list broker, solicitation platform,
            or seller of raw lead lists. Our work is centered on records,
            events, investigations, findings, timelines, and source-linked
            reporting.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Silent Warrior Advocacy
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Public records requests, appeals, and litigation in support of
            transparency and accountability.
          </p>
          <div className="mt-6">
            <Link
              href="/advocacy"
              className="font-semibold text-slate-900 underline underline-offset-4"
            >
              Explore Advocacy
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Silent Warrior Intelligence
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Research reports, officer dossiers, agency dossiers, records-based
            timelines, and source-linked analytical products for journalists,
            attorneys, advocates, and researchers.
          </p>
          <div className="mt-6">
            <Link
              href="/intelligence"
              className="font-semibold text-slate-900 underline underline-offset-4"
            >
              Explore Intelligence
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">What we do</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Public records requests and records litigation",
              "Accountability research based on public records",
              "Officer and agency dossiers",
              "Event timelines and source indexes",
              "Exhibit packets and records organization",
              "Monitoring of updates to records already collected",
              "Records-based reporting and analysis",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">
            What we do not do
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Silent Warrior HQ is not a consumer marketing database,
            lead-generation service, solicitation platform, or broker of raw
            government name lists.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            We do not offer bulk marketing lists, officer rosters for
            solicitation use, or list products designed for commercial outreach.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">
            How the work is structured
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Our work is organized around records, events, investigations,
            findings, and source documents. Where individuals are identified in
            public records, those identities appear as part of records-based
            reporting and analysis, not as standalone marketing or solicitation
            products.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Our focus is accountability research, journalism support, legal
            research, and public-interest transparency.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">
            Who uses this work
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Journalists and newsrooms",
              "Attorneys and legal researchers",
              "Advocates and watchdog groups",
              "Researchers and public-interest organizations",
              "Members of the public seeking records-based accountability information",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">Coverage</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Current and developing work includes public records advocacy and
            accountability research projects in Washington, with additional
            state coverage in development.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">
            Methodology and sources
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Our reports and research products are built from public records,
            source documents, document review, record organization, and
            cross-referencing. We aim to preserve context, provenance, and
            source citations.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900">
            Contact Silent Warrior HQ
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Interested in public records advocacy, records-based research, or a
            source-linked accountability report?
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-6 py-3 text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}