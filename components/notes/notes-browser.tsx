"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { EssayGuideView } from "@/components/notes/essay-guide";
import { ESSAY_GUIDES } from "@/lib/essay-guides-data";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { filterEssayTypes, filterTopicModules } from "@/lib/notes-search";
import { TOPIC_MODULES } from "@/lib/topic-modules-data";

export function NotesBrowser() {
  const [query, setQuery] = useState("");
  const essayTypes = filterEssayTypes(ESSAY_TYPES, query);
  const topics = filterTopicModules(TOPIC_MODULES, query);

  return (
    <div className="space-y-8">
      <Input
        type="search"
        role="searchbox"
        aria-label="Search notes"
        placeholder="Search notes (e.g. refute, causes, recidivism, austerity)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-11 max-w-xl"
      />
      {essayTypes.length === 0 && topics.length === 0 && (
        <p className="text-slate-600">{`No notes match "${query.trim()}".`}</p>
      )}

      {essayTypes.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Essay types</h2>
          <Accordion className="rounded-xl border border-border px-4">
            {essayTypes.map((t) => (
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
                    {ESSAY_GUIDES[t.id] && <EssayGuideView guide={ESSAY_GUIDES[t.id]} />}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {topics.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Topic vocabulary modules</h2>
          <Accordion className="rounded-xl border border-border px-4">
            {topics.map((m) => (
              <AccordionItem key={m.id} value={m.id}>
                <AccordionTrigger className="py-4 text-base text-slate-900">
                  <span>{`Topic ${TOPIC_MODULES.indexOf(m) + 1}: ${m.topic}`}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pb-4">
                    <p className="rounded-lg border border-border bg-slate-50 p-4 font-medium text-slate-800">
                      {m.question}
                    </p>
                    <dl className="grid gap-4 md:grid-cols-2">
                      {m.vocabulary.map((v) => (
                        <div key={v.word} className="space-y-1 rounded-lg border border-border p-4">
                          <dt className="flex items-baseline gap-2">
                            <span className="font-semibold text-slate-900">{v.word}</span>
                            <span className="text-xs italic text-slate-500">{v.partOfSpeech}</span>
                          </dt>
                          <dd className="text-sm text-slate-700">{v.definition}</dd>
                          <dd className="border-l-2 border-teal pl-3 text-sm italic text-slate-600">{v.example}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Sample body paragraph
                      </h3>
                      <blockquote className="rounded-lg border-l-4 border-teal bg-slate-50 p-4 leading-relaxed text-slate-800">
                        <p>{m.bodyParagraph}</p>
                      </blockquote>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}
    </div>
  );
}
