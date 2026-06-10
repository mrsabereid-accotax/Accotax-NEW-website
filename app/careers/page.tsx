import type { Metadata } from "next";
import { Mail, Linkedin, GraduationCap, Users, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Accotax Accounting Services. We offer a creative, stimulating working environment for candidates with strong academic backgrounds and solid business understanding.",
};

const perks = [
  {
    icon: Sparkles,
    title: "Creative environment",
    text: "A creative and stimulating working environment where your ideas matter.",
  },
  {
    icon: GraduationCap,
    title: "Grow with us",
    text: "We value strong academic backgrounds, personal skills and solid business understanding.",
  },
  {
    icon: Users,
    title: "Real opportunities",
    text: "The possibility of working on a wide range of engagements across industries.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with Accotax"
        description="We are always happy to consider applications from talented people who want to grow with a leading UAE accounting and tax firm."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" /> Career Objective
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              A workplace that helps you thrive
            </h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              We offer a creative and stimulating working environment, with the
              possibility of working on a broad range of engagements. We are
              happy to consider applications from candidates with a strong
              academic background and personal skills, as well as solid business
              understanding.
            </p>
            <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/40 p-7">
              <h3 className="font-display text-lg font-bold text-navy-900">
                How to apply
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                Please send your application to the address below. We review
                every application carefully.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email.primary}?subject=Career application`}
                  className="btn-gold"
                >
                  <Mail className="h-4 w-4" /> {site.email.primary}
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Linkedin className="h-4 w-4" /> Follow us on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-5">
            {perks.map(({ icon: I, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-teal-400">
                  <I className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
