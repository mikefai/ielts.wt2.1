import { DrillA } from "@/components/exercises/drill-a";
import { DrillB } from "@/components/exercises/drill-b";
import { DrillC } from "@/components/exercises/drill-c";
import { PracticeBank } from "@/components/exercises/practice-bank";
import { PageHeader } from "@/components/page-header";

export default function ExercisesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <PageHeader
        eyebrow="Practice"
        title="Exercises"
        description="Short drills with instant feedback. Build one skill at a time before you sit the full exam."
      />
      <section className="space-y-6">
        <DrillA />
        <DrillB />
        <DrillC />
      </section>
      <section className="space-y-5">
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-1.5 h-6 w-1.5 shrink-0 rounded-full bg-teal" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Practice bank</h2>
            <p className="text-sm text-slate-600">
              Fifteen more drills: paraphrasing, subordinating conjunctions and subject-verb agreement.
            </p>
          </div>
        </div>
        <PracticeBank />
      </section>
    </div>
  );
}
