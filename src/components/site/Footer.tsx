import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/site/TopNav";
import { RedlineNote } from "@/components/site/RedlineNote";
import { CopyAction } from "@/components/site/CopyAction";
import { ArrowGlyph } from "@/components/site/Primitives";

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
      { label: "Onboarding Vector", to: "/onboarding" },
    ],
  },
];

const linkClass =
  "group flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.16em] text-ebony uppercase transition-colors hover:text-moss";

export function Footer() {
  return (
    <footer className="px-4 pb-10 md:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl vault-frame p-6 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_2fr] md:gap-14">
          {/* Colofon — identiteit & handtekening van de architect */}
          <div className="border-b border-gridline-strong pb-8 md:border-r md:border-b-0 md:pr-10 md:pb-0">
            <BrandMark className="font-mono text-[12px] font-medium tracking-[0.16em] text-ebony" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-ink">
              Sovereign Cloud Architecture &amp; Turn-Key Infrastructure. Part of the Delplanche
              Ecosystem.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex border border-gridline-strong bg-card px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-moss uppercase">
                [ Brussels / Geneva / Zürich ]
              </span>
              <span className="inline-flex items-center gap-2 border border-gridline-strong bg-card px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-ebony uppercase">
                <span className="inline-block h-2 w-2 bg-swiss-red" aria-hidden="true" />
                46.2044° N, 6.1432° E
              </span>
            </div>

            <RedlineNote className="mt-7" rotate={-1.5}>
              // Elke stack persoonlijk nagekeken voor oplevering. — J.Z.D.
            </RedlineNote>
          </div>

          <div className="grid gap-px bg-gridline-strong sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4 bg-card p-5">
                <span className="label-mono">{col.title}</span>
                {col.items.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} className={linkClass}>
                      {item.label}
                      <ArrowGlyph className="text-terracotta opacity-60" />
                    </a>
                  ) : (
                    <Link key={item.label} to={item.to!} className={linkClass}>
                      {item.label}
                      <ArrowGlyph className="text-terracotta opacity-60" />
                    </Link>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contactvector — interactieve actie i.p.v. platte mailto-tekst */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gridline-strong pt-8 sm:flex-row sm:items-center">
          <CopyAction value="cloud@delplanche.cloud" label="cloud@delplanche.cloud" />
          <Link
            to="/contact"
            className="stamp-press group inline-flex items-center justify-center gap-2.5 border-2 border-moss bg-card px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] text-moss uppercase hover:bg-moss/[0.06]"
          >
            Naar secure contact vector <ArrowGlyph />
          </Link>
        </div>

        {/* Technische certificering & minimalistisch impressum */}
        <div className="mt-8 flex flex-col gap-2 border-t border-gridline-strong pt-6">
          <span className="font-mono text-[9px] leading-relaxed tracking-[0.16em] text-ebony uppercase">
            // © 2026 Delplanche.cloud
          </span>
          <span className="font-mono text-[9px] leading-relaxed tracking-[0.16em] text-muted-ink uppercase">
            // Hosted exclusively on 100% hydroelectric swiss infrastructure (Infomaniak SA, Geneva)
          </span>
          <span className="font-mono text-[9px] leading-relaxed tracking-[0.16em] text-muted-ink uppercase">
            // Impressum: Delplanche — J.Z.D., Brussel (BE) —{" "}
            <Link to="/legal" className="text-moss underline-offset-2 hover:underline">
              volledige akte
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
