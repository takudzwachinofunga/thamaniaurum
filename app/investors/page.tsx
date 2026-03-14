import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  Shield,
  TrendingUp,
  Building,
  Globe,
  CheckCircle,
  FileText,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Investors | Thamani Aurum - Strategic Investment Opportunity",
  description:
    "Invest in Africa's premier gold refining corridor. $3.15M raise for refinery CapEx, mining licenses, and vertical integration.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title="Strategic Investment Opportunity"
        subtitle="Capitalize on the Uganda Mining Act 2022, which mandates local value addition and formalizes the $5B+ regional gold market."
        imageSrc="/images/gold-bullion.jpg"
        imageAlt="Gold bullion investment"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-gold/20"
          >
            <Download className="w-4 h-4" />
            Download Pitch Deck
          </a>
          <a
            href="mailto:investor@thamaniaurum.ug"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-bold text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Speak to Management
          </a>
        </div>
      </PageHero>

      {/* Investment Thesis */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn>
              <div>
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Our Thesis
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                  Our Growth Thesis
                </h2>
                <p className="text-navy/60 leading-relaxed mb-6 text-lg">
                  Thamani Aurum is strategically positioned to institutionalise
                  the $5B+ regional gold market. By integrating laboratory
                  precision, refinery capacity, and direct export desks, we
                  eliminate third-party friction and capture margins at every
                  stage.
                </p>
                <p className="text-navy/60 leading-relaxed mb-8">
                  We serve as the definitive, compliant corridor for
                  institutional-grade gold exports from the Great Lakes region.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: "Compliance-First" },
                    { icon: TrendingUp, label: "Margin Capture" },
                    { icon: Building, label: "Vertical Integration" },
                    { icon: Globe, label: "Global Market Access" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-light-grey p-4 rounded-lg"
                    >
                      <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm font-semibold text-navy">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Investment Card */}
            <AnimateIn delay={200}>
              <div className="bg-navy rounded-2xl p-8 lg:p-10 border-l-4 border-gold invest-glow sticky top-28">
                <h3 className="font-serif text-2xl text-gold mb-8 font-bold">
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
                    className={`flex justify-between items-center py-5 ${
                      i < 4 ? "border-b border-navy-light" : ""
                    }`}
                  >
                    <span className="text-slate-text text-sm">
                      {metric.label}
                    </span>
                    <span className="text-gold-light font-bold">
                      {metric.value}
                    </span>
                  </div>
                ))}

                <div className="flex flex-col gap-3 mt-8">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 bg-gold text-navy px-6 py-4 rounded font-bold text-sm hover:bg-gold-light transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download Pitch Deck (PDF)
                  </a>
                  <a
                    href="mailto:investor@thamaniaurum.ug"
                    className="flex items-center justify-center gap-2 border-2 border-gold text-gold px-6 py-4 rounded font-bold text-sm hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Speak to Management
                  </a>
                </div>

                <p className="text-slate-text/50 text-[0.65rem] italic mt-8 leading-relaxed">
                  Disclaimer: For professional investors only. Mineral
                  investments carry significant market and geological risk. Past
                  performance is not indicative of future results.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Sourcing and Production Hubs */}
      <section className="py-20 lg:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Operational Footprint
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4">
                Our Sourcing and Production Hubs
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Uganda",
              "Democratic Republic of Congo (DRC)",
              "Tanzania",
              "South Sudan",
            ].map((hub, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border-l-4 border-gold hover:shadow-lg transition-all duration-300 text-center">
                  <p className="font-serif text-lg font-bold text-navy">
                    {hub}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Phases */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Phased Expansion
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
                Our Growth Roadmap
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase I",
                title: "Verification & Lab",
                status: "Active",
                active: true,
                image: "/images/laboratory.jpg",
                description:
                  "End-to-end verification from independent scouting, supply chain due diligence, compliance and risk auditing, and general consultation. Establishing the regional standard for forensic gold verification.",
                highlights: [
                  "XRF technology deployed",
                  "Due diligence framework",
                  "Revenue generating",
                ],
              },
              {
                phase: "Phase II",
                title: "Modular Refining",
                status: "Q3 2026",
                active: false,
                image: "/images/refinery.jpg",
                description:
                  "Commissioning of our 600kg/day chemical refinery to produce 24K bullion meeting international standards. This is the core of our value addition strategy.",
                highlights: [
                  "600kg/day capacity",
                  "Partner network facilities",
                  "24K bullion output",
                ],
              },
              {
                phase: "Phase III",
                title: "Upstream Mining",
                status: "2027",
                active: false,
                image: "/images/mining-operations.jpg",
                description:
                  "Direct acquisition and mechanization of medium-scale gold mining licenses. Securing our own supply chain for maximum margin capture.",
                highlights: [
                  "License acquisition",
                  "Mechanized operations",
                  "Full chain control",
                ],
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 150}>
                <div
                  className={`rounded-xl overflow-hidden border ${
                    item.active
                      ? "border-gold/40 ring-1 ring-gold/20"
                      : "border-navy-light"
                  }`}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                          item.active
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-navy-light/80 text-slate-text border border-navy-light"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-navy-dark/50">
                    <span className="text-gold font-serif font-bold text-sm">
                      {item.phase}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-text text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      {item.highlights.map((h, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span className="text-white/70 text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Advantage */}
      <section className="py-20 lg:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <div className="relative">
                <Image
                  src="/images/gold-bullion.jpg"
                  alt="Investment grade gold bullion"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-2xl object-cover w-full h-[400px]"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div>
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Competitive Moat
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                  Why Invest in Thamani Aurum?
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      title: "Regulatory First-Mover",
                      desc: "Uganda Mining Act 2022 mandates local value addition. Early compliance = market dominance.",
                    },
                    {
                      title: "$5B+ Market Opportunity",
                      desc: "The Great Lakes regional gold market is vastly underserved by compliant operators.",
                    },
                    {
                      title: "Margin at Every Stage",
                      desc: "Vertical integration from verification through refining to export captures full margin.",
                    },
                    {
                      title: "Clear Exit Path",
                      desc: "5-7 year horizon via strategic buy-back or M&A with larger mining groups.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 rounded-lg bg-white border border-light-grey hover:border-gold/30 transition-colors"
                    >
                      <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-navy text-sm mb-1">
                          {item.title}
                        </h4>
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

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dubai-trading.jpg"
            alt="Dubai trading desk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Ready to Join Our Growth Story?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our management team to discuss investment
              opportunities and receive our detailed pitch deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:investor@thamaniaurum.ug"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm hover:bg-gold-light transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                investor@thamaniaurum.ug
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded font-bold text-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                Contact Form
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
