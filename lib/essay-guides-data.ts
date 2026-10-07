/**
 * Teaching content for /notes: what each paragraph is for and what each sentence must do.
 * Keyed by the essay-type ids in lib/notes-data.ts. Every guide follows one worked sample question.
 */
export type SentenceGuide = {
  /** Short name of the job this sentence does, e.g. "Topic sentence". */
  role: string;
  /** How to write it and why the examiner rewards it. */
  how: string;
  /** A complete model sentence for the sample question. */
  example: string;
};

export type ParagraphGuide = {
  part: "Intro" | "Body 1" | "Body 2" | "Conclusion";
  purpose: string;
  length: string;
  sentences: SentenceGuide[];
};

export type EssayGuide = {
  question: string;
  paragraphs: ParagraphGuide[];
  tips: string[];
};

const TIMING_TIP =
  "Aim for 250–300 words in 40 minutes: about 5 minutes planning, 30 writing and 5 checking. Fewer than 250 words loses marks in Task Response.";

export const ESSAY_GUIDES: Record<string, EssayGuide> = {
  "agree-disagree": {
    question:
      "Some people believe that university education should be free for everyone. To what extent do you agree or disagree?",
    paragraphs: [
      {
        part: "Intro",
        purpose:
          "Show the examiner that you understand the question and state your answer clearly, so the whole essay has a direction.",
        length: "40–50 words",
        sentences: [
          {
            role: "General statement (hook)",
            how: "Open with a broad, neutral statement about the topic to set the context. Do not copy the question and do not give your opinion yet.",
            example: "Access to higher education has become one of the most debated issues in modern society.",
          },
          {
            role: "Paraphrase the question",
            how: "Restate the prompt in your own words, changing vocabulary and sentence structure. This shows lexical range and proves you understood the task.",
            example: "It is often suggested that governments should cover the full cost of university study for every citizen.",
          },
          {
            role: "Thesis (clear position)",
            how: "Say exactly how far you agree or disagree and, optionally, name your two reasons. A clear position is essential for Task Response, and every later paragraph must stay consistent with it.",
            example: "I firmly agree with this view, because it promotes equal opportunity and benefits the whole economy.",
          },
        ],
      },
      {
        part: "Body 1",
        purpose:
          "Develop your strongest reason in depth. One paragraph, one main idea, fully explained and supported.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence",
            how: "State the single main idea of the paragraph, usually starting with a sequencing word such as Firstly. The reader should know the point before the detail.",
            example: "Firstly, free tuition would give talented students from poor families an equal chance to succeed.",
          },
          {
            role: "Explanation",
            how: "Explain why or how your idea is true. Answer the question 'so what?' rather than just repeating the idea in other words.",
            example: "At present, many gifted teenagers abandon their ambitions simply because they cannot afford fees, which wastes valuable potential.",
          },
          {
            role: "Example (evidence)",
            how: "Support the idea with a specific, realistic example such as a country, a group of people or a situation. Concrete detail is what separates Band 7+ from Band 6.",
            example: "For instance, in countries where university study is free, such as Norway, students from modest backgrounds can graduate without large debts.",
          },
          {
            role: "Link back",
            how: "Close the paragraph by tying the point back to your position or to the question. This is where cohesion is shown at paragraph level.",
            example: "Therefore, removing fees is a direct way of making education fairer for everyone.",
          },
        ],
      },
      {
        part: "Body 2",
        purpose:
          "Add a second reason, or acknowledge the opposing view and explain why it is weaker. Showing you have considered the other side makes the argument more mature.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence with concession",
            how: "Introduce your second idea, or admit the counter-argument first with a phrase such as Admittedly or Critics claim. This shows balance while keeping your position.",
            example: "Admittedly, critics claim that free education would place a heavy burden on taxpayers.",
          },
          {
            role: "Refutation",
            how: "Explain why the opposing point is less convincing or has a bigger counter-point. Use a contrast linker such as However or Nevertheless.",
            example: "However, this cost is better seen as an investment, since graduates typically earn higher salaries and pay more tax throughout their careers.",
          },
          {
            role: "Example (evidence)",
            how: "Give a concrete illustration of your refutation so it does not remain an opinion only.",
            example: "For example, a country with more qualified doctors and engineers attracts investment and needs fewer foreign specialists.",
          },
          {
            role: "Link back",
            how: "Finish by showing that your position still stands, using a result linker such as Thus or Consequently.",
            example: "Thus, the long-term economic return outweighs the initial expense of funding universities.",
          },
        ],
      },
      {
        part: "Conclusion",
        purpose:
          "Leave a clear final impression by confirming your position. Never introduce a new idea here.",
        length: "40–50 words",
        sentences: [
          {
            role: "Signpost and restate position",
            how: "Begin with a signpost such as In conclusion or To sum up, then restate your opinion using different words from the introduction.",
            example: "In conclusion, I strongly believe that university education should be free for all citizens.",
          },
          {
            role: "Summarize main points",
            how: "Briefly recap your two key reasons in one sentence. Do not repeat your examples.",
            example: "This is because free access creates equal opportunities and strengthens the national economy.",
          },
          {
            role: "Final thought (optional)",
            how: "You may add a short prediction or recommendation that follows from your argument. Leave it out if you are short of time.",
            example: "Governments that invest in education today will reap the benefits for generations to come.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP,
      "Keep the same position in every paragraph. If you say 'partly agree' in the introduction, show both parts in the body.",
      "Use 'To what extent' wisely: a clear, fully developed 'strongly agree' or 'partly agree' both score well.",
    ],
  },

  discussion: {
    question:
      "Some people think that children should begin learning a foreign language at primary school. Others believe it is better to start at secondary school. Discuss both views and give your own opinion.",
    paragraphs: [
      {
        part: "Intro",
        purpose:
          "Present the debate neutrally and tell the reader how the essay will proceed, including that you will give an opinion.",
        length: "40–50 words",
        sentences: [
          {
            role: "General statement (hook)",
            how: "Introduce the wider topic in one neutral sentence. Avoid clichés such as 'In today's modern world'.",
            example: "Language skills are increasingly valuable in a globalised job market.",
          },
          {
            role: "Paraphrase both views",
            how: "Restate both sides of the question in your own words, giving each equal weight. Both views must appear because the task says 'discuss both'.",
            example: "Opinions differ on whether foreign-language lessons should begin in the early years of schooling or later in adolescence.",
          },
          {
            role: "Outline and your opinion",
            how: "Announce that you will examine both sides and state which one you support. An opinion in the introduction ensures a clear position from the start.",
            example: "This essay will examine both sides of the argument, but I personally side with the view that early learning is more beneficial.",
          },
        ],
      },
      {
        part: "Body 1",
        purpose:
          "Explain the first view fairly and persuasively, as its supporters would, with at least one example.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (view A)",
            how: "State the first view using reporting language such as Supporters argue that or Those in favour claim that, so the reader knows it is not necessarily your view.",
            example: "Supporters of starting at primary school argue that young children acquire languages more naturally.",
          },
          {
            role: "Explanation",
            how: "Give the reasoning behind the view. Explain the mechanism, not just the claim.",
            example: "Their brains are highly flexible, so they can absorb pronunciation and grammar patterns with little conscious effort.",
          },
          {
            role: "Example (evidence)",
            how: "Illustrate with a specific, realistic example from education, family life or other countries.",
            example: "For example, children raised in bilingual families often speak both languages fluently without any formal study.",
          },
          {
            role: "Link back",
            how: "Sum up what the example shows about this view, in neutral language.",
            example: "This suggests that early exposure can give pupils a lasting advantage in language learning.",
          },
        ],
      },
      {
        part: "Body 2",
        purpose:
          "Explain the opposing view just as fairly, then state and justify your own opinion. This paragraph carries the essay's judgement.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (view B)",
            how: "Switch clearly to the other side with a contrast linker such as On the other hand or By contrast.",
            example: "On the other hand, those who prefer secondary school point out that young pupils must first master their mother tongue.",
          },
          {
            role: "Explanation",
            how: "Give the reasoning behind this second view, again in neutral reporting language.",
            example: "They believe that teenagers have stronger study skills and can understand grammar rules logically.",
          },
          {
            role: "Example (evidence)",
            how: "Back the second view with a realistic example so both sides receive equal development.",
            example: "For instance, a fifteen-year-old can use textbooks and online resources independently, which a seven-year-old cannot.",
          },
          {
            role: "Your opinion",
            how: "State your own view and give a short reason. Use 'Nevertheless' or 'In my opinion' to mark the shift from reporting to arguing.",
            example: "Nevertheless, in my opinion the benefits of an early start outweigh these concerns, because motivation can be built through songs and games.",
          },
        ],
      },
      {
        part: "Conclusion",
        purpose:
          "Summarize the balance of the discussion and restate your opinion, without adding new ideas.",
        length: "40–50 words",
        sentences: [
          {
            role: "Signpost and balanced summary",
            how: "Acknowledge that both views have merit and summarize each in a few words.",
            example: "In conclusion, although starting later offers maturity and starting earlier offers natural acquisition, both approaches have clear merits.",
          },
          {
            role: "Restate your opinion",
            how: "Confirm which side you support, using different words from the introduction.",
            example: "Overall, I believe that introducing foreign languages at primary school gives children the strongest foundation.",
          },
          {
            role: "Final thought (optional)",
            how: "Close with a brief recommendation, such as a combination of both approaches.",
            example: "Schools could ideally begin with playful lessons early and add formal grammar teaching later.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP,
      "Give each view roughly equal space. If one view gets a single sentence, Task Response suffers.",
      "Use reporting phrases (some argue, supporters claim) for views that are not yours, and first-person phrases only for your own opinion.",
    ],
  },

  "advantages-disadvantages": {
    question:
      "An increasing number of people are buying goods online instead of visiting physical shops. What are the advantages and disadvantages of this trend?",
    paragraphs: [
      {
        part: "Intro",
        purpose:
          "Introduce the trend and promise a balanced discussion of both its benefits and its drawbacks.",
        length: "40–50 words",
        sentences: [
          {
            role: "General statement (hook)",
            how: "Set the context with a broad statement about the topic. Keep it factual and neutral.",
            example: "Digital technology has changed the way people spend their money.",
          },
          {
            role: "Paraphrase the question",
            how: "Restate the trend in your own words, changing the key vocabulary. Do not copy the question.",
            example: "Growing numbers of consumers now prefer to order products over the internet rather than visit high-street stores.",
          },
          {
            role: "Outline (and verdict if asked)",
            how: "Say that you will discuss both sides. If the question asks 'Do the advantages outweigh the disadvantages?', also give your verdict here; if it only asks for advantages and disadvantages, a verdict is optional.",
            example: "This essay will discuss the main benefits and drawbacks of this development.",
          },
        ],
      },
      {
        part: "Body 1",
        purpose:
          "Present the advantages, developing one or two clearly explained points rather than a long list.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (main advantage)",
            how: "Name the single most important advantage at the start of the paragraph, using a phrase such as The main advantage of … is …",
            example: "The main advantage of online shopping is convenience.",
          },
          {
            role: "Explanation",
            how: "Explain how this benefit works in practice, rather than just restating it.",
            example: "Customers can compare prices and place orders at any hour without spending time or money on travel.",
          },
          {
            role: "Example (evidence)",
            how: "Give a realistic example of a person or situation that benefits.",
            example: "For example, a busy parent can order groceries at midnight and have them delivered the next afternoon.",
          },
          {
            role: "Second advantage",
            how: "Add a second, shorter advantage with an addition linker such as Furthermore or In addition.",
            example: "Furthermore, online retailers often charge lower prices because they avoid the cost of renting expensive shop premises.",
          },
        ],
      },
      {
        part: "Body 2",
        purpose:
          "Present the disadvantages with the same depth as the advantages. Balanced development earns higher Task Response scores.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (main disadvantage)",
            how: "Signal the move to the negatives with a contrast phrase such as Despite these benefits or However, there are drawbacks.",
            example: "Despite these benefits, online shopping also has some significant drawbacks.",
          },
          {
            role: "Explanation",
            how: "Explain the problem and its cause, not only that it exists.",
            example: "Buyers cannot inspect products before purchase, so items may differ from their photographs.",
          },
          {
            role: "Example or result",
            how: "Show the consequence with a concrete example or a result linker such as As a result.",
            example: "As a result, returns are common, which causes inconvenience and extra packaging waste.",
          },
          {
            role: "Second disadvantage",
            how: "Add a second, shorter disadvantage, ideally with a wider social or economic effect.",
            example: "In addition, the decline of local shops may harm town centres and reduce employment opportunities.",
          },
        ],
      },
      {
        part: "Conclusion",
        purpose:
          "Weigh the two sides and leave the reader with a clear final judgement.",
        length: "40–50 words",
        sentences: [
          {
            role: "Signpost and summary",
            how: "Begin with In conclusion or To sum up and recap the key advantage and the key disadvantage in one sentence.",
            example: "In conclusion, online shopping offers great convenience and lower prices but may cause product problems and damage local businesses.",
          },
          {
            role: "Verdict (final weighting)",
            how: "State which side is stronger and why. Even when the question does not demand a verdict, a short balanced judgement leaves a good final impression.",
            example: "On balance, I believe the advantages outweigh the disadvantages, provided that consumers shop carefully.",
          },
          {
            role: "Final thought (optional)",
            how: "Offer a brief suggestion or prediction, if time allows.",
            example: "Retailers that combine online convenience with local service are likely to succeed.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP,
      "Check the exact question wording: 'What are the advantages and disadvantages?' needs balance; 'Do the advantages outweigh the disadvantages?' needs a clear verdict in the introduction and conclusion.",
      "Two well-developed points per side beat five undeveloped ones.",
    ],
  },

  "problem-solution": {
    question:
      "Large amounts of plastic waste are polluting oceans and rivers around the world. What are the main causes of this problem, and what can be done to reduce it?",
    paragraphs: [
      {
        part: "Intro",
        purpose:
          "Introduce the problem and tell the reader that the essay will cover both its causes and its solutions.",
        length: "40–50 words",
        sentences: [
          {
            role: "General statement (hook)",
            how: "Open with a broad statement about the importance of the issue. Keep it specific to the topic.",
            example: "Plastic pollution has become one of the most visible environmental crises of our time.",
          },
          {
            role: "Paraphrase the problem",
            how: "Restate the problem from the question in different words, so the examiner sees you understood it.",
            example: "Huge quantities of discarded plastic are ending up in seas and waterways across the globe.",
          },
          {
            role: "Outline of the essay",
            how: "Tell the reader the essay will identify the causes and propose solutions, matching the order of the question.",
            example: "This essay will identify the main causes of this problem and propose practical solutions.",
          },
        ],
      },
      {
        part: "Body 1",
        purpose:
          "Explain the causes (or problems) in depth, because the solutions that follow must respond to them.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (main cause)",
            how: "Name the most important cause immediately, using a phrase such as A major cause of … is …",
            example: "A major cause of plastic pollution is the widespread use of single-use packaging.",
          },
          {
            role: "Explanation",
            how: "Explain how this cause leads to the problem. Show the chain of cause and effect.",
            example: "Because plastic is cheap and durable, businesses use it for bottles and bags that consumers discard within minutes.",
          },
          {
            role: "Example (evidence)",
            how: "Give a realistic example that makes the cause visible.",
            example: "For instance, much of the waste found on beaches consists of drinks bottles and food wrappers.",
          },
          {
            role: "Second cause",
            how: "Add a second, shorter cause with In addition or Another factor is …",
            example: "In addition, poor waste management in some regions means that rubbish is not collected and is washed into rivers.",
          },
        ],
      },
      {
        part: "Body 2",
        purpose:
          "Propose realistic solutions that clearly match the causes, and explain why each would work.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (main solution)",
            how: "State the most effective solution and who should act. Use modal verbs such as can, should or could.",
            example: "Governments can tackle this issue by regulating the production and use of disposable plastics.",
          },
          {
            role: "Explanation",
            how: "Explain how the solution works and why it would address the cause above.",
            example: "Taxes on plastic bags and bans on single-use items encourage people to choose reusable alternatives.",
          },
          {
            role: "Example (evidence)",
            how: "Support the solution with a realistic example, such as a policy that has been tried.",
            example: "For example, many countries that introduced a small charge for plastic bags saw their use fall sharply.",
          },
          {
            role: "Second solution and result",
            how: "Add a second solution and its likely result, using a result linker such as Consequently.",
            example: "Furthermore, investing in recycling facilities and awareness campaigns would ensure that waste is processed rather than dumped.",
          },
        ],
      },
      {
        part: "Conclusion",
        purpose:
          "Summarize the causes and solutions and end with a strong closing message about the urgency of acting.",
        length: "40–50 words",
        sentences: [
          {
            role: "Signpost and summary",
            how: "Begin with In conclusion and recap the main cause and the main solution in one sentence.",
            example: "In conclusion, plastic pollution results mainly from disposable packaging and weak waste management, and it can be reduced through regulation and recycling.",
          },
          {
            role: "Final warning or call to action",
            how: "End with a short warning about what happens if nothing changes, or a call for action.",
            example: "Unless governments and consumers act urgently, our oceans will continue to suffer irreversible damage.",
          },
          {
            role: "Optional recommendation",
            how: "Add one sentence naming who should lead the change, only if you have time.",
            example: "Cooperation between governments, businesses and individuals is essential.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP,
      "Match each solution to a cause so the essay feels logical, not like two separate lists.",
      "Use modal verbs (could, should, would, might) for solutions: they sound realistic rather than absolute.",
      "If the question has two parts, give each part its own body paragraph in the same order as the question.",
    ],
  },

  "two-part-question": {
    question:
      "Many young people today leave their home town or country to study or work elsewhere. Why do you think this is happening? Is it a positive or negative development?",
    paragraphs: [
      {
        part: "Intro",
        purpose:
          "Introduce the topic and signal that you will answer both questions, with your opinion on the second.",
        length: "40–50 words",
        sentences: [
          {
            role: "General statement (hook)",
            how: "Open with a neutral statement that frames the topic.",
            example: "Mobility has become a defining feature of young people's lives in the twenty-first century.",
          },
          {
            role: "Paraphrase the questions",
            how: "Restate what the examiner is asking in your own words, covering both questions.",
            example: "Increasing numbers of young adults are moving away from their birthplace for education or employment, which raises questions about the causes and the consequences.",
          },
          {
            role: "Outline and your position",
            how: "Tell the reader how you will answer, and give your overall opinion on the second question so your position is clear from the start.",
            example: "This essay will explain the reasons behind this trend and argue that it is largely positive.",
          },
        ],
      },
      {
        part: "Body 1",
        purpose:
          "Answer the first question completely before moving on. Everything in this paragraph must relate to 'why'.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (answer to question 1)",
            how: "Answer the first question directly, using words from the question itself. The examiner should find your answer in the first sentence.",
            example: "The main reason why young people move away is the search for better opportunities.",
          },
          {
            role: "Explanation",
            how: "Explain how and why this reason leads young people to move.",
            example: "Universities and employers are concentrated in large cities, so ambitious graduates often have no choice but to relocate.",
          },
          {
            role: "Example (evidence)",
            how: "Illustrate with a realistic example.",
            example: "For instance, a talented student from a small village may need to study in the capital to follow a medical career.",
          },
          {
            role: "Second reason",
            how: "Add a second reason briefly, to show the answer is developed and not one-dimensional.",
            example: "Another factor is the desire for independence and adventure, which encourages young people to experience different cultures.",
          },
        ],
      },
      {
        part: "Body 2",
        purpose:
          "Answer the second question with a clear judgement and a reason, so every part of the task is addressed.",
        length: "90–100 words",
        sentences: [
          {
            role: "Topic sentence (answer to question 2)",
            how: "State your judgement immediately, again borrowing words from the question (positive or negative).",
            example: "In my view, this trend is mostly a positive development.",
          },
          {
            role: "Explanation",
            how: "Explain why the development is positive (or negative) for individuals or society.",
            example: "Young people who work or study abroad gain new skills, broaden their perspectives and often return with valuable experience.",
          },
          {
            role: "Example (evidence)",
            how: "Support the judgement with a concrete example.",
            example: "For example, many engineers who trained overseas later help to modernise industry in their home countries.",
          },
          {
            role: "Concession",
            how: "Acknowledge one drawback with Admittedly or Although, then explain why it matters less. This shows balanced thinking.",
            example: "Admittedly, families and small towns may lose young talent, but modern communication keeps these bonds strong.",
          },
        ],
      },
      {
        part: "Conclusion",
        purpose:
          "Give a direct, brief summary of both answers. Do not introduce new reasons.",
        length: "40–50 words",
        sentences: [
          {
            role: "Signpost and answer to question 1",
            how: "Start with In conclusion and restate the main reason in one clause.",
            example: "In conclusion, young people migrate mainly because better education and career prospects exist elsewhere.",
          },
          {
            role: "Answer to question 2",
            how: "Restate your judgement using different words from the body.",
            example: "I believe that this development is positive, as its benefits to individuals and societies outweigh the drawbacks.",
          },
          {
            role: "Final thought (optional)",
            how: "Finish with a brief recommendation or prediction.",
            example: "Governments should therefore encourage mobility while helping graduates to return and contribute.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP,
      "Answer the questions in the same order as they appear and make each answer easy to find in the topic sentence.",
      "Never leave one part of the question unanswered: it limits your Task Response score, even if the writing is excellent.",
      "Reuse words from the questions (reason, positive, negative) in your topic sentences to show you are answering them directly.",
    ],
  },
};
