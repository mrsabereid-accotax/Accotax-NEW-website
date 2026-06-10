import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import {
  categories,
  categoryImage,
  getService,
  services,
  servicesByCategory,
} from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    openGraph: { title: service.title, description: service.summary },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const cat = categories[service.category];
  const related = servicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={cat.label}
        title={service.title}
        description={service.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <Reveal className="relative mb-8 h-60 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src={categoryImage[service.category]}
                alt={service.title}
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
              <span className="absolute bottom-5 left-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-navy-950 shadow-lg">
                <Icon name={service.icon} className="h-7 w-7" />
              </span>
            </Reveal>

            <Reveal delay={60} className="prose-navy mt-8">
              {service.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            {service.list && (
              <Reveal delay={100} className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/40 p-7">
                {service.list.heading && (
                  <h2 className="font-display text-lg font-bold text-navy-900">
                    {service.list.heading}
                  </h2>
                )}
                <ul className="mt-4 grid gap-3">
                  {service.list.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <span className="text-sm leading-relaxed text-navy-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-outline">
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Contact card */}
              <div className="overflow-hidden rounded-2xl bg-ink-950 p-7 text-white">
                <h3 className="font-display text-lg font-bold">
                  Speak to an expert
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  Have a question about {service.title.toLowerCase()}? Our
                  FTA-approved team is ready to help.
                </p>
                <a
                  href={site.phones[0].href}
                  className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-teal-400" />
                  <span className="text-sm font-semibold">
                    {site.phones[0].display}
                  </span>
                </a>
                <Link href="/contact" className="btn-gold mt-4 w-full">
                  Get a Quote
                </Link>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="rounded-2xl border border-navy-100 p-7">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Related {cat.label}
                  </h3>
                  <ul className="mt-4 space-y-1">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                        >
                          {r.title}
                          <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
