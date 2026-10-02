export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grid-fade">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/70 px-3 py-1.5 text-xs text-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_8px_#22c55e]" />
          Nano fund · Scout · Signal
          <span className="hidden text-zinc-600 sm:inline">·</span>
          <span className="hidden font-mono text-[11px] text-zinc-500 sm:inline">
            vcpaisa.com · paisa.vc
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
          We invest{" "}
          <span className="gradient-text">₹1</span> into startups
          <span className="block text-muted mt-2 sm:mt-3 text-2xl sm:text-4xl font-medium">
            Real founders. Real signal. Soft door, sharp taste.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          VC Paisa is a nano venture firm. One rupee gets you funded, featured,
          and a badge you can put on your site — while we meet the next wave of
          builders.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#apply"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-gold to-green px-7 text-sm font-semibold text-background shadow-[0_10px_40px_#f5c54233] transition hover:brightness-110"
          >
            Apply for funding
          </a>
          <a
            href="#badge"
            className="inline-flex h-12 items-center justify-center rounded-full border border-card-border bg-card/60 px-7 text-sm font-medium text-foreground transition hover:border-gold/40 hover:bg-card"
          >
            Get the badge
          </a>
        </div>

        <div className="mt-14 float-soft glow-ring w-full max-w-xl rounded-2xl border border-card-border bg-card/80 p-5 text-left backdrop-blur sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Cheque size
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gold sm:text-5xl">
                ₹1
              </p>
              <p className="mt-2 text-sm text-muted">
                Intentional. Memorable. A scout check that opens conversation.
              </p>
            </div>
            <div className="rounded-xl border border-green/30 bg-green-soft px-3 py-2 text-right">
              <p className="text-[11px] uppercase tracking-wider text-green">
                Status
              </p>
              <p className="text-sm font-medium text-foreground">Soft launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
