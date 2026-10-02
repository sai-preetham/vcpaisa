import { portfolio } from "@/data/portfolio";

export function Featured() {
  return (
    <section id="featured" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Featured
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sample portfolio
            </h2>
            <p className="mt-4 text-muted">
              Placeholder startups for the soft launch. Real founders will
              replace these as cheques go out.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            Sample data
          </span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((s) => (
            <article
              key={s.name}
              className="flex flex-col rounded-2xl border border-card-border bg-card p-5 transition hover:border-green/30"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{s.name}</h3>
                {s.sample && (
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
                    Sample
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {s.oneLiner}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                <span className="rounded-full border border-card-border px-2.5 py-1">
                  {s.sector}
                </span>
                <span className="rounded-full border border-card-border px-2.5 py-1">
                  {s.location}
                </span>
                <span className="ml-auto text-gold/80">₹1 · {s.fundedAt}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
