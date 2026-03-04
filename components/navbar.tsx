"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Gold ticker bar */}
      <div className="w-full bg-navy-dark border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-text">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>XAUUSD Live</span>
          </div>
          <div className="text-xs text-gold font-medium tracking-wider">
            Global Gateway for Ethical African Gold
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b-2 border-gold",
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-dark/50"
            : "bg-navy"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt="Thamani Aurum"
              width={160}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200",
                    pathname === link.href
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="/investors"
                className="px-5 py-2.5 text-sm font-bold border-2 border-gold text-gold rounded hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Invest Now
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-navy-light">
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                    pathname === link.href
                      ? "bg-navy text-gold"
                      : "text-white/80 hover:bg-navy hover:text-gold"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/investors"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-center text-sm font-bold border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-navy transition-all"
              >
                Invest Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
