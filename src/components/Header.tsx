"use client";

import { useState } from "react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#apply", label: "Get funded" },
  { href: "#featured", label: "Featured" },
  { href: "#badge", label: "Badge" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-green text-sm font-extrabold text-background shadow-[0_0_20px_#f5c54233] transition group-hover:scale-105">
            ₹1
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            VC <span className="text-gold">Paisa</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-gold"
          >
            Apply
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg border border-card-border p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-muted hover:bg-card hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="rounded-full bg-foreground px-4 py-2.5 text-center font-medium text-background"
            >
              Apply for ₹1
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
