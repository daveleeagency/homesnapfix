export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: BlogCategory;
  publishDate: string;
  updatedDate?: string;
  readingTime: number;
  featured?: boolean;
  isPillar?: boolean;
  excerpt: string;
  content: string;
}

export type BlogCategory =
  | "water-damage-leaks"
  | "roof-ceiling"
  | "hvac-air"
  | "cracks-walls-foundation"
  | "mold-moisture"
  | "electrical"
  | "diy-vs-pro"
  | "home-maintenance"
  | "repair-guides";

export const blogCategories: Record<BlogCategory, { label: string; description: string }> = {
  "water-damage-leaks": {
    label: "Water Damage & Leaks",
    description: "Identifying, assessing, and addressing water damage in your home",
  },
  "roof-ceiling": {
    label: "Roof & Ceiling Issues",
    description: "Spotting roof leaks, ceiling stains, and structural ceiling problems",
  },
  "hvac-air": {
    label: "HVAC & Air Problems",
    description: "Troubleshooting heating, cooling, and air quality issues",
  },
  "cracks-walls-foundation": {
    label: "Cracks, Walls & Foundation",
    description: "Understanding wall cracks, foundation issues, and structural concerns",
  },
  "mold-moisture": {
    label: "Mold & Moisture",
    description: "Dealing with mold, mildew, and excess moisture in your home",
  },
  "electrical": {
    label: "Electrical Warning Signs",
    description: "Recognizing electrical hazards and knowing when to call an electrician",
  },
  "diy-vs-pro": {
    label: "DIY vs Call a Pro",
    description: "Knowing when you can handle it yourself and when to hire help",
  },
  "home-maintenance": {
    label: "Home Maintenance",
    description: "Preventive care, seasonal checklists, and keeping your home in good shape",
  },
  "repair-guides": {
    label: "Repair Guides",
    description: "Step-by-step guidance for common home repairs",
  },
};

