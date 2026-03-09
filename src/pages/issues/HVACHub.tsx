import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Wind } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "hvac",
  seoTitle: "HVAC Problems — Heating, Cooling & Airflow Troubleshooting",
  seoDescription: "Common HVAC issues for homeowners: AC not cooling, furnace not heating, weak airflow, strange noises. Learn what causes them and when to call a technician.",
  icon: Wind,
  heading: "HVAC & Heating/Cooling Problems",
  intro: "Your HVAC system works hard to keep your home comfortable year-round, so when something goes wrong — warm air from the AC, a furnace that clicks but doesn't ignite, uneven room temperatures, or a sudden spike in energy bills — it's usually noticeable right away. Some HVAC problems have simple fixes like a clogged filter, while others involve refrigerant, gas lines, or electrical components that require a licensed technician. This guide walks you through the most common issues, what to check first, and when to call for professional help.",
  bluf: "Most HVAC complaints start with one of four things: a dirty air filter, a thermostat issue, blocked vents, or a failing component. Start with the simple checks — replacing the filter and verifying thermostat settings solves a surprising number of problems. If the system is making unusual noises, leaking refrigerant, producing a burning smell, or simply not responding, those are signs a licensed HVAC technician should take a look.",
  symptoms: [
    "AC blowing warm or room-temperature air",
    "Furnace clicking but not producing heat",
    "Uneven temperatures between rooms",
    "System runs constantly without reaching the set temperature",
    "Strange noises — banging, hissing, rattling, or squealing",
    "Ice buildup on the outdoor unit or indoor evaporator coil",
    "Weak airflow from supply vents even when the system is running",
    "Thermostat unresponsive or displaying incorrect readings",
    "Noticeable increase in energy bills without usage changes",
    "Burning or musty smell when the system starts up",
  ],
  causes: [
    "Dirty or clogged air filter — the single most common cause of HVAC underperformance",
    "Thermostat malfunction — dead batteries, miscalibration, or wiring issues",
    "Refrigerant leak — low refrigerant means the AC can't cool air effectively",
    "Blocked or leaky ductwork — up to 30% of conditioned air can be lost through duct leaks",
    "Faulty blower motor — reduces airflow throughout the system",
    "Dirty condenser coils — outdoor unit clogged with debris reduces heat exchange",
    "Ignitor or flame sensor failure — prevents the furnace from lighting",
    "Capacitor or compressor failure — electrical components wear out over time",
  ],
  urgency: {
    text: "Most HVAC issues are not emergencies, but some situations warrant quick action — especially those involving gas, carbon monoxide, or electrical problems.",
    items: [
      "Burning smell or visible smoke from the unit",
      "Carbon monoxide detector alarm — evacuate immediately and call 911",
      "Gas smell near the furnace — leave the house, don't use switches, call the gas company",
      "System sparking or tripping breakers repeatedly",
      "No heat during extreme cold (risk of frozen pipes)",
    ],
  },
  diyVsPro: {
    diy: [
      "Replacing a dirty air filter (check monthly, replace every 1–3 months)",
      "Replacing thermostat batteries or resetting the thermostat",
      "Clearing debris away from the outdoor condenser unit",
      "Making sure all supply and return vents are open and unblocked",
      "Checking the breaker panel for a tripped HVAC circuit",
    ],
    pro: [
      "Refrigerant recharge or leak repair (requires EPA certification)",
      "Gas furnace ignitor, flame sensor, or gas valve issues",
      "Compressor or blower motor replacement",
      "Ductwork sealing or replacement",
      "Any work involving gas lines or electrical wiring",
      "System is more than 15 years old with recurring failures",
    ],
  },
  safetyNote: "Never attempt to handle refrigerant — it requires EPA certification. If you smell gas near your furnace, do not flip any switches — leave the house and call your gas utility's emergency line. Carbon monoxide is odorless; make sure CO detectors are installed and working on every level of your home.",
  relatedCategories: ["HVAC"],
};

export default function HVACHub() {
  return <CategoryHubPage data={data} />;
}
