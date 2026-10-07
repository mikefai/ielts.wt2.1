"use client";

import { useState } from "react";
import { Quote, Search } from "lucide-react";
import { EssayGuideView } from "@/components/notes/essay-guide";
import { LangProvider, LangToggle, Tx, useLang } from "@/components/notes/lang";
import { StructureFlow } from "@/components/notes/structure-flow";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ESSAY_GUIDES } from "@/lib/essay-guides-data";
import { ESSAY_GUIDES_TR } from "@/lib/essay-guides-tr-data";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { filterEssayTypes, filterTopicModules } from "@/lib/notes-search";
import { ESSAY_TYPES_TR, UI, noMatchText, posTr } from "@/lib/notes-tr-data";
import { TOPIC_MODULES } from "@/lib/topic-modules-data";
import { TOPIC_MODULES_TR } from "@/lib/topic-modules-tr-data";

const ITEM_CLASS =
  "rounded-2xl border border-border bg-white px-5 shadow-sm transition-shadow data-[open]:border-teal/40 data-[open]:shadow-md";
const TRIGGER_CLASS = "items-center gap-4 py-5 text-base text-slate-900 hover:no-underline";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white"
    >
      {children}
    </span>
  );
}

function SectionHeading({ title, hint }: { title: { en: string; tr: string }; hint: { en: string; tr: string } }) {
  return (
    <div className="flex items-start gap-3">
      <span aria-hidden="true" className="mt-1.5 h-6 w-1.5 shrink-0 rounded-full bg-teal" />
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          <Tx en={title.en} tr={title.tr} />
        </h2>
        <p className="text-sm text-slate-600">
          <Tx en={hint.en} tr={hint.tr} />
        </p>
      </div>
    </div>
  );
}

