import { Lightbulb } from "lucide-react";
import { Tx, useLang } from "@/components/notes/lang";
import { PartBadge } from "@/components/notes/part-badge";
import type { EssayGuide } from "@/lib/essay-guides-data";
import type { EssayGuideTr } from "@/lib/essay-guides-tr-data";
import { UI } from "@/lib/notes-tr-data";

export function EssayGuideView({ guide, tr }: { guide: EssayGuide; tr?: EssayGuideTr }) {
  const { lang } = useLang();

  return (
    <div className="space-y-6 border-t border-border pt-6">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          <Tx en={UI.howToWrite.en} tr={UI.howToWrite.tr} />
        </h3>
        <div className="rounded-xl border border-border bg-slate-50 p-4 text-sm text-slate-700">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Tx en={UI.workedExample.en} tr={UI.workedExample.tr} />
          </p>
          <p className="font-medium text-slate-900">
            <Tx en={guide.question} tr={tr?.question} />
          </p>
        </div>
        {lang !== "en" && <p className="text-xs text-slate-500">{UI.englishOnlyNote.tr}</p>}
      </div>

      <div className="space-y-5">
        {guide.paragraphs.map((p, pi) => {
          const ptr = tr?.paragraphs[pi];
          return (
            <section
              key={p.part}
              aria-label={`${p.part} guide`}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              <header className="space-y-2 border-b border-border bg-slate-50/70 px-5 py-4">
                <div className="flex flex-wrap items-center gap-3">
                  <PartBadge part={p.part} />
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-slate-500 ring-1 ring-border">
                    {p.length}
                  </span>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold text-slate-900">
                    <Tx en={UI.roleOfParagraph.en} tr={UI.roleOfParagraph.tr} />{" "}
                  </span>
                  <Tx en={p.purpose} tr={ptr?.purpose} />
                </p>
              </header>

              <ol className="relative space-y-6 px-5 py-5">
                <span
                  aria-hidden="true"
                  className="absolute bottom-8 left-[2.15rem] top-8 w-px bg-gradient-to-b from-teal/60 to-border"
                />
                {p.sentences.map((s, si) => {
                  const str = ptr?.sentences[si];
                  return (
                    <li key={s.role} className="relative grid grid-cols-[2.25rem_1fr] gap-x-4">
                      <span
                        aria-hidden="true"
                        className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white ring-4 ring-white"
                      >
                        {si + 1}
                      </span>
                      <div className="space-y-2">
                        <p className="font-semibold text-slate-900">
                          <Tx en={s.role} tr={str?.role} />
                        </p>
                        <p className="text-sm leading-relaxed text-slate-700">
                          <Tx en={s.how} tr={str?.how} />
                        </p>
                        <div className="rounded-xl border-l-4 border-teal bg-teal/5 px-4 py-3">
                          <p className="mb-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-teal">
                            <Tx en={UI.modelSentence.en} tr={UI.modelSentence.tr} />
                          </p>
                          <p className="text-sm italic leading-relaxed text-slate-800">{s.example}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>

      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-teal">
          <Lightbulb aria-hidden="true" className="h-4 w-4" />
          <Tx en={UI.keyTips.en} tr={UI.keyTips.tr} />
        </h4>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          {guide.tips.map((tip, i) => (
            <li key={tip}>
              <Tx en={tip} tr={tr?.tips[i]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
