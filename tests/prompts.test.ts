import { describe, expect, it } from "vitest";
import { EXAM_PROMPTS } from "@/lib/mock-exam/prompts";

describe("EXAM_PROMPTS", () => {
  it("has the three prompts verbatim, in order", () => {
    expect(EXAM_PROMPTS.map((p) => p.id)).toEqual(["education", "environment", "technology"]);
    expect(EXAM_PROMPTS[0].text).toBe(
      "In many countries, governments are spending less money on the arts and more on science and technology. Is this a positive or negative development?",
    );
    expect(EXAM_PROMPTS[1].text).toBe(
      "Some people think that environmental problems are too big for individual countries and individuals to solve. Instead, they believe only large international organizations and governments can make a difference. To what extent do you agree or disagree?",
    );
    expect(EXAM_PROMPTS[2].text).toBe(
      "The rise of artificial intelligence will have a significant impact on our daily lives. Do the advantages of this trend outweigh the disadvantages?",
    );
  });
});
