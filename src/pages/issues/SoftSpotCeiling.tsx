import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "soft-spot-ceiling",
  seoTitle: "Soft Spot on Ceiling or Roof — What It Means & What to Do",
  seoDescription: "A soft or spongy spot on your ceiling means water damage is weakening the drywall. Learn how serious it is, what causes it, and when to call a professional.",
  heading: "Soft Spot on Your Ceiling",
  bluf: "If your ceiling feels soft, spongy, or gives when you press on it, water has saturated the drywall and weakened it structurally. This is more serious than a stain — saturated drywall can sag and eventually collapse. Stop pressing on it, identify the water source from above, and call a professional if the affected area is large, growing, or near electrical fixtures. The soft area will need to be cut out and replaced after the leak is resolved.",
  meaning: "Drywall is made of gypite core with paper faces. When water saturates it, the gypsum dissolves and the paper delaminates, losing all structural rigidity. A soft spot means the saturation has been ongoing or the volume of water was significant. Unlike a dry stain — which indicates a past leak — a soft spot means the damage is active or very recent.",
  symptoms: [
    "Ceiling gives or flexes when pressed gently with a finger",
    "Visible sagging or bulging in the ceiling surface",
    "Paint bubbling, peeling, or dripping in the affected area",
    "Brown or yellow water stain surrounding or overlapping the soft area",
    "Dripping water from the ceiling during or after rain",
    "A noticeable musty smell in the room",
    "Ceiling texture (popcorn, orange peel) flaking or falling off",
  ],
  causes: [
    "Active roof leak — water entering through damaged shingles, flashing, or roof penetrations",
    "Plumbing leak on the floor above — a toilet, tub, or supply line slowly releasing water",
    "HVAC condensation — a clogged condensate line or sweating ductwork in the attic or ceiling cavity",
    "Overflowed bathtub, toilet, or appliance on the floor above",
    "Ice dam — in cold climates, ice at roof edges forces meltwater under shingles and into the ceiling cavity",
  ],
  urgency: {
    text: "A soft ceiling is inherently urgent. Waterlogged drywall can collapse, posing an injury risk and causing major damage to furnishings below.",
    items: [
      "The soft area is larger than about 2 square feet",
      "The ceiling is visibly sagging or bulging downward",
      "Water is actively dripping through",
      "The soft area is near a light fixture, fan, or any electrical wiring",
      "The soft spot is directly above a frequently occupied area",
    ],
  },
  diy: [
    "Place a bucket or tarp under the area to catch drips and protect flooring",
    "If you have safe attic access, look above the soft spot for the water source",
    "If the area is small and the leak source is clearly a loose plumbing fitting you can tighten, do so",
    "Do not push on, poke, or stand under a sagging ceiling section",
  ],
  callPro: [
    "The ceiling is sagging — this is a collapse risk",
    "You cannot identify the water source from accessible areas",
    "The soft area is near electrical fixtures — water and electricity are a dangerous combination",
    "The damage covers a large area or spans multiple rooms",
    "You suspect the water source is a roof leak or a plumbing line inside the wall or floor",
  ],
  safety: "Do not stand directly under a sagging or bulging ceiling — waterlogged drywall weighing 30+ pounds can collapse without warning. If water is near any electrical fixture, turn off the circuit at the breaker panel before entering the room. Do not attempt to drain a bulging ceiling yourself unless you can safely control where the water falls.",
  insurance: "Sudden water damage from a burst pipe or storm is often covered by homeowners insurance. The key factor is whether the damage was sudden versus gradual. A roof leak that has been dripping for months may not be covered, but a pipe that failed suddenly usually is. Document everything with photos and video before cleanup begins.",
  relatedIssues: [
    { label: "Brown Water Stain on Ceiling", href: "/issues/brown-water-stain-ceiling" },
    { label: "Roofing Issues", href: "/issues/roofing" },
    { label: "Mold & Moisture", href: "/issues/mold-moisture" },
    { label: "Peeling Paint from Moisture", href: "/issues/peeling-paint-moisture" },
  ],
  parentCategory: { label: "Roofing Issues", href: "/issues/roofing" },
};

export default function SoftSpotCeiling() {
  return <IssueDetailPage data={data} />;
}
