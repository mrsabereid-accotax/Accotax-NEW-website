"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `end` the first time it scrolls into view. Honours
 * prefers-reduced-motion (jumps straight to the final value).
 */
export default function CountUp({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  pad = false,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Zero-pad to two digits (e.g. 04). */
  pad?: boolean;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setValue(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = pad ? String(value).padStart(2, "0") : String(value);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
