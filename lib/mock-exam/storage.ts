export type ExamSession = { promptId: string; startedAt: number; essay: string };

const key = (promptId: string) => `ielts-w2:session:${promptId}`;

export function loadSession(promptId: string): ExamSession | null {
  try {
    const raw = localStorage.getItem(key(promptId));
    if (!raw) return null;
    const v = JSON.parse(raw);
    if (
      v &&
      typeof v.promptId === "string" &&
      typeof v.startedAt === "number" &&
      Number.isFinite(v.startedAt) &&
      typeof v.essay === "string"
    ) {
      return { promptId: v.promptId, startedAt: v.startedAt, essay: v.essay };
    }
    return null;
  } catch {
    return null;
  }
}

export function saveSession(session: ExamSession): void {
  try {
    localStorage.setItem(key(session.promptId), JSON.stringify(session));
  } catch {
    /* storage unavailable: autosave is best-effort */
  }
}

export function clearSession(promptId: string): void {
  try {
    localStorage.removeItem(key(promptId));
  } catch {
    /* ignore */
  }
}
