export type CriterionScores = { TR: number; CC: number; LR: number; GRA: number };

export type Evaluation = {
  scores: CriterionScores;
  overall: number;
  feedback: {
    grammar: string[];
    vocabulary: string[];
    modelParagraph: string;
  };
};
