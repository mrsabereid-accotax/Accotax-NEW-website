/**
 * Service catalogue — extracted from the original WordPress (Elementor) content
 * and lightly edited for clarity and grammar. All factual content (thresholds,
 * deadlines, penalties, deliverables) is preserved from the source pages.
 */

export type ServiceCategory =
  | "accounting"
  | "corporate"
  | "tax"
  | "advisory"
  | "setup";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** Lucide icon name. */
  icon: string;
  /** Short summary used on cards and previews. */
  summary: string;
  /** Body paragraphs for the detail page. */
  body: string[];
  /** Optional bullet list (e.g. required documents, benefits). */
  list?: { heading?: string; items: string[] };
};

export const categories: Record<
  ServiceCategory,
  { label: string; tagline: string; icon: string }
> = {
  accounting: {
    label: "Accounting & Bookkeeping",
    tagline:
      "Accurate books, financial statements and reporting that keep your business in control.",
    icon: "Calculator",
  },
  corporate: {
    label: "Corporate Tax",
    tagline:
      "Full UAE Corporate Tax support — registration, return filing, impact assessment and Free Zone advisory.",
    icon: "Landmark",
  },
  tax: {
    label: "VAT & Indirect Tax",
    tagline:
      "End-to-end VAT, excise and indirect-tax compliance from an FTA-approved tax agency.",
    icon: "ReceiptText",
  },
  advisory: {
    label: "Advisory Services",
    tagline:
      "Strategic guidance to help your business grow, stay compliant and perform.",
    icon: "Lightbulb",
  },
  setup: {
    label: "Company Setup",
    tagline:
      "Start your business in the UAE — Mainland or Free Zone — with end-to-end company formation support.",
    icon: "Building2",
  },
};

