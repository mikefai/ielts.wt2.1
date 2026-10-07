import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DrillA } from "@/components/exercises/drill-a";
import { DrillB } from "@/components/exercises/drill-b";
import { DrillC } from "@/components/exercises/drill-c";

const fourteen = "I completely agree because free education helps every student reach their full potential today";

describe("DrillA", () => {
  it("shows the prompt and a live word count", async () => {
    render(<DrillA />);
    expect(
      screen.getByText("Some people believe that university education should be free for everyone. To what extent do you agree?"),
    ).toBeInTheDocument();
    await userEvent.type(screen.getByLabelText("Your thesis statement"), fourteen);
    expect(screen.getByText("Words: 14/15")).toBeInTheDocument();
    expect(screen.queryByText("Thesis looks strong")).not.toBeInTheDocument();
  });
  it("succeeds at 15 words with a phrase", async () => {
    render(<DrillA />);
    await userEvent.type(screen.getByLabelText("Your thesis statement"), fourteen + " too");
    expect(screen.getByText("Thesis looks strong")).toBeInTheDocument();
  });
  it("hints at the phrase when long enough without it", async () => {
    render(<DrillA />);
    await userEvent.type(
      screen.getByLabelText("Your thesis statement"),
      "Free education removes barriers and gives every talented student an equal chance to succeed in life",
    );
    expect(
      screen.getByText('Include "I completely agree because" or "This essay argues that"'),
    ).toBeInTheDocument();
    expect(screen.queryByText("Thesis looks strong")).not.toBeInTheDocument();
  });
});

describe("DrillB", () => {
  it("succeeds with the correct pair", async () => {
    render(<DrillB />);
    await userEvent.selectOptions(screen.getByLabelText("Blank 1"), "On the one hand,");
    await userEvent.selectOptions(screen.getByLabelText("Blank 2"), "Conversely,");
    expect(screen.getByText("Both blanks correct")).toBeInTheDocument();
  });
  it("flags a swapped pair", async () => {
    render(<DrillB />);
    await userEvent.selectOptions(screen.getByLabelText("Blank 1"), "Conversely,");
    await userEvent.selectOptions(screen.getByLabelText("Blank 2"), "On the one hand,");
    expect(screen.getAllByText("Try again")).toHaveLength(2);
    expect(screen.queryByText("Both blanks correct")).not.toBeInTheDocument();
  });
  it("gives per-slot feedback only once chosen", async () => {
    render(<DrillB />);
    await userEvent.selectOptions(screen.getByLabelText("Blank 1"), "On the one hand,");
    expect(screen.getAllByText("Correct")).toHaveLength(1);
    expect(screen.queryByText("Try again")).not.toBeInTheDocument();
  });
});

describe("DrillC", () => {
  it("starts with both errors unresolved", () => {
    render(<DrillC />);
    expect(screen.getByLabelText("Rewrite the sentence")).toHaveValue(
      "The government should spending more money on public transportations.",
    );
    expect(screen.getByText('✗ Modal verb: "should" + base verb')).toBeInTheDocument();
    expect(screen.getByText('✗ Uncountable noun: "public transportation"')).toBeInTheDocument();
  });
  it("succeeds when both are fixed", async () => {
    render(<DrillC />);
    const input = screen.getByLabelText("Rewrite the sentence");
    await userEvent.clear(input);
    await userEvent.type(input, "The government should spend more money on public transportation.");
    expect(screen.getByText("All errors corrected")).toBeInTheDocument();
  });
  it("marks only the noun wrong for 'transportations'", async () => {
    render(<DrillC />);
    const input = screen.getByLabelText("Rewrite the sentence");
    await userEvent.clear(input);
    await userEvent.type(input, "The government should spend more money on public transportations.");
    expect(screen.getByText('✓ Modal verb: "should" + base verb')).toBeInTheDocument();
    expect(screen.getByText('✗ Uncountable noun: "public transportation"')).toBeInTheDocument();
  });
});
