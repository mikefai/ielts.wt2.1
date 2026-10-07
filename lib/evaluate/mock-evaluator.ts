import { overallBand } from "@/lib/evaluate/band";
import { getModelParagraph } from "@/lib/evaluate/model-paragraphs";
import type { Evaluation } from "@/lib/evaluate/types";
import { countWords } from "@/lib/text";

const LINKING_DEVICES = [
  "however", "moreover", "furthermore", "in addition", "consequently", "therefore",
  "on the other hand", "conversely", "for instance", "for example", "in conclusion",
  "nevertheless", "although",
];

const GRAMMAR_RULES: { pattern: RegExp; message: (m: string) => string }[] = [
  { pattern: /\bpeoples\b/i, message: (m) => `"${m}" → "people": "people" is already plural.` },
  { pattern: /\binformations\b/i, message: (m) => `"${m}" → "information": uncountable noun, no plural -s.` },
  { pattern: /\bmore better\b/i, message: (m) => `"${m}" → "better": do not double the comparative.` },
  { pattern: /\bshould \w+ing\b/i, message: (m) => `"${m}" → "should" + base verb (e.g. "should spend"): modal verbs take the base form.` },
  { pattern: /\bmuch people\b/i, message: (m) => `"${m}" → "many people": use "many" with countable nouns.` },
  { pattern: /\bdepend of\b/i, message: (m) => `"${m}" → "depend on": fixed preposition.` },
];

const VOCAB_RULES: { pattern: RegExp; label: string; suggestions: string }[] = [
  { pattern: /\bgood\b/i, label: "good", suggestions: '"beneficial" or "advantageous"' },
  { pattern: /\bbad\b/i, label: "bad", suggestions: '"detrimental" or "harmful"' },
  { pattern: /\bbig\b/i, label: "big", suggestions: '"substantial" or "significant"' },
  { pattern: /\ba lot of\b/i, label: "a lot of", suggestions: '"numerous" or "a considerable number of"' },
  { pattern: /\bthink\b/i, label: "think", suggestions: '"contend" or "maintain"' },
];

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/** Deterministic stand-in for an LLM examiner. Scores are heuristic, not linguistic judgement. */
export function evaluateEssay(input: { essay: string; promptId?: string }): Evaluation {
  const essay = input.essay;
  const lower = essay.toLowerCase();
  const words = countWords(essay);
  const tokens = lower.match(/[a-z']+/g) ?? [];
  const paragraphs = essay.split(/\n+/).filter((p) => p.trim() !== "").length;
  const devices = LINKING_DEVICES.filter((d) => new RegExp(`\\b${d}\\b`).test(lower)).length;

  const grammar: string[] = [];
  for (const rule of GRAMMAR_RULES) {
    const m = essay.match(rule.pattern);
    if (m) grammar.push(rule.message(m[0]));
  }
  const grammarHits = grammar.length;
  if (grammar.length === 0) {
    grammar.push("No common errors detected by this mock examiner; proofread for article use and subject–verb agreement.");
  }

  const vocabulary: string[] = [];
  for (const rule of VOCAB_RULES) {
    if (rule.pattern.test(essay)) {
      vocabulary.push(`Consider replacing "${rule.label}" with ${rule.suggestions}.`);
    }
  }
  if (vocabulary.length === 0) {
    vocabulary.push("Vary your vocabulary with precise collocations and less common topic-specific words.");
  }

  // Task Response: driven by length and paragraphing.
  let TR = words < 100 ? 3 : words < 150 ? 4 : words < 200 ? 5 : 6;
  if (words >= 250 && paragraphs >= 4) TR += 1;

  // Coherence and Cohesion: linking devices and paragraphing.
  const CC = clamp(3 + Math.min(devices, 4) + (paragraphs >= 4 ? 1 : 0), 0, 8);

  // Lexical Resource: type-token ratio and long-word share.
  const ttr = tokens.length ? new Set(tokens).size / tokens.length : 0;
  const longRatio = tokens.length ? tokens.filter((t) => t.length >= 8).length / tokens.length : 0;
  let LR = clamp(Math.round(2 + ttr * 4 + longRatio * 10), 0, 8);
  if (words < 150) LR = Math.min(LR, 5);

  // Grammar: sentence-length variety minus detected errors.
  const lengths = essay.split(/[.!?]+/).map(countWords).filter((n) => n > 0);
  const mean = lengths.length ? lengths.reduce((a, b) => a + b, 0) / lengths.length : 0;
  const sd = lengths.length ? Math.sqrt(lengths.reduce((a, n) => a + (n - mean) ** 2, 0) / lengths.length) : 0;
  let GRA = clamp(5 + (sd >= 4 ? 1 : 0) + (mean >= 12 ? 1 : 0) - grammarHits, 0, 8);
  if (words < 150) GRA = Math.min(GRA, 5);

  const scores = { TR: clamp(TR, 0, 8), CC, LR, GRA };
  return {
    scores,
    overall: overallBand(scores),
    feedback: { grammar, vocabulary, modelParagraph: getModelParagraph(input.promptId) },
  };
}
