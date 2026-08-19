import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeader } from "@/components/site/Primitives";
import { QualityStamps } from "@/components/site/Stamps";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Compliance — delplanche.cloud" },
      {
        name: "description",
        content:
          "Zwitserse FADP-wetgeving, immuniteit voor de US Cloud Act, ISO 27001/14001/50001 en verplichte TLS 1.3.",
      },
      { property: "og:title", content: "Security & Compliance — delplanche.cloud" },
      {
        property: "og:description",
        content: "Juridische en technische bescherming van uw data onder Zwitsers recht.",
      },
    ],
  }),
  component: SecurityPage,
});

const isos = [
  { code: "ISO 27001", label: "Informatiebeveiliging", scope: "Information Security Management" },
  { code: "ISO 14001", label: "Milieumanagement", scope: "Environmental Management" },
  { code: "ISO 50001", label: "Energie-efficiëntie", scope: "Energy Management System" },
];

const jurisdiction: [string, string, string][] = [
  ["Toegang door autoriteiten", "Administratief bevel, zonder rechter", "Enkel via formele rechtshulp"],
  ["Territoriaal bereik", "Extraterritoriaal — ook EU-regio's", "Strikt binnen Zwitserse jurisdictie"],
  ["Kennisgeving aan klant", "Kan verboden worden (gag order)", "Klant wordt in principe geïnformeerd"],
  ["Grondslag", "US Cloud Act (2018)", "FADP / nLPD + Zwitserse grondwet"],
];

const encryption = [
  ["TLS 1.3", "Verplicht op alle endpoints; oudere suites geweigerd."],
  ["DNSSEC", "Ondertekende zones tegen cache poisoning en spoofing."],
  ["HSTS Preload", "Browser-enforced HTTPS, geen downgrade mogelijk."],
  ["At-Rest Encryptie", "Versleutelde volumes binnen Zwitserse jurisdictie."],
];

function SecurityPage() {
  return (
    <PageShell
      index="02 / Security"
      title="Compliance & Swiss Law"
      lead="Datasoevereiniteit is geen feature maar een juridische positie. Zwitserland biedt een grondwettelijk beschermd kader dat US-jurisdicties niet kunnen evenaren."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <Panel>
          <span className="label-mono">Jurisdictie</span>
          <h3 className="mt-5 text-2xl leading-tight text-ebony">
            Zwitserse Datenschutzgesetz (FADP)
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-ink">
            De FADP (nLPD/DSG) verankert dataminimalisatie, doelbinding en transparantie in Zwitsers
            recht. Buitenlandse autoriteiten kunnen data enkel opvragen via formele rechtshulp,
            beoordeeld door een Zwitserse rechter — niet via een administratief bevel.
          </p>
        </Panel>
        <Panel>
          <span className="label-mono">Immuniteit</span>
          <h3 className="mt-5 text-2xl leading-tight text-ebony">US Cloud Act Immuniteit</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-ink">
            De US Cloud Act verplicht Amerikaanse bedrijven data te overhandigen, waar die ook staat
            — inclusief EU-regio's. Infomaniak is 100% Zwitsers eigendom zonder US-entiteit en valt
            daardoor buiten het bereik van deze wet.
          </p>
        </Panel>
      </section>

      <section>
        <SectionHeader
          index="A / Jurisdiction"
          title="US Cloud Act versus Zwitserse FADP"
          lead="Dezelfde data, twee fundamenteel verschillende rechtsposities."
        />
        <div className="blueprint-panel mt-10 hidden p-0 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gridline">
                <th className="p-5 font-mono text-[9px] tracking-[0.2em] text-muted-ink uppercase">
                  Parameter
                </th>
                <th className="p-5 font-mono text-[9px] tracking-[0.2em] text-muted-ink uppercase">
                  US Cloud Act — extraterritoriaal
                </th>
                <th className="p-5 font-mono text-[9px] tracking-[0.2em] text-moss uppercase">
                  Zwitserse FADP — grondwettelijk
                </th>
              </tr>
            </thead>
            <tbody>
              {jurisdiction.map(([k, us, ch]) => (
                <tr key={k} className="border-b border-gridline last:border-0">
                  <td className="p-5 font-mono text-[10px] tracking-[0.12em] text-ebony uppercase">
                    {k}
                  </td>
                  <td className="p-5 text-sm leading-relaxed text-muted-ink">{us}</td>
                  <td className="p-5 text-sm leading-relaxed text-moss">{ch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-5 md:hidden">
          {jurisdiction.map(([k, us, ch]) => (
            <div key={k} className="blueprint-panel p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-ebony uppercase">{k}</p>
              <div className="mt-5 space-y-5">
                <div>
                  <span className="label-mono">US Cloud Act</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-ink">{us}</p>
                </div>
                <div className="border-t border-gridline pt-5">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-moss uppercase">
                    Zwitserse FADP
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-ebony">{ch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="B / Certifications" title="ISO Certificeringen" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {isos.map((iso) => (
            <div key={iso.code} className="border border-gridline bg-card/60 p-7">
              <div className="flex items-center justify-between border-b border-gridline pb-4">
                <span className="font-mono text-[9px] tracking-[0.22em] text-muted-ink uppercase">
                  Certified
                </span>
                <span className="font-mono text-[9px] tracking-[0.22em] text-muted-ink uppercase">
                  CH
                </span>
              </div>
              <p className="mt-6 font-mono text-[15px] tracking-[0.08em] text-ebony">{iso.code}</p>
              <p className="mt-2 text-sm text-muted-ink">{iso.label}</p>
              <p className="mt-6 font-mono text-[9px] tracking-[0.18em] text-muted-ink uppercase">
                {iso.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="C / Encryption" title="Encryption Standards" />
        <Panel className="mt-10">
          <dl className="divide-y divide-gridline">
            {encryption.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-2 py-5 md:flex-row md:gap-10">
                <dt className="w-48 shrink-0 font-mono text-[10px] tracking-[0.16em] text-moss uppercase">
                  {k}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border-t border-gridline pt-8">
            <StatusChannel />
            <QualityStamps className="mt-8" />
          </div>
        </Panel>
      </section>

      <section>
        <SectionHeader index="D / Export" title="Dossier Export" />
        <Panel className="mt-10">
          <DossierDownload label="Download security-dossier (PDF)" />
        </Panel>
      </section>
    </PageShell>
  );
}
