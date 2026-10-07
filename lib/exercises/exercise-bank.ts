export type ExerciseCategory = "paraphrase" | "conjunction" | "agreement";

/** A paraphrase passes when it is long enough, keeps every concept, changes every listed word and copies no 5-word run. */
export type ParaphraseExercise = {
  kind: "paraphrase";
  id: string;
  prompt: string;
  /** Ideas that must survive. `accepted` terms match from the start of a word (so "curb" accepts "curbing"). */
  concepts: { label: string; accepted: string[] }[];
  /** Words from the prompt that must NOT appear in the rewrite (forces real substitution). */
  mustChange: string[];
  minWords: number;
  sampleAnswer: string;
};

/** Pick the right subordinating conjunction for the single `___` gap. */
export type ConjunctionExercise = {
  kind: "conjunction";
  id: string;
  sentence: string;
  options: string[];
  /** Every option that is grammatically and logically acceptable. */
  answers: string[];
  explanation: string;
};

/** Fix the subject-verb agreement error(s) in `incorrect`. */
export type AgreementExercise = {
  kind: "agreement";
  id: string;
  incorrect: string;
  targets: {
    label: string;
    /** At least one of these phrases must appear (whole words, case-insensitive). */
    mustContain: string[];
    /** None of these phrases may appear. */
    mustNotContain: string[];
  }[];
  /** Words/phrases from the original that must be kept, so the sentence is corrected rather than rewritten away. */
  anchors: string[];
  sampleAnswer: string;
  explanation: string;
};

export type Exercise = ParaphraseExercise | ConjunctionExercise | AgreementExercise;

const OPINION = [
  "some people", "some individuals", "some argue", "some claim", "some believe", "some hold", "some contend",
  "many people", "many claim", "many argue", "many believe", "it is argued", "it is claimed", "it is believed",
  "it is thought", "it is said", "it is widely", "it is often", "a number of", "others", "several", "critics",
  "opinion", "view", "claim", "contend", "maintain",
];

