import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Affiliate Disclosure — delplanche.cloud" },
      {
        name: "description",
        content:
          "Zero-tracking beleid: geen trackingcookies, geen marketingpixels. Plus onze transparante affiliate-verantwoording.",
      },
      { property: "og:title", content: "Privacy Policy & Affiliate Disclosure" },
      {
        property: "og:description",
        content: "Nul tracking, nul datamining, volledige transparantie over commissies.",
      },
    ],
  }),
  component: PrivacyPage,
});

const points = [
  ["Zero-Tracking", "Nul trackingcookies, nul externe marketingpixels, geen third-party scripts."],
  ["Geen profielopbouw", "We bouwen geen bezoekersprofielen en verkopen nooit data door."],
  ["Formulierdata", "Onboardingaanvragen worden enkel gebruikt om je infrastructuur op te zetten."],
  ["Logbestanden", "Serverlogs blijven binnen Zwitserse/EU-jurisdictie en worden kort bewaard."],
];

function PrivacyPage() {
  return (
    <PageShell
      index="05 / PRIVACY"
      title="Zero-Tracking Policy & Affiliate Disclosure"
      lead="Privacy is hier geen instelling die je moet aanzetten. Er is simpelweg niets dat je volgt."
    >
      <section>
        <SectionHeader index="A / POLICY" title="Zero-Tracking Beleid" />
        <Panel className="mt-6">
          <dl className="divide-y divide-gridline">
            {points.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-2 py-4 md:flex-row md:gap-8">
                <dt className="w-48 shrink-0 font-mono text-[11px] tracking-[0.12em] text-moss uppercase">
                  {k}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </section>

      <section>
        <SectionHeader index="B / DISCLOSURE" title="Transparante Verantwoording" />
        <Panel className="mt-6">
          <blockquote className="border-l border-moss pl-6 text-sm leading-relaxed text-ebony md:text-base">
            Delplanche kan een commissie ontvangen wanneer u diensten afneemt via onze links
            (/go/*). Dit beïnvloedt uw aankoopprijs niet en ondersteunt het onderhoud van onze
            soevereine infrastructurele tools.
          </blockquote>
          <p className="mt-8 text-sm leading-relaxed text-muted-ink">
            Aanbevelingen worden nooit bepaald door commissie, wel door eigen productiegebruik.
          </p>
        </Panel>
      </section>
    </PageShell>
  );
}
