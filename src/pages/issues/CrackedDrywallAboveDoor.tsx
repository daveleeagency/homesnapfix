import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "cracked-drywall-above-door",
  seoTitle: "Cracked Drywall Above Door — Causes, Severity & Repair Guide",
  seoDescription: "Cracks in the drywall above a door frame can be cosmetic or a sign of foundation settlement. Learn how to tell the difference and when to get a professional opinion.",
  heading: "Cracked Drywall Above a Door Frame",
  bluf: "Diagonal cracks radiating from the upper corners of a door frame are one of the most common drywall cracks homeowners notice. In many cases they are cosmetic — caused by normal settling, seasonal wood movement, or poor original taping. However, recurring cracks that widen over time, doors that no longer latch properly, or cracks wider than 1/8 inch can signal foundation movement or structural shifting that should be evaluated by a professional.",
  meaning: "Door frames are weak points in a wall because the structural header above them concentrates stress. When a house settles, shifts, or when framing lumber dries and shrinks, cracks tend to appear at these stress points first. A single hairline crack that has been stable for years is almost always cosmetic. Multiple new cracks, cracks that reopen after repair, or cracks accompanied by sticking doors suggest ongoing movement.",
  symptoms: [
    "Diagonal crack running from the upper corner of the door frame toward the ceiling",
    "Horizontal crack along the top of the door frame",
    "Crack that reappears after being patched or painted",
    "Door no longer closes or latches smoothly",
    "Visible gap between the door frame and the wall",
    "Similar cracks appearing above multiple doors or windows",
    "Crack is wider at one end than the other (tapered)",
  ],
  causes: [
    "Normal settling — all houses settle over time, especially in the first few years",
    "Seasonal humidity changes — wood framing expands and contracts, stressing drywall joints",
    "Poor original taping — insufficient tape or compound at the joint makes it prone to cracking",
    "Foundation movement — soil shifting, poor drainage, or tree roots can cause uneven foundation settlement",
    "Structural load changes — a renovation that altered load paths can cause new stress patterns",
    "Water damage — moisture weakening the framing or substructure behind the wall",
  ],
  urgency: {
    text: "Most drywall cracks above doors are not urgent. Monitor them over weeks or months before deciding on action.",
    items: [
      "The crack is wider than 1/8 inch or growing visibly",
      "Multiple doors in the house are sticking or not latching",
      "You see cracks in the exterior brick, block, or foundation walls too",
      "Floors feel noticeably sloped or uneven",
      "The crack appeared suddenly after heavy rain or drought",
    ],
  },
  diy: [
    "The crack is a stable hairline crack (less than 1/16 inch) that hasn't changed",
    "You want to re-tape and patch a cosmetic crack using mesh tape and joint compound",
    "The crack is in a single location with no other signs of movement",
    "You can confirm the door still opens and closes properly",
  ],
  callPro: [
    "The crack is wider than 1/8 inch or has been widening over time",
    "You see similar cracks above multiple doors or windows throughout the house",
    "Doors or windows are sticking, binding, or no longer closing properly",
    "There are corresponding cracks in the exterior walls or foundation",
    "Floors are visibly uneven or sloping in the same area",
    "The home is on expansive clay soil or in a region prone to foundation issues",
  ],
  safety: "Drywall cracks themselves are not a safety hazard. However, if you suspect foundation movement, avoid ignoring it — progressive structural shifting can become a major safety and financial issue over time.",
  insurance: "Homeowners insurance generally does not cover foundation settling or cosmetic drywall cracks. Some policies cover sudden structural damage caused by events like plumbing failures that wash out soil under the foundation. Check your policy for exclusions related to 'earth movement' or 'settling.'",
  relatedIssues: [
    { label: "Foundation Cracks", href: "/issues/foundation-cracks" },
    { label: "Hairline Foundation Crack", href: "/issues/hairline-foundation-crack" },
    { label: "Soft Spot on Ceiling", href: "/issues/soft-spot-ceiling" },
    { label: "Exterior Damage", href: "/issues/exterior-damage" },
  ],
  parentCategory: { label: "Foundation & Cracks", href: "/issues/foundation-cracks" },
};

export default function CrackedDrywallAboveDoor() {
  return <IssueDetailPage data={data} />;
}
