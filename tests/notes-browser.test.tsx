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

describe("NotesBrowser writing guides", () => {
  it("teaches paragraph and sentence roles inside an opened essay type", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: /Essay Type 1/ }));
    expect(await screen.findByRole("heading", { name: "How to write each paragraph" })).toBeVisible();
    expect(screen.getAllByRole("region", { name: /guide$/ })).toHaveLength(4);
    expect(screen.getByText("Thesis (clear position)")).toBeVisible();
    expect(screen.getByText(/I firmly agree with this view/)).toBeVisible();
  });
  it("shows a guide for the other essay types too", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: /Essay Type 5/ }));
    expect(await screen.findByRole("heading", { name: "How to write each paragraph" })).toBeVisible();
    expect(screen.getAllByRole("region", { name: /guide$/ })).toHaveLength(4);
  });
});

describe("NotesBrowser language switch", () => {
  it("defaults to English and offers English / Türkçe / EN + TR", () => {
    render(<NotesBrowser />);
    expect(screen.getByRole("button", { name: "English" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Türkçe" })).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("button", { name: "EN + TR" })).toBeInTheDocument();
  });

  it("shows Turkish notes (explanations translated, English model sentences kept) and remembers the choice", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: "Türkçe" }));
    expect(localStorage.getItem("ielts-w2:notes-lang")).toBe("tr");
    expect(screen.getByText("Kompozisyon Türü 1: Katılıyor / Katılmıyor (Görüş)")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /Kompozisyon Türü 1/ }));
    expect(await screen.findByRole("heading", { name: "Her paragraf nasıl yazılır" })).toBeVisible();
    expect(screen.getByText("Ana tez (net tutum)")).toBeVisible();
    // English example sentences stay English: that is what students write in the exam
    expect(screen.getByText(/I firmly agree with this view/)).toBeVisible();
  });

  it("restores a saved Turkish preference on load", async () => {
    localStorage.setItem("ielts-w2:notes-lang", "tr");
    render(<NotesBrowser />);
    expect(await screen.findByText("Kompozisyon Türü 2: Tartışma (Her İki Görüşü Tartış)")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Türkçe" })).toHaveAttribute("aria-pressed", "true");
  });

  it("shows English and Turkish together in EN + TR mode", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: "EN + TR" }));
    expect(screen.getByText("Essay Type 1: Agree / Disagree (Opinion)")).toBeInTheDocument();
    expect(screen.getByText("Kompozisyon Türü 1: Katılıyor / Katılmıyor (Görüş)")).toBeInTheDocument();
  });

  it("searches Turkish text when Turkish is visible", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: "Türkçe" }));
    await userEvent.type(screen.getByRole("searchbox", { name: "Notlarda ara" }), "dezavantajlar");
    expect(screen.getAllByRole("button", { name: /^Kompozisyon Türü/ })).toHaveLength(1);
  });

  it("translates topic modules: definitions in Turkish, vocabulary words in English", async () => {
    render(<NotesBrowser />);
    await userEvent.click(screen.getByRole("button", { name: "Türkçe" }));
    await userEvent.click(screen.getByRole("button", { name: /Konu 1: Suç/ }));
    expect(await screen.findByText("recidivism")).toBeVisible();
    expect(screen.getByText(/Hüküm giymiş bir suçlunun serbest kaldıktan sonra yeniden suç işleme eğilimi/)).toBeVisible();
  });
});
