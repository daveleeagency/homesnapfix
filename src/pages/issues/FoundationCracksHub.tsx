import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Layers } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "foundation-cracks",
  seoTitle: "Foundation & Wall Cracks — Types, Severity & Repair Guidance",
  seoDescription: "Foundation and wall crack guide for homeowners: hairline vs structural cracks, causes, severity, and when to call a structural engineer. Practical guidance with no panic.",
  icon: Layers,
  heading: "Foundation & Wall Cracks",
  intro: "Finding cracks in your foundation, basement walls, or interior drywall can be alarming — but not all cracks are created equal. Many are completely normal results of concrete curing, seasonal temperature changes, or minor settling that every house experiences. Others can signal soil movement, drainage problems, or structural issues that need professional evaluation. The most important thing is to understand the difference so you respond appropriately — without ignoring a real problem or panicking over a cosmetic one.",
  bluf: "Hairline vertical cracks in poured concrete foundations are extremely common and usually caused by normal curing shrinkage — they're typically cosmetic. Horizontal cracks in basement walls, stair-step cracks in block foundations, and cracks wider than ¼ inch may indicate hydrostatic pressure or structural movement and should be evaluated by a professional. Monitor any crack by marking its endpoints and measuring width monthly. If a crack is growing, call a structural engineer.",
  symptoms: [
    "Hairline cracks along foundation walls or basement floor (very common, usually cosmetic)",
    "Diagonal cracks running from corners of doors or windows toward the ceiling",
    "Horizontal cracks in block or poured concrete basement walls",
    "Stair-step cracks following mortar joints in block or brick walls",
    "Cracks wider than ¼ inch or cracks that you can feel a draft through",
    "Doors or windows that suddenly stick, won't latch, or swing open on their own",
    "Uneven or sloping floors — place a marble on the floor and see if it rolls",
    "Gaps appearing between walls and ceilings, or between walls and floors",
    "Cracks that reappear after being patched",
  ],
  causes: [
    "Concrete curing shrinkage — new foundations develop hairline cracks as concrete cures over the first few years",
    "Seasonal expansion and contraction — clay soils expand when wet and shrink when dry, stressing the foundation",
    "Poor drainage — water pooling against the foundation increases hydrostatic pressure on walls",
    "Tree root pressure — large trees within 10–15 feet of the foundation can push against walls",
    "Settling — all homes settle to some degree, especially in the first 5–10 years",
    "Frost heave — in cold climates, freezing soil pushes up against the foundation unevenly",
    "Original construction issues — improperly compacted soil, insufficient rebar, or thin pours",
    "Plumbing leaks under the slab — water eroding soil under the foundation causes uneven support",
  ],
  urgency: {
    text: "Most foundation cracks are not emergencies. The exceptions are cracks that indicate active structural movement, water intrusion, or failure of basement walls to resist soil pressure.",
    items: [
      "Horizontal cracks in basement walls — a sign of inward pressure from soil",
      "Cracks wider than ¼ inch that are actively growing",
      "Stair-step cracks in block walls combined with wall bowing or leaning",
      "Doors and windows that no longer operate properly (frame distortion)",
      "Water actively entering through foundation cracks during rain",
      "Floors noticeably sloping in one direction",
    ],
  },
  diyVsPro: {
    diy: [
      "Sealing hairline cracks (under ⅛ inch) with epoxy or polyurethane injection kits",
      "Improving exterior drainage — extend downspouts 4–6 feet from the foundation",
      "Re-grading soil so it slopes away from the house (6 inches of drop over the first 10 feet)",
      "Monitoring cracks with pencil marks and monthly measurements",
      "Patching cosmetic drywall cracks with mesh tape and joint compound",
    ],
    pro: [
      "Any horizontal crack in a basement wall",
      "Cracks wider than ¼ inch or cracks that are growing",
      "Stair-step cracks in block or brick foundations",
      "Signs of wall bowing, leaning, or displacement",
      "Foundation cracks with water intrusion",
      "Significant floor slope or door/window frame distortion",
      "Slab leaks that may be undermining the foundation",
    ],
  },
  safetyNote: "Foundation repair affects the structural integrity of your entire home. Before undertaking any repair beyond cosmetic patching, consult a licensed structural engineer (not just a foundation repair contractor who may have a financial incentive to recommend work). Document all cracks with dated photos before any work begins. In many areas, significant foundation work requires a permit.",
  relatedCategories: ["Exterior", "Interior"],
};

export default function FoundationCracksHub() {
  return <CategoryHubPage data={data} />;
}
