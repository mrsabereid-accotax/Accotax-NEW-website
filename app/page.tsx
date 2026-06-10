import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Phone,
  Clock,
  Globe2,
  Sparkles,
  Headset,
  UserCheck,
  CheckCircle2,
  Eye,
  Target,
  Gem,
  MessagesSquare,
  ClipboardList,
  Repeat,
  TrendingUp,
  Building2,
  Rocket,
  ShoppingCart,
  Briefcase,
  Store,
  Factory,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import Faq, { type FaqItem } from "@/components/Faq";
import ServiceCarousel, { type CarouselCard } from "@/components/ServiceCarousel";
import { site } from "@/lib/site";
import { categories, categoryImage, servicesByCategory, services } from "@/lib/services";

const marqueeItems = [
  "Accounting & Bookkeeping",
  "Corporate Tax",
  "VAT & Indirect Tax",
  "Company Setup",
  "FTA-Approved Tax Agent",
  "Free Zone Compliance",
  "Business Consulting",
  "Internal Audit",
];

const stats = [
  { end: services.length, suffix: "+", label: "Specialist services" },
  { end: Object.keys(categories).length, pad: true, label: "Core service areas" },
  { end: 9, suffix: "%", label: "Standard Corporate Tax rate" },
  { end: 5, suffix: "%", label: "UAE VAT — fully managed" },
];

const whyFeatures = [
  {
    icon: ShieldCheck,
    title: "FTA-Approved Tax Agency",
    text: "Represent your business before the Federal Tax Authority with confidence and full compliance.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    text: "Timely, accurate and up-to-date financial and tax solutions, delivered when you need them.",
  },
  {
    icon: Globe2,
    title: "Deep UAE Expertise",
    text: "Profound knowledge of local regulations across a wide range of sectors, mainland and Free Zones.",
  },
  {
    icon: Sparkles,
    title: "Proactive Solutions",
    text: "We anticipate issues and provide tailored solutions — often before you are even aware of them.",
  },
  {
    icon: UserCheck,
    title: "Expert Professionals",
    text: "Experienced, qualified staff with exceptional accounting knowledge and a deep grasp of tax law.",
  },
  {
    icon: Headset,
    title: "Personal Support",
    text: "Stay compliant with minimal effort — personalised insight and guidance for every engagement.",
  },
];

const process = [
  {
    icon: MessagesSquare,
    title: "Consultation",
    text: "We get to know your business, review your obligations and recommend the right approach.",
  },
  {
    icon: ClipboardList,
    title: "Setup & Registration",
    text: "We handle VAT and Corporate Tax registration and set up your accounting on a solid footing.",
  },
  {
    icon: Repeat,
    title: "Bookkeeping & Compliance",
    text: "Ongoing accounting, accurate records and on-time returns keep you fully compliant.",
  },
  {
    icon: TrendingUp,
    title: "Advisory & Growth",
    text: "Proactive insights, planning and reporting help you optimise and grow with confidence.",
  },
];

const industries = [
  { icon: Building2, label: "SMEs" },
  { icon: Globe2, label: "Free Zone Companies" },
  { icon: Rocket, label: "Startups" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: ShoppingCart, label: "E-commerce & Retail" },
  { icon: Store, label: "Trading" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Target, label: "Corporates" },
];