export const blogPosts: BlogPost[] = [
  // PILLAR ARTICLE
  {
    slug: "homeowner-guide-to-spotting-home-damage-early",
    title: "The Homeowner's Guide to Spotting Home Damage Early — Before Small Problems Become Expensive Repairs",
    metaDescription: "Learn how to identify early warning signs of water damage, foundation issues, roof leaks, mold, and HVAC problems before they become costly repairs. Practical advice for every homeowner.",
    category: "home-maintenance",
    publishDate: "2026-02-15",
    updatedDate: "2026-03-08",
    readingTime: 16,
    featured: true,
    isPillar: true,
    excerpt: "Most expensive home repairs start as small, easy-to-miss warning signs. This guide walks you through what to look for in every part of your home — ceilings, walls, floors, plumbing, roofing, and HVAC — so you can catch problems early and save thousands.",
    content: `
## The Short Answer

Most major home repairs — the kind that cost thousands — start as something small. A faint stain on the ceiling. A hairline crack near a door frame. A musty smell that comes and goes. The homeowners who catch these signs early spend far less on repairs than those who wait until something fails visibly.

This guide covers the most common early warning signs organized by area of the house, what each sign usually means, when you can handle it yourself, and when it's time to call a professional.

---

## Why Early Detection Matters

Here's a pattern we see repeatedly: a homeowner notices a small water stain on the ceiling, assumes it's cosmetic, and paints over it. Six months later, the drywall is sagging and there's mold growing behind it. What could have been a $200 repair is now a $3,000 problem.

Early detection isn't about being paranoid — it's about knowing what to look for so you can make informed decisions. Most of the warning signs in this guide take less than a minute to check.

---

## Water Damage Warning Signs

Water is the single most destructive force in residential homes. It's also one of the sneakiest — water damage often hides behind walls, under floors, and above ceilings for weeks before you notice.

### What to Watch For

- **Brown or yellowish stains on ceilings** — This almost always means water is reaching the drywall from above, whether from a roof leak, a burst pipe, or condensation from HVAC equipment. The stain shape often tells you something: a ring pattern suggests an intermittent leak; a spreading stain suggests an active one. [Learn more about ceiling stains](/issues/brown-water-stain-ceiling).

- **Warped or buckled flooring** — When hardwood or laminate flooring starts to cup, crown, or buckle, moisture is almost always the cause. Check for leaks from nearby plumbing fixtures, appliances, or foundation seepage.

- **Peeling paint or bubbling wallpaper** — Paint doesn't peel on its own in a dry environment. If you see peeling, especially in bathrooms, kitchens, or along exterior walls, moisture is getting behind the surface. [Read about peeling paint and moisture](/issues/peeling-paint-moisture).

- **Dripping or pooling under sinks** — Open your under-sink cabinets and look. Dampness, warped cabinet floors, or a musty smell are signs of a slow leak that may have been dripping for a while. [Dripping under sink: what to check first](/issues/dripping-under-sink).

- **Water around the base of your water heater** — Any pooling or dampness around a water heater is a warning sign. It may be a minor valve issue or an early sign of tank failure. [What to check if you see water near your water heater](/issues/water-around-water-heater).

### When to Act

Small, isolated stains from a known event (like a one-time overflow) can often be monitored. But if a stain is growing, if you can't identify the source, or if you see water actively dripping, address it within days — not weeks.

---

## Roof and Ceiling Warning Signs

Your roof protects everything underneath it. When it starts to fail, the damage cascades downward through insulation, drywall, wiring, and framing.

### What to Watch For

- **Missing, cracked, or curling shingles** — You can often spot these from the ground with binoculars. Missing shingles after a storm are obvious, but curling or cracking shingles indicate aging that will lead to leaks eventually. [More about roof issues](/issues/roofing).

- **Granules in your gutters** — Asphalt shingles shed granules as they age. If you're finding significant amounts of granule buildup in gutters or at downspouts, the shingles are deteriorating and may need replacement within a few years.

- **Soft spots on the ceiling** — Press gently on any ceiling stain. If the drywall feels soft or spongy, water has been sitting there long enough to weaken the material. This needs attention soon. [Read about soft spots on ceilings](/issues/soft-spot-ceiling).

- **Daylight visible in the attic** — If you can see daylight coming through your roof boards when you're in the attic, water can get in too. Check for signs of moisture around those spots.

- **Ice dams in winter** — If ice builds up along your roof edges and icicles form, it usually means warm air from the house is melting snow on the roof, which then refreezes at the eaves. This can force water under shingles.

### When to Act

Active leaks during rain are urgent — [use a tarp if needed and call a roofer](/issues/roofing). Aging shingles and minor wear can usually wait for a scheduled inspection and repair, but don't wait more than a season.

---

## Foundation and Structural Warning Signs

Foundation issues cause more anxiety than almost any other home problem, partly because repairs can be expensive. The good news is that most cracks homeowners find are cosmetic or minor. Knowing the difference matters.

### What to Watch For

- **Hairline cracks in basement walls or foundation** — Thin, vertical cracks (less than 1/16 inch wide) are extremely common and usually result from normal concrete curing and settling. They're worth monitoring but rarely serious. [Learn about hairline foundation cracks](/issues/hairline-foundation-crack).

- **Diagonal cracks at door and window corners** — These often appear above doors and windows, running at roughly 45 degrees. They usually indicate settling. If they're narrow and stable, they're typically cosmetic. If they're widening, get a structural opinion. [Read about cracked drywall above doors](/issues/cracked-drywall-above-door).

- **Sticking doors or windows** — A door that suddenly won't close properly could indicate shifting in the structure. One sticky door might just be seasonal humidity. Multiple doors and windows becoming difficult to operate suggests something structural may be moving.

- **Gaps between walls and ceiling or floor** — Visible gaps opening between the wall surface and the ceiling or floor line can indicate settling or structural movement. Document the size and check again in a few months.

- **Sloping or uneven floors** — All houses have some minor unevenness. But if you can feel a noticeable slope, or if a ball rolls consistently in one direction, it's worth investigating.

### When to Act

Hairline cracks in concrete can be monitored. Cracks wider than 1/4 inch, horizontal cracks in basement walls, or cracks that are visibly growing should be evaluated by a structural professional. [Visit our foundation guide](/issues/foundation-cracks).

---

## Mold and Moisture Warning Signs

Mold is both a health concern and a sign of an underlying moisture problem. Getting rid of visible mold without fixing the moisture source means it will come back.

### What to Watch For

- **Musty smell in bathrooms or basements** — That distinctive "old house" smell is usually mold or mildew growing somewhere you can't see — behind walls, under flooring, or inside HVAC ducts. [Common causes of musty bathroom smells](/issues/musty-smell-bathroom).

- **Visible mold on grout, caulk, or drywall** — Small patches of mold on bathroom grout or caulk are common and manageable. Mold on drywall is more concerning because it suggests moisture has penetrated the wall surface. [Visit our mold & moisture guide](/issues/mold-moisture).

- **Condensation on windows** — Some condensation on cold mornings is normal. Persistent condensation, especially between double-pane windows, indicates a humidity problem or a failed window seal.

- **Peeling paint in wet areas** — When paint peels in bathrooms, laundry rooms, or kitchens, it's a sign that moisture is reaching the wall surface faster than it can dry. Ventilation is usually part of the solution. [Read about peeling paint and moisture](/issues/peeling-paint-moisture).

### When to Act

Small surface mold on grout can be cleaned and prevented with better ventilation. Mold on drywall, persistent musty smells, or mold covering more than about 10 square feet should be addressed by a professional. [Learn more about mold and moisture](/issues/mold-moisture).

---

## HVAC Warning Signs

Heating and cooling systems don't usually fail without warning. Catching early signs of trouble can prevent breakdowns during the worst possible weather.

### What to Watch For

- **HVAC blowing warm air when it should be cooling** — This could be as simple as a dirty filter or a tripped breaker, or as serious as a refrigerant leak or compressor failure. [Start with these first steps](/issues/hvac-blowing-warm-air).

- **Unusual noises** — Banging, squealing, or grinding sounds from your furnace or AC unit are not normal. They usually indicate a mechanical problem that will get worse if ignored.

- **Higher-than-usual energy bills** — If your energy usage spikes without a change in weather or habits, your HVAC system may be working harder than it should due to a failing component, duct leak, or dirty system.

- **Rooms that won't heat or cool evenly** — One room that's always too hot or too cold often points to ductwork issues, an improperly sized system, or blocked vents. [Learn more about HVAC issues](/issues/hvac).

### When to Act

A complete failure to heat or cool is obviously urgent in extreme weather. Strange noises, short-cycling (turning on and off frequently), and rising energy bills should be investigated within a week or two.

---

## Electrical Warning Signs

Electrical problems are the one category where caution is always the right approach. Electrical issues can cause fires, and most electrical work should be done by a licensed electrician.

### What to Watch For

- **Outlets that feel warm to the touch** — An outlet that feels warm when nothing is plugged in, or unusually hot when something is, could indicate a wiring problem. [Read about hot outlets](/issues/outlet-feels-hot).

- **Frequent breaker trips** — A breaker that trips occasionally when you're running multiple high-draw appliances might just be overloaded. A breaker that trips repeatedly or without an obvious cause needs investigation.

- **Flickering lights** — Occasional flickers during a storm are normal. Persistent flickering, especially in multiple rooms, can indicate loose wiring or an overloaded circuit. [Visit our electrical guide](/issues/electrical).

- **Burning smell near outlets or switches** — This is a serious warning sign. If you smell something burning near an outlet, switch, or electrical panel, stop using it immediately and call an electrician.

- **Two-prong outlets throughout the house** — While not an immediate hazard, two-prong outlets indicate older wiring that may not be grounded. If the house was built before the 1960s and hasn't been rewired, a professional evaluation is worthwhile.

### When to Act

Burning smells, sparking outlets, and outlets that feel hot are urgent — address them the same day. Flickering lights and frequent breaker trips should be investigated within a week. [Learn more about electrical warning signs](/issues/electrical).

---

## Plumbing Warning Signs

Plumbing problems have a way of starting small and escalating quickly. A drip today can be a flood next month.

### What to Watch For

- **Slow drains** — A single slow drain is usually a localized clog. Multiple slow drains at the same time could indicate a main sewer line issue.

- **Running toilet** — A toilet that runs intermittently or continuously is wasting water and usually needs a flapper or fill valve replacement — a straightforward DIY repair.

- **Low water pressure** — Sudden loss of water pressure could be a supply issue, a leak, or mineral buildup in pipes. Gradual loss over months often indicates pipe corrosion.

- **Water spots on the ceiling below a bathroom** — If you see a water stain on a ceiling and there's a bathroom directly above, the likely culprit is a failed wax ring, a supply line leak, or a drain connection issue. [Learn more about plumbing issues](/issues/plumbing).

### When to Act

Active leaks need immediate attention — turn off the water supply to the affected fixture if possible. Slow drains and running toilets can usually wait a few days but shouldn't be ignored for weeks.

---

## How to Do a Quick Home Walk-Through

You don't need to be an expert to catch most of these warning signs. A 15-minute walk-through once a season covers the basics:

1. **Walk the perimeter outside** — Look for foundation cracks, gaps around windows, damaged siding, and gutters pulling away from the roofline.

2. **Check the roof from the ground** — Use binoculars if needed. Look for missing shingles, sagging areas, or damaged flashing around chimneys and vents.

3. **Open every under-sink cabinet** — Look for dampness, warping, or musty smells.

4. **Look at every ceiling** — Scan for stains, cracks, or soft spots, especially below bathrooms and near exterior walls.

5. **Test all doors and windows** — Note any that stick, won't latch, or have new gaps.

6. **Check your water heater** — Look for pooling, rust, or dampness at the base.

7. **Listen to your HVAC** — Turn it on and listen for unusual sounds. Check that all vents are blowing.

8. **Inspect your attic** — If accessible, look for daylight coming through the roof, signs of moisture, or pest activity.

---

## DIY vs Call a Pro: General Guidelines

Not every problem needs a professional. Here's a general framework:

**Usually DIY-safe:**
- Replacing caulk around tubs and sinks
- Tightening a dripping supply line connection
- Replacing a toilet flapper
- Cleaning surface mold from grout
- Replacing HVAC filters
- Patching small drywall cracks

**Usually needs a professional:**
- Anything involving the electrical panel or wiring
- Roof repairs (fall risk + waterproofing skill)
- Foundation cracks wider than 1/4 inch
- Mold covering more than 10 square feet
- HVAC refrigerant issues
- Main sewer line problems

[Read more about when to DIY and when to call a pro](/blog/diy-or-call-a-pro-how-to-decide).

---

## Frequently Asked Questions

### How often should I inspect my home for damage?

A thorough walk-through once per season (four times a year) is a good baseline. You should also do a targeted check after any major storm, heavy rain, or freeze/thaw cycle. Some items — like checking under sinks and testing smoke detectors — are worth doing monthly.

### What's the most commonly missed warning sign?

Under-sink leaks. Because the cabinet doors hide the plumbing, slow drips can go unnoticed for months. By the time the cabinet floor warps or you notice a smell, mold may have already started. Make it a habit to open those cabinet doors and look.

### Should I worry about every small crack I find?

No. Hairline cracks in drywall and concrete are extremely common and usually result from normal settling. The cracks to watch are ones that are wider than 1/8 inch, growing over time, horizontal (in foundation walls), or accompanied by other signs like sticking doors or uneven floors.

### How do I know if water damage is urgent?

Active dripping or flowing water is always urgent — find the source and shut off the water supply if possible. Stains that are dry and not growing can usually be investigated at your own pace, but don't wait more than a week or two. If drywall feels soft or you see active mold growth, move quickly.

### Is it worth getting a professional home inspection even if nothing seems wrong?

Yes, especially for homes older than 15 years. A professional inspector can catch issues in places you can't easily access — inside walls, on the roof surface, and in the HVAC system. Many problems that are expensive to fix at an advanced stage are cheap to address when caught early.

---

## What to Do If You Find Something

1. **Don't panic.** Most of what homeowners find during inspections is minor or cosmetic.
2. **Document it.** Take a photo with something for scale (a coin or ruler works). Note the date.
3. **Identify the category.** Is it water, structural, electrical, or HVAC-related?
4. **Check our issue guides.** HomeSnapFix has detailed guides for [plumbing issues](/issues/plumbing), [foundation concerns](/issues/foundation-cracks), [mold and moisture](/issues/mold-moisture), [electrical problems](/issues/electrical), [HVAC troubles](/issues/hvac), and [roof damage](/issues/roofing).
5. **Use our diagnosis tool.** If you're not sure what you're looking at, [upload a photo for a free AI-assisted assessment](/diagnose).
6. **Decide: DIY or pro?** Use our guides to help you decide, and if you need a contractor, [we can help you find one](/pros).
`
  },

  // SUPPORTING ARTICLES

  {
    slug: "what-brown-ceiling-stain-usually-means",
    title: "What a Brown Ceiling Stain Usually Means — And What to Do About It",
    metaDescription: "Brown or yellow stains on your ceiling usually mean water damage. Learn the most common causes, how to identify the source, and whether you need a repair professional.",
    category: "water-damage-leaks",
    publishDate: "2026-02-20",
    readingTime: 7,
    excerpt: "That brownish ring on your ceiling isn't just cosmetic. It's almost always a sign that water reached the drywall from somewhere above. Here's how to figure out what's causing it and what to do next.",
    content: `
## The Short Answer

A brown or yellowish stain on your ceiling almost always means water has reached the drywall from above. The most common sources are roof leaks, plumbing leaks from an upstairs bathroom, HVAC condensation, or ice dam damage. The stain itself isn't dangerous, but the water causing it can lead to mold, structural damage, and more expensive repairs if ignored.

---

## Why Ceiling Stains Are Worth Investigating

It's tempting to paint over a ceiling stain and move on. But the stain is a symptom, not the problem. Until you identify and fix the water source, the stain will come back — and the hidden damage behind it will keep getting worse.

Here's what can happen if you ignore a ceiling stain:

- **Mold growth** — Damp drywall is an ideal environment for mold. It can start growing within 24-48 hours of getting wet and may spread behind the surface where you can't see it.
- **Structural weakening** — Persistent moisture weakens drywall, and if it reaches the framing or joists above, it can compromise structural integrity over time.
- **Pest attraction** — Damp wood attracts termites and carpenter ants, which compound the damage.
- **Larger repair bills** — A $200 roof patch left unaddressed can become a $3,000 drywall-and-mold remediation job within a year.

---

## Most Common Causes

### Roof Leak

If the stain is on a top-floor ceiling, a roof leak is the most likely cause. Water enters through damaged shingles, deteriorated flashing around chimneys or vents, or gaps in the roof membrane. It often travels along rafters or sheathing before dripping down, so the stain on your ceiling may not be directly below the leak.

**Clue:** The stain gets darker or larger after heavy rain.

### Plumbing Leak From Above

If there's a bathroom, kitchen, or laundry room directly above the stain, a plumbing leak is a strong possibility. Common culprits include a failed wax ring under a toilet, a leaking supply line, a cracked drain pipe, or deteriorated caulking around a tub or shower.

**Clue:** The stain is located directly below a bathroom fixture or the stain appears regardless of weather.

### HVAC Condensation

Air conditioning systems produce condensation, which is normally routed away through a drain line. If the drain line clogs, the condensation pan overflows, or ductwork in the attic sweats due to poor insulation, water can drip onto the ceiling below.

**Clue:** The stain appears or worsens during air conditioning season and is near or below HVAC equipment.

### Ice Dam Damage

In cold climates, ice dams form when warm air from the house melts snow on the roof, which then refreezes at the eaves. The ice buildup forces water under the shingles, and it can seep through the roof deck into the ceiling below.

**Clue:** The stain appears along an exterior wall or near the eaves after a freeze/thaw cycle.

### Old or One-Time Leak

Sometimes a stain is from a past event — a one-time overflow, a roof leak that was already repaired, or construction moisture that dried out. If the stain is stable (not growing), dry to the touch, and has been there since a known event, it may truly be cosmetic.

**Clue:** The stain hasn't changed size or color in months, and the area feels completely dry.

---

## How to Identify the Source

1. **Check the weather connection.** Does the stain grow or darken after rain? That points to a roof leak or exterior water entry.

2. **Check what's above it.** Is there a bathroom, kitchen, or laundry room? Run water in the fixtures above and watch for dripping.

3. **Check your attic.** If you have attic access, look for signs of moisture — water stains on rafters, damp insulation, or daylight coming through the roof.

4. **Touch the stain.** Press gently on the stained area. If it feels soft or spongy, the drywall is saturated and the problem is active. If it's dry and firm, the leak may be resolved or intermittent.

5. **Look for patterns.** A ring pattern with a dry center often indicates intermittent leaking. A continuously spreading stain suggests ongoing moisture.

---

## What to Do Next

### If the Stain Is Active (Wet, Soft, or Growing)

- **Find and stop the water source.** If it's a plumbing leak, shut off the water supply to the affected fixture. If it's a roof leak during rain, contain the drip with a bucket and contact a roofer.
- **Don't just paint over it.** The stain will bleed through, and the moisture will continue causing damage.
- **Check for mold.** Look at the back side of the drywall if possible, and check the surrounding area for musty smells.
- **Document the damage.** Take photos with dates. If you file an insurance claim later, documentation from the early stages is valuable.

### If the Stain Is Old and Dry

- **Confirm it's truly dry.** Press on it firmly. Use a moisture meter if you have one.
- **Prime with a stain-blocking primer.** Regular paint won't cover a water stain — the tannins will bleed through. Use a shellac-based or oil-based stain-blocking primer first, then paint over it.
- **Monitor it.** Check the area after the next heavy rain or after running the fixture above. If the stain returns, the problem isn't fully resolved.

---

## DIY vs Call a Pro

**You can usually handle it yourself if:**
- The source is an obvious plumbing connection you can tighten or reseal
- The stain is from a known one-time event and the area is dry
- You're comfortable priming and repainting the ceiling

**Call a professional if:**
- You can't identify the source of the water
- The drywall feels soft, spongy, or is sagging
- You see or smell mold
- The stain is on a top-floor ceiling and you suspect a roof leak (roof work involves fall risk)
- The stain is large (more than a few square feet) or keeps returning

[Use our diagnosis tool to get a quick assessment](/diagnose) or [find a local contractor](/pros).

---

## Frequently Asked Questions

### Can I just paint over a ceiling stain?

Not with regular paint. Water stains contain tannins that bleed through standard latex paint. You need to use a stain-blocking primer (shellac-based works best) before repainting. But more importantly, only paint over a stain after you've confirmed the water source is fixed and the area is completely dry.

### How quickly does mold grow behind a ceiling stain?

Mold can begin growing within 24 to 48 hours on damp drywall. If a ceiling stain has been wet for more than a day or two, there's a reasonable chance mold is starting to develop on the back side of the drywall, even if you can't see it from the room.

### Does homeowner's insurance cover ceiling stains?

Generally, insurance covers sudden and accidental water damage (like a burst pipe) but not gradual leaks or maintenance issues. If a pipe suddenly fails and damages your ceiling, the resulting drywall and mold remediation is often covered. A slow leak you've been ignoring for months is usually not. Document the damage with photos either way.

### Should I cut open the ceiling to investigate?

If the drywall is soft or sagging, cutting it open may be necessary to assess the damage and let the area dry. If the stain is dry and stable, there's usually no need to open the ceiling. A moisture meter can help you decide without cutting.

For a detailed guide on this issue, visit our [brown water stain on ceiling](/issues/brown-water-stain-ceiling) page.
`
  },

  {
    slug: "dripping-under-sink-what-to-check-first",
    title: "Dripping Under the Sink: What to Check First",
    metaDescription: "Water dripping under your sink? Here's a step-by-step guide to finding the source, deciding if it's a DIY fix, and knowing when to call a plumber.",
    category: "water-damage-leaks",
    publishDate: "2026-02-22",
    readingTime: 6,
    excerpt: "Under-sink leaks are one of the most common — and most commonly overlooked — plumbing problems. Here's how to find the source and figure out your next step.",
    content: `
## The Short Answer

Water under your sink usually comes from one of three places: the supply lines bringing water in, the drain connections carrying water out, or the faucet itself leaking down through the counter. You can usually narrow it down in five minutes with a flashlight and a paper towel.

---

## Why Under-Sink Leaks Get Missed

Most people don't open their under-sink cabinets regularly. The leak stays hidden behind cleaning supplies and spare sponges until the cabinet floor starts to warp, or a musty smell develops. By then, you may already have mold growing.

Make it a habit to open your under-sink cabinets once a month and look. It takes ten seconds and can save you hundreds of dollars.

---

## Step-by-Step: Finding the Source

### Step 1: Clear Everything Out

Remove everything from under the sink. You need to see the pipes, supply lines, and the underside of the sink basin clearly.

### Step 2: Dry Everything

Wipe down all pipes, connections, and the cabinet floor with a dry towel or paper towels. You need a dry starting point to see where new moisture appears.

### Step 3: Check the Supply Lines (Water In)

Supply lines are the smaller tubes or braided hoses connecting the shut-off valves (on the wall) to the faucet. They're under constant water pressure, so a leak here drips even when you're not using the sink.

- Feel around each connection point — where the line meets the valve and where it meets the faucet.
- Look for mineral deposits (white or greenish crust), which indicate a slow, long-term drip.
- Check the valves themselves — the handle/knob part can leak at the stem.

**If water appears here without running the faucet, it's a supply-side leak.**

### Step 4: Check the Drain Connections (Water Out)

Turn on the faucet and let water run for about 30 seconds. Watch the drain connections:

- The tailpiece (the straight pipe coming down from the drain)
- The P-trap (the curved section)
- The connection to the wall drain pipe
- If you have a garbage disposal, check the connections at the top and side

**If water only appears when you're running the faucet, it's a drain-side leak.**

### Step 5: Check the Faucet Base

With the faucet running, look at the base of the faucet where it meets the countertop. Rock the faucet gently. If water seeps from under the base and drips down through the counter hole, the faucet seals are failing.

---

## Common Fixes

### Loose Slip-Joint Nut (Drain Side)

The nuts connecting P-trap sections are often hand-tightened during installation. They can loosen over time. Try snugging them with channel-lock pliers — a quarter turn is often all it takes. Don't overtighten, especially on plastic fittings.

### Worn Supply Line Washer

If a supply line connection is dripping, turn off the water supply to that line, disconnect it, and check the rubber washer inside. Replacement washers cost less than a dollar and are available at any hardware store.

### Failed P-Trap Gasket

If the P-trap connection is leaking, the gasket (rubber or nylon washer) between the sections may be worn. Replacement P-trap kits cost $8-15 and are a straightforward swap — just have a bucket ready for the water in the trap.

### Faucet Base Leak

Faucet base leaks usually require removing the faucet, replacing the O-rings or gaskets underneath, and reinstalling. This is more involved than a simple pipe connection fix, but still within DIY range for most homeowners.

### Corroded or Cracked Pipe

If a pipe itself (not a connection) is leaking — because it's corroded, cracked, or has a pinhole — replacement is the fix. PVC sections are easy to swap. Corroded metal pipes may need a plumber, especially in older homes with galvanized steel plumbing.

---

## DIY vs Call a Pro

**DIY-friendly:**
- Tightening loose slip-joint nuts
- Replacing a supply line washer
- Swapping a P-trap
- Replacing a supply line hose

**Call a plumber if:**
- The shut-off valve itself is leaking and you can't stop it
- The leak involves a garbage disposal or dishwasher connection you're not comfortable with
- You see corroded metal pipes and aren't sure about replacement
- There's mold growth on the cabinet walls or behind the cabinet
- Water has damaged the subfloor beneath the cabinet

---

## Preventing Future Leaks

- Replace braided supply lines every 8-10 years as preventive maintenance, even if they're not leaking
- Avoid using the cabinet directly beneath the sink as a catch-all — keep it organized so you can spot problems early
- Check connections periodically, especially after any plumbing work
- If you have hard water, mineral buildup on connections can indicate slow seepage — clean and retighten

For a more detailed reference, see our complete guide on [dripping under the sink](/issues/dripping-under-sink). If you're dealing with water damage beyond the cabinet, check our [water damage guide](/blog/is-this-water-damage-urgent).

---

## Frequently Asked Questions

### Is a drip under the sink an emergency?

Usually not, but don't ignore it for more than a few days. Even a slow drip can cause mold, rot the cabinet floor, and damage the subfloor. If it's a supply-side leak (dripping constantly), the water waste adds up on your bill, too.

### Can I use plumber's tape to fix a leak?

Plumber's tape (PTFE tape) works on threaded connections, like where a supply line screws into a valve. It doesn't work on slip-joint connections (the kind on P-traps), which use compression fittings and gaskets. Using the wrong fix on the wrong joint is a common DIY mistake.

### How do I know if I need a new faucet vs just a repair?

If the faucet is leaking from the base and is more than 10-15 years old, replacement is often more cost-effective than repair, especially if replacement parts are hard to find. For newer faucets, replacing O-rings and cartridges is usually worthwhile.
`
  },

  {
    slug: "musty-smell-bathroom-common-causes",
    title: "Musty Smell in Your Bathroom: What's Causing It and How to Fix It",
    metaDescription: "A musty smell in the bathroom usually means hidden moisture or mold. Learn the most common causes, where to look, and how to eliminate the smell for good.",
    category: "mold-moisture",
    publishDate: "2026-02-25",
    readingTime: 7,
    excerpt: "That persistent musty smell in your bathroom isn't something you should mask with air freshener. It almost always points to a moisture problem that needs attention. Here's where to look.",
    content: `
## The Short Answer

A persistent musty smell in a bathroom almost always means mold or mildew is growing somewhere, fed by excess moisture. The most common hiding spots are behind the vanity, under the toilet base, inside walls near the shower, in the exhaust fan duct, or on the underside of the subfloor. Finding and fixing the moisture source is the only lasting solution — air fresheners and cleaning products just mask the symptom.

---

## Why Bathrooms Are Mold Magnets

Bathrooms combine everything mold needs: regular moisture, warm temperatures, and organic material to feed on (drywall, wood, grout, caulk). Even well-ventilated bathrooms deal with high humidity cycles multiple times a day.

The difference between a bathroom that smells fine and one that smells musty usually comes down to how well moisture is managed between uses.

---

## Where to Look

### Behind and Under the Vanity

Pull the vanity away from the wall slightly if possible, or use a flashlight to inspect behind it. Water splashing behind the vanity over months and years can create a damp zone where mold grows on drywall, baseboard, or the vanity back panel.

Check under the sink inside the vanity as well — a slow drain leak or supply line drip may have been dampening the interior without your knowledge. [More on under-sink leaks](/blog/dripping-under-sink-what-to-check-first).

### Around and Under the Toilet Base

If the wax ring seal between the toilet and the floor drain has failed, water can seep under the toilet base with each flush. This water sits underneath, soaking into the subfloor and creating an ideal mold environment.

**Signs:** The toilet rocks slightly. You notice discoloration around the base. The flooring near the toilet feels soft.

### In the Shower/Tub Walls

Grout and caulk around tubs and showers break down over time, allowing water to get behind the tile surface. If the wall behind your shower feels spongy, or if grout lines are crumbling, water is likely getting into the wall cavity.

### The Exhaust Fan and Duct

Bathroom exhaust fans are supposed to remove humid air, but if the fan is undersized, rarely used, or the duct doesn't actually vent to the outside (this is more common than you'd expect — some older installations vent into the attic), moisture builds up instead of leaving.

Remove the exhaust fan cover and inspect for mold on the fan blades and inside the housing. Also verify the duct exits the building — venting into the attic just moves the moisture problem upstairs.

### Under the Flooring

In severe cases, moisture has been present long enough to reach the subfloor beneath the bathroom flooring. This is more common with vinyl or linoleum flooring, which can trap moisture underneath without showing visible signs on the surface.

---

## How to Fix It

### Improve Ventilation

- Run the exhaust fan during every shower or bath, and for at least 20-30 minutes afterward
- Make sure the fan actually vents to the outside, not into the attic
- If the fan is weak (you can test by holding a tissue near it — it should hold), replace it with a properly sized unit
- Consider a humidity-sensing fan that runs automatically when moisture levels rise

### Address the Moisture Source

- Re-caulk around tubs, showers, and toilets with mold-resistant silicone caulk
- Re-grout any crumbling or missing grout lines
- Fix any plumbing leaks (supply lines, drain connections, toilet wax ring)
- Repair or replace water-damaged drywall

### Clean Existing Mold

- For surface mold on hard surfaces (tile, grout, glass): Clean with a mold-killing bathroom cleaner or a solution of 1 part bleach to 10 parts water. Scrub, rinse, and dry thoroughly.
- For mold on caulk: It's usually easier to remove the old caulk entirely and apply new mold-resistant caulk rather than trying to clean it.
- For mold on drywall: If mold has penetrated the drywall surface (not just sitting on top), the affected section should be cut out and replaced. Mold doesn't just clean off drywall.

### Manage Ongoing Humidity

- Wipe down shower walls and glass after use to reduce standing moisture
- Leave the bathroom door open after showers to help humidity disperse (or keep the fan running)
- Consider a small dehumidifier for bathrooms with persistent humidity problems
- Check that towels and bath mats dry completely between uses — soggy towels contribute to indoor humidity

---

## When to Call a Professional

- Mold is growing on drywall or inside walls (not just on caulk or grout)
- The musty smell persists after you've cleaned all visible mold and fixed ventilation
- Flooring feels soft or spongy near the toilet or tub
- You suspect the exhaust fan duct is venting into the attic
- The mold-affected area is larger than about 10 square feet

For more details, see our complete guide to [musty smells in the bathroom](/issues/musty-smell-bathroom) and our broader [mold and moisture resource](/issues/mold-moisture).

---

## Frequently Asked Questions

### Is bathroom mold dangerous?

Most bathroom mold (typically Cladosporium, Penicillium, or Aspergillus species) causes irritation rather than serious illness in healthy people. However, people with asthma, allergies, or compromised immune systems can have stronger reactions. Regardless of species, mold means there's a moisture problem worth fixing.

### Will a dehumidifier solve a musty bathroom?

A dehumidifier treats the symptom (high humidity) but not the cause. If the musty smell is from a leak, failed caulk, or poor ventilation, a dehumidifier alone won't fix it. Fix the source first, then use a dehumidifier as a supplement if the bathroom stays humid.

### How do I know if mold is behind my bathroom wall?

Common indicators: persistent musty smell despite cleaning all visible surfaces, paint that bubbles or peels near the shower, drywall that feels soft when pressed, and discoloration that appears on the wall surface from behind. A professional can test with a moisture meter or by cutting an inspection hole.
`
  },

  {
    slug: "when-wall-crack-is-minor-vs-serious",
    title: "When a Wall Crack Is Minor vs Serious: A Homeowner's Guide",
    metaDescription: "Not all wall cracks mean your house is falling apart. Learn which cracks are cosmetic, which ones signal settling, and which need professional evaluation.",
    category: "cracks-walls-foundation",
    publishDate: "2026-02-28",
    readingTime: 8,
    excerpt: "Wall cracks cause more homeowner anxiety than almost any other issue. Here's how to tell the difference between normal settling cracks and ones that actually need attention.",
    content: `
## The Short Answer

Most wall cracks in residential homes are cosmetic — caused by normal settling, seasonal humidity changes, or minor thermal expansion. The cracks that matter are ones that are wider than 1/8 inch, growing over time, horizontal (in basement/foundation walls), stair-stepping along mortar joints, or accompanied by other symptoms like sticking doors or uneven floors.

A crack alone doesn't tell you the whole story. Context matters: where it is, how wide, what direction it runs, and whether it's changing.

---

## Cracks That Are Usually Cosmetic

### Hairline Cracks at Drywall Seams

Thin cracks that appear at drywall joints — especially at ceiling-wall intersections and around door/window frames — are extremely common. They result from the natural movement of the house as temperatures and humidity change. These are the most common cracks homeowners find, and they're almost always cosmetic.

**What to do:** Patch with joint compound, retape if needed, and repaint. Monitor for any changes.

### Small Vertical Cracks in Concrete Foundation

Vertical or slightly diagonal cracks in poured concrete foundations that are less than 1/16 inch wide are usually shrinkage cracks. Concrete shrinks slightly as it cures, and these cracks are a normal byproduct. [More about hairline foundation cracks](/issues/hairline-foundation-crack).

**What to do:** Seal with a concrete crack filler to prevent water intrusion. Monitor for widening.

### Cracks Above Door and Window Frames

Diagonal cracks running from the corner of a door or window frame toward the ceiling are common settling cracks. The openings in a wall are natural stress points, and minor cracking here is expected as a house settles in its first few years. [Read about cracked drywall above doors](/issues/cracked-drywall-above-door).

**What to do:** If the crack is narrow (less than 1/8 inch) and hasn't changed in months, patch and paint. If it's new in an older house, monitor it.

### Cracks in Plaster Walls

Older homes with plaster walls develop cracks more readily than drywall homes. Plaster is rigid, and any slight movement results in cracking. Map-like or spider-web crack patterns in plaster are common and usually cosmetic, though they can indicate the plaster is detaching from the lath beneath.

**What to do:** Cosmetic plaster cracks can be filled and painted. If large sections of plaster feel hollow or loose when you tap on them, the plaster may need reattachment or replacement.

---

## Cracks That Deserve Attention

### Horizontal Cracks in Basement or Foundation Walls

Horizontal cracks in basement walls are among the most concerning. They often indicate lateral pressure from the soil outside pushing inward. This is especially common in homes with heavy clay soil or poor drainage around the foundation.

**What to do:** Have a structural engineer evaluate. Horizontal foundation cracks can indicate a serious structural issue that may worsen over time.

### Stair-Step Cracks in Brick or Block

Cracks that follow the mortar joints in a stair-step pattern usually indicate foundation movement or settling. If these cracks are wide (more than 1/8 inch) or getting wider, the foundation may be shifting unevenly.

**What to do:** Monitor with dated photos. If the crack is active (widening), consult a structural professional.

### Cracks Wider Than 1/4 Inch

Any crack that's more than 1/4 inch wide — regardless of location or direction — is worth professional evaluation. At that width, the movement causing the crack may be significant enough to affect the structure.

### Cracks With Offset (One Side Higher Than the Other)

If the wall surface on one side of a crack is offset — higher, lower, or pushed out — relative to the other side, it indicates structural movement beyond simple shrinkage. This is a meaningful sign.

### New Cracks in an Older Home

A home that's been stable for 20 years suddenly developing cracks is a different situation from a 2-year-old home showing settling cracks. New cracks in older homes can indicate changes in soil conditions, new water patterns (like altered drainage), foundation deterioration, or nearby construction affecting the ground.

---

## How to Monitor a Crack

If you find a crack you're not sure about, monitoring it over time tells you more than any single inspection.

1. **Take a dated photo** with a ruler or coin next to the crack for scale.
2. **Mark the ends** with a pencil and write the date.
3. **Measure the width** at the widest point and record it.
4. **Check again in 3 months** and compare.

A crack that hasn't changed in 6 months is almost certainly stable. A crack that's measurably wider or longer is active and worth professional evaluation.

---

## When to Call a Professional

- Any horizontal crack in a foundation or basement wall
- Cracks wider than 1/4 inch
- Cracks that are measurably widening over time
- Cracks accompanied by sticking doors/windows, uneven floors, or gaps between walls and ceilings
- New cracks appearing in a house more than 10 years old
- Cracks with visible offset (one side displaced relative to the other)

For more about foundation concerns, visit our [foundation cracks guide](/issues/foundation-cracks). If you're not sure how serious a crack is, [upload a photo for a free assessment](/diagnose).

---

## Frequently Asked Questions

### Can I just fill a wall crack and forget about it?

For cosmetic cracks — hairline drywall cracks, small settling cracks, concrete shrinkage cracks — yes, fill, paint, and move on. But if the crack returns after patching, it means movement is ongoing, and the underlying cause should be investigated.

### Do wall cracks affect home value?

Minor cosmetic cracks typically don't affect home value if they're properly patched. Structural cracks (especially in the foundation) can significantly affect value and may need to be disclosed when selling. A structural engineer's report showing the issue has been addressed can help preserve value.

### Should I worry about cracks in a new house?

New houses go through a settling period in the first 2-5 years. Minor cracks at drywall seams and above doors/windows during this period are very common and expected. If the cracks are small, narrow, and not growing rapidly, they're part of normal settling. Most builders will address significant settling cracks under the new-home warranty.

### What causes a wall crack to suddenly appear?

Sudden cracks are often triggered by changes in moisture — heavy rains after drought, plumbing leaks saturating soil near the foundation, or major temperature swings. Nearby construction (excavation, heavy equipment) can also cause new cracks. Changes in drainage patterns around the house are another common trigger.
`
  },

  {
    slug: "signs-water-heater-may-be-leaking",
    title: "Signs Your Water Heater May Be Leaking — And What to Do",
    metaDescription: "Puddles, dampness, or rust near your water heater? Learn what causes water heater leaks, which are minor, and when you need to act quickly.",
    category: "water-damage-leaks",
    publishDate: "2026-03-01",
    readingTime: 6,
    excerpt: "Water near your water heater doesn't always mean the tank has failed. Sometimes it's a minor valve or connection issue. Here's how to tell the difference and what to do next.",
    content: `
## The Short Answer

Water around your water heater can come from several sources: the pressure relief valve, inlet/outlet connections, the drain valve, condensation on the tank, or an actual tank leak. Identifying which one matters because some are easy fixes and others mean the water heater needs replacement.

If the tank itself is leaking (water seeping from the body of the tank), replacement is the only option — tanks can't be repaired once they corrode through.

---

## Where to Look First

### The Temperature and Pressure Relief (T&P) Valve

This safety valve is usually located on the side or top of the tank, with a pipe running down toward the floor. It's designed to release water if pressure or temperature inside the tank gets too high.

If water is dripping from the T&P valve discharge pipe, it could mean:
- The valve is doing its job — pressure is too high (check your water pressure and thermostat setting)
- The valve has failed and needs replacement

**What to do:** If the T&P valve drips occasionally and your water pressure is normal (under 80 psi) and the thermostat is set to 120°F, the valve may need replacement. If it's releasing a lot of water, there may be a pressure issue in your system — call a plumber.

### Inlet and Outlet Connections

The pipes connecting to the top of the water heater can develop leaks at their fittings. Look for moisture or mineral deposits around the connections where the hot and cold water lines meet the tank.

**What to do:** Tighten the connections if they're threaded fittings. If the connections use dielectric unions (common on steel tanks with copper pipes), the union may need replacement.

### The Drain Valve

The drain valve near the bottom of the tank can leak if it's not fully closed, if the washer is worn, or if the valve is corroded.

**What to do:** Make sure the valve is fully closed. If it still drips, you can cap it with a brass cap or replace the valve.

### Condensation

In some conditions — especially when a cold water heater is first filled and heated, or during humid weather — condensation can form on the outside of the tank and drip to the floor. This is not a leak.

**How to tell:** Condensation is temporary and the water appears as a light film over the entire tank surface, not dripping from a specific point. It usually resolves within a few hours as the tank reaches operating temperature.

### The Tank Itself

If water is seeping from the body of the tank — not from any fitting, valve, or connection — the tank has corroded from the inside. This is the one scenario that requires replacement, and it can't be patched or repaired.

**Signs of tank failure:**
- Water is seeping from a rusted area on the tank body
- The tank is more than 8-12 years old
- You've noticed rusty hot water from faucets
- The anode rod was never replaced (most homeowners don't know about this maintenance step)

---

## What to Do If Your Tank Is Leaking

### Minor Leak (Valve or Connection)

1. Turn off the gas or electricity to the water heater (for safety during inspection)
2. Identify the specific source
3. Tighten connections, replace washers, or replace the valve as needed
4. Turn the power back on and monitor

### Major Leak (Tank Failure)

1. Turn off the gas or electricity immediately
2. Turn off the cold water supply to the tank
3. Attach a garden hose to the drain valve and route it to a floor drain or outside
4. Open the drain valve to empty the tank (this reduces the amount of water that can leak)
5. Contact a plumber for replacement

---

## Extending Water Heater Life

Most tank water heaters last 8-12 years. A few maintenance steps can push that toward the higher end:

- **Replace the anode rod every 3-5 years.** The anode rod is a sacrificial metal rod inside the tank that corrodes instead of the tank lining. When it's used up, the tank starts corroding. Replacement rods cost $20-40 and the job takes about 20 minutes.
- **Flush the tank annually.** Sediment builds up at the bottom of the tank, reducing efficiency and accelerating corrosion. Flushing takes about 15 minutes with a garden hose.
- **Keep the thermostat at 120°F.** Higher temperatures accelerate corrosion and waste energy.
- **Check the T&P valve annually.** Lift the lever briefly — water should flow and stop when you release it. If it doesn't, replace the valve.

For more on this topic, visit our detailed guide on [water around the water heater](/issues/water-around-water-heater).

---

## Frequently Asked Questions

### How long can I wait if my water heater is leaking from the tank?

Not long. A corroded tank will not heal itself, and the leak will get worse. A slow seep today can become a full tank release (40-80 gallons of water on your floor) without much warning. Start planning replacement immediately and keep towels or a pan under the leak in the meantime.

### Should I replace with the same type of water heater?

Not necessarily. If your tank water heater has reached the end of its life, this is a natural time to consider alternatives. Tankless (on-demand) water heaters last longer and use less energy but cost more upfront. Heat pump water heaters are highly efficient in moderate climates. Your plumber can help you evaluate the options for your household's hot water usage.

### Is a leaking water heater covered by insurance?

Homeowner's insurance generally covers damage caused by a sudden water heater failure (flooding, drywall damage, etc.) but not the cost of replacing the water heater itself. Gradual leaks that were left unaddressed are typically not covered. Document any water damage with photos before cleanup.
`
  },

  {
    slug: "hvac-blowing-warm-air-first-steps",
    title: "HVAC Blowing Warm Air? First Steps Before Calling for Service",
    metaDescription: "When your AC blows warm air, don't panic. Check these common causes first — some are easy fixes you can handle yourself before scheduling a service call.",
    category: "hvac-air",
    publishDate: "2026-03-02",
    readingTime: 6,
    excerpt: "Your AC is running but the air coming out isn't cold. Before you call for an expensive service visit, there are several things worth checking first. Some of them take less than a minute.",
    content: `
## The Short Answer

When your air conditioner is blowing warm or room-temperature air instead of cold air, the most common causes are a dirty air filter, a tripped breaker, incorrect thermostat settings, a frozen evaporator coil, or a refrigerant leak. The first three are things you can check and fix yourself in minutes. The last two need professional service.

---

## Check These First (Before Calling Anyone)

### 1. Thermostat Settings

This sounds obvious, but it's the most common "fix" HVAC technicians encounter. Check that your thermostat is:
- Set to **COOL** (not HEAT or OFF)
- Set to **AUTO** fan mode (not ON — when set to ON, the fan blows continuously even when the compressor isn't running, pushing warm air through the vents)
- Set to a temperature **below** the current room temperature

Also check that someone hasn't bumped the temperature setting or switched modes accidentally.

### 2. Air Filter

A clogged air filter is the single most common cause of HVAC problems. When the filter is blocked with dust, the system can't pull enough air across the evaporator coil. This causes the coil to freeze, which means no cooling.

- Locate your filter (usually in a return air vent on a wall or ceiling, or at the air handler unit)
- Pull it out and hold it up to a light
- If you can't see light through it clearly, it needs to be replaced
- Standard filters should be replaced every 1-3 months, depending on usage and household conditions (pets, dust)

### 3. Breaker Panel

Your HVAC system often uses two breakers — one for the indoor air handler and one for the outdoor condenser unit. If the outdoor unit's breaker has tripped, the fan will still blow (powered by the indoor breaker) but the compressor won't run, so you get warm air.

- Check your electrical panel for tripped breakers
- If you find a tripped breaker, reset it once
- If it trips again immediately, do NOT keep resetting it — there's an electrical issue that needs professional attention

### 4. Outdoor Unit

Go outside and check the condenser unit (the big metal box with a fan):
- Is it running? You should hear the compressor and see/hear the fan spinning.
- Is it surrounded by debris, leaves, or vegetation? Clear at least 2 feet of space on all sides.
- Is the fan spinning but the compressor (the lower humming sound) not running? This can indicate a capacitor or compressor issue.

### 5. Vents and Registers

Make sure all supply vents are open and unblocked. Closed or blocked vents in several rooms can cause pressure problems that reduce cooling efficiency.

---

## When the Problem Is More Serious

If you've checked all of the above and the system is still blowing warm air, the issue is likely one of these:

### Frozen Evaporator Coil

When airflow is restricted (dirty filter, blocked vents, or a failing blower motor), the evaporator coil can freeze over. Ice on the coil blocks cooling entirely.

**Signs:** The air coming from vents is barely moving. You see ice on the refrigerant lines near the indoor unit. The system runs continuously without cooling.

**What to do:** Turn the system to FAN ONLY (no cooling) for 2-4 hours to let the ice melt. Replace the filter. If the coil freezes again after thawing, there's an underlying issue (low refrigerant, blower motor problem) that needs professional diagnosis.

### Low Refrigerant

Air conditioners don't "use up" refrigerant — if it's low, there's a leak somewhere in the system. Low refrigerant means the system can't absorb enough heat from the air, so it blows warm.

**Signs:** The system runs constantly without reaching the set temperature. You hear a hissing or bubbling sound near the refrigerant lines. Ice forms on the outdoor unit's refrigerant lines.

**What to do:** This requires a licensed HVAC technician. They'll find and repair the leak, then recharge the system. Refrigerant handling requires certification — it's not a DIY job.

### Compressor Failure

The compressor is the heart of the cooling system. When it fails, the system can't pump refrigerant and can't cool. Compressor replacement is expensive — often $1,500-3,000 for parts and labor.

**Signs:** The outdoor unit fan runs but you don't hear the deeper compressor hum. The system blows air but it's not cool at all.

**What to do:** Call a technician. If the system is more than 10-15 years old, a full system replacement may be more cost-effective than compressor replacement.

---

## Seasonal Considerations

- **First use of the season:** It's normal for an AC to take 15-30 minutes to cool down after being off all winter/spring. If it's still not cooling after an hour, investigate.
- **Extreme heat days:** When outdoor temperatures exceed 95-100°F, many residential AC units struggle to maintain a 20-degree temperature differential from outside. If it's 105°F outside and your house is 80°F, the system may be working normally even though it feels warm.
- **After a storm:** Power surges during storms can trip breakers or damage capacitors. Always check the breaker panel after a storm.

For more detailed troubleshooting, see our [HVAC blowing warm air guide](/issues/hvac-blowing-warm-air) and our broader [HVAC issues resource](/issues/hvac).

---

## Frequently Asked Questions

### How long should I wait before calling a technician?

If you've checked the thermostat, filter, breakers, and outdoor unit, and the system is still not cooling after 30-60 minutes, it's reasonable to call. During peak summer, technicians book up fast, so don't wait days hoping it fixes itself.

### Should I run the AC while waiting for a repair?

If the system is blowing warm air due to low refrigerant or a compressor issue, running it won't cause further damage — it just won't cool. However, if the evaporator coil is frozen, running the AC continuously can strain the compressor. Switch to FAN ONLY while waiting.

### How much does a typical AC service call cost?

A diagnostic visit typically runs $75-150, depending on your area. Repairs like capacitor replacement ($150-300) or refrigerant recharge ($200-500) are on top of that. Get a quote before authorizing any work.
`
  },

  {
    slug: "is-this-water-damage-urgent",
    title: "Is This Water Damage Urgent? How to Assess Severity at Home",
    metaDescription: "Not all water damage is an emergency. Learn how to assess severity, what makes water damage urgent, and what steps to take based on what you find.",
    category: "water-damage-leaks",
    publishDate: "2026-03-03",
    readingTime: 7,
    excerpt: "Water damage ranges from 'keep an eye on it' to 'act immediately.' Here's how to figure out where your situation falls — and what to do in each case.",
    content: `
## The Short Answer

Water damage urgency depends on three factors: whether the water source is still active, how long the area has been wet, and what's getting wet. Active leaks, water near electrical systems, and moisture that's been present for more than 48 hours (mold risk) are urgent. A dry stain from a one-time event that's already been resolved is not.

---

## The Urgency Framework

Think of water damage urgency in three tiers:

### Tier 1 — Act Now (Same Day)

- Water is actively flowing or spraying from a pipe, fixture, or appliance
- Water is near or has reached electrical outlets, wiring, or the electrical panel
- A ceiling is sagging or bulging from water weight above
- Water is coming in during rain and more rain is forecast
- Sewage backup (toilet or floor drain is pushing water back into the house)

**What to do:** Shut off the water source if possible (the main shut-off valve if you can't isolate it). If water is near electrical systems, shut off the relevant breaker. Contain what you can with towels and buckets. Call for emergency service.

### Tier 2 — Address This Week

- A slow, steady drip from a pipe or fixture you can temporarily contain
- A water stain that's growing but you've identified and stopped the source
- Dampness or standing moisture that's been present for more than 24 hours
- Musty smell developing in a previously dry area
- Soft or spongy drywall or flooring

**What to do:** Contain the leak if possible (bucket, towels, turning off the fixture). Start drying the affected area — fans, dehumidifier, opening cabinet doors. Schedule a repair within the week. Don't let it sit for days without airflow.

### Tier 3 — Monitor and Schedule

- An old, dry stain from a known past event
- Minor condensation around windows or pipes
- A one-time overflow that was cleaned up and dried within hours
- A small spot of surface mold on bathroom grout or caulk

**What to do:** Document with a photo and date. Check again after the next rain (if it could be weather-related) or after a week. Clean surface mold and address the ventilation issue. Schedule repairs at your convenience.

---

## Factors That Increase Urgency

### The 48-Hour Rule

Mold can begin growing on damp materials within 24-48 hours. This is the single most important timeline to be aware of. If a surface has been wet for more than two days without drying, assume mold is starting and act accordingly.

### Category of Water

Not all water damage is the same:

- **Clean water** (from a supply line, faucet, or rainwater): Least contaminated, but still causes damage if left standing
- **Gray water** (from a washing machine, dishwasher, or sink drain): May contain mild contaminants — cleanup should be more thorough
- **Black water** (from sewage, toilet overflow with waste, or standing floodwater): Contains bacteria and pathogens — requires professional cleanup

### What's Getting Wet

- **Drywall:** Absorbs water quickly and is extremely difficult to dry completely once saturated. If drywall is soft or spongy, it usually needs to be replaced.
- **Insulation:** Wet insulation loses its effectiveness and won't dry properly in place. It typically needs to be removed and replaced.
- **Hardwood floors:** Can sometimes be dried and saved if addressed within 24-48 hours. After that, warping and buckling are often permanent.
- **Carpet and pad:** The pad underneath carpet absorbs and holds water. In many cases, the carpet can be saved but the pad needs to be replaced.
- **Electrical systems:** Water and electricity are a dangerous combination. If water has reached outlets, wiring, junction boxes, or the electrical panel, shut off power to the affected area and have an electrician inspect before restoring power.

---

## How to Document Water Damage

Whether or not you end up filing an insurance claim, good documentation helps:

1. **Take wide-angle photos** showing the affected area in context
2. **Take close-up photos** with a ruler or coin for scale
3. **Record the date and time** you first noticed the damage
4. **Note the source** if you've identified it
5. **Keep receipts** for any equipment you rent or purchase for cleanup (fans, dehumidifier, cleaning supplies)
6. **Don't throw away damaged materials** until your insurance adjuster has seen them (if you plan to file a claim)

---

## Emergency Steps for Active Water Damage

1. **Stop the water.** If it's a plumbing leak, shut off the supply valve for the fixture or the main water shut-off for the house.
2. **Protect electrical safety.** If water is near outlets or wiring, shut off the breaker for that area. Don't walk through standing water if you're not sure the electricity is off.
3. **Remove standing water.** Use towels, a wet-dry vacuum, or a pump depending on the amount.
4. **Start drying.** Open windows. Set up fans. Point them at the wet area. Run a dehumidifier if you have one.
5. **Remove wet materials.** Saturated carpet pads, soaked cardboard, and drenched soft furnishings should be removed to prevent mold.
6. **Document everything.** Photos with dates before you start cleanup.

---

## When to Call a Professional

- Standing water covers more than a small area (more than a bucket or two)
- The water has been standing for more than 48 hours
- The water is gray or black water (contaminated)
- You see or smell mold
- Drywall or structural elements are affected
- The source of the water is not obvious
- Water damage is in an area with electrical systems

Use our [diagnosis tool to assess water damage severity](/diagnose) or [find a local water damage contractor](/pros).

---

## Frequently Asked Questions

### How do I know if water damage is behind a wall?

Look for indirect signs: paint bubbling or peeling, drywall that feels soft when pressed, baseboards pulling away from the wall, a musty smell, or discoloration that appears to come from behind the surface. A moisture meter ($20-40 at hardware stores) can detect moisture in walls without cutting them open.

### Does water damage always lead to mold?

Not always, but the risk increases significantly after 48 hours of sustained moisture. If you dry the area thoroughly within the first 24-48 hours, mold is unlikely to develop. After that window, the probability increases with each passing day.

### Should I file an insurance claim for water damage?

Consider the amount of damage relative to your deductible. If repairs will cost $500 and your deductible is $1,000, filing a claim doesn't make financial sense. For significant damage (thousands of dollars), filing is usually worthwhile. Remember that insurance typically covers sudden/accidental water damage but not gradual leaks or maintenance neglect.
`
  },

  {
    slug: "diy-or-call-a-pro-how-to-decide",
    title: "DIY or Call a Pro? How to Decide for Home Repairs",
    metaDescription: "Wondering if you should fix it yourself or hire a contractor? Here's a practical framework for deciding when DIY makes sense and when it doesn't.",
    category: "diy-vs-pro",
    publishDate: "2026-03-04",
    readingTime: 8,
    excerpt: "The line between a satisfying DIY fix and an expensive mistake is usually clear — if you know what questions to ask. Here's how to decide before you commit.",
    content: `
## The Short Answer

The decision comes down to four factors: safety risk, skill match, cost comparison, and consequence of failure. If the job involves electrical wiring, gas lines, structural components, or working at heights, lean strongly toward hiring a professional. If the job involves replacing a fixture, patching a surface, or swapping a standard component, it's often a good DIY candidate.

---

## The Decision Framework

Before starting any home repair, run through these four questions:

### 1. Is There a Safety Risk?

This is the most important filter. Some jobs carry genuine risk of injury, property damage, or long-term hazards.

**Always hire a professional for:**
- Electrical work beyond replacing outlets/switches on existing circuits
- Gas line work (water heaters, furnaces, stoves)
- Structural modifications (removing walls, foundation work)
- Roof work on steep or multi-story homes
- Asbestos or lead paint removal
- Mold remediation affecting more than 10 square feet
- Main sewer line work

**Why it matters:** A bad DIY electrical job can cause a fire that doesn't start until months later. A roof fall can be life-altering. These aren't just "harder" tasks — they carry consequences that are disproportionate to the money saved.

### 2. Do You Have the Right Skills?

Be honest with yourself. Having watched a YouTube video is not the same as having done the work. Consider:

- Have you done this type of repair before, or something similar?
- Do you understand what you're looking at and why each step matters?
- Can you troubleshoot if something goes wrong partway through?
- Do you have the right tools, or will you need to buy/rent them?

The sweet spot for DIY is when you understand the repair well enough to anticipate problems, not just follow steps.

### 3. What's the True Cost Comparison?

DIY isn't always cheaper when you account for everything:

**DIY costs to factor in:**
- Materials (often at retail prices — contractors get wholesale)
- Tools you don't own (and may only use once)
- Your time (a plumber finishes in 1 hour what might take you 4)
- Cost of mistakes (buying the wrong part, damaging something, having to hire a pro to fix your fix)

**Professional costs include:**
- Their expertise and speed
- Warranty on the work
- Licensing and insurance (if they damage something, their insurance covers it)
- Knowing it's done correctly the first time

For many minor repairs, DIY genuinely saves money. For moderate to major repairs, the savings are often smaller than expected — and sometimes negative.

### 4. What's the Consequence of Failure?

Ask yourself: if I do this wrong, what happens?

**Low consequence (good DIY candidates):**
- Patching a drywall hole — worst case, it looks rough and you redo it
- Replacing a faucet — worst case, a drip you need to retighten
- Painting a room — worst case, it's uneven and you repaint

**High consequence (lean toward a pro):**
- Installing a water heater — worst case, a gas leak or flood
- Repairing a roof leak — worst case, it still leaks and causes more damage
- Foundation crack repair — worst case, you seal the surface but miss a structural issue

---

## Common Home Repairs: DIY or Pro?

| Repair | DIY? | Pro? | Notes |
|--------|------|------|-------|
| Replace a toilet flapper | ✅ | | $5 part, 10 minutes, no tools needed |
| Fix a running toilet | ✅ | | Fill valve or flapper replacement |
| Unclog a drain | ✅ | | Plunger or snake; avoid chemical drain cleaners |
| Replace a faucet | ✅ | | Moderate — allow 1-2 hours your first time |
| Patch small drywall holes | ✅ | | Kits available; takes practice to look seamless |
| Replace a light fixture | ✅ | | Turn off the breaker first; straightforward swap |
| Re-caulk a tub or shower | ✅ | | Important maintenance; prevents water damage |
| Replace a P-trap | ✅ | | Under-sink work; bucket and pliers needed |
| Install a new outlet or circuit | | ✅ | Permit required in most areas; safety risk |
| Replace a water heater | | ✅ | Gas and/or high-voltage connections |
| Fix a roof leak | | ✅ | Fall risk + waterproofing skill |
| Repair foundation cracks (structural) | | ✅ | Needs proper diagnosis first |
| HVAC refrigerant recharge | | ✅ | Requires EPA certification to handle refrigerant |
| Remove mold from inside walls | | ✅ | Health risk; proper containment needed |
| Replace an electrical panel | | ✅ | High-voltage; permit and inspection required |

---

## The Middle Ground: DIY the Prep, Hire the Finish

For some jobs, you can save money by doing the non-specialized parts yourself:

- **Demo:** If a bathroom remodel needs old tile removed, you can do the demolition yourself and hire a contractor for the installation. Just be careful not to damage plumbing or wiring behind the surfaces.
- **Cleanup:** After a professional mold remediation, you may be able to handle the cosmetic restoration (painting, reinstalling trim) yourself.
- **Research and purchasing:** Selecting your own fixtures, materials, and finishes saves a contractor's markup and gives you more control over the outcome.
- **Maintenance:** Many "failures" that need professional repair could have been prevented with basic maintenance you can do yourself (filter changes, caulk renewal, drain cleaning).

---

## How to Hire a Good Contractor

If you decide to call a pro, here's how to avoid the bad ones:

1. **Get at least three quotes.** Not just for price comparison — the process tells you how each contractor communicates, how quickly they respond, and how thorough their assessment is.
2. **Verify licensing and insurance.** Ask for their license number and verify it with your state licensing board. Ask for a certificate of insurance. A legitimate contractor won't hesitate to provide both.
3. **Check reviews, but read them critically.** A company with 200 reviews averaging 4.6 stars is more reliable than one with 10 reviews at 5.0. Read the negative reviews — they often reveal patterns.
4. **Get a written scope of work.** Before any work begins, have a written agreement that specifies what's included, what's not, materials to be used, timeline, and total cost. "We'll figure it out as we go" is a red flag.
5. **Never pay the full amount upfront.** A typical payment structure is 25-50% at signing, with the balance due upon completion. A contractor who demands full payment before starting may not finish the job.

For help finding contractors in your area, [use our contractor matching tool](/pros).

---

## Frequently Asked Questions

### I'm handy but have never done plumbing. Should I try?

Minor plumbing — replacing a faucet, swapping a P-trap, fixing a running toilet — is a great entry point. These jobs have clear instructions, inexpensive parts, and low consequences for mistakes. Start there and build confidence before tackling anything involving supply line modifications or drain rerouting.

### How do I know if a repair needs a permit?

In most areas, you need a permit for: new electrical circuits, plumbing that changes pipe routing, structural changes, water heater replacement, and HVAC installation. Cosmetic work, fixture replacements, and repairs generally don't need permits. When in doubt, call your local building department — they'll tell you for free.

### What if I start a DIY repair and realize it's over my head?

Stop. There's no shame in calling a professional partway through. It's better (and usually cheaper) to hand off an incomplete project than to push through and create a bigger problem. Just be honest with the contractor about what you've already done — they need to know the starting point.

### Can I watch a YouTube video and learn to do most repairs?

YouTube is an excellent learning resource for understanding how repairs work. But watching is not the same as doing. For simple tasks (caulking, changing a filter, painting), a video is often all you need. For anything involving judgment calls — how tight to tighten, what looks right, when to stop — hands-on experience matters more than video instruction.
`
  },

  {
    slug: "early-warning-signs-roof-leaks",
    title: "Early Warning Signs of Roof Leaks Every Homeowner Should Know",
    metaDescription: "Roof leaks rarely start as obvious drips. Learn the early warning signs that your roof may be letting water in, and what to do before the damage spreads.",
    category: "roof-ceiling",
    publishDate: "2026-03-05",
    readingTime: 7,
    excerpt: "By the time you see a drip from the ceiling, a roof leak has often been working its way through insulation and framing for weeks. Here are the earlier signs most people miss.",
    content: `
## The Short Answer

Roof leaks usually give warning signs long before water drips from the ceiling. The most common early indicators are: ceiling stains (even faint ones), granule buildup in gutters, damaged or missing shingles visible from the ground, damp or discolored spots in the attic, and a musty smell in upper floors. Catching these early can mean the difference between a $200 patch and a $5,000 repair.

---

## Why Roof Leaks Are Sneaky

Water doesn't always drip straight down. When water gets through your roof, it often travels along rafters, sheathing, and insulation before it finds an opening to drip through. A leak entry point on the roof might be 10 feet away from where you see the stain on your ceiling.

This means:
- The stain on your ceiling isn't necessarily directly below the leak
- Damage can be spreading through insulation and framing for weeks before you see any visible sign
- By the time you notice, the actual repair may involve more than just the roof surface

---

## The Early Warning Signs

### 1. Faint Ceiling Discoloration

Before a full brown stain appears, you might notice subtle discoloration — a slightly different shade of white, a faint yellowish tint, or a ring that's barely visible in certain lighting. These early stains are easy to dismiss but worth investigating.

**What to do:** Mark the edges of the discoloration with a light pencil. Check again after the next rain. If it's grown, you have an active leak. [Read more about ceiling stains](/blog/what-brown-ceiling-stain-usually-means).

### 2. Granule Loss in Gutters

Asphalt shingles are coated with granules that protect them from UV damage. As shingles age, they shed these granules. Finding a small amount in gutters is normal for aging shingles, but heavy accumulation — especially after storms — indicates the shingles are deteriorating and may not be waterproof much longer.

**What to do:** Check your gutters and downspout exits when you clean them. If you see heavy dark granule buildup (looks like coarse sand), schedule a roof inspection.

### 3. Visible Shingle Damage From the Ground

You don't need to climb on the roof to spot many problems. Stand across the street and look:
- Missing shingles (exposed dark patches)
- Curling edges (shingles lifting at the corners or edges)
- Cracked or buckled shingles
- Moss or algae growth (indicates moisture retention)

**What to do:** Use binoculars for a closer look. If you see obvious damage, schedule a professional roof inspection. One or two missing shingles after a storm can often be replaced individually.

### 4. Attic Moisture Signs

If you have attic access, check periodically for:
- Water stains on the underside of the roof deck (the plywood or boards the shingles are nailed to)
- Damp or compressed insulation
- Daylight visible through the roof boards
- A musty or moldy smell
- Frost on the underside of the roof deck in winter (indicates moisture and ventilation problems)

**What to do:** Any moisture in the attic deserves investigation. Even if it's just condensation from poor ventilation, it can damage the roof structure over time.

### 5. Damaged or Separated Flashing

Flashing is the metal material that seals transitions on your roof — around chimneys, vents, skylights, and where different roof planes meet. When flashing corrodes, lifts, or separates, water can get underneath.

**What to do:** Look for lifted, bent, or rusted metal around roof penetrations. You can sometimes see flashing issues from the ground, especially around chimneys. Flashing repairs are best left to professionals because improper sealing makes the problem worse.

### 6. Gutter and Drainage Problems

When gutters are clogged, sagging, or pulling away from the fascia, water can back up under the roof edge. This is a major cause of roof leaks that homeowners often overlook.

**What to do:** Clean gutters at least twice a year. Make sure they're securely attached and sloping toward downspouts. Extend downspouts at least 4-6 feet from the foundation.

### 7. Ice Dams (Cold Climate)

In winter, if you see a ridge of ice forming along the roof edge with icicles hanging from it, you likely have an ice dam. This happens when warm air from the house melts snow on the upper roof, the water runs down to the cold eaves, and refreezes. The ice backup can force water under the shingles.

**What to do:** Ice dams are a ventilation and insulation problem. Long-term fixes include improving attic insulation and ventilation. In the short term, you can use a roof rake to remove snow from the first few feet of the roof edge. Do not chop ice off the roof — you'll damage the shingles.

---

## What to Do When You Suspect a Leak

1. **Document what you see.** Photos with dates. Include the ceiling, the attic if accessible, and the exterior roof if you can safely photograph it.
2. **Check during and after rain.** Active leaks are much easier to locate when it's raining. If it's safe, check the attic during rain with a flashlight.
3. **Don't wait for it to get worse.** A small leak doesn't stay small. Water damage compounds — today's stain is next month's mold problem and next year's structural issue.
4. **Get a professional inspection.** A qualified roofer can assess the roof surface, flashing, vents, and overall condition. Many offer free or low-cost inspections.

For more detail, see our comprehensive [roofing issues guide](/issues/roofing). If you see a stain and want a quick assessment, try our [AI diagnosis tool](/diagnose).

---

## Roof Maintenance That Prevents Leaks

- **Clean gutters** twice a year (spring and fall)
- **Trim branches** that overhang the roof — they drop debris and scrape shingles
- **Inspect after storms** — walk around the house and look up after any significant wind, hail, or heavy rain
- **Check attic ventilation** — proper ventilation prevents moisture buildup and ice dams
- **Schedule a professional inspection** every 3-5 years, or annually for roofs older than 15 years

---

## Frequently Asked Questions

### How long does a typical roof last?

Asphalt shingles (the most common residential roofing) last 20-30 years depending on quality, climate, and maintenance. Metal roofs can last 40-70 years. Tile and slate roofs can last 50-100+ years. The key variable is maintenance — a well-maintained roof lasts significantly longer.

### Can I patch a roof leak myself?

Small repairs — replacing a single shingle or applying roofing cement to a minor crack — are technically within DIY range if you're comfortable on a ladder and the roof is low-slope. However, roof work carries fall risk, and improper patches can make leaks worse by trapping water underneath. For anything beyond a simple shingle replacement, professional repair is recommended.

### Does insurance cover roof leak damage?

Generally, insurance covers sudden and accidental damage (a tree falling on your roof, storm damage) but not wear-and-tear or maintenance neglect. If a 25-year-old roof fails because the shingles are worn out, that's typically not covered. If a storm tears shingles off a 5-year-old roof and water damage results, that usually is covered. Document everything with photos.
`
  },

  {
    slug: "mold-vs-mildew-what-homeowners-should-know",
    title: "Mold vs Mildew: What Homeowners Should Know",
    metaDescription: "Mold and mildew are both fungi caused by moisture, but they differ in appearance, severity, and cleanup. Learn how to identify each and when to worry.",
    category: "mold-moisture",
    publishDate: "2026-03-06",
    readingTime: 6,
    excerpt: "People use 'mold' and 'mildew' interchangeably, but they're actually different — and the distinction matters when you're deciding how to handle the problem.",
    content: `
## The Short Answer

Mildew is a surface fungus — flat, powdery or downy, usually white or gray, and grows on surfaces in damp areas. It's easy to clean and rarely causes structural damage. Mold is a broader term for fungi that penetrate surfaces — it can be black, green, brown, or other colors, often fuzzy or slimy, and can grow into drywall, wood, and other materials. Mold is harder to remove and can cause structural and health concerns.

Both are caused by excess moisture. Fixing the moisture source is always step one.

---

## How to Tell Them Apart

### Mildew

- **Appearance:** Flat, powdery or downy texture. Usually white, gray, or yellowish.
- **Where it grows:** On surfaces — shower tiles, bathroom grout, window sills, damp clothing, and leather.
- **Smell:** Mild, stale, or musty.
- **Damage:** Mostly cosmetic. It sits on surfaces rather than penetrating them.
- **Cleanup:** Usually comes off with household cleaners, scrubbing, and improved ventilation.

### Mold

- **Appearance:** Fuzzy, slimy, or raised texture. Colors range from black and dark green to brown, orange, and white.
- **Where it grows:** On and into surfaces — drywall, wood, carpet, insulation, behind walls, under flooring.
- **Smell:** Stronger musty, earthy, or damp smell.
- **Damage:** Penetrates and breaks down organic materials. Can cause structural damage over time.
- **Cleanup:** Surface mold on hard, non-porous materials can be cleaned. Mold that has penetrated porous materials (drywall, carpet, wood) often requires removal and replacement of the affected material.

### The Practical Difference

If you can wipe it off a hard surface with a cleaning product and it doesn't come back (once you've addressed the moisture), you're probably dealing with mildew. If it's growing into the surface, keeps returning despite cleaning, or has spread to porous materials like drywall or wood, you're dealing with mold.

---

## Common Places to Find Each

### Mildew Hotspots
- Shower tile and grout
- Window sills in humid rooms
- Closet walls in poorly ventilated areas
- Basement walls with condensation
- Outdoor cushions and patio furniture

### Mold Hotspots
- Behind bathroom walls (especially near showers)
- Under kitchen and bathroom sinks with slow leaks
- In basements with water intrusion
- On drywall near a roof leak
- Inside HVAC ducts
- Under carpet with a history of water damage
- Behind refrigerators and washing machines

For bathroom-specific guidance, see our guide on [musty smells in the bathroom](/blog/musty-smell-bathroom-common-causes).

---

## When to Worry

### Mildew: Usually Not a Major Concern

Mildew on bathroom surfaces is a housekeeping issue, not a health emergency. Regular cleaning and good ventilation keep it under control. It doesn't typically cause structural damage.

However, widespread or persistent mildew may indicate a ventilation problem that could eventually lead to actual mold growth, so don't completely ignore it.

### Mold: Take It Seriously

Mold deserves attention for two reasons:

**Structural concern:** Mold that has penetrated drywall, wood, or other building materials is actively breaking down those materials. Over time, this compromises the integrity of walls, subfloors, and structural elements.

**Health concern:** While most household mold is more irritating than dangerous, some people — especially those with asthma, allergies, or weakened immune systems — can have significant reactions to mold exposure. Common symptoms include coughing, sneezing, eye irritation, and aggravated asthma.

The CDC recommends that mold areas larger than about 10 square feet be handled by professionals. For smaller areas on hard, non-porous surfaces, homeowner cleanup is generally appropriate.

---

## How to Clean Mildew

1. Spray the affected area with a commercial mold/mildew cleaner or a solution of 1 part bleach to 10 parts water
2. Let it sit for 10-15 minutes
3. Scrub with a stiff brush
4. Rinse thoroughly and dry completely
5. Address the moisture source — improve ventilation, fix leaks, or reduce humidity

### How to Clean Small Mold Areas

For mold on hard, non-porous surfaces covering less than 10 square feet:

1. Wear gloves and a mask (N95 or better)
2. Seal the area if possible — close doors, cover vents with plastic
3. Apply a mold-killing product (commercial mold remover or bleach solution)
4. Scrub and wipe clean
5. Dry completely with fans and dehumidifier
6. Fix the moisture source

For mold on porous materials (drywall, carpet, insulation):
- The affected material typically needs to be cut out and replaced
- This is where professional remediation becomes important, especially for larger areas

---

## Prevention: The Only Real Solution

Both mold and mildew are symptoms of excess moisture. No amount of cleaning eliminates the problem if the moisture source remains.

**Key prevention steps:**
- Use exhaust fans in bathrooms and kitchens (and make sure they vent to the outside)
- Fix leaks promptly — even small drips create mold-friendly conditions
- Keep indoor humidity below 50% (a hygrometer costs $10-15 and is worth having)
- Ensure good airflow in closets, basements, and other enclosed spaces
- Don't ignore condensation on windows or walls — it's telling you humidity is too high

---

## Frequently Asked Questions

### Can mildew turn into mold?

They're different organisms, so mildew doesn't "turn into" mold. However, the conditions that support mildew growth (warm, damp, poorly ventilated) are the same conditions that support mold growth. If you're seeing mildew, mold may not be far behind — especially in hidden areas where moisture has been sitting longer.

### Do I need professional mold testing?

For visible mold, testing is usually unnecessary — the recommendation is the same regardless of species: clean it up, fix the moisture source, and replace any damaged materials. Testing may be useful when you suspect hidden mold (musty smell but nothing visible) or in real estate transactions where documentation is needed.

### Is black mold always dangerous?

"Black mold" (Stachybotrys chartarum) has a reputation for being especially toxic, but the reality is more nuanced. All mold can cause irritation and allergic reactions. No mold should be left to grow in your home. The color alone doesn't tell you the species or the risk level. Treat all mold growth seriously, but don't panic because the mold happens to be dark-colored.

For comprehensive mold and moisture guidance, visit our [mold and moisture resource center](/issues/mold-moisture).
`
  },

  {
    slug: "what-to-do-before-calling-a-contractor",
    title: "What to Do Before Calling a Contractor: A Homeowner's Checklist",
    metaDescription: "Calling a contractor? Prepare first. This checklist helps you document the problem, ask the right questions, and avoid common mistakes when hiring for home repairs.",
    category: "diy-vs-pro",
    publishDate: "2026-03-07",
    readingTime: 7,
    excerpt: "A little preparation before calling a contractor saves you money, gets better results, and helps you avoid the most common mistakes homeowners make when hiring for repairs.",
    content: `
## The Short Answer

Before calling a contractor, document the problem clearly (photos, timeline, symptoms), understand what you're hiring for (diagnosis vs repair vs both), verify licensing and insurance, get multiple quotes with written scopes of work, and establish a payment schedule. Fifteen minutes of preparation can save you hundreds or thousands of dollars and significant frustration.

---

## Step 1: Document the Problem

The better you can describe and show the problem, the more accurate your quotes will be and the less time (and money) the contractor spends on diagnosis.

### What to Document

- **Photos:** Take clear photos of the issue from multiple angles. Include a ruler or coin for scale when photographing cracks, stains, or damage areas.
- **Timeline:** When did you first notice it? Has it changed? Is it seasonal? Getting worse?
- **Related symptoms:** A ceiling stain might seem like one problem, but if you also mention the musty smell in the bathroom above, the contractor gets a fuller picture.
- **What you've already tried:** If you've attempted any repairs, share that. It helps the contractor understand the starting point.
- **Access information:** Where is the problem located? Can the contractor access it easily, or will they need to move furniture, enter the attic, or access a crawl space?

### Why This Matters

A contractor who arrives knowing what to expect can give a more accurate estimate, bring the right tools and materials, and spend less time on diagnostic work you're paying for. "There's water somewhere" is much less helpful than "There's a growing stain on the first-floor ceiling directly below the upstairs bathroom, and it gets worse after showers."

You can also use our [AI diagnosis tool](/diagnose) to get a preliminary assessment before you call — it gives you vocabulary and context to communicate more effectively with contractors.

---

## Step 2: Understand What You're Hiring For

There's an important distinction between hiring someone to diagnose a problem and hiring someone to fix it. Sometimes you need both, but being clear about which you're requesting helps.

### Diagnosis Only

When you don't know what's wrong — you just know something is — you're hiring someone to figure it out. A plumber investigating a mysterious leak, or a structural engineer evaluating foundation cracks, is providing a diagnostic service.

**Typical cost:** $75-250 for a diagnostic visit, depending on the trade and your market.

### Repair Only

When you already know what's wrong — a specific pipe fitting is leaking, a particular shingle is damaged — you're hiring someone to fix a defined problem.

**Typical cost:** Varies widely by repair type. Get quotes before authorizing.

### Diagnosis + Repair

Many contractors will waive or reduce the diagnostic fee if you hire them for the repair. Ask about this upfront.

---

## Step 3: Check Credentials

### Licensing

Every state has different licensing requirements, but for most trades (plumbing, electrical, HVAC, roofing, general contracting), there is a licensing board you can check online. Ask for the contractor's license number and verify it.

What to check:
- Is the license active and current?
- Is it the right type of license for the work you need?
- Are there any complaints or disciplinary actions on file?

### Insurance

Ask for proof of both:
- **General liability insurance** — covers damage to your property during the work
- **Workers' compensation** — covers injuries to the contractor's employees on your property

If a contractor doesn't carry insurance and an accident happens on your property, you could be liable.

### Reviews and References

- Read online reviews, but look at patterns rather than individual reviews. A few bad reviews among hundreds of good ones is normal. A pattern of similar complaints (communication problems, surprise charges, unfinished work) is a warning sign.
- Ask for references from recent similar projects. A good contractor is happy to provide them.

---

## Step 4: Get Multiple Quotes

### How Many Quotes?

Three is the standard recommendation. Fewer than three doesn't give you enough comparison data. More than five wastes everyone's time.

### What a Good Quote Includes

- Detailed scope of work (what exactly will be done)
- Materials list with specifications (not just "new pipes" but "3/4-inch copper pipe" or equivalent)
- Labor cost, either as a flat rate or estimated hours at a stated rate
- Timeline for completion
- What's NOT included (so there are no surprises)
- Payment schedule
- Warranty terms

### Red Flags in Quotes

- A verbal-only estimate with no written documentation
- A price dramatically lower than the other quotes (they may be cutting corners, using inferior materials, or planning to add charges later)
- "We'll see when we open it up" without any estimated range
- Pressure to sign immediately or commit before you've gotten other quotes
- Asking for full payment upfront

---

## Step 5: Establish Terms Before Work Begins

### Payment Schedule

A reasonable payment structure for most home repairs:
- **Small jobs (under $1,000):** Payment on completion
- **Medium jobs ($1,000-5,000):** 25-50% deposit, balance on completion
- **Large jobs (over $5,000):** Payment in stages tied to completion milestones

Never pay the full amount before the work is done.

### Change Orders

Work sometimes uncovers unexpected issues. Establish upfront that any changes to the scope or cost require your written approval before proceeding. This prevents "scope creep" where the final bill is far higher than the estimate.

### Communication

Agree on how and how often the contractor will update you. Who do you contact with questions? How much notice before they need access to your home?

---

## Step 6: During and After the Work

### During

- Don't hover, but do check in. A quick daily look at progress is reasonable.
- If something doesn't look right, ask about it sooner rather than later. Changes are easier and cheaper early in the process.
- Keep notes and photos of work in progress.

### After

- Do a thorough walkthrough before making the final payment.
- Test everything — run faucets, flip switches, open and close doors.
- Get documentation of what was done, including any warranties on parts or labor.
- Keep the contractor's contact information for future needs.

---

## Common Mistakes to Avoid

1. **Hiring the first person who answers the phone.** Speed is not the same as quality.
2. **Choosing based solely on price.** The cheapest quote often leads to the most expensive outcome.
3. **Not getting things in writing.** Verbal agreements lead to "I thought we discussed..." disputes.
4. **Paying everything upfront.** You lose leverage to ensure the work is completed properly.
5. **Ignoring licensing and insurance.** This feels bureaucratic until something goes wrong on your property.
6. **Not being specific about the problem.** Vague descriptions lead to inaccurate quotes and wasted time.

---

## Frequently Asked Questions

### How do I find a good contractor?

Start with personal referrals from neighbors and friends. Check online review platforms, but look for consistency over individual ratings. Verify licensing through your state's licensing board. And always get multiple quotes. Our [contractor matching tool](/pros) can also help connect you with licensed professionals in your area.

### What if I disagree with the contractor's diagnosis?

Get a second opinion. If a contractor says you need a $5,000 repair and you're not sure, paying $100-200 for another professional's assessment is money well spent. Different professionals may also suggest different approaches at different price points.

### Should I be home while work is being done?

For short jobs (a few hours), you don't necessarily need to be there, but being available by phone is important. For multi-day projects, being home at the start and end of each day helps. For any work that involves decisions or approvals, your presence (or availability) speeds things up.

### How do I handle a dispute about work quality or billing?

Start with a direct conversation — many issues are misunderstandings that can be resolved. If that doesn't work, review your written agreement (this is why you need one). If necessary, contact your state's contractor licensing board, your local consumer protection office, or a mediation service. Written documentation and photos from throughout the project are your strongest tools.
`
  },

  {
    slug: "how-to-document-home-damage-clearly",
    title: "How to Document Home Damage Clearly — For Insurance, Contractors, and Your Own Records",
    metaDescription: "Good documentation of home damage can save you thousands. Learn exactly how to photograph, describe, and organize damage records for insurance claims and contractor quotes.",
    category: "home-maintenance",
    publishDate: "2026-03-08",
    readingTime: 6,
    excerpt: "Whether you're filing an insurance claim, getting contractor quotes, or just tracking a problem over time, how you document home damage makes a real difference. Here's how to do it right.",
    content: `
## The Short Answer

Good damage documentation includes wide-angle context photos, close-up detail photos with a scale reference, dated notes describing what you see, and a timeline of when the damage appeared and how it's changed. This applies whether you're documenting for insurance claims, contractor quotes, or your own records. It takes 10-15 minutes to do well and can save you thousands.

---

## Why Documentation Matters

### For Insurance Claims

Insurance adjusters make coverage decisions based on what they can see and verify. The better your documentation, the stronger your claim. Photos taken before cleanup and repair are especially important — once the damage is cleaned up or repaired, you can't recreate the evidence.

### For Contractor Quotes

When you can show a contractor clear photos and describe the timeline, they can give you a more accurate quote without an in-person visit. This is especially useful for getting initial estimates to compare.

### For Tracking Over Time

Some problems — cracks, stains, slow leaks — are best monitored over weeks or months. Without dated documentation, you're relying on memory to judge whether something is getting worse. Memory is unreliable.

---

## How to Photograph Damage

### Wide-Angle Context Shots

Start with photos that show where the damage is located in context. Stand back far enough to include recognizable landmarks — a doorway, a window, a piece of furniture. The goal is that someone who has never been in your house can look at the photo and understand the location.

### Close-Up Detail Shots

Move in close to capture the damage in detail. Show textures, colors, and extent.

**Always include a scale reference.** Place a ruler, a coin, a credit card, or your hand next to the damage. Without scale, a crack in a photo could be 1 inch or 1 foot wide — the photo doesn't tell you.

### Specific Angles

- **Ceiling stains:** Photograph from directly below and from an angle
- **Cracks:** Photograph straight-on and from the side (to show any offset/displacement)
- **Water damage:** Photograph the visible damage and any likely source area
- **Roof issues:** Photograph from the ground (safely) showing the general area, and closer if accessible

### Lighting

Use good lighting. Flash can wash out water stains and make damage less visible. If possible, use natural light or a flashlight held at an angle to show texture and depth.

---

## How to Describe Damage

Write a brief but specific description. Include:

- **Location:** "First-floor kitchen ceiling, approximately 3 feet from the north wall, directly below the upstairs bathroom"
- **Size:** "The stain is roughly 18 inches by 12 inches" (or use your scale reference photo)
- **Appearance:** "Yellowish-brown ring with a lighter center. The drywall feels firm when pressed."
- **Timeline:** "First noticed March 3, 2026. It has not visibly changed since then."
- **Conditions:** "The stain appeared after three days of heavy rain" or "The stain is not weather-related — it appeared after a toilet overflow upstairs"

### What Not to Include

- Don't speculate about causes unless you're confident. "I think the contractor next door damaged our foundation" without evidence weakens your documentation.
- Don't exaggerate. Describe what you see accurately. Exaggeration undermines credibility with adjusters and contractors.
- Don't include emotional language. "This is destroying our home" is less useful than "The affected area has expanded from 12 inches to 24 inches over the past two weeks."

---

## Organizing Your Documentation

### Create a Simple System

You don't need special software. A folder on your phone or computer with subfolders by date and issue type works fine.

Suggested structure:
- Home Damage Records
  - 2026-03 Kitchen Ceiling Stain
    - Photos (dated)
    - Notes
    - Contractor quotes
    - Insurance correspondence
  - 2026-03 Basement Wall Crack
    - Photos (dated)
    - Measurements

### Date Everything

Every photo should include the date it was taken. Most phones embed this automatically in the file metadata, but adding the date in your notes ensures you can reference it even if files are moved or renamed.

### Keep Everything

Don't delete early documentation because you have newer, "better" photos. The progression over time is valuable information — both for insurance and for contractors assessing the issue.

---

## Documentation Checklist

Before you call an insurance company or contractor, make sure you have:

- [ ] Wide-angle photos showing location and context
- [ ] Close-up photos with scale reference (ruler, coin, or card)
- [ ] Written description of the damage with specific measurements
- [ ] Date you first noticed the damage
- [ ] Any changes over time, with dates
- [ ] Known cause (if identified) or circumstances (weather, plumbing event, etc.)
- [ ] Photos of any related evidence (e.g., the leaking pipe that caused the stain)
- [ ] Receipts for any emergency supplies or temporary fixes
- [ ] Names and dates of any professionals who have inspected the damage

---

## Using Documentation for Insurance Claims

### Filing Tips

- Report damage to your insurer promptly — most policies have time limits
- Don't start permanent repairs until your adjuster has seen the damage (temporary fixes to prevent further damage are fine and expected)
- Provide copies of photos and documentation, not originals
- Keep a log of all communication with your insurance company, including names, dates, and what was discussed
- If the claim is denied, ask for the specific policy language they're citing

### What Insurance Typically Covers

- Sudden and accidental water damage (burst pipe, storm damage)
- Resulting damage from a covered event (mold from a burst pipe, floor damage from a roof leak)
- Emergency mitigation costs (fans, dehumidifier rental, temporary tarp)

### What Insurance Typically Does NOT Cover

- Gradual damage from maintenance neglect
- The cost of fixing the root cause (the leaking pipe itself, the worn roof)
- Flood damage (requires separate flood insurance)
- Damage you knew about and didn't address

---

## Frequently Asked Questions

### How soon should I document damage?

Immediately. The earlier you document, the more useful the evidence. For insurance purposes, photos taken before any cleanup or repair are the most valuable. For tracking purposes, early documentation gives you a baseline to compare against.

### Should I video the damage or just take photos?

Both can be useful. Video is especially good for showing water actively dripping, sounds (like a running furnace making unusual noise), and walking through the full extent of an affected area. Photos are better for detail, measurement, and stable reference points. Use both when practical.

### What if the damage has already been repaired when I realize I need documentation?

Document what you can — the repaired area, any remaining signs, invoices from the repair, and any photos you took casually during the process. It's not ideal, but partial documentation is always better than none.

### Can I use HomeSnapFix's diagnosis tool as documentation?

Our [AI diagnosis tool](/diagnose) can provide a preliminary assessment of damage from photos you upload. While it's not a substitute for professional evaluation, the assessment and photos can be a useful starting point for conversations with contractors and may help you describe the issue more precisely.
`
  },

  // --- NEW POST 14 ---
  {
    slug: "small-leak-big-damage-water-behind-walls",
    title: "Small Leak, Big Damage: How Water Spreads Behind Walls",
    metaDescription: "A minor leak can cause major hidden damage. Learn how water travels behind walls, what signs to watch for, and why small leaks need fast attention.",
    category: "water-damage-leaks",
    publishDate: "2026-03-02",
    readingTime: 7,
    featured: false,
    isPillar: false,
    excerpt: "A pinhole leak or slow drip may seem harmless, but water travels fast behind drywall. Here's how hidden moisture spreads and what to watch for before the damage gets expensive.",
    content: `
## The Short Answer

A small, slow leak behind a wall can cause thousands of dollars in damage before you ever see a visible sign. Water wicks through drywall, insulation, and wood framing — spreading far beyond the original leak point. Understanding how this happens helps you catch problems earlier.

---

## How Water Travels Behind Walls

Water doesn't just drip straight down. Inside a wall cavity, it follows the path of least resistance:

- **Gravity pulls it downward**, but it often hits horizontal framing members (like sole plates) and pools.
- **Capillary action wicks moisture** through drywall and insulation, sometimes moving sideways or even upward.
- **Wood framing absorbs water** slowly, swelling and eventually warping or rotting.

A leak at a second-floor bathroom connection can show up as damage on a first-floor ceiling 10 feet away from the actual source. This is why finding the origin of water damage is often harder than fixing it.

---

## Signs of Hidden Water Behind Walls

Most homeowners don't notice hidden leaks until secondary symptoms appear:

- **Paint bubbling or peeling** on an interior wall, especially if it's not in a wet area
- **Baseboards pulling away** from the wall or showing warping
- **A musty smell** that you can't locate — often strongest near the affected wall
- **Soft or spongy drywall** when you press on it
- **Discoloration** — faint yellow or brown patches that weren't there before
- **Higher water bills** without a change in usage

If you notice any combination of these, there's a good chance moisture is present inside the wall.

---

## Common Sources of Hidden Wall Leaks

The most frequent culprits are:

1. **Supply line connections** — especially at shutoff valves, toilet supply lines, and washing machine hoses
2. **Drain pipe joints** — older homes with cast iron or galvanized drain pipes develop pinhole leaks at joints
3. **Shower and tub surrounds** — failed caulk or grout lets water seep behind tiles and into the wall cavity
4. **Ice maker lines** — the small copper or braided lines running to refrigerators are notorious for slow leaks
5. **Condensation from HVAC** — poorly insulated ducts in walls can produce enough condensation to cause damage over time

---

## Why Speed Matters

The timeline from leak to serious damage is shorter than most people expect:

- **Within 24–48 hours**: Drywall begins absorbing moisture and weakening
- **Within 1–2 weeks**: Mold can begin growing on damp organic materials
- **Within 1–3 months**: Wood framing can start to rot, and insulation loses effectiveness
- **Beyond 3 months**: Structural damage becomes likely, and remediation costs multiply

A $150 plumbing repair can become a $5,000+ remediation project if the leak runs unchecked for a few months.

---

## What to Do If You Suspect a Hidden Leak

1. **Check your water meter** — turn off all fixtures and appliances, then watch the meter. If it's still moving, you have an active leak somewhere.
2. **Use a moisture meter** — inexpensive pin-type meters (under $30) can detect elevated moisture in drywall without cutting into the wall.
3. **Look in adjacent spaces** — check the ceiling below, closets on the other side of the wall, and any accessible crawlspace or basement areas.
4. **Don't ignore musty smells** — your nose is surprisingly good at detecting hidden moisture. If a wall smells damp, take it seriously.
5. **Call a plumber or leak detection specialist** if you can't find the source — they have tools (thermal cameras, acoustic sensors) that can locate leaks without tearing into walls.

---

## Frequently Asked Questions

### Can a small leak really cause mold?

Yes. Mold needs three things: moisture, warmth, and organic material. The inside of a wall cavity — with damp drywall and wood framing — provides all three. Mold can begin colonizing within 24–48 hours of sustained moisture.

### How do I know if the leak is active or old?

Touch the area. If it feels damp or cool, the leak is likely active. If the stain is dry and the drywall is firm, the leak may have stopped. Monitor it for a week — if the stain doesn't grow, the source may be resolved. But investigate anyway to be sure.

### Should I cut into the wall to check?

Only if you're comfortable with basic drywall repair. A small exploratory hole (4–6 inches) in an inconspicuous spot can reveal a lot. If you find active water or mold, stop and call a professional.
`
  },

  // --- NEW POST 15 ---
  {
    slug: "bathroom-fan-not-preventing-moisture",
    title: "Why Your Bathroom Fan Isn't Preventing Moisture Problems",
    metaDescription: "Your bathroom exhaust fan may not be doing its job. Learn the common reasons bathroom fans fail to control moisture and what to do about it.",
    category: "mold-moisture",
    publishDate: "2026-02-28",
    readingTime: 6,
    featured: false,
    isPillar: false,
    excerpt: "Running the bathroom fan during showers isn't always enough. Undersized fans, blocked ducts, and short run times are common reasons moisture still builds up.",
    content: `
## The Short Answer

Many bathroom exhaust fans are undersized, improperly installed, or not run long enough to actually control moisture. If you're still seeing foggy mirrors, damp walls, or mildew growth despite using your fan, the fan setup — not your habits — is likely the problem.

---

## How Bathroom Exhaust Fans Are Supposed to Work

A properly functioning bathroom exhaust fan should:

- Remove moist air from the bathroom during and after showers or baths
- Vent that air **outside** the home through a duct that exits at the roof or exterior wall
- Exchange the air in the bathroom roughly 8 times per hour (the standard ventilation rate)

When any part of this system fails — the fan, the duct, or the runtime — moisture stays in the room and eventually causes problems.

---

## Common Reasons Your Fan Isn't Working Well

### 1. The Fan Is Too Small for the Room

Exhaust fans are rated in CFM (cubic feet per minute). The general rule is **1 CFM per square foot** of bathroom floor area, with a minimum of 50 CFM. Many builder-grade fans are installed at the bare minimum — or even undersized — especially in bathrooms with high ceilings or large shower enclosures.

**How to check**: Look at the label on your fan (usually visible when you remove the cover). If your bathroom is 80 square feet and the fan is rated at 50 CFM, it's undersized.

### 2. The Duct Is Blocked, Kinked, or Too Long

Even a properly sized fan can't move air if the ductwork is obstructed. Common issues include:

- Flexible duct that's kinked or sagging, creating low points where condensation collects
- Duct runs that are too long or have too many bends, reducing airflow
- Exterior vent flaps stuck shut by paint, debris, or wasp nests
- Ducts that terminate in the attic instead of outside — this dumps warm, moist air into the attic space, causing mold and wood rot

### 3. You're Not Running It Long Enough

Most people turn the fan off when they leave the bathroom. But the moisture doesn't disappear that fast. **Run the fan for at least 20 minutes after your shower ends.** A timer switch (around $20–30 at any hardware store) makes this easy and automatic.

### 4. The Fan Motor Is Worn Out

Exhaust fan motors typically last 8–15 years. As they age, they slow down and move less air, even though they still make noise. If your fan sounds like it's running but the bathroom stays steamy, the motor may need replacement.

### 5. The Fan Was Never Ducted Outside

In some older homes or poorly done renovations, the exhaust fan duct vents into the attic, a crawlspace, or even just into the space between floors. This doesn't remove moisture from the home — it just moves it somewhere you can't see it, where it causes hidden damage.

---

## Signs Your Fan Isn't Controlling Moisture

- Mirror stays fogged for more than 5 minutes after you stop showering with the fan running
- Walls or ceiling feel damp to the touch after showers
- Mildew keeps coming back on grout, caulk, or ceiling paint
- Paint is peeling on the bathroom ceiling
- Musty smell that won't go away despite cleaning

---

## How to Fix It

**Quick fixes:**
- Install a timer switch so the fan runs 20+ minutes after each shower
- Clean the fan cover and blades (dust buildup reduces airflow significantly)
- Check the exterior vent flap — make sure it opens freely

**Bigger fixes:**
- Replace an undersized fan with one properly rated for your bathroom size
- Have the ductwork inspected and corrected if it's kinked, sagging, or venting into the attic
- Add a humidity-sensing fan that turns on automatically when moisture levels rise

---

## Frequently Asked Questions

### Is it bad to not have a bathroom fan at all?

It's not ideal. Without mechanical ventilation, moisture from showers has nowhere to go except into walls, ceilings, and adjacent rooms. If your bathroom has a window, opening it during and after showers helps — but it's not as effective as a proper exhaust fan, especially in humid climates.

### Can I install a bathroom fan myself?

Replacing an existing fan with a same-size unit is a moderate DIY project. Installing a new fan where there wasn't one before involves cutting into the ceiling, running ductwork, and wiring — which is usually better left to a professional.

### How do I know if my duct goes outside?

Go outside and look for the vent cap on your roof or exterior wall. If you can't find one, the duct may terminate in the attic. You can also turn the fan on and have someone check the exterior vent to see if air is flowing out.
`
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === currentPost.category ? 1 : 0;
      const bMatch = b.category === currentPost.category ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    })
    .slice(0, limit);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}
