import { describe, expect, it } from "vitest";
import { EXAMINER_SYSTEM_PROMPT } from "@/lib/evaluate/prompt";

describe("EXAMINER_SYSTEM_PROMPT", () => {
  it("contains the four criteria and the output instruction", () => {
    for (const s of [
      "Task Response (TR) - Grade 0-9",
      "Coherence and Cohesion (CC) - Grade 0-9",
      "Lexical Resource (LR) - Grade 0-9",
      "Grammatical Range and Accuracy (GRA) - Grade 0-9",
      "a rewritten optimized model paragraph.",
    ]) {
      expect(EXAMINER_SYSTEM_PROMPT).toContain(s);
    }
  });
});
