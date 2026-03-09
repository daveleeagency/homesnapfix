import { CategoryHubPage } from "@/components/CategoryHubPage";
import { Droplets } from "lucide-react";
import type { CategoryHubData } from "@/components/CategoryHubPage";

const data: CategoryHubData = {
  slug: "mold-moisture",
  seoTitle: "Mold & Moisture Problems — Signs, Causes & Safe Removal",
  seoDescription: "Mold and moisture issues in homes: visible mold, musty odors, condensation, humidity. Learn what causes them, when to clean it yourself, and when to call a professional.",
  icon: Droplets,
  heading: "Mold & Moisture Problems",
  intro: "Mold is one of the most common home issues — and one of the most misunderstood. Small patches of mold on bathroom grout or around a window frame are usually manageable cleanup tasks. But hidden mold behind walls, in HVAC ducts, or throughout a basement can affect indoor air quality and may require professional remediation. The key in every case is to fix the moisture source first, because mold always comes back if the underlying dampness isn't addressed.",
  bluf: "If you see mold patches smaller than about 10 square feet on hard surfaces, you can usually clean them yourself with proper protection (N95 mask, gloves, ventilation). For mold behind walls, in ductwork, covering large areas, or accompanied by a strong persistent odor, professional remediation is recommended. The most important step is finding and fixing the moisture source — without that, mold will return regardless of how well you clean it.",
  symptoms: [
    "Visible black, green, or white fuzzy patches on walls, ceilings, or grout",
    "Persistent musty or earthy smell, especially in bathrooms, basements, or closets",
    "Peeling wallpaper, bubbling paint, or discolored surfaces",
    "Condensation on windows, pipes, or cold surfaces",
    "Allergic reactions (sneezing, itchy eyes, congestion) that improve when you leave the house",
    "Warped or soft drywall in areas near plumbing or exterior walls",
    "Dark spots on ceiling tiles or around air vents",
    "Persistent humidity above 60% measured with a hygrometer",
  ],
  causes: [
    "Plumbing leaks — even a slow drip behind a wall creates ideal mold conditions",
    "Roof leaks — water entering the attic creates hidden mold over months",
    "Poor bathroom ventilation — steam from showers without an exhaust fan promotes mold growth",
    "Basement moisture — hydrostatic pressure pushes groundwater through foundation walls",
    "HVAC condensation — clogged drain lines or oversized AC units create excess moisture",
    "Flooding or water damage — any area not properly dried within 24–48 hours is at risk",
    "Poor exterior drainage — grading that directs water toward the foundation",
    "High indoor humidity — from cooking, laundry, or climate without dehumidification",
  ],
  urgency: {
    text: "Mold itself is not usually a structural emergency, but the moisture causing it can lead to rot, structural weakening, and ongoing air quality issues. Speed matters most when water damage is fresh.",
    items: [
      "Mold covering more than 10 square feet (approximately 3×3 feet)",
      "Mold behind walls, inside ductwork, or in inaccessible areas",
      "Strong musty odor with no visible mold (suggests hidden growth)",
      "Mold caused by sewage backup or contaminated water",
      "Household members with asthma, allergies, or compromised immune systems",
      "Mold on structural framing or subfloor materials",
    ],
  },
  diyVsPro: {
    diy: [
      "Cleaning small mold patches (<10 sq ft) on hard surfaces with detergent and water",
      "Improving bathroom ventilation by running the exhaust fan during and 30 min after showers",
      "Using a dehumidifier to bring indoor humidity below 50%",
      "Fixing minor condensation issues by improving airflow around cold surfaces",
      "Applying mold-resistant paint in bathrooms and basements after proper cleaning",
    ],
    pro: [
      "Mold covering more than 10 square feet",
      "Mold behind walls, under flooring, or inside ductwork",
      "Mold caused by sewage, contaminated water, or flooding",
      "Recurrent mold despite repeated cleaning (source not found)",
      "Situations where the moisture source cannot be identified",
      "Health symptoms that may be related to indoor air quality",
    ],
  },
  safetyNote: "When cleaning mold, always wear an N95 respirator mask, rubber gloves, and eye protection. Seal the area from the rest of the house to prevent spore spread. Do not use bleach on porous materials (drywall, wood) — it only kills surface mold and can worsen moisture in the material. For any suspected toxic black mold (Stachybotrys) or mold in HVAC systems, consult a licensed remediation professional.",
  relatedCategories: ["Interior"],
};

export default function MoldMoistureHub() {
  return <CategoryHubPage data={data} />;
}
