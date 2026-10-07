// @vitest-environment node
import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/evaluate/route";
import { FULL } from "./fixtures/essays";

const call = (body: string) =>
  POST(new Request("http://localhost/api/evaluate", { method: "POST", body }));

describe("POST /api/evaluate", () => {
  it("evaluates a valid essay", async () => {
    const res = await call(JSON.stringify({ essay: FULL, promptId: "education" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("scores");
    expect(json).toHaveProperty("overall");
    expect(json).toHaveProperty("feedback");
  });
  it.each([
    ["invalid JSON", "not json"],
    ["missing essay", "{}"],
    ["non-string essay", JSON.stringify({ essay: 42 })],
    ["whitespace essay", JSON.stringify({ essay: "   \n" })],
    ["null body", "null"],
  ])("rejects %s with 400", async (_n, body) => {
    const res = await call(body);
    expect(res.status).toBe(400);
    expect(await res.json()).toHaveProperty("error");
  });
  it("rejects oversized essays with 413", async () => {
    const res = await call(JSON.stringify({ essay: "a".repeat(20_001) }));
    expect(res.status).toBe(413);
  });
});
