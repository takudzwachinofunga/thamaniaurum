import type { Metadata } from "next";
import { Mail, MapPin, Globe, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Thamani Aurum",
  description:
    "Connect with our team of mineral and finance experts. Investment inquiries, partnerships, and collaboration.",
};

const offices = [
  {
    city: "Kampala",
    country: "Uganda",
    description: "Headquarters & Laboratory",
    icon: MapPin,
  },
  {
    city: "Entebbe",
    country: "Uganda",
    description: "Refinery Hub",
    icon: MapPin,
  },
  {
    city: "Dubai",
    country: "UAE",
    description: "DMCC Trading Desk",
    icon: Globe,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Connect with our team of mineral and finance experts"
        imageSrc="/images/dubai-trading.jpg"
        imageAlt="Contact Thamani Aurum"
      />

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <AnimateIn className="lg:col-span-1">
              <div>
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Contact Info
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy mt-3 mb-8">
                  Reach Out to Us
                </h2>

                {/* Email */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm mb-1">Email</p>
                    <a
                      href="mailto:investor@thamaniaurum.ug"
                      className="text-gold text-sm hover:text-gold-light transition-colors"
                    >
                      investor@thamaniaurum.ug
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <p className="font-bold text-navy text-sm mb-4">
                  Our Offices
                </p>
                <div className="flex flex-col gap-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="flex items-start gap-4 p-4 rounded-lg bg-light-grey"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <office.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-navy text-sm">
                          {office.city}, {office.country}
                        </p>
                        <p className="text-navy/50 text-xs">
                          {office.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-navy border-l-4 border-gold">
                  <p className="text-gold font-serif font-bold text-sm mb-2">
                    Response Time
                  </p>
                  <p className="text-slate-text text-sm leading-relaxed">
                    We typically respond to inquiries within 24-48 business
                    hours.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Contact Form */}
            <AnimateIn delay={200} className="lg:col-span-2">
              <div className="bg-light-grey rounded-2xl p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                  Send Us a Message
                </h3>
                <p className="text-navy/50 text-sm mb-8">
                  Fill out the form below and our team will get back to you
                  promptly.
                </p>
                <ContactForm />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
