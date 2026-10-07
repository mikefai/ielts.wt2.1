"use client";

import { useState } from "react";
import { AgreementCard, ConjunctionCard, ParaphraseCard } from "@/components/exercises/bank-cards";
import {
  AGREEMENT_DRILLS,
  CONJUNCTION_DRILLS,
  PARAPHRASE_DRILLS,
  type ExerciseCategory,
} from "@/lib/exercises/exercise-bank";
import { cn } from "@/lib/utils";

const TABS: { id: ExerciseCategory; label: string }[] = [
  { id: "paraphrase", label: "Paraphrasing Drills" },
  { id: "conjunction", label: "Subordinating Conjunctions Drills" },
  { id: "agreement", label: "Subject-Verb Agreement" },
];

export function PracticeBank() {
  const [category, setCategory] = useState<ExerciseCategory>("paraphrase");

  return (
    <div className="space-y-5">
      <div role="tablist" aria-label="Exercise categories" className="flex flex-wrap gap-2">
        {TABS.map((t) => {
          const active = t.id === category;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(t.id)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                active ? "border-slate-900 bg-slate-900 text-white" : "border-border bg-white text-slate-700 hover:border-slate-400",
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="space-y-6">
        {category === "paraphrase" &&
          PARAPHRASE_DRILLS.map((ex, i) => <ParaphraseCard key={ex.id} exercise={ex} index={i + 1} />)}
        {category === "conjunction" &&
          CONJUNCTION_DRILLS.map((ex, i) => <ConjunctionCard key={ex.id} exercise={ex} index={i + 1} />)}
        {category === "agreement" &&
          AGREEMENT_DRILLS.map((ex, i) => <AgreementCard key={ex.id} exercise={ex} index={i + 1} />)}
      </div>
    </div>
  );
}
