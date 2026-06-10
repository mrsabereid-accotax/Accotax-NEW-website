import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Target, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import CTASection from "@/components/CTASection";
import { services, categories } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Accotax Accounting Services is an FTA-approved tax agency providing accounting, taxation and management consulting across the UAE — for startups, SMEs and large entities.",
};

const aboutStats = [
  { end: services.length, suffix: "+", label: "Specialist services" },
  { end: Object.keys(categories).length, pad: true, label: "Core service areas" },
  { end: 9, suffix: "%", label: "Standard Corporate Tax rate" },
  { end: 5, suffix: "%", label: "UAE VAT — fully managed" },
];

const differentiators = [
  "In-depth understanding of a wide range of sectors and local regulations",
  "Proactive, tailored solutions — often before you are aware of an issue",
  "A team that brings exceptional accounting knowledge and tax-law expertise",
  "Smart, personalised guidance beyond traditional accounting",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Accotax"
        title="The leading accounting company in the UAE"
        description="Together, we can build a stronger, compliant and more profitable business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Stats */}
      <section className="bg-ink-900 py-14">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-l border-white/10 pl-5">
              <p className="font-display text-4xl font-extrabold text-teal-400 sm:text-5xl">
                <CountUp end={s.end} suffix={s.suffix} pad={s.pad} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Company */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" /> Our Company
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Built around our clients' needs
            </h2>
            <div className="prose-navy mt-6">
              <p>
                In our constant efforts to provide our clients with the most
                suitable service propositions on time, we have worked day in,
                day out — creating service offerings based on our profound
                industry insight and knowledge, and a special eye for the needs
                of our clients.
              </p>
              <p>
                We know that each client has different, unique requirements, and
                we support them with everything they need. By providing quality
                bookkeeping solutions to entrepreneurs and transforming their
                everyday bills into financial statements and visual reports, we
                have served many companies with a wide range of services such as
                accounting &amp; bookkeeping, taxation, advisory services and
                business setup.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-5">
            <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64">
              <Image
                src="/images/about-team.jpg"
                alt="The Accotax team collaborating"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 to-transparent" />
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-teal-400">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                Our Vision
              </h3>
              <p className="mt-2 leading-relaxed text-navy-600">
                To be the premier accounting firm. Through unrivalled services,
                teamwork and professionalism, we contribute to the sustained
                growth of the economy and promote ethical business conduct.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-teal-400">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                Our Mission
              </h3>
              <p className="mt-2 leading-relaxed text-navy-600">
                To provide integrated services for our corporate clients — best
                solutions, unbeatable accuracy and timely delivery — with
                several packages at affordable prices, allowing our clients to
                focus on the dynamics for the growth of their businesses.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Services overview */}
      <section className="bg-navy-50/50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title="A full spectrum of accounting & consulting"
          />
          <Reveal delay={80} className="mt-6 max-w-4xl prose-navy">
            <p>
              We provide a full spectrum of general accounting, taxation and
              management consulting services to clients throughout the United
              Arab Emirates. This includes services tailored for startups, small
              to medium enterprises and large entities. For SMEs, we provide
              bookkeeping support, financial statement analysis and financial
              controller guidance, among other value-added accounting and
              business consulting services.
            </p>
            <p>
              We leverage our experience to help our clients select accountants,
              perform breakeven analyses, optimise their systems and prepare
              their organisations for growth. Whether clients need help
              interpreting their financial statements or performing operational
              audits, we are there to provide assistance. We also offer internal
              audits, third-party financial audits and information-system audits.
            </p>
            <p>
              Whether performing attestation, assurance or consulting services,
              we abide by applicable accounting standards and government
              regulations. Other services offered include due diligence,
              business valuations, policies and procedures formation, and
              business-performance improvement consulting.
            </p>
          </Reveal>
          <div className="mt-8">
            <Link href="/services" className="btn-navy">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why we're different */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" /> A Choice That Makes the Difference
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              A trusted partner dedicated to your success
            </h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              At Accotax Accounting Services, we understand that companies rely
              on trusted support to navigate the complexities of accounting and
              tax management. By partnering with us, you can stay compliant with
              minimal effort and without the need for additional resources —
              freeing you to focus on your core business objectives.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              Leveraging our extensive experience across the accounting and
              taxation industry, we bring expertise spanning many sectors and a
              deep knowledge of local regulations to every client engagement.
            </p>
          </Reveal>
          <Reveal delay={120} className="grid gap-4">
            {differentiators.map((d) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/40 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                <p className="text-sm leading-relaxed text-navy-700">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's build your success together"
        description="Partner with an FTA-approved tax agency that treats your business as its own."
      />
    </>
  );
}
