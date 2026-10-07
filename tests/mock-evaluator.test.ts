import { describe, expect, it } from "vitest";
import { overallBand } from "@/lib/evaluate/band";
import { evaluateEssay } from "@/lib/evaluate/mock-evaluator";
import { countWords } from "@/lib/text";
import { FULL, SHORT } from "./fixtures/essays";

describe("fixtures", () => {
  it("FULL is a realistic 250+ word essay", () => {
    expect(countWords(FULL)).toBeGreaterThanOrEqual(250);
    expect(countWords(SHORT)).toBeLessThan(60);
  });
});

describe("evaluateEssay", () => {
  it("returns integer scores in 0-9 and a consistent overall", () => {
    for (const essay of [SHORT, FULL]) {
      const e = evaluateEssay({ essay });
      for (const v of Object.values(e.scores)) {
        expect(Number.isInteger(v)).toBe(true);
        expect(v).toBeGreaterThanOrEqual(0);
        expect(v).toBeLessThanOrEqual(9);
      }
      expect(e.overall).toBe(overallBand(e.scores));
    }
  });
  it("penalises very short essays and rewards a full one", () => {
    const short = evaluateEssay({ essay: SHORT });
    const full = evaluateEssay({ essay: FULL });
    expect(short.scores.TR).toBeLessThanOrEqual(4);
    expect(full.overall).toBeGreaterThanOrEqual(5.5);
    expect(full.overall).toBeGreaterThan(short.overall);
  });
  it("is deterministic", () => {
    expect(evaluateEssay({ essay: FULL, promptId: "education" })).toEqual(
      evaluateEssay({ essay: FULL, promptId: "education" }),
    );
  });
  it("quotes specific grammar errors with corrections", () => {
    const e = evaluateEssay({ essay: "Many peoples live in cities and they should spending more time outside." });
    const bullet = e.feedback.grammar.find((b) => b.includes("peoples"));
    expect(bullet).toBeDefined();
    expect(bullet).toContain("people");
    expect(e.feedback.grammar.some((b) => b.includes("should spending"))).toBe(true);
  });
  it("suggests vocabulary upgrades", () => {
    const e = evaluateEssay({ essay: "This is a good idea for a lot of people." });
    expect(e.feedback.vocabulary.some((b) => b.includes("good") && b.includes("beneficial"))).toBe(true);
  });
  it("always gives some bullets and a model paragraph", () => {
    const e = evaluateEssay({ essay: FULL });
    expect(e.feedback.grammar.length).toBeGreaterThan(0);
    expect(e.feedback.vocabulary.length).toBeGreaterThan(0);
    for (const promptId of ["education", "environment", "technology", "unknown", undefined]) {
      expect(evaluateEssay({ essay: FULL, promptId }).feedback.modelParagraph.length).toBeGreaterThan(50);
    }
  });
});
