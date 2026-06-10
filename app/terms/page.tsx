import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing your use of the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that govern your use of this website."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="mb-8 text-sm text-navy-400">Last updated: June 2026</p>

          <div className="prose-navy space-y-8">
            <p>
              These Terms of Use govern your access to and use of the{" "}
              {site.name} website. By using this website, you agree to these
              terms. If you do not agree, please do not use the site.
            </p>

            <Section title="Use of the website">
              <p>
                You may use this website for lawful purposes only. You agree not
                to use it in any way that could damage, disable or impair the site
                or interfere with anyone else's use of it.
              </p>
            </Section>

            <Section title="Not professional advice">
              <p>
                The content on this website — including information about
                accounting, Corporate Tax, VAT and related topics — is provided
                for general information only and does not constitute professional,
                tax, legal or financial advice. Tax rules change and depend on
                each business's circumstances. You should obtain tailored advice
                from {site.shortName} or a qualified professional before acting on
                any information here.
              </p>
            </Section>

            <Section title="Intellectual property">
              <p>
                All content on this website — including text, graphics, logos and
                design — is the property of {site.name} or its licensors and is
                protected by applicable laws. You may not reproduce or reuse it
                without our prior written permission.
              </p>
            </Section>

            <Section title="External links">
              <p>
                This website may contain links to third-party sites. We are not
                responsible for the content or practices of those sites and
                provide the links for convenience only.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                While we strive to keep the information on this website accurate
                and up to date, we make no warranties as to its completeness or
                accuracy. To the fullest extent permitted by law, {site.name}{" "}
                shall not be liable for any loss arising from reliance on the
                website's content.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                These terms are governed by the laws of the United Arab Emirates
                and the applicable laws of the Emirate of Dubai. Any disputes are
                subject to the exclusive jurisdiction of the courts of Dubai.
              </p>
            </Section>

            <Section title="Changes & contact">
              <p>
                We may update these terms from time to time. For any questions,
                contact us at{" "}
                <a className="text-teal-600 underline" href={`mailto:${site.email.primary}`}>
                  {site.email.primary}
                </a>
                .
              </p>
            </Section>

            <p className="text-sm text-navy-400">
              This page is provided as a general template and should be reviewed
              by a qualified professional to ensure it meets your specific legal
              and regulatory requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-3 font-display text-xl font-bold text-navy-900">
        {title}
      </h2>
      {children}
    </div>
  );
}
