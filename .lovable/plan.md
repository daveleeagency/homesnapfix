

## Plan: Upgrade Diagnose Page Category Selector

### 1. Create issue cluster data file (`src/data/issueClusters.ts`)
Define 6 clusters, each with 4–6 issue cards containing: `id`, `title`, `snippet`, `riskLevel` ("Low" | "Moderate" | "High"), and `category` (maps back to API category). Clusters:
1. Storm & Insurance-Related Damage (6 issues)
2. Water & Moisture Issues (5 issues)
3. Heating & Cooling Problems (4 issues)
4. Electrical & Fire Risks (5 issues)
5. Structural & Foundation Issues (5 issues)
6. Appliance Failures (4 issues)

### 2. Create `IssueClusters` component (`src/components/IssueClusters.tsx`)
- Uses Radix Accordion (already installed) for expand/collapse with animation
- Each cluster is an accordion item with cluster name as trigger
- Inside each: responsive grid of issue cards (1-col mobile, 2-col sm, 3-col md)
- Each card shows title, snippet, risk badge (color-coded: green/yellow/red), and "Select Issue" button
- On select: calls `onSelect(issue)` callback passing issue data up
- Soft insurance CTA paragraph below all clusters
- Semantic `<section>` tags, `aria-label` on clusters and cards
- `role="listbox"` / `role="option"` pattern or standard button semantics

### 3. Create `DiagnoseJsonLd` component (`src/components/DiagnoseJsonLd.tsx`)
Renders a `<script type="application/ld+json">` tag with:
- `ItemList` schema listing all issues from all clusters
- `FAQPage` schema with 3 safety disclaimer Q&As
- `LocalBusiness` placeholder schema

### 4. Update `DiagnosePage.tsx`
- Replace the `<Select>` category dropdown with the `<IssueClusters>` component
- Add state: `selectedIssue` storing the chosen issue object
- When issue selected: show selected issue summary + allow changing selection
- Pass `selectedIssue.category` to the analyze API call instead of old `category`
- Add `<DiagnoseJsonLd />` to the page
- Add `<Helmet>` or manual `useEffect` to inject `<meta name="robots" content="noindex">` 
- Keep photo upload, ZIP field, and analyze button as-is

### Files changed
- **New**: `src/data/issueClusters.ts`, `src/components/IssueClusters.tsx`, `src/components/DiagnoseJsonLd.tsx`
- **Modified**: `src/pages/DiagnosePage.tsx`

