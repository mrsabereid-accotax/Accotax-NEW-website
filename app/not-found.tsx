import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-ink-950">
      <div className="container-x py-20 text-center">
        <p className="font-display text-7xl font-extrabold text-teal-400">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-navy-300">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link href="/services" className="btn-ghost-light">
            Browse Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
