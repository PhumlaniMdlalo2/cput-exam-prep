import type { ChapterTest } from '../../types/content';
import { caseQ, essayQ, mcq, mp, shortQ, tf } from '../questionHelpers';

export const chapter11Test: ChapterTest = {
  id: 'ch11-test',
  chapterId: 'ch11',
  title: 'Chapter 11 test — Risk Management',
  description:
    'A 50-mark test covering risk identification, analysis, response strategies and the risk register.',
  instructions: [
    'Answer all questions.',
    'Section A is automatically marked.',
    'For written answers, use the marking guide in the memo to check your reasoning.',
    'Calculations and written answers can be adjusted after submission if your wording differs from the model answer.'
  ],
  timeLimitMinutes: 60,
  questions: [
    mcq(
      'ch11-t-q1',
      'A positive uncertainty that may benefit one or more project objectives is called a(n):',
      ['Threat', 'Opportunity', 'Known-known', 'Management reserve'],
      'b',
      'An opportunity is a risk with a positive impact on project objectives. A threat is a negative risk.',
      'Do not treat every risk as a threat. Positive risk is still risk.'
    ),
    mcq(
      'ch11-t-q2',
      'A risk that has been identified but whose probability and impact are not known should be covered by a:',
      ['Management reserve', 'Contingency reserve', 'Risk premium', 'Change control board'],
      'b',
      'Known-unknowns are identified risks that may or may not happen. A contingency reserve is established to pay for them if they are triggered. Management reserves cover unknown-unknowns.',
      'The contingency reserve is for known-unknowns; the management reserve is for unknown-unknowns.'
    ),
    mcq(
      'ch11-t-q3',
      'Which technique gathers anonymous expert opinions, summarises them and recirculates them until consensus is reached?',
      ['Brainstorming', 'SWOT analysis', 'Delphi technique', 'Root cause analysis'],
      'c',
      'The Delphi technique uses anonymous expert input to avoid groupthink and prejudice. Brainstorming is usually a facilitated group session, and SWOT examines strengths, weaknesses, opportunities and threats.',
      'Delphi is anonymous and iterative. Brainstorming is not necessarily anonymous.'
    ),
    mcq(
      'ch11-t-q4',
      'Which of the following is a strategy specifically used for opportunities?',
      ['Transfer', 'Mitigate', 'Exploit', 'Avoid'],
      'c',
      'Exploit, share and enhance are opportunity strategies. Avoid, transfer, mitigate, accept and research are threat strategies.',
      'Exploit is positive risk; avoid, transfer and mitigate are negative risk strategies.'
    ),
    mcq(
      'ch11-t-q5',
      'A key supplier has stopped returning calls and emails. This is best described as a:',
      ['Risk event', 'Trigger condition', 'Residual risk', 'Secondary risk'],
      'b',
      'A trigger condition is an early warning that a risk event may be about to happen. The supplier behaviour signals that a supply risk is likely.',
      'The behaviour is a warning sign, not necessarily the risk event itself.'
    ),
    mcq(
      'ch11-t-q6',
      'Which analysis prioritises risks by combining probability of occurrence and impact?',
      ['Qualitative risk analysis', 'Quantitative risk analysis', 'Sensitivity analysis', 'Monte Carlo simulation'],
      'a',
      'Qualitative analysis assesses probability and impact to categorise and prioritise risks. Quantitative analysis puts detailed numerical estimates on overall impact.',
      'Qualitative prioritises; quantitative quantifies the overall effect.'
    ),
    tf(
      'ch11-t-q7',
      'A known-known is a risk that should be covered by a management reserve.',
      false,
      'A known-known can be planned and managed with certainty, so it is not a risk. Management reserves cover unknown-unknowns; contingency reserves cover known-unknowns.',
      'Known-knowns are planned work, not risks.'
    ),
    tf(
      'ch11-t-q8',
      'Transferring a risk removes the risk from the project.',
      false,
      'Transfer moves the risk to another party, for example through insurance or a contract. The risk still exists; it has not been eliminated.',
      'Transfer moves risk; avoid eliminates it.'
    ),
    tf(
      'ch11-t-q9',
      'SWOT analysis identifies opportunities as well as threats.',
      true,
      'SWOT examines strengths, weaknesses, opportunities and threats, so it can reveal positive risks as well as negative ones.',
      'Do not assume risk identification is only about problems.'
    ),
    tf(
      'ch11-t-q10',
      'A risk should have one named owner so that accountability is clear.',
      true,
      'One accountable owner is responsible for monitoring the risk and ensuring the agreed response is carried out. Shared ownership without a named person often produces no action.',
      'Many people can contribute, but one person should own the risk.'
    ),
    shortQ(
      'ch11-t-q11',
      3,
      'Distinguish between a threat and an opportunity, and give one example of each.',
      'A threat is a negative risk that would adversely affect one or more project objectives if it occurs; for example, a key supplier going bankrupt. An opportunity is a positive uncertainty that would help one or more objectives; for example, a new technology becoming available earlier than expected, which could shorten the schedule.',
      [
        mp('Defines a threat as a negative risk', ['negative', 'threat', 'adversely', 'harm'], 1),
        mp('Defines an opportunity as a positive risk', ['positive', 'opportunity', 'benefit'], 1),
        mp('Gives a valid example of each', ['example', 'supplier', 'technology', 'schedule'], 1)
      ],
      'The key distinction is the direction of the impact on project objectives, not the size of the uncertainty.',
      'Do not say an opportunity is “not a risk”. It is a positive risk.'
    ),
    shortQ(
      'ch11-t-q12',
      3,
      'Explain the difference between a contingency reserve and a management reserve.',
      'A contingency reserve is held for known-unknowns: risks that have been identified but may or may not happen. It is included in the cost baseline for accepted risks with planned responses. A management reserve is held for unknown-unknowns: true uncertainties that cannot be envisioned. Its size is often negotiated based on the confidence stakeholders have in their understanding of the project.',
      [
        mp('Contingency reserve for known-unknowns', ['contingency', 'known-unknown', 'identified'], 1),
        mp('Management reserve for unknown-unknowns', ['management reserve', 'unknown-unknown', 'unforeseen'], 1),
        mp('Explains how the management reserve is sized or used', ['negotiat', 'confidence', 'baseline'], 1)
      ],
      'Use the type of uncertainty to choose the reserve: known-unknown → contingency; unknown-unknown → management.',
      'Do not use the terms interchangeably.'
    ),
    shortQ(
      'ch11-t-q13',
      3,
      'Name and briefly explain three of the four categories of project success measures.',
      'Any three of: meeting agreements (cost, schedule and specifications met, including performance and quality); customer’s success (needs met, deliverables used, customer satisfied); performing organization’s success (market share, new products, new technology); project team’s success (loyalty, development, satisfaction, reward and recognition).',
      [
        mp('Meeting agreements explained', ['agreement', 'cost', 'schedule', 'specification'], 1),
        mp('Customer success explained', ['customer', 'needs', 'satisfied', 'used'], 1),
        mp('Performing organisation or team success explained', ['market share', 'new product', 'loyalty', 'development', 'recognition'], 1)
      ],
      'The four measures show that success is broader than simply finishing on time and on budget.',
      'Do not give only the names; add a brief explanation.'
    ),
    shortQ(
      'ch11-t-q14',
      3,
      'Describe two information-gathering techniques that a project team can use to identify risks.',
      'Two of: brainstorming, where a facilitator asks “What could go wrong?” for each WBS activity and every idea is recorded; interviews and surveys, which are useful for large, complex and uncertain projects; SWOT analysis, which examines strengths, weaknesses, opportunities and threats; Delphi, where experts give anonymous input that is summarised and recirculated to reach consensus. The answer should explain how the technique works, not only name it.',
      [
        mp('Names and explains brainstorming', ['brainstorm', 'what could go wrong', 'wbs', 'ideas'], 1.5),
        mp('Names and explains a second technique', ['interview', 'survey', 'swot', 'delphi', 'anonymous'], 1.5)
      ],
      'Information-gathering techniques differ in whether they are group-based, anonymous, or document-based.',
      'A list of technique names without an explanation earns only partial credit.'
    ),
    caseQ(
      'ch11-t-q15',
      12,
      'Read the case and answer parts (a) to (d).',
      'A university is migrating its student records to a new cloud system over one semester. The project must finish before registration opens. The team depends on a cloud vendor, an internal database team and a temporary data-cleansing contractor. The vendor has recently changed account managers, the database team is also supporting another major project, and the contractor’s work is difficult to verify until the data is loaded.',
      '(a) Identify three risks and classify each by impact category. (b) Score each risk qualitatively and rank them. (c) Choose a response strategy for the two highest-ranked risks and justify each. (d) Identify one opportunity and an appropriate strategy for it.',
      [
        mp('Identifies three relevant risks', ['vendor', 'database', 'contractor', 'registration', 'data'], 3),
        mp('Classifies each risk by an impact category', ['schedule', 'cost', 'scope', 'quality', 'resource'], 3),
        mp('Scores probability and impact and ranks the risks', ['probability', 'impact', 'score', 'rank'], 3),
        mp('Chooses and justifies responses for the top two risks', ['mitigate', 'transfer', 'avoid', 'accept', 'research', 'contingency'], 3)
      ],
      'The best answers connect each risk to a category, a probability-impact score and a response that is proportionate to the score. For example, vendor instability could be mitigated by early onboarding and a backup vendor, transferred partly through a service-level agreement, or accepted with a contingency if the residual risk is small. The opportunity might be automating part of the data cleansing, which could be exploited by assigning a developer to build the automation early.',
      'Do not list risks without categorising and scoring them. The question asks for analysis, not just identification.'
    ),
    essayQ(
      'ch11-t-q16',
      8,
      'You are managing a construction project that will rely mostly on independent contractors. Explain how you would plan risk responses, including the type of contract you would prefer and at least three response strategies.',
      'A fixed-price contract is often preferred when the scope is sufficiently defined, because it transfers cost risk to the contractor; the contractor will charge a higher price for accepting that risk. However, if the scope is incomplete, a cost-plus arrangement may be more suitable because it keeps more risk with the owner. The plan should combine strategies: transfer defined risks through contracts and insurance; mitigate key risks by prequalifying contractors, scheduling critical work early and building redundancy; avoid risks by changing the method or scope where the risk outweighs the benefit; accept minor residual risks with a contingency reserve and clear triggers; and research uncertain ground conditions or technical assumptions through surveys or prototypes. Each risk should have one owner, a trigger and a response recorded in the risk register.',
      [
        mp('Selects a contract type and explains the risk transfer trade-off', ['fixed-price', 'cost-plus', 'transfer', 'risk'], 2),
        mp('Explains mitigation with a concrete construction example', ['mitigate', 'prequalify', 'redundancy', 'schedule'], 2),
        mp('Explains avoidance, acceptance or research appropriately', ['avoid', 'accept', 'contingency', 'research', 'prototype'], 2),
        mp('Shows how responses are recorded and owned', ['risk register', 'owner', 'trigger', 'response'], 2)
      ],
      'A strong answer recognises that contracts are risk-transfer instruments, not risk-elimination instruments. The choice depends on how well the scope is defined and how much risk the organisation can bear.',
      'Do not claim that fixed-price contracts eliminate risk; they transfer it and usually cost more.'
    ),
    essayQ(
      'ch11-t-q17',
      8,
      'Describe the contents of a risk register and explain why each major field is included.',
      'The risk register records the risk description (the event), cause and impact category (scope, schedule, cost, quality, business, technology, communications or procurement); probability, impact and risk score; response strategy; risk owner; trigger condition; and any schedule, budget or resource changes needed. The description and cause explain what could happen and why; the category helps group and analyse risks; probability, impact and score support prioritisation; the response states what will be done; the owner creates accountability; the trigger tells the team when to act; and the plan changes show the consequences for the project.',
      [
        mp('Describes the risk event, cause and category', ['description', 'cause', 'category'], 2),
        mp('Explains probability, impact and score', ['probability', 'impact', 'score', 'priority'], 2),
        mp('Explains response, owner and trigger', ['response', 'owner', 'trigger'], 2),
        mp('Explains the purpose of recording plan changes', ['schedule', 'budget', 'resource', 'change'], 2)
      ],
      'The register is a living management tool, not a one-time list. Each field exists to support a decision or an accountability.',
      'Do not list fields without saying why they are useful.'
    )
  ]
};
