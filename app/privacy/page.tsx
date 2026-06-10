import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect your information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="mb-8 text-sm text-navy-400">Last updated: June 2026</p>

          <div className="prose-navy space-y-8">
            <div>
              <p>
                {site.name} (“we”, “us”, “our”) respects your privacy and is
                committed to protecting the personal information you share with
                us. This policy explains what we collect through this website and
                how we use it.
              </p>
            </div>

            <Section title="Information we collect">
              <p>
                When you submit our contact or enquiry form, we collect the
                details you provide — typically your name, email address, phone
                number, the service you are interested in and your message. If
                you contact us by email, phone or WhatsApp, we receive the
                information you choose to share.
              </p>
              <p>
                Like most websites, we may also collect limited technical data
                (such as anonymised analytics about page visits) to understand
                how the site is used and improve it.
              </p>
            </Section>

            <Section title="How we use your information">
              <p>We use your information to:</p>
              <ul className="ml-5 list-disc space-y-2 text-navy-700">
                <li>Respond to your enquiry and provide the services you request;</li>
                <li>Communicate with you about your engagement;</li>
                <li>Improve our website and services; and</li>
                <li>Comply with applicable legal and regulatory obligations.</li>
              </ul>
            </Section>

            <Section title="Cookies & analytics">
              <p>
                We may use cookies and analytics tools (such as Google Analytics)
                to measure website traffic and usage in aggregate. You can disable
                cookies in your browser settings; some features may not function
                as intended if you do.
              </p>
            </Section>

            <Section title="Sharing your information">
              <p>
                We do not sell your personal information. We may share it with
                trusted service providers who help us operate our business (for
                example, email or hosting providers), and where required by law or
                a competent authority.
              </p>
            </Section>

            <Section title="Data retention & security">
              <p>
                We retain personal information only for as long as necessary to
                fulfil the purposes described above or as required by law. We take
                reasonable technical and organisational measures to protect your
                information against unauthorised access, loss or misuse.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You may request access to, correction of, or deletion of the
                personal information we hold about you, subject to applicable law.
                To make a request, contact us using the details below.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                For any privacy questions or requests, contact us at{" "}
                <a className="text-teal-600 underline" href={`mailto:${site.email.primary}`}>
                  {site.email.primary}
                </a>{" "}
                or {site.phones[0].display}. Our office is at{" "}
                {site.address.lines.join(", ")}.
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
