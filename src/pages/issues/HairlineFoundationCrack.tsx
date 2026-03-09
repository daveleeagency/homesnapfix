import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "hairline-foundation-crack",
  seoTitle: "Hairline Foundation Crack — When to Worry & When It's Normal",
  seoDescription: "Hairline cracks in concrete foundations are common and usually cosmetic, but some patterns signal real problems. Learn how to evaluate and when to get a structural opinion.",
  heading: "Hairline Crack in Your Foundation",
  bluf: "Most hairline cracks in poured concrete foundations — thinner than 1/16 inch — are caused by normal concrete curing and minor settling. They are cosmetic and not structurally significant. However, you should monitor them: a crack that widens over time, lets water in, or follows a stair-step pattern in block walls may indicate ongoing foundation movement that needs professional evaluation. The key is tracking whether the crack is stable or active.",
  meaning: "Concrete shrinks slightly as it cures, and almost every poured foundation develops hairline cracks within the first few years. These cracks follow the natural stress lines of the concrete and rarely affect structural integrity. The concern arises when cracks change — widening, lengthening, or allowing water intrusion. Block and brick foundations behave differently than poured concrete, and stair-step cracks in mortar joints are more likely to indicate structural movement.",
  symptoms: [
    "Thin vertical or diagonal crack in poured concrete foundation wall",
    "Crack narrower than a credit card (approximately 1/16 inch or less)",
    "Crack does not appear to change size over months of observation",
    "No water seepage or efflorescence (white mineral deposits) around the crack",
    "Foundation wall is plumb (not leaning) and floor above is level",
    "Crack occurred within the first 1–3 years after construction",
  ],
  causes: [
    "Concrete shrinkage — all concrete shrinks as it cures, creating minor stress cracks",
    "Minor settling — small amounts of soil compaction under the footing cause slight shifts",
    "Temperature changes — freeze-thaw cycles cause concrete to expand and contract",
    "Construction joints — cracks can form at cold joints where pours overlapped",
    "Soil pressure — lateral pressure from backfill soil pushes against foundation walls",
    "Tree roots — nearby trees can draw moisture from soil, causing uneven drying and minor settlement",
  ],
  urgency: {
    text: "A stable hairline crack is not urgent. The emphasis should be on monitoring over time to confirm it is not getting worse.",
    items: [
      "The crack has widened beyond 1/8 inch or is visibly growing",
      "Water is seeping through the crack after rain",
      "The crack follows a stair-step pattern in block or brick walls",
      "You notice corresponding cracks inside the house (above doors, at ceiling-wall joints)",
      "The foundation wall appears to be leaning, bowing, or shifting",
      "Floors above the cracked area are noticeably sloped",
    ],
  },
  diy: [
    "Mark the ends of the crack with pencil and date it — check monthly for any lengthening",
    "Measure the width with a ruler or crack gauge and record it — check for widening over 3–6 months",
    "Seal a stable cosmetic crack with concrete crack filler or hydraulic cement if it lets in minor moisture",
    "Improve drainage around the foundation — extend downspouts, grade soil away from the house",
  ],
  callPro: [
    "The crack is wider than 1/8 inch or has been widening over time",
    "Water is actively entering through the crack",
    "The crack pattern is stair-stepped (in block walls) or horizontal",
    "The foundation wall is bowing, leaning, or displaced",
    "You have multiple cracks, interior wall cracks, and door/window alignment issues",
    "You are buying or selling the home and want a professional structural opinion",
  ],
  safety: "Hairline foundation cracks are not a safety hazard on their own. However, significant foundation movement can compromise the structure of the house over time. If you see signs of active movement — bowing walls, sloping floors, multiple new cracks — get a structural engineer's evaluation, not just a foundation repair company's sales assessment.",
  insurance: "Homeowners insurance almost never covers foundation cracks from settling, shrinkage, or normal soil movement. Some policies may cover sudden foundation damage from a plumbing failure that washes out soil beneath the footing, but this is uncommon. Read your policy's 'earth movement' and 'settling' exclusions carefully.",
  faqs: [
    {
      q: "How do I know if a foundation crack is serious?",
      a: "Width and direction are the key indicators. Cracks under 1/16 inch (thinner than a credit card edge) are usually cosmetic. Cracks wider than 1/4 inch, horizontal cracks, stair-step cracks in block walls, or any crack that's visibly growing deserve professional evaluation. A crack that has been unchanged for years is almost always stable.",
    },
    {
      q: "Should I seal a foundation crack myself?",
      a: "A dry, stable hairline crack can be sealed with hydraulic cement or a polyurethane crack filler to prevent water infiltration and radon entry. But sealing a crack that's still moving or has an underlying structural cause won't fix the problem — it may just hide it. Monitor new cracks for 2–3 months before sealing to confirm they're stable.",
    },
    {
      q: "Can foundation cracks let water into my basement?",
      a: "Yes. Even hairline cracks in poured concrete can allow water to seep through, especially under hydrostatic pressure after heavy rain or snowmelt. Efflorescence (white chalky mineral deposits) near a crack indicates past water movement. Sealants help, but significant water intrusion may require drainage improvements outside the foundation.",
    },
    {
      q: "How fast do foundation cracks grow?",
      a: "It varies greatly. A crack from normal settling may stay stable for years or even decades. A crack caused by expanding clay soil, tree root pressure, or drainage problems may grow noticeably over months. Mark the ends of any crack you're monitoring with pencil and a date, and measure width. Check monthly.",
    },
  ],
  relatedIssues: [
    { label: "Foundation & Cracks", href: "/issues/foundation-cracks" },
    { label: "Cracked Drywall Above Door", href: "/issues/cracked-drywall-above-door" },
    { label: "Exterior Damage", href: "/issues/exterior-damage" },
  ],
  parentCategory: { label: "Foundation & Cracks", href: "/issues/foundation-cracks" },
};

export default function HairlineFoundationCrack() {
  return <IssueDetailPage data={data} />;
}
