import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "hvac-blowing-warm-air",
  seoTitle: "AC Blowing Warm Air — Causes, Quick Checks & When to Call HVAC Tech",
  seoDescription: "If your AC is blowing warm or lukewarm air, check the thermostat, filter, and outdoor unit before calling a technician. Learn the most common causes and fixes.",
  heading: "HVAC Blowing Warm Air Instead of Cold",
  bluf: "When your air conditioner blows warm air, the cause is often something simple: a thermostat set to the wrong mode, a clogged air filter restricting airflow, or a tripped breaker on the outdoor unit. Check these three things first. If the basics are fine, the problem is likely a refrigerant leak, a failed compressor, or a frozen evaporator coil — all of which require a licensed HVAC technician.",
  meaning: "An AC system that runs but does not cool is working against you — it circulates warm air while consuming electricity. The longer it runs without cooling, the harder the compressor works, which can shorten equipment life. Most causes are mechanical and not dangerous, but a completely failed system in extreme heat can become a health concern for vulnerable people.",
  symptoms: [
    "Air blowing from vents feels warm or room temperature instead of cool",
    "Thermostat shows the AC is running but the set temperature is never reached",
    "The outdoor condenser unit is not running or making unusual noises",
    "Ice forming on the refrigerant lines or the indoor evaporator coil",
    "Higher-than-usual electric bills without increased usage",
    "Short-cycling — the system turns on and off rapidly without cooling the house",
    "Weak airflow from some or all vents",
  ],
  causes: [
    "Thermostat set to 'heat' or 'fan only' instead of 'cool' — more common than people expect",
    "Dirty air filter — a clogged filter restricts airflow and can cause the evaporator coil to freeze",
    "Tripped circuit breaker — the indoor unit runs but the outdoor condenser has no power",
    "Low refrigerant — a leak in the system reduces cooling capacity progressively",
    "Failed compressor — the compressor motor burns out, usually after years of service",
    "Frozen evaporator coil — caused by low refrigerant, poor airflow, or running the AC when outdoor temps are too low",
    "Dirty condenser coils — debris around the outdoor unit blocks heat dissipation",
  ],
  urgency: {
    text: "A warm-blowing AC is not a safety emergency in most cases, but in extreme heat it can become a health concern. Address it within a day or two during hot weather.",
    items: [
      "Elderly, very young, or medically vulnerable people are in the home during a heat event",
      "You hear grinding, screeching, or banging from the outdoor unit",
      "You smell something burning near the air handler or outdoor unit",
      "Ice has completely encased the refrigerant lines or indoor coil",
    ],
  },
  diy: [
    "Check and correct the thermostat mode — make sure it's set to 'cool' and the temperature is set below current room temp",
    "Replace the air filter if it's been more than 60–90 days",
    "Check the breaker panel — reset the breaker for the outdoor condenser if it tripped",
    "Clear debris, leaves, and weeds from around the outdoor unit (maintain 2 feet of clearance)",
    "If the coil is frozen, turn the system to 'fan only' for a few hours to let it thaw before restarting",
  ],
  callPro: [
    "The system still blows warm after checking the thermostat, filter, and breaker",
    "You suspect a refrigerant leak — this requires EPA-certified handling",
    "The outdoor unit makes loud or unusual mechanical noises",
    "The system short-cycles repeatedly",
    "The unit is more than 12–15 years old and has had recurring issues",
  ],
  safety: "Never attempt to recharge refrigerant yourself — it requires EPA certification and specialized equipment. If you smell burning near the HVAC system, turn it off at the breaker and call a technician.",
  insurance: "HVAC repairs and refrigerant recharges are maintenance costs and not covered by homeowners insurance. Some home warranty plans cover HVAC mechanical failures — check your warranty if you have one.",
  faqs: [
    {
      q: "What's the first thing to check if my AC is blowing warm air?",
      a: "Check the thermostat — confirm it's set to 'cool' (not 'fan only' or 'heat') and the target temperature is below the current room temperature. Then check the air filter and the breaker for the outdoor condenser unit. These three checks resolve the issue a surprising percentage of the time.",
    },
    {
      q: "Can a dirty air filter really cause the AC to blow warm air?",
      a: "Yes. A severely clogged filter restricts airflow so much that the evaporator coil can freeze over. Once frozen, it cannot absorb heat, so air comes out warm or room temperature. Replace the filter, switch the system to 'fan only' to let the coil thaw (a few hours), then restart in 'cool' mode.",
    },
    {
      q: "How do I know if I'm low on refrigerant?",
      a: "Signs of low refrigerant: the AC runs constantly but barely cools, ice forms on the refrigerant lines or indoor coil, or you hear a faint hissing near the unit. Refrigerant doesn't 'run out' — if it's low, there's a leak. You cannot add refrigerant yourself; it requires EPA certification.",
    },
    {
      q: "My AC worked fine yesterday. Why is it blowing warm air today?",
      a: "Sudden failures are often a tripped breaker on the outdoor unit, a thermostat that changed modes, or a failed capacitor — the most common single-component failure in an AC unit. A capacitor replacement is a quick, inexpensive repair that a technician can usually complete in under an hour.",
    },
  ],
  relatedIssues: [
    { label: "HVAC Problems", href: "/issues/hvac" },
    { label: "Electrical Warning Signs", href: "/issues/electrical" },
  ],
  parentCategory: { label: "HVAC Problems", href: "/issues/hvac" },
};

export default function HvacBlowingWarmAir() {
  return <IssueDetailPage data={data} />;
}
