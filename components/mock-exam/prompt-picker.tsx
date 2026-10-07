"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EXAM_PROMPTS, type ExamPrompt } from "@/lib/mock-exam/prompts";
import { cn } from "@/lib/utils";

export function PromptPicker({ onStart }: { onStart: (prompt: ExamPrompt) => void }) {
  const [selected, setSelected] = useState<ExamPrompt | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHeader
        eyebrow="Timed simulation"
        title="Mock Exam"
        description="Choose a Task 2 question. You will have 40 minutes, a live word count, and no copy or paste, just like the real test."
      />
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
                "relative w-full rounded-2xl border bg-white p-5 pr-14 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md",
                active ? "border-teal bg-teal/5 ring-2 ring-teal/30" : "border-border",
              )}
            >
              <div className="mb-2 flex items-center gap-2">
                <Badge className="bg-teal text-white">{p.topic}</Badge>
                <span className="text-xs text-slate-500">{p.essayType}</span>
              </div>
              <p className="leading-relaxed text-slate-800">{p.text}</p>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  active ? "border-teal bg-teal text-white" : "border-border bg-white text-transparent",
                )}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
            </button>
          );
        })}
      </div>
      <Button
        disabled={!selected}
        onClick={() => selected && onStart(selected)}
        className="h-11 rounded-xl bg-slate-900 px-8 text-white hover:bg-slate-800"
      >
        Start exam
      </Button>
    </div>
  );
}
