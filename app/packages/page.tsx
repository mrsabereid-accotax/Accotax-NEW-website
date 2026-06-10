import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { packageGroups } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Tailored accounting, Corporate Tax and VAT packages from Accotax for businesses of every size in the UAE. Request a free, no-obligation quote.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages & Pricing"
        title="Packages that meet every need"
        description="Accotax offers a variety of packages to suit any company size or service. Every engagement is tailored to your business — request a quote and we'll recommend the most effective, cost-efficient package for you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Packages" }]}
      />

      {packageGroups.map((group, gi) => (
        <section
          key={group.id}
          className={gi % 2 === 0 ? "bg-white py-16 sm:py-20" : "bg-navy-50/50 py-16 sm:py-20"}
        >
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                {group.title}
              </h2>
              {group.intro && (
                <p className="mt-2 max-w-2xl text-navy-600">{group.intro}</p>
              )}
            </Reveal>

            <div
              className={`mt-10 grid gap-6 ${
                group.packages.length >= 4
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {group.packages.map((pkg, i) => (
                <Reveal key={pkg.name} delay={(i % 3) * 80}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all ${
                      pkg.featured
                        ? "border-teal-300 bg-white shadow-card-hover ring-1 ring-teal-200"
                        : "border-navy-100 bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover"
                    }`}
                  >
                    {pkg.featured && (
                      <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-teal-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">
                        <Star className="h-3 w-3 fill-current" /> Popular
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      {pkg.name}
                    </h3>
                    {pkg.subtitle && (
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-400">
                        {pkg.subtitle}
                      </p>
                    )}
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-700">
                        Pricing on request
                      </span>
                    </div>

                    <ul className="mt-6 flex-1 space-y-3 border-t border-navy-100 pt-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                          <span className="text-sm leading-relaxed text-navy-600">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`mt-7 w-full ${pkg.featured ? "btn-gold" : "btn-navy"}`}
                    >
                      Request a Quote
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Not sure which package fits?"
        description="Contact us now and we'll recommend the most effective, cost-efficient package for your business."
        primaryLabel="Get a Custom Quote"
      />
    </>
  );
}
