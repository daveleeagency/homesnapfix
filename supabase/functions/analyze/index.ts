const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ============================
// Weight tables
// ============================

const SEVERITY_WEIGHTS: Record<string, number> = {
  Low: 20, Moderate: 50, High: 75, Critical: 100,
};
const CAUSE_WEIGHTS: Record<string, number> = {
  sudden_accidental: 80, weather: 90, gradual_wear: 20, maintenance_neglect: 10, manufacturer_defect: 50, unknown: 40,
};
const DAMAGE_WEIGHTS: Record<string, number> = {
  fire: 90, structural: 85, water: 80, electrical: 75, mechanical: 40, cosmetic: 15,
};

function scoreToLevel(s: number) { return s >= 80 ? "Critical" : s >= 60 ? "High" : s >= 35 ? "Moderate" : "Low"; }
function scoreToUrgency(s: number) { return s >= 80 ? "Immediate action required — safety risk" : s >= 60 ? "Address within 24–48 hours" : s >= 35 ? "Schedule repair within 1–2 weeks" : "Non-urgent — repair at convenience"; }

function evaluateInsurance(cause: string, damage: string) {
  const likely = ["sudden_accidental", "weather"];
  const excluded = ["maintenance_neglect", "gradual_wear"];
  const coverable = ["water", "fire", "structural"];
  if (likely.includes(cause) && coverable.includes(damage))
    return { insurance_flag: true, likelihood_tier: "Likely Covered", reason: "Sudden accidental or weather-related event causing property damage.", disclaimer_required: true };
  if (excluded.includes(cause))
    return { insurance_flag: false, likelihood_tier: "Maintenance", reason: "Gradual wear and tear is typically excluded from homeowners insurance.", disclaimer_required: true };
  return { insurance_flag: true, likelihood_tier: "Possibly Covered", reason: "Coverage depends on policy language and cause determination.", disclaimer_required: true };
}

function checkWarranty(cat: string) {
  const wCats = ["hvac", "plumbing", "electrical"];
  return wCats.includes(cat.toLowerCase())
    ? { warranty_likely: true, explanation: "Mechanical breakdowns are commonly covered by home warranty plans, not homeowners insurance." }
    : { warranty_likely: false, explanation: "" };
}

const REGULATED = ["CA","TX","FL","NY","IL","PA","OH","GA"];
function geoNotice(st: string|null) {
  if (!st) return null;
  return REGULATED.includes(st.toUpperCase())
    ? "Insurance coverage varies significantly by state. Consult a licensed agent in your state."
    : "Coverage terms vary by policy and state regulations.";
}

// ============================
// Full 30-Issue Database
// ============================

interface IssueEntry {
  issue_detected: string;
  probable_causes: string[];
  summary: string;
  diy_steps: { step: number; title: string; description: string }[];
  when_to_call_pro: string[];
  product_links: { name: string; url: string; price?: string }[];
  safety_warnings: string[];
  risk_score: number;
  cause_type: string;
  damage_type: string;
  category: string;
  warranty_flag: boolean;
}

