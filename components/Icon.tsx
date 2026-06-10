import { icons, type LucideProps } from "lucide-react";

/**
 * Renders a Lucide icon by name (the names stored in lib/services.ts).
 * Falls back to a neutral icon if the name is unknown.
 */
export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const LucideIcon = icons[name as keyof typeof icons] ?? icons.Circle;
  return <LucideIcon {...props} />;
}
