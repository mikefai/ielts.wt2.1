"use client";

import { useState } from "react";
import { ExamRoom } from "@/components/mock-exam/exam-room";
import { PromptPicker } from "@/components/mock-exam/prompt-picker";
import { ResultPanel } from "@/components/mock-exam/result-panel";
import type { Evaluation } from "@/lib/evaluate/types";
import type { ExamPrompt } from "@/lib/mock-exam/prompts";
import { clearSession } from "@/lib/mock-exam/storage";

type Stage =
  | { name: "select" }
  | { name: "exam"; prompt: ExamPrompt }
  | { name: "result"; evaluation: Evaluation };

export function MockExamFlow() {
  const [stage, setStage] = useState<Stage>({ name: "select" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(prompt: ExamPrompt, essay: string) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essay, promptId: prompt.id }),
      });
      if (!res.ok) throw new Error(`Evaluation failed: ${res.status}`);
      const evaluation = (await res.json()) as Evaluation;
      clearSession(prompt.id);
      setStage({ name: "result", evaluation });
    } catch {
      setError("Could not evaluate your essay. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (stage.name === "select") {
    return <PromptPicker onStart={(prompt) => setStage({ name: "exam", prompt })} />;
  }
  if (stage.name === "result") {
    return <ResultPanel evaluation={stage.evaluation} onRestart={() => setStage({ name: "select" })} />;
  }
  return (
    <div className="space-y-3">
      {error && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
      <div className="h-[calc(100dvh-11rem)] min-h-[34rem]">
        <ExamRoom prompt={stage.prompt} submitting={submitting} onSubmit={(essay) => submit(stage.prompt, essay)} />
      </div>
    </div>
  );
}
