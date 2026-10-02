const steps = [
  {
    n: "01",
    title: "Apply",
    body: "Tell us who you are, what you’re building, and where to find you. One form. No deck theater required.",
  },
  {
    n: "02",
    title: "Get ₹1 + featured",
    body: "If we vibe with the founder and the problem, we write a ₹1 cheque and feature you on the site.",
  },
  {
    n: "03",
    title: "Wear the badge",
    body: "Drop the Funded by VC Paisa badge on your site. Signal to users, hires, and future investors.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps. One rupee. A foot in the door.
          </h2>
          <p className="mt-4 text-muted">
            We’re not trying to win allocation wars. We’re trying to meet
            founders early — and give you a clean, public signal while we do.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group rounded-2xl border border-card-border bg-card p-6 transition hover:border-gold/30 hover:bg-[#141418]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">{s.n}</span>
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-gold to-green opacity-70 transition group-hover:opacity-100" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
