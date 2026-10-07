import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExamTimer } from "@/components/mock-exam/exam-timer";

const NOW = new Date("2026-01-01T10:00:00Z").getTime();
beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
});
afterEach(() => vi.useRealTimers());

describe("ExamTimer", () => {
  it("starts at 40:00 and turns urgent at 05:00", () => {
    render(<ExamTimer startedAt={NOW} onExpire={() => {}} />);
    const t = screen.getByRole("timer");
    expect(t).toHaveTextContent("40:00");
    expect(t).toHaveAttribute("data-urgent", "false");
    act(() => vi.advanceTimersByTime(35 * 60 * 1000));
    expect(t).toHaveTextContent("05:00");
    expect(t).toHaveAttribute("data-urgent", "true");
  });
  it("calls onExpire exactly once at zero", () => {
    const onExpire = vi.fn();
    render(<ExamTimer startedAt={NOW} onExpire={onExpire} />);
    act(() => vi.advanceTimersByTime(40 * 60 * 1000));
    act(() => vi.advanceTimersByTime(10_000));
    expect(screen.getByRole("timer")).toHaveTextContent("00:00");
    expect(onExpire).toHaveBeenCalledTimes(1);
  });
  it("expires immediately when mounted after the deadline", () => {
    const onExpire = vi.fn();
    render(<ExamTimer startedAt={NOW - 50 * 60 * 1000} onExpire={onExpire} />);
    expect(screen.getByRole("timer")).toHaveTextContent("00:00");
    expect(onExpire).toHaveBeenCalledTimes(1);
  });
});
