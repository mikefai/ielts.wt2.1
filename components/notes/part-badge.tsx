"use client";

import { useLang } from "@/components/notes/lang";
import { Badge } from "@/components/ui/badge";
import { partTr } from "@/lib/notes-tr-data";
import { cn } from "@/lib/utils";

/** Colour-coded paragraph label: Intro and Conclusion in teal, body paragraphs in slate. */
export const PART_STYLES: Record<string, { badge: string; accent: string }> = {
  Intro: { badge: "bg-teal text-white", accent: "border-t-teal" },
  "Body 1": { badge: "bg-slate-800 text-white", accent: "border-t-slate-800" },
  "Body 2": { badge: "bg-slate-600 text-white", accent: "border-t-slate-600" },
  Conclusion: { badge: "bg-teal-800 text-white", accent: "border-t-teal-800" },
};

export function PartBadge({ part, className }: { part: string; className?: string }) {
  const { lang } = useLang();
  const label = lang === "tr" ? partTr(part) : lang === "both" ? `${part} · ${partTr(part)}` : part;
  return <Badge className={cn(PART_STYLES[part]?.badge ?? "bg-slate-800 text-white", "px-3", className)}>{label}</Badge>;
}
