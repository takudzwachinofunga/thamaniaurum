import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe } from "lucide-react";

const valueChainLinks = [
  { label: "Verification (Lab)", href: "/services" },
  { label: "Production (Mining)", href: "/services" },
  { label: "Refining (99.99% Bullion)", href: "/services" },
  { label: "Liquidity (Global Markets)", href: "/services" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
  { label: "Investors", href: "/investors" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t-2 border-gold">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Thamani Aurum"
              width={140}
              height={70}
              className="h-14 w-auto object-contain mb-6"
            />
            <p className="text-slate-text text-sm leading-relaxed">
              The Architecture of Trust in African Minerals. We are the Global
              Gateway for ethical African gold, ensuring 100% transparency from
              pit to port.
            </p>
          </div>

          {/* Value Chain */}
          <div>
            <h3 className="font-serif text-gold text-sm font-bold tracking-wider mb-6">
              VALUE CHAIN
            </h3>
            <ul className="flex flex-col gap-3">
              {valueChainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-text text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-gold text-sm font-bold tracking-wider mb-6">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-text text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-gold text-sm font-bold tracking-wider mb-6">
              CONTACT INFO
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:investor@thamaniaurum.ug"
                  className="text-slate-text text-sm hover:text-gold-light transition-colors"
                >
                  investor@thamaniaurum.ug
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-slate-text text-sm">
                  Kampala, Uganda
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-slate-text text-sm">
                  Entebbe, Refinery Hub
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-slate-text text-sm">
                  Dubai, DMCC Trading Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-text text-xs">
            &copy; 2026 Thamani Aurum Integrated Metals Group. All Rights
            Reserved.
          </p>
          <p className="text-slate-text text-xs tracking-wider">
            Compliance-First. Precision-Driven. National Impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
