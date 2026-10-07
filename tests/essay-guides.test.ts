import { describe, expect, it } from "vitest";
import { ESSAY_GUIDES } from "@/lib/essay-guides-data";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { countWords } from "@/lib/text";

describe("ESSAY_GUIDES", () => {
  it("has a guide for every essay type in /notes", () => {
    expect(Object.keys(ESSAY_GUIDES).sort()).toEqual(ESSAY_TYPES.map((t) => t.id).sort());
  });

  describe.each(ESSAY_TYPES)("$title", (type) => {
    const guide = ESSAY_GUIDES[type.id];

    it("covers exactly the paragraphs in the structure, in order", () => {
      expect(guide.paragraphs.map((p) => p.part)).toEqual(type.structure.map((s) => s.part));
    });

    it("has a question, tips, and a purpose and word target for every paragraph", () => {
      expect(guide.question.trim()).not.toBe("");
      expect(guide.tips.length).toBeGreaterThanOrEqual(2);
      for (const p of guide.paragraphs) {
        expect(p.purpose.trim().length).toBeGreaterThan(20);
        expect(p.length).toMatch(/^\d+–\d+ words$/);
      }
    });

    it("explains every sentence with a role, a how-to and a full example sentence", () => {
      for (const p of guide.paragraphs) {
        expect(p.sentences.length).toBeGreaterThanOrEqual(3);
        const roles = p.sentences.map((s) => s.role);
        expect(new Set(roles).size).toBe(roles.length);
        for (const s of p.sentences) {
          expect(s.role.trim()).not.toBe("");
          expect(s.how.trim().length).toBeGreaterThan(20);
          expect(countWords(s.example)).toBeGreaterThanOrEqual(6);
          expect(/[.?]$/.test(s.example)).toBe(true);
        }
      }
    });
  });

  it("makes the thesis / position role explicit in every introduction", () => {
    for (const t of ESSAY_TYPES) {
      const intro = ESSAY_GUIDES[t.id].paragraphs[0];
      expect(intro.part).toBe("Intro");
      expect(intro.sentences.some((s) => /position|thesis|outline|opinion/i.test(s.role))).toBe(true);
    }
  });
});