export const services: Service[] = [
  // ─────────────────────────── ACCOUNTING ───────────────────────────
  {
    slug: "accounting-basic",
    title: "Accounting Services — Basic",
    category: "accounting",
    icon: "BookOpen",
    summary:
      "Accurate, comprehensive financial statements that reveal the true performance and health of your business.",
    body: [
      "Regardless of the size of your company, preparing accurate and comprehensive financial statements has tremendous implications for performance, creditworthiness and goodwill. They are a powerful tool for assessing and monitoring the financial health of your organisation, and for overcoming challenges such as competition, rising raw-material and operational costs, and evolving compliance requirements.",
      "Financial accounting enables you to assess and improve your overall performance by providing clear insight into where you stand and where you can do better. With a clear view of your financial position, you can strategise your operations and make informed decisions that optimise resources and drive profitability.",
      "A well-prepared financial accounting report also improves your creditworthiness. Lenders, investors and stakeholders rely on accurate information to evaluate your stability and ability to meet obligations — so demonstrating a strong position enhances your credibility and attracts partners for growth. It also shows your industry peers that you are performing well, opening doors to new opportunities, collaborations and market recognition.",
      "At Accotax Accounting Services, our dedicated team combines expertise, industry knowledge and advanced tools to deliver accurate, insightful financial statements tailored to your specific needs — giving you the financial clarity and strategic guidance to thrive.",
    ],
  },
  {
    slug: "accounting-standard",
    title: "Accounting Services — Standard",
    category: "accounting",
    icon: "FileSpreadsheet",
    summary:
      "Comprehensive financial accounting that strengthens performance, creditworthiness and compliance.",
    body: [
      "Regardless of the size of the company, preparing financial statements to ascertain the performance and financial stature of a company is extremely important, with enormous implications for performance, creditworthiness and goodwill.",
      "We help you overcome the challenges posed by competition, increasing raw-material and operational costs, and the emergence of new compliance requirements from time to time.",
    ],
    list: {
      heading: "Financial accounting will help you to:",
      items: [
        "Understand whether you need to improve your performance.",
        "Strategise your financial operations.",
        "Improve your creditworthiness through a well-realised financial report.",
        "Show the industry that you are performing well.",
      ],
    },
  },
  {
    slug: "accounting-premium",
    title: "Accounting Services — Premium",
    category: "accounting",
    icon: "Crown",
    summary:
      "Our most complete accounting engagement, with a dedicated accountant and tailored reporting.",
    body: [
      "Regardless of the size of the company, preparing financial statements to ascertain the performance and financial stature of a company is extremely important, with enormous implications for performance, creditworthiness and goodwill.",
      "We help you overcome the challenges posed by competition, increasing raw-material and operational costs, and the emergence of new compliance requirements from time to time.",
    ],
    list: {
      heading: "Financial accounting will help you to:",
      items: [
        "Understand whether you need to improve your performance.",
        "Strategise your financial operations.",
        "Improve your creditworthiness through a well-realised financial report.",
        "Show the industry that you are performing well.",
      ],
    },
  },
  {
    slug: "vat-accounting",
    title: "VAT Accounting Services",
    category: "accounting",
    icon: "FileCheck2",
    summary:
      "Timely, accurate VAT accounting that keeps you compliant and audit-ready.",
    body: [
      "There are diverse types of Value Added Tax that a business needs to manage. Whether you sell services or products, you must ensure that both input and output VAT are registered and filed on time. Failing to comply with the various VAT provisions can attract legal consequences and penalties from government bodies.",
      "It is therefore important to conduct timely VAT accounting so that you comply with all the tax provisions of VAT and remain on a sound footing when it comes to compliance.",
    ],
    list: {
      heading: "Benefits of professional VAT accounting:",
      items: [
        "Helps your business file tax returns effortlessly.",
        "Enables the business to track tax records.",
        "Considerably lowers the risk of a tax audit from the government.",
        "Effectively reduces the risk of legal consequences and penalties.",
      ],
    },
  },

  // ─────────────────────────── CORPORATE TAX ───────────────────────────
  {
    slug: "corporate-tax-registration",
    title: "Corporate Tax Registration",
    category: "corporate",
    icon: "Landmark",
    summary:
      "Register your business for UAE Corporate Tax with the FTA and obtain your Corporate Tax Registration Number.",
    body: [
      "UAE Corporate Tax was introduced under Federal Decree-Law No. 47 of 2022 and applies to financial years beginning on or after 1 June 2023. It is a federal tax on the net profit of businesses, with a 0% rate on taxable income up to AED 375,000 and a 9% rate on taxable income above that threshold.",
      "Almost every business and commercial activity in the UAE must register for Corporate Tax with the Federal Tax Authority (FTA) and obtain a Corporate Tax Registration Number — including mainland and Free Zone companies, and individuals conducting business above the relevant turnover threshold. Registration is required within the deadlines set by the FTA, and administrative penalties apply for late registration.",
      "Our team manages the entire registration process on the FTA's EmaraTax portal, determines your correct tax period, and makes sure your business is registered accurately and on time.",
    ],
    list: {
      heading: "Typical documents & information required:",
      items: [
        "Valid trade licence(s) of the business.",
        "Passport and Emirates ID of the owners / authorised signatory.",
        "Memorandum of Association (MOA) or partnership agreement.",
        "Contact details and registered business address.",
        "Financial year / accounting period details.",
        "Details of business activities and ownership structure.",
      ],
    },
  },
  {
    slug: "corporate-tax-return-filing",
    title: "Corporate Tax Return Filing",
    category: "corporate",
    icon: "FileCheck2",
    summary:
      "Prepare and file your annual Corporate Tax return accurately, within nine months of your financial year-end.",
    body: [
      "Every taxable person must file a Corporate Tax return for each tax period and settle any tax due. The return must be filed — and the tax paid — within nine months from the end of the relevant tax period. There is no requirement to file provisional returns or make advance payments; a single return is filed for each period.",
      "We compute your taxable income starting from your accounting profit and applying the adjustments, exemptions and reliefs available under the law — such as relief for exempt income, deductible expenditure rules and interest limitation rules. We then prepare and submit the return through the FTA's EmaraTax portal.",
      "Accurate, timely filing keeps you compliant and avoids the administrative penalties that apply to late or incorrect submissions.",
    ],
    list: {
      heading: "What we handle for you:",
      items: [
        "Preparation of the Corporate Tax computation from your financial statements.",
        "Application of available reliefs, exemptions and adjustments.",
        "Filing of the Corporate Tax return on the EmaraTax portal.",
        "Calculation and scheduling of any tax payable.",
        "Maintaining records to support the return.",
      ],
    },
  },
  {
    slug: "corporate-tax-advisory",
    title: "Corporate Tax Advisory & Impact Assessment",
    category: "corporate",
    icon: "Lightbulb",
    summary:
      "Understand how Corporate Tax affects your business and plan ahead with expert structuring and compliance advice.",
    body: [
      "Corporate Tax has wide-reaching implications for how UAE businesses are structured, financed and operated. Our advisory team carries out a detailed impact assessment of your business, identifies your obligations and helps you plan ahead so there are no surprises at filing time.",
      "We advise on the practical questions that matter: how the 0% and 9% rates apply to your taxable income, eligibility for Small Business Relief (available to resident businesses with revenue not exceeding AED 3 million, for the relevant periods), group structuring and tax-group eligibility, and how transfer-pricing rules and documentation requirements apply to transactions with related parties and connected persons in line with the arm's-length principle.",
      "We also keep you informed of additional rules that may apply to large multinational groups — such as the 15% Domestic Minimum Top-up Tax under the OECD's global minimum tax framework — and help you build Corporate Tax into your day-to-day accounting and reporting.",
    ],
    list: {
      heading: "Our Corporate Tax advisory covers:",
      items: [
        "Corporate Tax impact assessment and readiness review.",
        "Taxable-income modelling under the 0% / 9% rates.",
        "Small Business Relief eligibility and elections.",
        "Tax group formation and structuring advice.",
        "Transfer pricing review and documentation support.",
        "Ongoing compliance, record-keeping and advisory support.",
      ],
    },
  },
  {
    slug: "corporate-tax-free-zone",
    title: "Corporate Tax for Free Zones",
    category: "corporate",
    icon: "Building2",
    summary:
      "Protect your 0% Free Zone benefit by qualifying — and staying compliant — as a Qualifying Free Zone Person.",
    body: [
      "Free Zone businesses can continue to benefit from a 0% Corporate Tax rate on their Qualifying Income as a Qualifying Free Zone Person (QFZP). Income that does not qualify is taxed at the standard 9% rate, so understanding exactly which of your activities and revenue streams qualify is essential.",
      "To be — and remain — a Qualifying Free Zone Person, a business must meet several conditions: maintaining adequate substance in the Free Zone, deriving qualifying income, complying with transfer-pricing rules and documentation, satisfying the de minimis requirements for non-qualifying revenue, and not having elected to be subject to standard Corporate Tax. Failing any condition can mean losing the 0% benefit.",
      "We assess your Free Zone status, review your income streams against the qualifying-income criteria, and help you put in place the substance, documentation and processes needed to safeguard your 0% rate.",
    ],
    list: {
      heading: "How we help Free Zone businesses:",
      items: [
        "Assessment of Qualifying Free Zone Person (QFZP) status.",
        "Review of qualifying vs. non-qualifying income.",
        "De minimis and substance-requirement checks.",
        "Transfer-pricing compliance for Free Zone entities.",
        "Registration and Corporate Tax return filing.",
      ],
    },
  },

  // ─────────────────────────── TAX / VAT ───────────────────────────
  {
    slug: "vat-registration",
    title: "VAT Registration",
    category: "tax",
    icon: "FilePlus2",
    summary:
      "Register for VAT in the UAE and obtain your Tax Registration Number (TRN) without the penalties.",
    body: [
      "VAT registration is a fundamental step for an organisation — it boosts the business profile and averts financial penalties. A business registered for VAT is issued a unique Tax Registration Number (TRN) by the authority.",
      "All taxable persons resident in the UAE whose annual supplies exceed — or are anticipated to exceed — the mandatory registration threshold of AED 375,000 should register for VAT in the UAE. Penalties apply for discrepancies.",
      "VAT applies equally to tax-registered organisations on the UAE mainland and in the free zones. However, if the UAE Cabinet defines a specific free zone as a ‘designated zone’, it is treated as outside the UAE for tax purposes.",
    ],
    list: {
      heading: "Documents & information required for VAT registration:",
      items: [
        "Documents identifying the authorised signatory (passport copy, Emirates ID for the owners).",
        "Trade licence copy of the company.",
        "Certificate of incorporation, articles of association, power of attorney, etc.",
        "Description of business activities.",
        "Turnover for the last 12 months in AED, with supporting documents for 12-month sales.",
        "Expected turnover in the next 30 days.",
        "Estimated value of imports for one year from each GCC country.",
        "Estimated value of exports for one year to each GCC country.",
        "Whether you expect to deal with GCC suppliers or customers.",
        "Supporting documents for customs registration in each emirate, if applicable.",
        "Bank account details.",
      ],
    },
  },
  {
    slug: "vat-return-filing",
    title: "VAT Return Filing",
    category: "tax",
    icon: "CalendarClock",
    summary:
      "On-time VAT return preparation and submission to the FTA, handled by tax professionals.",
    body: [
      "Any VAT-registered organisation (a ‘taxable person’) must submit a VAT return to the FTA. A VAT return summarises the value of the supplies and purchases a taxable person has made during the tax period and shows their VAT liability.",
      "Our team of tax professionals helps you complete the entire form and file the return by the date specified by the FTA. Taxable organisations must file VAT returns consistently — usually within 28 days of the end of the tax period defined for their kind of business. A tax period is a specific period of time for which the payable tax is determined and paid.",
      "Failure to file a tax return within the time frame makes the violator liable for fines, so timely, accurate filing is essential.",
    ],
  },
  {
    slug: "vat-de-registration",
    title: "VAT De-Registration",
    category: "tax",
    icon: "FileMinus2",
    summary:
      "Cancel your VAT registration correctly and avoid the AED 10,000 late de-registration penalty.",
    body: [
      "VAT de-registration is the procedure of terminating the VAT registration of a taxable person. It can be applied for by a person registered under VAT, or initiated by the Federal Tax Authority when it finds that a person meets the conditions for de-registration.",
      "A business or individual registered under VAT can apply for de-registration if they stop making taxable supplies — in which case they must apply. They should also apply if they continue making taxable supplies but the value over the preceding 12 calendar months is less than the voluntary registration threshold.",
      "The penalty for failing to apply for a mandatory VAT de-registration within the predefined timeframe is AED 10,000.",
    ],
  },
  {
    slug: "vat-voluntary-disclosure",
    title: "VAT Voluntary Disclosure",
    category: "tax",
    icon: "FileSearch",
    summary:
      "Correct errors in a filed VAT return or refund using the FTA's VAT Form 211.",
    body: [
      "The Federal Tax Authority (FTA) provides a VAT Voluntary Disclosure form that allows your business to notify the FTA about any errors or changes in a VAT return or VAT refund.",
      "VAT Form 211 — the Voluntary Disclosure form — helps you correct mistakes you may have made while submitting a VAT return or applying for a VAT refund.",
      "It is best to submit the Voluntary Disclosure of your VAT return or VAT refund within 20 business days from the date you became aware of the error.",
    ],
  },
  {
    slug: "vat-penalty-reconsideration",
    title: "VAT Penalty Reconsideration",
    category: "tax",
    icon: "Scale",
    summary:
      "Appeal an FTA decision and apply to have late-payment penalties reviewed or waived.",
    body: [
      "UAE VAT reconsideration allows a taxable person to appeal for a review of a decision made by the Federal Tax Authority. The authority will review the decision and may waive VAT late-payment penalties if the business provides proof of the reasons behind the reconsideration request.",
      "Any person who has received a penalty can submit a reconsideration for any decision taken by the FTA. The applicant must give reasons for requesting a reconsideration, including an analysis of the alternative treatment they believe should have been applied to their case.",
      "The FTA reviews the request and, if it satisfies the necessary requirements, issues its justified decision within 20 business days of receiving the application.",
    ],
  },
  {
    slug: "vat-refund",
    title: "VAT Refund",
    category: "tax",
    icon: "BadgeDollarSign",
    summary:
      "Reclaim recoverable VAT when your input VAT exceeds your output VAT.",
    body: [
      "You can claim a VAT refund provided your business is registered under VAT and charges 5% VAT appropriately. As a VAT-registered business owner, you must file a VAT return that provides the details of your sales and the input/output VAT paid during the tax period.",
      "To clarify: the money you collect on sales is the output VAT, while the funds payable to suppliers that add to your expenses are the input VAT of your business. If your input VAT is higher than your output VAT, the extra amount is refundable.",
    ],
  },
  {
    slug: "uae-nationals-vat-refund",
    title: "UAE Nationals VAT Refund",
    category: "tax",
    icon: "Home",
    summary:
      "Recover the VAT paid on the construction of a new residence for UAE nationals.",
    body: [
      "If you are a UAE national, you may be entitled to a refund of the Value Added Tax (VAT) incurred on the construction of a new residence for your own use.",
      "Because the construction of a building is a taxable supply under UAE VAT law, a person constructing even a residential building pays tax on the expenses incurred during construction — including building materials, the contractor’s bill and more.",
      "Under the VAT Refund Scheme for UAE nationals, the tax paid for constructing the new residence can be refunded subject to certain conditions. The scheme helps UAE nationals reduce the expenditure incurred on account of VAT paid while constructing a new residence.",
    ],
  },
  {
    slug: "tax-agent",
    title: "Tax Agent Service",
    category: "tax",
    icon: "UserCheck",
    summary:
      "Let an FTA-registered tax agent represent your company before the Federal Tax Authority.",
    body: [
      "It can be very difficult for companies to handle VAT and other tax matters with the FTA. We take full responsibility for the elements and areas of VAT to lift that burden from you. As your VAT agent, we represent your company before the Federal Tax Authority (FTA) on your behalf.",
      "It becomes our duty to represent you and to provide the FTA with all the appropriate and relevant documents, information, records and data. We serve as tax agent on behalf of your company for all your tax issues and matters, and the liability for complying with the current rules of the tax law is handled accordingly.",
      "A tax agent helps you find the best and most effective approaches for your company, resulting in easier, longer-term tax planning.",
    ],
  },
  {
    slug: "vat-advisory",
    title: "VAT Advisory & Consulting",
    category: "tax",
    icon: "MessagesSquare",
    summary:
      "Expert, ongoing VAT guidance for every aspect of compliance in the UAE.",
    body: [
      "If you are a business looking for professional support and advice across the many aspects of VAT in the UAE, you are in the right place. All businesses are required to comply with the VAT system and its guidelines — and there is far more to VAT than the percentage of tax levied and the mandates a business must follow.",
      "Like every other tax system, VAT can be perplexing to businesses that do not understand its intricacies. Every business therefore needs someone with deeper understanding and expertise.",
      "With a highly experienced and qualified team that has impeccable knowledge of everything VAT, our advisory team offers all the help you need, consistently. Whatever your business vertical, we can not only meet but exceed your expectations of VAT advisory.",
    ],
  },
  {
    slug: "tax-audit",
    title: "Tax Audit",
    category: "tax",
    icon: "ClipboardCheck",
    summary:
      "A VAT health check that confirms your compliance and readiness for FTA scrutiny.",
    body: [
      "A tax audit is essential for your business to ensure it complies with the legal requirements of VAT in the UAE. It helps your company understand whether it is ready to adhere to all the VAT provisions and conditions.",
      "Beyond understanding the company’s transactions within the established framework, a VAT health check also assesses and warrants the accuracy of the information submitted to the Federal Tax Authority — saving your business from legal complications and consequences.",
      "There are numerous further benefits to having your company’s VAT health checked. Conduct it with the help of a professional firm for maximum efficiency.",
    ],
  },
  {
    slug: "tax-residence-certificate",
    title: "Tax Residence Certificate",
    category: "tax",
    icon: "ScrollText",
    summary:
      "Obtain a Tax Residence (Domicile) Certificate to benefit from the UAE's double-taxation treaties.",
    body: [
      "A Tax Residence Certificate is a document issued by the government to organisations and individuals inside the UAE, valid for a minimum of one year, that establishes their tax residence.",
      "It enables you to take advantage of the double-taxation avoidance agreements on income signed by the UAE. There are various advantages to obtaining a tax domicile or tax residency certificate in the UAE, and our team manages the process for you.",
    ],
  },
  {
    slug: "excise-tax",
    title: "Excise Tax",
    category: "tax",
    icon: "Fuel",
    summary:
      "Stay compliant with excise tax obligations, reporting and FTA audits.",
    body: [
      "The FTA is committed to providing comprehensive resources and advice to assist with excise tax; however, the duty rests with the organisation to ensure that all required regulatory requirements are met. The FTA has the authority to audit taxable companies and to enforce disciplinary action against those that are not compliant with the legislation.",
      "The information in each of the documents is drawn into the excise tax report and auto-populated after the return period. The taxable person scrutinises the details in the report carefully and ensures they are accurate before submission, then submits the excise tax return together with full payment.",
    ],
  },

  // ─────────────────────────── ADVISORY ───────────────────────────
  {
    slug: "business-advisory",
    title: "Business Advisory",
    category: "advisory",
    icon: "Briefcase",
    summary:
      "Practical consulting to help you find your footing and grow in the competitive UAE market.",
    body: [
      "Starting and running a business in the UAE is not an easy task. If you are going to operate a business, we give you the best answer for it — drawing on our business experience and acumen to guide you, so it is easier to find your rhythm and your place in the UAE.",
      "If you are a business trying to find your rightful place in the highly competitive UAE market, we can help with all your business consulting requirements. Having helped numerous clients across various business verticals in a range of areas, we extend that same expertise to you.",
      "Competition in the market is high, and it is natural that many businesses find it difficult to find their footing while starting and operating. We are here to make that journey easier.",
    ],
  },
  {
    slug: "business-planning",
    title: "Business Planning & Forecasting",
    category: "advisory",
    icon: "LineChart",
    summary:
      "Cash-flow and budget planning with dashboards that drive better decisions.",
    body: [
      "We help businesses by preparing and monitoring cash flow and budgets, comparing actual performance against budget and interpreting what variances mean for your business.",
      "We do this by means of a dashboard that is shared with the board of directors on a regular basis, helping them improve performance and profitability and make informed, data-driven decisions.",
    ],
  },
  {
    slug: "management-support",
    title: "Management Support",
    category: "advisory",
    icon: "Users",
    summary:
      "Feasibility studies and insight to support investment, growth and expansion decisions.",
    body: [
      "Businesses today operate in fast-paced fields. Product life cycles are shrinking, and new, innovative products are taking centre stage. New manufacturing technology and supply-chain mechanisms emerge every year, promising better product quality, faster turnaround and reduced costs. Customer preferences change rapidly, and with so much choice available a high-performing product can become obsolete before brand owners even realise.",
      "Both start-ups and established organisations are always on the lookout for potential investors to support their growth and expansion ambitions. Whether to invest or not remains a big decision at all times.",
      "Experienced feasibility-study consultants in the UAE can provide you with the information and insights you need to make an informed decision — and that is exactly what our team delivers.",
    ],
  },
  {
    slug: "internal-audit",
    title: "Internal Audit Services",
    category: "advisory",
    icon: "ShieldCheck",
    summary:
      "Risk-aware internal audit that strengthens controls and adds tangible value.",
    body: [
      "Internal audit is not limited to providing assurance services — it also focuses on adding tangible value to all types of business and fortifying procedures and practices. A robust, well-planned internal audit framework combines compliance, controls and refined risk management with the company’s objectives and investor expectations.",
      "Accordingly, internal audit plays an important role in determining governance and risk models, enhancing business efficacy, eliminating duplication and identifying areas of potential performance development.",
      "We provide flexible, measurable and tailored solutions to suit the distinct needs of every business.",
    ],
  },
  {
    slug: "business-consulting-analysis",
    title: "Business Consulting & Analysis",
    category: "advisory",
    icon: "BarChart3",
    summary:
      "Turn your financial and operational data into clear insight and confident decisions.",
    body: [
      "Great decisions start with clear information. Our business consulting and analysis services turn your financial and operational data into practical insight — helping you understand exactly where your business stands, spot opportunities and risks early, and choose the right next move with confidence.",
      "On the analysis side, we examine your financial statements, key ratios and KPIs, cash flow, profitability and budget-versus-actual performance, then present them through clear dashboards and reports. This gives you and your stakeholders a transparent, real-time view of business health.",
      "On the consulting side, we draw on deep UAE market experience to advise on feasibility studies, market entry, process and cost optimisation, restructuring and growth strategy — delivering tailored, measurable recommendations built around your goals.",
    ],
    list: {
      heading: "What we deliver:",
      items: [
        "Financial statement and ratio / KPI analysis.",
        "Cash-flow, profitability and breakeven analysis.",
        "Budgeting and budget-versus-actual reporting.",
        "Interactive dashboards and management reports.",
        "Feasibility studies and investment analysis.",
        "Process optimisation and cost-reduction reviews.",
        "Growth, market-entry and restructuring strategy.",
      ],
    },
  },

  // ─────────────────────────── COMPANY SETUP ───────────────────────────
  {
    slug: "company-setup",
    title: "Company Setup — Mainland & Free Zone",
    category: "setup",
    icon: "Building2",
    summary:
      "End-to-end company formation in the UAE — we help you choose the right jurisdiction and handle the entire process.",
    body: [
      "Setting up a company in the UAE is one of the most important decisions you will make, and choosing the right structure and jurisdiction sets the foundation for everything that follows. Accotax guides you through the entire process — from selecting the right licence and activity to registration, visas and bank account opening — so you can start trading quickly and compliantly.",
      "Mainland: A mainland company is licensed by the emirate’s Department of Economic Development (DED) and can trade freely across the UAE and with the local market, take on government contracts and open offices anywhere in the country. Most activities now allow up to 100% foreign ownership.",
      "Free Zone: A Free Zone company offers 100% foreign ownership, full repatriation of profits and capital, a streamlined setup process and customs benefits — and, as a Qualifying Free Zone Person, may benefit from a 0% Corporate Tax rate on qualifying income. Free Zones are ideal for international trade, services and holding structures.",
      "We help you weigh the pros and cons of each route based on your activity, target market and budget — then handle the paperwork end to end and connect your new company to our accounting, tax and compliance services from day one.",
    ],
    list: {
      heading: "What we handle for you:",
      items: [
        "Jurisdiction and business-activity selection (Mainland vs Free Zone).",
        "Trade-name reservation and initial approvals.",
        "Trade licence issuance and legal structuring.",
        "Visas, Emirates ID and establishment card.",
        "Corporate bank-account opening support.",
        "Office space and flexi-desk solutions.",
        "PRO services and government liaison.",
        "Post-setup VAT, Corporate Tax registration and bookkeeping.",
      ],
    },
  },
];

/** Representative photo for each service category (files in /public/images). */
export const categoryImage: Record<ServiceCategory, string> = {
  accounting: "/images/accounting.jpg",
  corporate: "/images/corporate-tax.jpg",
  tax: "/images/tax.jpg",
  advisory: "/images/advisory.jpg",
  setup: "/images/cta-skyline.jpg",
};

export const servicesByCategory = (cat: ServiceCategory) =>
  services.filter((s) => s.category === cat);

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
