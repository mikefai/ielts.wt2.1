import { describe, expect, it } from "vitest";
import { TOPIC_MODULES } from "@/lib/topic-modules-data";
import { filterTopicModules } from "@/lib/notes-search";
import { countWords } from "@/lib/text";

describe("TOPIC_MODULES", () => {
  it("has the five requested topics in order", () => {
    expect(TOPIC_MODULES.map((m) => m.topic)).toEqual([
      "Crime",
      "Health",
      "Globalization",
      "Government Spending",
      "Art",
    ]);
  });

  describe.each(TOPIC_MODULES)("$topic", (m) => {
    it("has 10 unique vocabulary items with complete fields", () => {
      expect(m.vocabulary).toHaveLength(10);
      expect(new Set(m.vocabulary.map((v) => v.word.toLowerCase())).size).toBe(10);
      for (const v of m.vocabulary) {
        expect(v.word.trim()).not.toBe("");
        expect(v.partOfSpeech.trim()).not.toBe("");
        expect(v.definition.trim()).not.toBe("");
        expect(v.example.toLowerCase()).toContain(v.word.toLowerCase());
      }
    });
    it("has a question and a 70-130 word body paragraph using at least 5 of its words", () => {
      expect(m.question.endsWith("?") || m.question.endsWith(".")).toBe(true);
      const n = countWords(m.bodyParagraph);
      expect(n).toBeGreaterThanOrEqual(70);
      expect(n).toBeLessThanOrEqual(130);
      const used = m.vocabulary.filter((v) => m.bodyParagraph.toLowerCase().includes(v.word.toLowerCase()));
      expect(used.length).toBeGreaterThanOrEqual(5);
    });
  });
});

describe("filterTopicModules", () => {
  const topics = (q: string) => filterTopicModules(TOPIC_MODULES, q).map((m) => m.topic);
  it("matches topic names and vocabulary words, case-insensitively", () => {
    expect(topics("crime")).toEqual(["Crime"]);
    expect(topics("RECIDIVISM")).toEqual(["Crime"]);
    expect(topics("austerity")).toEqual(["Government Spending"]);
  });
  it("returns all for blank and none for no match", () => {
    expect(topics("  ")).toHaveLength(5);
    expect(topics("zzz")).toEqual([]);
  });
});
