export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";

export default async function AgenciesPage() {
  const { data: agencies, error } = await supabase
    .from("agencies")
    .select("*")
    .order("name");

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900">Agencies</h1>
      <p className="mt-4 text-lg text-slate-600">
        Current agencies in the Silent Warrior Intelligence database.
      </p>

      {error ? (
        <p className="mt-6 text-red-600">Error: {error.message}</p>
      ) : !agencies || agencies.length === 0 ? (
        <p className="mt-6 text-slate-600">No agencies found.</p>
      ) : (
        <div className="mt-10 space-y-4">
          {agencies.map((agency) => (
            <div
              key={agency.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {agency.name}
              </h2>
              <p className="mt-2 text-slate-600">
                {agency.city}, {agency.state}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Type: {agency.agency_type} · County: {agency.county}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}