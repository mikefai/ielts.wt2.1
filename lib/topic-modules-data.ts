export type VocabItem = {
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
};

export type TopicModule = {
  id: string;
  topic: string;
  question: string;
  vocabulary: VocabItem[];
  bodyParagraph: string;
};

export const TOPIC_MODULES: TopicModule[] = [
  {
    id: "crime",
    topic: "Crime",
    question:
      "Some people believe that harsher punishments are the best way to reduce crime. To what extent do you agree or disagree?",
    vocabulary: [
      {
        word: "deterrent",
        partOfSpeech: "noun",
        definition: "Something that discourages people from acting by making them fear the consequences.",
        example: "The threat of a heavy fine is often an effective deterrent against littering.",
      },
      {
        word: "recidivism",
        partOfSpeech: "noun",
        definition: "The tendency of a convicted offender to commit further crimes after release.",
        example: "Countries that invest in prison education tend to report lower recidivism than those that do not.",
      },
      {
        word: "rehabilitation",
        partOfSpeech: "noun",
        definition: "The process of helping an offender return to a productive, law-abiding life through education and support.",
        example: "Rehabilitation, rather than punishment alone, gives former offenders a realistic chance of rebuilding their lives.",
      },
      {
        word: "delinquency",
        partOfSpeech: "noun",
        definition: "Minor criminal or antisocial behavior, especially by young people.",
        example: "Youth clubs and after-school programs can reduce juvenile delinquency in disadvantaged neighborhoods.",
      },
      {
        word: "retribution",
        partOfSpeech: "noun",
        definition: "Punishment inflicted as revenge or moral payment for a wrong.",
        example: "Critics argue that a justice system driven by retribution ignores the root causes of offending.",
      },
      {
        word: "culpable",
        partOfSpeech: "adjective",
        definition: "Deserving blame or responsibility for a wrongful act.",
        example: "A driver who ignores a red light is clearly culpable for the resulting accident.",
      },
      {
        word: "incarcerate",
        partOfSpeech: "verb",
        definition: "To imprison or confine someone in a prison.",
        example: "It is costly to incarcerate non-violent offenders when community service would be a cheaper alternative.",
      },
      {
        word: "law-abiding",
        partOfSpeech: "adjective",
        definition: "Obeying the law and behaving responsibly toward others.",
        example: "Most law-abiding citizens feel safer when police patrols are visible.",
      },
      {
        word: "deprivation",
        partOfSpeech: "noun",
        definition: "The lack of basic necessities or opportunities, such as income, housing or education.",
        example: "Persistent economic deprivation can push young people toward crime as a means of survival.",
      },
      {
        word: "leniency",
        partOfSpeech: "noun",
        definition: "Mildness or reluctance to punish severely.",
        example: "Excessive leniency may convince repeat offenders that the law carries no real consequences.",
      },
    ],
    bodyParagraph:
      "Admittedly, severe sentences can act as a powerful deterrent, yet the evidence suggests that punishment alone seldom produces safer societies. Prisons that merely incarcerate offenders, without offering education or vocational training, often release individuals who are no better equipped to live as law-abiding citizens, which explains why recidivism rates remain stubbornly high in many countries. By contrast, rehabilitation programs address the underlying causes of offending, such as deprivation and unemployment, and have been shown to reduce reoffending at a lower long-term cost. Consequently, while some degree of retribution is understandable, governments should prioritize reform over harsher penalties.",
  },
  {
    id: "health",
    topic: "Health",
    question:
      "Some people think governments should focus on preventing illness rather than treating it. To what extent do you agree or disagree?",
    vocabulary: [
      {
        word: "preventive",
        partOfSpeech: "adjective",
        definition: "Intended to stop something, especially illness, from happening.",
        example: "Preventive care, such as regular screenings, can detect illness before it becomes life-threatening.",
      },
      {
        word: "sedentary",
        partOfSpeech: "adjective",
        definition: "Involving a lot of sitting and very little physical activity.",
        example: "A sedentary lifestyle spent largely at a desk increases the risk of heart disease.",
      },
      {
        word: "chronic",
        partOfSpeech: "adjective",
        definition: "Persisting for a long time or constantly recurring, used especially of illness.",
        example: "Chronic conditions like diabetes require long-term management rather than a one-off cure.",
      },
      {
        word: "obesity",
        partOfSpeech: "noun",
        definition: "A medical condition of having excessive body fat that harms health.",
        example: "Rising childhood obesity has been linked to cheap, calorie-dense processed food.",
      },
      {
        word: "malnutrition",
        partOfSpeech: "noun",
        definition: "A condition caused by a lack of proper nutrients in the diet.",
        example: "In some regions, malnutrition stunts children's growth and weakens their immune systems.",
      },
      {
        word: "longevity",
        partOfSpeech: "noun",
        definition: "Long life; the length of time a person lives.",
        example: "Improved sanitation and medicine have dramatically increased average longevity over the past century.",
      },
      {
        word: "debilitating",
        partOfSpeech: "adjective",
        definition: "Making someone severely weak or unable to function normally.",
        example: "Arthritis can be a debilitating condition that prevents people from working.",
      },
      {
        word: "holistic",
        partOfSpeech: "adjective",
        definition: "Treating the whole person, including physical, mental and social needs, rather than just symptoms.",
        example: "A holistic approach to wellbeing considers diet, exercise, sleep and mental health together.",
      },
      {
        word: "immunization",
        partOfSpeech: "noun",
        definition: "The process of making a person resistant to a disease, typically by vaccination.",
        example: "Mass immunization has virtually eradicated polio in most parts of the world.",
      },
      {
        word: "epidemic",
        partOfSpeech: "noun",
        definition: "A widespread outbreak of a disease affecting many people at the same time.",
        example: "Governments must act swiftly to prevent a local outbreak from becoming a national epidemic.",
      },
    ],
    bodyParagraph:
      "Governments that invest in preventive healthcare ultimately spend less than those that merely react to illness. Sedentary lifestyles and poor diets have fueled a global rise in obesity and chronic conditions such as diabetes, which place an enormous burden on hospitals. Immunization campaigns, by contrast, have all but eliminated several debilitating diseases at a fraction of the cost of treatment. Moreover, a holistic approach that promotes exercise, nutrition and mental wellbeing can extend longevity and keep citizens economically productive for longer. Therefore, prevention is not an optional extra but a prudent long-term strategy.",
  },
  {
    id: "globalization",
    topic: "Globalization",
    question:
      "Globalization is causing local cultures to disappear. Do the advantages of this trend outweigh the disadvantages?",
    vocabulary: [
      {
        word: "homogenization",
        partOfSpeech: "noun",
        definition: "The process of making things or cultures similar to one another, reducing diversity.",
        example: "Critics warn that cultural homogenization is erasing the distinctive traditions of small communities.",
      },
      {
        word: "interdependence",
        partOfSpeech: "noun",
        definition: "A relationship in which countries or groups rely on one another.",
        example: "Economic interdependence means that a financial crisis in one country can quickly spread to others.",
      },
      {
        word: "multinational",
        partOfSpeech: "adjective / noun",
        definition: "Operating in several countries; a large company with branches in many nations.",
        example: "A multinational company can shift production to wherever labor costs are lowest.",
      },
      {
        word: "outsourcing",
        partOfSpeech: "noun",
        definition: "The practice of hiring outside firms, often overseas, to perform work once done in-house.",
        example: "Outsourcing customer service to overseas call centers has cost jobs in some wealthy countries.",
      },
      {
        word: "cosmopolitan",
        partOfSpeech: "adjective",
        definition: "Including people and influences from many parts of the world; open-minded and worldly.",
        example: "Large port cities tend to be more cosmopolitan than inland towns.",
      },
      {
        word: "assimilation",
        partOfSpeech: "noun",
        definition: "The process by which a minority group adopts the customs and attitudes of the dominant culture.",
        example: "Rapid assimilation into a dominant culture can cause migrants to lose their native language.",
      },
      {
        word: "proliferation",
        partOfSpeech: "noun",
        definition: "A rapid increase in the number or spread of something.",
        example: "The proliferation of low-cost flights has made international travel accessible to millions.",
      },
      {
        word: "diaspora",
        partOfSpeech: "noun",
        definition: "A community of people who live outside their ancestral homeland but keep cultural ties to it.",
        example: "The Indian diaspora maintains strong cultural and commercial ties with its homeland.",
      },
      {
        word: "tariff",
        partOfSpeech: "noun",
        definition: "A tax placed on imported goods.",
        example: "A high tariff on imported steel protects domestic producers but raises costs for consumers.",
      },
      {
        word: "ubiquitous",
        partOfSpeech: "adjective",
        definition: "Appearing or found everywhere.",
        example: "Smartphones have become ubiquitous, even in remote rural areas.",
      },
    ],
    bodyParagraph:
      "One of the most frequently cited drawbacks of globalization is the homogenization of culture. As multinational corporations become ubiquitous, identical fast-food chains and fashion brands appear in cities from Lagos to Seoul, gradually displacing local traditions. Younger generations, exposed to a global media diet, may experience assimilation into a dominant consumer culture and lose fluency in their own languages. Nevertheless, this trend is not wholly negative, since the proliferation of international contact has also made societies more cosmopolitan and tolerant. The challenge for policymakers is therefore to preserve cultural identity without sacrificing the economic interdependence that fuels prosperity.",
  },
  {
    id: "government-spending",
    topic: "Government Spending",
    question:
      "Some people believe governments should spend taxpayers' money on essential services rather than on prestigious projects. To what extent do you agree or disagree?",
    vocabulary: [
      {
        word: "allocate",
        partOfSpeech: "verb",
        definition: "To distribute resources or money for a particular purpose.",
        example: "Councils must allocate their limited budgets carefully between roads, schools and parks.",
      },
      {
        word: "expenditure",
        partOfSpeech: "noun",
        definition: "The amount of money spent on something.",
        example: "Public expenditure on education is widely regarded as an investment rather than a cost.",
      },
      {
        word: "fiscal",
        partOfSpeech: "adjective",
        definition: "Relating to government revenue, taxes and public spending.",
        example: "Responsible fiscal policy requires governments to avoid spending far beyond their means.",
      },
      {
        word: "subsidize",
        partOfSpeech: "verb",
        definition: "To support an activity or product with public money so that it costs less.",
        example: "Many governments subsidize renewable energy to make it competitive with fossil fuels.",
      },
      {
        word: "infrastructure",
        partOfSpeech: "noun",
        definition: "The basic physical systems of a country, such as roads, railways, water and power supplies.",
        example: "Reliable infrastructure, from railways to broadband, underpins economic growth.",
      },
      {
        word: "revenue",
        partOfSpeech: "noun",
        definition: "Income that a government receives, mainly from taxation.",
        example: "Tax revenue has fallen sharply during the economic downturn.",
      },
      {
        word: "austerity",
        partOfSpeech: "noun",
        definition: "Government policy of reducing public spending to control a budget deficit.",
        example: "Years of austerity left many hospitals understaffed and underfunded.",
      },
      {
        word: "welfare",
        partOfSpeech: "noun",
        definition: "State support that protects the health and living standards of people in need.",
        example: "A strong welfare system protects citizens who lose their jobs.",
      },
      {
        word: "prudent",
        partOfSpeech: "adjective",
        definition: "Showing careful judgment and caution, especially with money.",
        example: "It is prudent to build up reserves during periods of economic growth.",
      },
      {
        word: "accountable",
        partOfSpeech: "adjective",
        definition: "Required to explain and justify one's actions or decisions.",
        example: "Elected officials should be held accountable for how they spend public money.",
      },
    ],
    bodyParagraph:
      "Governments have a duty to allocate limited public funds where they deliver the greatest social return. Expenditure on infrastructure such as railways and clean water systems generates long-term economic growth, whereas prestige projects like stadiums often leave taxpayers with costly maintenance bills. Similarly, when authorities subsidize public transport, they reduce congestion and make employment accessible to low-income families. Admittedly, fiscal discipline is essential, particularly in periods of austerity, but cutting welfare and essential services rarely saves money in the long run. Ministers should therefore remain accountable to citizens by publishing transparent budgets.",
  },
  {
    id: "art",
    topic: "Art",
    question:
      "Some people think that governments should not fund the arts because they are a luxury. To what extent do you agree or disagree?",
    vocabulary: [
      {
        word: "aesthetic",
        partOfSpeech: "noun / adjective",
        definition: "Concerned with beauty and the appreciation of it; the visual style of something.",
        example: "The city's modern library is admired for its elegant aesthetic as much as for its collection.",
      },
      {
        word: "heritage",
        partOfSpeech: "noun",
        definition: "Traditions, buildings and objects inherited from the past and valued by a society.",
        example: "Restoring historic buildings helps to protect a nation's cultural heritage.",
      },
      {
        word: "patron",
        partOfSpeech: "noun",
        definition: "A person or organization that gives financial support to artists or cultural institutions.",
        example: "Wealthy patrons historically funded painters and composers, allowing them to work full time.",
      },
      {
        word: "cultivate",
        partOfSpeech: "verb",
        definition: "To develop and strengthen a skill, quality or attitude over time.",
        example: "Arts education can cultivate creativity and critical thinking in young learners.",
      },
      {
        word: "evoke",
        partOfSpeech: "verb",
        definition: "To bring a feeling, memory or image into the mind.",
        example: "A single photograph can evoke powerful memories of a lost era.",
      },
      {
        word: "avant-garde",
        partOfSpeech: "adjective / noun",
        definition: "New, experimental and ahead of mainstream ideas, especially in the arts.",
        example: "The gallery is known for showcasing avant-garde installations that challenge conventional ideas.",
      },
      {
        word: "catharsis",
        partOfSpeech: "noun",
        definition: "The emotional release a person feels through experiencing art such as drama or music.",
        example: "Many audiences experience a sense of catharsis after watching a tragic play.",
      },
      {
        word: "curator",
        partOfSpeech: "noun",
        definition: "A person who selects, organizes and cares for the items in a museum or exhibition.",
        example: "The curator selected works that illustrate how landscape painting has evolved.",
      },
      {
        word: "thought-provoking",
        partOfSpeech: "adjective",
        definition: "Stimulating serious reflection or new ideas.",
        example: "The documentary was thought-provoking, prompting viewers to reconsider their consumption habits.",
      },
      {
        word: "resonate",
        partOfSpeech: "verb",
        definition: "To strike a chord with someone by evoking a strong emotional or personal response.",
        example: "Great literature continues to resonate with readers centuries after it was written.",
      },
    ],
    bodyParagraph:
      "Public funding for the arts is often dismissed as a luxury, yet it safeguards the cultural heritage on which national identity depends. Museums and galleries preserve works that evoke the values and struggles of earlier generations, while contemporary, thought-provoking exhibitions encourage citizens to question their assumptions. Because few private patrons can sustain such institutions indefinitely, state support ensures that art remains accessible to everyone rather than only to the wealthy. Furthermore, engaging with music, theater or painting offers a form of catharsis, helping people to process emotions and cultivate empathy. For these reasons, spending on the arts is an investment in social cohesion, not an indulgence.",
  },
];
