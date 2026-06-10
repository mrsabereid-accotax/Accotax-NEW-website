"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Lead-capture form.
 *
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (free key from https://web3forms.com) to
 * deliver submissions straight to your inbox — no server required. If the key
 * is not set, the form gracefully falls back to opening the visitor's email
 * client (mailto:), so it always works.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    botcheck: "", // honeypot (must stay empty)
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const mailtoFallback = () => {
    const subject = encodeURIComponent(
      `Website enquiry${form.service ? ` — ${form.service}` : ""} from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email.primary}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return; // bot caught
    setStatus("submitting");

    // No backend key configured → use the email-client fallback.
    if (!ACCESS_KEY) {
      mailtoFallback();
      setTimeout(() => setStatus("success"), 600);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New website enquiry${form.service ? ` — ${form.service}` : ""} from ${form.name}`,
          from_name: `${site.shortName} Website`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-navy-100 bg-teal-50/60 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
          Thank you!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy-600">
          Your message has been sent. One of our representatives will get back to
          you as soon as possible.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field — hidden from humans */}
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={update("botcheck")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
            Name <span className="text-teal-600">*</span>
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            className={fieldClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
            Email <span className="text-teal-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
            Phone Number <span className="text-teal-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass}
            placeholder="+971 ..."
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-800">
            Service of Interest
          </label>
          <select
            id="service"
            value={form.service}
            onChange={update("service")}
            className={fieldClass}
          >
            <option value="">Select a service</option>
            <option>Accounting &amp; Bookkeeping</option>
            <option>Corporate Tax</option>
            <option>VAT / Tax Services</option>
            <option>Company Setup (Mainland / Free Zone)</option>
            <option>Advisory / Business Consulting</option>
            <option>Audit</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={fieldClass}
          placeholder="Tell us briefly how we can help…"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please try again, or email us at {site.email.primary}.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Get Help Now"}
        <Send className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-navy-400">
        We respect your privacy. Your details are only used to respond to your
        enquiry.
      </p>
    </form>
  );
}
