import { describe, expect, it } from "vitest";
import {
  AGREEMENT_DRILLS,
  CONJUNCTION_DRILLS,
  PARAPHRASE_DRILLS,
} from "@/lib/exercises/exercise-bank";
import {
  validateAgreement,
  validateConjunction,
  validateParaphrase,
} from "@/lib/exercises/bank-validators";

describe("bank data integrity", () => {
  it("has five of each category with unique ids", () => {
    expect(PARAPHRASE_DRILLS).toHaveLength(5);
    expect(CONJUNCTION_DRILLS).toHaveLength(5);
    expect(AGREEMENT_DRILLS).toHaveLength(5);
    const ids = [...PARAPHRASE_DRILLS, ...CONJUNCTION_DRILLS, ...AGREEMENT_DRILLS].map((e) => e.id);
    expect(new Set(ids).size).toBe(15);
  });
  it("conjunction exercises are well-formed", () => {
    for (const ex of CONJUNCTION_DRILLS) {
      expect(ex.sentence.split("___")).toHaveLength(2);
      expect(new Set(ex.options).size).toBe(ex.options.length);
      expect(ex.options.length).toBeGreaterThanOrEqual(4);
      expect(ex.answers.length).toBeGreaterThanOrEqual(1);
      for (const a of ex.answers) expect(ex.options).toContain(a);
      expect(ex.explanation.trim()).not.toBe("");
    }
  });
});

describe("validateParaphrase", () => {
  it.each(PARAPHRASE_DRILLS)("accepts the model answer and rejects the prompt ($id)", (ex) => {
    expect(validateParaphrase(ex, ex.sampleAnswer)).toMatchObject({ ok: true, missingConcepts: [], unchanged: [], copiedRun: null });
    const copy = validateParaphrase(ex, ex.prompt);
    expect(copy.ok).toBe(false);
    expect(copy.copiedRun).not.toBeNull();
    expect(copy.unchanged.length).toBeGreaterThan(0);
  });
  it("rejects empty input and reports every missing concept", () => {
    const ex = PARAPHRASE_DRILLS[0];
    const r = validateParaphrase(ex, "");
    expect(r.ok).toBe(false);
    expect(r.wordCount).toBe(0);
    expect(r.missingConcepts).toHaveLength(ex.concepts.length);
  });
  it("rejects a model answer with a copied 5-word run appended", () => {
    const ex = PARAPHRASE_DRILLS[0];
    const r = validateParaphrase(ex, `${ex.sampleAnswer} should be free for everyone`);
    expect(r.ok).toBe(false);
    expect(r.copiedRun).not.toBeNull();
  });
  it("rejects a paraphrase that drops a key idea", () => {
    const ex = PARAPHRASE_DRILLS[0];
    const r = validateParaphrase(ex, "Some argue that learning beyond school ought to cost nothing for all citizens.");
    expect(r.ok).toBe(false);
    expect(r.missingConcepts.length).toBeGreaterThan(0);
  });
  it("rejects answers that are too short even if every idea appears", () => {
    const ex = PARAPHRASE_DRILLS[0];
    const r = validateParaphrase(ex, "Argued higher education without charge all citizens");
    expect(r.enoughWords).toBe(false);
    expect(r.ok).toBe(false);
  });
  it("is case- and whitespace-insensitive", () => {
    const ex = PARAPHRASE_DRILLS[0];
    expect(validateParaphrase(ex, `  ${ex.sampleAnswer.toUpperCase()}\n`).ok).toBe(true);
  });
});

describe("validateConjunction", () => {
  it.each(CONJUNCTION_DRILLS)("accepts every listed answer and rejects the others ($id)", (ex) => {
    for (const a of ex.answers) expect(validateConjunction(ex, a).ok).toBe(true);
    for (const o of ex.options.filter((o) => !ex.answers.includes(o))) {
      expect(validateConjunction(ex, o).ok).toBe(false);
    }
  });
  it("rejects no selection and unknown text", () => {
    const ex = CONJUNCTION_DRILLS[0];
    expect(validateConjunction(ex, null)).toEqual({ answered: false, ok: false });
    expect(validateConjunction(ex, "Nonsense")).toEqual({ answered: true, ok: false });
  });
  it("accepts both 'Whereas' and 'While' where both are valid", () => {
    const ex = CONJUNCTION_DRILLS.find((e) => e.answers.length === 2)!;
    expect(ex.answers).toEqual(["Whereas", "While"]);
  });
});

describe("validateAgreement", () => {
  it.each(AGREEMENT_DRILLS)("accepts the model answer and rejects the original ($id)", (ex) => {
    expect(validateAgreement(ex, ex.sampleAnswer)).toMatchObject({ ok: true, anchorsKept: true });
    const orig = validateAgreement(ex, ex.incorrect);
    expect(orig.ok).toBe(false);
    expect(orig.targets.every((t) => t === false)).toBe(true);
  });
  it("rejects a 'fix' that deletes the rest of the sentence", () => {
    const ex = AGREEMENT_DRILLS[2];
    const r = validateAgreement(ex, "Everyone has completed.");
    expect(r.anchorsKept).toBe(false);
    expect(r.ok).toBe(false);
  });
  it("requires both fixes in the two-error sentence", () => {
    const ex = AGREEMENT_DRILLS[4];
    expect(ex.targets).toHaveLength(2);
    const half = ex.incorrect.replace("policies are aimed", "policies is aimed");
    const r = validateAgreement(ex, half);
    expect(r.targets).toEqual([true, false]);
    expect(r.ok).toBe(false);
  });
  it("does not accept a near-miss that keeps the wrong verb ('students was')", () => {
    const ex = AGREEMENT_DRILLS[1];
    expect(validateAgreement(ex, "Neither the teacher nor the students was happy with the exam results.").ok).toBe(false);
  });
});

describe("validateParaphrase with independent wordings", () => {
  const [, p2, , p4, p5] = PARAPHRASE_DRILLS;
  it("accepts valid alternative paraphrases", () => {
    expect(validateParaphrase(p2, "These days, a growing number of people prefer urban living to life in the countryside.").ok).toBe(true);
    expect(validateParaphrase(p5, "Some critics maintain that harsher jail terms are the most effective way to cut offending.").ok).toBe(true);
  });
  it("rejects an otherwise good paraphrase that keeps a banned word ('spend')", () => {
    const r = validateParaphrase(p4, "Many people claim that kids spend too much time on screens.");
    expect(r.unchanged).toEqual(["spend"]);
    expect(r.ok).toBe(false);
  });
});
