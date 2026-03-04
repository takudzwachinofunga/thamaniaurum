import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Gem,
  Factory,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gold.jpg"
            alt="Gold bullion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-0 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Now Raising Capital
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Institutional
              <br />
              <span className="gold-shimmer">Mineral Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Phased expansion into Africa{"'"}s premier refining corridor. From
              pit to port, we are building the architecture of trust in African
              minerals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-gold/20"
              >
                Investment Opportunity
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded font-bold text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ===== INVESTMENT HIGHLIGHT BANNER ===== */}
      <section className="relative bg-navy border-y-2 border-gold invest-glow">
        <div className="absolute inset-0 gold-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Strategic Investment Opportunity
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">
                Building Africa{"'"}s Premier Gold Refinery
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left: Key metrics */}
            <AnimateIn className="lg:col-span-2">
              <div className="bg-navy-dark/50 border border-navy-light rounded-xl p-8">
                <h3 className="font-serif text-xl text-gold mb-6 font-bold">
                  Investment Summary
                </h3>
                {[
                  { label: "Target Raise", value: "$3,150,000" },
                  { label: "Instrument", value: "Equity / Convertible Note" },
                  { label: "Use of Funds", value: "Refinery CapEx & Licenses" },
                  { label: "Min. Subscription", value: "$100,000" },
                  {
                    label: "Target Exit",
                    value: "5 - 7 Years (Buy-back/M&A)",
                  },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-4 ${
                      i < 4 ? "border-b border-navy-light" : ""
                    }`}
                  >
                    <span className="text-slate-text text-sm">
                      {metric.label}
                    </span>
                    <span className="text-gold-light font-bold text-sm">
                      {metric.value}
                    </span>
                  </div>
                ))}
                <p className="text-slate-text/60 text-[0.65rem] italic mt-6">
                  Disclaimer: For professional investors only. Mineral
                  investments carry significant market and geological risk.
                </p>
              </div>
            </AnimateIn>

            {/* Right: Growth phases */}
            <AnimateIn className="lg:col-span-3" delay={200}>
              <div className="flex flex-col gap-6">
                {[
                  {
                    phase: "Phase I",
                    label: "Verification & Lab",
                    status: "Active",
                    description:
                      "Forensic XRF assaying and legal due diligence for third-party sellers.",
                    active: true,
                  },
                  {
                    phase: "Phase II",
                    label: "Modular Refining",
                    status: "Q3 2026",
                    description:
                      "Commissioning of our 10kg/day chemical refinery in Entebbe to produce 24K bullion.",
                    active: false,
                  },
                  {
                    phase: "Phase III",
                    label: "Upstream Mining",
                    status: "2027",
                    description:
                      "Direct acquisition and mechanization of medium-scale gold mining licenses.",
                    active: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 p-6 rounded-xl border transition-all ${
                      item.active
                        ? "bg-gold/5 border-gold/30"
                        : "bg-navy-dark/30 border-navy-light hover:border-gold/20"
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-serif font-bold text-sm">
                        {item.phase.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-serif text-white font-bold">
                          {item.phase}: {item.label}
                        </h4>
                        <span
                          className={`text-[0.65rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                            item.active
                              ? "bg-green-500/20 text-green-400"
                              : "bg-navy-light text-slate-text"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-slate-text text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link
                    href="/investors"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Download Pitch Deck (PDF)
                  </Link>
                  <a
                    href="mailto:investor@thamaniaurum.ug"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    Speak to Management
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 lg:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Our Value Chain
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4">
                Integrated Value Chain
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "VERIFY",
                desc: "Assay-as-a-Service for regional miners. Forensic XRF analysis ensuring purity and compliance.",
                image: "/images/laboratory.jpg",
              },
              {
                icon: Gem,
                title: "PRODUCE",
                desc: "Upstream control through mining rights. Partnering with formalized ASM cooperatives.",
                image: "/images/mining-operations.jpg",
              },
              {
                icon: Factory,
                title: "REFINE",
                desc: "99.99% purity for global bullion markets. Investment-grade gold bars.",
                image: "/images/refinery.jpg",
              },
              {
                icon: TrendingUp,
                title: "TRADE",
                desc: "Global market access through our DMCC desk in Dubai with Tier-1 logistics.",
                image: "/images/dubai-trading.jpg",
              },
            ].map((service, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy/60 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore All Services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== WHY THAMANI ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <div className="relative">
                <Image
                  src="/images/gold-bullion.jpg"
                  alt="Gold bullion bars in vault"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover w-full h-[400px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-navy p-6 rounded-xl shadow-xl hidden lg:block">
                  <p className="text-gold font-serif text-2xl font-bold">
                    99.99%
                  </p>
                  <p className="text-white/70 text-sm">Purity Grade</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div>
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Why Choose Us
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4 mb-8">
                  The Global Gateway for Ethical African Gold
                </h2>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      title: "Full Chain Control",
                      desc: "From verification to refining to global market access, we control every link.",
                    },
                    {
                      title: "Regulatory Compliance",
                      desc: "Aligned with Uganda Mining Act 2022 mandating local value addition.",
                    },
                    {
                      title: "Conflict-Free Certification",
                      desc: "Partnering exclusively with formalized ASM cooperatives.",
                    },
                    {
                      title: "Global Market Access",
                      desc: "Strategic DMCC desk in Dubai with Tier-1 secure logistics.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-navy text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-navy/60 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mining-operations.jpg"
            alt="Mining operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Ready to Invest in Africa{"'"}s Gold Future?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join institutional investors backing the formalization of East
              Africa{"'"}s $5B+ gold market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
              >
                View Investment Details
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded font-bold text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
