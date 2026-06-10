import { Dot } from "lucide-react";

/**
 * Infinite horizontal marquee strip. The items are duplicated so the
 * translateX(-50%) loop is seamless.
 */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden border-y border-white/10 bg-ink-900 py-5">
      <div className="flex shrink-0 animate-marquee items-center gap-0 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-base font-semibold uppercase tracking-wide text-white/80 sm:text-lg">
              {item}
            </span>
            <Dot className="h-5 w-5 text-teal-400" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
    </div>
  );
}
