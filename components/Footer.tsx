import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { categories } from "@/lib/services";

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.social.twitter, label: "Twitter / X" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
].filter((s) => s.href);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink-950 text-navy-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-navy-300">
            An FTA-approved tax agency providing professional accounting, tax,
            VAT and advisory services to clients across the UAE.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-navy-200 transition-colors hover:bg-teal-500 hover:text-navy-950"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-navy-300 transition-colors hover:text-teal-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Our Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {Object.entries(categories).map(([key, c]) => (
              <li key={key}>
                <Link
                  href={`/services#${key}`}
                  className="text-navy-300 transition-colors hover:text-teal-400"
                >
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/packages"
                className="text-navy-300 transition-colors hover:text-teal-400"
              >
                Pricing & Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              <span className="text-navy-300">
                {site.address.lines.join(", ")}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              <span className="flex flex-col gap-1">
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="text-navy-300 transition-colors hover:text-teal-400"
                  >
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              <a
                href={`mailto:${site.email.primary}`}
                className="text-navy-300 transition-colors hover:text-teal-400"
              >
                {site.email.primary}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-teal-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-teal-400">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
