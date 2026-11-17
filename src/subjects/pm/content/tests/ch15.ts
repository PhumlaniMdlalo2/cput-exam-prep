import type { ChapterTest } from '../../types/content';
import { caseQ, essayQ, mcq, mp, shortQ, tf } from '../questionHelpers';

export const chapter15Test: ChapterTest = {
  id: 'ch15-test',
  chapterId: 'ch15',
  title: 'Chapter 15 test — Project Closing',
  description:
    'A 50-mark test covering validate scope, early termination, lessons learned, post-project activities and Agile closing.',
  instructions: [
    'Answer all questions.',
    'Section A is automatically marked.',
    'For written answers, use the marking guide in the memo to check your reasoning.',
    'Written answers can be adjusted after submission if your wording differs from the model answer.'
  ],
  timeLimitMinutes: 60,
  questions: [
    mcq(
      'ch15-t-q1',
      'Validate scope is best defined as:',
      [
        'Inspecting deliverables to find defects',
        'Formally accepting the completed project deliverables',
        'Closing the project budget',
        'Reassigning the project team'
      ],
      'b',
      'Validate scope is the formal acceptance of completed deliverables by the customer or sponsor. Inspection for defects belongs to control quality.',
      'Validation is acceptance, not inspection.'
    ),
    mcq(
      'ch15-t-q2',
      'The punch list is:',
      [
        'A list of team members to reassign',
        'A list of work items found during final inspection that still need to be completed',
        'A list of lessons learned',
        'A list of contract penalties'
      ],
      'b',
      'The punch list records work items identified during a final inspection that need to be completed. It allows closure to proceed with known, owned and dated outstanding items.',
      'The punch list is not the same as the lessons-learned log.'
    ),
    mcq(
      'ch15-t-q3',
      'Which statement describes a termination for convenience of the buyer?',
      [
        'The contractor has failed to meet cost, schedule or performance requirements.',
        'Both parties agree to stop the project and negotiate a settlement.',
        'The buyer invokes a contract clause because of changed priorities, reimburses the contractor for costs incurred and takes ownership of the deliverables as they exist.',
        'The project team is reassigned to another project without closing the current one.'
      ],
      'c',
      'A termination for convenience is invoked when the buyer’s circumstances or priorities change. The contract clause normally provides for reimbursement of costs incurred and transfer of the deliverables as they currently exist.',
      'Default is about contractor performance; convenience is about the buyer’s changing needs.'
    ),
    mcq(
      'ch15-t-q4',
      'A termination for default is most likely to occur when:',
      [
        'The buyer decides to change priorities',
        'The contractor has cost, schedule or performance problems, or the buyer has lost confidence in the contractor',
        'Both parties agree to end the project early',
        'The project is completed on time and on budget'
      ],
      'b',
      'Termination for default occurs for projects executed externally and often results from cost, schedule or performance problems, or from a loss of confidence in the contractor.',
      'Mutual agreement is a negotiated stop, not a default.'
    ),
    mcq(
      'ch15-t-q5',
      'When should lessons learned be captured?',
      [
        'Only at the final project meeting',
        'Early and often, at milestones and in meetings, before memory fades and people leave',
        'Only when the project fails',
        'Only by the project sponsor'
      ],
      'b',
      'Capture lessons early and often, at milestones and in meetings, because memory fades on long projects. Ask the core team first, then all stakeholders, and capture tacit knowledge before people move on.',
      'Do not wait until the end; by then people and knowledge may be gone.'
    ),
    mcq(
      'ch15-t-q6',
      'A typical closeout report includes:',
      [
        'Only the final budget',
        'A summary status of the project, lessons learned and a review of the original justification',
        'Only the team’s performance ratings',
        'Only the customer’s complaints'
      ],
      'b',
      'The closeout report normally includes a summary status from progress reports, lessons learned and a review of the project’s original justification. Records must be stored in a workable, accessible format.',
      'The closeout report is broader than a financial statement.'
    ),
    tf(
      'ch15-t-q7',
      'Agile projects validate scope only at the end of the project.',
      false,
      'Agile projects validate scope at every iteration and release when the team demonstrates working items to the customer. Plan-driven projects typically validate at the end of the project or phase.',
      'Frequent validation is a defining feature of Agile closing.'
    ),
    tf(
      'ch15-t-q8',
      'Plan-driven teams are often reassigned individually, while Agile teams are often reassigned as a unit.',
      true,
      'The comparison table in the notes says plan-driven team members are individually reassigned or disbanded, while the Agile team is reassigned as a unit.',
      'Do not assume the team handling is identical in both approaches.'
    ),
    tf(
      'ch15-t-q9',
      'Celebrating completion benefits only the team, not the project manager.',
      false,
      'Celebration benefits the project manager too: it builds a reputation for treating people well, makes future recruitment easier, provides closure, recognises effort and reduces stress.',
      'The project manager also gains reputation and future team-building benefits.'
    ),
    tf(
      'ch15-t-q10',
      'A transition plan is similar to an instruction manual for using the project deliverables.',
      true,
      'A project transition plan explains how the customer should use the deliverables once the project team has completed its work. It helps avoid transition quality problems and supports maintenance, upgrades and training.',
      'The transition plan is for the customer’s use, not only for the project team.'
    ),
    shortQ(
      'ch15-t-q11',
      3,
      'Name and briefly explain the three main ways a project can be terminated early.',
      'Mutual agreement: both parties agree to stop and negotiate deliverables, compensation and outstanding issues; if negotiation fails, legal action or alternative dispute resolution may be used. Default: a problem with cost, schedule or performance, or the buyer loses confidence in the contractor. Convenience of the buyer: the buyer’s circumstances or priorities change, invoking a contract clause that normally reimburses the contractor for costs incurred and transfers the deliverables as they exist.',
      [
        mp('Mutual agreement explained', ['mutual', 'agree', 'negotiat', 'settlement'], 1),
        mp('Default explained', ['default', 'cost', 'schedule', 'performance', 'confidence'], 1),
        mp('Convenience explained', ['convenience', 'buyer', 'contract clause', 'reimburse'], 1)
      ],
      'The three routes differ in who initiates, why, and what the contract requires.',
      'Do not confuse default with convenience.'
    ),
    shortQ(
      'ch15-t-q12',
      3,
      'What is the purpose of a punch list, and how should it be managed?',
      'The punch list records work items identified during a final inspection that need to be completed. It allows the project to move toward closure without pretending that every item is finished. Each item should have an owner, a completion date and a clear acceptance condition, and the list should be tracked until the customer accepts the remaining work.',
      [
        mp('Records work found during final inspection', ['punch list', 'inspection', 'work items'], 1),
        mp('Allows closure with known outstanding work', ['closure', 'close', 'outstanding', 'accept'], 1),
        mp('Assigns owner and completion date', ['owner', 'date', 'track', 'acceptance'], 1)
      ],
      'A punch list is a controlled closure tool, not a way to hide unfinished work.',
      'Do not describe the punch list as a list of risks.'
    ),
    shortQ(
      'ch15-t-q13',
      3,
      'Describe three ways in which lessons learned can be disseminated and used.',
      'Three of: assign one person to own and maintain the lessons-learned database, comparing, combining, adding or removing lessons; require submitters to provide contact details so future teams can ask questions; code lessons by project type, life-cycle stage, issue and knowledge area so they can be searched; transfer lessons informally through conversations, unscheduled meetings or shared team members; include lessons in the closeout report and make records accessible for future projects and audits.',
      [
        mp('Database owner or repository', ['database', 'owner', 'repository', 'wiki'], 1),
        mp('Coding or searchable classification', ['cod', 'categor', 'search', 'project type'], 1),
        mp('Informal transfer or contact details', ['informal', 'conversation', 'contact', 'meeting'], 1)
      ],
      'Collecting lessons is not enough; they must be stored, classified, shared and used.',
      'Do not say “put them in a report” without explaining how others will find and use them.'
    ),
    shortQ(
      'ch15-t-q14',
      3,
      'How do plan-driven and Agile projects differ in when scope is validated and when lessons learned are captured?',
      'Plan-driven projects typically validate scope at the end of the project or phase and capture lessons learned at the end of a phase or project, adding them to a repository. Agile projects validate scope at the end of every iteration and release through demonstrations, and hold retrospectives at the end of every iteration. Agile therefore gets earlier and more frequent acceptance and learning.',
      [
        mp('Plan-driven validation and lessons at the end', ['plan-driven', 'end', 'phase', 'repository'], 1),
        mp('Agile validation each iteration and release', ['agile', 'iteration', 'release', 'demonstration'], 1),
        mp('Agile retrospectives each iteration', ['retrospective', 'iteration', 'frequent'], 1)
      ],
      'The difference is timing and frequency, not whether validation and learning happen at all.',
      'Do not say Agile does not validate scope.'
    ),
    essayQ(
      'ch15-t-q15',
      8,
      'Compare project closing in plan-driven and Agile approaches. Give two similarities and two differences.',
      'Similarities: both approaches validate scope so the customer can formally accept deliverables; both use a transition plan to move deliverables into operational use; both capture lessons learned, release or reassign team members, celebrate completion and pursue benefits realisation. Differences: plan-driven projects validate scope at the end of the project or phase and capture lessons at the end, while Agile projects validate at every iteration and release and hold retrospectives every iteration; plan-driven team members are often individually reassigned or disbanded, while Agile teams are often reassigned as a unit; Agile early termination can use money-for-nothing or change-for-free contract clauses, while plan-driven termination is by mutual agreement, default or convenience.',
      [
        mp('Similarity: validate scope and formal acceptance', ['validate', 'accept', 'scope'], 2),
        mp('Similarity: transition plan and lessons/benefits', ['transition', 'lesson', 'benefit'], 2),
        mp('Difference: timing of validation and lessons', ['end', 'iteration', 'release', 'retrospective'], 2),
        mp('Difference: team reassignment or termination clauses', ['team', 'unit', 'individual', 'money for nothing', 'change for free'], 2)
      ],
      'A strong answer uses the comparison table: scope validation, early termination, knowledge management, team reassignment and ongoing support.',
      'Do not give only differences; the question asks for similarities too.'
    ),
    essayQ(
      'ch15-t-q16',
      8,
      'A project is in its final stage and one deliverable will not be completed before the project is closed. What options does the project manager have? Recommend an approach.',
      'Options include: complete the deliverable before closure if the customer requires it and time allows; place the remaining work on a punch list with an owner and completion date; move the work to another project or a later phase; negotiate reduced scope or partial acceptance through formal change control; document the outstanding item, its risk and its owner and obtain customer agreement; or formally terminate or descope the item. The recommendation should depend on the customer’s needs, the contract, the risk of leaving the item open, and whether the benefit can still be realised. In most cases the project manager should discuss the options with the customer, document the agreed path, assign accountability and include the item in the closeout report.',
      [
        mp('Completes it or places it on a punch list', ['complete', 'punch list', 'owner', 'date'], 2),
        mp('Moves it to another project or phase', ['another project', 'phase', 'transfer'], 2),
        mp('Negotiates reduced scope or formal change', ['negotiat', 'reduced scope', 'change control', 'accept'], 2),
        mp('Documents the risk, owner and customer agreement', ['document', 'risk', 'owner', 'agreement', 'closeout'], 2)
      ],
      'The project manager should not simply close and hope the item is forgotten. The decision must be explicit, agreed and documented.',
      'Do not recommend hiding the incomplete deliverable or closing without customer agreement.'
    ),
    caseQ(
      'ch15-t-q17',
      12,
      'Read the case and answer parts (a) to (d).',
      'You are managing the creation of a new website for a nonprofit food bank. The site will let families find food distribution points, let volunteers sign up for shifts, and let donors make contributions. The project is nearing completion.',
      '(a) Identify the main deliverables of the project. (b) Explain the value and benefits the project provides to the client and other stakeholders. (c) Describe how you would validate scope and use a punch list. (d) Explain how you would capture lessons learned and celebrate completion.',
      [
        mp('Identifies website deliverables for families, volunteers and donors', ['website', 'directory', 'sign-up', 'donation', 'content'], 3),
        mp('Explains value and benefits to the food bank and stakeholders', ['value', 'benefit', 'access', 'volunteer', 'donation', 'mission'], 3),
        mp('Describes validation and punch list management', ['validate', 'accept', 'punch list', 'inspection', 'owner'], 3),
        mp('Describes lessons learned and celebration', ['lesson', 'retrospective', 'celebrat', 'recognis', 'feedback'], 3)
      ],
      'A strong answer connects deliverables to the mission: a public distribution-point finder, a volunteer shift sign-up flow, a secure donation flow, content management, analytics and a transition/training package. Value includes easier access to food, more volunteer sign-ups, more donations, reduced administrative effort and better data. Validation includes customer acceptance of each deliverable, a final inspection, a punch list with owners and dates, and formal written acceptance. Lessons learned should be captured at milestones and at the end, using a Plus-Delta or structured session; celebration should recognise staff, volunteers and the project team and mark the transition to ongoing support.',
      'Do not list only technical features. The case asks for value and benefits to the client and stakeholders.'
    )
  ]
};
