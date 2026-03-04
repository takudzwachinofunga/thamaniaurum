import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-36 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Thamani Aurum
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed text-pretty">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