const DB: Record<string, IssueEntry> = {
  // ── Storm & Exterior ──
  "storm-roof": {
    issue_detected: "Roof Leak (Post-Storm)",
    probable_causes: ["High winds lifted shingles", "Debris impact on roofing", "Pre-existing flashing failure exposed by storm"],
    summary: "Storm-related roof damage has exposed the deck to water intrusion. This type of sudden weather damage is commonly covered by homeowners insurance.",
    diy_steps: [
      { step: 1, title: "Inspect safely from ground", description: "Use binoculars to assess visible damage. Do not climb onto a damaged roof." },
      { step: 2, title: "Tarp exposed areas", description: "If accessible, secure a weighted tarp over exposed sections." },
      { step: 3, title: "Document all damage", description: "Photograph damage from multiple angles for insurance documentation." },
    ],
    when_to_call_pro: ["Multiple shingles missing", "Visible deck or felt exposure", "Active leak into living space"],
    product_links: [{ name: "Heavy-Duty Roof Tarp", url: "#", price: "$30" }],
    safety_warnings: ["Do not climb onto a wet or damaged roof", "Watch for downed power lines"],
    risk_score: 85, cause_type: "weather", damage_type: "structural", category: "roofing", warranty_flag: false,
  },
  "roof-gradual": {
    issue_detected: "Roof Leak (Gradual)",
    probable_causes: ["Aged shingles past service life", "Deteriorated flashing around penetrations", "Poor attic ventilation causing ice dams"],
    summary: "This slow-developing leak indicates aging roofing materials. Gradual deterioration is generally not covered by homeowners insurance.",
    diy_steps: [
      { step: 1, title: "Locate the entry point", description: "Trace water stains in attic to find where water enters the roof deck." },
      { step: 2, title: "Apply roofing sealant", description: "Use roofing cement on small cracks or gaps as a temporary measure." },
      { step: 3, title: "Schedule professional inspection", description: "A roofer can assess remaining service life and recommend repair vs replacement." },
    ],
    when_to_call_pro: ["Leak affects multiple rooms", "Shingles are curling or crumbling", "Attic shows mold growth"],
    product_links: [{ name: "Roof Sealant", url: "#", price: "$8" }],
    safety_warnings: [],
    risk_score: 60, cause_type: "gradual_wear", damage_type: "water", category: "roofing", warranty_flag: false,
  },
  "storm-hail": {
    issue_detected: "Hail Damage",
    probable_causes: ["Hailstones impacting roof and siding", "Granule loss on shingles", "Dented gutters and downspouts"],
    summary: "Hail impact causes granule loss, cracks, and dents that weaken protective surfaces. Document all damage promptly for insurance claims.",
    diy_steps: [
      { step: 1, title: "Inspect from ground level", description: "Look for dented gutters, cracked siding, and damaged window screens." },
      { step: 2, title: "Check vehicles and outdoor units", description: "Hail damage to AC condensers and vehicles supports claim documentation." },
      { step: 3, title: "File insurance claim", description: "Contact your insurer within the policy's reporting window with photo evidence." },
    ],
    when_to_call_pro: ["Shingles show visible granule loss", "Siding has cracks or punctures", "Multiple surfaces affected"],
    product_links: [],
    safety_warnings: [],
    risk_score: 75, cause_type: "weather", damage_type: "structural", category: "roofing", warranty_flag: false,
  },
  "storm-siding": {
    issue_detected: "Siding Damage",
    probable_causes: ["Wind-driven debris impact", "Hail strikes", "Age-related brittleness"],
    summary: "Damaged siding reduces weather protection and can allow moisture behind the wall assembly. Cause determines insurance eligibility.",
    diy_steps: [
      { step: 1, title: "Assess extent of damage", description: "Count affected panels and photograph each for documentation." },
      { step: 2, title: "Secure loose sections", description: "Re-nail or temporarily tape loose siding to prevent further water entry." },
    ],
    when_to_call_pro: ["Multiple panels cracked or missing", "Moisture visible behind siding", "Structural sheathing exposed"],
    product_links: [],
    safety_warnings: [],
    risk_score: 55, cause_type: "weather", damage_type: "structural", category: "exterior", warranty_flag: false,
  },
  "storm-gutter": {
    issue_detected: "Gutter Overflow",
    probable_causes: ["Debris accumulation blocking flow", "Insufficient downspout capacity", "Sagging gutters from weight"],
    summary: "Overflowing gutters direct water toward the foundation rather than away, increasing erosion and basement leak risk. This is a maintenance issue.",
    diy_steps: [
      { step: 1, title: "Clear debris from gutters", description: "Remove leaves, twigs, and sediment from all gutter runs." },
      { step: 2, title: "Check downspout flow", description: "Run water through each downspout to verify unobstructed drainage." },
      { step: 3, title: "Install gutter guards", description: "Mesh or solid guards reduce future debris accumulation." },
    ],
    when_to_call_pro: ["Gutters pulling away from fascia", "Foundation erosion visible", "Water entering basement"],
    product_links: [{ name: "Gutter Guard Kit", url: "#", price: "$20" }],
    safety_warnings: ["Use a stable ladder on level ground", "Do not lean over the roof edge"],
    risk_score: 40, cause_type: "maintenance_neglect", damage_type: "water", category: "exterior", warranty_flag: false,
  },

  // ── Water & Plumbing ──
  "water-burst": {
    issue_detected: "Burst Pipe (Sudden)",
    probable_causes: ["Freezing temperatures expanding pipe", "Corrosion weakening pipe wall", "Water hammer pressure surge"],
    summary: "A sudden pipe failure is a critical emergency. Shut off the main water valve immediately. This type of sudden accidental damage is typically covered by homeowners insurance.",
    diy_steps: [
      { step: 1, title: "Shut off main water valve", description: "Locate and close the main shutoff to stop water flow immediately." },
      { step: 2, title: "Open faucets to drain", description: "Open lowest faucets to drain remaining water from pipes." },
      { step: 3, title: "Begin water removal", description: "Use a wet/dry vacuum or towels to remove standing water and minimize damage." },
    ],
    when_to_call_pro: ["Any burst pipe situation", "Water near electrical panels", "Structural saturation"],
    product_links: [{ name: "Pipe Repair Clamp", url: "#", price: "$15" }],
    safety_warnings: ["Turn off electricity in affected areas", "Do not use electrical appliances near standing water"],
    risk_score: 95, cause_type: "sudden_accidental", damage_type: "water", category: "plumbing", warranty_flag: false,
  },
  "water-slab": {
    issue_detected: "Slab Leak",
    probable_causes: ["Copper pipe corrosion under slab", "Shifting soil causing pipe stress", "Poor original plumbing installation"],
    summary: "Leaks beneath the concrete slab cause unexplained water bills, warm floor spots, and potential foundation movement. Detection requires specialized equipment.",
    diy_steps: [
      { step: 1, title: "Monitor water meter", description: "Turn off all water and check if the meter continues to move." },
      { step: 2, title: "Check for warm floor spots", description: "Walk barefoot on tile/hard floors to detect unusual warmth from hot water line leaks." },
    ],
    when_to_call_pro: ["Meter confirms leak", "Foundation cracking visible", "Mold smell present"],
    product_links: [],
    safety_warnings: [],
    risk_score: 90, cause_type: "unknown", damage_type: "structural", category: "plumbing", warranty_flag: false,
  },
  "water-heater": {
    issue_detected: "Water Heater Failure",
    probable_causes: ["Failed heating element or thermostat", "Sediment buildup reducing efficiency", "Tank corrosion from anode rod depletion"],
    summary: "A failing water heater may produce lukewarm water, strange noises, or visible rust at the base. Sudden ruptures may be covered by insurance; gradual failure typically is not.",
    diy_steps: [
      { step: 1, title: "Check the pilot light or breaker", description: "For gas units, verify the pilot. For electric, check the dedicated breaker." },
      { step: 2, title: "Flush sediment", description: "Attach a hose to the drain valve and flush until water runs clear." },
      { step: 3, title: "Test the T&P valve", description: "Lift the temperature/pressure relief valve briefly to ensure it operates." },
    ],
    when_to_call_pro: ["No hot water after basic checks", "Rust-colored water from tank", "Pooling water at base"],
    product_links: [{ name: "Anode Rod", url: "#", price: "$25" }],
    safety_warnings: ["Turn off gas or electricity before any maintenance"],
    risk_score: 70, cause_type: "gradual_wear", damage_type: "water", category: "plumbing", warranty_flag: true,
  },
  "water-sewer": {
    issue_detected: "Sewer Backup",
    probable_causes: ["Tree root intrusion into main line", "Grease or debris blockage", "Collapsed or offset sewer pipe"],
    summary: "Sewage backing up into drains is a health hazard requiring immediate attention. Standard policies typically exclude sewer backup unless a specific rider is present.",
    diy_steps: [
      { step: 1, title: "Stop using water", description: "Cease all water usage to prevent further backup into the home." },
      { step: 2, title: "Check cleanout access", description: "If you have an exterior cleanout, check for standing water in the pipe." },
    ],
    when_to_call_pro: ["Any sewer backup situation", "Multiple drains affected simultaneously", "Sewage odor in the home"],
    product_links: [],
    safety_warnings: ["Sewage contains pathogens — wear gloves and a mask", "Do not use chemical drain cleaners on main line blockages"],
    risk_score: 80, cause_type: "unknown", damage_type: "water", category: "plumbing", warranty_flag: false,
  },
  "water-pressure": {
    issue_detected: "Low Water Pressure",
    probable_causes: ["Corroded galvanized pipes restricting flow", "Failing pressure regulator", "Municipal supply issue"],
    summary: "Reduced water pressure across multiple fixtures suggests a systemic issue rather than a single fixture problem.",
    diy_steps: [
      { step: 1, title: "Check all fixtures", description: "Test pressure at multiple locations to determine if it's isolated or whole-house." },
      { step: 2, title: "Clean aerators", description: "Remove and clean faucet aerators — mineral buildup is a common simple cause." },
      { step: 3, title: "Check the pressure regulator", description: "If equipped, the regulator near the main shutoff may need adjustment or replacement." },
    ],
    when_to_call_pro: ["Pressure consistently below 40 PSI", "Galvanized pipes present", "Sudden pressure drop"],
    product_links: [{ name: "Water Pressure Gauge", url: "#", price: "$10" }],
    safety_warnings: [],
    risk_score: 30, cause_type: "gradual_wear", damage_type: "mechanical", category: "plumbing", warranty_flag: false,
  },

  // ── HVAC & Mechanical ──
  "hvac-ac": {
    issue_detected: "AC Not Cooling",
    probable_causes: ["Dirty air filter restricting airflow", "Low refrigerant from slow leak", "Failing compressor or capacitor"],
    summary: "An AC blowing warm air often has a simple cause. Check the filter and thermostat settings before calling for service.",
    diy_steps: [
      { step: 1, title: "Replace the air filter", description: "A clogged filter is the #1 cause of poor cooling. Replace it with the correct size." },
      { step: 2, title: "Check thermostat settings", description: "Ensure it's set to COOL mode and the set temperature is below room temperature." },
      { step: 3, title: "Inspect the outdoor unit", description: "Clear debris, leaves, and vegetation from around the condenser unit." },
    ],
    when_to_call_pro: ["Ice forming on the unit", "Refrigerant hissing sound", "Unit not turning on at all"],
    product_links: [{ name: "HVAC Filter Multi-Pack", url: "#", price: "$18" }],
    safety_warnings: [],
    risk_score: 40, cause_type: "gradual_wear", damage_type: "mechanical", category: "hvac", warranty_flag: true,
  },
  "hvac-furnace": {
    issue_detected: "Furnace Not Heating",
    probable_causes: ["Failed ignitor or flame sensor", "Gas valve malfunction", "Dirty filter causing limit switch trip"],
    summary: "A furnace that clicks but doesn't fire typically has an ignition system issue. Gas furnace repairs should generally be handled by a licensed technician.",
    diy_steps: [
      { step: 1, title: "Check the air filter", description: "A severely clogged filter can cause the high-limit switch to shut down the furnace." },
      { step: 2, title: "Verify thermostat", description: "Set to HEAT mode, raise temperature 5° above room temp, and wait." },
      { step: 3, title: "Check the circuit breaker", description: "Ensure the furnace breaker hasn't tripped." },
    ],
    when_to_call_pro: ["Gas smell detected", "Furnace cycles on/off rapidly", "No heat after filter replacement"],
    product_links: [],
    safety_warnings: ["If you smell gas, leave the home and call your gas company immediately"],
    risk_score: 60, cause_type: "gradual_wear", damage_type: "mechanical", category: "hvac", warranty_flag: true,
  },
  "hvac-refrigerant": {
    issue_detected: "Refrigerant Leak",
    probable_causes: ["Corroded evaporator coil", "Vibration-loosened fittings", "Manufacturing defect in line set"],
    summary: "Refrigerant leaks reduce cooling capacity and can damage the compressor if run low. EPA regulations require licensed technicians to handle refrigerants.",
    diy_steps: [
      { step: 1, title: "Observe symptoms", description: "Ice on the indoor coil, warm air, or hissing sounds suggest a leak." },
      { step: 2, title: "Turn off the system", description: "Running with low refrigerant can permanently damage the compressor." },
    ],
    when_to_call_pro: ["Any suspected refrigerant leak — EPA-regulated repair"],
    product_links: [],
    safety_warnings: ["Do not attempt to add refrigerant yourself — it requires EPA certification"],
    risk_score: 50, cause_type: "gradual_wear", damage_type: "mechanical", category: "hvac", warranty_flag: true,
  },
  "hvac-thermostat": {
    issue_detected: "Thermostat Failure",
    probable_causes: ["Dead batteries", "Wiring connection failure", "Device malfunction"],
    summary: "An unresponsive thermostat is often a simple fix. Check batteries and wiring before replacing the unit.",
    diy_steps: [
      { step: 1, title: "Replace batteries", description: "Most thermostats use AA or AAA batteries. Replace and test." },
      { step: 2, title: "Check wiring connections", description: "Remove the faceplate and verify all wires are securely connected to terminals." },
    ],
    when_to_call_pro: ["Wiring appears damaged or corroded", "Replacement thermostat also fails"],
    product_links: [{ name: "Programmable Thermostat", url: "#", price: "$35" }],
    safety_warnings: ["Turn off HVAC breaker before touching any wiring"],
    risk_score: 20, cause_type: "manufacturer_defect", damage_type: "mechanical", category: "hvac", warranty_flag: true,
  },
  "hvac-energy": {
    issue_detected: "Energy Bill Spike",
    probable_causes: ["HVAC running inefficiently", "Duct leaks in unconditioned spaces", "Insulation gaps or degradation"],
    summary: "Sudden utility cost increases often point to HVAC system inefficiency or building envelope issues rather than rate changes.",
    diy_steps: [
      { step: 1, title: "Replace HVAC filter", description: "A dirty filter forces the system to work harder, increasing energy consumption." },
      { step: 2, title: "Seal visible duct joints", description: "Use mastic sealant or metal tape on accessible duct connections in attic or crawlspace." },
      { step: 3, title: "Check for drafts", description: "Hold a candle near windows and doors to detect air leaks." },
    ],
    when_to_call_pro: ["Bill increase exceeds 30%", "System running continuously", "Professional energy audit recommended"],
    product_links: [{ name: "HVAC Duct Tape (Metal)", url: "#", price: "$12" }],
    safety_warnings: [],
    risk_score: 35, cause_type: "gradual_wear", damage_type: "mechanical", category: "hvac", warranty_flag: false,
  },

  // ── Electrical & Fire ──
  "elec-breaker": {
    issue_detected: "Breaker Tripping",
    probable_causes: ["Circuit overloaded with too many devices", "Short circuit in wiring or appliance", "Ground fault in outlet or circuit"],
    summary: "A repeatedly tripping breaker is a protective mechanism. Identify what's overloading the circuit before resetting.",
    diy_steps: [
      { step: 1, title: "Identify the circuit", description: "Note which outlets/lights are on the tripping breaker." },
      { step: 2, title: "Reduce load", description: "Unplug devices from the circuit and reset. Add devices back one at a time." },
      { step: 3, title: "Check for damaged cords", description: "Inspect power cords on the circuit for fraying or damage." },
    ],
    when_to_call_pro: ["Breaker trips with minimal load", "Burning smell from panel", "Breaker feels hot to touch"],
    product_links: [],
    safety_warnings: ["Never replace a breaker with a higher-amperage one", "A warm breaker or panel is an emergency sign"],
    risk_score: 70, cause_type: "gradual_wear", damage_type: "electrical", category: "electrical", warranty_flag: false,
  },
  "elec-burn": {
    issue_detected: "Burning Smell Near Electrical",
    probable_causes: ["Arcing at loose wire connections", "Overheated wire insulation", "Failing breaker or bus bar"],
    summary: "A burning smell near any electrical component is an emergency. Shut off the main breaker and call an electrician immediately. Do not attempt DIY repair.",
    diy_steps: [
      { step: 1, title: "Shut off main breaker", description: "Turn off the main breaker at the electrical panel immediately." },
      { step: 2, title: "Evacuate if necessary", description: "If smoke is visible, evacuate and call 911." },
    ],
    when_to_call_pro: ["Any burning smell near electrical — always call a pro"],
    product_links: [],
    safety_warnings: ["This is an emergency — do not delay", "Do not open the electrical panel", "Have a fire extinguisher accessible"],
    risk_score: 100, cause_type: "unknown", damage_type: "fire", category: "electrical", warranty_flag: false,
  },
  "elec-flicker": {
    issue_detected: "Flickering Lights",
    probable_causes: ["Loose bulb or fixture connection", "Degrading wiring in circuit", "Utility-side voltage fluctuation"],
    summary: "Persistent flickering across multiple fixtures may indicate a wiring issue that should be evaluated by a licensed electrician.",
    diy_steps: [
      { step: 1, title: "Tighten bulbs", description: "Ensure all flickering bulbs are securely seated in their sockets." },
      { step: 2, title: "Test with different bulbs", description: "Replace with known-good bulbs to rule out defective ones." },
      { step: 3, title: "Check for patterns", description: "Note if flickering correlates with specific appliance use (e.g., AC cycling)." },
    ],
    when_to_call_pro: ["Flickering affects multiple circuits", "Accompanied by buzzing sounds", "Outlet discoloration visible"],
    product_links: [],
    safety_warnings: [],
    risk_score: 65, cause_type: "gradual_wear", damage_type: "electrical", category: "electrical", warranty_flag: false,
  },
  "elec-outlet": {
    issue_detected: "Dead Outlets",
    probable_causes: ["Tripped GFCI upstream on the circuit", "Loose wire connection at outlet", "Tripped breaker"],
    summary: "A dead outlet often has a simple fix — check for a tripped GFCI or breaker before assuming a wiring failure.",
    diy_steps: [
      { step: 1, title: "Check nearby GFCIs", description: "Press the RESET button on all GFCI outlets in the room and adjacent rooms." },
      { step: 2, title: "Check the breaker panel", description: "Look for a tripped breaker (handle in the middle position) and reset it." },
      { step: 3, title: "Test with a voltage tester", description: "Use a non-contact voltage tester to check if power is present." },
    ],
    when_to_call_pro: ["Multiple outlets dead on different circuits", "Outlet shows burn marks", "GFCI won't reset"],
    product_links: [{ name: "Non-Contact Voltage Tester", url: "#", price: "$15" }],
    safety_warnings: ["Never stick objects into an outlet to test it"],
    risk_score: 45, cause_type: "gradual_wear", damage_type: "electrical", category: "electrical", warranty_flag: false,
  },
  "elec-co": {
    issue_detected: "Carbon Monoxide Alarm",
    probable_causes: ["Cracked heat exchanger in furnace", "Blocked flue or chimney", "Malfunctioning gas appliance"],
    summary: "A triggered CO alarm is a life safety emergency. Carbon monoxide is odorless and lethal. Evacuate immediately and call 911.",
    diy_steps: [
      { step: 1, title: "Evacuate immediately", description: "Get all people and pets out of the home. Do not re-enter." },
      { step: 2, title: "Call 911", description: "Fire departments have CO detection equipment to assess the situation." },
    ],
    when_to_call_pro: ["Any CO alarm activation — always call emergency services first"],
    product_links: [],
    safety_warnings: ["EVACUATE IMMEDIATELY", "Do not re-enter the home until cleared by fire department", "Seek medical attention if experiencing headache, dizziness, or nausea"],
    risk_score: 100, cause_type: "unknown", damage_type: "fire", category: "electrical", warranty_flag: false,
  },

  // ── Structural ──
  "struct-hairline": {
    issue_detected: "Foundation Cracks (Hairline)",
    probable_causes: ["Normal concrete curing shrinkage", "Minor thermal expansion/contraction", "Initial settling"],
    summary: "Hairline cracks (under 1/16\") in poured concrete are extremely common and usually cosmetic. Monitor for widening over time.",
    diy_steps: [
      { step: 1, title: "Measure and mark", description: "Place pencil marks at each end of the crack and date them for monitoring." },
      { step: 2, title: "Seal with epoxy", description: "Apply concrete crack filler or epoxy injection to prevent moisture entry." },
      { step: 3, title: "Recheck in 6 months", description: "Measure again to determine if the crack has grown beyond your marks." },
    ],
    when_to_call_pro: ["Crack wider than 1/4\"", "Crack is horizontal or stair-stepped", "Crack is actively leaking water"],
    product_links: [{ name: "Concrete Crack Filler", url: "#", price: "$8" }],
    safety_warnings: [],
    risk_score: 40, cause_type: "gradual_wear", damage_type: "cosmetic", category: "exterior", warranty_flag: false,
  },
  "struct-major": {
    issue_detected: "Major Foundation Shift",
    probable_causes: ["Expansive soil movement", "Hydrostatic pressure from poor drainage", "Structural overloading"],
    summary: "Visible foundation displacement is a serious structural issue requiring professional engineering evaluation. Do not delay assessment.",
    diy_steps: [
      { step: 1, title: "Document the damage", description: "Photograph all cracks, displacement, and related symptoms (sticking doors, sloping floors)." },
      { step: 2, title: "Monitor for progression", description: "Install crack monitors or mark crack endpoints with dates." },
    ],
    when_to_call_pro: ["Any suspected major foundation movement — structural engineer required"],
    product_links: [],
    safety_warnings: ["Do not enter crawlspaces if foundation stability is in question"],
    risk_score: 95, cause_type: "gradual_wear", damage_type: "structural", category: "exterior", warranty_flag: false,
  },
  "struct-crawl": {
    issue_detected: "Crawlspace Moisture",
    probable_causes: ["Ground moisture evaporation without vapor barrier", "Exterior drainage directing water to crawlspace", "Plumbing leak above or below"],
    summary: "Excessive crawlspace moisture promotes wood rot, mold, and pest activity. Proper vapor barriers and ventilation are key controls.",
    diy_steps: [
      { step: 1, title: "Inspect for standing water", description: "Enter (with proper PPE) and look for pooling water or saturated soil." },
      { step: 2, title: "Install or repair vapor barrier", description: "6-mil polyethylene sheeting on the ground blocks soil moisture evaporation." },
      { step: 3, title: "Improve exterior drainage", description: "Ensure gutters and grading direct water away from the foundation." },
    ],
    when_to_call_pro: ["Active water intrusion", "Mold visible on floor joists", "Wood rot present"],
    product_links: [{ name: "6-Mil Vapor Barrier", url: "#", price: "$35" }],
    safety_warnings: ["Wear a respirator in damp crawlspaces", "Watch for pest activity"],
    risk_score: 60, cause_type: "gradual_wear", damage_type: "water", category: "exterior", warranty_flag: false,
  },
  "struct-termite": {
    issue_detected: "Termite Damage",
    probable_causes: ["Subterranean termite colony accessing wood through soil", "Wood-to-ground contact at foundation", "Moisture conditions attracting colonies"],
    summary: "Termite damage weakens structural wood members. Insurance typically does not cover pest damage, but treatment is essential to prevent progression.",
    diy_steps: [
      { step: 1, title: "Identify signs", description: "Look for mud tubes on foundation walls, hollow-sounding wood, and discarded wings." },
      { step: 2, title: "Reduce wood-soil contact", description: "Remove wood mulch, firewood, and debris from foundation perimeter." },
    ],
    when_to_call_pro: ["Any confirmed termite activity — professional treatment required"],
    product_links: [],
    safety_warnings: [],
    risk_score: 80, cause_type: "gradual_wear", damage_type: "structural", category: "exterior", warranty_flag: false,
  },
  "struct-mold": {
    issue_detected: "Mold Growth",
    probable_causes: ["Sustained moisture from leak or condensation", "Poor ventilation in bathrooms or basements", "Previous water damage not fully dried"],
    summary: "Visible mold indicates a persistent moisture problem. Fix the source before remediating the mold. Coverage depends on whether the moisture source was sudden or gradual.",
    diy_steps: [
      { step: 1, title: "Identify moisture source", description: "Trace the moisture to a leak, condensation, or ventilation issue." },
      { step: 2, title: "Small area cleanup", description: "For areas under 10 sq ft, clean with detergent and water while wearing an N95 mask." },
      { step: 3, title: "Improve ventilation", description: "Add exhaust fans, dehumidifiers, or open windows to reduce moisture." },
    ],
    when_to_call_pro: ["Mold area exceeds 10 square feet", "Mold is behind walls", "Occupants have respiratory symptoms"],
    product_links: [{ name: "N95 Respirator (10-pack)", url: "#", price: "$15" }],
    safety_warnings: ["Wear N95 mask and gloves when handling mold", "Do not disturb large mold colonies without professional containment"],
    risk_score: 75, cause_type: "gradual_wear", damage_type: "water", category: "interior", warranty_flag: false,
  },

  // ── Appliances ──
  "appl-fridge": {
    issue_detected: "Refrigerator Not Cooling",
    probable_causes: ["Dirty condenser coils", "Failed compressor or start relay", "Thermostat set incorrectly"],
    summary: "Before assuming a major failure, check simple causes like dirty coils and thermostat settings. Home warranty plans typically cover refrigerator repairs.",
    diy_steps: [
      { step: 1, title: "Check thermostat setting", description: "Ensure temperature is set between 35–38°F for the fridge." },
      { step: 2, title: "Clean condenser coils", description: "Vacuum the coils (usually behind or underneath) to restore heat dissipation." },
      { step: 3, title: "Verify door seal", description: "Close the door on a dollar bill — if it slides out easily, the seal needs replacement." },
    ],
    when_to_call_pro: ["Compressor not running", "Loud clicking or buzzing", "No improvement after coil cleaning"],
    product_links: [{ name: "Coil Cleaning Brush", url: "#", price: "$8" }],
    safety_warnings: ["Unplug refrigerator before cleaning coils"],
    risk_score: 30, cause_type: "gradual_wear", damage_type: "mechanical", category: "hvac", warranty_flag: true,
  },
  "appl-dishwasher": {
    issue_detected: "Dishwasher Leak",
    probable_causes: ["Worn door gasket", "Loose supply line connection", "Cracked tub or spray arm"],
    summary: "Dishwasher leaks can cause significant floor and cabinet damage. The appliance itself isn't covered by insurance, but resulting water damage to the home may be.",
    diy_steps: [
      { step: 1, title: "Identify leak source", description: "Run a cycle and observe where water appears — door, bottom, or supply line." },
      { step: 2, title: "Check door gasket", description: "Inspect the rubber seal around the door for tears, gaps, or debris." },
      { step: 3, title: "Tighten connections", description: "Check supply line and drain hose connections under the unit." },
    ],
    when_to_call_pro: ["Leak from bottom of unit", "Flooring damage visible", "Electrical components wet"],
    product_links: [],
    safety_warnings: ["Turn off power and water supply before inspecting underneath"],
    risk_score: 60, cause_type: "sudden_accidental", damage_type: "water", category: "plumbing", warranty_flag: true,
  },
  "appl-washer": {
    issue_detected: "Washer Overflow",
    probable_causes: ["Failed water inlet valve", "Clogged drain pump", "Burst supply hose"],
    summary: "A washing machine overflow can cause extensive water damage to flooring and walls. Sudden supply hose failure is commonly covered by homeowners insurance.",
    diy_steps: [
      { step: 1, title: "Shut off water supply", description: "Turn off both hot and cold supply valves behind the washer immediately." },
      { step: 2, title: "Remove standing water", description: "Use towels and a wet/dry vacuum to extract water from the floor." },
      { step: 3, title: "Inspect supply hoses", description: "Check for bulging, cracking, or corrosion at hose connections." },
    ],
    when_to_call_pro: ["Water reached adjacent rooms", "Flooring is buckling", "Water near electrical outlets"],
    product_links: [{ name: "Braided Steel Supply Hoses", url: "#", price: "$20" }],
    safety_warnings: ["Turn off electricity to the laundry area if water is near outlets"],
    risk_score: 85, cause_type: "sudden_accidental", damage_type: "water", category: "plumbing", warranty_flag: true,
  },
  "appl-dryer": {
    issue_detected: "Dryer Overheating",
    probable_causes: ["Clogged lint vent or exhaust duct", "Failed thermostat or thermal fuse", "Restricted airflow from crushed duct"],
    summary: "An overheating dryer is a fire hazard — clogged dryer vents are a leading cause of house fires. Clean the vent system immediately.",
    diy_steps: [
      { step: 1, title: "Clean the lint trap", description: "Remove and clean the lint screen after every load." },
      { step: 2, title: "Disconnect and clean exhaust duct", description: "Pull the dryer out, disconnect the duct, and clean the full length to the exterior vent." },
      { step: 3, title: "Check exterior vent flap", description: "Ensure the outdoor vent flap opens freely and isn't blocked by lint or debris." },
    ],
    when_to_call_pro: ["Burning smell persists after cleaning", "Duct run exceeds 25 feet", "Dryer shuts off during cycles"],
    product_links: [{ name: "Dryer Vent Cleaning Kit", url: "#", price: "$22" }],
    safety_warnings: ["Unplug the dryer before any maintenance", "A burning smell is an immediate fire risk — stop using the dryer"],
    risk_score: 80, cause_type: "maintenance_neglect", damage_type: "fire", category: "electrical", warranty_flag: true,
  },
  "appl-garage": {
    issue_detected: "Garage Door Failure",
    probable_causes: ["Broken torsion or extension spring", "Misaligned safety sensors", "Worn gear in opener motor"],
    summary: "Garage door springs are under extreme tension and are dangerous to repair. Sensor realignment is a safe DIY task, but spring replacement requires a professional.",
    diy_steps: [
      { step: 1, title: "Check safety sensors", description: "Clean and realign the photo-eye sensors at the bottom of the door tracks." },
      { step: 2, title: "Test the remote and wall button", description: "Replace remote batteries and try the hardwired wall button to isolate the issue." },
      { step: 3, title: "Lubricate moving parts", description: "Apply silicone spray to hinges, rollers, and tracks." },
    ],
    when_to_call_pro: ["Broken spring visible", "Door off-track", "Opener motor not responding"],
    product_links: [{ name: "Garage Door Lubricant", url: "#", price: "$8" }],
    safety_warnings: ["NEVER attempt to repair or adjust garage door springs — lethal tension"],
    risk_score: 35, cause_type: "gradual_wear", damage_type: "mechanical", category: "exterior", warranty_flag: true,
  },
};

