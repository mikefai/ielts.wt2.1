import type { CriterionScores } from "@/lib/evaluate/types";

/** Average of the four criteria, rounded to the nearest 0.5 (.25 -> .5, .75 -> next whole). */
export function overallBand(scores: CriterionScores): number {
  const values = [scores.TR, scores.CC, scores.LR, scores.GRA];
  for (const v of values) {
    if (!Number.isFinite(v) || v < 0 || v > 9) {
      throw new RangeError(`Criterion score out of range 0-9: ${v}`);
    }
  }
  const avg = values.reduce((a, b) => a + b, 0) / 4;
  return Math.round(avg * 2) / 2;
}
