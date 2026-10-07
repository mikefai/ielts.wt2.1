import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useAutosave } from "@/hooks/use-autosave";

function Harness({ value, save }: { value: string; save: (v: string) => void }) {
  useAutosave(value, save);
  return null;
}

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe("useAutosave", () => {
  it("saves the latest value every 20 seconds, not before", () => {
    const save = vi.fn();
    const { rerender } = render(<Harness value="a" save={save} />);
    act(() => vi.advanceTimersByTime(19_999));
    expect(save).not.toHaveBeenCalled();
    rerender(<Harness value="abc" save={save} />);
    act(() => vi.advanceTimersByTime(1));
    expect(save).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith("abc");
  });
  it("stops after unmount", () => {
    const save = vi.fn();
    const { unmount } = render(<Harness value="a" save={save} />);
    unmount();
    act(() => vi.advanceTimersByTime(60_000));
    expect(save).not.toHaveBeenCalled();
  });
});
