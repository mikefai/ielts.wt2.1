import { describe, expect, it } from "vitest";
import { countWords } from "@/lib/text";

describe("countWords", () => {
  it("handles empty and whitespace-only input", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   \n\t ")).toBe(0);
  });
  it("ignores repeated and mixed whitespace", () => {
    expect(countWords("  one   two\nthree\tfour  ")).toBe(4);
  });
  it("treats hyphenated words as one", () => {
    expect(countWords("well-known idea")).toBe(2);
  });
});
