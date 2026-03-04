import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Leadership & Governance | Thamani Aurum",
  description:
    "Meet the architects of Thamani Aurum's vision. Led by Blessing Chisadza, a seasoned venture capitalist and institutional builder.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Leadership & Governance"
        subtitle="Meet the architects of Thamani Aurum's vision"
        imageSrc="/images/gold-bullion.jpg"
        imageAlt="Thamani Aurum leadership"
      />

      {/* Executive Profile */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                Executive Team
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4">
                Executive Leadership
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <AnimateIn className="lg:col-span-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/tamuka.jpeg"
                    alt="Blessing Chisadza - Managing Director"
                    width={500}
                    height={650}
                    className="w-full object-cover"
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold/30 -z-10" />
              </div>
            </AnimateIn>

            {/* Bio */}
            <AnimateIn delay={200} className="lg:col-span-3">
              <div>
                <div className="mb-6">
                  <h3 className="font-serif text-3xl font-bold text-navy">
                    Blessing Chisadza
                  </h3>
                  <p className="text-gold font-semibold mt-1">
                    Managing Director & Strategic Architect
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-navy/60 leading-relaxed">
                  <p>
                    Blessing Chisadza is the Managing Director of Thamani Aurum.
                    A seasoned venture capitalist and institutional builder,
                    Blessing specializes in the foundational structuring of
                    startups and driving them toward aggressive, sustainable
                    growth.
                  </p>
                  <p>
                    Blessing{"'"}s track record as a serial entrepreneur is
                    anchored by his success as the founder of{" "}
                    <strong className="text-navy">
                      Afro Cube Investments
                    </strong>{" "}
                    in 2018. Under his leadership, the renewable energy firm
                    surpassed{" "}
                    <strong className="text-navy">
                      $1M+ in annual revenue
                    </strong>{" "}
                    and successfully transitioned from a local startup into a
                    regional powerhouse with operations spanning Zimbabwe,
                    Zambia, and South Africa.
                  </p>
                  <p>
                    At Thamani Aurum, Blessing applies this same rigor to the
                    mineral sector. He is the primary architect of the company
                    {"'"}s vertical integration strategy, ensuring that every
                    corporate department{"---"}from upstream mining to downstream
                    Dubai exports{"---"}functions with mathematical precision and
                    total regulatory compliance. His obsession with detail and
                    corporate governance is the bedrock upon which Thamani{"'"}s
                    {"\""}Global Gateway{"\""} is built.
                  </p>
                </div>

                {/* Strength Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Cross-border Scaling",
                    "Venture Capital",
                    "Corporate Restructuring",
                    "Startup Growth",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-gold text-navy px-4 py-1.5 rounded-full text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm text-navy/50">
                  <strong>Education:</strong> Bachelor of Business
                  Administration (Hons), Reformed Church University, Zimbabwe.
                </div>

                {/* Quote */}
                <div className="mt-8 border-l-4 border-gold pl-6 py-2">
                  <Quote className="w-6 h-6 text-gold/40 mb-2" />
                  <p className="text-gold italic font-serif text-lg leading-relaxed">
                    {"\""}Structure precedes scale. To move a mountain of gold,
                    one must first build an unbreakable machine.{"\""}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                How We Operate
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
                Governance Framework
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Compliance-First Operations",
                desc: "Every decision undergoes rigorous regulatory scrutiny, ensuring adherence to Uganda Mining Act 2022 and international standards. We maintain zero tolerance for ethical violations.",
                image: "/images/laboratory.jpg",
              },
              {
                title: "Institutional Partnerships",
                desc: "Strategic alliances with DMCC, formal mining cooperatives, and global logistics providers ensure transparency and accountability at every stage of our value chain.",
                image: "/images/dubai-trading.jpg",
              },
              {
                title: "Technical Excellence",
                desc: "Our leadership infrastructure is backed by state-of-the-art laboratory equipment (XRF technology) and internationally certified assayers to guarantee purity and accuracy.",
                image: "/images/refinery.jpg",
              },
            ].map((card, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="group rounded-xl overflow-hidden border border-navy-light hover:border-gold/30 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />
                  </div>
                  <div className="p-6 bg-navy-dark/50">
                    <h3 className="font-serif text-lg font-bold text-gold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-text text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
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
              Interested in Working With Us?
            </h2>
            <p className="text-navy/60 mb-8 max-w-xl mx-auto">
              Connect with our leadership team to discuss partnerships,
              investment opportunities, or collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded font-bold text-sm hover:bg-gold-light transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded font-bold text-sm hover:bg-navy hover:text-white transition-all duration-300"
              >
                Investor Relations
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
