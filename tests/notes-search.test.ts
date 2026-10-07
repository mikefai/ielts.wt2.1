import { describe, expect, it } from "vitest";
import { ESSAY_TYPES } from "@/lib/notes-data";
import { filterEssayTypes } from "@/lib/notes-search";

const nums = (q: string) => filterEssayTypes(ESSAY_TYPES, q).map((t) => t.number);

describe("filterEssayTypes", () => {
  it("searches across structure text, case-insensitively, with AND terms", () => {
    expect(nums("refute")).toEqual([1]);
    expect(nums("SIDE B")).toEqual([2]);
    expect(nums("causes")).toEqual([4]);
    expect(nums("essay type 3")).toEqual([3]);
  });
  it("returns everything for a blank query and nothing for no match", () => {
    expect(nums("   ")).toEqual([1, 2, 3, 4, 5]);
    expect(nums("zzz")).toEqual([]);
  });
});
