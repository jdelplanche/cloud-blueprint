import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel } from "@/components/site/Primitives";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Impressum — delplanche.cloud" },
      {
        name: "description",
        content:
          "Wettelijke informatie en impressum van Delplanche — beheerder, locatie en contactgegevens.",
      },
      { property: "og:title", content: "Legal Impressum — delplanche.cloud" },
      { property: "og:description", content: "Beheerder, vestiging en aansprakelijkheid." },
    ],
  }),
  component: LegalPage,
});

const rows = [
  ["Beheerder", "Delplanche / Jona Zeno Delplanche"],
  ["Locatie", "Brussel, België / Europa"],
  ["Contact", "cloud@delplanche.cloud"],
  ["Infrastructuurpartner", "Infomaniak Network SA — Genève, Zwitserland"],
];

function LegalPage() {
  return (
    <PageShell
      index="06 / LEGAL"
      title="Legal Impressum"
      lead="Wettelijk verplichte identificatie van de uitgever van deze site."
    >
      <Panel>
        <dl className="divide-y divide-gridline">
          {rows.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-2 py-4 md:flex-row md:gap-8">
              <dt className="w-56 shrink-0 label-mono">{k}</dt>
              <dd className="font-mono text-[12px] text-ebony">{v}</dd>
            </div>
          ))}
        </dl>
      </Panel>
      <Panel>
        <h2 className="text-lg font-semibold text-ebony">Aansprakelijkheid</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          Inhoud op deze site is informatief en wordt met zorg samengesteld. Specificaties van
          derden (waaronder Infomaniak) kunnen wijzigen; controleer steeds de actuele voorwaarden bij
          de aanbieder voor je een dienst afneemt.
        </p>
      </Panel>
    </PageShell>
  );
}
