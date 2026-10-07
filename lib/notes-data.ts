export type EssayType = {
  id: string;
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  structure: { part: string; guidance?: string }[];
  templatePhrase?: string;
};

export const ESSAY_TYPES: EssayType[] = [
  {
    id: "agree-disagree",
    number: 1,
    title: "Agree / Disagree (Opinion)",
    structure: [
      { part: "Intro", guidance: "Hook + Paraphrase + Clear Position" },
      { part: "Body 1", guidance: "Support your view" },
      { part: "Body 2", guidance: "Support your view / Refute counter" },
      { part: "Conclusion", guidance: "Restate position + Summarize main points" },
    ],
    templatePhrase: "While some argue that [X], I firmly believe that [Y] because...",
  },
  {
    id: "discussion",
    number: 2,
    title: "Discussion (Discuss Both Views)",
    structure: [
      { part: "Intro", guidance: "Paraphrase both sides + Outline essay" },
      { part: "Body 1", guidance: "Discuss side A with examples" },
      { part: "Body 2", guidance: "Discuss side B with examples + Give your opinion" },
      { part: "Conclusion", guidance: "Balanced summary" },
    ],
    templatePhrase:
      "This essay will examine both sides of the argument, but I personally side with the view that...",
  },
  {
    id: "advantages-disadvantages",
    number: 3,
    title: "Advantages vs. Disadvantages",
    structure: [
      { part: "Intro" },
      { part: "Body 1", guidance: "Advantages" },
      { part: "Body 2", guidance: "Disadvantages" },
      { part: "Conclusion", guidance: "Final weightage/verdict" },
    ],
  },
  {
    id: "problem-solution",
    number: 4,
    title: "Problem & Solution",
    structure: [
      { part: "Intro" },
      { part: "Body 1", guidance: "Causes/Problems" },
      { part: "Body 2", guidance: "Solutions" },
      { part: "Conclusion", guidance: "Final warning/call to action" },
    ],
  },
  {
    id: "two-part-question",
    number: 5,
    title: "Two-Part (Direct) Question",
    structure: [
      { part: "Intro" },
      { part: "Body 1", guidance: "Answer question 1" },
      { part: "Body 2", guidance: "Answer question 2" },
      { part: "Conclusion", guidance: "Direct summary of both answers" },
    ],
  },
];
