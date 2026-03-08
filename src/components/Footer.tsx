import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "AI Diagnosis", to: "/diagnose" },
    { label: "DIY Guides", to: "/diy" },
    { label: "Find a Pro", to: "/pros" },
    { label: "Maintenance Calendar", to: "/maintenance-calendar" },
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">HomeSnapFix</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-powered home maintenance intelligence for confident homeowners.
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
