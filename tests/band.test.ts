import { describe, expect, it } from "vitest";
import { overallBand } from "@/lib/evaluate/band";

describe("overallBand", () => {
  it("rounds to the nearest half band, .25 and .75 rounding up", () => {
    expect(overallBand({ TR: 6, CC: 6, LR: 7, GRA: 7 })).toBe(6.5);
    expect(overallBand({ TR: 6, CC: 6, LR: 6, GRA: 7 })).toBe(6.5);
    expect(overallBand({ TR: 6, CC: 7, LR: 7, GRA: 7 })).toBe(7);
    expect(overallBand({ TR: 5, CC: 5, LR: 5, GRA: 6 })).toBe(5.5);
    expect(overallBand({ TR: 9, CC: 9, LR: 9, GRA: 9 })).toBe(9);
  });
  it("rejects out-of-range or non-finite scores", () => {
    expect(() => overallBand({ TR: 10, CC: 6, LR: 6, GRA: 6 })).toThrow(RangeError);
    expect(() => overallBand({ TR: NaN, CC: 6, LR: 6, GRA: 6 })).toThrow(RangeError);
    expect(() => overallBand({ TR: -1, CC: 6, LR: 6, GRA: 6 })).toThrow(RangeError);
  });
});
