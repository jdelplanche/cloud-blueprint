# Sovereign Blueprint

MASTER SPECIFICATION DOSSIER

Project: delplanche.cloud — Sovereign Infrastructure Hub

Target Platform: Lovable (React + Tailwind CSS)

Architectural Style: Annotated Architectural Dossier (Swiss Grid, Warm Linen, Redline Terracotta)

Version: 1.0 (Production Master)

1. Executive Summary & Design System

1.1 Core Mission

delplanche.cloud is an elite, minimalist European/Swiss Cloud Infrastructure Hub. It recommends curated Infomaniak infrastructure stacks for businesses and creators demanding data sovereignty, Swiss jurisdiction (FADP), and 100% renewable energy. It also acts as the gateway for Delplanche Turn-Key Onboarding Services.

1.2 Design System Tokens (Tailwind Specs)

{

  "colors": {

    "canvas": "#F5F3EF",        /* Warm Linen background */

    "grid": "#E2DFD8",          /* Thin blueprint grid lines */

    "ebony": "#1C1D1F",         /* Deep charcoal body text */

    "moss": "#2A4736",          /* Alpine Moss Green (Status, Primary Badges) */

    "moss-hover": "#21382A",    

    "terracotta": "#C26D52",    /* Redline Markup Color (Handwritten overlay) */

    "muted": "#75736E"          /* Metadata & Secondary text */

  },

  "fonts": {

    "sans": "Inter, system-ui, sans-serif",

    "mono": "'JetBrains Mono', monospace",

    "handwriting": "'Caveat', cursive"  /* For Terracotta Redline Markups */

  }

}



2. Lovable Master Prompt (Copy-Pasteable)

Plak de onderstaande prompt in de Lovable chat interface om het complete project met alle componenten, routing en styling in één keer op te bouwen:

Build a high-end, responsive single-page/multi-route web application for "delplanche.cloud" using React, Tailwind CSS, Lucide Icons, and React Router.



### DESIGN SYSTEM & VISUAL SPECIFICATION:

- Aesthetic: "Annotated Architectural Dossier" (Swiss precision meets physical blueprint).

