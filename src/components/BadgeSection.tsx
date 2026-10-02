"use client";

import { useState } from "react";

const htmlSnippet = `<a href="https://vcpaisa.com" target="_blank" rel="noopener noreferrer">
  <img src="https://vcpaisa.com/badge.svg" alt="Funded by VC Paisa" width="240" height="72" />
</a>`;

const mdSnippet = `[![Funded by VC Paisa](https://vcpaisa.com/badge.svg)](https://vcpaisa.com)`;

function CopyBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-xl border border-card-border bg-[#0c0c0f] p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {label}
        </p>
        <button
          type="button"
          onClick={copy}
          className="rounded-lg border border-card-border px-2.5 py-1 text-xs text-muted transition hover:border-gold/40 hover:text-foreground"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-all font-mono text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
        {value}
      </pre>
    </div>
  );
}

export function BadgeSection() {
  return (
    <section id="badge" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Badge
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Funded by VC Paisa
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Once you’re in, put the badge on your homepage, README, or press
            kit. It’s a tiny signal with a big wink — you got funded, we got to
            meet you.
          </p>

          <div className="mt-8 space-y-3">
            <CopyBlock label="HTML embed" value={htmlSnippet} />
            <CopyBlock label="Markdown" value={mdSnippet} />
          </div>
        </div>

        <div className="rounded-2xl border border-card-border bg-card p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Preview
          </p>
          <div className="mt-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/badge.svg"
              alt="Funded by VC Paisa badge"
              width={240}
              height={72}
              className="h-auto w-[240px] drop-shadow-[0_20px_50px_#f5c54222]"
            />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Asset lives at <code className="text-gold">/badge.svg</code> — also
            available as a local PNG export later if you need social cards.
          </p>
        </div>
      </div>
    </section>
  );
}
