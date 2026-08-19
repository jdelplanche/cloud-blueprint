import { createFileRoute } from "@tanstack/react-router";
import { Globe, Lock, Server } from "lucide-react";
import {
  ActionAnchor,
  ArrowGlyph,
  PageShell,
  Panel,
  SectionHeader,
} from "@/components/site/Primitives";
import { RedlineNote } from "@/components/site/RedlineNote";
import { DossierDownload } from "@/components/site/DossierDownload";
import { StatusChannel } from "@/components/site/SystemStatus";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack Specs — delplanche.cloud" },
      {
        name: "description",
        content:
          "Technische vergelijking tussen US Big Tech en de Delplanche / Infomaniak stack: jurisdictie, energie, egress en PUE.",
      },
      { property: "og:title", content: "Stack Specs — delplanche.cloud" },
      {
        property: "og:description",
        content: "Tier 3+ datacenters, PUE < 1.1, 100% hernieuwbare energie en transparante egress.",
      },
    ],
  }),
  component: StackPage,
});

const matrix: [string, string, string][] = [
  ["Juridische Bescherming", "US Cloud Act (FBI/NSA directe toegang)", "Zwitserse FADP & EU-AVG/GDPR"],
  ["Datacenter Energie", "Vaak fossiel / indirect gecompenseerd", "100% Hernieuwbaar (waterkracht & zon)"],
  ["Koeltechniek", "Traditionele airconditioning", "100% Buitenluchtkoeling (geen A/C)"],
  ["PUE-Efficiëntie Index", "~1.35 tot 1.6 (industriegemiddelde)", "< 1.1 (wereldwijde top)"],
  ["Bandbreedte / Egress", "Onvoorspelbaar & extreem duur", "Vaste, transparante tarieven"],
  ["Eigendomsstructuur", "Beursgenoteerde US Tech Giganten", "100% Onafhankelijk Europees familiebedrijf"],
];

const hardware = [
  ["Datacenter Classificatie", "Tier 3+ redundant, Genève & Zürich"],
  ["Storage Layer", "Enterprise NVMe arrays, RAID-beschermd"],
  ["Netwerk", "Redundante 100 Gbit uplinks, DDoS-mitigatie"],
  ["Energie-index (PUE)", "< 1.1 — koeling op buitenlucht"],
  ["Energiebron", "100% hernieuwbaar: waterkracht & zonne-energie"],
  ["Warmterecuperatie", "Restwarmte hergebruikt voor stadsverwarming"],
];

const pillars = [
  {
    id: "01",
    icon: Globe,
    title: "Managed Webhosting & Mail",
    for: "Voor KMO's, portfolio's en studio's.",
    specs: [
      "100 GB NVMe storage",
      "20 professionele mailboxen",
      "Onbeperkt dataverkeer",
      "Gratis SSL & Let's Encrypt",
    ],
    cta: "Bestel Webhosting",
    href: "/go/hosting",
  },
  {
    id: "02",
    icon: Server,
    title: "Cloud VPS & Bare-Metal",
    for: "Voor zware toepassingen & databases.",
    specs: [
      "Dedicated compute cores",
      "Schaalbaar RAM & NVMe",
      "Custom Linux / Docker",
      "High-availability cluster",
    ],
    cta: "Configureer VPS",
    href: "/go/vps",
  },
  {
    id: "03",
    icon: Lock,
    title: "kSuite & Privacy Storage",
    for: "Het soevereine kantoorplatform.",
    specs: [
      "MS365 & Workspace alternatief",
      "Versleutelde kDrive",
      "kMail & Swiss Transfer",
      "Nul datamining",
    ],
    cta: "Ontdek kSuite",
    href: "/go/ksuite",
  },
];

function StackPage() {
  return (
    <PageShell
      index="01 / Stack"
      title="Deep-Dive Architectural Specifications"
      lead="Een directe, ongefilterde vergelijking van infrastructuurparameters. Geen marketing — enkel meetbare eigenschappen."
    >
      <section>
        <SectionHeader index="A / Pillars" title="Three Curated Pillars" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id} className="blueprint-panel flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] text-muted-ink">
                  {p.id}
                </span>
                <p.icon size={15} strokeWidth={1.2} className="text-moss" />
              </div>
              <h3 className="mt-7 text-2xl leading-tight text-ebony">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{p.for}</p>
              <ul className="mt-7 space-y-2.5 border-t border-gridline pt-6">
                {p.specs.map((s) => (
                  <li key={s} className="font-mono text-[11px] leading-relaxed text-muted-ink">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grow" />
              <ActionAnchor href={p.href} className="w-full">
                {p.cta} <ArrowGlyph />
              </ActionAnchor>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="B / Matrix" title="Direct Comparison Matrix" />
        <RedlineNote className="mt-10" rotate={-1}>
          // Curatorennotitie: egress is waar US-facturen ontsporen.
        </RedlineNote>

        {/* Desktop table */}
        <div className="blueprint-panel mt-10 hidden p-0 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gridline">
                <th className="p-5 font-mono text-[9px] tracking-[0.2em] text-muted-ink uppercase">
                  Parameter
                </th>
                <th className="p-5 font-mono text-[9px] tracking-[0.2em] text-muted-ink uppercase">
                  US Cloud Giants (AWS / Azure / GCP)
                </th>
                <th className="p-5 font-mono text-[9px] tracking-[0.2em] text-moss uppercase">
                  Delplanche / Infomaniak Stack
                </th>
              </tr>
            </thead>
            <tbody>
              {matrix.map(([param, us, ch]) => (
                <tr key={param} className="border-b border-gridline last:border-0">
                  <td className="p-5 font-mono text-[10px] tracking-[0.12em] text-ebony uppercase">
                    {param}
                  </td>
                  <td className="p-5 text-sm leading-relaxed text-muted-ink">{us}</td>
                  <td className="p-5 text-sm leading-relaxed text-moss">{ch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile key-value cards */}
        <div className="mt-10 grid gap-5 md:hidden">
          {matrix.map(([param, us, ch]) => (
            <div key={param} className="blueprint-panel p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-ebony uppercase">
                {param}
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <span className="label-mono">US Cloud Giants</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-ink">{us}</p>
                </div>
                <div className="border-t border-gridline pt-5">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-moss uppercase">
                    Delplanche / Infomaniak
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-ebony">{ch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="C / Hardware" title="Datacenter Hardware Specifications" />
        <Panel className="mt-10">
          <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {hardware.map(([k, v]) => (
              <div key={k} className="border-t border-gridline pt-5">
                <dt className="label-mono">{k}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-ebony">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </section>

      <section>
        <SectionHeader index="D / Uptime" title="Live Status Channel" />
        <Panel className="mt-10">
          <StatusChannel />
        </Panel>
      </section>

      <section>
        <SectionHeader index="E / Export" title="Dossier Export" />
        <Panel className="mt-10">
          <DossierDownload label="Download stack-dossier (PDF)" />
        </Panel>
      </section>

    </PageShell>
  );
}