// Default fallback
const DEFAULT_ENTRY = DB["struct-hairline"];

// ============================
// Handler
// ============================

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const issueId: string = body.issue_id || "default";
    const stateCode: string | null = body.state_code || null;

    const issue = DB[issueId] || DEFAULT_ENTRY;

    const riskScore = issue.risk_score;
    const riskLevel = scoreToLevel(riskScore);
    const insurance = evaluateInsurance(issue.cause_type, issue.damage_type);
    const warranty = issue.warranty_flag
      ? { warranty_likely: true, explanation: "Mechanical breakdowns are commonly covered by home warranty plans, not homeowners insurance." }
      : checkWarranty(issue.category);

    const response = {
      analysis_id: crypto.randomUUID().slice(0, 12),
      issue_detected: issue.issue_detected,
      probable_causes: issue.probable_causes,
      summary: issue.summary,
      diy_steps: issue.diy_steps,
      when_to_call_pro: issue.when_to_call_pro,
      product_links: issue.product_links,
      risk: {
        risk_score: riskScore,
        risk_level: riskLevel,
        urgency: scoreToUrgency(riskScore),
        safety_warnings: issue.safety_warnings,
      },
      insurance,
      warranty,
      geo_notice: geoNotice(stateCode),
      cause_type: issue.cause_type,
      damage_type: issue.damage_type,
      global_disclaimer: "This AI tool provides informational guidance only and does not replace licensed professional evaluation.",
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (_error) {
    return new Response(
      JSON.stringify({ error: "Analysis failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
