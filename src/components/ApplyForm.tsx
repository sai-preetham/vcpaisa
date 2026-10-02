"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  startup: string;
  website: string;
  oneLiner: string;
  email: string;
};

const empty: FormState = {
  name: "",
  startup: "",
  website: "",
  oneLiner: "",
  email: "",
};

function isValidUrl(value: string) {
  try {
    const u = new URL(value.startsWith("http") ? value : `https://${value}`);
    return Boolean(u.hostname.includes("."));
  } catch {
    return false;
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!values.startup.trim() || values.startup.trim().length < 2) {
      next.startup = "Startup name is required.";
    }
    if (!values.website.trim() || !isValidUrl(values.website.trim())) {
      next.website = "Add a valid website URL.";
    }
    if (!values.oneLiner.trim() || values.oneLiner.trim().length < 10) {
      next.oneLiner = "Give us a one-liner (10+ chars).";
    }
    if (values.oneLiner.trim().length > 160) {
      next.oneLiner = "Keep it under 160 characters.";
    }
    if (!values.email.trim() || !isValidEmail(values.email.trim())) {
      next.email = "Enter a valid email.";
    }
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          startup: form.startup.trim(),
          website: form.website.trim(),
          oneLiner: form.oneLiner.trim(),
          email: form.email.trim().toLowerCase(),
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setMessage("Application received. We’ll be in touch.");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to submit.");
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-card-border bg-[#0c0c0f] px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-zinc-600 focus:border-gold/50 focus:ring-2 focus:ring-gold/20";

  return (
    <section id="apply" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get funded
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Apply for a ₹1 cheque
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Early-stage Indian and global founders welcome. We’re looking for
            clarity, taste, and builders who ship. This is a scout check — not a
            full term sheet.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <span className="text-green">✓</span> Featured on vcpaisa.com / paisa.vc
            </li>
            <li className="flex gap-2">
              <span className="text-green">✓</span> Official Funded by VC Paisa badge
            </li>
            <li className="flex gap-2">
              <span className="text-green">✓</span> A reason for us to meet you
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-card-border bg-card p-5 sm:p-7"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-zinc-300">Your name</span>
              <input
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Aanya Shah"
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
              )}
            </label>
            <label className="block text-sm">
              <span className="text-zinc-300">Startup</span>
              <input
                className={field}
                value={form.startup}
                onChange={(e) => setForm({ ...form, startup: e.target.value })}
                placeholder="Acme India"
              />
              {errors.startup && (
                <p className="mt-1 text-xs text-red-400">{errors.startup}</p>
              )}
            </label>
          </div>

          <label className="mt-4 block text-sm">
            <span className="text-zinc-300">Website</span>
            <input
              className={field}
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              placeholder="https://yourstartup.com"
              autoComplete="url"
            />
            {errors.website && (
              <p className="mt-1 text-xs text-red-400">{errors.website}</p>
            )}
          </label>

          <label className="mt-4 block text-sm">
            <span className="text-zinc-300">One-liner</span>
            <textarea
              className={`${field} min-h-[96px] resize-y`}
              value={form.oneLiner}
              onChange={(e) => setForm({ ...form, oneLiner: e.target.value })}
              placeholder="What do you build, for whom, and why now?"
              maxLength={180}
            />
            <div className="mt-1 flex justify-between text-xs text-zinc-600">
              {errors.oneLiner ? (
                <p className="text-red-400">{errors.oneLiner}</p>
              ) : (
                <span />
              )}
              <span>{form.oneLiner.length}/160</span>
            </div>
          </label>

          <label className="mt-2 block text-sm">
            <span className="text-zinc-300">Email</span>
            <input
              className={field}
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@startup.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background transition hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Submit application"}
          </button>

          {message && (
            <p
              className={`mt-3 text-center text-sm ${
                status === "success" ? "text-green" : "text-red-400"
              }`}
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
