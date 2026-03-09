import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "dripping-under-sink",
  seoTitle: "Dripping Under Sink — Causes, Fixes & When to Call a Plumber",
  seoDescription: "Water dripping under your kitchen or bathroom sink can cause mold, cabinet damage, and higher water bills. Learn what causes it, DIY fixes, and when you need a plumber.",
  heading: "Dripping Under the Sink",
  bluf: "A drip under the sink usually comes from a worn-out supply line connection, a loose drain fitting, or a failing P-trap seal. Most under-sink drips are fixable with basic tools, but ignoring them leads to cabinet rot, mold growth, and potentially higher water bills. Identify the source — supply side (pressurized water) versus drain side (gravity) — before deciding on a fix.",
  meaning: "Under-sink leaks are one of the most common household plumbing issues. They often go unnoticed for weeks because the cabinet conceals the moisture. By the time you see it, water damage to the cabinet floor, adjacent walls, or subfloor may have already started. Supply-side leaks are pressurized and tend to produce a steady drip, while drain-side leaks only occur when the sink is in use.",
  symptoms: [
    "Puddle or damp spot on the cabinet floor beneath the sink",
    "Warped, swollen, or discolored cabinet bottom or sides",
    "Musty smell when you open the cabinet doors",
    "Visible dripping from pipe joints, supply lines, or the faucet base",
    "Mold or mildew growing on the cabinet interior or pipes",
    "Water stain on the ceiling below (if sink is on an upper floor)",
    "Unexplained increase in water bill suggesting a continuous leak",
  ],
  causes: [
    "Worn-out supply line connections — rubber washers and braided hoses degrade over time",
    "Loose or corroded drain fittings — slip-joint nuts on the P-trap or tailpiece can loosen",
    "Failed P-trap seal — the curved trap can crack, corrode, or lose its gasket",
    "Faucet base leak — water seeping under the faucet body and dripping below the counter",
    "Garbage disposal connection — a failing gasket where the disposal meets the drain or dishwasher hose",
    "Cracked supply valve — the shut-off valve itself may be leaking at the stem or connection",
  ],
  urgency: {
    text: "Under-sink drips are rarely emergencies, but a pressurized supply-side leak can waste significant water and cause rapid damage if ignored.",
    items: [
      "Water is spraying or flowing (not just dripping) from a supply line",
      "The shut-off valve itself is leaking and you cannot close it",
      "You see mold growth on the cabinet or wall",
      "The cabinet floor or subfloor feels soft or spongy",
      "Water is dripping through to the floor below",
    ],
  },
  diy: [
    "The drip comes from a loose slip-joint nut you can hand-tighten or snug with pliers",
    "A supply line connection needs a new rubber washer — inexpensive and straightforward",
    "You need to replace a corroded P-trap — available at any hardware store for under $15",
    "You can turn off the water supply to isolate the leak while you work",
  ],
  callPro: [
    "You cannot identify whether the leak is from the supply or drain side",
    "The shut-off valve is seized or leaking — this may require soldering or a valve replacement",
    "There is significant mold behind the cabinet wall",
    "The leak involves a garbage disposal, dishwasher connection, or built-in filtration system",
    "You notice water damage to the subfloor or walls beyond the cabinet",
  ],
  safety: "Always turn off the water supply before working on pressurized connections. Mold behind cabinets can be a health concern — if you see widespread mold, wear a mask and gloves and consider professional remediation.",
  insurance: "Most homeowner policies do not cover gradual plumbing leaks or the cost of fixing the leaking pipe itself. However, resulting water damage to floors, walls, or ceilings from a sudden failure may be covered. Document the damage with photos before starting cleanup.",
  faqs: [
    {
      q: "Is a drip under the sink an emergency?",
      a: "Usually not, but don't let it sit. Even a slow drip can cause mold inside the cabinet, rot the cabinet bottom, and damage subfloor material over time. Address it within a few days.",
    },
    {
      q: "How do I find exactly where the drip is coming from?",
      a: "Dry everything under the sink with a towel, then run water for a minute and watch carefully. You can also place dry paper towels under the pipes — wherever they get wet points to the source. A drip that only appears when water is running is drain-side; one that drips constantly is supply-side.",
    },
    {
      q: "Can I fix a dripping P-trap myself?",
      a: "Usually yes. P-traps are held by slip-joint nuts that can be loosened by hand or with pliers. If the gasket inside is worn, replacement P-trap kits cost under $15 at any hardware store. Just have a bucket ready — there will be water in the trap.",
    },
    {
      q: "What does it mean if the area under my sink always smells musty?",
      a: "A persistent musty smell usually means moisture has been present long enough for mold or mildew to grow — on the cabinet interior, in the drain connections, or behind the cabinet wall. Clean visible mold with a mold-killing product, fix the drip, and leave the cabinet doors open to dry out.",
    },
  ],
  relatedIssues: [
    { label: "Plumbing Leaks", href: "/issues/plumbing" },
    { label: "Water Around Water Heater", href: "/issues/water-around-water-heater" },
    { label: "Mold & Moisture", href: "/issues/mold-moisture" },
    { label: "Musty Smell in Bathroom", href: "/issues/musty-smell-bathroom" },
  ],
  parentCategory: { label: "Plumbing Leaks", href: "/issues/plumbing" },
};

export default function DrippingUnderSink() {
  return <IssueDetailPage data={data} />;
}
