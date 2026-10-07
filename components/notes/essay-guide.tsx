import { Badge } from "@/components/ui/badge";
import type { EssayGuide } from "@/lib/essay-guides-data";

export function EssayGuideView({ guide }: { guide: EssayGuide }) {
  return (
    <div className="space-y-6 border-t border-border pt-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">How to write each paragraph</h3>
        <p className="text-sm text-slate-600">
          Worked example. Sample question: <span className="font-medium text-slate-800">{guide.question}</span>
        </p>
      </div>

      {guide.paragraphs.map((p) => (
        <section
          key={p.part}
          aria-label={`${p.part} guide`}
          className="space-y-4 rounded-xl border border-border p-4"
        >
          <header className="space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-teal text-white">{p.part}</Badge>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{p.length}</span>
            </div>
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">Role of this paragraph: </span>
              {p.purpose}
            </p>
          </header>
          <ol className="space-y-4">
            {p.sentences.map((s, i) => (
              <li key={s.role} className="grid grid-cols-[1.75rem_1fr] gap-x-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white"
                >
                  {i + 1}
                </span>
                <div className="space-y-1.5">
                  <p className="font-semibold text-slate-900">{s.role}</p>
                  <p className="text-sm text-slate-700">{s.how}</p>
                  <p className="border-l-2 border-teal pl-3 text-sm italic text-slate-700">{s.example}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <div className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Key tips</h4>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          {guide.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
