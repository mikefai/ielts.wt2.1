"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExamTimer } from "@/components/mock-exam/exam-timer";
import { GuardedTextarea } from "@/components/mock-exam/guarded-textarea";
import { useAutosave } from "@/hooks/use-autosave";
import type { ExamPrompt } from "@/lib/mock-exam/prompts";
import { clearSession, loadSession, saveSession } from "@/lib/mock-exam/storage";
import { countWords } from "@/lib/text";

export function ExamRoom({
  prompt,
  onSubmit,
  submitting = false,
}: {
  prompt: ExamPrompt;
  onSubmit: (essay: string) => void;
  submitting?: boolean;
}) {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [essay, setEssay] = useState("");
  const [timeUp, setTimeUp] = useState(false);

  // Read storage on the client only, after hydration.
  useEffect(() => {
    const existing = loadSession(prompt.id);
    const session = existing ?? { promptId: prompt.id, startedAt: Date.now(), essay: "" };
    if (!existing) saveSession(session);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStartedAt(session.startedAt);
    setEssay(session.essay);
  }, [prompt.id]);

  function startOver() {
    clearSession(prompt.id);
    const now = Date.now();
    saveSession({ promptId: prompt.id, startedAt: now, essay: "" });
    setStartedAt(now);
    setEssay("");
    setTimeUp(false);
  }

  useAutosave(essay, (value) => {
    if (startedAt !== null) saveSession({ promptId: prompt.id, startedAt, essay: value });
  });

  return (
    <div className="grid h-full min-h-[32rem] overflow-hidden rounded-xl border border-border bg-white md:grid-cols-2">
      <section aria-label="Task" className="flex flex-col gap-5 overflow-y-auto border-b border-border bg-slate-50 p-6 md:border-b-0 md:border-r">
        <div className="flex items-center justify-between gap-4">
          <Badge className="bg-teal text-white">{prompt.topic}</Badge>
          {startedAt !== null && <ExamTimer key={startedAt} startedAt={startedAt} onExpire={() => setTimeUp(true)} />}
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Writing Task 2</h2>
          <p className="text-lg font-medium leading-relaxed text-slate-900">{prompt.text}</p>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>You should spend about 40 minutes on this task.</li>
          <li>Write about the following topic.</li>
          <li>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</li>
          <li>Write at least 250 words.</li>
        </ul>
      </section>
      <div className="flex min-h-0 flex-col gap-3 p-6">
        {timeUp && (
          <div role="status" className="flex items-center justify-between gap-3 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            <span>Time is up — submit your essay.</span>
            <Button variant="outline" size="sm" onClick={startOver}>
              Start over
            </Button>
          </div>
        )}
        <GuardedTextarea
          aria-label="Your essay"
          value={essay}
          readOnly={timeUp}
          maxLength={20000}
          onChange={(e) => setEssay(e.target.value)}
          placeholder="Start typing your essay here…"
          className="min-h-64 flex-1"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">{`Words: ${countWords(essay)}`}</span>
          <Button onClick={() => onSubmit(essay)} disabled={submitting || essay.trim() === ""} className="bg-slate-900 text-white hover:bg-slate-800">
            {submitting ? "Submitting…" : "Submit essay"}
          </Button>
        </div>
      </div>
    </div>
  );
}
