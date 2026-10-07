export type ExamPrompt = {
  id: "education" | "environment" | "technology";
  topic: string;
  essayType: string;
  text: string;
};

export const EXAM_PROMPTS: ExamPrompt[] = [
  {
    id: "education",
    topic: "Education",
    essayType: "Opinion (Positive/Negative)",
    text: "In many countries, governments are spending less money on the arts and more on science and technology. Is this a positive or negative development?",
  },
  {
    id: "environment",
    topic: "Environment",
    essayType: "Agree / Disagree (Opinion)",
    text: "Some people think that environmental problems are too big for individual countries and individuals to solve. Instead, they believe only large international organizations and governments can make a difference. To what extent do you agree or disagree?",
  },
  {
    id: "technology",
    topic: "Technology",
    essayType: "Advantages vs. Disadvantages",
    text: "The rise of artificial intelligence will have a significant impact on our daily lives. Do the advantages of this trend outweigh the disadvantages?",
  },
];
