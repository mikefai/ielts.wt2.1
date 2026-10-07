"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateAgreement, validateConjunction, validateParaphrase } from "@/lib/exercises/bank-validators";
import type { AgreementExercise, ConjunctionExercise, ParaphraseExercise } from "@/lib/exercises/exercise-bank";

const mark = (ok: boolean) => (ok ? "✓" : "✗");

export function ParaphraseCard({ exercise, index }: { exercise: ParaphraseExercise; index: number }) {
  const [text, setText] = useState("");
  const r = validateParaphrase(exercise, text);
  const started = text.trim() !== "";

  return (
    <Card>
      <CardHeader>
        <CardTitle>{`Paraphrasing Drill ${index}`}</CardTitle>
        <CardDescription>
          Rewrite this introduction sentence in your own words. Keep the meaning, but change the vocabulary and structure.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="rounded-lg border border-border bg-slate-50 p-4 font-medium text-slate-800">{exercise.prompt}</p>
        <Textarea
          aria-label={`Paraphrase ${index} answer`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
        />
        <ul className="space-y-1 text-sm" aria-live="polite">
          {exercise.concepts.map((c) => {
            const ok = !r.missingConcepts.includes(c.label);
            return (
              <li key={c.label} className={started && ok ? "text-teal" : "text-slate-600"}>
                {`${started ? mark(ok) : "•"} Keep: ${c.label}`}
              </li>
            );
          })}
        </ul>
        <div className="space-y-1 text-sm" aria-live="polite">
          <p className={r.enoughWords ? "text-teal" : "text-slate-600"}>{`Words: ${r.wordCount}/${exercise.minWords}`}</p>
          {started && r.unchanged.length > 0 && (
            <p className="text-slate-600">{`Change these words: ${r.unchanged.join(", ")}`}</p>
          )}
          {started && r.copiedRun && <p className="text-slate-600">{`Avoid copying: "${r.copiedRun}"`}</p>}
          {r.ok && <p className="font-semibold text-teal">Great paraphrase</p>}
        </div>
        <Button variant="outline" onClick={() => setText("")}>Reset</Button>
      </CardContent>
    </Card>
  );
}

export function ConjunctionCard({ exercise, index }: { exercise: ConjunctionExercise; index: number }) {
  const [selected, setSelected] = useState<string | null>(null);
  const r = validateConjunction(exercise, selected);
  const [before, after] = exercise.sentence.split("___");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{`Subordinating Conjunctions Drill ${index}`}</CardTitle>
        <CardDescription>Choose the conjunction that completes the sentence logically.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-2 leading-loose text-slate-800">
          {before && <span>{before}</span>}
          <select
            aria-label={`Conjunction ${index} blank`}
            value={selected ?? ""}
            onChange={(e) => setSelected(e.target.value || null)}
            className="h-9 rounded-md border border-border bg-white px-2 text-sm focus-visible:outline-2 focus-visible:outline-teal"
          >
            <option value="">Choose…</option>
            {exercise.options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          {after && <span>{after}</span>}
        </p>
        <div className="space-y-1 text-sm" aria-live="polite">
          {r.answered && (
            <p className={r.ok ? "font-semibold text-teal" : "text-red-600"}>{r.ok ? "Correct" : "Try again"}</p>
          )}
          {r.ok && <p className="text-slate-600">{exercise.explanation}</p>}
        </div>
        <Button variant="outline" onClick={() => setSelected(null)}>Reset</Button>
      </CardContent>
    </Card>
  );
}

export function AgreementCard({ exercise, index }: { exercise: AgreementExercise; index: number }) {
  const [text, setText] = useState(exercise.incorrect);
  const r = validateAgreement(exercise, text);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{`Subject-Verb Agreement ${index}`}</CardTitle>
        <CardDescription>
          {exercise.targets.length === 1
            ? "This sentence has one agreement error. Fix it."
            : `This sentence has ${exercise.targets.length} agreement errors. Fix them all.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input aria-label={`Agreement ${index} sentence`} value={text} onChange={(e) => setText(e.target.value)} />
        <ul className="space-y-1 text-sm" aria-live="polite">
          {exercise.targets.map((t, i) => (
            <li key={t.label} className={r.targets[i] ? "text-teal" : "text-slate-600"}>
              {`${mark(r.targets[i])} ${t.label}`}
            </li>
          ))}
        </ul>
        {!r.anchorsKept && (
          <p className="text-sm text-slate-600">Keep the rest of the sentence: only fix the verb.</p>
        )}
        {r.ok && (
          <div className="space-y-1 text-sm">
            <p className="font-semibold text-teal">All errors corrected</p>
            <p className="text-slate-600">{exercise.explanation}</p>
          </div>
        )}
        <Button variant="outline" onClick={() => setText(exercise.incorrect)}>Reset</Button>
      </CardContent>
    </Card>
  );
}
