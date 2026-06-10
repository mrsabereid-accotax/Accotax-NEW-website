/**
 * Central site configuration — single source of truth for company details.
 * Edit contact info, social links, and navigation here.
 *
 * NOTE: The original WordPress export contained two office addresses and a few
 * inconsistent phone-number digits. The values below use the dedicated
 * "Contact Us" page as the authoritative source. Please verify before launch.
 */

export const site = {
  name: "Accotax Accounting Services",
  shortName: "Accotax",
  tagline: "Accounting Services & Tax Agency — Dubai, UAE",
  description:
    "Accotax Accounting Services is an FTA-approved tax agency in Dubai providing accounting, bookkeeping, UAE Corporate Tax, VAT and advisory services to SMEs and Free Zone companies across the UAE.",
  url: "https://www.accotax.co",
  email: {
    primary: "contact@accotax.co",
    secondary: "info@accotax.co",
  },
  phones: [
    { display: "+971 50 520 8600", href: "tel:+971505208600" },
    { display: "+971 58 525 8010", href: "tel:+971585258010" },
  ],
  // Primary line used for click-to-call / WhatsApp CTAs (with a prefilled message).
  whatsapp:
    "https://wa.me/971505208600?text=" +
    encodeURIComponent(
      "Hi Accotax, I'd like to know more about your accounting and tax services.",
    ),
  address: {
    lines: [
      "Office No. 806, 8th Floor",
      "Al Masraf Tower, Baniyas Road",
      "Deira, Dubai, UAE",
    ],
    mapQuery: "Al Masraf Tower, Baniyas Road, Deira, Dubai",
  },
  // Leave a value empty ("") to hide that social icon across the site.
  social: {
    facebook: "https://www.facebook.com/Accotax.uae",
    linkedin: "https://www.linkedin.com/company/77026642/",
    twitter: "",
    youtube: "",
  },
  hours: "Sunday – Thursday, 9:00 AM – 6:00 PM",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Accounting & Bookkeeping", href: "/services#accounting" },
      { label: "Corporate Tax", href: "/services#corporate" },
      { label: "VAT & Indirect Tax", href: "/services#tax" },
      { label: "Advisory Services", href: "/services#advisory" },
      { label: "Company Setup", href: "/services#setup" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
