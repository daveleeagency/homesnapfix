import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "peeling-paint-moisture",
  seoTitle: "Peeling Paint from Moisture — Causes, Risks & Repair Advice",
  seoDescription: "Peeling, bubbling, or flaking paint on interior walls or ceilings usually signals a moisture problem behind the surface. Learn what to check and when to get help.",
  heading: "Peeling Paint from Moisture Damage",
  bluf: "When interior paint peels, bubbles, or flakes — especially in bathrooms, kitchens, or near exterior walls — it almost always means moisture is reaching the wall surface from behind or from high humidity. Repainting without fixing the moisture source will only produce the same result again. Find and resolve the water or humidity issue first, then repaint with appropriate moisture-resistant primer and paint.",
  meaning: "Paint adheres to dry, properly prepared surfaces. When moisture migrates through the wall — from a leak, condensation, or exterior water intrusion — it breaks the bond between the paint film and the substrate, causing bubbling, peeling, and flaking. The peeling paint is the symptom; the moisture path is the problem. Left unchecked, the underlying drywall or plaster can deteriorate and mold can develop behind the surface.",
  symptoms: [
    "Paint bubbling or blistering on walls or ceilings",
    "Paint peeling away from the surface in sheets or chips",
    "Surface feels damp or cool to the touch in the affected area",
    "Discoloration or dark spots beneath the peeling paint",
    "A musty smell near the affected wall or ceiling",
    "Issue recurring after repainting the same area",
    "Peeling concentrated near windows, exterior corners, or bathroom fixtures",
  ],
  causes: [
    "Poor bathroom ventilation — steam from showers saturates walls over time",
    "Exterior water intrusion — rain entering through cracks in siding, failed caulk, or damaged flashing",
    "Interior plumbing leak — a slow leak behind the wall wetting the drywall from inside",
    "Condensation — cold exterior walls meeting warm humid interior air, especially in winter",
    "Rising damp — moisture wicking up from the foundation through masonry walls (more common in older homes)",
    "Painting over damp surfaces — if the wall was not fully dry when painted, adhesion fails",
    "Using the wrong paint — non-moisture-resistant paint in bathrooms or kitchens fails faster",
  ],
  urgency: {
    text: "Peeling paint itself is cosmetic, but the underlying moisture problem will get worse over time. Address it within weeks.",
    items: [
      "You see dark mold growing under or behind the peeling paint",
      "The drywall underneath feels soft, crumbly, or spongy",
      "The affected area is growing noticeably over days or weeks",
      "Peeling is occurring on multiple walls or in multiple rooms",
    ],
  },
  diy: [
    "Improve bathroom ventilation — run the exhaust fan during and 20 minutes after showers",
    "Scrape peeling paint, sand smooth, prime with a moisture-blocking primer, and repaint",
    "Check exterior caulk around windows and doors near the affected wall and re-seal if failed",
    "Use moisture-resistant or mildew-resistant paint in bathrooms and kitchens",
    "Use a dehumidifier in chronically damp rooms",
  ],
  callPro: [
    "The drywall behind the paint is damaged, soft, or crumbling",
    "You find mold behind the paint when you scrape it away",
    "The moisture source is a leak you cannot locate or access",
    "The problem affects exterior walls and may involve siding, flashing, or drainage issues",
    "Peeling is widespread or recurring despite proper repainting",
  ],
  safety: "If you find mold behind peeling paint, wear gloves and a mask while scraping. Disturbing mold can release spores. For areas larger than a few square feet, consider professional mold remediation. In pre-1978 homes, peeling paint may contain lead — test before scraping and follow EPA lead-safe work practices.",
  insurance: "Cosmetic paint damage from humidity or deferred maintenance is not covered by homeowners insurance. If the peeling is caused by a sudden covered event like a burst pipe, the resulting damage (including wall repair) may be covered. Lead paint abatement and mold remediation are generally not covered unless tied to a covered loss.",
  faqs: [
    {
      q: "Why is paint peeling in only certain spots?",
      a: "Peeling paint is almost always caused by localized moisture — from a hidden leak, condensation on a cold exterior wall, or insufficient ventilation. Spots near windows, corners, and ceilings are most vulnerable. The location of peeling often points directly to the moisture source.",
    },
    {
      q: "Can I just repaint over peeling paint?",
      a: "No. Painting over peeling or bubbling paint without addressing the moisture source will produce the same result again, often faster. You must fix the moisture issue first, let the surface dry fully, scrape and sand the damaged area, prime with a moisture-blocking primer, then repaint.",
    },
    {
      q: "Is peeling paint a sign of mold?",
      a: "Peeling paint from moisture creates ideal conditions for mold, and mold is sometimes found just beneath peeling paint on the drywall surface. If you see discoloration — black, green, or gray spots — after removing peeling paint, treat the area with a mold-killing solution before priming and repainting.",
    },
    {
      q: "My bathroom paint keeps peeling no matter what I do. What's wrong?",
      a: "The most common cause of recurring bathroom paint peeling is inadequate ventilation. Steam from showers that doesn't leave the room condenses on cooler walls and ceiling, breaking down paint adhesion over time. Make sure your exhaust fan vents outside (not into the attic), run it for 30 minutes after showers, and use a moisture-resistant paint formulated for bathrooms.",
    },
  ],
  relatedIssues: [
    { label: "Mold & Moisture", href: "/issues/mold-moisture" },
    { label: "Musty Smell in Bathroom", href: "/issues/musty-smell-bathroom" },
    { label: "Brown Water Stain on Ceiling", href: "/issues/brown-water-stain-ceiling" },
    { label: "Soft Spot on Ceiling", href: "/issues/soft-spot-ceiling" },
  ],
  parentCategory: { label: "Mold & Moisture", href: "/issues/mold-moisture" },
};

export default function PeelingPaintMoisture() {
  return <IssueDetailPage data={data} />;
}
