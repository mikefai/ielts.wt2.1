import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { clearSession, loadSession, saveSession } from "@/lib/mock-exam/storage";

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe("session storage", () => {
  it("round-trips a session", () => {
    const s = { promptId: "education", startedAt: 123, essay: "hello" };
    saveSession(s);
    expect(loadSession("education")).toEqual(s);
  });
  it("returns null when missing, corrupt, or malformed", () => {
    expect(loadSession("education")).toBeNull();
    localStorage.setItem("ielts-w2:session:education", "{not json");
    expect(loadSession("education")).toBeNull();
    localStorage.setItem("ielts-w2:session:education", JSON.stringify({ promptId: "education", essay: "x" }));
    expect(loadSession("education")).toBeNull();
  });
  it("clears a session", () => {
    saveSession({ promptId: "environment", startedAt: 1, essay: "" });
    clearSession("environment");
    expect(loadSession("environment")).toBeNull();
  });
  it("never throws when storage is unavailable", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("denied");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("denied");
    });
    vi.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
      throw new Error("denied");
    });
    expect(loadSession("education")).toBeNull();
    expect(() => saveSession({ promptId: "education", startedAt: 1, essay: "" })).not.toThrow();
    expect(() => clearSession("education")).not.toThrow();
  });
});
