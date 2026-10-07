import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { GuardedTextarea } from "@/components/mock-exam/guarded-textarea";

describe("GuardedTextarea", () => {
  it.each(["paste", "copy", "cut", "contextMenu", "drop"] as const)("blocks %s", (name) => {
    render(<GuardedTextarea aria-label="essay" />);
    // fireEvent returns false when the default action was prevented.
    expect(fireEvent[name](screen.getByLabelText("essay"))).toBe(false);
  });
  it("still accepts typing and is resizable without spellcheck", async () => {
    render(<GuardedTextarea aria-label="essay" />);
    const el = screen.getByLabelText("essay");
    await userEvent.type(el, "hello");
    expect(el).toHaveValue("hello");
    expect(el).toHaveAttribute("spellcheck", "false");
    expect(el.className).toContain("resize-y");
  });
});
