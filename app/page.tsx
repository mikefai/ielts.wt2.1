import Link from "next/link";
import { ArrowRight, BookOpen, Languages, PenLine, Timer } from "lucide-react";

const SECTIONS = [
  {
    href: "/notes",
    icon: BookOpen,
    title: "Notes",
    text: "Five essay types with a paragraph-by-paragraph, sentence-by-sentence guide, plus topic vocabulary. Available in English and Türkçe.",
    cta: "Open the notes",
  },
  {
    href: "/exercises",
    icon: PenLine,
    title: "Exercises",
    text: "Eighteen short drills with instant feedback: thesis building, linking words, paraphrasing, conjunctions and grammar.",
    cta: "Start practising",
  },
  {
    href: "/mock-exam",
    icon: Timer,
    title: "Mock Exam",
    text: "A 40-minute, computer-delivered-style simulation with a live word count and examiner-style band feedback.",
    cta: "Sit a mock exam",
  },
];

const STATS = [
  { value: "5", label: "essay types" },
  { value: "50", label: "Band 9 words" },
  { value: "18", label: "drills" },
  { value: "40", label: "minute exam" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-6 py-14 text-white sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-teal/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
        />
        <div className="relative max-w-2xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-teal-200">
            <Languages aria-hidden="true" className="h-3.5 w-3.5" />
            English · Türkçe
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Master IELTS Academic Writing <span className="text-teal-300">Task 2</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-300">
            Learn the structure of every paragraph, sharpen your language with focused drills, then prove it under exam
            conditions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-colors hover:bg-teal-700"
            >
              Start with the notes
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/mock-exam"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Take a mock exam
            </Link>
          </div>
        </div>
      </section>

      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-3xl font-semibold tracking-tight text-teal">{s.value}</span>
              <span className="text-sm text-slate-600">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      <section aria-label="Sections" className="grid gap-5 md:grid-cols-3">
        {SECTIONS.map(({ href, icon: Icon, title, text, cta }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
              {cta}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
