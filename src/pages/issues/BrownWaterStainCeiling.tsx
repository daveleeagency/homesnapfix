import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "brown-water-stain-ceiling",
  seoTitle: "Brown Water Stain on Ceiling — Causes, Risks & What to Do",
  seoDescription: "A brown stain on your ceiling usually means water is or was leaking from above. Learn what causes ceiling water stains, how serious they are, and when to call a pro.",
  heading: "Brown Water Stain on Ceiling",
  bluf: "A brown or yellowish stain on your ceiling almost always means water has reached the drywall from above. The stain itself is cosmetic, but the underlying leak — from a roof issue, plumbing failure, or condensation — can cause mold growth, structural weakening, and further damage if left unaddressed. The priority is finding and stopping the water source, not just painting over the stain.",
  meaning: "Ceiling stains form when water saturates drywall and evaporates, leaving behind mineral deposits and discoloration. The stain may appear long after the leak started. A small stain does not always mean a small problem — water can travel along joists and pipes before dripping through the ceiling in a spot far from the actual source. If the stain is growing, soft to the touch, or accompanied by a musty smell, the leak is likely still active.",
  symptoms: [
    "Brown, yellow, or tan discoloration on the ceiling surface",
    "Ring-shaped or irregularly shaped stain that may grow over time",
    "Ceiling drywall feels soft, spongy, or damp when pressed gently",
    "Paint bubbling, peeling, or flaking around the stained area",
    "Musty or mildew smell in the room below the stain",
    "Visible dripping during or after heavy rain",
    "Stain appears directly below a bathroom, kitchen, or HVAC unit on the floor above",
  ],
  causes: [
    "Roof leak — damaged shingles, deteriorated flashing, or clogged gutters allowing water intrusion",
    "Plumbing leak — a slow drip from a supply line, drain, or toilet seal on the floor above",
    "HVAC condensation — a clogged condensate drain or poorly insulated ductwork producing excess moisture",
    "Ice dam — in cold climates, ice buildup at roof edges forces water under shingles",
    "Bathroom moisture — chronic steam without adequate ventilation saturating ceiling materials over time",
    "Appliance leak — washing machine, dishwasher, or water heater overflow on an upper floor",
  ],
  urgency: {
    text: "Not every ceiling stain requires emergency action, but an active or growing leak should be investigated promptly to prevent mold and structural damage.",
    items: [
      "The stain is growing noticeably over hours or days",
      "The ceiling is sagging, bulging, or feels soft",
      "Water is actively dripping through the ceiling",
      "You notice a strong musty or mildew odor",
      "The stain is near electrical fixtures or wiring",
    ],
  },
  diy: [
    "The stain is small, dry, and has not changed size in weeks",
    "You can identify a simple cause like a loose toilet supply line and tighten it",
    "You want to clean and repaint a cosmetic stain after confirming the leak is fixed",
    "You have attic access and can visually inspect for daylight or moisture above the stain",
  ],
  callPro: [
    "The stain is actively growing or the ceiling feels wet or soft",
    "You cannot identify the water source from accessible areas",
    "The stain is near electrical wiring or fixtures",
    "You suspect a roof leak but cannot safely access the roof",
    "There is visible mold growth on or around the stain",
    "The stain appeared after a storm and may be insurance-relevant",
  ],
  safety: "If the ceiling is sagging or bulging, stay clear of the area — water-logged drywall can collapse suddenly. If water is near electrical fixtures, turn off the circuit at the breaker before investigating. Never ignore a ceiling stain near a light fixture or ceiling fan.",
  insurance: "Homeowners insurance may cover ceiling damage from sudden events like a burst pipe or storm-related roof leak. Gradual leaks from deferred maintenance or long-term wear are typically not covered. Document the stain with photos and timestamps before making repairs, and contact your insurer promptly if you believe the cause was sudden or accidental.",
  faqs: [
    {
      q: "Is a brown ceiling stain dangerous?",
      a: "The stain itself isn't dangerous, but what caused it may be. An ongoing or unresolved leak can promote mold growth, weaken drywall, and rot structural wood. A stain that is dry, stable, and hasn't grown in weeks is low priority. A stain that's wet, growing, or near electrical fixtures needs prompt investigation.",
    },
    {
      q: "Can I just paint over a ceiling water stain?",
      a: "Only after confirming the leak is completely resolved. Painting over an active or unresolved stain will bleed through within days. Use a shellac-based or oil-based stain-blocking primer, let it dry fully, then repaint. Latex primer alone rarely holds.",
    },
    {
      q: "How do I tell if a ceiling leak is still active?",
      a: "Mark the edge of the stain with pencil and date it. Check back in a few days — if it's grown, water is still entering. You can also press gently on the drywall: a soft or spongy texture means moisture is present. A dry, firm surface suggests the leak may have stopped.",
    },
    {
      q: "Will homeowners insurance cover a water-stained ceiling?",
      a: "It depends on the cause. Sudden events — burst pipe, storm-related roof damage — are often covered. Gradual leaks from deferred maintenance typically are not. Document with dated photos before making repairs and call your insurer before starting any work if you think it may be a covered loss.",
    },
  ],
  relatedIssues: [
    { label: "Roof Leak", href: "/issues/roofing" },
    { label: "Soft Spot on Ceiling", href: "/issues/soft-spot-ceiling" },
    { label: "Mold & Moisture", href: "/issues/mold-moisture" },
    { label: "Peeling Paint from Moisture", href: "/issues/peeling-paint-moisture" },
    { label: "Plumbing Leaks", href: "/issues/plumbing" },
  ],
  parentCategory: { label: "Roofing Issues", href: "/issues/roofing" },
};

export default function BrownWaterStainCeiling() {
  return <IssueDetailPage data={data} />;
}