const faqs: FaqItem[] = [
  {
    q: "Is Accotax an FTA-approved tax agency?",
    a: "Yes. Accotax is an FTA-approved tax agency, which means we can register with — and represent your business before — the UAE Federal Tax Authority for VAT and Corporate Tax matters.",
  },
  {
    q: "Who needs to register for UAE Corporate Tax?",
    a: "Almost all UAE businesses must register with the FTA and obtain a Corporate Tax Registration Number, including mainland and Free Zone companies, within the FTA's deadlines. We manage the full registration process for you.",
  },
  {
    q: "What are the UAE Corporate Tax rates?",
    a: "Corporate Tax is charged at 0% on taxable income up to AED 375,000 and 9% on taxable income above that. Qualifying Free Zone Persons may benefit from a 0% rate on their qualifying income, subject to conditions.",
  },
  {
    q: "When does my business need to register for VAT?",
    a: "VAT registration is mandatory once your taxable supplies exceed AED 375,000 in a 12-month period, with voluntary registration available from AED 187,500. We assess your position and handle the registration.",
  },
  {
    q: "How often are VAT returns filed?",
    a: "VAT returns are filed with the FTA each tax period — usually within 28 days of the end of the period defined for your business. Our team prepares and files them on time to avoid penalties.",
  },
  {
    q: "Do you work with Free Zone companies?",
    a: "Yes. We serve both mainland and Free Zone businesses across the UAE, including Qualifying Free Zone Person (QFZP) assessment and advisory to help protect the 0% Corporate Tax benefit.",
  },
];

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    text: "To be the premier accounting firm — through unrivalled service, teamwork and professionalism.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "Integrated services with unbeatable accuracy, on time and at affordable prices.",
  },
  {
    icon: Gem,
    title: "Values",
    text: "Client satisfaction and long-term loyalty, with services that keep your business in mind.",
  },
];

