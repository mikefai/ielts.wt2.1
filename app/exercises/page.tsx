import { DrillA } from "@/components/exercises/drill-a";
import { DrillB } from "@/components/exercises/drill-b";
import { DrillC } from "@/components/exercises/drill-c";
import { PracticeBank } from "@/components/exercises/practice-bank";

export default function ExercisesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Exercises</h1>
        <p className="text-slate-600">Short drills with instant feedback.</p>
      </header>
      <section className="space-y-6">
        <DrillA />
        <DrillB />
        <DrillC />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Practice bank</h2>
        <p className="text-slate-600">Fifteen more drills: paraphrasing, subordinating conjunctions and subject-verb agreement.</p>
        <PracticeBank />
      </section>
    </div>
  );
}
