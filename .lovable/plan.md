

# HomeSnapFix – AI Home Maintenance Intelligence Platform

## Phase 1: Design System & Global Layout
- Set up brand colors (neutral base + single accent color), typography, and spacing tokens in Tailwind config
- Create global Header with logo, navigation (Diagnose | DIY | Maintenance | Pros | Newsletter), and "Snap & Diagnose" CTA button
- Create global Footer with sitemap links, social icons, legal disclaimer, and affiliate disclosure
- Build reusable layout wrapper component used by all pages

## Phase 2: Home Page (/)
- Hero section with headline, subhead, and two CTAs (Upload a Photo → /app, Browse DIY Fixes → /diy)
- 3-step "How It Works" row (Upload → Diagnosis → Fix or Find a Pro)
- Common Issues grid (8 cards: drywall cracks, water stains, roof leaks, deck rot, HVAC, foundation cracks, electrical, mold) linking to /diy/[slug]
- AI Intelligence teaser section with CTA
- Pro Matching banner with CTA → /pros
- Newsletter email + ZIP capture section

## Phase 3: AI Diagnosis Page (/app)
- Photo upload component with drag/drop, mobile camera support, optional issue category dropdown, and ZIP field
- "Analyze Photo" button that POSTs to placeholder `/api/analyze` endpoint
- Results display: issue title, severity badge, confidence badge, summary, quick tips, DIY steps accordion, "When to Call a Pro" section, Tools & Materials with affiliate links
- "Download Report (PDF)" button that POSTs diagnosis data to `/api/pdf/report` and triggers file download
- "Get Matched with a Pro" CTA linking to /pros

## Phase 4: DIY Content Hub (/diy & /diy/[slug])
- Content hub listing page with category filters (Interior, Exterior, Plumbing, Electrical, HVAC, Roofing, Deck/Patio)
- 12 mock articles with full content structure: symptoms, causes, DIY steps, tools needed (affiliate placements), safety notes, when to call a pro
- Inline CTA on each article to try photo diagnosis

## Phase 5: Pro Matching Lead Gen (/pros)
- Lead capture form (name, email, phone, ZIP, issue type, budget range, preferred contact method, consent checkbox)
- Form validation with Zod
- Submit to placeholder `POST /api/lead`
- Success confirmation screen with "Try DIY first" secondary CTA

## Phase 6: Supporting Pages
- **/how-it-works** – Expanded 3-step process explanation
- **/maintenance-calendar** – Seasonal maintenance checklist with newsletter capture
- **/newsletter** – Dedicated signup page with value proposition
- **/about** – Brand story and mission
- **/contact** – Contact form
- **/privacy** and **/terms** – Legal pages with placeholder content

## Phase 7: Newsletter Capture Engine
- Reusable newsletter component (email + ZIP)
- Place capture points: hero, after diagnosis results, footer, maintenance calendar page
- Exit-intent popup trigger
- POST to placeholder `/api/newsletter`

## Phase 8: Data Types & API Layer
- Define TypeScript types: DiagnosisResult, Lead, NewsletterSubscriber
- Create API service layer with placeholder fetch calls for all endpoints
- Structure code for future Next.js SSR migration (pages in dedicated folders, data fetching separated from UI)

