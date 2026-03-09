import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "musty-smell-bathroom",
  seoTitle: "Musty Smell in Bathroom — Causes, Mold Risks & What to Do",
  seoDescription: "A persistent musty smell in your bathroom usually signals hidden moisture or mold. Learn what causes it, where to check, and when to call a professional.",
  heading: "Musty Smell in Bathroom",
  bluf: "A persistent musty or mildew smell in a bathroom is almost always caused by trapped moisture promoting mold or mildew growth somewhere you may not see — behind walls, under the vanity, inside the exhaust fan housing, or beneath flooring. Improving ventilation and identifying the moisture source are the first steps. If the smell persists after cleaning visible surfaces, there may be hidden mold that requires professional assessment.",
  meaning: "Bathrooms are the most moisture-prone rooms in a house. When humidity stays elevated — due to poor ventilation, a slow leak, or inadequate sealing — mold and mildew colonies can establish themselves behind walls, under caulk, or in areas you cannot easily see. The musty smell is produced by microbial volatile organic compounds (MVOCs) released by actively growing mold. The smell itself is a signal, not the problem.",
  symptoms: [
    "Persistent earthy or musty odor that does not go away with cleaning",
    "Smell intensifies after showers or baths",
    "Visible mold or mildew on grout, caulk, or ceiling surfaces",
    "Discoloration or dark spots on walls, ceiling, or baseboards",
    "Paint peeling, bubbling, or flaking on bathroom walls or ceiling",
    "Soft or spongy spots on the floor near the tub, shower, or toilet",
    "Condensation on mirrors and windows that persists long after showering",
  ],
  causes: [
    "Inadequate ventilation — no exhaust fan, a fan that vents into the attic instead of outside, or a fan that is too small for the room",
    "Slow plumbing leak — a dripping supply line, leaking toilet wax ring, or failing shower pan",
    "Failed caulk or grout — gaps around the tub, shower, or floor allow water to seep behind surfaces",
    "Condensation — poor insulation in exterior bathroom walls trapping moisture",
    "Wet materials — towels, bath mats, or damp clothing stored in a poorly ventilated space",
    "P-trap evaporation — in rarely used bathrooms, the P-trap can dry out allowing sewer gas into the room",
  ],
  urgency: {
    text: "A musty smell is not an emergency, but persistent mold exposure can aggravate allergies and respiratory conditions. Address it within days to weeks, not months.",
    items: [
      "You see visible black or dark mold spreading on walls or ceiling",
      "Anyone in the household has unexplained respiratory symptoms, allergies, or headaches",
      "The floor near the tub or toilet feels soft or spongy",
      "You suspect a hidden leak behind the wall or under the floor",
    ],
  },
  diy: [
    "Clean visible mold on hard surfaces with a bathroom mold cleaner or diluted bleach solution",
    "Replace old caulk around the tub, shower, and toilet base",
    "Ensure the exhaust fan works and vents to the outside — clean the fan cover and duct",
    "Run the fan during and for 20+ minutes after every shower",
    "Check under the vanity for drips or moisture and address simple leaks",
  ],
  callPro: [
    "The musty smell persists after cleaning all visible surfaces and improving ventilation",
    "You see mold covering more than about 10 square feet",
    "The floor, walls, or ceiling feel soft, spongy, or damaged",
    "You suspect mold is growing behind walls or under the floor",
    "Household members are experiencing respiratory symptoms",
  ],
  safety: "When cleaning mold, wear gloves and a mask (N95 or better). Do not mix bleach with ammonia-based cleaners. If mold covers a large area or is behind walls, professional remediation is recommended — disturbing large mold colonies can release spores into the air.",
  insurance: "Homeowners insurance typically does not cover mold caused by ongoing moisture or deferred maintenance. If the mold resulted from a sudden covered event — like a burst pipe — the resulting mold remediation may be partially covered. Check your policy for mold exclusions and coverage limits.",
  faqs: [
    {
      q: "What causes a musty bathroom smell even when it looks clean?",
      a: "The most common culprits are mold growing inside the exhaust fan housing, on the back of drywall, inside grout or caulk, or under bathroom flooring. You don't always need to see mold to have it. If cleaning visible surfaces doesn't resolve the smell, the source is likely hidden.",
    },
    {
      q: "How long should I run the bathroom exhaust fan?",
      a: "Run it during your shower and for at least 30 minutes afterward. A timer switch — which automatically runs the fan for a set period after you leave — is a simple, inexpensive upgrade that significantly reduces bathroom moisture and mold risk.",
    },
    {
      q: "Can I fix a musty bathroom smell myself?",
      a: "Often yes. Clean visible mold on tile, grout, and caulk with a mold-killing product. Re-caulk around the tub and shower. Ensure the exhaust fan is working and vented outside. If the smell persists after all visible surfaces are clean and ventilation is improved, the source may be inside the walls and worth a professional look.",
    },
    {
      q: "Could a musty bathroom smell be sewer gas instead of mold?",
      a: "It could. Sewer gas from a dried-out P-trap (common in rarely used sinks or floor drains) has a distinct rotten-egg or sulfur smell, while mold smells earthy and musty. Run water down any rarely used drain for a minute to refill the trap. If the smell disappears, that was the culprit.",
    },
  ],
  relatedIssues: [
    { label: "Mold & Moisture", href: "/issues/mold-moisture" },
    { label: "Peeling Paint from Moisture", href: "/issues/peeling-paint-moisture" },
    { label: "Dripping Under Sink", href: "/issues/dripping-under-sink" },
    { label: "Brown Water Stain on Ceiling", href: "/issues/brown-water-stain-ceiling" },
  ],
  parentCategory: { label: "Mold & Moisture", href: "/issues/mold-moisture" },
};

export default function MustySmellBathroom() {
  return <IssueDetailPage data={data} />;
}
