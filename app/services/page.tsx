import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Gem,
  Factory,
  TrendingUp,
  ArrowRight,
  Microscope,
  Scale,
  Truck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Services | Thamani Aurum - Integrated Value Chain",
  description:
    "From verification to global markets: Assay-as-a-Service, ethical mining production, 99.99% gold refining, and DMCC-backed trading.",
};

const services = [
  {
    icon: Shield,
    title: "Verification",
    subtitle: "The Lab",
    image: "/images/laboratory.jpg",
    description:
      "Our Kampala-based facility utilizes state-of-the-art XRF (X-Ray Fluorescence) technology to provide laboratory-grade purity reports. Every gram undergoes rigorous forensic analysis.",
    features: [
      "Forensic XRF assaying",
      "Legal due diligence for sellers",
      "Purity certification reports",
      "Conflict-free verification",
    ],
  },
  {
    icon: Gem,
    title: "Production",
    subtitle: "The Source",
    image: "/images/mining-operations.jpg",
    description:
      "We partner with formalized Artisanal and Small-scale Mining (ASM) cooperatives, providing mercury-free technology and geological oversight for Conflict-Free certification.",
    features: [
      "Formalized ASM partnerships",
      "Mercury-free extraction",
      "Geological oversight",
      "Community benefit programs",
    ],
  },
  {
    icon: Factory,
    title: "Refining",
    subtitle: "The Forge",
    image: "/images/refinery.jpg",
    description:
      "Adhering to the Uganda Mining and Minerals Act 2022, our Entebbe refinery converts raw dore into 99.99% (24K) Investment Grade Bullion meeting international standards.",
    features: [
      "99.99% purity (24K)",
      "10kg/day capacity",
      "Act 2022 compliant",
      "Investment-grade output",
    ],
  },
  {
    icon: TrendingUp,
    title: "Liquidity",
    subtitle: "The Market",
    image: "/images/dubai-trading.jpg",
    description:
      "Through our strategic desk at the Dubai Multi Commodities Centre (DMCC), we provide seamless access to the global bullion markets with Tier-1 secure logistics.",
    features: [
      "DMCC trading desk",
      "Brinks/G4S logistics",
      "Global buyer network",
      "Real-time pricing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Integrated Value Chain"
        subtitle="Controlling every stage from verification to global market access, ensuring transparency and maximum value capture."
        imageSrc="/images/refinery.jpg"
        imageAlt="Gold refining process"
      />

      {/* Services Detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-24">
            {services.map((service, i) => (
              <AnimateIn key={i}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative group rounded-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gold/90 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-navy" />
                      </div>
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-navy/60 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 bg-light-grey px-4 py-3 rounded-lg"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span className="text-sm text-navy font-medium">
                            {feature}
                          </span>
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

      {/* Process Flow */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Our Process
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
                From Pit to Port
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                step: "01",
                title: "Assay & Verify",
                desc: "XRF forensic analysis and legal due diligence on all incoming material.",
              },
              {
                icon: Scale,
                step: "02",
                title: "Weigh & Document",
                desc: "Precise measurement and full chain-of-custody documentation.",
              },
              {
                icon: Factory,
                step: "03",
                title: "Refine to 24K",
                desc: "Chemical refining to produce 99.99% investment-grade bullion.",
              },
              {
                icon: Truck,
                step: "04",
                title: "Export & Trade",
                desc: "Secure logistics to DMCC and direct placement with global buyers.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="relative p-8 rounded-xl border border-navy-light bg-navy-dark/30 hover:border-gold/30 transition-all duration-300 group">
                  <span className="text-gold/20 font-serif text-6xl font-bold absolute top-4 right-6">
                    {item.step}
                  </span>
                  <item.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-serif text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Interested in Our Services?
            </h2>
            <p className="text-navy/60 mb-8 max-w-xl mx-auto">
              Whether you{"'"}re a miner, buyer, or investor, our team is ready
              to discuss how we can serve your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm hover:bg-gold-light transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded font-bold text-sm hover:bg-navy hover:text-white transition-all duration-300"
              >
                Investment Opportunity
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
