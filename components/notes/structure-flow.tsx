"use client";

import { ChevronRight } from "lucide-react";
import { PART_STYLES, PartBadge } from "@/components/notes/part-badge";
import { Tx } from "@/components/notes/lang";
import type { EssayType } from "@/lib/notes-data";
import type { EssayTypeTr } from "@/lib/notes-tr-data";
import { cn } from "@/lib/utils";

/** The essay skeleton as four connected cards: Intro → Body 1 → Body 2 → Conclusion. */
export function StructureFlow({ type, tr }: { type: EssayType; tr?: EssayTypeTr }) {
  return (
    <ol className="grid gap-3 md:grid-cols-4">
      {type.structure.map((s, i) => (
        <li
          key={s.part}
          className={cn(
            "relative flex flex-col gap-2 rounded-xl border border-border border-t-4 bg-white p-4 shadow-sm",
            PART_STYLES[s.part]?.accent ?? "border-t-slate-800",
          )}
        >
          <PartBadge part={s.part} className="w-fit" />
          {s.guidance ? (
            <p className="text-sm leading-relaxed text-slate-700">
              <Tx en={s.guidance} tr={tr?.structure[i] || undefined} />
            </p>
          ) : (
            <p className="text-sm text-slate-400">—</p>
          )}
          {i < type.structure.length - 1 && (
            <ChevronRight
              aria-hidden="true"
              className="absolute -right-3.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white text-slate-400 md:block"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
