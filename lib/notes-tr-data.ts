/**
 * Turkish (Türkçe) counterparts for the /notes content. English model sentences, template phrases and
 * vocabulary words are intentionally NOT translated into the exam text: students must write them in
 * English. Turkish is provided as explanation (and as a gloss for the template phrase).
 */
export type EssayTypeTr = {
  title: string;
  /** Parallel to EssayType.structure; empty string where the English has no guidance. */
  structure: string[];
  /** Turkish gloss of the English template phrase (absent where the English has none). */
  templatePhrase?: string;
};

export const ESSAY_TYPES_TR: Record<string, EssayTypeTr> = {
  "agree-disagree": {
    title: "Katılıyor / Katılmıyor (Görüş)",
    structure: [
      "Dikkat çekici giriş + Soruyu yeniden ifade etme + Net tutum",
      "Görüşünü destekle",
      "Görüşünü destekle / Karşı görüşü çürüt",
      "Tutumunu yeniden belirt + Ana noktaları özetle",
    ],
    templatePhrase: "Bazıları [X] olduğunu savunsa da, ben [Y] olduğuna kesinlikle inanıyorum, çünkü...",
  },
  discussion: {
    title: "Tartışma (Her İki Görüşü Tartış)",
    structure: [
      "Her iki görüşü yeniden ifade et + Yazının planını belirt",
      "A görüşünü örneklerle tartış",
      "B görüşünü örneklerle tartış + Kendi görüşünü belirt",
      "Dengeli özet",
    ],
    templatePhrase:
      "Bu kompozisyon tartışmanın her iki tarafını da inceleyecek; ancak ben kişisel olarak şu görüşün yanındayım:...",
  },
  "advantages-disadvantages": {
    title: "Avantajlar ve Dezavantajlar",
    structure: ["", "Avantajlar", "Dezavantajlar", "Son değerlendirme / karar"],
  },
  "problem-solution": {
    title: "Problem ve Çözüm",
    structure: ["", "Nedenler / Sorunlar", "Çözümler", "Son uyarı / harekete geçirici çağrı"],
  },
  "two-part-question": {
    title: "İki Bölümlü (Doğrudan) Soru",
    structure: ["", "1. soruyu yanıtla", "2. soruyu yanıtla", "Her iki yanıtın doğrudan özeti"],
  },
};

const PART_TR: Record<string, string> = {
  Intro: "Giriş",
  "Body 1": "Gelişme 1",
  "Body 2": "Gelişme 2",
  Conclusion: "Sonuç",
};

export function partTr(part: string): string {
  return PART_TR[part] ?? part;
}

const POS_TR: Record<string, string> = {
  noun: "isim",
  adjective: "sıfat",
  verb: "fiil",
};

/** Translates a part-of-speech label such as "noun / adjective"; unknown labels are returned unchanged. */
export function posTr(pos: string): string {
  return pos
    .split(" / ")
    .map((p) => POS_TR[p] ?? p)
    .join(" / ");
}

/** Interface strings shown on /notes, in both languages. */
export const UI = {
  language: { en: "Language", tr: "Dil" },
  searchLabel: { en: "Search notes", tr: "Notlarda ara" },
  searchPlaceholder: {
    en: "Search notes (e.g. refute, causes, recidivism, austerity)",
    tr: "Notlarda ara (örn. refute, causes, recidivism, austerity)",
  },
  essayTypes: { en: "Essay types", tr: "Kompozisyon türleri" },
  essayTypesHint: {
    en: "The five Task 2 question types and how to structure each one.",
    tr: "Task 2'nin beş soru türü ve her birinin nasıl yapılandırılacağı.",
  },
  topicModules: { en: "Topic vocabulary modules", tr: "Konu kelime modülleri" },
  topicModulesHint: {
    en: "Ten precise words, a model body paragraph and a typical question for five common topics.",
    tr: "Beş yaygın konu için on seçkin kelime, örnek bir gelişme paragrafı ve tipik bir soru.",
  },
  essayTypeLabel: { en: "Essay Type", tr: "Kompozisyon Türü" },
  topicLabel: { en: "Topic", tr: "Konu" },
  structure: { en: "Essay structure", tr: "Kompozisyon yapısı" },
  templatePhrase: { en: "Template phrase", tr: "Kalıp cümle" },
  howToWrite: { en: "How to write each paragraph", tr: "Her paragraf nasıl yazılır" },
  workedExample: { en: "Worked example. Sample question:", tr: "Çözümlü örnek. Örnek soru:" },
  roleOfParagraph: { en: "Role of this paragraph:", tr: "Bu paragrafın rolü:" },
  modelSentence: { en: "Model sentence", tr: "Örnek cümle" },
  keyTips: { en: "Key tips", tr: "Önemli ipuçları" },
  sampleBody: { en: "Sample body paragraph", tr: "Örnek gelişme paragrafı" },
  typicalQuestion: { en: "Typical question", tr: "Tipik soru" },
  englishOnlyNote: {
    en: "Model sentences stay in English because that is the language you write in the exam.",
    tr: "Örnek cümleler İngilizce kalır; çünkü sınavda yazacağın dil İngilizcedir.",
  },
} as const;

export function noMatchText(query: string, mode: "en" | "tr" | "both"): string {
  const en = `No notes match "${query}".`;
  const tr = `"${query}" ile eşleşen not bulunamadı.`;
  return mode === "tr" ? tr : mode === "both" ? `${en} / ${tr}` : en;
}
