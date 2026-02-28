

## Plan: Schema Strategy Update + Insurance Cross-Sell on Results Page

### 1. Update `DiagnoseJsonLd.tsx` — Enhanced Schema
- Rename ItemList to "Common U.S. Home Repair Issues 2026"
- Add `numberOfItems` and `description` fields to each ListItem for richer entity alignment

### 2. Add insurance cross-sell block to `ResultsPage.tsx`
Insert a new `Card` after the "When to Call a Pro" section and before the action buttons:

- **Title**: "Unexpected Repair Costs?"
- **Copy**: "If the issue was caused by storm, sudden pipe failure, or accidental damage, homeowners insurance may help offset costs depending on your policy."
- **Button 1**: "Learn What's Typically Covered" → links to `/insurance/home-coverage-guide` (placeholder route, renders a coming-soon page or uses `#` with tooltip)
- **Button 2**: "Compare Home & Auto Bundling Options" → same target
- **EEAT disclaimers** below the buttons (3 lines, muted small text):
  - "We are not an insurance provider."
  - "Coverage depends on individual policy."
  - "This tool provides informational guidance only."
- Styling: subtle border, muted background (`bg-muted/30`), no aggressive colors

### 3. Create `ResultsJsonLd.tsx` component
Inject on the Results page:
- `ItemList` schema with the diagnosed issue + related repair items
- Reuse the FAQ safety schema from DiagnoseJsonLd

### Files changed
- **Modified**: `src/components/DiagnoseJsonLd.tsx` (updated ItemList name)
- **Modified**: `src/pages/ResultsPage.tsx` (insurance cross-sell card + ResultsJsonLd)
- **New**: `src/components/ResultsJsonLd.tsx`

