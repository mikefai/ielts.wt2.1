import { DrillA } from "@/components/exercises/drill-a";
import { DrillB } from "@/components/exercises/drill-b";
import { DrillC } from "@/components/exercises/drill-c";

export default function ExercisesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Exercises</h1>
        <p className="text-slate-600">Three short drills with instant feedback.</p>
      </header>
      <DrillA />
      <DrillB />
      <DrillC />
    </div>
  );
}
