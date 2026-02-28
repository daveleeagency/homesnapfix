export interface IssueCard {
  id: string;
  title: string;
  snippet: string;
  riskLevel: "Low" | "Moderate" | "High";
  category: string;
}

export interface IssueCluster {
  name: string;
  issues: IssueCard[];
}

export const issueClusters: IssueCluster[] = [
  {
    name: "Storm & Insurance-Related Damage",
    issues: [
      { id: "storm-roof", title: "Wind-Damaged Roof Shingles", snippet: "Missing or lifted shingles after a storm can expose the roof deck to water intrusion and accelerate deterioration.", riskLevel: "High", category: "roofing" },
      { id: "storm-siding", title: "Hail-Damaged Siding", snippet: "Dents, cracks, or punctures in vinyl or fiber-cement siding reduce weather protection and may warrant an insurance claim.", riskLevel: "Moderate", category: "exterior" },
      { id: "storm-gutter", title: "Detached or Crushed Gutters", snippet: "Gutters pulled away from the fascia board can cause water to pool near the foundation, leading to erosion.", riskLevel: "Moderate", category: "exterior" },
      { id: "storm-window", title: "Broken or Cracked Windows", snippet: "Impact damage from debris compromises insulation and security. Temporary sealing prevents further interior damage.", riskLevel: "High", category: "exterior" },
      { id: "storm-tree", title: "Fallen Tree or Limb Damage", snippet: "Large branches can damage roofing, fencing, and utility lines. Assess structural impact before clearing debris.", riskLevel: "High", category: "exterior" },
      { id: "storm-flooding", title: "Basement or Crawl-Space Flooding", snippet: "Standing water after heavy rain can damage finishes, promote mold, and compromise electrical systems below grade.", riskLevel: "High", category: "plumbing" },
    ],
  },
  {
    name: "Water & Moisture Issues",
    issues: [
      { id: "water-stain", title: "Ceiling Water Stains", snippet: "Brown or yellow rings on ceilings usually indicate a slow roof or plumbing leak that needs tracing to the source.", riskLevel: "Moderate", category: "plumbing" },
      { id: "water-mold", title: "Visible Mold Growth", snippet: "Mold on walls or ceilings signals sustained moisture. Identify and fix the moisture source before remediation.", riskLevel: "High", category: "interior" },
      { id: "water-pipe", title: "Leaking Supply or Drain Pipe", snippet: "Dripping joints or corroded pipe sections waste water and can cause hidden damage inside walls and floors.", riskLevel: "Moderate", category: "plumbing" },
      { id: "water-caulk", title: "Failed Bathroom Caulking", snippet: "Cracked or missing caulk around tubs and showers allows water behind tiles, leading to rot and mold.", riskLevel: "Low", category: "plumbing" },
      { id: "water-condensation", title: "Window Condensation & Fog", snippet: "Persistent condensation between panes indicates seal failure. Single-pane fogging may point to high indoor humidity.", riskLevel: "Low", category: "interior" },
    ],
  },
  {
    name: "Heating & Cooling Problems",
    issues: [
      { id: "hvac-noac", title: "AC Not Cooling", snippet: "Warm air from vents can result from low refrigerant, a dirty filter, or a failing compressor. Check the simplest causes first.", riskLevel: "Moderate", category: "hvac" },
      { id: "hvac-furnace", title: "Furnace Not Igniting", snippet: "A furnace that clicks but doesn't fire may have a faulty ignitor, flame sensor, or gas valve issue.", riskLevel: "High", category: "hvac" },
      { id: "hvac-uneven", title: "Uneven Room Temperatures", snippet: "Hot and cold spots often stem from blocked vents, poor duct design, or inadequate insulation in certain zones.", riskLevel: "Low", category: "hvac" },
      { id: "hvac-noise", title: "Strange HVAC Noises", snippet: "Banging, squealing, or rattling from the unit can indicate loose parts, a worn belt, or debris in the blower.", riskLevel: "Moderate", category: "hvac" },
    ],
  },
  {
    name: "Electrical & Fire Risks",
    issues: [
      { id: "elec-outlet", title: "Dead or Sparking Outlet", snippet: "An outlet that doesn't work or produces sparks may have loose wiring or a failing receptacle. Do not continue using it.", riskLevel: "High", category: "electrical" },
      { id: "elec-breaker", title: "Frequently Tripping Breaker", snippet: "A breaker that trips repeatedly usually indicates an overloaded circuit, a short, or a ground fault.", riskLevel: "High", category: "electrical" },
      { id: "elec-flicker", title: "Flickering Lights", snippet: "Occasional flickers are normal, but persistent flickering across multiple fixtures may point to a loose connection.", riskLevel: "Moderate", category: "electrical" },
      { id: "elec-burn", title: "Burning Smell Near Panel", snippet: "A smell of hot plastic or burning near the breaker panel is an emergency—shut off the main breaker and call a pro.", riskLevel: "High", category: "electrical" },
      { id: "elec-gfci", title: "GFCI Won't Reset", snippet: "A ground-fault outlet that refuses to reset may have a wiring fault downstream or a failed device.", riskLevel: "Moderate", category: "electrical" },
    ],
  },
  {
    name: "Structural & Foundation Issues",
    issues: [
      { id: "struct-crack", title: "Foundation Cracks", snippet: "Hairline cracks are common in concrete, but widening or stair-step cracks in block walls may indicate settlement.", riskLevel: "High", category: "exterior" },
      { id: "struct-door", title: "Sticking Doors or Windows", snippet: "Doors or windows that suddenly jam can signal foundation movement or framing shifts within the structure.", riskLevel: "Moderate", category: "interior" },
      { id: "struct-floor", title: "Sagging or Uneven Floors", snippet: "Floors that slope or bounce may indicate weakened joists, pier settlement, or moisture damage to subfloor framing.", riskLevel: "High", category: "interior" },
      { id: "struct-drywall", title: "Drywall Cracks Above Doorframes", snippet: "Diagonal cracks radiating from door or window corners often correlate with differential foundation settlement.", riskLevel: "Moderate", category: "interior" },
      { id: "struct-chimney", title: "Leaning or Separating Chimney", snippet: "A chimney pulling away from the house is a serious structural issue that may require underpinning or rebuilding.", riskLevel: "High", category: "exterior" },
    ],
  },
  {
    name: "Appliance Failures",
    issues: [
      { id: "appl-waterheater", title: "No Hot Water", snippet: "A water heater producing lukewarm or cold water may have a failed heating element, thermostat, or pilot light issue.", riskLevel: "Moderate", category: "plumbing" },
      { id: "appl-washer", title: "Washing Machine Leak", snippet: "Leaks around the washer often trace to supply hoses, door seals, or a clogged drain pump filter.", riskLevel: "Moderate", category: "plumbing" },
      { id: "appl-disposal", title: "Garbage Disposal Jammed", snippet: "A humming but non-spinning disposal is usually jammed. Use the hex wrench port underneath to free it.", riskLevel: "Low", category: "plumbing" },
      { id: "appl-dryer", title: "Dryer Not Heating", snippet: "A dryer that tumbles but produces no heat likely has a blown thermal fuse, faulty heating element, or clogged vent.", riskLevel: "Moderate", category: "electrical" },
    ],
  },
];
