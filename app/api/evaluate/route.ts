import { evaluateEssay } from "@/lib/evaluate/mock-evaluator";

const MAX_ESSAY_CHARS = 20_000;
// 20k characters is at most ~80 KB of UTF-8; leave headroom for the JSON envelope.
const MAX_BODY_BYTES = 100_000;

// To use a real LLM, replace evaluateEssay with a call that sends
// EXAMINER_SYSTEM_PROMPT (lib/evaluate/prompt.ts) plus the essay to a model.
export async function POST(req: Request): Promise<Response> {
  const declared = Number(req.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return Response.json({ error: "Request too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { essay, promptId } = (body ?? {}) as { essay?: unknown; promptId?: unknown };
  if (typeof essay !== "string" || essay.trim() === "") {
    return Response.json({ error: "Essay must be a non-empty string" }, { status: 400 });
  }
  if (essay.length > MAX_ESSAY_CHARS) {
    return Response.json({ error: "Essay too long" }, { status: 413 });
  }

  return Response.json(
    evaluateEssay({ essay, promptId: typeof promptId === "string" ? promptId : undefined }),
  );
}
