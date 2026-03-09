import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Droplets } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "plumbing",
  seoTitle: "Plumbing Leaks — Water Damage, Pipe Problems & Drain Issues",
  seoDescription: "Common plumbing problems for homeowners: pipe leaks, water stains, low pressure, sewer backup. Learn symptoms, causes, urgency levels, and when to call a plumber.",
  icon: Droplets,
  heading: "Plumbing Leaks & Water Damage",
  intro: "Plumbing problems are among the most common — and most stressful — home issues. A slow drip under the sink can go unnoticed for months, while a burst pipe can cause thousands of dollars in damage in hours. The tricky part is that water travels: a leak upstairs can show up as a stain two rooms away on a lower floor. This guide helps you recognize plumbing symptoms, understand what's likely happening, and decide how to respond.",
  bluf: "If you see unexplained water stains, hear running water when nothing is on, or notice a spike in your water bill, you may have a plumbing leak. Small drips at accessible joints are often DIY-fixable. Leaks behind walls, under slabs, or involving the main line almost always need a licensed plumber. For active flooding or sewage backup, shut off the water supply and call for help immediately.",
  symptoms: [
    "Yellow or brown water stains on ceilings or walls",
    "Dripping sounds behind walls or under floors",
    "Unexplained increase in water bill",
    "Low water pressure at multiple fixtures",
    "Musty or sewage smell near drains or walls",
    "Soft, warped, or bubbling flooring near plumbing fixtures",
    "Visible mold growth near sinks, tubs, or water heater",
    "Water pooling under the water heater or around the base",
    "Toilet running continuously or slow drains across the house",
  ],
  causes: [
    "Corroded or aging pipes — copper, galvanized, and PVC all deteriorate over decades",
    "Loose or failed fittings at joints, valves, or connections",
    "Frozen pipes — water expands when it freezes, cracking pipes from the inside",
    "Tree root intrusion — roots grow into sewer lines seeking moisture",
    "High water pressure — sustained pressure above 80 PSI stresses pipe joints",
    "Slab leaks — pipes under the concrete foundation shift and crack over time",
    "Failed water heater — corrosion at the tank base leads to slow leaks, then failure",
    "Clogged drains — grease, hair, and mineral buildup cause backups",
  ],
  urgency: {
    text: "Water damage gets worse every hour it's ignored. Even a small leak can lead to mold growth within 24–48 hours in warm, humid conditions.",
    items: [
      "Active flooding or water spraying from a pipe",
      "Sewage backup through any drain — this is a health hazard",
      "Water near the electrical panel or wiring",
      "Water heater leaking from the tank body (not just the overflow valve)",
      "Ceiling visibly sagging from water weight",
    ],
  },
  diyVsPro: {
    diy: [
      "Tightening a loose compression fitting under a sink",
      "Replacing a worn washer in a dripping faucet",
      "Clearing a single slow drain with a plunger or drain snake",
      "Replacing a toilet flapper to stop a running toilet",
      "Insulating exposed pipes to prevent freezing",
    ],
    pro: [
      "Leaks inside walls, under floors, or under the slab",
      "Sewer line backups or slow drains throughout the house",
      "Water heater replacement or gas line connections",
      "Low pressure affecting the whole house (may indicate a main line issue)",
      "Any plumbing work that requires soldering, sweating pipes, or permits",
    ],
  },
  safetyNote: "If a leak is near electrical outlets or your breaker panel, shut off power to that area before touching anything. Sewage backups can carry harmful bacteria — wear gloves and avoid skin contact. For gas water heaters, never attempt gas line work yourself.",
  relatedCategories: ["Plumbing", "Interior"],
};

export default function PlumbingHub() {
  return <CategoryHubPage data={data} />;
}