export default function HomePage() {
  const carouselCards: CarouselCard[] = (
    Object.keys(categories) as (keyof typeof categories)[]
  ).map((key) => ({
    title: categories[key].label,
    tagline: categories[key].tagline,
    href: `/services#${key}`,
    image: categoryImage[key],
    count: `${servicesByCategory(key).length} service${
      servicesByCategory(key).length === 1 ? "" : "s"
    }`,
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ───────────────── Cinematic hero ───────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink-950">
        {/* Background video (muted, looping) with the skyline image as poster/fallback */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-skyline.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950/95 via-ink-950/85 to-teal-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,_rgba(20,165,150,0.28),_transparent_55%)]" />

        <div className="container-x relative py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> FTA-Approved Tax Agency · Dubai, UAE
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build your business on a{" "}
              <span className="text-teal-400">solid financial foundation</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Accotax is a professional accounting and tax agency in the U.A.E.
              We deliver accounting, Corporate Tax, VAT and advisory services
              that keep you compliant — so you can focus on growth.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-teal text-base">
                Request a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-ghost-light text-base">
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-12 flex items-center gap-6 text-sm text-white/70">
              <a
                href={site.phones[0].href}
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-teal-300"
              >
                <Phone className="h-4 w-4 text-teal-400" />
                {site.phones[0].display}
              </a>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="hidden sm:block">Mainland & Free Zone clients</span>
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute inset-x-0 bottom-7 flex justify-center">
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
            <span className="h-2 w-1 animate-scroll-cue rounded-full bg-teal-400" />
          </span>
        </div>
      </section>

      {/* ───────────────── Marquee ───────────────── */}
      <Marquee items={marqueeItems} />

      {/* ───────────────── Stats ───────────────── */}
      <section className="bg-ink-900 py-16">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="border-l border-white/10 pl-5"
            >
              <p className="font-display text-4xl font-extrabold text-teal-400 sm:text-5xl">
                <CountUp end={s.end} suffix={s.suffix} pad={s.pad} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Intro / who we are ───────────────── */}
      <section className="bg-white py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-team.jpg"
                alt="The Accotax team"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* floating stat card */}
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-ink-950 p-6 shadow-xl sm:block">
              <p className="font-display text-3xl font-extrabold text-teal-400">
                100%
              </p>
              <p className="mt-1 max-w-[9rem] text-xs text-white/70">
                Focused on your compliance & peace of mind
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow-teal">
              <span className="h-px w-7 bg-current opacity-60" /> Who We Are
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              A trusted partner for accounting & tax in the UAE
            </h2>
            <p className="mt-6 leading-relaxed text-ink-700/80">
              In our constant efforts to serve clients with the most suitable
              solutions on time, we have built our offering on profound industry
              insight, quality bookkeeping and a special eye for each client's
              needs. From everyday bills to financial statements and visual
              reports, we have served many companies across a wide range of
              industries.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map(({ icon: I, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-ink-900/10 bg-teal-50/50 p-5"
                >
                  <I className="h-6 w-6 text-teal-600" />
                  <h3 className="mt-3 font-display text-sm font-bold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-700/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-teal mt-8">
              More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Services carousel ───────────────── */}
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(20,165,150,0.18),_transparent_50%)]" />
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <span className="eyebrow-teal">
                <span className="h-px w-7 bg-current opacity-60" /> What We Do
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A complete ecosystem of financial services
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                From day-to-day bookkeeping to Corporate Tax, VAT and strategic
                advisory — everything your business needs, under one roof.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/services" className="btn-teal whitespace-nowrap">
                All Services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12">
            <ServiceCarousel cards={carouselCards} />
          </div>
        </div>
      </section>

      {/* ───────────────── How we work ───────────────── */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-teal justify-center">
              <span className="h-px w-7 bg-current opacity-60" /> How We Work
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              A clear path to compliance & growth
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700/80">
              A simple, transparent process — from first conversation to ongoing
              partnership.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 90} className="relative">
                <div className="group h-full rounded-3xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-ink-950">
                      <I className="h-7 w-7" />
                    </span>
                    <span className="font-display text-5xl font-extrabold text-ink-900/5">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Why Accotax (ecosystem grid) ───────────────── */}
      <section className="bg-teal-50/40 py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-teal justify-center">
              <span className="h-px w-7 bg-current opacity-60" /> Why Accotax
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              A choice that makes the difference
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700/80">
              We go beyond traditional accounting — providing smart solutions,
              personalised insight and a partner genuinely invested in your
              success.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 90}>
                <div className="group h-full rounded-3xl border border-ink-900/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-card-hover">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950 text-teal-400 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-ink-950">
                    <I className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-700/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Corporate Tax feature band ───────────────── */}
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <Image
          src="/images/corporate-tax.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/95 to-teal-950/80" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow-teal">
              <span className="h-px w-7 bg-current opacity-60" /> UAE Corporate Tax
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Corporate Tax is here — is your business ready?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Since financial years beginning on or after 1 June 2023, UAE
              businesses are subject to federal Corporate Tax. We handle
              registration, return filing, impact assessments and Free Zone
              advisory — so you stay compliant and tax-efficient.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services#corporate" className="btn-teal">
                Corporate Tax Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Book an Assessment
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {[
              { value: "0%", label: "On taxable income up to AED 375,000" },
              { value: "9%", label: "On taxable income above AED 375,000" },
              { value: "9 mo", label: "To file & pay after year-end" },
              { value: "0%", label: "Free Zone Qualifying Income (QFZP)" },
            ].map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-teal-400/40"
              >
                <p className="font-display text-3xl font-extrabold text-teal-400">
                  {f.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {f.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Industries ───────────────── */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-teal justify-center">
              <span className="h-px w-7 bg-current opacity-60" /> Who We Serve
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Trusted across industries
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700/80">
              From startups and SMEs to Free Zone companies and established
              corporates — we tailor our services to your sector.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map(({ icon: I, label }, i) => (
              <Reveal key={label} delay={(i % 4) * 70}>
                <div className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-card">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-ink-950">
                    <I className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-bold text-ink-900">
                    {label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="bg-teal-50/40 py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-teal justify-center">
              <span className="h-px w-7 bg-current opacity-60" /> FAQ
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Questions, answered
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700/80">
              The essentials on working with an FTA-approved tax agency in the UAE.
            </p>
          </Reveal>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* ───────────────── Final CTA ───────────────── */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-center sm:px-12 sm:py-20">
            <Image
              src="/images/cta-skyline.jpg"
              alt=""
              fill
              sizes="(min-width:1280px) 1216px, 100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-teal-950/70" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let's build your success together
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                Talk to an FTA-approved tax expert today. We'll help you stay
                compliant, save time and focus on growing your business.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-teal text-base">
                  Request a Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <a href={site.phones[0].href} className="btn-ghost-light text-base">
                  <Phone className="h-5 w-5" />
                  {site.phones[0].display}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
                {[
                  "FTA-Approved",
                  "Mainland & Free Zone",
                  "Corporate Tax & VAT",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
