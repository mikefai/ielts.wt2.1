import type { AgreementExercise, ConjunctionExercise, ParaphraseExercise } from "@/lib/exercises/exercise-bank";
import { countWords } from "@/lib/text";

const norm = (s: string) =>
  s.toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Whole-word phrase match: "should spend" does not match "should spending". */
function hasPhrase(text: string, phrase: string): boolean {
  return new RegExp(`\\b${escape(norm(phrase))}\\b`).test(norm(text));
}

/** Match from a word boundary only, so stems accept inflections ("curb" matches "curbing"). */
function hasStem(text: string, stem: string): boolean {
  return new RegExp(`\\b${escape(norm(stem))}`).test(norm(text));
}

const tokens = (s: string) =>
  norm(s)
    .replace(/[^a-z0-9'\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

/** First run of `n` consecutive words that the input copies verbatim from the prompt, or null. */
export function findCopiedRun(prompt: string, input: string, n = 5): string | null {
  const p = tokens(prompt);
  const i = ` ${tokens(input).join(" ")} `;
  for (let start = 0; start + n <= p.length; start++) {
    const run = p.slice(start, start + n).join(" ");
    if (i.includes(` ${run} `)) return run;
  }
  return null;
}

export function validateParaphrase(ex: ParaphraseExercise, input: string) {
  const wordCount = countWords(input);
  const enoughWords = wordCount >= ex.minWords;
  const missingConcepts = ex.concepts
    .filter((c) => !c.accepted.some((a) => hasStem(input, a)))
    .map((c) => c.label);
  const unchanged = ex.mustChange.filter((w) => hasPhrase(input, w));
  const copiedRun = findCopiedRun(ex.prompt, input);
  return {
    wordCount,
    enoughWords,
    missingConcepts,
    unchanged,
    copiedRun,
    ok: enoughWords && missingConcepts.length === 0 && unchanged.length === 0 && copiedRun === null,
  };
}

export function validateConjunction(ex: ConjunctionExercise, selected: string | null) {
  const answered = selected !== null && selected !== "";
  return { answered, ok: answered && ex.answers.includes(selected) };
}

export function validateAgreement(ex: AgreementExercise, input: string) {
  const targets = ex.targets.map(
    (t) => t.mustContain.some((p) => hasPhrase(input, p)) && !t.mustNotContain.some((p) => hasPhrase(input, p)),
  );
  const anchorsKept = ex.anchors.every((a) => hasPhrase(input, a));
  return { targets, anchorsKept, ok: targets.every(Boolean) && anchorsKept };
}
