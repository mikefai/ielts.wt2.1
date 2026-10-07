"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { filterEssayTypes } from "@/lib/notes-search";

export function NotesBrowser() {
  const [query, setQuery] = useState("");
  const results = filterEssayTypes(ESSAY_TYPES, query);

  return (
    <div className="space-y-6">
      <Input
        type="search"
        role="searchbox"
        aria-label="Search notes"
        placeholder="Search notes (e.g. refute, causes, both sides)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-11 max-w-xl"
      />
      {results.length === 0 ? (
        <p className="text-slate-600">{`No notes match "${query.trim()}".`}</p>
      ) : (
        <Accordion className="rounded-xl border border-border px-4">
          {results.map((t) => (
            <AccordionItem key={t.id} value={t.id}>
              <AccordionTrigger className="py-4 text-base text-slate-900">
                <span>{`Essay Type ${t.number}: ${t.title}`}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-5 pb-4">
                  <ol className="space-y-3">
                    {t.structure.map((s) => (
                      <li key={s.part} className="flex flex-wrap items-baseline gap-3">
                        <Badge className="bg-teal text-white">{s.part}</Badge>
                        {s.guidance && <span className="text-slate-700">{s.guidance}</span>}
                      </li>
                    ))}
                  </ol>
                  {t.templatePhrase && (
                    <blockquote className="rounded-lg border-l-4 border-teal bg-slate-50 p-4 text-slate-800">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Template phrase
                      </p>
                      <p className="italic">{t.templatePhrase}</p>
                    </blockquote>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
