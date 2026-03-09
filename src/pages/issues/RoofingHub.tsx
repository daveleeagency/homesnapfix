import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Home } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "roofing",
  seoTitle: "Roofing Issues — Leaks, Storm Damage & Shingle Problems",
  seoDescription: "Common roofing issues homeowners face: leaks, missing shingles, storm damage, and flashing failures. Learn symptoms, causes, and when to DIY vs. call a roofer.",
  icon: Home,
  heading: "Roofing Issues",
  intro: "Your roof is your home's first line of defense against rain, wind, and temperature extremes. When something goes wrong — a leak after a storm, shingles curling at the edges, or a stain spreading across the ceiling — it can be hard to tell whether you're dealing with a minor maintenance task or a serious problem that needs immediate attention. This guide covers the most common roofing issues homeowners encounter, what causes them, and how to decide what to do next.",
  bluf: "Most roofing problems start small and get worse over time. Water stains on ceilings, missing or cracked shingles, and damp spots in the attic are common early signs. Some issues — like a single missing shingle — are manageable DIY tasks. Others — like flashing failures, sagging decking, or active leaks during rain — usually require a licensed roofing professional. If you're unsure, upload a photo for a free AI-assisted severity estimate.",
  symptoms: [
    "Water stains or discoloration on ceilings or walls, especially after rain",
    "Missing, cracked, curled, or buckled shingles visible from the ground",
    "Granules from shingles accumulating in gutters or at downspouts",
    "Daylight visible through the roof boards when viewed from the attic",
    "Damp, musty smell in the attic or upper floors",
    "Sagging areas on the roof surface",
    "Flashing pulling away from chimneys, vents, or skylights",
    "Ice dams forming along roof edges in winter",
  ],
  causes: [
    "Storm damage — wind, hail, or fallen branches can crack or remove shingles",
    "Age-related wear — asphalt shingles typically last 20–30 years before failing",
    "Flashing deterioration — metal flashing around penetrations corrodes or separates over time",
    "Clogged gutters — water backs up under shingles and causes rot or ice dams",
    "Poor attic ventilation — trapped heat and moisture weaken shingles from underneath",
    "Improper installation — shortcuts during original roofing cause premature failures",
    "Tree damage — overhanging branches scrape shingles and drop debris that traps moisture",
  ],
  urgency: {
    text: "Not every roofing issue is an emergency, but some need quick attention to prevent water damage spreading to insulation, drywall, and electrical systems.",
    items: [
      "Active dripping or water intrusion during rain",
      "Large sections of missing shingles exposing the deck",
      "Sagging or visibly deformed roof structure",
      "Water pooling in the attic or near electrical wiring",
      "Storm damage with more rain in the forecast",
    ],
  },
  diyVsPro: {
    diy: [
      "Replacing a single missing or cracked shingle on a low-slope roof",
      "Applying roofing cement to a small, accessible crack",
      "Cleaning gutters to restore drainage and prevent ice dams",
      "Adding temporary tarping over a damaged area until repair",
    ],
    pro: [
      "Multiple areas of damage or widespread shingle loss",
      "Leaks originating near flashing, valleys, or chimneys",
      "Roof is more than 20 years old with recurring issues",
      "You are not comfortable working at heights or on steep slopes",
      "Sagging or structural concerns in the roof deck",
    ],
  },
  safetyNote: "Roof work involves fall risk. Never walk on a wet, icy, or steeply pitched roof. Use a safety harness and have someone spot you from the ground. If you're unsure about safety, a professional inspection is always the right call.",
  relatedCategories: ["Roofing"],
};

export default function RoofingHub() {
  return <CategoryHubPage data={data} />;
}
