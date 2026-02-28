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
  safetyNotes: string[];
  whenToCallAPro: string[];
  faqs: { q: string; a: string }[];
}

export const diyPosts: DIYPost[] = [
  {
    slug: "drywall-cracks",
    title: "How to Fix Drywall Cracks",
    category: "Interior",
    excerpt: "Hairline to structural cracks — learn when to patch and when to call a pro.",
    readingTime: "6 min",
    difficulty: "Easy",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Hairline cracks along seams or corners",
      "Diagonal cracks near windows or doors",
      "Cracks that reappear after patching",
    ],
    likelyCauses: [
      "Normal house settling",
      "Temperature and humidity changes",
      "Poor original taping or mudding",
      "Foundation movement (if cracks are wide or diagonal)",
    ],
    diySteps: [
      { step: 1, title: "Clean the crack", description: "Use a utility knife to widen the crack slightly to a V-shape, then brush away dust and debris." },
      { step: 2, title: "Apply mesh tape", description: "Place self-adhesive fiberglass mesh tape over the crack, pressing firmly." },
      { step: 3, title: "Apply joint compound", description: "Spread a thin layer of joint compound over the tape with a 6-inch drywall knife. Let dry 24 hours." },
      { step: 4, title: "Sand and repeat", description: "Sand smooth with 120-grit sandpaper. Apply a second coat, feathering edges wider. Sand again when dry." },
      { step: 5, title: "Prime and paint", description: "Apply primer over the repair, then paint to match the surrounding wall." },
    ],
    toolsNeeded: [
      { name: "6-inch Drywall Knife", affiliateLink: "#affiliate-drywall-knife", price: "$8" },
      { name: "Joint Compound", affiliateLink: "#affiliate-joint-compound", price: "$12" },
      { name: "Fiberglass Mesh Tape", affiliateLink: "#affiliate-mesh-tape", price: "$5" },
      { name: "120-grit Sandpaper", affiliateLink: "#affiliate-sandpaper", price: "$4" },
    ],
    safetyNotes: [
      "Wear a dust mask when sanding.",
      "Ensure good ventilation in the work area.",
    ],
    whenToCallAPro: [
      "Cracks wider than 1/4 inch",
      "Cracks that are growing or shifting",
      "Diagonal cracks from corners of doors/windows (may indicate structural issues)",
      "Cracks accompanied by bulging or bowing walls",
    ],
    faqs: [
      { q: "Are hairline cracks in drywall normal?", a: "Yes, hairline cracks are common and usually caused by normal settling. They are cosmetic and easy to fix." },
      { q: "How do I know if a crack is structural?", a: "Structural cracks are typically wider than 1/4 inch, diagonal, and may be accompanied by doors that stick or floors that slope." },
    ],
  },
  {
    slug: "water-stains",
    title: "How to Fix Water Stains on Ceilings and Walls",
    category: "Interior",
    excerpt: "Identify the source, stop the leak, and restore your ceiling or wall.",
    readingTime: "7 min",
    difficulty: "Medium",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Yellow or brown discoloration on ceiling or walls",
      "Peeling or bubbling paint",
      "Soft or sagging drywall",
      "Musty smell near the stain",
    ],
    likelyCauses: [
      "Roof leak",
      "Plumbing leak from above",
      "Condensation from HVAC or bathroom",
      "Ice dam damage",
    ],
    diySteps: [
      { step: 1, title: "Find the source", description: "Check for active leaks above the stain — inspect plumbing, roof, or attic for moisture." },
      { step: 2, title: "Fix the leak first", description: "Repair the leak source before treating the stain. A stain fix without stopping the leak will fail." },
      { step: 3, title: "Let it dry completely", description: "Allow the area to dry fully (use a fan or dehumidifier). This may take 24–48 hours." },
      { step: 4, title: "Apply stain-blocking primer", description: "Use a shellac-based or oil-based stain-blocking primer to seal the discoloration." },
      { step: 5, title: "Repaint", description: "Once primer is dry, repaint with matching ceiling or wall paint." },
    ],
    toolsNeeded: [
      { name: "Stain-blocking Primer", affiliateLink: "#affiliate-primer", price: "$14" },
      { name: "Paint Roller", affiliateLink: "#affiliate-roller", price: "$9" },
      { name: "Drop Cloth", affiliateLink: "#affiliate-drop-cloth", price: "$6" },
    ],
    safetyNotes: [
      "Check for mold before painting — if present, treat mold first.",
      "Use proper ventilation when using oil-based primers.",
    ],
    whenToCallAPro: [
      "Stain keeps returning after repair",
      "Drywall is sagging or soft",
      "Mold is present behind the wall",
      "Source of leak cannot be identified",
    ],
    faqs: [
      { q: "Can I just paint over a water stain?", a: "No — regular paint won't block the stain. You must use a stain-blocking primer first, or the discoloration will bleed through." },
      { q: "Is a water stain dangerous?", a: "The stain itself isn't dangerous, but the underlying moisture can cause mold growth if not addressed." },
    ],
  },
  {
    slug: "roof-leaks",
    title: "How to Find and Fix a Roof Leak",
    category: "Roofing",
    excerpt: "Trace the leak, apply temporary repairs, and know when you need professional help.",
    readingTime: "8 min",
    difficulty: "Hard",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Water dripping from ceiling during rain",
      "Water stains on attic rafters",
      "Missing, cracked, or curled shingles",
      "Daylight visible through roof boards",
    ],
    likelyCauses: [
      "Damaged or missing shingles",
      "Cracked flashing around chimneys or vents",
      "Clogged gutters causing water backup",
      "Age-related wear on roofing materials",
    ],
    diySteps: [
      { step: 1, title: "Inspect the attic", description: "During or after rain, check the attic for wet spots, mold, or water trails on rafters." },
      { step: 2, title: "Trace the leak", description: "Water often travels along rafters before dripping — trace it upward to find the entry point." },
      { step: 3, title: "Temporary patch", description: "Apply roofing cement or a tarp over the damaged area as a temporary fix." },
      { step: 4, title: "Replace damaged shingles", description: "Lift surrounding shingles, remove nails, slide out damaged shingle, and install replacement." },
    ],
    toolsNeeded: [
      { name: "Roofing Cement", affiliateLink: "#affiliate-roof-cement", price: "$8" },
      { name: "Replacement Shingles", affiliateLink: "#affiliate-shingles", price: "$25" },
      { name: "Pry Bar", affiliateLink: "#affiliate-pry-bar", price: "$10" },
      { name: "Roofing Nails", affiliateLink: "#affiliate-roofing-nails", price: "$6" },
    ],
    safetyNotes: [
      "Never walk on a wet roof.",
      "Use a safety harness when working on steep roofs.",
      "Have someone spot you from the ground.",
    ],
    whenToCallAPro: [
      "Leak involves flashing or valleys",
      "Multiple areas of damage",
      "Roof is older than 20 years",
      "You are not comfortable working at heights",
    ],
    faqs: [
      { q: "How much does a roof repair cost?", a: "Minor repairs may cost $150–$400 for a pro. Full replacement ranges from $5,000–$15,000+ depending on size." },
      { q: "Can I patch a roof leak from inside?", a: "You can apply a temporary patch from the attic, but a permanent fix must be done from the exterior." },
    ],
  },
  {
    slug: "deck-rot",
    title: "How to Identify and Repair Deck Rot",
    category: "Deck/Patio",
    excerpt: "Spot the early signs of wood decay and learn when boards need replacing.",
    readingTime: "7 min",
    difficulty: "Medium",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Soft or spongy spots in deck boards",
      "Discolored or darkened wood",
      "Splintering or crumbling wood",
      "Mushroom or fungal growth on boards",
    ],
    likelyCauses: [
      "Prolonged moisture exposure",
      "Poor drainage beneath the deck",
      "Lack of sealant or stain maintenance",
      "Ground contact with untreated wood",
    ],
    diySteps: [
      { step: 1, title: "Probe for damage", description: "Use a screwdriver to probe suspected areas. Rotted wood will feel soft and crumble." },
      { step: 2, title: "Remove damaged boards", description: "Unscrew and remove rotted boards. Check joists beneath for rot as well." },
      { step: 3, title: "Treat with wood hardener", description: "If rot is minor, apply wood hardener to stabilize the remaining wood." },
      { step: 4, title: "Replace with treated lumber", description: "Install pressure-treated replacement boards and secure with deck screws." },
      { step: 5, title: "Seal the deck", description: "Apply a waterproof deck sealant or stain to all surfaces to prevent future rot." },
    ],
    toolsNeeded: [
      { name: "Deck Screws", affiliateLink: "#affiliate-deck-screws", price: "$12" },
      { name: "Wood Hardener", affiliateLink: "#affiliate-wood-hardener", price: "$15" },
      { name: "Deck Sealant", affiliateLink: "#affiliate-deck-sealant", price: "$28" },
      { name: "Circular Saw", affiliateLink: "#affiliate-circular-saw", price: "$60" },
    ],
    safetyNotes: [
      "Wear gloves when handling treated lumber.",
      "Use eye protection when cutting wood.",
    ],
    whenToCallAPro: [
      "Structural joists or posts are rotted",
      "More than 25% of deck boards need replacing",
      "Deck is unstable or wobbles",
      "Deck is elevated more than 4 feet",
    ],
    faqs: [
      { q: "How long does a deck last?", a: "A well-maintained pressure-treated deck lasts 15–25 years. Composite decking can last 25–50 years." },
      { q: "Can I paint over rotting wood?", a: "No — paint will not stop rot. Remove or treat the rot first, then seal and paint." },
    ],
  },
  {
    slug: "hvac-issues",
    title: "Troubleshooting Common HVAC Problems",
    category: "HVAC",
    excerpt: "Diagnose airflow, thermostat, and efficiency issues before calling a technician.",
    readingTime: "8 min",
    difficulty: "Medium",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Uneven heating or cooling in rooms",
      "System runs constantly but house stays uncomfortable",
      "Strange noises from furnace or AC unit",
      "Higher than normal energy bills",
    ],
    likelyCauses: [
      "Dirty air filter restricting airflow",
      "Thermostat malfunction or miscalibration",
      "Blocked or leaky ductwork",
      "Refrigerant leak in AC system",
    ],
    diySteps: [
      { step: 1, title: "Check the air filter", description: "Locate and inspect your air filter. Replace if dirty — this solves most airflow problems." },
      { step: 2, title: "Check thermostat settings", description: "Ensure thermostat is set correctly. Replace batteries if it's unresponsive." },
      { step: 3, title: "Inspect vents", description: "Make sure all supply and return vents are open and unblocked by furniture or curtains." },
      { step: 4, title: "Clean outdoor unit", description: "Remove debris, leaves, and dirt from around the outdoor condenser unit. Keep 2 feet of clearance." },
    ],
    toolsNeeded: [
      { name: "Replacement Air Filter", affiliateLink: "#affiliate-air-filter", price: "$12" },
      { name: "Thermostat", affiliateLink: "#affiliate-thermostat", price: "$25" },
      { name: "Coil Cleaner Spray", affiliateLink: "#affiliate-coil-cleaner", price: "$10" },
    ],
    safetyNotes: [
      "Always turn off the system before inspecting internal components.",
      "Never attempt to handle refrigerant — it requires EPA certification.",
    ],
    whenToCallAPro: [
      "Refrigerant leak suspected (ice on coils)",
      "Electrical issues or burning smell",
      "System is more than 15 years old and failing",
      "Ductwork needs sealing or replacement",
    ],
    faqs: [
      { q: "How often should I change my air filter?", a: "Every 1–3 months depending on filter type, pets, and allergies." },
      { q: "Why is my AC blowing warm air?", a: "Common causes include a dirty filter, low refrigerant, or a faulty compressor. Start with the filter." },
    ],
  },
  {
    slug: "foundation-cracks",
    title: "Understanding and Addressing Foundation Cracks",
    category: "Exterior",
    excerpt: "Learn which cracks are cosmetic and which need structural attention.",
    readingTime: "7 min",
    difficulty: "Hard",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Visible cracks in foundation walls",
      "Doors or windows that stick or won't close",
      "Uneven or sloping floors",
      "Gaps between walls and ceiling or floor",
    ],
    likelyCauses: [
      "Normal concrete curing and shrinkage",
      "Soil expansion and contraction (clay soil)",
      "Poor drainage directing water toward foundation",
      "Tree roots pushing against foundation",
    ],
    diySteps: [
      { step: 1, title: "Measure and monitor", description: "Mark crack endpoints with pencil and date. Measure width with a ruler. Re-check monthly." },
      { step: 2, title: "Seal hairline cracks", description: "Use epoxy or polyurethane injection kits to fill and seal hairline cracks (under 1/8 inch)." },
      { step: 3, title: "Improve drainage", description: "Ensure gutters discharge 4–6 feet from foundation. Grade soil to slope away from the house." },
      { step: 4, title: "Manage landscaping", description: "Keep large trees and shrubs at least 10 feet from the foundation." },
    ],
    toolsNeeded: [
      { name: "Epoxy Injection Kit", affiliateLink: "#affiliate-epoxy-kit", price: "$30" },
      { name: "Caulk Gun", affiliateLink: "#affiliate-caulk-gun", price: "$8" },
      { name: "Gutter Extensions", affiliateLink: "#affiliate-gutter-ext", price: "$12" },
    ],
    safetyNotes: [
      "Foundation repair can affect structural integrity — proceed with caution.",
      "Document all cracks with photos before any repair work.",
    ],
    whenToCallAPro: [
      "Cracks wider than 1/4 inch",
      "Horizontal cracks (hydrostatic pressure)",
      "Stair-step cracks in block foundations",
      "Doors/windows that no longer open properly",
      "Water entering through foundation cracks",
    ],
    faqs: [
      { q: "Are foundation cracks always serious?", a: "No. Vertical hairline cracks from curing are common and usually harmless. Horizontal or widening cracks need professional evaluation." },
      { q: "How much does foundation repair cost?", a: "Minor crack sealing costs $500–$1,000. Major structural repair can cost $5,000–$15,000+." },
    ],
  },
  {
    slug: "electrical-outlets",
    title: "Troubleshooting Dead or Faulty Electrical Outlets",
    category: "Electrical",
    excerpt: "Safely diagnose common outlet problems and know when to call an electrician.",
    readingTime: "6 min",
    difficulty: "Easy",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Outlet has no power",
      "Outlet sparks when plugging in devices",
      "Outlet feels warm to the touch",
      "Outlet or cover plate is discolored",
    ],
    likelyCauses: [
      "Tripped circuit breaker or GFCI",
      "Loose wiring connections",
      "Worn-out outlet receptacle",
      "Overloaded circuit",
    ],
    diySteps: [
      { step: 1, title: "Check the breaker panel", description: "Find your electrical panel and look for any tripped breakers (switch in middle position). Flip fully off then on." },
      { step: 2, title: "Check GFCI outlets", description: "Find the nearest GFCI outlet (has Test/Reset buttons). Press Reset. Many regular outlets are downstream from a GFCI." },
      { step: 3, title: "Test the outlet", description: "Use a plug-in outlet tester to check for proper wiring and grounding." },
      { step: 4, title: "Replace the outlet", description: "Turn off breaker. Remove cover plate and outlet. Disconnect wires. Connect new outlet and reassemble." },
    ],
    toolsNeeded: [
      { name: "Outlet Tester", affiliateLink: "#affiliate-outlet-tester", price: "$12" },
      { name: "Screwdriver Set", affiliateLink: "#affiliate-screwdrivers", price: "$10" },
      { name: "Replacement Outlet", affiliateLink: "#affiliate-outlet", price: "$3" },
      { name: "Voltage Detector", affiliateLink: "#affiliate-voltage-detector", price: "$18" },
    ],
    safetyNotes: [
      "ALWAYS turn off the breaker before working on any outlet.",
      "Use a non-contact voltage tester to confirm power is off.",
      "Never touch bare wires.",
    ],
    whenToCallAPro: [
      "Outlet is sparking or feels hot",
      "Burning smell from outlet",
      "Aluminum wiring (common in 1960s–70s homes)",
      "You are not comfortable working with electrical wiring",
      "Multiple outlets on same circuit are dead",
    ],
    faqs: [
      { q: "Why does my outlet keep tripping?", a: "A GFCI outlet trips when it detects a ground fault. This could be caused by moisture, a faulty appliance, or worn wiring." },
      { q: "Is a warm outlet dangerous?", a: "A slightly warm outlet with a dimmer switch is normal. A hot standard outlet is dangerous — stop using it and call an electrician." },
    ],
  },
  {
    slug: "mold-spots",
    title: "How to Identify and Remove Mold",
    category: "Interior",
    excerpt: "Recognize mold types, safely remove small patches, and prevent recurrence.",
    readingTime: "8 min",
    difficulty: "Medium",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Visible black, green, or white fuzzy patches",
      "Musty odor in room",
      "Allergic reactions (sneezing, eye irritation) indoors",
      "Peeling wallpaper or discolored grout",
    ],
    likelyCauses: [
      "Excess moisture from leaks or condensation",
      "Poor ventilation in bathrooms or basements",
      "Flooding or water damage history",
      "High indoor humidity (above 60%)",
    ],
    diySteps: [
      { step: 1, title: "Assess the area", description: "If mold covers less than 10 square feet, you can handle it yourself. Larger areas need professional remediation." },
      { step: 2, title: "Protect yourself", description: "Wear an N95 mask, gloves, and eye protection. Seal the room from the rest of the house." },
      { step: 3, title: "Clean with solution", description: "Mix 1 cup white vinegar (or borax) per gallon of water. Scrub the area thoroughly." },
      { step: 4, title: "Dry completely", description: "Use fans and dehumidifiers to dry the area within 24–48 hours." },
      { step: 5, title: "Prevent recurrence", description: "Fix the moisture source, improve ventilation, and consider mold-resistant paint." },
    ],
    toolsNeeded: [
      { name: "N95 Respirator Mask", affiliateLink: "#affiliate-n95", price: "$8" },
      { name: "White Vinegar (gallon)", affiliateLink: "#affiliate-vinegar", price: "$4" },
      { name: "Scrub Brush", affiliateLink: "#affiliate-scrub-brush", price: "$6" },
      { name: "Dehumidifier", affiliateLink: "#affiliate-dehumidifier", price: "$180" },
    ],
    safetyNotes: [
      "Never mix bleach with ammonia-based cleaners.",
      "If you suspect black mold (Stachybotrys), do not disturb it — call a professional.",
      "People with asthma or immune conditions should not attempt mold removal.",
    ],
    whenToCallAPro: [
      "Mold area exceeds 10 square feet",
      "Mold is inside HVAC ducts",
      "Mold returns after cleaning",
      "Suspected black mold (dark, slimy texture)",
      "Anyone in the home has health issues from mold exposure",
    ],
    faqs: [
      { q: "Is all mold dangerous?", a: "Not all mold is toxic, but all mold can cause allergic reactions and should be removed. Black mold (Stachybotrys) produces toxins and requires professional handling." },
      { q: "Does bleach kill mold?", a: "Bleach kills surface mold but doesn't penetrate porous materials. Vinegar is often more effective for porous surfaces." },
    ],
  },
  {
    slug: "leaky-faucet",
    title: "How to Fix a Leaky Faucet",
    category: "Plumbing",
    excerpt: "Stop the drip and save water with a simple washer or cartridge replacement.",
    readingTime: "5 min",
    difficulty: "Easy",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Constant dripping from faucet spout",
      "Water pooling around the faucet base",
      "Handle is hard to turn or feels loose",
    ],
    likelyCauses: [
      "Worn-out washer or O-ring",
      "Corroded valve seat",
      "Faulty cartridge or ceramic disc",
    ],
    diySteps: [
      { step: 1, title: "Turn off water supply", description: "Close the shut-off valves under the sink. Open the faucet to release remaining pressure." },
      { step: 2, title: "Disassemble the handle", description: "Remove the handle cap, screw, and handle. Note the order of parts for reassembly." },
      { step: 3, title: "Replace the washer or cartridge", description: "Inspect the washer/O-ring/cartridge. Bring the old part to the hardware store for an exact match." },
      { step: 4, title: "Reassemble and test", description: "Install new parts, reassemble in reverse order, turn water back on, and check for leaks." },
    ],
    toolsNeeded: [
      { name: "Adjustable Wrench", affiliateLink: "#affiliate-wrench", price: "$10" },
      { name: "Faucet Repair Kit", affiliateLink: "#affiliate-faucet-kit", price: "$8" },
      { name: "Plumber's Grease", affiliateLink: "#affiliate-plumber-grease", price: "$5" },
    ],
    safetyNotes: [
      "Always turn off the water supply before disassembly.",
      "Place a rag in the drain to prevent losing small parts.",
    ],
    whenToCallAPro: [
      "Faucet is corroded internally",
      "Leak is coming from within the wall",
      "You cannot identify the faucet type or find replacement parts",
    ],
    faqs: [
      { q: "How much water does a leaky faucet waste?", a: "A faucet dripping once per second wastes about 3,000 gallons per year." },
      { q: "Should I repair or replace my faucet?", a: "If the faucet is over 15 years old or heavily corroded, replacement is usually more cost-effective." },
    ],
  },
  {
    slug: "running-toilet",
    title: "How to Fix a Running Toilet",
    category: "Plumbing",
    excerpt: "A running toilet can waste 200+ gallons a day. Fix it in under 30 minutes.",
    readingTime: "5 min",
    difficulty: "Easy",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Toilet runs continuously after flushing",
      "Toilet turns on and off randomly (phantom flush)",
      "You hear water trickling in the tank",
    ],
    likelyCauses: [
      "Worn flapper valve",
      "Float set too high",
      "Faulty fill valve",
      "Overflow tube crack",
    ],
    diySteps: [
      { step: 1, title: "Remove the tank lid", description: "Lift the lid and set it aside carefully on a towel." },
      { step: 2, title: "Check the flapper", description: "Push down on the flapper. If running stops, the flapper needs replacing. They wear out every 3–5 years." },
      { step: 3, title: "Adjust the float", description: "If the water level is above the overflow tube, adjust the float arm or screw to lower the water level." },
      { step: 4, title: "Replace the flapper", description: "Turn off water, flush to empty tank, unhook old flapper, install new one. Turn water back on." },
    ],
    toolsNeeded: [
      { name: "Universal Flapper", affiliateLink: "#affiliate-flapper", price: "$5" },
      { name: "Fill Valve Kit", affiliateLink: "#affiliate-fill-valve", price: "$10" },
      { name: "Adjustable Pliers", affiliateLink: "#affiliate-pliers", price: "$9" },
    ],
    safetyNotes: [
      "Turn off the water supply valve before replacing parts.",
      "Flush the toilet to empty the tank before working inside it.",
    ],
    whenToCallAPro: [
      "Toilet is leaking at the base (wax ring failure)",
      "Crack in the tank or bowl",
      "Problem persists after replacing flapper and fill valve",
    ],
    faqs: [
      { q: "How do I know if my toilet is running?", a: "Drop food coloring in the tank. If color appears in the bowl without flushing, your toilet is leaking." },
      { q: "How much does a running toilet cost me?", a: "A running toilet can waste 200+ gallons per day, adding $50–$100+ per month to your water bill." },
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "How to Clean and Maintain Gutters",
    category: "Exterior",
    excerpt: "Prevent water damage, foundation issues, and roof leaks with regular gutter maintenance.",
    readingTime: "6 min",
    difficulty: "Medium",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Water overflowing from gutters during rain",
      "Sagging or pulling-away gutters",
      "Plant growth in gutters",
      "Water stains or erosion below gutters",
    ],
    likelyCauses: [
      "Accumulated leaves and debris",
      "Downspouts clogged with debris",
      "Gutters not properly pitched",
      "Damaged or corroded gutter sections",
    ],
    diySteps: [
      { step: 1, title: "Set up safely", description: "Use a sturdy extension ladder on level ground. Have a helper stabilize the base." },
      { step: 2, title: "Remove debris", description: "Wear gloves and scoop out leaves and sediment. Work away from the downspout." },
      { step: 3, title: "Flush with water", description: "Use a garden hose to flush gutters toward the downspout. Check for proper flow." },
      { step: 4, title: "Clear downspouts", description: "If water backs up, use a plumber's snake or high-pressure nozzle to clear the downspout." },
      { step: 5, title: "Inspect and repair", description: "Look for loose brackets, holes, or rust. Re-secure brackets and patch small holes with gutter sealant." },
    ],
    toolsNeeded: [
      { name: "Gutter Scoop", affiliateLink: "#affiliate-gutter-scoop", price: "$7" },
      { name: "Extension Ladder", affiliateLink: "#affiliate-ladder", price: "$150" },
      { name: "Gutter Sealant", affiliateLink: "#affiliate-gutter-sealant", price: "$6" },
      { name: "Work Gloves", affiliateLink: "#affiliate-gloves", price: "$10" },
    ],
    safetyNotes: [
      "Never lean a ladder against the gutter — it can bend or break.",
      "Use a ladder stabilizer for safety.",
      "Avoid working near power lines.",
    ],
    whenToCallAPro: [
      "Home is 2+ stories high",
      "Gutters are severely damaged or sagging",
      "You are not comfortable working on a ladder",
      "Gutters need re-pitching or replacement",
    ],
    faqs: [
      { q: "How often should I clean gutters?", a: "At least twice a year — in late spring and late fall. More often if you have overhanging trees." },
      { q: "Are gutter guards worth it?", a: "Gutter guards reduce cleaning frequency but don't eliminate it. They're worth it for heavily treed properties." },
    ],
  },
  {
    slug: "caulking-windows",
    title: "How to Re-Caulk Windows and Doors",
    category: "Exterior",
    excerpt: "Seal air leaks, reduce energy bills, and keep moisture out with proper caulking.",
    readingTime: "5 min",
    difficulty: "Easy",
    heroImage: "/placeholder.svg",
    symptoms: [
      "Drafts felt near windows or doors",
      "Visible gaps or cracked caulk around frames",
      "Higher than expected heating or cooling bills",
      "Moisture or condensation between panes",
    ],
    likelyCauses: [
      "Old caulk dried out and cracked",
      "House settling causing gaps",
      "Sun/UV exposure degrading caulk",
      "Improper original application",
    ],
    diySteps: [
      { step: 1, title: "Remove old caulk", description: "Use a caulk removal tool or utility knife to scrape away old, cracked caulk. Clean the surface." },
      { step: 2, title: "Clean and dry", description: "Wipe the area with rubbing alcohol and let it dry completely for good adhesion." },
      { step: 3, title: "Apply new caulk", description: "Cut the caulk tube tip at 45 degrees. Apply a steady bead along the gap. Use a wet finger or caulk tool to smooth." },
      { step: 4, title: "Let it cure", description: "Allow 24 hours for full cure. Do not paint or disturb during this time." },
    ],
    toolsNeeded: [
      { name: "Silicone Caulk", affiliateLink: "#affiliate-caulk", price: "$6" },
      { name: "Caulk Gun", affiliateLink: "#affiliate-caulk-gun-2", price: "$8" },
      { name: "Caulk Removal Tool", affiliateLink: "#affiliate-caulk-remover", price: "$5" },
      { name: "Rubbing Alcohol", affiliateLink: "#affiliate-alcohol", price: "$3" },
    ],
    safetyNotes: [
      "Use caulk in well-ventilated areas.",
      "Wear gloves if you have sensitive skin.",
    ],
    whenToCallAPro: [
      "Window frame is rotted or damaged",
      "Moisture is trapped between double-pane glass (seal failure)",
      "Gaps are too large for caulk alone (may need backer rod or foam)",
    ],
    faqs: [
      { q: "What type of caulk should I use?", a: "Use silicone caulk for exterior applications — it's flexible, waterproof, and UV resistant. Use paintable latex caulk for interior trim." },
      { q: "How long does caulk last?", a: "Quality silicone caulk lasts 10–20 years. Latex caulk typically lasts 5–10 years." },
    ],
  },
];
