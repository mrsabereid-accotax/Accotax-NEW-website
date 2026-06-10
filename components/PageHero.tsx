import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <Image
        src="/images/hero-skyline.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/92 to-teal-950/75" />
      {/* subtle grid / glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,39,0.14),_transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />
      <div className="container-x relative py-16 sm:py-20">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-navy-300"
          >
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-navy-500" />}
                {b.href ? (
                  <Link
                    href={b.href}
                    className="transition-colors hover:text-teal-400"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-teal-400">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow text-teal-400">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
