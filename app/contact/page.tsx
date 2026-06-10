import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Accotax Accounting Services in Dubai. Call, email or send us a message and one of our representatives will respond as soon as possible.",
};

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.social.twitter, label: "Twitter / X" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
].filter((s) => s.href);

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapQuery,
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with Accotax"
        description="Accotax provides professional accounting, tax, VAT consulting and advisory services to clients all over the UAE. We're an FTA-approved tax agency — and help is just a click away."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Info column */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-current opacity-60" /> Speak to us
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                We're here for you
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                For any accounting-related queries, please contact us. A member
                of our team will always be happy to assist. Reach us by phone or
                email and we'll respond as soon as possible.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email us">
                <a
                  href={`mailto:${site.email.primary}`}
                  className="block text-navy-700 hover:text-teal-600"
                >
                  {site.email.primary}
                </a>
                <a
                  href={`mailto:${site.email.secondary}`}
                  className="block text-navy-700 hover:text-teal-600"
                >
                  {site.email.secondary}
                </a>
              </ContactRow>

              <ContactRow icon={Phone} label="Call us">
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block text-navy-700 hover:text-teal-600"
                  >
                    {p.display}
                  </a>
                ))}
              </ContactRow>

              <ContactRow icon={MapPin} label="Visit us">
                <p className="text-navy-700">{site.address.lines.join(", ")}</p>
              </ContactRow>

              <ContactRow icon={Clock} label="Office hours">
                <p className="text-navy-700">{site.hours}</p>
              </ContactRow>
            </Reveal>

            <Reveal delay={160} className="mt-8">
              <p className="text-sm font-semibold text-navy-800">Follow us</p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ icon: I, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink-950 text-white transition-colors hover:bg-teal-500 hover:text-navy-950"
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <Reveal delay={80} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-display text-xl font-bold text-navy-900">
                Help is just a click away
              </h2>
              <p className="mt-1 text-sm text-navy-600">
                Fill in the form below and one of our representatives will revert
                to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-2xl border border-navy-100 shadow-card">
            <iframe
              title="Accotax office location"
              src={mapSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-navy-100 bg-navy-50/40 p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-teal-400">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
          {label}
        </p>
        <div className="mt-1 text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}
