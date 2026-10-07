"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/notes", label: "Notes" },
  { href: "/exercises", label: "Exercises" },
  { href: "/mock-exam", label: "Mock Exam" },
];

export function SiteNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="flex items-center gap-1">
      {LINKS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900",
              active && "bg-slate-900 text-white hover:text-white",
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
