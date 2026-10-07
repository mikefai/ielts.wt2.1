/**
 * Original IELTS Academic Writing Task 2 practice prompts, written in the style and tone of
 * Cambridge IELTS papers (four per essay type). They are NOT reproductions of real exam questions.
 *
 * `essayType` values match the ids in lib/notes-data.ts, so a prompt can link to its /notes entry.
 */
export const ESSAY_TYPE_IDS = [
  "agree-disagree",
  "discussion",
  "advantages-disadvantages",
  "problem-solution",
  "two-part-question",
] as const;

export type EssayTypeId = (typeof ESSAY_TYPE_IDS)[number];

export type MockPrompt = {
  id: string;
  essayType: EssayTypeId;
  topic: string;
  text: string;
};

export const MOCK_PROMPTS: MockPrompt[] = [
  // Opinion (Agree / Disagree)
  {
    id: "op-1",
    essayType: "agree-disagree",
    topic: "Education",
    text: "Some people say that schools should teach children practical skills, such as cooking, budgeting and basic repairs, instead of focusing mainly on academic subjects. To what extent do you agree or disagree?",
  },
  {
    id: "op-2",
    essayType: "agree-disagree",
    topic: "Work",
    text: "Some people believe that employees should be allowed to work from home whenever they choose, because it improves their productivity. To what extent do you agree or disagree?",
  },
  {
    id: "op-3",
    essayType: "agree-disagree",
    topic: "Environment",
    text: "Some people think that the most effective way to protect the environment is to increase taxes on activities that damage it. To what extent do you agree or disagree?",
  },
  {
    id: "op-4",
    essayType: "agree-disagree",
    topic: "Media",
    text: "In many countries, young people spend a large part of their free time on social media. Some people believe that this has a mainly negative effect on their personal relationships. To what extent do you agree or disagree?",
  },

  // Discussion (Discuss both views)
  {
    id: "disc-1",
    essayType: "discussion",
    topic: "Health",
    text: "Some people believe that governments should be responsible for providing healthcare to all citizens. Others think that individuals should pay for their own medical treatment. Discuss both these views and give your own opinion.",
  },
  {
    id: "disc-2",
    essayType: "discussion",
    topic: "Education",
    text: "Some people think that children should begin learning a foreign language at primary school. Others believe it is better to start at secondary school. Discuss both these views and give your own opinion.",
  },
  {
    id: "disc-3",
    essayType: "discussion",
    topic: "Crime",
    text: "Some people believe that people who commit crimes should be sent to prison. Others argue that community service is a more effective punishment. Discuss both these views and give your own opinion.",
  },
  {
    id: "disc-4",
    essayType: "discussion",
    topic: "Tourism",
    text: "Some people argue that international tourism benefits local communities. Others think it does more harm than good to local culture and the environment. Discuss both these views and give your own opinion.",
  },

  // Advantages and disadvantages
  {
    id: "adv-1",
    essayType: "advantages-disadvantages",
    topic: "Shopping",
    text: "An increasing number of people are buying goods online instead of visiting physical shops. What are the advantages and disadvantages of this trend?",
  },
  {
    id: "adv-2",
    essayType: "advantages-disadvantages",
    topic: "Work",
    text: "In many countries, people are continuing to work until an older age than in the past. Do the advantages of this development outweigh the disadvantages?",
  },
  {
    id: "adv-3",
    essayType: "advantages-disadvantages",
    topic: "Education",
    text: "Many universities now offer degree courses that students can complete entirely online. What are the advantages and disadvantages of studying in this way?",
  },
  {
    id: "adv-4",
    essayType: "advantages-disadvantages",
    topic: "Transport",
    text: "Some cities are banning private cars from their centres in order to reduce traffic and pollution. Do the advantages of this policy outweigh the disadvantages?",
  },

  // Problem and solution
  {
    id: "prob-1",
    essayType: "problem-solution",
    topic: "Health",
    text: "In many countries, people are becoming less physically active, and levels of obesity are rising. What problems does this cause? What measures could be taken to address them?",
  },
  {
    id: "prob-2",
    essayType: "problem-solution",
    topic: "Housing",
    text: "Housing in many large cities has become so expensive that ordinary workers can no longer afford to live there. What problems does this cause, and what solutions can you suggest?",
  },
  {
    id: "prob-3",
    essayType: "problem-solution",
    topic: "Environment",
    text: "Large amounts of plastic waste are polluting oceans and rivers around the world. What are the main causes of this problem, and what can be done to reduce it?",
  },
  {
    id: "prob-4",
    essayType: "problem-solution",
    topic: "Society",
    text: "In many countries, the proportion of elderly people is rising while fewer young people are entering the workforce. What problems might this cause for society, and how can they be solved?",
  },

  // Two-part (direct) question
  {
    id: "dq-1",
    essayType: "two-part-question",
    topic: "Migration",
    text: "Many young people today leave their home town or country to study or work elsewhere. Why do you think this is happening? Is it a positive or negative development?",
  },
  {
    id: "dq-2",
    essayType: "two-part-question",
    topic: "Lifestyle",
    text: "Some people spend large sums of money on celebrations such as weddings and birthdays. Why do people do this? Is it a good use of money?",
  },
  {
    id: "dq-3",
    essayType: "two-part-question",
    topic: "Culture",
    text: "In some countries, fewer people are reading books for pleasure. Why is this the case? What can be done to encourage people to read more?",
  },
  {
    id: "dq-4",
    essayType: "two-part-question",
    topic: "Media",
    text: "Many people now read the news on their mobile phones rather than in newspapers. Why has this change taken place? Do you think it will affect the quality of news?",
  },
];

export function getPromptsByType(type: EssayTypeId): MockPrompt[] {
  return MOCK_PROMPTS.filter((p) => p.essayType === type);
}

/** Random prompt, optionally restricted to one essay type. `rng` is injectable for deterministic tests. */
export function getRandomPrompt(type?: EssayTypeId, rng: () => number = Math.random): MockPrompt | undefined {
  const pool = type ? getPromptsByType(type) : MOCK_PROMPTS;
  return pool.length === 0 ? undefined : pool[Math.floor(rng() * pool.length)];
}
