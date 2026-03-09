import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "water-around-water-heater",
  seoTitle: "Water Around Water Heater — Causes, Risks & What to Do",
  seoDescription: "Puddles or moisture around your water heater may indicate a failing tank, loose fitting, or relief valve issue. Learn what to check, and when to call a plumber.",
  heading: "Water Pooling Around Your Water Heater",
  bluf: "Water on the floor near your water heater can come from a leaking pressure relief valve, a loose supply connection, condensation, or — most seriously — a corroding tank that is about to fail. Determine the source before assuming the worst. If the tank itself is leaking from the bottom, replacement is typically the only option, and acting quickly prevents a major flood.",
  meaning: "Water heaters are pressurized appliances with a typical lifespan of 8–12 years. As they age, the internal tank corrodes from sediment buildup and mineral deposits, eventually developing pinhole leaks or cracks. A small puddle today can become 40–80 gallons of water on your floor tomorrow if the tank fails completely. Identifying whether the water comes from the tank, a fitting, or the relief valve determines whether you need a repair or a full replacement.",
  symptoms: [
    "Puddle or damp area on the floor around the base of the water heater",
    "Rusty or discolored water dripping from the tank body or fittings",
    "Water dripping from the temperature and pressure (T&P) relief valve or its discharge pipe",
    "Moisture or corrosion visible on supply or outlet connections at the top of the tank",
    "Rumbling, popping, or knocking sounds from the tank during heating cycles",
    "Hot water that looks rusty or has a metallic taste",
    "The water heater is more than 10 years old and has never been serviced",
  ],
  causes: [
    "Tank corrosion — internal rust-through from sediment buildup, especially in hard-water areas",
    "T&P relief valve discharge — the valve opens when pressure or temperature is too high, releasing water as a safety measure",
    "Loose fittings — supply inlet, outlet, or drain valve connections that have loosened over time",
    "Condensation — in some conditions, cold incoming water causes condensation on the tank exterior that drips to the floor",
    "Anode rod failure — the sacrificial anode rod has fully corroded, allowing the tank lining to degrade",
    "Drain valve leak — the drain valve at the bottom of the tank is not fully closed or has a slow drip",
  ],
  urgency: {
    text: "A leaking water heater tank should be addressed within hours, not days. A full tank failure can release 40+ gallons of water at once.",
    items: [
      "The leak is coming from the tank body itself (not fittings or valves)",
      "The water heater is in a finished basement, closet, or area where flooding would cause significant damage",
      "You see rust-colored water or significant corrosion on the tank",
      "The T&P valve is discharging repeatedly — this indicates a pressure or temperature safety issue",
      "You hear loud popping or rumbling that has been getting worse",
    ],
  },
  diy: [
    "Dry the area and place towels or a pan to determine exactly where the water is coming from",
    "Tighten a loose drain valve or supply fitting if that is the source",
    "Check if the T&P valve discharge pipe is dripping — this may indicate normal operation or a valve that needs replacement (an inexpensive part)",
    "Flush the tank annually to reduce sediment buildup — connect a garden hose to the drain valve",
  ],
  callPro: [
    "The tank body is leaking — this means the internal lining has failed and the unit needs replacement",
    "The T&P valve is opening frequently — this could indicate dangerous overpressure",
    "You need a full water heater replacement — this involves plumbing, gas, or electrical connections",
    "The unit is gas-fired and you smell gas or suspect a gas line issue",
    "The water heater is more than 12 years old with multiple signs of deterioration",
  ],
  safety: "If your water heater is gas-fired and you smell gas, leave the area immediately and call your gas utility's emergency line. Do not flip switches, light matches, or use your phone near the unit. For electric water heaters, turn off the breaker before investigating a leak to avoid electrocution risk from standing water.",
  insurance: "A burst water heater that causes sudden flooding may be covered by homeowners insurance for the resulting water damage (not the unit itself). Gradual leaks from deferred maintenance are typically excluded. If your tank shows signs of failure, replacing it proactively avoids both the flood risk and potential claim complications.",
  faqs: [
    {
      q: "Is water around my water heater always a serious problem?",
      a: "Not always. A small amount of condensation on the outside of the tank or cold-water pipes is normal in humid conditions. But a puddle forming under the unit, or water visibly dripping from the tank or fittings, should be investigated — it usually signals a real leak that won't resolve on its own.",
    },
    {
      q: "My water heater is leaking from the bottom. Do I need to replace it?",
      a: "Usually yes, if the leak is from the tank seam itself — not the drain valve. A leak at the base of the tank typically means the internal lining has corroded through. These leaks worsen quickly and cannot be repaired. Turn off the cold water supply to the heater and call a plumber promptly.",
    },
    {
      q: "Should I turn off my water heater if it's leaking?",
      a: "If there's an active leak, shut off the cold water supply to the heater — the shutoff valve is usually on the pipe entering the top of the unit. For a gas heater, turn the dial to 'Pilot.' For an electric heater, turn off the breaker. This limits the water that can enter the tank and reduces flooding risk.",
    },
    {
      q: "What is the T&P relief valve and why is it leaking?",
      a: "The temperature and pressure (T&P) relief valve is a safety device that opens to release pressure if the tank overheats or over-pressurizes. Occasional dripping can be normal. Frequent or continuous discharge indicates the tank pressure or temperature is too high — a potentially dangerous condition that should be inspected by a plumber.",
    },
  ],
  relatedIssues: [
    { label: "Plumbing Leaks", href: "/issues/plumbing" },
    { label: "Dripping Under Sink", href: "/issues/dripping-under-sink" },
    { label: "Brown Water Stain on Ceiling", href: "/issues/brown-water-stain-ceiling" },
  ],
  parentCategory: { label: "Plumbing Leaks", href: "/issues/plumbing" },
};

export default function WaterAroundWaterHeater() {
  return <IssueDetailPage data={data} />;
}
