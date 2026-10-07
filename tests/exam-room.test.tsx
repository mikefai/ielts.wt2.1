import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExamRoom } from "@/components/mock-exam/exam-room";
import { EXAM_PROMPTS } from "@/lib/mock-exam/prompts";
import { loadSession, saveSession } from "@/lib/mock-exam/storage";

const NOW = new Date("2026-01-01T10:00:00Z").getTime();
const prompt = EXAM_PROMPTS[0];

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
});
afterEach(() => vi.useRealTimers());

describe("ExamRoom", () => {
  it("shows prompt and instructions on the left, the editor on the right", () => {
    render(<ExamRoom prompt={prompt} onSubmit={() => {}} />);
    const task = screen.getByRole("region", { name: "Task" });
    expect(within(task).getByText(prompt.text)).toBeInTheDocument();
    expect(within(task).getByText("Write at least 250 words.")).toBeInTheDocument();
    expect(within(task).getByText("You should spend about 40 minutes on this task.")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Your essay" })).toBeInTheDocument();
    expect(screen.getByRole("timer")).toHaveTextContent("40:00");
  });
  it("counts words live and persists the start time", () => {
    render(<ExamRoom prompt={prompt} onSubmit={() => {}} />);
    expect(screen.getByText("Words: 0")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox", { name: "Your essay" }), {
      target: { value: "one two  three\nfour" },
    });
    expect(screen.getByText("Words: 4")).toBeInTheDocument();
    expect(loadSession(prompt.id)?.startedAt).toBe(NOW);
  });
  it("autosaves the essay after 20 seconds", () => {
    render(<ExamRoom prompt={prompt} onSubmit={() => {}} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Your essay" }), { target: { value: "draft text" } });
    expect(loadSession(prompt.id)?.essay).toBe("");
    act(() => vi.advanceTimersByTime(20_000));
    expect(loadSession(prompt.id)?.essay).toBe("draft text");
  });
  it("resumes the essay and clock after a reload", () => {
    saveSession({ promptId: prompt.id, startedAt: NOW - 600_000, essay: "saved draft" });
    render(<ExamRoom prompt={prompt} onSubmit={() => {}} />);
    expect(screen.getByRole("textbox", { name: "Your essay" })).toHaveValue("saved draft");
    expect(screen.getByRole("timer")).toHaveTextContent("30:00");
  });
  it("locks the editor when time is up but still allows submitting", () => {
    const onSubmit = vi.fn();
    render(<ExamRoom prompt={prompt} onSubmit={onSubmit} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Your essay" }), { target: { value: "my essay" } });
    act(() => vi.advanceTimersByTime(40 * 60 * 1000));
    expect(screen.getByRole("textbox", { name: "Your essay" })).toHaveAttribute("readonly");
    expect(screen.getByText("Time is up — submit your essay.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Submit essay" }));
    expect(onSubmit).toHaveBeenCalledWith("my essay");
  });
  it("disables submit while submitting", () => {
    render(<ExamRoom prompt={prompt} onSubmit={() => {}} submitting />);
    expect(screen.getByRole("button", { name: /Submit essay|Submitting/ })).toBeDisabled();
  });
});
