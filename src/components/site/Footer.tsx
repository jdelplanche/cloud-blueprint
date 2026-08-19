import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/site/TopNav";
import { RedlineNote } from "@/components/site/RedlineNote";

const columns: {
  title: string;
  items: { label: string; to?: string; href?: string }[];
}[] = [
  {
    title: "Infrastructure",
    items: [
      { label: "Webhosting Stack", to: "/stack" },
      { label: "Cloud VPS", to: "/stack" },
      { label: "kSuite Workspace", to: "/stack" },
    ],
  },
  {
    title: "Security & Law",
    items: [
      { label: "Swiss Privacy (FADP)", to: "/security" },
      { label: "Zero-Tracking Policy", to: "/privacy" },
      { label: "Affiliate Disclosure", to: "/privacy" },
      { label: "Legal Impressum", to: "/legal" },
    ],
  },
  {
    title: "Direct Vectors",
    items: [
      { label: "System Status (Live)", to: "/security" },
      { label: "PGP Verification Key", to: "/contact" },
      { label: "cloud@delplanche.cloud", href: "mailto:cloud@delplanche.cloud" },
    ],
  },
];

const linkClass =
  "font-mono text-[10px] tracking-[0.16em] text-ebony uppercase transition-colors hover:text-moss";

export function Footer() {
  return (
    <footer className="border-t border-gridline bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <BrandMark className="font-mono text-[12px] font-medium tracking-[0.16em] text-ebony" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-ink">
              Sovereign Cloud Architecture &amp; Turn-Key Infrastructure. Part of the Delplanche
              Ecosystem.
            </p>
            <span className="mt-6 inline-flex border border-gridline bg-canvas px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-moss uppercase">
              [ Brussels / Geneva / Zürich ]
            </span>
            <RedlineNote className="mt-10" rotate={-1.5}>
              // Elke stack persoonlijk nagekeken voor oplevering. — J.Z.D.
            </RedlineNote>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="label-mono">{col.title}</span>
                {col.items.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.label} to={item.to!} className={linkClass}>
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-gridline pt-8 md:flex-row md:justify-between">
          <span className="label-mono">
            © 2026 Delplanche — Hosted exclusively on 100% Hydroelectric Swiss Infrastructure.
          </span>
          <span className="label-mono">Infrastructure: Infomaniak / Genève — CH</span>
        </div>
      </div>
    </footer>
  );
}
