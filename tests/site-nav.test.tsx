import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteNav } from "@/components/site-nav";

vi.mock("next/navigation", () => ({ usePathname: () => "/notes" }));

describe("SiteNav", () => {
  it("links to the three sections and marks the current one", () => {
    render(<SiteNav />);
    expect(screen.getByRole("link", { name: "Notes" })).toHaveAttribute("href", "/notes");
    expect(screen.getByRole("link", { name: "Exercises" })).toHaveAttribute("href", "/exercises");
    expect(screen.getByRole("link", { name: "Mock Exam" })).toHaveAttribute("href", "/mock-exam");
    expect(screen.getByRole("link", { name: "Notes" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Exercises" })).not.toHaveAttribute("aria-current");
  });
});