- Background: Warm Linen (#F5F3EF) with a subtle CSS background grid pattern (24px x 24px grid using #E2DFD8 lines).

- Borders: Crisp, 1px solid borders (#E2DFD8) on all cards and containers.

- Typography:

  - Sans: Clean sans-serif for titles & body text (#1C1D1F).

  - Mono: JetBrains Mono for badges, data tables, and status pills.

  - Handwritten Overlay: Caveat font in Terracotta Redline (#C26D52) for notes, handwritten arrows, and review circles.



### LAYOUT & GLOBAL COMPONENTS:

1. FIXED TOP NAVIGATION:

   - Left: "DELPLANCHE / CLOUD" (Mono font, bold, 13px)

   - Center: Status pill with pulsing green dot: "● SWISS DC ACTIVE (GENEVA)"

   - Right: Nav links: [01 STACK] [02 SECURITY] [03 ONBOARDING] [04 CONTACT]

2. REDLINE MARKUP COMPONENT:

   - Create a reusable <RedlineNote> component that renders text in Terracotta (#C26D52) with handwriting font, slightly rotated (-2 deg), paired with small vector arrows pointing to UI elements.

3. FOOTER:

   - Transparent Stewardship Disclosure: "Delplanche kan een commissie ontvangen bij aankopen via onze geautoriseerde links. Dit kost u niets extra en ondersteunt ons soevereine ecosysteem."

   - Nav links: [Privacy Policy & Affiliate Disclosure] [Legal Impressum] [Network Status]



### PAGES & ROUTES TO IMPLEMENT:



1. HOME PAGE (`/`):

   - Hero Section:

     - Badge: "[ STATUS: VERIFIED SWISS STACK ]"

     - Title: "Sovereign Cloud Architecture."

     - Subtitle: "Gecureerde Europese en Zwitserse infrastructuur voor bedrijven en projecten die absolute datasoevereiniteit eisen."

     - Redline Note: "// Geen US Cloud Act risico. 100% Zwitserse datacenters op waterkracht."

     - CTA Buttons: "Bekijk Cloud Stacks ↗" (scrolls to cards) and "Turn-Key Onboarding ↗" (navigates to /onboarding).

   - Interactive Dataflow Schema:

     - Visual flow: [Client Browser] -> (TLS 1.3 Encryption) -> [Delplanche Edge] -> [Infomaniak DC (Genève)].

     - Redline markup circling the Infomaniak node with note: "// 100% FADP Privacy Compliance".

   - Curated Stacks Grid (3 Cards):

     - Card 1: "Managed Webhosting & Mail" | Specs: 100 GB NVMe, 20 Mailboxen, Unlimited Bandwidth | CTA: "Bestel Webhosting ↗" (link to /go/hosting) | Redline: "// Onze vaste keuze voor KMO-websites."

     - Card 2: "Cloud VPS & Bare-Metal" | Specs: Dedicated Compute, NVMe Arrays, Custom OS | CTA: "Configureer VPS ↗" (link to /go/vps) | Redline: "// Voor zwaardere SaaS & databases."

     - Card 3: "kSuite & Privacy Storage" | Specs: kDrive, kMail, Swiss Transfer | CTA: "Ontdek Privacy Suite ↗" (link to /go/ksuite) | Redline: "// Het Europese MS365 alternatief."

   - Turn-Key Onboarding Teaser:

     - 3-step process overview with link to /onboarding.



2. STACK SPECS PAGE (`/stack`):

   - Comprehensive technical breakdown table comparing US Big Tech (AWS/Azure) vs. Delplanche / Infomaniak Stack across Jurisdiction, Energy, Egress Costs, and Privacy Laws.

   - Datacenter hardware specifications (Tier 3+, PUE < 1.1, 100% renewable energy).



3. CLIENT ONBOARDING PROTOCOL (`/onboarding`):

   - Clean form: Company Name, Domain Name, Stack Selection (Webhosting, VPS, kSuite, Custom), Existing Infomaniak Account (Yes/No), Notes.

   - Interactive success state after submission simulating an automated queue check.



4. SECURITY & COMPLIANCE PAGE (`/security`):

   - Explanations of Swiss FADP Law, US Cloud Act Immunity, and ISO 27001/14001 certifications.



5. DIRECT CONTACT HUB (`/contact`):

   - Encrypted Mail vector (`cloud@delplanche.cloud`), Decentralized Matrix ID (`@jona:delplanche.cloud`), and PGP Fingerprint box with copy button.



6. PRIVACY & LEGAL (`/privacy`, `/legal`):

   - Full Zero-Tracking Policy & Transparent Affiliate Disclosure terms.



Ensure smooth transitions, mobile responsiveness, high contrast, and clean modular code layout.



3. Blueprint per Pagina (Volledige Content Specificatie)

Pagina 1: / — The Executive Blueprint (Homepage)

A. Hero Section

 * Status Badge: [ STATUS: VERIFIED SWISS STACK ] (Border: 1px #E2DFD8, Text: Moss #2A4736).

 * H1: Sovereign Cloud Architecture.

 * Body Copy: "Gecureerde Europese en Zwitserse infrastructuur voor bedrijven en projecten die absolute datasoevereiniteit, ongeëvenaarde uptime en juridische bescherming eisen."

 * Redline Annotation:

   * Tekst: // Nul risico op de US Cloud Act. Gecertificeerde Tier 3+ datacenters op Zwitserse waterkracht.

   * Positie: Boven/naast de H1 met een handgetekende pijl.

B. Direct Architecture Flow Component

Een strakke vector/flexbox rij die de beveiligde datastroom toont:

 * Redline Annotation: Cirkel rond Infomaniak DC (Genève) met handgeschreven noot: // Unieke bescherming onder het Zwitserse recht (FADP).

C. The Curated Stacks (3-Column Grid)

| Card | Titel | Key Specs | Action Button | Redline Annotation |

|---|---|---|---|---|

| 01 | Managed Webhosting & Mail | • 100 GB NVMe Storage

• 20 Professionele Mailboxen

• Onbeperkt dataverkeer

• Gratis SSL & Let's Encrypt | Bestel Webhosting ↗

(Redirects /go/hosting) | // Aanbevolen voor KMO's, webshops & bureaus. |

| 02 | Cloud VPS & Bare-Metal | • Dedicated Compute Cores

• Schaalbaar RAM & NVMe

• Custom Linux / Docker support

• High-Availability cluster | Configureer VPS Instance ↗

(Redirects /go/vps) | // Ideaal voor zware SaaS-productie & databases. |

| 03 | kSuite & Privacy Storage | • MS365 & Google Workspace alternatief

• End-to-end versleutelde kDrive

• kMail & Swiss Transfer

• Nul datamining | Ontdek Privacy Suite ↗

(Redirects /go/ksuite) | // Hét soevereine kantoorplatform voor teams. |

Pagina 2: /stack — Deep-Dive Architectural Specifications

A. Direct Comparison Matrix Table

| Parameter | US Cloud Giants (AWS / Azure / GCP) | Delplanche / Infomaniak Stack |

|---|---|---|

| Juridische Bescherming | US Cloud Act (FBI/NSA hebben directe toegang) | Zwitserse FADP & EU-AVG/GDPR |

| Datacenter Energie | Vaak fossiel / indirect gecompenseerd | 100% Hernieuwbaar (Waterkracht & Zonne-energie) |

| Koeltechniek | Traditionele airconditioning | 100% Buitenluchtkoeling (Geen A/C) |

| PUE-Efficiëntie Index | ~1.35 tot 1.6 (Industriegemiddelde) | < 1.1 (Wereldwijde Top) |

| Bandbreedte / Egress | Onvoorspelbaar & extreem duur | Vaste, transparante tarieven (Geen verrassingen) |

| Eigendomsstructuur | Beursgenoteerde US Tech Giganten | 100% Onafhankelijk Europees familiebedrijf |

Pagina 3: /onboarding — Client Protocol & Turn-Key Request

A. Workflow Steps Overview

 * 01. SELECT STACK: Kies het gewenste Infomaniak-pakket via onze geautoriseerde routing-links.

 * 02. GRANT ACCESS: Wijs Delplanche aan als technisch beheerder binnen je Infomaniak console.

 * 03. TURN-KEY SETUP: Wij configureren je DNS, SSL, e-mail en webserver binnen 24 uur.

B. Formulier Velden

 * Organisatie / Naam [ Text Input ]

 * Domeinnaam [ Text Input, bijv: bedrijf.be ]

 * Gewenste Stack [ Select Dropdown: Webhosting / Cloud VPS / kSuite / Custom ]

 * Infomaniak Account Status [ Radio: Ik heb al een account / Ik moet dit nog aanmaken ]

 * Infrastructuur Notities [ Textarea ]

 * Submit Action: [ VERZEND VOOR INFRASTRUCTURELE VALIDATIE ↗ ]

Pagina 4: /security — Compliance & Swiss Law

 * Zwitserse Datenschutzgesetz (FADP): Uitleg over de juridische voordelen van Zwitserse datasoevereiniteit ten opzichte van US jurisdicties.

 * ISO Certificeringen:

   * ISO 27001 (Informatiebeveiliging)

   * ISO 14001 (Milieumanagement)

   * ISO 50001 (Energie-efficiëntie)

 * Encryption Standards: TLS 1.3 verplicht, DNSSEC ondersteuning, HSTS preloading.

Pagina 5: /contact — Sovereign Direct Vectors

A. Direct Vectors

 * E-Mail Vector: cloud@delplanche.cloud

 * Decentraal Matrix Protocol: @jona:delplanche.cloud

 * PGP Public Key Fingerprint:

   4A2B 8F91 C3E4 D5F6 7890 1234 5678 90AB CDEF 1234



   (Inclusief eendelige [ KOPIEER FINGERPRINT ] button)

Pagina 6 & 7: /privacy & /legal

A. Privacy & Transparent Affiliate Disclosure

 * Zero-Tracking: Nul trackingcookies, nul externe marketingpixels.

 * Affiliate Disclosure:

   > "Transparante Verantwoording: Delplanche kan een commissie ontvangen wanneer u diensten afneemt via onze links (/go/*). Dit beïnvloedt uw aankoopprijs niet en ondersteunt het onderhoud van onze soevereine infrastructurele tools."

   > 

B. Legal / Impressum

 * Beheerder: Delplanche / Jona Zeno Delplanche

 * Locatie: Brussel, België / Europa

 * Contact: cloud@delplanche.cloud

4. Technische Implementatie-instructies in Lovable

4.1 Tailwind CSS Custom Font Setup

Voeg dit toe aan de index.html of CSS-imports in Lovable voor de juiste typografie:

<!-- Google Fonts for Blueprint Typography -->

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">



4.2 Tailwind Config Custom Extensions

In tailwind.config.js:

module.exports = {

  theme: {

    extend: {

      colors: {

        canvas: '#F5F3EF',

        gridline: '#E2DFD8',

        ebony: '#1C1D1F',

        moss: {

          DEFAULT: '#2A4736',

          hover: '#21382A',

        },

        terracotta: '#C26D52',

      },

      fontFamily: {

        sans: ['Inter', 'sans-serif'],

        mono: ['JetBrains Mono', 'monospace'],

        handwriting: ['Caveat', 'cursive'],

      },

    },

  },

};



5. Uitvoeringsstappenplan (Execution Pipeline)

[ STAP 1: LOVABLE PROMPT ] ──> Plak Master Prompt in Lovable & Genereer App

         │

[ STAP 2: VISUAL REVIEW  ] ──> Controleer Warm Linen background + Terracotta Markups

         │

[ STAP 3: GITHUB SYNC    ] ──> Koppel Lovable direct aan GitHub Repository

         │

[ STAP 4: INFOMANIAK DEPLOY ] ──> Connect GitHub R

epo met Infomaniak Static Web Hosting



Dit document bevat de volledige blauwdruk. Je kunt de Master Prompt uit Sectie 2 nu rechtstreeks kopiëren en in Lovable plakken om de applicatie tot leven te wekken.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://delplanche.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1893568d-2fe2-4dbb-8f59-938b7405ea46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