export const PARAPHRASE_DRILLS: ParaphraseExercise[] = [
  {
    kind: "paraphrase",
    id: "para-1",
    prompt: "Some people believe that university education should be free for everyone.",
    concepts: [
      { label: "Whose view it is (some people)", accepted: OPINION },
      { label: "University / higher education", accepted: ["university", "universities", "higher education", "tertiary", "college"] },
      { label: "Free of charge", accepted: ["free", "without charge", "at no cost", "no tuition", "state-funded", "publicly funded", "government-funded", "funded by the"] },
      { label: "For all people", accepted: ["everybody", "all citizens", "all students", "all people", "every citizen", "anyone", "all members", "regardless of"] },
    ],
    mustChange: ["believe", "everyone"],
    minWords: 10,
    sampleAnswer: "It is argued by some that higher education ought to be provided without charge to all citizens.",
  },
  {
    kind: "paraphrase",
    id: "para-2",
    prompt: "Nowadays, more and more people are choosing to live in cities rather than in the countryside.",
    concepts: [
      { label: "The time frame (now / recently)", accepted: ["nowadays", "today", "currently", "these days", "in recent years", "in modern times", "at present", "present-day", "in the modern world", "over the past"] },
      { label: "A growing number", accepted: ["more and more", "increasing number", "growing number", "rising number", "an increasing", "a growing", "a rising", "increasingly", "growing proportion", "greater number", "larger number"] },
      { label: "Urban life", accepted: ["cities", "city", "urban", "metropolitan"] },
      { label: "Rural life", accepted: ["countryside", "rural", "villages", "country areas"] },
    ],
    mustChange: ["nowadays", "choosing"],
    minWords: 10,
    sampleAnswer: "In recent years, an increasing number of individuals have preferred urban life to rural areas.",
  },
  {
    kind: "paraphrase",
    id: "para-3",
    prompt: "Some people think that the government should spend more money on public transport than on roads.",
    concepts: [
      { label: "Whose view it is (some people)", accepted: OPINION },
      { label: "The government / authorities", accepted: ["government", "authorities", "state", "ministers", "policymakers", "public funds", "officials"] },
      { label: "Public transport", accepted: ["public transport", "public transit", "public transportation", "mass transit", "buses and trains", "trains and buses", "railways", "rail"] },
      { label: "Roads", accepted: ["roads", "road", "highways", "motorways"] },
      { label: "Greater priority / funding", accepted: ["more", "greater", "higher", "larger", "priority", "prioritize", "prioritise", "rather than", "instead of", "favor", "favour", "ahead of", "increased", "bigger"] },
    ],
    mustChange: ["think", "spend"],
    minWords: 10,
    sampleAnswer: "A number of individuals feel that authorities ought to allocate greater funding to public transit than to road construction.",
  },
  {
    kind: "paraphrase",
    id: "para-4",
    prompt: "Many people argue that children spend too much time using electronic devices.",
    concepts: [
      { label: "Whose view it is (many people)", accepted: OPINION },
      { label: "Children", accepted: ["children", "kids", "young people", "youngsters", "juveniles", "minors", "adolescents", "the young", "teenagers"] },
      { label: "Too much time", accepted: ["too much", "excessive", "overuse", "too many", "disproportionate", "extensive", "inordinate", "overly", "more than"] },
      { label: "Electronic devices", accepted: ["electronic devices", "devices", "screens", "gadgets", "technology", "smartphones", "tablets", "digital", "electronic"] },
    ],
    mustChange: ["argue", "spend"],
    minWords: 10,
    sampleAnswer: "It is often claimed that youngsters devote an excessive amount of time to digital gadgets.",
  },
  {
    kind: "paraphrase",
    id: "para-5",
    prompt: "It is often said that the best way to reduce crime is to impose longer prison sentences.",
    concepts: [
      { label: "Whose view it is (it is said)", accepted: OPINION },
      { label: "Reducing something", accepted: ["curb", "lower", "decrease", "combat", "tackle", "cut", "diminish", "prevent", "lessen", "deter", "reduction", "minimize", "minimise", "fight", "control", "limit"] },
      { label: "Crime", accepted: ["crime", "criminal", "offending", "lawbreaking", "offences", "offenses", "delinquency"] },
      { label: "Prison / punishment", accepted: ["prison", "imprisonment", "jail", "custodial", "incarceration", "sentence", "punishment", "penalt"] },
      { label: "Longer / harsher", accepted: ["lengthier", "harsher", "tougher", "stricter", "severe", "extended", "increased", "heavier", "stiffer", "lengthy", "extend"] },
    ],
    mustChange: ["reduce", "impose", "longer"],
    minWords: 10,
    sampleAnswer: "Many claim that the most effective means of curbing crime is to introduce lengthier custodial penalties.",
  },
];

export const CONJUNCTION_DRILLS: ConjunctionExercise[] = [
  {
    kind: "conjunction",
    id: "conj-1",
    sentence: "___ renewable energy is expensive to install, it saves money in the long run.",
    options: ["Although", "Because", "Unless", "Until"],
    answers: ["Although"],
    explanation: "The two clauses contrast (expensive vs. saves money), so a concession conjunction (although) is needed.",
  },
  {
    kind: "conjunction",
    id: "conj-2",
    sentence: "Cities have become more crowded ___ rural populations have moved to find work.",
    options: ["because", "although", "unless", "whereas"],
    answers: ["because"],
    explanation: "Rural migration is the reason for crowding, so a cause conjunction (because) fits.",
  },
  {
    kind: "conjunction",
    id: "conj-3",
    sentence: "Students should not use mobile phones in class ___ the teacher gives permission.",
    options: ["unless", "because", "while", "although"],
    answers: ["unless"],
    explanation: "'Unless' means 'except if': phones are banned except if the teacher allows them.",
  },
  {
    kind: "conjunction",
    id: "conj-4",
    sentence: "___ some people prefer working from home, others find the office more productive.",
    options: ["Whereas", "While", "Because", "Unless"],
    answers: ["Whereas", "While"],
    explanation: "Both 'whereas' and 'while' introduce a direct contrast between two groups of people.",
  },
  {
    kind: "conjunction",
    id: "conj-5",
    sentence: "Governments should invest in training ___ citizens can find stable employment.",
    options: ["so that", "although", "unless", "whereas"],
    answers: ["so that"],
    explanation: "'So that' expresses purpose: the investment is made in order for citizens to find work.",
  },
];

