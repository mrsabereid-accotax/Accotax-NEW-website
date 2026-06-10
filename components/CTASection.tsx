import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CTASection({
  title = "Ready to simplify your accounting and tax?",
  description = "Talk to an FTA-approved tax expert today. We'll help you stay compliant, save time and focus on growing your business.",
  primaryLabel = "Request a Consultation",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 sm:px-12 sm:py-16">
          <Image
            src="/images/cta-skyline.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover opacity-20"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-teal-950/65" />
          {/* decorative accents */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-teal-400/15 blur-2xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold w-full sm:w-auto">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phones[0].href}
                className="btn-ghost-light w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {site.phones[0].display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
