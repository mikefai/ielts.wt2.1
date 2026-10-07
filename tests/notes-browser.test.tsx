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

describe("NotesBrowser topic modules", () => {
  it("lists the five topic modules and reveals vocabulary and the sample paragraph", async () => {
    render(<NotesBrowser />);
    const triggers = screen.getAllByRole("button", { name: /^Topic \d:/ });
    expect(triggers).toHaveLength(5);
    await userEvent.click(screen.getByRole("button", { name: /Topic 1: Crime/ }));
    expect(await screen.findByText("recidivism")).toBeVisible();
    expect(screen.getByText(/Admittedly, severe sentences can act as a powerful deterrent/)).toBeVisible();
  });
  it("searches vocabulary words across modules", async () => {
    render(<NotesBrowser />);
    await userEvent.type(screen.getByRole("searchbox", { name: "Search notes" }), "austerity");
    expect(screen.getAllByRole("button", { name: /^Topic \d:/ })).toHaveLength(1);
    expect(screen.queryAllByRole("button", { name: /^Essay Type/ })).toHaveLength(0);
  });
});
