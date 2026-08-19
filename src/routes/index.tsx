import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Server, Globe, Monitor, Network, Warehouse } from "lucide-react";
import { RedlineNote } from "@/components/site/RedlineNote";
import {
  ActionAnchor,
  ActionButton,
  ActionLink,
  ArrowGlyph,
  Badge,
  Panel,
  SectionHeader,
} from "@/components/site/Primitives";
import { QualityStamps } from "@/components/site/Stamps";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "delplanche.cloud — Sovereign Swiss Cloud Architecture" },
      {
        name: "description",
        content:
          "Gecureerde Zwitserse en Europese cloudinfrastructuur: webhosting, VPS en kSuite met FADP-bescherming en 100% hernieuwbare energie.",
      },
      { property: "og:title", content: "delplanche.cloud — Sovereign Swiss Cloud Architecture" },
      {
        property: "og:description",
        content:
          "Infrastructuur voor bedrijven die absolute datasoevereiniteit eisen. Zwitserse datacenters, geen US Cloud Act risico.",
      },
    ],
  }),
  component: Home,
});

const stacks = [
  {
    id: "01",
    title: "Managed Webhosting & Mail",
    for: "Voor KMO's, portfolio's en studio's.",
    icon: Globe,
    specs: [
      "100 GB NVMe Storage",
      "20 Professionele Mailboxen",
      "Onbeperkt dataverkeer",
      "Gratis SSL & Let's Encrypt",
    ],
    cta: "Bestel Webhosting",
    href: "/go/hosting",
  },
  {
    id: "02",
    title: "Cloud VPS & Bare-Metal",
    for: "Voor zware toepassingen & databases.",
    icon: Server,
    specs: [
      "Dedicated Compute Cores",
      "Schaalbaar RAM & NVMe",
      "Custom Linux / Docker support",
      "High-Availability cluster",
    ],
    cta: "Configureer VPS Instance",
    href: "/go/vps",
  },
  {
    id: "03",
    title: "kSuite & Privacy Storage",
    for: "Het soevereine kantoorplatform.",
    icon: Lock,
    specs: [
      "MS365 & Google Workspace alternatief",
      "End-to-end versleutelde kDrive",
      "kMail & Swiss Transfer",
      "Nul datamining",
    ],
    cta: "Ontdek Privacy Suite",
    href: "/go/ksuite",
  },
];

const steps = [
  {
    id: "01",
    title: "Select Stack",
    body: "Kies het gewenste Infomaniak-pakket via onze geautoriseerde routing-links.",
  },
  {
    id: "02",
    title: "Grant Access",
    body: "Wijs Delplanche aan als technisch beheerder binnen je Infomaniak console.",
  },
  {
    id: "03",
    title: "Turn-Key Setup",
    body: "Wij configureren je DNS, SSL, e-mail en webserver binnen 24 uur.",
  },
];

