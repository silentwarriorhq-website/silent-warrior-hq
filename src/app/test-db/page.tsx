export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";

export default async function TestDbPage() {
  const { data, error } = await supabase.from("agencies").select("*");

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900">Database Test</h1>

      {error ? (
        <p className="mt-6 text-red-600">Error: {error.message}</p>
      ) : (
        <pre className="mt-6 rounded-xl bg-slate-100 p-4 text-sm overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </main>
  );
}