import type { EssayType } from "@/lib/notes-data";
import type { TopicModule } from "@/lib/topic-modules-data";

/** Optional extra text to search per item (e.g. its Turkish translation). */
type ExtraText<T> = (item: T) => string;

function matches(haystack: string, query: string): boolean {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const h = haystack.toLowerCase();
  return terms.every((term) => h.includes(term));
}

const isBlank = (query: string) => query.trim() === "";

function essayHaystack(t: EssayType): string {
  return [
    `Essay Type ${t.number}`,
    t.title,
    ...t.structure.flatMap((s) => [s.part, s.guidance ?? ""]),
    t.templatePhrase ?? "",
  ].join(" ");
}

export function filterEssayTypes(types: EssayType[], query: string, extra?: ExtraText<EssayType>): EssayType[] {
  if (isBlank(query)) return types;
  return types.filter((t) => matches(`${essayHaystack(t)} ${extra?.(t) ?? ""}`, query));
}

function topicHaystack(m: TopicModule): string {
  return [m.topic, m.question, ...m.vocabulary.map((v) => v.word)].join(" ");
}

export function filterTopicModules(
  modules: TopicModule[],
  query: string,
  extra?: ExtraText<TopicModule>,
): TopicModule[] {
  if (isBlank(query)) return modules;
  return modules.filter((m) => matches(`${topicHaystack(m)} ${extra?.(m) ?? ""}`, query));
}
