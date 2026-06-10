/**
 * Service packages.
 *
 * NOTE: Prices are intentionally NOT displayed on the website — the Packages
 * page shows "Pricing on request" and a "Request a Quote" CTA instead. The
 * `price` / `period` values below are kept for internal reference only (sourced
 * from the original WordPress site). To show prices again, re-add the price
 * block in `app/packages/page.tsx`.
 */

export type Package = {
  name: string;
  subtitle?: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
};

export type PackageGroup = {
  id: string;
  title: string;
  intro?: string;
  packages: Package[];
};

const accountingFeatures = [
  "Monthly financial reports: Profit & Loss Statement and Balance Sheet",
  "Comprehensive bookkeeping and journal entries",
  "Accurate calculation of partners' current accounts",
  "Bank reconciliation, prepaid expenses, depreciation, amortisation and asset management",
  "Debtors and creditors balances",
  "Payroll and employees' end-of-service calculation",
  "Quarterly VAT return submission",
  "Tax consultancy (VAT / Excise)",
  "TRN registration (VAT / Excise)",
  "VAT return filing & reporting",
  "Annual FTA account amendments",
  "Document archiving for 5 years",
];

export const packageGroups: PackageGroup[] = [
  {
    id: "accounting",
    title: "Accounting Packages",
    intro:
      "Full-service monthly bookkeeping and accounting, with VAT compliance built in.",
    packages: [
      {
        name: "Basic",
        subtitle: "1–250 vouchers / transactions",
        price: "AED 750",
        period: "/ month",
        features: accountingFeatures,
      },
      {
        name: "Standard",
        subtitle: "1–500 vouchers / transactions",
        price: "AED 1,000",
        period: "/ month",
        featured: true,
        features: accountingFeatures,
      },
      {
        name: "Premium",
        subtitle: "Tailored just for you",
        price: "Customised",
        features: [
          "A package tailored to your exact needs and requirements",
          "Full bookkeeping and taxation services",
          "A dedicated accountant for your business",
          "Everything in the Standard package, scaled to your volume",
        ],
      },
    ],
  },
  {
    id: "vat",
    title: "VAT Packages",
    intro: "Focused VAT compliance packages billed quarterly.",
    packages: [
      {
        name: "VAT Submission",
        price: "AED 300",
        period: "/ quarter",
        features: [
          "VAT health check",
          "VAT return submission",
          "Related consultancy",
        ],
      },
      {
        name: "TAX Services",
        price: "From AED 500",
        period: "/ quarter",
        featured: true,
        features: [
          "Review data and quality assurance",
          "VAT return submission",
          "VAT refund",
          "Related consultancy",
        ],
      },
      {
        name: "VAT Accounting",
        price: "From AED 750",
        period: "/ quarter",
        features: [
          "Preparing the VAT return",
          "VAT return submission",
          "Review and quality assurance",
          "VAT refund",
          "Related consultancy",
        ],
      },
    ],
  },
  {
    id: "other",
    title: "Other Packages",
    intro: "One-time and specialist services for specific compliance needs.",
    packages: [
      {
        name: "VAT / Excise Registration",
        price: "AED 400",
        period: "one time",
        features: ["TRN registration", "Related consultancy"],
      },
      {
        name: "VAT / Excise De-Registration",
        price: "AED 800",
        period: "one time",
        features: ["TRN de-registration", "Last-quarter VAT return filing"],
      },
      {
        name: "FTA Account Update",
        price: "AED 300",
        period: "one time",
        features: ["FTA account amendments (annually)", "FTA communication"],
      },
      {
        name: "Reconsideration",
        price: "AED 1,000",
        period: "one time",
        features: [
          "Reconsideration application for VAT / Excise-related penalties",
        ],
      },
      {
        name: "UAE National VAT Refund",
        price: "As per refund amount",
        features: [
          "Preparation of relevant documents",
          "FTA communication",
        ],
      },
      {
        name: "VAT Auditing",
        price: "From AED 2,000",
        features: ["VAT auditing & reporting", "FTA communication"],
      },
      {
        name: "Auditing Service",
        price: "From AED 1,500",
        features: ["Annual financial audit", "Authorised audit report"],
      },
      {
        name: "TAX Consulting",
        price: "Customised",
        features: [
          "Quarterly VAT filing submission",
          "Tax consulting and compliance",
        ],
      },
      {
        name: "TAX Agent",
        price: "Customised",
        features: [
          "Submit tax returns to the FTA",
          "Reconsideration requests",
          "Submit voluntary declarations to the FTA",
          "Tax consulting and compliance",
        ],
      },
    ],
  },
];
