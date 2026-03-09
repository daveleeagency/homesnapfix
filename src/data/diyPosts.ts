import type { DIYCategory } from "@/types";

export interface DIYPost {
  slug: string;
  title: string;
  category: DIYCategory;
  excerpt: string;
  readingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  heroImage: string;
  symptoms: string[];
  likelyCauses: string[];
  diySteps: { step: number; title: string; description: string }[];
  toolsNeeded: { name: string; affiliateLink: string; price: string }[];
  mistakesToAvoid: string[];
  safetyNotes: string[];
  whenToCallAPro: string[];
  faqs: { q: string; a: string }[];
}

export const diyPosts: DIYPost[] = [
  {
    slug: "drywall-cracks",
    title: "How to Fix Drywall Cracks",
    category: "Interior",
    excerpt: "Learn to distinguish cosmetic settling cracks from structural warning signs — and patch them properly so they don't come back.",
    readingTime: "6 min",
    difficulty: "Easy",
    heroImage: "",
    symptoms: [
      "Hairline cracks along seams, corners, or ceiling joints",
      "Diagonal cracks radiating from door or window corners",
      "Vertical cracks near where walls meet the ceiling",
      "Previously patched cracks that have reopened",
    ],
    likelyCauses: [
      "Normal house settling — especially in newer homes within the first few years",
      "Seasonal temperature and humidity swings causing materials to expand and contract",
      "Poor original taping, improper joint compound application, or rushed drywall finishing",
      "Foundation movement or structural shifting (usually indicated by wider, diagonal cracks)",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Inspect and widen the crack", 
        description: "Use a utility knife to gently widen hairline cracks into a shallow V-shape (about 1/8 inch wide). This creates better adhesion for the filler. Brush or vacuum away all loose debris and dust." 
      },
      { 
        step: 2, 
        title: "Apply fiberglass mesh tape", 
        description: "For cracks wider than 1/16 inch, apply self-adhesive fiberglass mesh tape directly over the crack. Press firmly to ensure good contact. For hairline cracks under 1/16 inch, you can skip the tape and apply compound directly." 
      },
      { 
        step: 3, 
        title: "Apply first coat of joint compound", 
        description: "Using a 6-inch drywall knife, spread a thin layer of all-purpose joint compound over the tape (or directly into the crack). Hold the knife at a low angle and press firmly to force compound into the crack. Feather the edges outward. Let dry completely — usually 12 to 24 hours depending on humidity." 
      },
      { 
        step: 4, 
        title: "Sand and apply second coat", 
        description: "Lightly sand the first coat with 120-grit sandpaper until smooth. Wipe away dust with a damp cloth. Apply a second, wider coat of compound (8–10 inches wide), feathering the edges even thinner. Let dry 24 hours." 
      },
      { 
        step: 5, 
        title: "Final sanding and finishing", 
        description: "Sand with 150-grit or finer sandpaper until the repair is smooth and flush with the surrounding wall. Use a light to check for imperfections. Apply a coat of primer to seal the compound, then paint to match." 
      },
    ],
    toolsNeeded: [
      { name: "6-inch Drywall Knife", affiliateLink: "", price: "$8–12" },
      { name: "All-Purpose Joint Compound", affiliateLink: "", price: "$10–15" },
      { name: "Self-Adhesive Fiberglass Mesh Tape", affiliateLink: "", price: "$5–8" },
      { name: "120-grit and 150-grit Sandpaper", affiliateLink: "", price: "$4–6" },
      { name: "Utility Knife", affiliateLink: "", price: "$6–10" },
    ],
    mistakesToAvoid: [
      "Skipping the widening step — filling a tight crack without proper prep often leads to the crack reopening within weeks.",
      "Applying too much compound at once — thick layers take forever to dry and often crack as they shrink.",
      "Sanding before the compound is fully dry — you'll create gouges and rough patches that are hard to fix.",
      "Not feathering the edges — abrupt edges create visible ridges that show through paint.",
      "Painting without primer — joint compound is porous and will absorb paint unevenly, creating a different sheen than the surrounding wall.",
    ],
    safetyNotes: [
      "Wear a dust mask or respirator when sanding — drywall dust is very fine and irritating to lungs.",
      "Ensure good ventilation in the work area, especially if using oil-based primer.",
      "Protect floors and furniture with drop cloths — compound splatter is difficult to remove once dry.",
    ],
    whenToCallAPro: [
      "Cracks wider than 1/4 inch — these often indicate structural movement and may need engineering evaluation.",
      "Cracks that are actively growing or shifting — mark the ends with pencil and date to monitor movement.",
      "Diagonal cracks extending from door or window corners — especially if doors are sticking or floors feel uneven.",
      "Cracks accompanied by bulging, bowing, or sagging walls — this indicates serious structural problems.",
      "Recurring cracks that keep reopening after multiple repairs.",
    ],
    faqs: [
      { 
        q: "Are hairline cracks in drywall a sign of foundation problems?", 
        a: "Usually not. Hairline cracks (under 1/16 inch) are typically cosmetic and result from normal settling or temperature changes. Foundation issues usually create wider, diagonal cracks, often accompanied by sticking doors or uneven floors. If in doubt, have a structural engineer inspect." 
      },
      { 
        q: "Why do my drywall cracks keep coming back after I fix them?", 
        a: "Recurring cracks usually mean the underlying cause hasn't been addressed. This could be ongoing foundation movement, moisture issues causing wood framing to swell and shrink, or inadequate prep work (not widening the crack or using mesh tape). Consider having a professional assess for structural issues." 
      },
      { 
        q: "Can I use spackle instead of joint compound?", 
        a: "For very small nail holes, yes. But for cracks, use joint compound (mud). Spackle dries harder and is less flexible, making it more prone to cracking again. Joint compound is designed to move slightly with the wall." 
      },
    ],
  },
  {
    slug: "water-stains",
    title: "How to Fix Water Stains on Ceilings and Walls",
    category: "Interior",
    excerpt: "Before you paint over that brown stain, find and fix the source — or it will just come back. Here's how to do both correctly.",
    readingTime: "7 min",
    difficulty: "Medium",
    heroImage: "",
    symptoms: [
      "Yellow, brown, or rust-colored discoloration on ceiling or walls — often with visible water rings",
      "Peeling, bubbling, or flaking paint in the stained area",
      "Soft, spongy, or sagging drywall (press gently to check)",
      "Musty or moldy smell near the stain, even when surface appears dry",
    ],
    likelyCauses: [
      "Roof leak from damaged shingles, worn flashing, or ice dams",
      "Plumbing leak from pipes, fixtures, or supply lines above the stain",
      "HVAC condensation from clogged drain lines, overflowing drip pans, or poorly insulated ducts",
      "Bathroom moisture from inadequate ventilation or leaking shower pans",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Locate the actual source", 
        description: "Water rarely drops straight down — it travels along pipes, rafters, and joists before appearing. Check the area directly above the stain first, but also look several feet in all directions. Inspect attic spaces, bathrooms, and plumbing fixtures. Look for wet insulation, water trails on wood, or active dripping." 
      },
      { 
        step: 2, 
        title: "Fix the leak before cosmetic repair", 
        description: "This is critical — painting over a stain without fixing the source is pointless. Repair the roof leak, tighten plumbing connections, unclog drain lines, or improve ventilation. Confirm the leak is stopped by monitoring the area during the next rain or by running water fixtures above." 
      },
      { 
        step: 3, 
        title: "Let the area dry completely", 
        description: "Drywall and insulation must be bone-dry before painting — this can take 24 to 72 hours or longer in humid conditions. Use fans, dehumidifiers, and open windows to speed drying. Press on the stained area — if it feels cool, damp, or soft, it's not ready. A moisture meter can help confirm." 
      },
      { 
        step: 4, 
        title: "Check for and treat mold", 
        description: "If the area was wet for more than 48 hours, inspect for mold behind the surface. Small surface mold (under 10 square feet) can be cleaned with diluted bleach or vinegar. If you find extensive mold, stop and call a remediation specialist." 
      },
      { 
        step: 5, 
        title: "Apply stain-blocking primer", 
        description: "Regular paint will not cover water stains — you must use a shellac-based or oil-based stain-blocking primer (brands like Zinsser BIN or Kilz Original). Apply 1–2 coats, allowing each to dry per instructions. Water-based primers won't fully block tannin bleed-through." 
      },
      { 
        step: 6, 
        title: "Paint to match", 
        description: "Once the primer is fully dry, paint with ceiling or wall paint that matches the existing surface. You may need two coats for even coverage." 
      },
    ],
    toolsNeeded: [
      { name: "Shellac-Based Stain Blocker (Zinsser BIN)", affiliateLink: "", price: "$18–25" },
      { name: "Paint Roller and Tray", affiliateLink: "", price: "$10–15" },
      { name: "Drop Cloth", affiliateLink: "", price: "$8–12" },
      { name: "Fan or Dehumidifier", affiliateLink: "", price: "$30–200" },
      { name: "Moisture Meter (optional)", affiliateLink: "", price: "$20–40" },
    ],
    mistakesToAvoid: [
      "Painting without finding the leak source — the stain will reappear, often worse than before.",
      "Using regular latex primer — it won't block tannins and stains. You need shellac or oil-based primer.",
      "Painting before the area is fully dry — trapped moisture will cause paint to peel and mold to grow behind the surface.",
      "Ignoring soft or sagging drywall — this indicates water damage to the gypsum core and the drywall section may need replacement.",
      "Assuming all water stains are from above — sometimes condensation on cold pipes or HVAC ducts causes stains that appear to be leaks.",
    ],
    safetyNotes: [
      "If the stain appeared suddenly or is actively dripping, shut off water to the suspected source immediately.",
      "Shellac and oil-based primers have strong fumes — use in well-ventilated areas and wear a respirator if sensitive.",
      "Always check for mold before disturbing water-damaged materials. If you see black, green, or extensive mold, do not disturb it — call a professional.",
      "If the ceiling is sagging, stay clear and call a contractor — it could collapse.",
    ],
    whenToCallAPro: [
      "The stain keeps returning after you've fixed what you thought was the leak — there may be a hidden source.",
      "Drywall is sagging, bulging, or feels very soft — the structural integrity is compromised.",
      "You find mold behind the wall or ceiling surface, or mold covering more than 10 square feet.",
      "The leak source is difficult to access (inside a wall, under a slab, or in a complex roof valley).",
      "You're dealing with a flat or low-slope roof where leaks are hard to trace.",
    ],
    faqs: [
      { 
        q: "Why does the water stain keep bleeding through my paint?", 
        a: "You're using the wrong primer. Water stains contain tannins and minerals that will bleed through latex primers and paint. You must use a shellac-based (like Zinsser BIN) or oil-based stain blocker. Apply two coats if needed." 
      },
      { 
        q: "How long does it take for water-damaged drywall to dry?", 
        a: "It depends on thickness, humidity, and airflow. Typically 24–48 hours with good ventilation and fans. In humid conditions or with thick insulation behind, it can take up to a week. Don't rush this — painting too soon traps moisture and causes bigger problems." 
      },
      { 
        q: "Can a water stain be dangerous even if it's dry now?", 
        a: "Yes. The stain tells you there was a moisture problem, which can lead to hidden mold growth, wood rot, or weakened structural materials. Even if the surface is dry, moisture may be trapped behind it. Always investigate the source." 
      },
    ],
  },
  {
    slug: "roof-leaks",
    title: "How to Find and Fix a Roof Leak",
    category: "Roofing",
    excerpt: "Roof leaks rarely drip straight down. Learn to trace them to the source, apply temporary fixes, and know when it's time to call a roofer.",
    readingTime: "8 min",
    difficulty: "Hard",
    heroImage: "",
    symptoms: [
      "Water dripping from ceiling or running down walls during or after rain",
      "Water stains, dark streaks, or mold on attic rafters and sheathing",
      "Missing, cracked, curled, or visibly damaged shingles",
      "Daylight visible through roof boards when standing in the attic",
    ],
    likelyCauses: [
      "Damaged, missing, or wind-lifted shingles exposing the underlayment",
      "Cracked, corroded, or improperly installed flashing around chimneys, vents, skylights, or valleys",
      "Clogged gutters causing water to back up under shingles (ice dams in winter)",
      "Aging roof materials — shingles typically last 15–25 years depending on quality and climate",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Locate the leak from inside", 
        description: "Go into the attic during or immediately after rain with a flashlight. Look for water stains, wet spots, or actual dripping on rafters and sheathing. Water travels downhill along roof framing, so trace the wet trail upward and toward the roof peak to estimate the entry point. Mark the spot and measure its distance from a reference point (chimney, vent pipe, etc.)." 
      },
      { 
        step: 2, 
        title: "Inspect the roof exterior", 
        description: "On a dry day, carefully access the roof using a sturdy ladder with a standoff bracket (never lean the ladder against gutters). Use the measurements from Step 1 to locate the suspected area. Look for obvious damage — missing shingles, exposed nails, cracked flashing, or deteriorated sealant around penetrations." 
      },
      { 
        step: 3, 
        title: "Apply a temporary patch", 
        description: "If you've found the leak but can't do a full repair immediately (bad weather, waiting for materials, etc.), apply roofing cement around the damaged area and cover with a plastic tarp. Extend the tarp at least 4 feet beyond the damage in all directions and secure with roofing nails and wooden battens. This buys time but is NOT a permanent solution." 
      },
      { 
        step: 4, 
        title: "Replace damaged shingles", 
        description: "Carefully lift the shingles above the damaged one. Remove the nails holding the bad shingle using a pry bar. Slide out the damaged shingle. Slide the new shingle into place, align with surrounding shingles, and secure with four roofing nails placed just below the seal strip (about 5.5 inches from the bottom). Apply a dab of roofing cement under the shingle tabs above to reseal." 
      },
      { 
        step: 5, 
        title: "Seal around flashing and penetrations", 
        description: "If the leak is around flashing, check that all edges are properly sealed with roofing cement or caulk. Apply fresh sealant where old caulk has cracked or pulled away. For serious flashing damage, the flashing may need to be removed and replaced — this is often a job for a pro." 
      },
    ],
    toolsNeeded: [
      { name: "Roofing Cement (asphalt-based)", affiliateLink: "", price: "$8–12" },
      { name: "Replacement Shingles (match existing)", affiliateLink: "", price: "$25–40 per bundle" },
      { name: "Flat Pry Bar", affiliateLink: "", price: "$10–15" },
      { name: "Roofing Nails (1.25 inch)", affiliateLink: "", price: "$6–10" },
      { name: "Caulk Gun", affiliateLink: "", price: "$8–12" },
      { name: "Tarp and Rope (for temporary cover)", affiliateLink: "", price: "$15–30" },
    ],
    mistakesToAvoid: [
      "Assuming the leak is directly above the ceiling stain — water can travel 10+ feet along rafters before dripping down.",
      "Walking on a wet, mossy, or steep roof — this is extremely dangerous. Wait for dry conditions.",
      "Over-nailing or using nails that are too long — they can penetrate the roof deck and create new leak points.",
      "Patching from the attic only — you can slow the leak temporarily, but the exterior source must be fixed or rot will spread.",
      "Ignoring surrounding shingles — if one shingle is damaged, nearby ones may be brittle and failing too.",
      "Using the wrong type of roofing cement — some products are for flat roofs only and won't adhere to sloped shingles.",
    ],
    safetyNotes: [
      "NEVER work on a roof in wet, icy, or windy conditions — wait for a calm, dry day.",
      "Use a safety harness and roof anchor if the pitch is steep (over 6:12) or the roof is more than one story high.",
      "Have a spotter at the base of the ladder at all times.",
      "Wear rubber-soled shoes with good grip. Avoid working on roofs in early morning when dew is present.",
      "If you're uncomfortable with heights or unsure of your ability, hire a professional. Falls from roofs are a leading cause of DIY injuries.",
    ],
    whenToCallAPro: [
      "The leak involves complex flashing around chimneys, skylights, or roof valleys — these require specialized skills.",
      "You have a flat or low-slope roof — leak tracing is difficult and membrane repairs require professional equipment.",
      "Multiple areas are damaged, or the roof is nearing the end of its expected lifespan (15–25 years for asphalt shingles).",
      "The roof pitch is steep or the house is more than one story — the risk of injury is too high for DIY.",
      "You've patched the obvious damage but the leak persists — the real source may be hidden under layers of roofing.",
    ],
    faqs: [
      { 
        q: "How much does it cost to fix a roof leak?", 
        a: "Minor shingle replacement or flashing repair typically costs $200–$500 for a professional. Complex repairs involving valleys or chimneys can run $500–$1,500. If the roof is old and leaking in multiple spots, replacement may be more cost-effective — expect $5,000–$15,000+ depending on size and materials." 
      },
      { 
        q: "Can I patch a roof leak from inside the attic?", 
        a: "You can slow a leak temporarily by applying roofing cement or a patch from inside, but this is not a permanent fix. Water will continue to saturate the roof deck and insulation, leading to rot and mold. The exterior source must be repaired." 
      },
      { 
        q: "How do I know if I need a whole new roof?", 
        a: "Signs include: shingles are curling, cracked, or missing in multiple areas; granules are washing into gutters; the roof is over 20 years old; you see sagging or soft spots; or you're experiencing multiple leaks. Get 2–3 estimates from licensed roofers." 
      },
    ],
  },
  {
    slug: "deck-rot",
    title: "How to Identify and Repair Deck Rot",
    category: "Deck/Patio",
    excerpt: "Catch wood rot early and replace damaged boards before the problem spreads to structural supports. Here's how to inspect and repair safely.",
    readingTime: "7 min",
    difficulty: "Medium",
    heroImage: "",
    symptoms: [
      "Soft or spongy spots in deck boards — a screwdriver or awl pokes in easily",
      "Discolored, darkened wood with a gray or black appearance",
      "Splintering, crumbling, or flaking wood fibers",
      "Mushroom growth, white fungal threads, or persistent green/black staining on boards",
    ],
    likelyCauses: [
      "Prolonged moisture exposure from poor drainage, standing water, or lack of airflow under the deck",
      "Untreated or incorrectly treated lumber in ground-contact applications",
      "Lack of protective sealant or stain — bare wood absorbs moisture and degrades",
      "Debris (leaves, dirt) trapped between boards, holding moisture against the wood",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Inspect and probe for rot", 
        description: "Use a flat-blade screwdriver or awl to probe suspected areas. Healthy wood is firm and resists penetration. Rotted wood feels soft, crumbles, or allows the tool to sink in easily. Check all boards, especially near posts, stairs, and low areas where water collects. Don't forget to check joists and beams underneath — structural rot is a safety hazard." 
      },
      { 
        step: 2, 
        title: "Mark and assess the damage", 
        description: "Mark all rotted boards with chalk or tape. If only surface boards (decking) are affected, you can replace them yourself. If joists, beams, or posts are rotted, call a professional — this is a structural issue." 
      },
      { 
        step: 3, 
        title: "Remove damaged decking boards", 
        description: "Use a drill to back out screws or a pry bar and hammer to remove nails. Work carefully to avoid damaging adjacent boards. If a board spans multiple joists and only part is rotted, you can cut it at a joist centerline and replace just that section." 
      },
      { 
        step: 4, 
        title: "Treat surrounding wood (optional)", 
        description: "If nearby wood shows early signs of rot but is still firm, you can apply a wood hardener (like Minwax or Bondo) to stabilize it. This penetrates and hardens the fibers. Not a miracle cure, but it can buy time." 
      },
      { 
        step: 5, 
        title: "Install new pressure-treated boards", 
        description: "Cut replacement boards to length, allowing for 1/8 to 1/4 inch gap between boards for drainage and expansion. Predrill screw holes to prevent splitting (especially near board ends). Secure with exterior-grade deck screws — two screws per joist. Galvanized or stainless screws are best to prevent rust staining." 
      },
      { 
        step: 6, 
        title: "Seal the entire deck", 
        description: "Once repairs are complete, apply a water-repellent deck sealer or semi-transparent stain to all surfaces. This protects the wood and helps new boards blend with old. Reapply every 2–3 years as maintenance." 
      },
    ],
    toolsNeeded: [
      { name: "Pressure-Treated Deck Boards", affiliateLink: "", price: "$15–30 per board" },
      { name: "Exterior Deck Screws (3-inch)", affiliateLink: "", price: "$10–15 per box" },
      { name: "Cordless Drill/Driver", affiliateLink: "", price: "$60–120" },
      { name: "Circular Saw or Miter Saw", affiliateLink: "", price: "$60–150" },
      { name: "Wood Hardener (optional)", affiliateLink: "", price: "$15–20" },
      { name: "Deck Sealer or Stain", affiliateLink: "", price: "$25–40 per gallon" },
    ],
    mistakesToAvoid: [
      "Ignoring structural rot in joists or beams — replacing only the decking while the frame is rotted is dangerous and will lead to deck collapse.",
      "Using untreated lumber or indoor screws/nails — they'll rot or rust even faster than the original boards.",
      "Installing boards too tightly — wood swells when wet. Leave 1/8 to 1/4 inch gaps for drainage and expansion.",
      "Not sealing the new boards — fresh pressure-treated lumber still needs a water-repellent finish for long-term protection.",
      "Screwing into the same joist holes — if the joist is soft or damaged, the screws won't hold. Offset new screws by at least 1 inch.",
    ],
    safetyNotes: [
      "Wear gloves when handling pressure-treated lumber — older wood may contain arsenic-based preservatives (pre-2003).",
      "Use eye protection when cutting wood — splinters and sawdust are common.",
      "If the deck is more than 4 feet off the ground, consider using fall protection when working on railings or edges.",
      "Before removing boards, ensure the deck structure is stable — if joists are badly rotted, the entire section could shift or collapse.",
    ],
    whenToCallAPro: [
      "Structural joists, beams, or posts are rotted or soft — this requires engineering assessment and may involve permits.",
      "More than 25% of deck boards need replacement — at this point, it may be more cost-effective to rebuild the deck.",
      "The deck is unstable, wobbles, or shows signs of pulling away from the house — this is a serious safety issue.",
      "The deck is elevated more than 6 feet — working safely at that height requires scaffolding and fall protection.",
      "You find rot where the deck attaches to the house ledger board — this requires flashing repair and structural reinforcement.",
    ],
    faqs: [
      { 
        q: "How long should a treated deck last?", 
        a: "A properly maintained pressure-treated pine deck lasts 15–25 years. Cedar and redwood can last 20–30 years. Composite decking can last 25–50 years but costs more upfront. Regular sealing every 2–3 years dramatically extends lifespan." 
      },
      { 
        q: "Can I paint over rotting deck wood?", 
        a: "Absolutely not. Paint will not stop rot — it just hides it temporarily while the decay continues underneath. Remove or treat all rotted wood first, then seal with a penetrating deck stain (not paint)." 
      },
      { 
        q: "What's the difference between pressure-treated wood ratings?", 
        a: "Above-ground (AG) is for decking and framing not in ground contact. Ground-contact (GC) has higher preservative levels for posts and joists near soil. Use GC for any wood within 6 inches of ground. Check the end tag for the rating." 
      },
    ],
  },
  {
    slug: "hvac-issues",
    title: "Troubleshooting Common HVAC Problems",
    category: "HVAC",
    excerpt: "Before you call a $150 service visit, check these simple fixes for airflow, thermostat, and efficiency issues. You might solve it yourself.",
    readingTime: "8 min",
    difficulty: "Medium",
    heroImage: "",
    symptoms: [
      "Uneven heating or cooling — some rooms are comfortable while others are too hot or too cold",
      "System runs constantly but the house never reaches the set temperature",
      "Weak airflow from vents, or some vents not blowing at all",
      "Strange noises — rattling, squealing, banging, or hissing from the furnace or AC unit",
      "Energy bills are noticeably higher than previous months or years",
    ],
    likelyCauses: [
      "Dirty or clogged air filter restricting airflow — the #1 cause of HVAC problems",
      "Thermostat malfunction, dead batteries, or incorrect settings (fan set to ON instead of AUTO)",
      "Blocked supply or return vents due to furniture, curtains, or closed registers",
      "Refrigerant leak in the AC system (visible ice on the outdoor or indoor coil)",
      "Ductwork leaks, disconnections, or poor insulation causing conditioned air to escape",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Check and replace the air filter", 
        description: "Turn off the system. Locate the air filter (usually near the return air duct or inside the furnace cabinet). Remove it and hold it up to a light — if you can't see through it, it's clogged. Replace with a new filter of the same size. Check the MERV rating — higher isn't always better. MERV 8–11 is ideal for most homes. Filters should be changed every 1–3 months depending on use, pets, and allergies." 
      },
      { 
        step: 2, 
        title: "Inspect thermostat settings and batteries", 
        description: "Confirm the thermostat is set to the correct mode (HEAT or COOL). Check that the fan is set to AUTO, not ON (ON runs the fan constantly even when not heating/cooling). Replace batteries if the display is dim or unresponsive. If you have a programmable thermostat, verify the schedule hasn't been accidentally changed." 
      },
      { 
        step: 3, 
        title: "Check all vents and registers", 
        description: "Walk through the house and ensure all supply vents (blowing air) and return vents (sucking air) are open and unobstructed. Move furniture, rugs, and curtains away from vents. Closing too many vents can create pressure imbalances and reduce system efficiency." 
      },
      { 
        step: 4, 
        title: "Inspect the outdoor condenser unit", 
        description: "Go outside and look at the AC condenser unit (the big metal box with a fan on top). Make sure it's clear of leaves, grass clippings, dirt, and debris. Keep at least 2 feet of clearance around all sides. Gently spray the fins with a garden hose (not a pressure washer) to remove built-up dirt. Straighten bent fins with a fin comb if needed." 
      },
      { 
        step: 5, 
        title: "Check the condensate drain", 
        description: "The AC indoor unit has a drain line (usually a white PVC pipe). If this clogs, water backs up and the system shuts down. Locate the drain line and pour a cup of white vinegar or a bleach/water mix (1:1 ratio) into the line to clear algae buildup. If water is overflowing from the drip pan, the line is clogged — call a pro." 
      },
    ],
    toolsNeeded: [
      { name: "HVAC Air Filter (correct size)", affiliateLink: "", price: "$10–20" },
      { name: "Thermostat Batteries (AA or AAA)", affiliateLink: "", price: "$5–8" },
      { name: "Fin Comb (for condenser coils)", affiliateLink: "", price: "$8–12" },
      { name: "Coil Cleaner Spray (optional)", affiliateLink: "", price: "$10–15" },
      { name: "White Vinegar (for drain line)", affiliateLink: "", price: "$3–5" },
    ],
    mistakesToAvoid: [
      "Using a higher MERV filter than your system is rated for — this restricts airflow and can damage the blower motor. Stick to MERV 8–11 unless your HVAC tech recommends higher.",
      "Closing vents in unused rooms thinking it saves energy — it actually creates pressure imbalances and forces the system to work harder.",
      "Ignoring ice on the coils — this usually means low refrigerant (a leak) or extremely dirty filters. Turn the system off and call a pro.",
      "Pressure washing the condenser coils — high pressure bends the delicate fins and reduces efficiency. Use a gentle garden hose spray.",
      "Covering the outdoor unit in winter — condensers are designed to be outside year-round. Covers trap moisture and can cause rust or attract rodents.",
    ],
    safetyNotes: [
      "ALWAYS turn off power to the HVAC system at the breaker before inspecting internal components.",
      "Never attempt to handle refrigerant — it's pressurized, potentially hazardous, and requires EPA certification to service.",
      "If you smell gas near a furnace, leave the house immediately and call the gas company from outside.",
      "If the furnace makes loud banging or the AC compressor won't start, turn it off and call a professional — continuing to run it can cause expensive damage.",
    ],
    whenToCallAPro: [
      "System is blowing warm air in cooling mode (or cold air in heating mode) after filter replacement — likely a refrigerant leak or compressor failure.",
      "Ice is forming on the indoor or outdoor coils — this indicates low refrigerant or a serious airflow restriction.",
      "You smell burning, see smoke, or hear loud grinding or squealing noises.",
      "The system is short-cycling (turning on and off every few minutes) — this can damage the compressor.",
      "The system is more than 15 years old and repairs are becoming frequent — replacement may be more cost-effective.",
      "Ductwork is leaking, disconnected, or poorly insulated — sealing and insulation require specialized equipment.",
    ],
    faqs: [
      { 
        q: "How often should I change my HVAC air filter?", 
        a: "Every 1–3 months depending on several factors: 1-inch disposable filters need monthly changes during heavy use. Thicker pleated filters (4-inch) last 3–6 months. If you have pets, allergies, or run the system constantly, change more often. Check it monthly and replace when it looks dirty." 
      },
      { 
        q: "Why is my AC blowing warm air even though the thermostat is set to cool?", 
        a: "Common causes: 1) Dirty filter restricting airflow, 2) Low refrigerant due to a leak (you'll see ice on the coils), 3) Faulty compressor, or 4) Thermostat wiring issue. Start by checking the filter and looking for ice. If those are fine, call a pro." 
      },
      { 
        q: "Should I get a maintenance contract for my HVAC system?", 
        a: "For most homeowners, yes — especially if the system is over 5 years old. Annual maintenance (tune-up in spring for AC, fall for furnace) costs $75–$150 but prevents expensive breakdowns and keeps the system efficient. Many contracts include priority service and discounts on repairs." 
      },
    ],
  },
  {
    slug: "foundation-cracks",
    title: "Understanding and Addressing Foundation Cracks",
    category: "Exterior",
    excerpt: "Not all cracks are created equal. Learn which ones are cosmetic settling and which ones signal serious structural issues that need engineering help.",
    readingTime: "7 min",
    difficulty: "Hard",
    heroImage: "",
    symptoms: [
      "Visible cracks in concrete foundation walls, basement floors, or exterior slab",
      "Doors or windows that suddenly stick, won't close properly, or have gaps in the frame",
      "Uneven or sloping floors — place a marble on the floor and it rolls in one direction",
      "Gaps appearing between walls and ceiling, floor, or where walls meet at corners",
    ],
    likelyCauses: [
      "Normal concrete curing and shrinkage during the first year after construction — creates hairline vertical cracks",
      "Clay soil expansion and contraction due to moisture changes (especially in the Southern and Midwestern US)",
      "Poor drainage directing rainwater toward the foundation instead of away from it",
      "Hydrostatic pressure from groundwater pushing against foundation walls",
      "Tree roots growing under or against the foundation, exerting pressure over time",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Document and monitor cracks", 
        description: "Use a pencil or marker to trace the exact endpoints of each crack and write today's date next to it. Measure the width with a ruler or crack gauge. Take clear photos from multiple angles. Re-check every 2–4 weeks for at least 3 months. If cracks are widening or lengthening, call a structural engineer immediately." 
      },
      { 
        step: 2, 
        title: "Determine crack type and severity", 
        description: "HAIRLINE VERTICAL CRACKS (under 1/16 inch): Usually cosmetic settling. Low concern. WIDER VERTICAL CRACKS (1/16 to 1/4 inch): Monitor closely. Often from shrinkage but can worsen. HORIZONTAL CRACKS: SERIOUS — indicate lateral pressure from soil or water. Call a pro. STAIR-STEP CRACKS in block foundations: SERIOUS — often from settling or soil movement. Needs professional evaluation." 
      },
      { 
        step: 3, 
        title: "Improve drainage around the foundation", 
        description: "This is the most important preventive measure. Ensure gutters discharge at least 4–6 feet away from the foundation using downspout extensions. Check that soil slopes away from the house at a 6-inch drop over 10 feet. Fill low spots where water pools near the foundation. Consider a French drain if water accumulates persistently." 
      },
      { 
        step: 4, 
        title: "Seal hairline cracks (cosmetic repair only)", 
        description: "For non-structural hairline cracks (under 1/8 inch and not actively growing), you can seal them to prevent water infiltration. Use a flexible polyurethane or epoxy crack filler designed for concrete. Clean the crack thoroughly, apply the filler per instructions, and smooth with a putty knife. This is cosmetic only — it won't strengthen the foundation." 
      },
      { 
        step: 5, 
        title: "Manage vegetation and moisture", 
        description: "Keep large trees and shrubs at least 10–15 feet from the foundation — roots seek moisture and can exert surprising pressure. Use soaker hoses during droughts to keep soil moisture consistent (clay soil shrinks when dry, creating gaps under the foundation). Avoid planting water-thirsty plants close to the house." 
      },
    ],
    toolsNeeded: [
      { name: "Concrete Crack Filler (polyurethane)", affiliateLink: "", price: "$12–20" },
      { name: "Caulk Gun", affiliateLink: "", price: "$8–12" },
      { name: "Wire Brush or Vacuum", affiliateLink: "", price: "$8–15" },
      { name: "Downspout Extensions", affiliateLink: "", price: "$10–20 each" },
      { name: "Crack Width Gauge (optional)", affiliateLink: "", price: "$8–15" },
    ],
    mistakesToAvoid: [
      "Assuming all cracks are harmless settling — horizontal or stair-step cracks are serious and need immediate professional assessment.",
      "Sealing cracks without fixing drainage — you're trapping moisture behind the repair, which can make problems worse.",
      "Using rigid concrete patch on active cracks — the crack will just reappear. Use flexible fillers for moving cracks, but understand this is cosmetic.",
      "Ignoring early warning signs like sticking doors or sloping floors — by the time cracks are obvious, the problem may be advanced.",
      "Relying on DIY repairs for structural cracks — this is false economy. If the foundation is moving, cosmetic patches won't stop it.",
    ],
    safetyNotes: [
      "Foundation repair affects the structural integrity of your entire house — when in doubt, consult a structural engineer, not just a contractor.",
      "Document everything with photos and dates before any work is done — this is critical for insurance claims and future home sales.",
      "If you see horizontal cracks or bowing walls, evacuate the area and call a professional immediately — wall collapse is possible.",
      "Never dig around the foundation without consulting a structural engineer — you can undermine the footing and cause collapse.",
    ],
    whenToCallAPro: [
      "Any horizontal crack, regardless of size — these indicate serious lateral pressure and can lead to wall failure.",
      "Stair-step cracks in block or brick foundations — these indicate differential settling or soil movement.",
      "Vertical cracks wider than 1/4 inch or cracks that are actively widening over time.",
      "Cracks accompanied by doors/windows that won't close, sloping floors, or gaps between walls and ceiling.",
      "Water is actively entering through foundation cracks — this indicates hydrostatic pressure and may need interior or exterior waterproofing.",
      "You have expansive clay soil and notice seasonal movement — this often requires professional underpinning or piers.",
    ],
    faqs: [
      { 
        q: "Are all foundation cracks a serious problem?", 
        a: "No. Hairline vertical cracks (under 1/16 inch) from concrete curing are very common and usually harmless. However, horizontal cracks, stair-step cracks, or any crack wider than 1/4 inch should be evaluated by a structural engineer. When in doubt, get it checked — foundation repairs are expensive, and early intervention saves money." 
      },
      { 
        q: "How much does foundation repair cost?", 
        a: "It varies widely. Cosmetic crack sealing: $300–$800. Minor crack injection: $500–$1,500. Major structural repair with piers or underpinning: $5,000–$15,000+. Full basement waterproofing: $3,000–$10,000. Get 2–3 quotes from licensed structural repair companies (not general contractors)." 
      },
      { 
        q: "Will homeowners insurance cover foundation cracks?", 
        a: "Usually not. Most policies exclude damage from settling, soil movement, or poor maintenance. However, if the damage is caused by a sudden, covered event (like a burst pipe eroding soil or a tree falling on the house), it may be covered. Review your policy and document the cause if filing a claim." 
      },
    ],
  },
  {
    slug: "electrical-outlets",
    title: "Troubleshooting Dead or Faulty Electrical Outlets",
    category: "Electrical",
    excerpt: "Safely diagnose why an outlet isn't working — and when it's a simple reset versus a call to an electrician.",
    readingTime: "6 min",
    difficulty: "Easy",
    heroImage: "",
    symptoms: [
      "Outlet has no power — devices won't charge or run when plugged in",
      "Outlet sparks or makes a popping sound when plugging in devices",
      "Outlet or cover plate feels warm or hot to the touch",
      "Outlet or wall plate is discolored (black, brown, or melted appearance)",
    ],
    likelyCauses: [
      "Tripped circuit breaker or GFCI outlet cutting power to the circuit",
      "Loose wiring connections inside the outlet box — common in older homes",
      "Worn-out outlet receptacle from years of plugging and unplugging devices",
      "Overloaded circuit — too many high-draw devices (space heaters, hair dryers) on one circuit",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Check the circuit breaker panel", 
        description: "Open your main electrical panel and scan for any breakers in the middle or OFF position (tripped breakers don't always flip all the way to OFF). Flip the breaker fully OFF, then back to ON firmly. Test the outlet. If it trips again immediately, you have a short circuit or overload — call an electrician." 
      },
      { 
        step: 2, 
        title: "Test GFCI outlets and reset buttons", 
        description: "GFCI outlets (usually in bathrooms, kitchens, garages, and outdoors) have TEST and RESET buttons. If one trips, it cuts power to all outlets downstream on that circuit. Find all GFCI outlets in the home and press the RESET button on each. Check if your dead outlet comes back to life." 
      },
      { 
        step: 3, 
        title: "Test the outlet with a plug-in tester", 
        description: "Buy a simple 3-prong outlet tester ($10–15) from any hardware store. Plug it into the dead outlet. The lights on the tester indicate what's wrong: no lights = no power, specific patterns indicate open ground, reversed polarity, etc. This helps diagnose without touching wires." 
      },
      { 
        step: 4, 
        title: "Replace a worn-out outlet (if comfortable)", 
        description: "IF you have basic electrical experience: Turn off the breaker for that circuit. Use a non-contact voltage tester to CONFIRM power is off. Remove the cover plate and outlet screws. Carefully pull the outlet out. Take a photo of the wire connections. Disconnect wires, connect them to the new outlet (brass screws = hot/black, silver = neutral/white, green = ground), and reassemble. Turn breaker back on and test." 
      },
    ],
    toolsNeeded: [
      { name: "3-Prong Outlet Tester", affiliateLink: "", price: "$10–15" },
      { name: "Non-Contact Voltage Tester", affiliateLink: "", price: "$15–25" },
      { name: "Screwdriver Set (flathead and Phillips)", affiliateLink: "", price: "$10–20" },
      { name: "Replacement Outlet (15A or 20A)", affiliateLink: "", price: "$2–5" },
    ],
    mistakesToAvoid: [
      "Touching wires or screws without confirming power is off — use a voltage tester EVERY TIME, even if you turned off the breaker.",
      "Assuming the first breaker you find labeled 'kitchen' or 'bedroom' is the correct one — test with a voltage detector to be sure.",
      "Forcing a plug into an outlet that's sparking or hot — unplug everything immediately and turn off the breaker. This is a fire hazard.",
      "Using the wrong amperage outlet — if the breaker is 20A, use a 20A outlet (has a T-shaped neutral slot). Don't put a 15A outlet on a 20A circuit.",
      "Working on electrical with wet hands, wet floors, or while standing in water — this is deadly. Wait until everything is dry.",
    ],
    safetyNotes: [
      "ALWAYS turn off the circuit breaker before working on any outlet. Confirm power is off with a voltage tester.",
      "If you're not comfortable working with electrical wiring, hire a licensed electrician. The cost is $75–$150 for a service call, far less than the risk of shock or fire.",
      "Never touch bare wires, even with the breaker off — another circuit may share the same box.",
      "If the outlet is on an aluminum wiring circuit (common in 1960s–70s homes), do NOT attempt DIY replacement — aluminum requires special connectors and techniques. Call a pro.",
    ],
    whenToCallAPro: [
      "Outlet is sparking, smoking, or feels hot to the touch — this is a fire risk.",
      "Burning smell or visible scorch marks on the outlet or wall plate.",
      "Circuit breaker trips repeatedly when you plug devices into that outlet.",
      "Multiple outlets on the same circuit are dead (indicates a wiring issue deeper in the circuit).",
      "Your home has aluminum wiring (gray wires, not copper) — this requires specialized handling.",
      "You're not comfortable using a voltage tester or working with wiring — no shame in calling a pro for safety.",
    ],
    faqs: [
      { 
        q: "Why does my GFCI outlet keep tripping?", 
        a: "GFCI outlets are designed to trip when they detect a ground fault (current leaking to ground, often through water). Common causes: moisture in the outlet box, a faulty appliance plugged in, worn-out GFCI (they last 10–15 years), or a downstream outlet with a ground fault. If it trips without anything plugged in, replace the GFCI." 
      },
      { 
        q: "Is it normal for an outlet to feel slightly warm?", 
        a: "Slightly warm (just above room temperature) can be normal if you're using a high-draw device like a space heater. However, an outlet that feels hot to the touch or a plug that's hot when removed is dangerous — it indicates loose connections, overloading, or a failing outlet. Turn off the breaker and call an electrician." 
      },
      { 
        q: "Can I replace a two-prong outlet with a three-prong outlet?", 
        a: "Only if the outlet box has a ground wire (bare copper or green wire). If there's no ground, you have three legal options: 1) Leave it as a 2-prong outlet, 2) Install a GFCI outlet and label it 'No Equipment Ground', or 3) Run a new ground wire (hire an electrician). Do NOT install a 3-prong outlet without a ground — this is a code violation and creates a shock hazard." 
      },
    ],
  },
  {
    slug: "mold-spots",
    title: "How to Identify and Remove Small Mold Patches",
    category: "Interior",
    excerpt: "Recognize mold types, safely remove patches under 10 square feet, and prevent recurrence. Larger areas require professional remediation.",
    readingTime: "8 min",
    difficulty: "Medium",
    heroImage: "",
    symptoms: [
      "Visible black, green, white, or gray fuzzy or slimy patches on walls, ceilings, grout, or wood",
      "Persistent musty, earthy odor in a room — even if you can't see mold",
      "Allergy-like symptoms (sneezing, coughing, eye irritation, headaches) that improve when you leave the house",
      "Peeling wallpaper, discolored grout, or paint that won't stick to surfaces",
    ],
    likelyCauses: [
      "Excess moisture from leaks (roof, plumbing, windows) or condensation",
      "Poor ventilation in bathrooms, basements, laundry rooms, or kitchens",
      "Past flooding or water damage that wasn't properly dried",
      "High indoor humidity (above 60%) — common in humid climates or homes without dehumidifiers",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Assess the extent of mold", 
        description: "Measure the affected area. If mold covers LESS THAN 10 square feet (roughly a 3x3 foot patch), you can handle it yourself. If it's larger, hidden behind walls, or inside HVAC ducts, call a professional mold remediation company. Also call a pro if you have health issues (asthma, immune disorders) or if the mold is black and slimy (potential Stachybotrys)." 
      },
      { 
        step: 2, 
        title: "Gear up with proper protection", 
        description: "Wear an N95 respirator mask (not a dust mask — it won't filter mold spores), rubber gloves, and safety goggles. Wear old clothes you can wash immediately after. Seal off the work area from the rest of the house with plastic sheeting and tape. Open windows for ventilation, but turn off HVAC to avoid spreading spores." 
      },
      { 
        step: 3, 
        title: "Fix the moisture source first", 
        description: "Identify and repair the cause of the moisture — leaking pipe, roof leak, condensation, poor ventilation, etc. If you don't fix the source, the mold will return no matter how well you clean." 
      },
      { 
        step: 4, 
        title: "Clean the mold", 
        description: "Mix a solution: either white vinegar (straight or diluted 1:1 with water) OR 1 cup borax per gallon of water. Do NOT use bleach on porous surfaces (drywall, wood) — it only kills surface mold and doesn't penetrate. Spray the solution generously on the mold and let it sit for 10–15 minutes. Scrub with a stiff brush. Wipe clean with disposable cloths and discard them in sealed plastic bags." 
      },
      { 
        step: 5, 
        title: "Dry the area completely", 
        description: "Use fans, dehumidifiers, and open windows to dry the area thoroughly within 24–48 hours. Mold cannot grow without moisture. Keep humidity below 50% — use a hygrometer to monitor." 
      },
      { 
        step: 6, 
        title: "Prevent recurrence", 
        description: "Apply mold-resistant primer and paint (brands like Zinsser Mold Killing Primer). Improve ventilation — use exhaust fans in bathrooms during and after showers (run for 20 minutes post-shower). Use a dehumidifier in damp basements. Fix any remaining leaks or condensation sources." 
      },
    ],
    toolsNeeded: [
      { name: "N95 Respirator Mask", affiliateLink: "", price: "$10–20 (box of 10)" },
      { name: "Rubber Gloves", affiliateLink: "", price: "$5–8" },
      { name: "White Vinegar (gallon)", affiliateLink: "", price: "$4–6" },
      { name: "Stiff Scrub Brush", affiliateLink: "", price: "$5–10" },
      { name: "Dehumidifier", affiliateLink: "", price: "$150–250" },
      { name: "Mold-Resistant Primer/Paint", affiliateLink: "", price: "$20–30" },
    ],
    mistakesToAvoid: [
      "Using bleach on porous surfaces like drywall or wood — it kills surface mold but doesn't penetrate, and the mold returns. Bleach is only effective on non-porous surfaces like tile or glass.",
      "Cleaning mold without fixing the moisture source — it will grow back within days or weeks.",
      "Not wearing proper respiratory protection — mold spores are tiny and easily inhaled, causing respiratory irritation or allergic reactions.",
      "Disturbing large mold patches or black mold without professional help — you risk spreading millions of spores throughout your home.",
      "Painting over mold without cleaning it — the mold will continue to grow under the paint and eventually break through.",
    ],
    safetyNotes: [
      "NEVER mix bleach with ammonia, vinegar, or other cleaners — this creates toxic chlorine gas.",
      "If you suspect black mold (Stachybotrys chartarum) — dark, slimy, greenish-black — do NOT disturb it. Call a professional mold remediation company for testing and removal.",
      "People with asthma, COPD, mold allergies, or weakened immune systems should NOT attempt mold removal. Leave the house during remediation.",
      "If mold is growing inside walls, ceilings, or HVAC ducts, professional remediation is required — you can't reach it safely.",
    ],
    whenToCallAPro: [
      "Mold area exceeds 10 square feet (3x3 feet) — EPA recommends professional remediation for larger areas.",
      "Mold is inside HVAC ducts, wall cavities, or other hidden areas — requires specialized equipment.",
      "Mold returns within weeks after cleaning — indicates a hidden moisture source that needs professional diagnosis.",
      "You suspect toxic black mold (Stachybotrys) — dark, slimy, greenish-black, usually on drywall or wood after severe water damage.",
      "Anyone in the home has health issues related to mold exposure — chronic cough, breathing problems, severe allergies.",
    ],
    faqs: [
      { 
        q: "Is all black mold dangerous?", 
        a: "Not all black-colored mold is the toxic Stachybotrys chartarum. However, ALL mold can cause allergic reactions and respiratory irritation. If you see mold, it needs to be removed and the moisture source fixed. If the mold is slimy, greenish-black, and appeared after flooding or long-term water damage, treat it as potentially toxic and call a pro." 
      },
      { 
        q: "Does bleach kill mold permanently?", 
        a: "Bleach kills surface mold on NON-POROUS surfaces (tile, glass, tubs) but does NOT penetrate porous materials like drywall, wood, or grout. The mold roots (hyphae) survive and regrow. For porous surfaces, use vinegar, borax, or commercial mold cleaners, and always fix the moisture source." 
      },
      { 
        q: "How do I know if mold is growing behind my walls?", 
        a: "Signs include: persistent musty smell with no visible mold, peeling paint or wallpaper, warping or discoloration of walls, allergy symptoms that worsen in certain rooms. If you suspect hidden mold, hire a mold inspector to do air testing or use a moisture meter to check wall cavities." 
      },
    ],
  },
  {
    slug: "leaky-faucet",
    title: "How to Fix a Leaky Faucet",
    category: "Plumbing",
    excerpt: "That constant drip can waste 3,000+ gallons per year. Stop it with a simple washer or cartridge replacement — usually a 30-minute fix.",
    readingTime: "5 min",
    difficulty: "Easy",
    heroImage: "",
    symptoms: [
      "Constant dripping from the faucet spout, even when handles are fully closed",
      "Water pooling around the base of the faucet on the sink or countertop",
      "Handle feels loose, hard to turn, or requires excessive force to shut off",
    ],
    likelyCauses: [
      "Worn-out rubber washer or O-ring inside the faucet valve — these degrade over 3–5 years",
      "Corroded valve seat where the washer presses to create a seal",
      "Damaged ceramic disc or cartridge in modern single-handle faucets",
      "Loose or damaged packing nut allowing water to leak around the handle",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Turn off the water supply", 
        description: "Look under the sink for two shut-off valves (one for hot, one for cold). Turn them clockwise to close. If there are no shut-offs, you'll need to turn off the main water supply for the house. Open the faucet to release any remaining pressure and drain the lines." 
      },
      { 
        step: 2, 
        title: "Identify your faucet type", 
        description: "COMPRESSION (two-handle, older): Has rubber washers that compress against the valve seat. CARTRIDGE (single or double handle): Has a cylindrical cartridge that slides up/down to control flow. BALL (single handle): Has a ball bearing with inlet holes. CERAMIC DISC (single handle): Has two ceramic discs that slide over each other. Take a photo and show it to the hardware store if unsure." 
      },
      { 
        step: 3, 
        title: "Disassemble the faucet handle", 
        description: "Remove the decorative cap (if present) to expose the handle screw. Unscrew and remove the handle. Some handles have a set screw on the side. Note the order and orientation of all parts — take photos as you go. Remove the packing nut or retaining clip to access the valve stem, cartridge, or ball assembly." 
      },
      { 
        step: 4, 
        title: "Replace the worn parts", 
        description: "COMPRESSION: Remove the stem and replace the rubber washer and O-ring at the bottom. CARTRIDGE/CERAMIC DISC: Pull out the old cartridge (may need pliers) and take it to the hardware store for an exact match. BALL: Replace the entire ball assembly or just the springs and seals. Apply plumber's grease to O-rings and threads during reassembly." 
      },
      { 
        step: 5, 
        title: "Reassemble and test", 
        description: "Install new parts in reverse order. Hand-tighten the packing nut — don't overtighten or you'll crack plastic parts. Reattach the handle and decorative cap. Turn the water supply back on slowly and check for leaks. Open and close the faucet several times to ensure smooth operation." 
      },
    ],
    toolsNeeded: [
      { name: "Adjustable Wrench or Channel Locks", affiliateLink: "", price: "$10–20" },
      { name: "Screwdrivers (flathead and Phillips)", affiliateLink: "", price: "$10–15" },
      { name: "Faucet Repair Kit (or individual parts)", affiliateLink: "", price: "$5–15" },
      { name: "Plumber's Grease", affiliateLink: "", price: "$4–6" },
      { name: "Rag or Towel", affiliateLink: "", price: "—" },
    ],
    mistakesToAvoid: [
      "Not turning off the water supply — you'll flood the area as soon as you remove parts.",
      "Losing track of the order of parts — take photos at each disassembly step so you know how to put it back together.",
      "Using the wrong size washer or O-ring — bring the old part to the hardware store to match it exactly.",
      "Over-tightening the packing nut or handle screws — this cracks plastic or ceramic parts. Hand-tighten, then snug gently with a wrench.",
      "Forgetting to place a rag in the sink drain — small screws and washers easily fall down the drain and are nearly impossible to retrieve.",
    ],
    safetyNotes: [
      "Always turn off the water supply before disassembling any faucet. Confirm water is off by opening the faucet — no water should flow.",
      "Place a towel or rag in the sink to catch small parts and prevent them from going down the drain.",
      "If you encounter corroded or stripped parts, stop and call a plumber — forcing them can break the valve body, requiring a full faucet replacement.",
    ],
    whenToCallAPro: [
      "The faucet body itself is cracked, corroded, or leaking from the base and new parts don't help.",
      "The valve seat is badly corroded — you can try re-grinding it with a seat wrench, but if you're not experienced, call a plumber.",
      "Leak is coming from inside the wall (behind the faucet) — this indicates a supply line leak and requires access to plumbing inside the wall.",
      "You cannot identify the faucet type or find replacement parts — older or discontinued models may require professional help.",
    ],
    faqs: [
      { 
        q: "How much water does a leaky faucet waste?", 
        a: "A faucet dripping once per second wastes about 5 gallons per day, or 1,800+ gallons per year. At typical water rates, that's $30–60 per year. A faster drip can waste 3,000+ gallons annually. Fixing it saves money and conserves water." 
      },
      { 
        q: "Should I repair an old faucet or replace it?", 
        a: "If the faucet is over 15 years old, heavily corroded, or hard to find parts for, replacement is often more cost-effective. New faucets cost $50–$300 and install in 1–2 hours. If the faucet is newer and parts are available, repair costs $5–20 in parts and 30 minutes of your time." 
      },
      { 
        q: "Why is my faucet still dripping after I replaced the washer?", 
        a: "The valve seat (the metal surface the washer seals against) may be corroded, pitted, or rough. You can smooth it with a valve seat grinder tool ($10–15) or replace the seat entirely (if it's removable). If the seat is integral to the faucet body, you may need to replace the faucet." 
      },
    ],
  },
  {
    slug: "running-toilet",
    title: "How to Fix a Running Toilet",
    category: "Plumbing",
    excerpt: "A toilet that won't stop running can waste 200+ gallons per day. Fix it in under 30 minutes with inexpensive parts from any hardware store.",
    readingTime: "5 min",
    difficulty: "Easy",
    heroImage: "",
    symptoms: [
      "Toilet runs continuously or for several minutes after flushing",
      "Toilet turns on and off by itself randomly (phantom flush) — you hear water running when no one flushed",
      "You hear constant or intermittent trickling or hissing sounds coming from the tank",
    ],
    likelyCauses: [
      "Worn or warped rubber flapper valve at the bottom of the tank — it no longer seals, letting water leak into the bowl",
      "Float adjusted too high, causing water to flow into the overflow tube",
      "Faulty fill valve (ballcock) that won't shut off when the tank is full",
      "Cracked or deteriorated overflow tube allowing water to drain continuously",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Remove the tank lid and observe", 
        description: "Carefully lift the ceramic tank lid straight up (it's heavy and fragile). Set it on a towel on the floor — do NOT lean it against the wall where it can fall. Look inside the tank while it's running. Watch where water is flowing. Is it trickling into the overflow tube (the tall pipe in the center)? Is the flapper at the bottom not sealing?" 
      },
      { 
        step: 2, 
        title: "Test the flapper", 
        description: "Push down on the rubber flapper at the bottom of the tank with your hand. If the running stops immediately, the flapper is worn out and needs replacement. Flappers degrade every 3–5 years from water minerals and chlorine. They cost $3–8 and are easy to replace." 
      },
      { 
        step: 3, 
        title: "Check the water level and float", 
        description: "The water level should be about 1 inch below the top of the overflow tube. If water is flowing into the overflow tube, the float is set too high. Adjust the float by bending the float arm (old-style ball float) or turning the adjustment screw (newer cylinder float). Flush and observe — water should stop filling before it reaches the overflow tube." 
      },
      { 
        step: 4, 
        title: "Replace the flapper", 
        description: "Turn off the water supply valve (located on the wall behind the toilet). Flush the toilet to empty the tank. Unhook the old flapper from the two pegs on the overflow tube (or lift the chain off). Wipe the valve seat (the rim where the flapper sits) to remove sediment. Install the new flapper, hook it to the pegs, and attach the chain to the flush lever with 1/2 inch of slack." 
      },
      { 
        step: 5, 
        title: "Replace the fill valve (if needed)", 
        description: "If adjusting the float doesn't stop the running, the fill valve may be faulty. Turn off water and flush to empty. Disconnect the water supply line under the tank. Unscrew the locknut holding the fill valve and remove it. Install the new fill valve per package instructions. Reconnect water and adjust the float to the correct level." 
      },
    ],
    toolsNeeded: [
      { name: "Universal Flapper Valve", affiliateLink: "", price: "$3–8" },
      { name: "Fill Valve Kit (if needed)", affiliateLink: "", price: "$10–20" },
      { name: "Adjustable Pliers or Wrench", affiliateLink: "", price: "$10–15" },
      { name: "Towel or Sponge", affiliateLink: "", price: "—" },
    ],
    mistakesToAvoid: [
      "Assuming all running toilets are caused by the flapper — sometimes it's the float or fill valve. Test each component.",
      "Installing the chain with too much slack — the flapper won't lift fully and the toilet won't flush properly. Too little slack means the flapper can't close. Aim for 1/2 inch of slack.",
      "Not cleaning the valve seat before installing a new flapper — mineral deposits or debris prevent a proper seal and the toilet will still run.",
      "Using chlorine drop-in tablets — these slowly dissolve the flapper, causing premature failure. If you use them, replace the flapper every 1–2 years.",
      "Forcing parts or overtightening — plastic toilet parts crack easily. Hand-tighten locknut and supply lines, then snug gently with pliers.",
    ],
    safetyNotes: [
      "Turn off the water supply valve before replacing any internal tank parts. The valve is on the wall or floor behind the toilet.",
      "Tank lids are heavy and fragile — set them on a towel on the floor, never on the edge of the sink or tub.",
      "Do NOT flush while your hand is in the tank — the sudden movement can pinch fingers.",
    ],
    whenToCallAPro: [
      "The toilet is leaking water at the base (around the floor) — this indicates a failed wax ring and requires removing the toilet to replace it.",
      "You see cracks in the tank or bowl — replace the toilet immediately to avoid flooding. Cracks cannot be repaired.",
      "Problem persists after replacing both the flapper and fill valve — there may be a crack in the overflow tube or valve seat.",
      "You're not comfortable working inside the tank or the parts don't match your toilet model — call a plumber ($100–200 service call).",
    ],
    faqs: [
      { 
        q: "How do I know if my toilet is leaking?", 
        a: "Drop 10 drops of food coloring into the tank (not the bowl). Wait 15–30 minutes without flushing. If color appears in the bowl, your flapper is leaking. This is called a 'phantom flush' and can waste 200+ gallons per day." 
      },
      { 
        q: "How much does a running toilet cost in water bills?", 
        a: "A toilet with a worn flapper can waste 200 gallons per day (6,000 gallons per month). At typical rates, this adds $30–70+ per month to your water bill. Fixing it pays for itself in days." 
      },
      { 
        q: "Why does my toilet run for a few seconds randomly?", 
        a: "This is a 'phantom flush' caused by a slow leak from the tank into the bowl. The tank water level drops slowly until the fill valve kicks on to refill it. The flapper is leaking — replace it." 
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "How to Clean and Maintain Gutters",
    category: "Exterior",
    excerpt: "Prevent water damage, foundation erosion, and roof leaks with regular gutter maintenance. Here's how to clean safely and when to call a pro.",
    readingTime: "6 min",
    difficulty: "Medium",
    heroImage: "",
    symptoms: [
      "Water overflowing from gutters during rain instead of flowing through downspouts",
      "Gutters sagging, pulling away from the fascia board, or visibly bowing under weight",
      "Plants, weeds, or seedlings growing in gutters (indicates long-term debris buildup)",
      "Water stains, erosion, or puddles directly below gutters or near the foundation",
    ],
    likelyCauses: [
      "Accumulated leaves, twigs, shingle grit, and organic debris blocking gutters and downspouts",
      "Downspouts clogged with compacted debris, bird nests, or roof sediment",
      "Gutters not properly pitched toward downspouts (should slope 1/4 inch per 10 feet)",
      "Damaged, corroded, or rust-through sections allowing water to leak or pool",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Set up safely", 
        description: "Use a sturdy extension ladder rated for your weight plus 50 lbs. Place it on level, firm ground. NEVER lean the ladder directly against the gutter — it will bend or detach. Use a ladder standoff (stabilizer) to distribute weight on the wall or roof edge. Have a spotter hold the ladder base. Move the ladder frequently — don't overreach." 
      },
      { 
        step: 2, 
        title: "Remove large debris by hand", 
        description: "Wear heavy-duty work gloves (leather or rubber-coated). Starting near a downspout, scoop out leaves, twigs, and muck by hand or with a gutter scoop. Work away from the downspout initially, piling debris as you go. Drop debris into a bucket hung on the ladder (use an S-hook) or onto a tarp on the ground. Compost the debris or bag it for yard waste." 
      },
      { 
        step: 3, 
        title: "Flush gutters with water", 
        description: "Once large debris is removed, use a garden hose with a spray nozzle to flush remaining sediment toward the downspout. Start at the far end and work toward the downspout. Watch for proper flow and drainage. If water backs up or drains slowly, the downspout is clogged." 
      },
      { 
        step: 4, 
        title: "Clear clogged downspouts", 
        description: "If water won't flow through the downspout, detach the bottom elbow (if accessible). Try flushing from the top with a hose — use high pressure. If that doesn't work, use a plumber's snake or a long stick to break up the clog. For stubborn clogs, try flushing from the bottom up. Once clear, reassemble and test flow." 
      },
      { 
        step: 5, 
        title: "Inspect and repair damage", 
        description: "While on the ladder, inspect for: loose gutter hangers or spikes (re-secure or replace), rust spots or small holes (patch with gutter sealant or aluminum tape), separated seams at corners (apply gutter sealant), and sagging sections (add hangers every 24 inches). Downspouts should discharge at least 4–6 feet from the foundation — add extensions if needed." 
      },
    ],
    toolsNeeded: [
      { name: "Extension Ladder (appropriate height)", affiliateLink: "", price: "$120–250" },
      { name: "Ladder Standoff/Stabilizer", affiliateLink: "", price: "$30–50" },
      { name: "Heavy-Duty Work Gloves", affiliateLink: "", price: "$10–15" },
      { name: "Gutter Scoop or Trowel", affiliateLink: "", price: "$6–12" },
      { name: "Garden Hose with Nozzle", affiliateLink: "", price: "$20–40" },
      { name: "Gutter Sealant", affiliateLink: "", price: "$6–10" },
    ],
    mistakesToAvoid: [
      "Leaning the ladder directly against the gutter — gutters are not load-bearing and will bend, detach, or collapse. Use a ladder standoff.",
      "Overreaching from the ladder — reposition the ladder frequently. Overreaching causes loss of balance and falls.",
      "Ignoring downspout clogs — a full gutter with a clogged downspout is like a bathtub with no drain. It will overflow and damage the fascia and foundation.",
      "Flushing debris into downspouts instead of removing it — this causes clogs that are harder to clear later.",
      "Working alone without a spotter — ladder accidents are common. Have someone nearby or use a ladder stabilizer for added safety.",
    ],
    safetyNotes: [
      "NEVER clean gutters on a rainy, windy, or icy day — wet surfaces are extremely slippery.",
      "Use a ladder stabilizer — it prevents the ladder from damaging gutters and provides a stable platform.",
      "Wear non-slip shoes and keep your center of gravity between the ladder rails. Don't lean out — reposition the ladder instead.",
      "Be aware of power lines — maintain at least 10 feet of clearance. If power lines are near, call a professional.",
      "For homes taller than one story, consider hiring a pro — the risk of serious injury increases significantly.",
    ],
    whenToCallAPro: [
      "Your home is 2+ stories or the roof is steeply pitched — fall risk is too high for DIY.",
      "Gutters are severely damaged, sagging, or detached — they may need re-hanging, re-pitching, or replacement.",
      "You're not comfortable working on a ladder at height — no shame in hiring a pro. Typical cost is $100–250 for cleaning.",
      "Gutters need re-pitching (improper slope) — this requires removing and reinstalling gutter sections, best done by a pro.",
      "You have gutter guards or covers — some systems require removal for cleaning, which can be tricky.",
    ],
    faqs: [
      { 
        q: "How often should I clean my gutters?", 
        a: "At least twice a year — in late spring (after trees finish shedding seeds/blossoms) and in late fall (after leaves drop). If you have overhanging trees, especially pine or oak, clean 3–4 times per year. Inspect after major storms." 
      },
      { 
        q: "Are gutter guards worth the cost?", 
        a: "For homes with heavy tree coverage, yes — they reduce cleaning frequency significantly. However, they don't eliminate cleaning entirely (fine debris still gets through). Expect to pay $7–20 per linear foot installed, or $1,000–2,500 for an average home. Cheaper DIY mesh screens work but clog more easily." 
      },
      { 
        q: "What damage can clogged gutters cause?", 
        a: "Clogged gutters overflow, dumping water next to the foundation (causing basement leaks, foundation cracks, and erosion). They also cause fascia and soffit rot, roof edge damage, ice dams in winter, and mosquito breeding in standing water. Cleaning costs $100–200. Foundation repairs cost $5,000+." 
      },
    ],
  },
  {
    slug: "caulking-windows",
    title: "How to Re-Caulk Windows and Doors",
    category: "Exterior",
    excerpt: "Seal air leaks, reduce energy waste, and keep moisture out with proper caulking. A simple skill that pays dividends year-round.",
    readingTime: "5 min",
    difficulty: "Easy",
    heroImage: "",
    symptoms: [
      "Drafts felt near windows or doors — hold a lit candle or incense stick near the frame and watch for flickering",
      "Visible gaps or cracked, peeling caulk around window or door frames",
      "Higher than expected heating or cooling bills despite consistent thermostat settings",
      "Moisture or condensation appearing between window panes (indicates seal failure, not just caulk)",
    ],
    likelyCauses: [
      "Old caulk dried out, cracked, and pulled away from surfaces due to age (5–10 years is typical lifespan)",
      "House settling or seasonal expansion/contraction of framing materials creating gaps",
      "Sun and UV exposure degrading exterior caulk — common on south- and west-facing windows",
      "Improper original application — caulk applied over dirt, moisture, or without primer",
    ],
    diySteps: [
      { 
        step: 1, 
        title: "Remove old caulk completely", 
        description: "Use a caulk removal tool, utility knife, or 5-in-1 painter's tool to scrape out all old caulk. Be thorough — leaving old caulk behind prevents the new caulk from adhering properly. For stubborn residue, use a caulk remover solvent (follow label instructions). Pull out any loose pieces with pliers." 
      },
      { 
        step: 2, 
        title: "Clean and dry the surface", 
        description: "Wipe the joint with rubbing alcohol (isopropyl) on a clean cloth to remove dirt, oils, and residue. Let it dry completely — this is critical. Caulk will not adhere to damp or dirty surfaces. For best results, wait for a dry day with low humidity." 
      },
      { 
        step: 3, 
        title: "Cut the caulk tube tip correctly", 
        description: "Cut the tip at a 45-degree angle, starting with a small opening (about 1/8 inch). You can always cut more off if needed, but you can't make it smaller. A smaller bead looks cleaner and wastes less material. Puncture the inner seal with a long nail or the wire on the caulk gun." 
      },
      { 
        step: 4, 
        title: "Apply caulk in a smooth bead", 
        description: "Hold the caulk gun at a 45-degree angle and pull (not push) the gun along the joint, applying steady pressure. Move at a consistent speed — too fast and you'll have gaps, too slow and you'll waste material. Fill the gap completely, slightly overfilling. For deep gaps (over 1/4 inch), use foam backer rod first to save caulk." 
      },
      { 
        step: 5, 
        title: "Tool the caulk bead", 
        description: "Immediately after applying, wet your finger with water (for latex/acrylic caulk) or mineral spirits (for silicone). Run your finger along the bead in one smooth motion to press it into the joint and smooth the surface. Alternatively, use a caulk smoothing tool or the back of a plastic spoon. Wipe away excess caulk with a damp cloth." 
      },
      { 
        step: 6, 
        title: "Let it cure fully", 
        description: "Allow 24 hours for full cure before painting or exposing to moisture (check the caulk tube label — some require longer). Do not disturb or touch during curing. For exterior applications, avoid caulking if rain is expected within 24 hours." 
      },
    ],
    toolsNeeded: [
      { name: "Silicone or Acrylic-Latex Caulk", affiliateLink: "", price: "$4–8 per tube" },
      { name: "Caulk Gun (smooth-flow type)", affiliateLink: "", price: "$8–15" },
      { name: "Caulk Removal Tool or Utility Knife", affiliateLink: "", price: "$5–10" },
      { name: "Rubbing Alcohol (isopropyl)", affiliateLink: "", price: "$3–5" },
      { name: "Rags or Paper Towels", affiliateLink: "", price: "—" },
    ],
    mistakesToAvoid: [
      "Not removing all the old caulk — new caulk adheres to clean surfaces, not old caulk. Caulk-over-caulk joints fail quickly.",
      "Caulking over a dirty or damp surface — the caulk won't stick and will peel away within weeks.",
      "Cutting the caulk tube tip too large — you'll waste material and create a messy, oversized bead that's hard to smooth.",
      "Using the wrong type of caulk — use silicone for exterior (it's waterproof and flexible). Use paintable latex/acrylic for interior trim if you plan to paint. Don't use silicone where you need to paint over it — paint won't stick.",
      "Pushing the caulk gun instead of pulling — pushing creates air pockets and uneven beads. Always pull the gun toward you.",
    ],
    safetyNotes: [
      "Work in a well-ventilated area, especially when using silicone caulk — fumes can be strong.",
      "Wear gloves if you have sensitive skin — some caulks can cause irritation.",
      "Be careful with utility knives — always cut away from your body and keep fingers clear of the blade path.",
    ],
    whenToCallAPro: [
      "Window or door frame is rotted, damaged, or structurally unsound — caulk is a seal, not a structural repair.",
      "Moisture is trapped between double-pane glass (you see condensation or fog inside the glass) — this means the IGU (insulated glass unit) seal has failed and the window needs replacement, not caulk.",
      "Gaps are too large for caulk alone (over 1/2 inch) — these may need backer rod, spray foam, or trim replacement before caulking.",
      "You're caulking high windows or hard-to-reach areas where ladder work is involved — consider hiring if you're uncomfortable at heights.",
    ],
    faqs: [
      { 
        q: "What type of caulk should I use for windows?", 
        a: "For EXTERIOR windows and doors: Use 100% silicone caulk — it's waterproof, flexible, and UV-resistant. It lasts 10–20 years. For INTERIOR trim: Use paintable acrylic-latex caulk (like DAP Alex Plus) — it's easier to work with and can be painted. Don't use silicone indoors if you plan to paint — paint won't adhere to silicone." 
      },
      { 
        q: "How long does caulk last on windows?", 
        a: "Quality silicone caulk lasts 10–20 years on exterior windows. Latex/acrylic caulk lasts 5–10 years. Inspect annually and re-caulk when you see cracking, peeling, or gaps. Regular maintenance prevents air leaks and water infiltration." 
      },
      { 
        q: "Can I caulk over old caulk?", 
        a: "Not recommended. Caulk adheres best to clean, bare surfaces, not to old caulk. If you caulk over old caulk, the new layer will likely peel off along with the old. Take the time to remove the old caulk completely — it makes a huge difference in longevity." 
      },
    ],
  },
];
