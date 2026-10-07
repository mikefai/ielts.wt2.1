import { describe, expect, it } from "vitest";
import { formatClock, isUrgent, remainingMs } from "@/lib/mock-exam/timer";

const t0 = 1_000_000;

describe("remainingMs", () => {
  it("counts down from 40 minutes and clamps", () => {
    expect(remainingMs(t0, t0)).toBe(2_400_000);
    expect(remainingMs(t0, t0 + 1000)).toBe(2_399_000);
    expect(remainingMs(t0, t0 - 5000)).toBe(2_400_000);
    expect(remainingMs(t0, t0 + 3_000_000)).toBe(0);
  });
});

describe("formatClock", () => {
  it("formats MM:SS rounding up, never negative", () => {
    expect(formatClock(2_400_000)).toBe("40:00");
    expect(formatClock(299_001)).toBe("05:00");
    expect(formatClock(59_000)).toBe("00:59");
    expect(formatClock(0)).toBe("00:00");
    expect(formatClock(-5)).toBe("00:00");
  });
});

describe("isUrgent", () => {
  it("turns urgent at 05:00", () => {
    expect(isUrgent(300_000)).toBe(true);
    expect(isUrgent(300_001)).toBe(false);
  });
});
