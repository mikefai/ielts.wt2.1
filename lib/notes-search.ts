import type { EssayType } from "@/lib/notes-data";

function haystack(t: EssayType): string {
  return [
    `Essay Type ${t.number}`,
    t.title,
    ...t.structure.flatMap((s) => [s.part, s.guidance ?? ""]),
    t.templatePhrase ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

export function filterEssayTypes(types: EssayType[], query: string): EssayType[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return types;
  return types.filter((t) => {
    const h = haystack(t);
    return terms.every((term) => h.includes(term));
  });
}
