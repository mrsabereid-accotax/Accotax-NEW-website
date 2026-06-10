"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Fixed bottom-right actions: a persistent WhatsApp button (lead capture) and
 * a back-to-top button that fades in once the user scrolls down.
 */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-ink-800 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-ink-950 shadow-xl shadow-teal-500/30 transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-teal-500/40 [animation-duration:2.5s] group-hover:hidden" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
