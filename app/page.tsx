import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SECTIONS = [
  { href: "/notes", title: "Notes", text: "Five essay types: structure, flow and template phrases." },
  { href: "/exercises", title: "Exercises", text: "Three quick drills with instant feedback." },
  { href: "/mock-exam", title: "Mock Exam", text: "A 40-minute computer-delivered style simulation, with examiner feedback." },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Master IELTS Academic Writing <span className="text-teal">Task 2</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Learn the structures, sharpen the language, then prove it under exam conditions.
        </p>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {SECTIONS.map((s) => (
          <Link key={s.href} href={s.href} className="group">
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-900">{s.title}</CardTitle>
                <CardDescription>{s.text}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
