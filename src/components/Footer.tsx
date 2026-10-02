export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-semibold tracking-tight">
            VC <span className="text-gold">Paisa</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            ₹1 investments. Real founders. Scout + signal.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a
              href="https://vcpaisa.com"
              className="transition hover:text-foreground"
            >
              vcpaisa.com
            </a>
            <a
              href="https://paisa.vc"
              className="transition hover:text-foreground"
            >
              paisa.vc
            </a>
            <a
              href="mailto:hello@vcpaisa.com"
              className="transition hover:text-foreground"
            >
              hello@vcpaisa.com
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} VC Paisa. Soft launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
