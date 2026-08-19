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
  "group flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.16em] text-ebony uppercase transition-all hover:translate-x-0.5 hover:text-moss";

export function Footer() {
  return (
    <footer className="px-4 pb-10 md:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl vault-frame p-7 md:p-14">
        <div className="grid gap-12 md:grid-cols-[1.1fr_2fr] md:gap-16">
          {/* Colofon — identiteit & handtekening van de architect */}
          <div className="border-b border-gridline-strong pb-10 md:border-r md:border-b-0 md:pr-12 md:pb-0">
            <BrandMark className="font-mono text-[12px] font-medium tracking-[0.16em] text-ebony" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-ink">
              <em className="font-serif text-base not-italic">Sovereign Cloud Architecture</em>{" "}
              <span className="font-serif italic">&amp; Turn-Key Infrastructure.</span> Part of the
              Delplanche Ecosystem.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="datastamp inline-flex px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-moss uppercase">
                [ Brussels / Geneva / Zürich ]
              </span>
              <span className="datastamp inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-ebony uppercase">
                <span className="inline-block h-2 w-2 bg-swiss-red" aria-hidden="true" />
                46.2044° N, 6.1432° E
              </span>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-5">
                <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-moss uppercase">
                  {col.title}
                </span>
                <span className="h-px w-8 bg-moss/40" aria-hidden="true" />
                {col.items.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} className={linkClass}>
                      {item.label}
                      <HandArrow className="h-3.5 w-3.5 shrink-0 text-terracotta opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <Link key={item.label} to={item.to!} className={linkClass}>
                      {item.label}
                      <HandArrow className="h-3.5 w-3.5 shrink-0 text-terracotta opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contactvector — interactieve actie i.p.v. platte mailto-tekst */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gridline-strong pt-9 sm:flex-row sm:items-center">
          <CopyAction value="cloud@delplanche.cloud" label="cloud@delplanche.cloud" />
          <Link
            to="/contact"
            className="stamp-press group inline-flex items-center justify-center gap-2.5 rounded-[4px] border-2 border-moss bg-card px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] text-moss uppercase transition-colors hover:bg-moss/[0.07]"
          >
            Naar secure contact vector <ArrowGlyph />
          </Link>
        </div>

        {/* Handtekening van de architect — losstaand van de technische regels */}
        <div className="mt-12 flex justify-end">
          <RedlineNote rotate={-1.5}>
            // Elke stack persoonlijk nagekeken voor oplevering. — J.Z.D.
          </RedlineNote>
        </div>

        {/* Technische certificering & minimalistisch impressum */}
        <div className="fold-divider mt-12 flex flex-col gap-1.5 pt-7">
          <span className="font-mono text-[9px] leading-[1.9] tracking-[0.18em] text-ebony uppercase">
            // © 2026 Delplanche.cloud
          </span>
          <span className="font-mono text-[9px] leading-[1.9] tracking-[0.18em] text-muted-ink uppercase">
            // Hosted exclusively on 100% hydroelectric swiss infrastructure (Infomaniak SA, Geneva)
          </span>
          <span className="font-mono text-[9px] leading-[1.9] tracking-[0.18em] text-muted-ink uppercase">
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
