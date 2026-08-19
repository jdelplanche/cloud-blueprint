import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  ActionButton,
  ArrowGlyph,
  PageShell,
  Panel,
  SectionHeader,
} from "@/components/site/Primitives";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Client Onboarding Protocol — delplanche.cloud" },
      {
        name: "description",
        content:
          "Vraag Turn-Key onboarding aan: DNS, SSL, e-mail en webserver volledig geconfigureerd binnen 24 uur.",
      },
      { property: "og:title", content: "Client Onboarding Protocol — delplanche.cloud" },
      {
        property: "og:description",
        content: "Drie stappen van pakketkeuze tot productieklare Zwitserse infrastructuur.",
      },
    ],
  }),
  component: OnboardingPage,
});

const steps = [
  ["01", "Select Stack", "Kies het gewenste Infomaniak-pakket via onze geautoriseerde routing-links."],
  ["02", "Grant Access", "Wijs Delplanche aan als technisch beheerder binnen je Infomaniak console."],
  ["03", "Turn-Key Setup", "Wij configureren je DNS, SSL, e-mail en webserver binnen 24 uur."],
];

function OnboardingPage() {
  const [state, setState] = useState<"idle" | "checking" | "done" | "error">("idle");
  const [ticket, setTicket] = useState("");
  const [queue, setQueue] = useState(1);
  const submitRequest = useServerFn(submitInfraRequest);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("checking");
    try {
      const result = await submitRequest({
        data: {
          org: String(form.get("org") ?? ""),
          domain: String(form.get("domain") ?? ""),
          stack: String(form.get("stack") ?? "webhosting") as
            | "webhosting"
            | "vps"
            | "ksuite"
            | "custom",
          account: String(form.get("account") ?? "existing") as "existing" | "new",
          email: String(form.get("email") ?? ""),
          notes: String(form.get("notes") ?? ""),
        },
      });
      setTicket(result.ticket);
      setQueue(result.queue);
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <PageShell
      index="03 / Onboarding"
      title="Concierge Infrastructure Application"
      lead="Dien je infrastructuuraanvraag in. Elke aanvraag wordt manueel gevalideerd door een architect voordat de configuratie start."
    >
      <section>
        <SectionHeader index="A / Workflow" title="Workflow Overview" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([id, title, body]) => (
            <div key={id} className="border-t border-gridline pt-6">
              <span className="font-mono text-[10px] tracking-[0.22em] text-muted-ink">{id}</span>
              <h3 className="mt-4 text-xl text-ebony">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="B / Application" title="Infrastructure Request" />
        <Panel className="mt-10">
          {state === "done" ? (
            <div>
              <div className="flex items-center gap-2.5">
                <span className="pulse-dot" />
                <p className="font-mono text-[10px] tracking-[0.18em] text-moss uppercase">
                  Aanvraag gevalideerd — wachtrij bevestigd
                </p>
              </div>
              <dl className="mt-10 divide-y divide-gridline border-y border-gridline">
                {[
                  ["Ticket ID", ticket],
                  ["Queue position", "02 / 07"],
                  ["Validatie", "Automatische pre-check voltooid"],
                  ["Verwachte setup", "< 24 uur na toegangsverlening"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-wrap justify-between gap-4 py-4">
                    <dt className="label-mono">{k}</dt>
                    <dd className="font-mono text-[11px] text-ebony">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-muted-ink">
                Je ontvangt binnenkort een bevestiging op het opgegeven domein-contact.
              </p>
              <ActionButton className="mt-10" onClick={() => setState("idle")}>
                Nieuwe aanvraag <ArrowGlyph />
              </ActionButton>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-10 md:grid-cols-2">
              <Field label="Organisatie / Naam">
                <input required name="org" className="atelier-input" placeholder="Delplanche BV" />
              </Field>
              <Field label="Gewenste Domeinnaam">
                <input required name="domain" className="atelier-input" placeholder="bedrijf.be" />
              </Field>
              <Field label="Stack Keuze">
                <select required name="stack" defaultValue="webhosting" className="atelier-input">
                  <option value="webhosting">Managed Webhosting &amp; Mail</option>
                  <option value="vps">Cloud VPS &amp; Bare-Metal</option>
                  <option value="ksuite">kSuite &amp; Privacy Storage</option>
                  <option value="custom">Custom Architectuur</option>
                </select>
              </Field>
              <Field label="Infomaniak Account Status">
                <div className="flex flex-col gap-3 pt-1">
                  {[
                    ["existing", "Ik heb al een account"],
                    ["new", "Ik moet dit nog aanmaken"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex items-center gap-3 font-mono text-[11px] text-ebony"
                    >
                      <input
                        type="radio"
                        name="account"
                        value={value}
                        defaultChecked={value === "existing"}
                        className="h-3 w-3 accent-[var(--moss)]"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </Field>
              <div className="md:col-span-2">
                <Field label="Infrastructuur Notities">
                  <textarea
                    name="notes"
                    rows={4}
                    className="atelier-input resize-none"
                    placeholder="Huidige hosting, migratievereisten, mailboxen, verwacht verkeer…"
                  />
                </Field>
              </div>
              <div className="flex flex-wrap items-center gap-6 md:col-span-2">
                <ActionButton type="submit" disabled={state === "checking"}>
                  {state === "checking" ? (
                    <>
                      <Loader2 size={12} className="animate-spin" /> Validatie loopt…
                    </>
                  ) : (
                    <>
                      Verzend voor Infrastructurele Validatie <ArrowGlyph />
                    </>
                  )}
                </ActionButton>
                <span className="label-mono">Zero-tracking formulier</span>
              </div>
            </form>
          )}
        </Panel>
      </section>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-mono">{label}</span>
      <div className="mt-3">{children}</div>
    </label>
  );
}
