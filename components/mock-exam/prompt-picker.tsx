"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EXAM_PROMPTS, type ExamPrompt } from "@/lib/mock-exam/prompts";
import { cn } from "@/lib/utils";

export function PromptPicker({ onStart }: { onStart: (prompt: ExamPrompt) => void }) {
  const [selected, setSelected] = useState<ExamPrompt | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Mock Exam</h1>
        <p className="text-slate-600">
          Choose a Task 2 question. You will have 40 minutes, a live word count, and no copy or paste, just like the real test.
        </p>
      </header>
      <div role="radiogroup" aria-label="Exam prompts" className="space-y-3">
        {EXAM_PROMPTS.map((p) => {
          const active = selected?.id === p.id;
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(p)}
              className={cn(
                "w-full rounded-xl border bg-white p-5 text-left transition-colors hover:border-slate-400",
                active ? "border-teal ring-2 ring-teal/30" : "border-border",
              )}
            >
              <div className="mb-2 flex items-center gap-2">
                <Badge className="bg-teal text-white">{p.topic}</Badge>
                <span className="text-xs text-slate-500">{p.essayType}</span>
              </div>
              <p className="leading-relaxed text-slate-800">{p.text}</p>
            </button>
          );
        })}
      </div>
      <Button
        disabled={!selected}
        onClick={() => selected && onStart(selected)}
        className="bg-slate-900 px-6 text-white hover:bg-slate-800"
      >
        Start exam
      </Button>
    </div>
  );
}
