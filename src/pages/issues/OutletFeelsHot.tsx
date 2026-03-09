import { IssueDetailPage } from "@/components/IssueDetailPage";
import type { IssueDetailData } from "@/components/IssueDetailPage";

const data: IssueDetailData = {
  slug: "outlet-feels-hot",
  seoTitle: "Electrical Outlet Feels Hot — Causes, Fire Risk & What to Do Now",
  seoDescription: "A hot electrical outlet is a potential fire hazard. Learn what causes outlets to overheat, when it's dangerous, and what steps to take immediately.",
  heading: "Electrical Outlet Feels Hot to the Touch",
  bluf: "A warm or hot outlet is not normal and should be taken seriously. It can indicate an overloaded circuit, loose wiring, a failing outlet, or undersized wiring — all of which can create fire risk. Unplug devices from the outlet immediately. If the outlet is discolored, smells burnt, or the wall behind it is warm, turn off the circuit at the breaker and call a licensed electrician. Do not continue using a hot outlet.",
  meaning: "Outlets generate some warmth when delivering power to high-draw devices like space heaters or hair dryers. But an outlet that is noticeably hot — especially when nothing high-draw is plugged in — signals that electrical resistance is building up somewhere in the circuit. That resistance converts electrical energy into heat, which can ignite surrounding materials inside the wall. This is one of the leading causes of residential electrical fires.",
  symptoms: [
    "Outlet faceplate feels warm or hot when you touch it",
    "Discoloration, scorch marks, or melting on the outlet or cover plate",
    "Burning or acrid plastic smell near the outlet",
    "Plugs fit loosely in the outlet or fall out easily",
    "Devices plugged into the outlet flicker, buzz, or do not work reliably",
    "The wall around the outlet feels warm to the touch",
    "Circuit breaker for that circuit trips frequently",
  ],
  causes: [
    "Overloaded circuit — too many devices drawing power through a single circuit",
    "Loose wiring connections — wire nuts, backstab connections, or terminal screws that have loosened over time create high-resistance points",
    "Worn-out outlet — the internal contacts degrade after years of use, especially with frequent plugging and unplugging",
    "Undersized wiring — older homes may have 14-gauge or even aluminum wiring on circuits that now carry heavier loads",
    "Damaged insulation — wiring insulation that has cracked or deteriorated inside the wall",
    "Dimmer switch or smart switch generating heat — some electronic switches produce warmth by design, but excessive heat is not normal",
  ],
  urgency: {
    text: "A hot outlet is one of the few home issues that should be treated as urgent. Electrical fires can start inside walls where you cannot see them.",
    items: [
      "The outlet is discolored, scorched, or smells burnt",
      "The wall behind the outlet is warm",
      "You hear buzzing or crackling from the outlet",
      "Sparks are visible when plugging or unplugging a device",
      "The outlet is in a bedroom, nursery, or area near combustible materials",
    ],
  },
  diy: [
    "Unplug all devices from the hot outlet immediately",
    "Avoid using that outlet until it has been inspected",
    "Check if the outlet is on a circuit with too many devices and redistribute the load",
    "If you are experienced with electrical work and the outlet is a simple worn-out receptacle, replacing it is straightforward — but turn off the breaker and verify with a voltage tester first",
  ],
  callPro: [
    "The outlet is discolored, melted, or smells burnt — do not use it",
    "The wall behind the outlet is warm to the touch",
    "You are not comfortable working with electrical wiring",
    "The home has aluminum wiring (common in homes built between 1965–1975)",
    "Multiple outlets on the same circuit are warm or have issues",
    "The breaker for that circuit trips repeatedly",
  ],
  safety: "Electrical fires are a leading cause of house fires. If you see sparks, smell burning, or notice scorch marks, turn off the breaker for that circuit immediately and do not reset it until a licensed electrician has inspected it. If you are unsure which breaker controls the outlet, turn off the main breaker.",
  insurance: "Homeowners insurance typically covers fire damage, including damage caused by electrical faults. However, insurers may deny claims if the fire resulted from known but unrepaired electrical hazards. Document any outlet issues and repair them promptly.",
  faqs: [
    {
      q: "Is it normal for an outlet to feel slightly warm?",
      a: "A faint warmth during heavy use — like a space heater or vacuum running — is borderline acceptable. An outlet that feels noticeably hot, or that is warm when nothing demanding is plugged in, is not normal. Unplug devices and investigate.",
    },
    {
      q: "Can a hot outlet cause a fire?",
      a: "Yes. Heat building up in outlet wiring is a leading cause of residential electrical fires — many of which start inside walls and go undetected until significant damage has occurred. A hot outlet is a symptom that should be investigated, not ignored or worked around.",
    },
    {
      q: "What should I do right now if my outlet feels hot?",
      a: "Unplug everything from that outlet. If it feels very hot, smells burnt, or the surrounding wall is warm, turn off the circuit at the breaker. Do not use that outlet again until a licensed electrician has inspected it — even if it seems to 'work fine.'",
    },
    {
      q: "Could the device I'm plugging in be causing the heat, not the outlet?",
      a: "Sometimes. A faulty appliance can heat up the plug and make the outlet face feel warm. Unplug the device and check if the outlet cools down within a few minutes. If the outlet still feels warm with nothing plugged in, the issue is in the wiring or the outlet itself.",
    },
  ],
  relatedIssues: [
    { label: "Electrical Warning Signs", href: "/issues/electrical" },
    { label: "HVAC Blowing Warm Air", href: "/issues/hvac-blowing-warm-air" },
  ],
  parentCategory: { label: "Electrical Warning Signs", href: "/issues/electrical" },
};

export default function OutletFeelsHot() {
  return <IssueDetailPage data={data} />;
}