export const AGREEMENT_DRILLS: AgreementExercise[] = [
  {
    kind: "agreement",
    id: "sva-1",
    incorrect: "The number of students who study abroad are increasing every year.",
    targets: [
      {
        label: '"The number of …" takes a singular verb',
        mustContain: ["abroad is increasing", "abroad has been increasing", "abroad has increased", "abroad continues to increase"],
        mustNotContain: ["abroad are increasing"],
      },
    ],
    anchors: ["students", "abroad", "every year"],
    sampleAnswer: "The number of students who study abroad is increasing every year.",
    explanation: '"The number of" is singular (a number), whereas "a number of" is plural. The verb agrees with "number".',
  },
  {
    kind: "agreement",
    id: "sva-2",
    incorrect: "Neither the teacher nor the students was happy with the exam results.",
    targets: [
      {
        label: "Neither … nor: the verb agrees with the nearer subject (students)",
        mustContain: ["students were"],
        mustNotContain: ["students was"],
      },
    ],
    anchors: ["teacher", "students", "exam results"],
    sampleAnswer: "Neither the teacher nor the students were happy with the exam results.",
    explanation: 'With "neither … nor", the verb agrees with the subject closest to it. "Students" is plural, so use "were".',
  },
  {
    kind: "agreement",
    id: "sva-3",
    incorrect: "Everyone in the class have completed the assignment.",
    targets: [
      {
        label: '"Everyone" is singular',
        mustContain: ["has completed", "has finished", "has done", "has submitted"],
        mustNotContain: ["have completed", "have finished", "have done", "have submitted"],
      },
    ],
    anchors: ["class", "assignment"],
    sampleAnswer: "Everyone in the class has completed the assignment.",
    explanation: '"Everyone" is always singular, even though it refers to many people, so it takes "has".',
  },
  {
    kind: "agreement",
    id: "sva-4",
    incorrect: "The results of the survey shows that most people support recycling.",
    targets: [
      {
        label: '"The results" is plural',
        mustContain: ["survey show", "results show"],
        mustNotContain: ["survey shows", "results shows"],
      },
    ],
    anchors: ["results", "recycling"],
    sampleAnswer: "The results of the survey show that most people support recycling.",
    explanation: 'The subject is "results" (plural), not "survey". The phrase "of the survey" does not change the verb.',
  },
  {
    kind: "agreement",
    id: "sva-5",
    incorrect: "Every one of the new policies are aimed at reducing pollution, and the advice from experts were ignored.",
    targets: [
      {
        label: '"Every one of …" is singular',
        mustContain: ["policies is aimed", "policies is designed", "policies is intended"],
        mustNotContain: ["policies are aimed", "policies are designed", "policies are intended"],
      },
      {
        label: '"Advice" is uncountable and singular',
        mustContain: ["experts was", "advice was"],
        mustNotContain: ["experts were", "advice were"],
      },
    ],
    anchors: ["new policies", "pollution", "advice", "ignored"],
    sampleAnswer: "Every one of the new policies is aimed at reducing pollution, and the advice from experts was ignored.",
    explanation: '"Every one" is singular, and "advice" is an uncountable noun, so both verbs must be singular (is, was).',
  },
];
