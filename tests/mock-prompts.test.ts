import { describe, expect, it } from "vitest";
import {
  ESSAY_TYPE_IDS,
  MOCK_PROMPTS,
  getPromptsByType,
  getRandomPrompt,
  type EssayTypeId,
} from "@/src/data/mockPrompts";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { EXAM_PROMPTS } from "@/lib/mock-exam/prompts";
import { countWords } from "@/lib/text";

describe("MOCK_PROMPTS", () => {
  it("has 20 prompts, evenly split across the five essay types", () => {
    expect(MOCK_PROMPTS).toHaveLength(20);
    for (const id of ESSAY_TYPE_IDS) {
      expect(MOCK_PROMPTS.filter((p) => p.essayType === id)).toHaveLength(4);
    }
  });

  it("uses the same essay-type ids as the /notes curriculum", () => {
    expect([...ESSAY_TYPE_IDS].sort()).toEqual(ESSAY_TYPES.map((t) => t.id).sort());
  });

  it("has unique ids and unique texts, none duplicating the three built-in exam prompts", () => {
    expect(new Set(MOCK_PROMPTS.map((p) => p.id)).size).toBe(20);
    expect(new Set(MOCK_PROMPTS.map((p) => p.text)).size).toBe(20);
    for (const p of MOCK_PROMPTS) expect(EXAM_PROMPTS.map((e) => e.text)).not.toContain(p.text);
  });

  it("is plain JSON-serialisable data", () => {
    expect(JSON.parse(JSON.stringify(MOCK_PROMPTS))).toEqual(MOCK_PROMPTS);
  });

  it.each(MOCK_PROMPTS)("$id is exam-length, well-formed and has its task instruction", (p) => {
    const n = countWords(p.text);
    expect(n).toBeGreaterThanOrEqual(20);
    expect(n).toBeLessThanOrEqual(80);
    expect(p.topic.trim()).not.toBe("");
    expect(p.text).toBe(p.text.trim());
    expect(/[.?]$/.test(p.text)).toBe(true);
    const t = p.text.toLowerCase();
    const questions = (p.text.match(/\?/g) ?? []).length;
    switch (p.essayType) {
      case "agree-disagree":
        expect(t).toContain("to what extent do you agree or disagree?");
        break;
      case "discussion":
        expect(t).toMatch(/discuss both (these )?views and give your own opinion\.$/);
        break;
      case "advantages-disadvantages":
        expect(t).toMatch(/advantages and disadvantages|outweigh the disadvantages/);
        break;
      case "problem-solution":
        expect(questions).toBeGreaterThanOrEqual(1);
        expect(t).toMatch(/problems|causes/);
        expect(t).toMatch(/solution|measures|what can be done|solved|address|reduce/);
        break;
      case "two-part-question":
        expect(questions).toBeGreaterThanOrEqual(2);
        break;
    }
  });
});

describe("helpers", () => {
  it("getPromptsByType filters by essay type", () => {
    const list = getPromptsByType("discussion");
    expect(list).toHaveLength(4);
    expect(list.every((p) => p.essayType === "discussion")).toBe(true);
  });
  it("getRandomPrompt is deterministic with an injected rng and respects the type filter", () => {
    expect(getRandomPrompt(undefined, () => 0)).toBe(MOCK_PROMPTS[0]);
    expect(getRandomPrompt(undefined, () => 0.999999)).toBe(MOCK_PROMPTS[19]);
    const type: EssayTypeId = "problem-solution";
    const typed = getPromptsByType(type);
    expect(getRandomPrompt(type, () => 0.999999)).toBe(typed[3]);
    expect(getRandomPrompt(type, () => 0)?.essayType).toBe(type);
  });
});
