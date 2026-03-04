import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Crosshair,
  Heart,
  AlertTriangle,
  Search,
  FileWarning,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "About Us | Thamani Aurum - The Architecture of Trust",
  description:
    "Founded in 2026 to solve the Trust Gap in the Great Lakes regional mineral sector. From pit to port, we are the Global Gateway.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Thamani Aurum"
        subtitle="The Architecture of Trust in African Minerals"
        imageSrc="/images/mining-operations.jpg"
        imageAlt="Gold mining operations in East Africa"
      />

      {/* Heritage */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <div>
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Our Heritage
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                  Where Value Meets Prestige
                </h2>
                <p className="text-navy/60 leading-relaxed mb-4 text-lg">
                  The name Thamani Aurum reflects our dual identity.{" "}
                  <strong className="text-gold">
                    Thamani is the Swahili word for Value and Prestige
                  </strong>
                  , honoring our roots in the East African landscape.{" "}
                  <strong className="text-gold">
                    Aurum is the Latin term for Gold (Au)
                  </strong>
                  , representing the timeless, global standard of the financial
                  markets we serve.
                </p>
                <p className="text-navy/60 leading-relaxed">
                  Founded in 2026, Thamani Aurum was established to solve the{" "}
                  <strong className="text-gold">
                    {"\""}Trust Gap{"\""} in the Great Lakes regional mineral sector
                  </strong>
                  . We aren{"'"}t just traders; we are the{" "}
                  <strong className="text-gold">Global Gateway</strong>
                  {"---"}an institutional bridge that ensures every gram of gold is
                  verified, ethical, and refined to world-class standards.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="relative">
                <Image
                  src="/images/mining-operations.jpg"
                  alt="Ethical mining foundation"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover w-full h-[400px]"
                />
                <div className="absolute -bottom-4 -left-4 bg-gold p-5 rounded-xl hidden lg:block">
                  <p className="text-navy font-serif text-lg font-bold">
                    Est. 2026
                  </p>
                  <p className="text-navy/70 text-xs">
                    Kampala, Uganda
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Ethical Mining Image Section */}
      <section className="py-20 lg:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <div className="relative">
                <Image
                  src="/images/laboratory.jpg"
                  alt="Laboratory testing"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover w-full h-[400px]"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div>
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Ethical Foundation
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mt-3 mb-4">
                  Ethical Mining Foundation
                </h3>
                <p className="text-navy/60 leading-relaxed mb-4">
                  Our commitment starts at the source. We partner exclusively
                  with formalized Artisanal and Small-scale Mining (ASM)
                  cooperatives, ensuring community benefit, environmental
                  protection, and conflict-free certification from our first
                  engagement.
                </p>
                <p className="text-navy/60 leading-relaxed">
                  Our Kampala facility equipped with state-of-the-art XRF
                  (X-Ray Fluorescence) technology provides forensic-grade purity
                  reports. Every gram undergoes rigorous analysis to ensure
                  accuracy and compliance with international standards.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                The Challenge
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
                The Problem We Solve
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
              <p className="text-slate-text mt-6 max-w-2xl mx-auto leading-relaxed">
                The regional gold market has historically been fragmented and
                high-risk. International buyers often face:
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Verification Risk",
                desc: "Lack of forensic due diligence on sellers leading to exposure to fraud and misrepresentation.",
              },
              {
                icon: AlertTriangle,
                title: "Purity Risk",
                desc: "Inaccurate assaying leading to significant financial loss on transactions.",
              },
              {
                icon: FileWarning,
                title: "Regulatory Risk",
                desc: "Non-compliance with evolving local value-addition laws creating legal exposure.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="p-8 rounded-xl border border-navy-light bg-navy-dark/30 hover:border-gold/30 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-serif text-lg font-bold text-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={300}>
            <div className="mt-12 text-center">
              <p className="text-white text-lg font-serif">
                Thamani Aurum{" "}
                <span className="text-gold font-bold">
                  eliminates these risks
                </span>{" "}
                by controlling the entire value chain.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Integrated Model */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Our Model
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4">
                From Pit to Port
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
              <p className="text-navy/60 mt-6 max-w-2xl mx-auto leading-relaxed">
                We operate through a sophisticated, vertically integrated
                framework that ensures 100% transparency.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "The Lab",
                title: "Verification",
                desc: "Our Kampala-based facility utilizes state-of-the-art XRF (X-Ray Fluorescence) technology to provide laboratory-grade purity reports.",
                image: "/images/laboratory.jpg",
              },
              {
                label: "The Source",
                title: "Production",
                desc: "We partner with formalized Artisanal and Small-scale Mining (ASM) cooperatives, providing mercury-free technology and geological oversight required for Conflict-Free certification.",
                image: "/images/mining-operations.jpg",
              },
              {
                label: "The Forge",
                title: "Refining",
                desc: "Adhering to the Uganda Mining and Minerals Act 2022, our Entebbe refinery converts raw dore into 99.99% (24K) Investment Grade Bullion.",
                image: "/images/refinery.jpg",
              },
              {
                label: "The Market",
                title: "Liquidity",
                desc: "Through our strategic desk at the Dubai Multi Commodities Centre (DMCC), we provide seamless access to the global bullion markets with Tier-1 secure logistics (Brinks/G4S).",
                image: "/images/dubai-trading.jpg",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="group relative rounded-xl overflow-hidden h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-gold text-xs font-bold tracking-widest uppercase">
                      {item.label}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4">
                Mission, Vision & Values
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimateIn>
              <div className="bg-white rounded-xl p-8 border-t-4 border-gold h-full">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  To modernize the East African gold supply chain through
                  uncompromising transparency, technical precision, and local
                  value addition.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="bg-white rounded-xl p-8 border-t-4 border-gold h-full">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  To be recognized as the premier institutional gateway for
                  ethical African gold, setting the benchmark for compliance and
                  integrity in the global market.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                desc: "We operate with a \"Compliance-First\" mindset. If it isn't ethical, it isn't Thamani.",
              },
              {
                icon: Crosshair,
                title: "Precision",
                desc: "In a game of decimals, we utilize the highest-grade technology to ensure accuracy in every assay.",
              },
              {
                icon: Heart,
                title: "National Impact",
                desc: "We are committed to Uganda's growth, ensuring that the wealth of the land benefits its people through local refining and job creation.",
              },
            ].map((value, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gold/20">
                  <value.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Learn More About Our Leadership
            </h2>
            <p className="text-navy/60 mb-8 max-w-xl mx-auto">
              Meet the architects behind Thamani Aurum{"'"}s vision and strategic
              direction.
            </p>
            <Link
              href="/leadership"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm hover:bg-gold-light transition-all duration-300"
            >
              Meet Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
