import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
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

/** Handgetekend sluit-streepjeskruis — zachter dan een digitaal icoon */
function HandClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6.5 6c3.6 3.4 7.4 7.6 11 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17.6 6.2C14 9.5 10 13.8 6.6 18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Handgetekend pijltje ↗ */
export function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 19.2C9.5 15 13.8 10.6 18.4 5.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11.6 5.1c2.6-.2 5-.1 7 .3.3 2 .4 4.3.2 6.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TopNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !panel?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panel?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [open, close]);

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
          ref={toggleRef}
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-toggle"
          className="stamp-press flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border border-gridline-strong bg-card text-ebony md:hidden"
          aria-label={open ? "Sluit navigatie" : "Open navigatie"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <HandClose className="h-4 w-4" /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div
          ref={panelRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobiele navigatie"
          data-testid="mobile-nav"
          className="border-t border-gridline-strong bg-card px-4 py-5 shadow-[0_18px_36px_-18px_rgba(44,62,53,0.28)] md:hidden"
        >
          <div className="datastamp mb-6 p-3">
            <StatusPill />
          </div>
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between px-3 py-4 font-mono text-[11px] tracking-[0.18em] text-ebony uppercase transition-colors focus-visible:bg-moss/[0.06] active:bg-moss/[0.06] ${
                  i === 0 ? "" : "fold-divider"
                }`}
                activeProps={{ className: "text-moss" }}
              >
                {l.label}
                <HandArrow className="h-4 w-4 text-terracotta transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5" />
              </Link>
            ))}
          </nav>
          <p className="fold-divider mt-6 pt-4 font-mono text-[8.5px] leading-relaxed tracking-[0.16em] text-moss/70 uppercase">
            // Infrastructure: Infomaniak SA (Geneva) // 100% hydroelectric //
          </p>
        </div>
      )}
    </header>
  );
}
