/**
 * Accotax logomark — an elegant, fine-lined "A" monogram inside a thin ring,
 * with a teal apex node (a peak / mark of excellence and growth).
 *
 * Theme-aware: the monogram strokes use `currentColor`, so set the text colour
 * on the parent (ink on light backgrounds, white on dark). The teal accents
 * stay constant and read on either background.
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      role="img"
      aria-label="Accotax logomark"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Thin outer ring */}
      <circle
        cx="28"
        cy="28"
        r="26"
        stroke="#14a596"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle
        cx="28"
        cy="28"
        r="22.5"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />

      {/* "A" monogram — fine strokes */}
      <path
        d="M19 39 L28 17"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M28 17 L37 39"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      {/* Teal crossbar */}
      <path
        d="M23 31 L33 31"
        stroke="#14a596"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Teal apex node (peak) */}
      <circle cx="28" cy="15.4" r="2.4" fill="#14a596" />
    </svg>
  );
}
