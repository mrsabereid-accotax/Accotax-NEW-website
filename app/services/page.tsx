import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import {
  categories,
  servicesByCategory,
  type ServiceCategory,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Accotax's full range of accounting & bookkeeping, tax & VAT, and advisory services for businesses across the UAE.",
};

const order: ServiceCategory[] = [
  "accounting",
  "corporate",
  "tax",
  "advisory",
  "setup",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your business needs, under one roof"
        description="From day-to-day bookkeeping to FTA representation and strategic advisory — explore our complete catalogue of services for UAE businesses."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {order.map((cat, idx) => {
        const c = categories[cat];
        const list = servicesByCategory(cat);
        return (
          <section
            key={cat}
            id={cat}
            className={idx % 2 === 0 ? "bg-white py-20 sm:py-24" : "bg-navy-50/50 py-20 sm:py-24"}
          >
            <div className="container-x">
              <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-800 to-ink-950 text-teal-400">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                    {c.label}
                  </h2>
                  <p className="mt-1 max-w-2xl text-navy-600">{c.tagline}</p>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((service, i) => (
                  <Reveal key={service.slug} delay={(i % 3) * 80}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
