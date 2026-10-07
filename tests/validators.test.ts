import { describe, expect, it } from "vitest";
import {
  CORRECTION_SENTENCE,
  validateConnectors,
  validateCorrection,
  validateThesis,
} from "@/lib/exercises/validators";

const fifteen =
  "I completely agree because free university education removes barriers and gives every talented student an equal chance";

describe("validateThesis", () => {
  it("accepts 15+ words with a required phrase", () => {
    expect(validateThesis(fifteen).ok).toBe(true);
    expect(validateThesis("This   essay  argues that " + "word ".repeat(12)).ok).toBe(true);
  });
  it("rejects short or phrase-less input", () => {
    expect(validateThesis("I completely agree because it is fair").ok).toBe(false);
    expect(
      validateThesis(
        "Free education removes barriers and gives every talented student an equal chance to succeed in life",
      ).ok,
    ).toBe(false);
  });
  it("is case-insensitive", () => {
    expect(validateThesis(fifteen.toUpperCase()).hasPhrase).toBe(true);
  });
});

describe("validateConnectors", () => {
  it("accepts the correct pair", () => {
    expect(validateConnectors({ slot1: "On the one hand,", slot2: "Conversely," }).ok).toBe(true);
  });
  it("rejects swapped and empty slots", () => {
    expect(validateConnectors({ slot1: "Conversely,", slot2: "On the one hand," })).toMatchObject({
      slot1: false,
      slot2: false,
      ok: false,
    });
    expect(validateConnectors({ slot1: null, slot2: "Conversely," })).toMatchObject({
      slot1: false,
      slot2: true,
      ok: false,
    });
  });
});

describe("validateCorrection", () => {
  it("accepts both fixes, case-insensitively", () => {
    expect(validateCorrection("The government should spend more money on public transportation.").ok).toBe(true);
    expect(validateCorrection("the government SHOULD SPEND more money on Public Transportation").ok).toBe(true);
  });
  it("fails the original sentence", () => {
    expect(validateCorrection(CORRECTION_SENTENCE)).toMatchObject({ modal: false, noun: false });
  });
  it("does not accept 'transportations' as 'transportation'", () => {
    expect(validateCorrection("The government should spend more money on public transportations.")).toMatchObject({
      modal: true,
      noun: false,
    });
  });
  it("does not accept 'should spending'", () => {
    expect(validateCorrection("The government should spending more money on public transportation.")).toMatchObject({
      modal: false,
      noun: true,
    });
  });
});
