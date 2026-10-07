import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MockExamFlow } from "@/components/mock-exam/mock-exam-flow";
import { EXAM_PROMPTS } from "@/lib/mock-exam/prompts";
import { loadSession } from "@/lib/mock-exam/storage";

const evaluation = {
  scores: { TR: 7, CC: 6, LR: 6, GRA: 7 },
  overall: 6.5,
  feedback: {
    grammar: ['"peoples" → "people": "people" is already plural.'],
    vocabulary: ['Consider replacing "good" with "beneficial" or "advantageous".'],
    modelParagraph: "A model paragraph about the topic.",
  },
};

async function startEnvironmentExam() {
  render(<MockExamFlow />);
  await userEvent.click(screen.getByRole("radio", { name: /Environment/ }));
  await userEvent.click(screen.getByRole("button", { name: "Start exam" }));
  return screen.getByRole("textbox", { name: "Your essay" });
}

beforeEach(() => localStorage.clear());
afterEach(() => vi.unstubAllGlobals());

describe("MockExamFlow", () => {
  it("offers three prompts and gates the start button", async () => {
    render(<MockExamFlow />);
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.getByRole("button", { name: "Start exam" })).toBeDisabled();
    await userEvent.click(screen.getByRole("radio", { name: /Environment/ }));
    expect(screen.getByRole("button", { name: "Start exam" })).toBeEnabled();
  });

  it("runs the exam for the chosen prompt", async () => {
    await startEnvironmentExam();
    expect(screen.getByText(EXAM_PROMPTS[1].text)).toBeInTheDocument();
    expect(screen.getByRole("timer")).toHaveTextContent("40:00");
  });

  it("submits, shows the evaluation and clears the saved session", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => evaluation });
    vi.stubGlobal("fetch", fetchMock);
    const box = await startEnvironmentExam();
    fireEvent.change(box, { target: { value: "My essay text" } });
    await userEvent.click(screen.getByRole("button", { name: "Submit essay" }));

    expect(await screen.findByText("Overall band")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/evaluate");
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body)).toEqual({ essay: "My essay text", promptId: "environment" });

    expect(screen.getByText("6.5")).toBeInTheDocument();
    for (const label of ["Task Response", "Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy"]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
    expect(screen.getByText(evaluation.feedback.grammar[0])).toBeInTheDocument();
    expect(screen.getByText(evaluation.feedback.vocabulary[0])).toBeInTheDocument();
    expect(screen.getByText("A model paragraph about the topic.")).toBeInTheDocument();
    expect(loadSession("environment")).toBeNull();

    await userEvent.click(screen.getByRole("button", { name: "Try another prompt" }));
    expect(screen.getAllByRole("radio")).toHaveLength(3);
  });

  it("keeps the essay and session when evaluation fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500, json: async () => ({}) }));
    const box = await startEnvironmentExam();
    fireEvent.change(box, { target: { value: "Precious essay" } });
    await userEvent.click(screen.getByRole("button", { name: "Submit essay" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Could not evaluate your essay. Please try again.");
    expect(screen.getByRole("textbox", { name: "Your essay" })).toHaveValue("Precious essay");
    expect(loadSession("environment")).not.toBeNull();
    await waitFor(() => expect(screen.getByRole("button", { name: "Submit essay" })).toBeEnabled());
  });

  it("handles a network rejection the same way", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const box = await startEnvironmentExam();
    fireEvent.change(box, { target: { value: "Essay" } });
    await userEvent.click(screen.getByRole("button", { name: "Submit essay" }));
    expect(await screen.findByRole("alert")).toBeInTheDocument();
  });
});
