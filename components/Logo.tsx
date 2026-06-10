import Link from "next/link";
import BrandMark from "./BrandMark";
import { site } from "@/lib/site";

/**
 * Brand logo: redesigned SVG logomark + wordmark.
 *  - "dark"  → for light backgrounds (header): navy "Acco" + gold "tax"
 *  - "light" → for dark backgrounds (footer): white "Acco" + gold "tax"
 */
export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-navy-300" : "text-navy-400";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <BrandMark
        className={`h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 ${
          variant === "light" ? "text-white" : "text-ink-900"
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${wordColor}`}>
          Acco<span className="text-teal-500">tax</span>
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${subColor}`}
        >
          Accounting · Tax · Advisory
        </span>
      </span>
    </Link>
  );
}
