import { Button } from "@/components/ui/button";
import type { Evaluation } from "@/lib/evaluate/types";

const CRITERIA = [
  { key: "TR", label: "Task Response" },
  { key: "CC", label: "Coherence and Cohesion" },
  { key: "LR", label: "Lexical Resource" },
  { key: "GRA", label: "Grammatical Range and Accuracy" },
] as const;

export function ResultPanel({ evaluation, onRestart }: { evaluation: Evaluation; onRestart: () => void }) {
  const { scores, overall, feedback } = evaluation;
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="rounded-xl border border-border p-6 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Overall band</p>
        <p className="text-6xl font-semibold text-teal">{overall.toFixed(1)}</p>
      </section>
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {CRITERIA.map(({ key, label }) => (
          <div key={key} className="rounded-lg border border-border p-4">
            <p className="text-2xl font-semibold text-slate-900">{scores[key]}</p>
            <p className="text-sm text-slate-600">{label}</p>
          </div>
        ))}
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Grammar corrections</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {feedback.grammar.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Vocabulary enhancements</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {feedback.vocabulary.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Model paragraph</h2>
        <blockquote className="rounded-lg border-l-4 border-teal bg-slate-50 p-4 leading-relaxed text-slate-800">
          <p>{feedback.modelParagraph}</p>
        </blockquote>
      </section>
      <Button variant="outline" onClick={onRestart}>
        Try another prompt
      </Button>
    </div>
  );
}
