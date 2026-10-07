export const EXAM_DURATION_MS = 40 * 60 * 1000;
export const URGENT_THRESHOLD_MS = 5 * 60 * 1000;
export const AUTOSAVE_INTERVAL_MS = 20_000;

export function remainingMs(startedAt: number, now: number): number {
  return Math.min(EXAM_DURATION_MS, Math.max(0, EXAM_DURATION_MS - (now - startedAt)));
}

export function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const mm = String(Math.floor(total / 60)).padStart(2, "0");
  const ss = String(total % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export function isUrgent(ms: number): boolean {
  return ms <= URGENT_THRESHOLD_MS;
}
