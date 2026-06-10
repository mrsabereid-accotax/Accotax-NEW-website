import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-card-hover"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-navy-950">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-teal-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
