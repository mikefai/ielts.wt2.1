const PARAGRAPHS: Record<string, string> = {
  education:
    "Although science and technology undoubtedly drive economic growth, shifting public funds away from the arts carries hidden costs. Creative subjects teach students to think flexibly, work collaboratively and communicate complex ideas persuasively, which are precisely the competencies that employers in innovative industries prize. Furthermore, theatres, galleries and music programmes sustain a shared cultural identity and attract tourism revenue. A balanced budget that nurtures both disciplines would therefore produce more adaptable graduates and a more cohesive society than one that prioritises laboratories alone.",
  environment:
    "Admittedly, international organisations and national governments possess the legal authority and financial resources to tackle climate change at scale. Nevertheless, it would be misleading to suggest that individuals are powerless. Consumer choices, such as reducing meat consumption or switching to public transport, collectively shape market demand and encourage companies to adopt greener practices. Moreover, citizens who vote and campaign can compel governments to enforce stricter regulations. Consequently, lasting progress depends on cooperation between institutions and individuals rather than on either acting alone.",
  technology:
    "On the positive side, artificial intelligence can automate repetitive tasks, freeing people to concentrate on creative and interpersonal work. In healthcare, for instance, algorithms already detect diseases in medical scans faster and more accurately than human specialists, which saves lives and reduces costs. Nevertheless, these gains are accompanied by genuine risks, including job displacement and the erosion of privacy. On balance, the benefits are likely to outweigh the drawbacks, provided that governments introduce robust regulation and invest in retraining workers.",
};

const GENERIC =
  "A well-developed body paragraph opens with a clear topic sentence, explains the idea in depth, and supports it with a specific example. For instance, rather than stating that a policy is beneficial, show how it changes real outcomes for real people. Linking the final sentence back to the question ensures that the paragraph remains relevant, while a range of precise vocabulary and complex sentences demonstrates the flexibility examiners reward at higher band scores.";

export function getModelParagraph(promptId?: string): string {
  return (promptId && Object.hasOwn(PARAGRAPHS, promptId) && PARAGRAPHS[promptId]) || GENERIC;
}