function NotesContent() {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const showTr = lang !== "en";

  const essayTypes = filterEssayTypes(
    ESSAY_TYPES,
    query,
    showTr
      ? (t) => {
          const tr = ESSAY_TYPES_TR[t.id];
          return `${tr.title} ${tr.structure.join(" ")} ${tr.templatePhrase ?? ""}`;
        }
      : undefined,
  );
  const topics = filterTopicModules(
    TOPIC_MODULES,
    query,
    showTr
      ? (m) => {
          const tr = TOPIC_MODULES_TR[m.id];
          return `${tr.topic} ${tr.question} ${tr.definitions.join(" ")}`;
        }
      : undefined,
  );

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow={<Tx en="Study notes" tr="Çalışma notları" />}
        title={<Tx en="Essay Notes & Writing Guides" tr="Kompozisyon Notları ve Yazım Rehberleri" />}
        description={
          <Tx
            en="Learn what every paragraph and every sentence of a Task 2 essay is for, then build your topic vocabulary."
            tr="Task 2 kompozisyonunun her paragrafının ve her cümlesinin ne işe yaradığını öğren, ardından konu kelime dağarcığını geliştir."
          />
        }
        actions={<LangToggle />}
      />

      <div className="relative max-w-xl">
        <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <Input
          type="search"
          role="searchbox"
          aria-label={lang === "tr" ? UI.searchLabel.tr : UI.searchLabel.en}
          placeholder={lang === "tr" ? UI.searchPlaceholder.tr : UI.searchPlaceholder.en}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 rounded-xl pl-11 shadow-sm"
        />
      </div>

      {essayTypes.length === 0 && topics.length === 0 && (
        <p className="rounded-xl border border-dashed border-border p-6 text-center text-slate-600">
          {noMatchText(query.trim(), lang)}
        </p>
      )}

      {essayTypes.length > 0 && (
        <section className="space-y-4">
          <SectionHeading title={UI.essayTypes} hint={UI.essayTypesHint} />
          <Accordion className="space-y-3">
            {essayTypes.map((t) => {
              const tr = ESSAY_TYPES_TR[t.id];
              return (
                <AccordionItem key={t.id} value={t.id} className={ITEM_CLASS}>
                  <AccordionTrigger className={TRIGGER_CLASS}>
                    <Chip>{t.number}</Chip>
                    <span className="flex-1 font-semibold">
                      <Tx
                        en={`Essay Type ${t.number}: ${t.title}`}
                        tr={`${UI.essayTypeLabel.tr} ${t.number}: ${tr.title}`}
                      />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pb-5">
                      <div className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          <Tx en={UI.structure.en} tr={UI.structure.tr} />
                        </h3>
                        <StructureFlow type={t} tr={tr} />
                      </div>

                      {t.templatePhrase && (
                        <blockquote className="relative overflow-hidden rounded-2xl border border-teal/30 bg-teal/5 p-5">
                          <Quote aria-hidden="true" className="absolute right-4 top-4 h-8 w-8 text-teal/20" />
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-teal">
                            <Tx en={UI.templatePhrase.en} tr={UI.templatePhrase.tr} />
                          </p>
                          <p className="text-lg italic text-slate-900">{t.templatePhrase}</p>
                          {showTr && tr.templatePhrase && (
                            <p className="mt-2 text-sm text-slate-600">{tr.templatePhrase}</p>
                          )}
                        </blockquote>
                      )}

                      {ESSAY_GUIDES[t.id] && (
                        <EssayGuideView guide={ESSAY_GUIDES[t.id]} tr={ESSAY_GUIDES_TR[t.id]} />
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      )}

      {topics.length > 0 && (
        <section className="space-y-4">
          <SectionHeading title={UI.topicModules} hint={UI.topicModulesHint} />
          <Accordion className="space-y-3">
            {topics.map((m) => {
              const tr = TOPIC_MODULES_TR[m.id];
              const n = TOPIC_MODULES.indexOf(m) + 1;
              return (
                <AccordionItem key={m.id} value={m.id} className={ITEM_CLASS}>
                  <AccordionTrigger className={TRIGGER_CLASS}>
                    <Chip>{n}</Chip>
                    <span className="flex-1 font-semibold">
                      <Tx en={`Topic ${n}: ${m.topic}`} tr={`${UI.topicLabel.tr} ${n}: ${tr.topic}`} />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pb-5">
                      <div className="rounded-xl border border-border bg-slate-50 p-4">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          <Tx en={UI.typicalQuestion.en} tr={UI.typicalQuestion.tr} />
                        </p>
                        <p className="font-medium text-slate-900">
                          <Tx en={m.question} tr={tr.question} />
                        </p>
                      </div>

                      <dl className="grid gap-3 md:grid-cols-2">
                        {m.vocabulary.map((v, i) => (
                          <div
                            key={v.word}
                            className="space-y-2 rounded-xl border border-border bg-white p-4 shadow-sm"
                          >
                            <dt className="flex items-baseline gap-2">
                              <span className="text-lg font-semibold text-slate-900">{v.word}</span>
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                                {showTr ? `${v.partOfSpeech} · ${posTr(v.partOfSpeech)}` : v.partOfSpeech}
                              </span>
                            </dt>
                            <dd className="text-sm leading-relaxed text-slate-700">
                              <Tx en={v.definition} tr={tr.definitions[i]} />
                            </dd>
                            <dd className="border-l-2 border-teal pl-3 text-sm italic text-slate-600">{v.example}</dd>
                          </div>
                        ))}
                      </dl>

                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          <Tx en={UI.sampleBody.en} tr={UI.sampleBody.tr} />
                        </h3>
                        <blockquote className="space-y-3 rounded-2xl border-l-4 border-teal bg-teal/5 p-5 leading-relaxed text-slate-800">
                          <p>{m.bodyParagraph}</p>
                          {showTr && <p className="border-t border-teal/20 pt-3 text-sm text-slate-600">{tr.bodyParagraph}</p>}
                        </blockquote>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      )}
    </div>
  );
}

export function NotesBrowser() {
  return (
    <LangProvider>
      <NotesContent />
    </LangProvider>
  );
}
