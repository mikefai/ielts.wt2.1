import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NotesBrowser } from "@/components/notes/notes-browser";

describe("NotesBrowser", () => {
  it("lists the five essay types", () => {
    render(<NotesBrowser />);
    expect(screen.getByText("Essay Type 1: Agree / Disagree (Opinion)")).toBeInTheDocument();
    expect(screen.getByText("Essay Type 5: Two-Part (Direct) Question")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /^Essay Type/ })).toHaveLength(5);
  });
  it("reveals the template phrase when opened", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: /Essay Type 1/ }));
    expect(
      await screen.findByText("While some argue that [X], I firmly believe that [Y] because..."),
    ).toBeVisible();
  });
  it("filters by search and shows an empty state", async () => {
    render(<NotesBrowser />);
    const box = screen.getByRole("searchbox", { name: "Search notes" });
    await userEvent.type(box, "refute");
    expect(screen.getAllByRole("button", { name: /^Essay Type/ })).toHaveLength(1);
    await userEvent.clear(box);
    await userEvent.type(box, "zzz");
    expect(screen.getByText('No notes match "zzz".')).toBeInTheDocument();
  });
});
