import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Home } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "exterior-damage",
  seoTitle: "Exterior Damage — Siding, Gutters, Decks & Storm Repairs",
  seoDescription: "Common exterior home damage: siding cracks, gutter overflow, deck rot, storm damage. Learn symptoms, causes, and when to repair yourself vs. hire a contractor.",
  icon: Home,
  heading: "Exterior & Storm Damage",
  intro: "The exterior of your home — siding, gutters, decking, trim, and paint — takes a constant beating from weather, UV exposure, and moisture. Over time, small issues like peeling paint or a loose gutter bracket can escalate into water intrusion, wood rot, or pest entry points. After a major storm, the damage can be more dramatic: dented siding, missing shingles, fallen branches, or standing water where it shouldn't be. This guide helps you assess exterior damage, prioritize what matters, and decide when to DIY or call a contractor.",
  bluf: "Exterior damage is often visible and assessable from the ground. Peeling paint, cracked siding, clogged gutters, and surface-level deck wear are common maintenance items most homeowners can handle. Structural issues — rotted framing behind siding, sagging gutters pulling away from the fascia, widespread deck board failure, or storm damage to multiple areas — usually need a contractor. The priority is always to stop water from entering the home, so address anything that compromises the weather barrier first.",
  symptoms: [
    "Peeling, bubbling, or flaking exterior paint",
    "Cracks, holes, or dents in siding (vinyl, wood, or fiber cement)",
    "Gutters overflowing during rain or pulling away from the roofline",
    "Standing water near the foundation after rain",
    "Soft, spongy, or discolored spots on deck boards or railing posts",
    "Visible wood rot on trim, fascia, or soffits",
    "Gaps around windows, doors, or utility penetrations",
    "Insect damage — sawdust piles, small holes, or visible pest activity",
    "Storm debris — fallen branches, dented surfaces, or displaced materials",
  ],
  causes: [
    "Weather exposure — sun, rain, wind, and freeze-thaw cycles degrade all exterior materials over time",
    "Storm damage — wind, hail, and fallen trees cause acute damage",
    "Deferred maintenance — small issues left unaddressed become larger problems",
    "Poor drainage — water pooling near the foundation erodes soil and invites moisture inside",
    "Insufficient caulking or sealing — gaps around penetrations let water and air in",
    "Ground contact with untreated wood — deck posts and framing rot faster when touching soil",
    "Pest damage — termites, carpenter ants, and woodpeckers target vulnerable wood",
    "Improper installation — siding or gutters installed without proper overlap or drainage gaps",
  ],
  urgency: {
    text: "Exterior damage is often cosmetic and can wait for good weather. The exceptions are situations where water is actively entering the home or structural stability is compromised.",
    items: [
      "Siding damage exposing the weather barrier or interior wall",
      "Gutter failure directing water against the foundation during heavy rain",
      "Deck boards or railing that feel unstable or unsafe to walk on",
      "Storm damage with more weather expected — temporary tarping may be needed",
      "Active pest infestation in structural wood",
    ],
  },
  diyVsPro: {
    diy: [
      "Cleaning and reattaching loose gutter sections",
      "Replacing individual pieces of vinyl or wood siding",
      "Applying exterior caulk around windows, doors, and trim",
      "Staining or sealing a deck to prevent moisture damage",
      "Replacing individual rotted deck boards with pressure-treated lumber",
      "Painting over properly prepped exterior surfaces",
    ],
    pro: [
      "Replacing entire siding sections or re-siding the house",
      "Structural rot in fascia, soffits, or framing behind siding",
      "Deck structural issues — joists, posts, or ledger board failure",
      "Elevated decks (more than 4 feet high) — safety risk during repair",
      "Widespread storm damage requiring insurance documentation",
      "Pest damage to structural wood (termites, carpenter ants)",
    ],
  },
  safetyNote: "Exterior work often involves ladders and heights. Use proper ladder safety — maintain three points of contact, place on level ground, and don't overreach. For deck work, check that the deck can support your weight before walking on damaged areas. If you suspect termite damage, a professional inspection is recommended — surface damage often understates the extent of the problem.",
  relatedCategories: ["Exterior", "Deck/Patio", "Roofing"],
};

export default function ExteriorDamageHub() {
  return <CategoryHubPage data={data} />;
}
