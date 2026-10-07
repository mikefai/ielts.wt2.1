import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PracticeBank } from "@/components/exercises/practice-bank";
import { AGREEMENT_DRILLS, PARAPHRASE_DRILLS } from "@/lib/exercises/exercise-bank";

describe("PracticeBank", () => {
  it("shows three category tabs and five paraphrasing drills by default", () => {
    render(<PracticeBank />);
    expect(screen.getByRole("tab", { name: "Paraphrasing Drills" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "Subordinating Conjunctions Drills" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Subject-Verb Agreement" })).toBeInTheDocument();
    expect(screen.getAllByRole("textbox", { name: /^Paraphrase \d answer$/ })).toHaveLength(5);
  });

  it("gives live paraphrase feedback", async () => {
    render(<PracticeBank />);
    const box = screen.getByRole("textbox", { name: "Paraphrase 1 answer" });
    await userEvent.type(box, PARAPHRASE_DRILLS[0].prompt);
    expect(screen.queryByText("Great paraphrase")).not.toBeInTheDocument();
    expect(screen.getByText(/Change these words: believe, everyone/)).toBeInTheDocument();
    await userEvent.clear(box);
    await userEvent.type(box, PARAPHRASE_DRILLS[0].sampleAnswer);
    expect(screen.getByText("Great paraphrase")).toBeInTheDocument();
  });

  it("validates conjunction choices", async () => {
    render(<PracticeBank />);
    await userEvent.click(screen.getByRole("tab", { name: "Subordinating Conjunctions Drills" }));
    expect(screen.getAllByRole("combobox")).toHaveLength(5);
    await userEvent.selectOptions(screen.getByLabelText("Conjunction 1 blank"), "Because");
    expect(screen.getByText("Try again")).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText("Conjunction 1 blank"), "Although");
    expect(screen.getByText("Correct")).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText("Conjunction 4 blank"), "While");
    expect(screen.getAllByText("Correct")).toHaveLength(2);
  });

  it("validates agreement corrections", async () => {
    render(<PracticeBank />);
    await userEvent.click(screen.getByRole("tab", { name: "Subject-Verb Agreement" }));
    const box = screen.getByRole("textbox", { name: "Agreement 3 sentence" });
    expect(box).toHaveValue(AGREEMENT_DRILLS[2].incorrect);
    expect(screen.getAllByText(/^✗ "Everyone" is singular$/)).toHaveLength(1);
    await userEvent.clear(box);
    await userEvent.type(box, AGREEMENT_DRILLS[2].sampleAnswer);
    expect(screen.getByText('✓ "Everyone" is singular')).toBeInTheDocument();
    expect(screen.getAllByText("All errors corrected")).toHaveLength(1);
  });

  it("warns when a correction drops the rest of the sentence", async () => {
    render(<PracticeBank />);
    await userEvent.click(screen.getByRole("tab", { name: "Subject-Verb Agreement" }));
    const box = screen.getByRole("textbox", { name: "Agreement 3 sentence" });
    await userEvent.clear(box);
    await userEvent.type(box, "Everyone has completed.");
    expect(screen.getByText("Keep the rest of the sentence: only fix the verb.")).toBeInTheDocument();
    expect(screen.queryByText("All errors corrected")).not.toBeInTheDocument();
  });
});
