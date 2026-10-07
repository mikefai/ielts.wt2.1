import { countWords } from "@/lib/text";

export const THESIS_MIN_WORDS = 15;
export const THESIS_PHRASES = ["I completely agree because", "This essay argues that"];

export function validateThesis(input: string) {
  const wordCount = countWords(input);
  const normalised = input.toLowerCase().replace(/\s+/g, " ");
  const enoughWords = wordCount >= THESIS_MIN_WORDS;
  const hasPhrase = THESIS_PHRASES.some((p) => normalised.includes(p.toLowerCase()));
  return { wordCount, enoughWords, hasPhrase, ok: enoughWords && hasPhrase };
}

export const CONNECTOR_OPTIONS = ["On the one hand,", "Conversely,", "In addition,", "For instance"];
export const CONNECTOR_ANSWERS = { slot1: "On the one hand,", slot2: "Conversely," };

export function validateConnectors(sel: { slot1: string | null; slot2: string | null }) {
  const slot1 = sel.slot1 === CONNECTOR_ANSWERS.slot1;
  const slot2 = sel.slot2 === CONNECTOR_ANSWERS.slot2;
  return { slot1, slot2, ok: slot1 && slot2 };
}

export const CORRECTION_SENTENCE = "The government should spending more money on public transportations.";

export function validateCorrection(input: string) {
  // Trailing \b rejects "spending" and "transportations".
  const modal = /\bshould spend\b/i.test(input);
  const noun = /\bpublic transportation\b/i.test(input);
  return { modal, noun, ok: modal && noun };
}
