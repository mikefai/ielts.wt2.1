# IELTS Academic Writing Task 2 Prep

A Next.js (App Router) study app for IELTS Academic Writing Task 2.

- **/notes** – the five essay types (searchable) plus five topic vocabulary modules (Crime, Health, Globalization, Government Spending, Art).
- **/exercises** – three core drills plus a 15-exercise practice bank (paraphrasing, subordinating conjunctions, subject-verb agreement) with instant client-side validation.
- **/mock-exam** – split-screen, 40-minute exam simulator (red timer at 05:00, live word count, copy/cut/paste/right-click/drop disabled, autosave every 20 s and on page hide, resumes after reload) that submits to `/api/evaluate`.
- **/api/evaluate** – a *mock* examiner: deterministic, rule-based scores for TR/CC/LR/GRA. The real examiner prompt is exported from `lib/evaluate/prompt.ts` as the seam for an LLM.

Content lives in typed modules: `lib/notes-data.ts`, `lib/topic-modules-data.ts`, `lib/exercises/exercise-bank.ts`, `lib/mock-exam/prompts.ts`, `src/data/mockPrompts.ts` (20 additional original practice prompts; not yet wired into the simulator).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # vitest
npm run lint
npm run build
```

Stack: Next.js, TypeScript, Tailwind CSS, shadcn/ui (Base UI), Vitest + Testing Library.
