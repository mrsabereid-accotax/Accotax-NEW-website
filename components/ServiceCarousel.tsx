"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

export type CarouselCard = {
  title: string;
  tagline: string;
  href: string;
  image: string;
  count?: string;
};

export default function ServiceCarousel({ cards }: { cards: CarouselCard[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Controls */}
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-teal-400 hover:bg-teal-500 hover:text-ink-950"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-teal-400 hover:bg-teal-500 hover:text-ink-950"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative h-[420px] w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[340px]"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="340px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent transition-opacity duration-500 group-hover:from-teal-950/95 group-hover:via-ink-950/50" />
            {card.count && (
              <span className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {card.count}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="font-display text-2xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {card.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-300">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
            <span className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-teal-400/50" />
          </Link>
        ))}
      </div>
    </div>
  );
}
