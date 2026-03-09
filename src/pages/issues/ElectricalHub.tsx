import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Zap } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "electrical",
  seoTitle: "Electrical Warning Signs — Outlet Problems, Breaker Trips & Safety",
  seoDescription: "Common electrical issues in homes: dead outlets, tripping breakers, flickering lights, warm cover plates. Learn what's safe to check yourself and when to call an electrician.",
  icon: Zap,
  heading: "Electrical Warning Signs",
  intro: "Electrical problems can range from a simple tripped breaker to a serious fire hazard, and the difference isn't always obvious. A dead outlet might just need a GFCI reset, or it could indicate failing wiring behind the wall. Because electricity is invisible and dangerous, it's especially important to know what you can safely check on your own and where the line is for calling a licensed electrician. This guide covers the warning signs, common causes, and the right response for each situation.",
  bluf: "Many electrical issues — like a tripped breaker or a dead outlet — have simple causes that are safe to check. Reset the GFCI, check the breaker panel, and test with a plug-in outlet tester. But if you notice a burning smell, warm or discolored outlets, sparking, or breakers that trip repeatedly, stop using the affected circuit and call a licensed electrician. Electrical fires are a leading cause of home fires in the United States.",
  symptoms: [
    "One or more outlets have no power",
    "Circuit breaker trips repeatedly after being reset",
    "Lights flicker across multiple rooms (not just one bulb)",
    "Outlet or switch plate feels warm to the touch",
    "Burning or hot plastic smell near outlets or the breaker panel",
    "Sparks when plugging in or unplugging devices",
    "Discoloration, scorching, or melting around an outlet",
    "Buzzing or humming sound from switches, outlets, or the panel",
    "Frequent bulb burnouts in the same fixture",
  ],
  causes: [
    "Tripped GFCI — a single tripped GFCI outlet can kill power to multiple downstream outlets",
    "Overloaded circuit — too many devices drawing power from one circuit",
    "Loose wiring connections — vibration and thermal cycling loosen terminals over time",
    "Worn-out receptacles — outlet contacts weaken after years of use",
    "Aluminum wiring (common in 1960s–70s homes) — higher risk of overheating at connections",
    "Corroded or outdated breaker panel — Federal Pacific and Zinsco panels are known risks",
    "Ground fault or short circuit — damaged insulation allows current to flow where it shouldn't",
    "Rodent damage — mice and rats chew through wire insulation in walls and attics",
  ],
  urgency: {
    text: "Electrical issues can escalate to fire hazards without visible warning. Treat any sign of heat, burning smell, or sparking as urgent.",
    items: [
      "Burning smell from any outlet, switch, or the breaker panel",
      "Visible sparking or arcing at an outlet",
      "Outlet or switch plate that is hot (not just warm)",
      "Breaker that won't stay on after repeated resets",
      "Any sign of scorching, melting, or discoloration around wiring",
      "Aluminum wiring with signs of overheating",
    ],
  },
  diyVsPro: {
    diy: [
      "Resetting a tripped GFCI outlet (press the Reset button)",
      "Checking the breaker panel for a tripped breaker (flip fully off, then on)",
      "Testing an outlet with a plug-in outlet tester ($12 at hardware stores)",
      "Replacing a worn outlet if you're comfortable turning off the breaker and following instructions",
    ],
    pro: [
      "Any outlet or switch that feels hot, sparks, or smells like burning",
      "Breakers that trip repeatedly — this indicates an underlying problem",
      "Flickering lights affecting multiple circuits (possible main panel issue)",
      "Homes with aluminum wiring need specialized connectors and inspection",
      "Any work on the breaker panel itself",
      "Adding new circuits or upgrading electrical capacity",
    ],
  },
  safetyNote: "ALWAYS turn off the breaker before touching any outlet or switch internals. Use a non-contact voltage tester to confirm power is off before starting. Never touch bare wires. If you smell burning or see sparking, stop using the circuit immediately and contact a licensed electrician. Electrical work in many jurisdictions requires permits — check your local requirements.",
  relatedCategories: ["Electrical"],
};

export default function ElectricalHub() {
  return <CategoryHubPage data={data} />;
}