function Home() {
  const scrollToStacks = () =>
    document.getElementById("stacks")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:px-8 md:pt-44 md:pb-32">
      {/* HERO */}
      <section>
        <Badge>Status: Verified Swiss Stack</Badge>
        <h1 className="mt-10 max-w-3xl text-[2.75rem] leading-[1.05] text-ebony md:text-7xl">
          Sovereign Cloud Architecture.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-ink">
          Gecureerde Zwitserse infrastructuur voor wie absolute datasoevereiniteit vereist —
          juridisch beschermd onder het Zwitserse recht, gedragen door waterkracht.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ActionButton onClick={scrollToStacks}>
            Ontdek Cloud Stacks <ArrowGlyph />
          </ActionButton>
          <ActionLink to="/onboarding">
            Turn-Key Onboarding <ArrowGlyph />
          </ActionLink>
        </div>
        <RedlineNote className="mt-10" rotate={-1.5}>
          // Individueel op maat geconfigureerd binnen Zwitserse rechtspraak — J.Z.D.
        </RedlineNote>
        <QualityStamps className="mt-16 border-t border-gridline pt-8" />
      </section>

      {/* DATAFLOW */}
      <section className="mt-24 md:mt-40">
        <SectionHeader
          index="A / Dataflow"
          title="Direct Architecture Flow"
          lead="Elke request verlaat de browser versleuteld en eindigt binnen Zwitserse jurisdictie. Geen tussenliggende US-hops."
        />
        <Panel className="mt-12">
          <div className="grid items-stretch gap-0 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <FlowNode
              index="01 / Client"
              title="Client Browser"
              detail="TLS 1.3 handshake"
              icon={Monitor}
            />
            <FlowConnector label="TLS 1.3 Encrypted" />
            <FlowNode
              index="02 / Edge"
              title="Delplanche Edge Routing"
              detail="Routing & caching"
              icon={Network}
            />
            <FlowConnector label="Private Link" />
            <FlowNode
              index="03 / Vault"
              title="Infomaniak Swiss DC"
              detail="Genève — CH"
              icon={Warehouse}
              accent
            />
          </div>
          <p className="mt-10 border-t border-gridline pt-6 font-mono text-[10px] tracking-[0.16em] text-muted-ink uppercase">
            Jurisdiction: Swiss FADP — 100% compliance, geen extraterritoriale claim
          </p>
        </Panel>
      </section>

      {/* STACKS */}
      <section id="stacks" className="mt-24 scroll-mt-28 md:mt-40">
        <SectionHeader
          index="B / Curated Stacks"
          title="The Curated Stacks"
          lead="Drie gevalideerde configuraties. Geen eindeloze catalogus — alleen wat wij zelf in productie draaien."
        />
        <RedlineNote className="mt-10" rotate={-1}>
          // Curatorennotitie: drie pilaren, elk in eigen productie getest.
        </RedlineNote>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stacks.map((s) => (
            <div key={s.id} className="blueprint-panel flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] text-muted-ink">
                  {s.id}
                </span>
                <s.icon size={15} strokeWidth={1.2} className="text-moss" />
              </div>
              <h3 className="mt-7 text-2xl leading-tight text-ebony">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{s.for}</p>
              <ul className="mt-7 space-y-2.5 border-t border-gridline pt-6">
                {s.specs.map((spec) => (
                  <li key={spec} className="font-mono text-[11px] leading-relaxed text-muted-ink">
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grow" />
              <ActionAnchor href={s.href} className="w-full">
                {s.cta} <ArrowGlyph />
              </ActionAnchor>
            </div>
          ))}
        </div>
      </section>

      {/* ONBOARDING TEASER */}
      <section className="mt-24 md:mt-40">
        <SectionHeader
          index="C / Protocol"
          title="Turn-Key Onboarding"
          lead="Van pakketkeuze tot volledig geconfigureerde infrastructuur binnen 24 uur."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="border-t border-gridline pt-6">
              <span className="font-mono text-[10px] tracking-[0.22em] text-muted-ink">
                {step.id}
              </span>
              <h3 className="mt-4 text-xl text-ebony">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <ActionLink to="/onboarding">
            Start Onboarding Protocol <ArrowGlyph />
          </ActionLink>
          <Link
            to="/stack"
            className="font-mono text-[10px] tracking-[0.18em] text-muted-ink uppercase transition-colors hover:text-moss"
          >
            Bekijk technische specificaties
          </Link>
        </div>
      </section>
    </div>
  );
}

function FlowNode({
  index,
  title,
  detail,
  icon: Icon,
  accent,
}: {
  index: string;
  title: string;
  detail: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  accent?: boolean;
}) {
  return (
    <div className={`border-t p-6 ${accent ? "border-moss" : "border-gridline"}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[9px] tracking-[0.22em] text-muted-ink uppercase">
          {index}
        </span>
        <Icon size={14} strokeWidth={1.2} className={accent ? "text-moss" : "text-muted-ink"} />
      </div>
      <p className={`mt-6 text-lg leading-tight ${accent ? "text-moss" : "text-ebony"}`}>{title}</p>
      <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted-ink uppercase">
        {detail}
      </p>
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4 md:px-5 md:py-0">
      <span className="hidden h-px w-14 bg-gridline md:block" />
      <span className="h-8 w-px bg-gridline md:hidden" />
      <span className="font-mono text-[8px] tracking-[0.2em] text-muted-ink uppercase md:whitespace-nowrap">
        {label}
      </span>
      <span className="hidden h-px w-14 bg-gridline md:block" />
    </div>
  );
}
