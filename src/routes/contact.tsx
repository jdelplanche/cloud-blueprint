import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MessageSquareLock, Copy, Check, Loader2 } from "lucide-react";
import { ActionButton, ArrowGlyph, PageShell, Panel, SectionHeader } from "@/components/site/Primitives";
import { submitContactMessage } from "@/lib/submissions.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Direct Contact Hub — delplanche.cloud" },
      {
        name: "description",
        content:
          "Contacteer Delplanche via het beveiligde contactformulier, versleutelde mail, het Matrix-protocol of verifieer onze PGP-fingerprint.",
      },
      { property: "og:title", content: "Direct Contact Hub — delplanche.cloud" },
      {
        property: "og:description",
        content: "Soevereine communicatievectoren: formulier, e-mail, Matrix en PGP.",
      },
    ],
  }),
  component: ContactPage,
});

const FINGERPRINT = "4A2B 8F91 C3E4 D5F6 7890 1234 5678 90AB CDEF 1234";
const MATRIX_ID = "@jona:delplanche.cloud";

function ContactPage() {
  const [copied, setCopied] = useState<"pgp" | "matrix" | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const send = useServerFn(submitContactMessage);

  const copy = async (value: string, key: "pgp" | "matrix") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 2400);
    } catch {
      setCopied(null);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    try {
      await send({
        data: {
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          subject: String(form.get("subject") ?? ""),
          message: String(form.get("message") ?? ""),
        },
      });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <PageShell
      index="04 / Contact"
      title="Sovereign Direct Vectors"
      lead="Geen CRM-tracking, geen advertentiepixels. Eén beveiligd formulier en drie directe kanalen, elk end-to-end te verifiëren."
    >
      <section>
        <SectionHeader
          index="A / Transmission"
          title="Beveiligd Contactformulier"
          lead="Elk bericht wordt vastgelegd in de Delplanche-inbox en beantwoord vanaf core@delplanche.cloud."
        />
        <Panel className="mt-10">
          {state === "sent" ? (
            <div>
              <div className="flex items-center gap-2.5">
                <span className="pulse-dot" />
                <p className="font-mono text-[10px] tracking-[0.18em] text-moss uppercase">
                  Bericht ontvangen — in behandeling
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-ink">
                Je bericht staat in de wachtrij van core@delplanche.cloud. Antwoord volgt normaal
                binnen één werkdag.
              </p>
              <ActionButton className="mt-10" onClick={() => setState("idle")}>
                Nieuw bericht <ArrowGlyph />
              </ActionButton>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-10 md:grid-cols-2">
              <Field label="Naam">
                <input required name="name" className="atelier-input" placeholder="Jona Delplanche" />
              </Field>
              <Field label="E-mailadres">
                <input
                  required
                  type="email"
                  name="email"
                  className="atelier-input"
                  placeholder="jij@bedrijf.be"
                />
              </Field>
              <div className="md:col-span-2">
                <Field label="Onderwerp">
                  <input
                    required
                    name="subject"
                    className="atelier-input"
                    placeholder="Migratie van 12 mailboxen naar kSuite"
                  />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Bericht">
                  <textarea
                    required
                    name="message"
                    rows={5}
                    minLength={10}
                    className="atelier-input resize-none"
                    placeholder="Beschrijf je huidige setup en wat je wil bereiken…"
                  />
                </Field>
              </div>
              <div className="flex flex-wrap items-center gap-6 md:col-span-2">
                <ActionButton type="submit" disabled={state === "sending"}>
                  {state === "sending" ? (
                    <>
                      <Loader2 size={12} className="animate-spin" /> Verzenden…
                    </>
                  ) : (
                    <>
                      Verzend naar core@delplanche.cloud <ArrowGlyph />
                    </>
                  )}
                </ActionButton>
                <span className="label-mono">Zero-tracking formulier</span>
                {state === "error" && (
                  <span
                    aria-live="polite"
                    className="font-mono text-[10px] tracking-[0.16em] text-terracotta uppercase"
                  >
                    Verzenden mislukt — probeer opnieuw of mail direct
                  </span>
                )}
              </div>
            </form>
          )}
        </Panel>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Panel>
          <Mail size={16} strokeWidth={1.2} className="text-moss" />
          <span className="mt-6 block label-mono">Direct Mail</span>
          <a
            href="mailto:core@delplanche.cloud"
            className="mt-3 block font-mono text-[14px] text-ebony transition-colors hover:text-moss"
          >
            core@delplanche.cloud
          </a>
          <p className="mt-5 text-sm leading-relaxed text-muted-ink">
            Gehost op Infomaniak kMail — Zwitserse jurisdictie, geen scanning.
          </p>
        </Panel>
        <Panel>
          <MessageSquareLock size={16} strokeWidth={1.2} className="text-moss" />
          <span className="mt-6 block label-mono">Decentraal Matrix Protocol</span>
          <a
            href={`https://matrix.to/#/${MATRIX_ID}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block font-mono text-[14px] text-ebony transition-colors hover:text-moss"
          >
            {MATRIX_ID}
          </a>
          <p className="mt-5 text-sm leading-relaxed text-muted-ink">
            End-to-end versleuteld, federatief. Voor realtime technisch overleg.
          </p>
          <ActionButton className="mt-7" onClick={() => copy(MATRIX_ID, "matrix")}>
            {copied === "matrix" ? <Check size={12} /> : <Copy size={12} />}
            {copied === "matrix" ? "Gekopieerd" : "Kopieer Matrix-ID"}
          </ActionButton>
        </Panel>
      </section>

      <section>
        <SectionHeader
          index="B / Verification"
          title="PGP Public Key Fingerprint"
          lead="Verifieer altijd de fingerprint voordat je vertrouwelijke data verstuurt."
        />
        <Panel className="mt-10">
          <div className="border-t border-b border-gridline py-6">
            <p className="font-mono text-[12px] leading-relaxed break-words text-ebony md:text-[14px]">
              {FINGERPRINT}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <ActionButton onClick={() => copy(FINGERPRINT, "pgp")}>
              {copied === "pgp" ? <Check size={12} /> : <Copy size={12} />}
              {copied === "pgp" ? "Gekopieerd" : "Kopieer Fingerprint"}
            </ActionButton>
            <span
              aria-live="polite"
              className={`border border-gridline bg-card px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-moss uppercase transition-opacity duration-300 ${
                copied === "pgp" ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              Fingerprint gekopieerd naar klembord
            </span>
          </div>
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
