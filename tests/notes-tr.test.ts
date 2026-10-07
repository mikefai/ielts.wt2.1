import { describe, expect, it } from "vitest";
import { ESSAY_GUIDES } from "@/lib/essay-guides-data";
import { ESSAY_GUIDES_TR } from "@/lib/essay-guides-tr-data";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { ESSAY_TYPES_TR, partTr, posTr } from "@/lib/notes-tr-data";
import { filterEssayTypes, filterTopicModules } from "@/lib/notes-search";
import { TOPIC_MODULES } from "@/lib/topic-modules-data";
import { TOPIC_MODULES_TR } from "@/lib/topic-modules-tr-data";

const filled = (s: string) => s.trim().length > 0;

describe("Turkish essay types", () => {
  it.each(ESSAY_TYPES)("$id mirrors the English structure", (t) => {
    const tr = ESSAY_TYPES_TR[t.id];
    expect(tr).toBeDefined();
    expect(filled(tr.title)).toBe(true);
    expect(tr.title).not.toBe(t.title);
    expect(tr.structure).toHaveLength(t.structure.length);
    t.structure.forEach((s, i) => {
      if (s.guidance) expect(filled(tr.structure[i])).toBe(true);
    });
    expect(Boolean(tr.templatePhrase)).toBe(Boolean(t.templatePhrase));
  });
  it("translates the paragraph labels", () => {
    expect(partTr("Intro")).toBe("Giriş");
    expect(partTr("Body 1")).toBe("Gelişme 1");
    expect(partTr("Body 2")).toBe("Gelişme 2");
    expect(partTr("Conclusion")).toBe("Sonuç");
  });
});

describe("Turkish essay guides", () => {
  it.each(ESSAY_TYPES)("$id mirrors the English guide one-to-one", (t) => {
    const en = ESSAY_GUIDES[t.id];
    const tr = ESSAY_GUIDES_TR[t.id];
    expect(tr).toBeDefined();
    expect(filled(tr.question)).toBe(true);
    expect(tr.tips).toHaveLength(en.tips.length);
    expect(tr.paragraphs).toHaveLength(en.paragraphs.length);
    en.paragraphs.forEach((p, i) => {
      const q = tr.paragraphs[i];
      expect(filled(q.purpose)).toBe(true);
      expect(q.sentences).toHaveLength(p.sentences.length);
      q.sentences.forEach((s) => {
        expect(filled(s.role)).toBe(true);
        expect(filled(s.how)).toBe(true);
      });
    });
    for (const tip of tr.tips) expect(filled(tip)).toBe(true);
  });
});

describe("Turkish topic modules", () => {
  it.each(TOPIC_MODULES)("$id mirrors the English module", (m) => {
    const tr = TOPIC_MODULES_TR[m.id];
    expect(tr).toBeDefined();
    expect(filled(tr.topic)).toBe(true);
    expect(filled(tr.question)).toBe(true);
    expect(filled(tr.bodyParagraph)).toBe(true);
    expect(tr.definitions).toHaveLength(m.vocabulary.length);
    for (const d of tr.definitions) expect(filled(d)).toBe(true);
  });
  it("is actually translated, not copied", () => {
    for (const m of TOPIC_MODULES) {
      expect(TOPIC_MODULES_TR[m.id].bodyParagraph).not.toBe(m.bodyParagraph);
      expect(TOPIC_MODULES_TR[m.id].question).not.toBe(m.question);
    }
  });
  it("translates every part of speech used", () => {
    const all = new Set(TOPIC_MODULES.flatMap((m) => m.vocabulary.map((v) => v.partOfSpeech)));
    for (const p of all) expect(posTr(p)).not.toBe(p);
    expect(posTr("noun / adjective")).toBe("isim / sıfat");
    expect(posTr("unknown-thing")).toBe("unknown-thing");
  });
});

describe("search with extra (Turkish) text", () => {
  it("matches Turkish words only when the extra haystack is supplied", () => {
    const extra = (t: { id: string }) => ESSAY_TYPES_TR[t.id].title;
    expect(filterEssayTypes(ESSAY_TYPES, "dezavantajlar").map((t) => t.number)).toEqual([]);
    expect(filterEssayTypes(ESSAY_TYPES, "dezavantajlar", extra).map((t) => t.number)).toEqual([3]);
    const topicExtra = (m: { id: string }) => TOPIC_MODULES_TR[m.id].topic;
    expect(filterTopicModules(TOPIC_MODULES, "küreselleşme", topicExtra).map((m) => m.id)).toEqual(["globalization"]);
  });
});
