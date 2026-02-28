import type { CauseType, DamageType, InsuranceTier } from "@/types";

export interface IssueCard {
  id: string;
  title: string;
  snippet: string;
  riskLevel: "Low" | "Moderate" | "High";
  category: string;
  causeType: CauseType;
  damageType: DamageType;
  insuranceTier: InsuranceTier;
}

export interface IssueCluster {
  name: string;
  issues: IssueCard[];
}

export const issueClusters: IssueCluster[] = [
  {
    name: "Storm & Exterior Damage",
    issues: [
      { id: "storm-roof", title: "Roof Leak (Post-Storm)", snippet: "Missing or lifted shingles after a storm can expose the roof deck to water intrusion and accelerate deterioration.", riskLevel: "High", category: "roofing", causeType: "weather", damageType: "structural", insuranceTier: "Likely Covered" },
      { id: "roof-gradual", title: "Roof Leak (Gradual)", snippet: "Slow leaks from aging shingles or flashing failures worsen over time, causing hidden water damage in attic spaces.", riskLevel: "Moderate", category: "roofing", causeType: "gradual_wear", damageType: "water", insuranceTier: "Unlikely" },
      { id: "storm-hail", title: "Hail Damage", snippet: "Hail impacts can crack shingles, dent metal, and damage siding. Document all damage promptly for insurance claims.", riskLevel: "High", category: "roofing", causeType: "weather", damageType: "structural", insuranceTier: "Likely Covered" },
      { id: "storm-siding", title: "Siding Damage", snippet: "Dents, cracks, or punctures in vinyl or fiber-cement siding reduce weather protection and may warrant an insurance claim.", riskLevel: "Moderate", category: "exterior", causeType: "weather", damageType: "structural", insuranceTier: "Possibly Covered" },
      { id: "storm-gutter", title: "Gutter Overflow", snippet: "Clogged or damaged gutters cause water to pool near the foundation, leading to erosion and potential basement leaks.", riskLevel: "Moderate", category: "exterior", causeType: "maintenance_neglect", damageType: "water", insuranceTier: "Maintenance" },
    ],
  },
  {
    name: "Water & Plumbing",
    issues: [
      { id: "water-burst", title: "Burst Pipe (Sudden)", snippet: "A sudden pipe failure can release hundreds of gallons per hour. Shut off the main water valve immediately.", riskLevel: "High", category: "plumbing", causeType: "sudden_accidental", damageType: "water", insuranceTier: "Likely Covered" },
      { id: "water-slab", title: "Slab Leak", snippet: "Leaks under the concrete slab can cause foundation movement, mold, and unexplained increases in water bills.", riskLevel: "High", category: "plumbing", causeType: "unknown", damageType: "structural", insuranceTier: "Possibly Covered" },
      { id: "water-heater", title: "Water Heater Failure", snippet: "A failing water heater may produce lukewarm water, strange noises, or visible corrosion at the tank base.", riskLevel: "High", category: "plumbing", causeType: "gradual_wear", damageType: "water", insuranceTier: "Possibly Covered" },
      { id: "water-sewer", title: "Sewer Backup", snippet: "Sewage backing up into drains is a health hazard. This may indicate a main line blockage or tree root intrusion.", riskLevel: "High", category: "plumbing", causeType: "unknown", damageType: "water", insuranceTier: "Possibly Covered" },
      { id: "water-pressure", title: "Low Water Pressure", snippet: "Reduced pressure across fixtures may indicate pipe corrosion, a failing pressure regulator, or municipal supply issues.", riskLevel: "Low", category: "plumbing", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
    ],
  },
  {
    name: "HVAC & Mechanical",
    issues: [
      { id: "hvac-ac", title: "AC Not Cooling", snippet: "Warm air from vents can result from low refrigerant, a dirty filter, or a failing compressor. Check the simplest causes first.", riskLevel: "Moderate", category: "hvac", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
      { id: "hvac-furnace", title: "Furnace Not Heating", snippet: "A furnace that clicks but doesn't fire may have a faulty ignitor, flame sensor, or gas valve issue.", riskLevel: "Moderate", category: "hvac", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
      { id: "hvac-refrigerant", title: "Refrigerant Leak", snippet: "Hissing sounds, ice on the evaporator coil, or warm air output may signal a refrigerant leak requiring professional repair.", riskLevel: "Moderate", category: "hvac", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
      { id: "hvac-thermostat", title: "Thermostat Failure", snippet: "An unresponsive or inaccurate thermostat may need recalibration, battery replacement, or full replacement.", riskLevel: "Low", category: "hvac", causeType: "manufacturer_defect", damageType: "mechanical", insuranceTier: "Maintenance" },
      { id: "hvac-energy", title: "Energy Bill Spike", snippet: "A sudden increase in utility costs often points to HVAC inefficiency, duct leaks, or insulation deficiencies.", riskLevel: "Low", category: "hvac", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
    ],
  },
  {
    name: "Electrical & Fire Risks",
    issues: [
      { id: "elec-breaker", title: "Breaker Tripping", snippet: "A breaker that trips repeatedly usually indicates an overloaded circuit, a short, or a ground fault.", riskLevel: "High", category: "electrical", causeType: "gradual_wear", damageType: "electrical", insuranceTier: "Possibly Covered" },
      { id: "elec-burn", title: "Burning Smell", snippet: "A smell of hot plastic or burning near the breaker panel is an emergency—shut off the main breaker and call a pro.", riskLevel: "High", category: "electrical", causeType: "unknown", damageType: "fire", insuranceTier: "Possibly Covered" },
      { id: "elec-flicker", title: "Flickering Lights", snippet: "Persistent flickering across multiple fixtures may point to a loose connection or degrading wiring.", riskLevel: "Moderate", category: "electrical", causeType: "gradual_wear", damageType: "electrical", insuranceTier: "Possibly Covered" },
      { id: "elec-outlet", title: "Dead Outlets", snippet: "An outlet that doesn't work may have a tripped GFCI upstream, loose wiring, or a failed receptacle.", riskLevel: "Moderate", category: "electrical", causeType: "gradual_wear", damageType: "electrical", insuranceTier: "Maintenance" },
      { id: "elec-co", title: "Carbon Monoxide Alarm", snippet: "A triggered CO alarm is a life safety emergency. Evacuate immediately and call 911. Do not re-enter until cleared.", riskLevel: "High", category: "electrical", causeType: "unknown", damageType: "fire", insuranceTier: "Possibly Covered" },
    ],
  },
  {
    name: "Structural & Foundation",
    issues: [
      { id: "struct-hairline", title: "Foundation Cracks (Hairline)", snippet: "Hairline cracks are common in concrete and usually cosmetic, but should be monitored for widening over time.", riskLevel: "Moderate", category: "exterior", causeType: "gradual_wear", damageType: "cosmetic", insuranceTier: "Maintenance" },
      { id: "struct-major", title: "Major Foundation Shift", snippet: "Visible displacement, stair-step cracks in block walls, or doors that no longer close indicate serious movement.", riskLevel: "High", category: "exterior", causeType: "gradual_wear", damageType: "structural", insuranceTier: "Unlikely" },
      { id: "struct-crawl", title: "Crawlspace Moisture", snippet: "Standing water or high humidity in the crawlspace promotes wood rot, mold, and pest infestation.", riskLevel: "Moderate", category: "exterior", causeType: "gradual_wear", damageType: "water", insuranceTier: "Maintenance" },
      { id: "struct-termite", title: "Termite Damage", snippet: "Mud tubes on foundation walls, hollow-sounding wood, or discarded wings indicate active or past termite activity.", riskLevel: "High", category: "exterior", causeType: "gradual_wear", damageType: "structural", insuranceTier: "Maintenance" },
      { id: "struct-mold", title: "Mold Growth", snippet: "Visible mold on walls or ceilings signals sustained moisture. Identify and fix the source before remediation.", riskLevel: "High", category: "interior", causeType: "gradual_wear", damageType: "water", insuranceTier: "Unlikely" },
    ],
  },
  {
    name: "Appliance Failures",
    issues: [
      { id: "appl-fridge", title: "Refrigerator Not Cooling", snippet: "Check condenser coils, thermostat settings, and door seals before assuming a compressor failure.", riskLevel: "Low", category: "hvac", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
      { id: "appl-dishwasher", title: "Dishwasher Leak", snippet: "Leaks may originate from the door gasket, supply line, or a cracked tub. Water damage to flooring can escalate quickly.", riskLevel: "Moderate", category: "plumbing", causeType: "sudden_accidental", damageType: "water", insuranceTier: "Possibly Covered" },
      { id: "appl-washer", title: "Washer Overflow", snippet: "A washer overflow can cause significant water damage to flooring and walls. Check supply hoses and drain connections.", riskLevel: "High", category: "plumbing", causeType: "sudden_accidental", damageType: "water", insuranceTier: "Likely Covered" },
      { id: "appl-dryer", title: "Dryer Overheating", snippet: "Excessive heat or a burning smell from the dryer often indicates a clogged lint vent—a leading cause of house fires.", riskLevel: "High", category: "electrical", causeType: "maintenance_neglect", damageType: "fire", insuranceTier: "Possibly Covered" },
      { id: "appl-garage", title: "Garage Door Failure", snippet: "A garage door that won't open or close may have a broken spring, misaligned sensor, or motor failure.", riskLevel: "Low", category: "exterior", causeType: "gradual_wear", damageType: "mechanical", insuranceTier: "Maintenance" },
    ],
  },
];
