import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "AI Diagnosis", to: "/diagnose" },
    { label: "Repair Guides", to: "/diy" },
    { label: "Find a Pro", to: "/pros" },
    { label: "Maintenance Calendar", to: "/maintenance-calendar" },
  ],
  "Issue Guides": [
    { label: "Roofing Issues", to: "/issues/roofing" },
    { label: "Plumbing Leaks", to: "/issues/plumbing" },
    { label: "HVAC Problems", to: "/issues/hvac" },
    { label: "Electrical Warnings", to: "/issues/electrical" },
    { label: "Mold & Moisture", to: "/issues/mold-moisture" },
    { label: "Foundation Cracks", to: "/issues/foundation-cracks" },
    { label: "Exterior Damage", to: "/issues/exterior-damage" },
  ],
  "Common Issues": [
    { label: "Brown Ceiling Stain", to: "/issues/brown-water-stain-ceiling" },
    { label: "Dripping Under Sink", to: "/issues/dripping-under-sink" },
    { label: "Hot Outlet", to: "/issues/outlet-feels-hot" },
    { label: "AC Not Cooling", to: "/issues/hvac-blowing-warm-air" },
    { label: "Musty Bathroom Smell", to: "/issues/musty-smell-bathroom" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Contact", to: "/contact" },
    { label: "Newsletter", to: "/newsletter" },
  ],
  Legal: [
    { label: "Disclaimer", to: "/legal/disclaimer" },
    { label: "Privacy Policy", to: "/legal/privacy" },
    { label: "Terms of Service", to: "/legal/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold text-foreground">HomeSnapFix</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-assisted home repair assessment for confident homeowners. Educational guidance only — not a licensed inspection.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3 border-t pt-6">
          <p className="text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> Educational information only. Not professional engineering,
            structural, electrical, or safety advice. If you suspect structural damage, gas leaks, or
            electrical hazards, contact a licensed professional immediately.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Product Links:</strong> Product suggestions are for reference only. We do not
            currently earn commissions on product links.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HomeSnapFix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
