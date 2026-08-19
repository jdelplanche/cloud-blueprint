import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { StatusPill } from "@/components/site/SystemStatus";

const links = [
  { label: "01 Stack", to: "/stack" },
  { label: "02 Security", to: "/security" },
  { label: "03 Onboarding", to: "/onboarding" },
  { label: "04 Contact", to: "/contact" },
];

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <a
        href="https://delplanche.com"
        className="transition-colors hover:text-moss"
        rel="noreferrer"
      >
        DELPLANCHE
      </a>
      <span className="text-muted-ink"> / </span>
      <Link to="/" className="text-muted-ink transition-colors hover:text-moss">
        CLOUD
      </Link>
    </span>
  );
}


export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gridline bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <BrandMark className="min-w-0 truncate font-mono text-[12px] font-medium tracking-[0.16em] text-ebony" />

        <div className="hidden lg:block">
          <StatusPill />
        </div>

        <nav className="hidden shrink-0 items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[10px] tracking-[0.18em] text-muted-ink uppercase transition-colors hover:text-ebony"
              activeProps={{ className: "text-moss" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 text-ebony md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gridline bg-canvas px-5 py-5 md:hidden">
          <div className="mb-4">
            <StatusPill />
          </div>
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-mono text-[10px] tracking-[0.18em] text-ebony uppercase"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
