import type { Question } from '../../../types/content';
import { caseQ, essayQ, mp } from '../../questionHelpers';

export const ch15Written: Question[] = [
  essayQ(
    'w15-01',
    10,
    'Explain the validate scope process and distinguish it from control quality.',
    'Validate scope is the process of formalising acceptance of completed project deliverables by the customer or sponsor. It involves verifying that the deliverables meet the agreed requirements, obtaining formal sign-off, documenting acceptance and feeding accepted deliverables into closing. It can occur at the end of each phase or iteration as well as at the end of the project. Control quality is concerned with verifying that the deliverable is correct and meets quality specifications; validate scope is concerned with the customer’s formal acceptance. Control quality normally precedes validate scope. A deliverable can pass quality control but still not be accepted if it does not meet the customer’s requirements.',
    [
      mp('Validate scope formalises acceptance by the customer or sponsor', ['validate scope', 'formal', 'acceptance'], 2),
      mp('Verifies deliverables against agreed requirements and records sign-off', ['requirement', 'sign-off', 'accept'], 2),
      mp('Can occur at phase, iteration and project end', ['phase', 'iteration', 'end'], 2),
      mp('Control quality verifies correctness and quality specifications', ['control quality', 'correct', 'quality', 'specification'], 2),
      mp('Quality control precedes acceptance; acceptance is broader than correctness', ['precede', 'acceptance', 'broader', 'customer'], 2)
    ],
    'Validation is about acceptance; quality control is about correctness.',
    'Do not treat validate scope and control quality as the same process.'
  ),
  essayQ(
    'w15-02',
    10,
    'Describe the main activities involved in closing a project and the purpose of a closeout report.',
    'Closing includes confirming that all work is complete, validating and obtaining acceptance of deliverables, resolving outstanding issues and punch-list items, settling contracts and payments, releasing resources, reassigning team members, capturing lessons learned, archiving project records and communicating closure to stakeholders. The closeout report summarises the project’s outcomes against its objectives, final scope, schedule and cost performance, key issues and lessons, and whether the original justification was met. It provides a permanent record for the organisation and supports benefits realisation and future projects.',
    [
      mp('Confirms completion and obtains formal acceptance', ['complete', 'acceptance', 'deliverable'], 2),
      mp('Resolves punch-list items, contracts and payments', ['punch list', 'contract', 'payment'], 2),
      mp('Releases resources and reassigns team members', ['release', 'reassign', 'resource'], 2),
      mp('Captures lessons, archives records and communicates closure', ['lesson', 'archive', 'communicate'], 2),
      mp('Closeout report records outcomes, performance and justification', ['closeout report', 'outcome', 'performance', 'justification'], 2)
    ],
    'Closing is a process, not a single meeting or report.',
    'Do not omit contract settlement, records archiving or team reassignment.'
  ),
  essayQ(
    'w15-03',
    10,
    'Explain the types of early project termination and the activities that still must be completed.',
    'Early termination can occur through mutual agreement, termination for convenience or termination for default. Mutual agreement is a negotiated stop that both parties accept. Termination for convenience occurs when the buyer decides to stop for its own reasons and normally reimburses the contractor for costs incurred. Termination for default usually results from cost, schedule or performance problems, or loss of confidence in the contractor. Regardless of type, the project must still validate or dispose of partial deliverables, settle payments and contracts, reassign people, capture lessons, archive records, communicate with stakeholders and update benefits expectations.',
    [
      mp('Mutual agreement is a negotiated stop accepted by both parties', ['mutual', 'agreement', 'negotiat'], 2),
      mp('Convenience is the buyer’s decision with reimbursement of costs', ['convenience', 'buyer', 'reimburse'], 2),
      mp('Default results from performance problems or loss of confidence', ['default', 'performance', 'confidence'], 2),
      mp('Partial deliverables must be accepted or disposed of', ['partial', 'deliverable', 'dispose', 'accept'], 2),
      mp('Contracts, people, lessons, records and stakeholders must still be closed out', ['contract', 'reassign', 'lesson', 'archive'], 2)
    ],
    'Early termination changes the scope of closure but does not remove the need for closure.',
    'Do not assume early termination means no closing activities are required.'
  ),
  essayQ(
    'w15-04',
    10,
    'Explain how lessons learned and knowledge management support project closing and future projects.',
    'Lessons learned capture what worked, what did not and what should be done differently. They should be captured early and often, at milestones and in meetings, because memory fades and people leave. End-of-project sessions are still useful. A practical process is to ask participants for major issues in advance, have each person write top issues, vote on the top five or ten, then discuss each issue and how to avoid or repeat it. Knowledge management also captures tacit knowledge before people move on and stores explicit knowledge in an accessible repository. Lessons should be shared, not shelved, so future projects benefit.',
    [
      mp('Captures what worked, what failed and what to change', ['what worked', 'what did not', 'differently', 'lesson'], 2),
      mp('Captured early and often, not only at the end', ['early', 'often', 'milestone', 'not only'], 2),
      mp('Uses a structured process to surface, vote on and discuss issues', ['process', 'vote', 'discuss', 'issue'], 2),
      mp('Captures tacit knowledge before people leave', ['tacit', 'before', 'leave'], 2),
      mp('Stores explicit knowledge accessibly and shares it with future projects', ['explicit', 'repository', 'share', 'future'], 2)
    ],
    'A lessons-learned document that nobody reads is not knowledge management.',
    'Do not limit lessons learned to a single end-of-project meeting.'
  ),
  caseQ(
    'w15-05',
    10,
    'A project has delivered its main system, but the customer has listed several minor defects, the support team has not been trained, two contractors are still on site and the project sponsor wants to close immediately.',
    'Analyse the case and recommend how the project manager should close the project properly.',
    'The project manager should not close immediately. First, validate scope and agree a punch list with owners and dates for the minor defects. Confirm formal acceptance of the main system and the remaining items. Complete the transition plan, including training and support handover, so the customer can operate and maintain the system. Settle contractor contracts and payments before releasing them. Reassign team members and release resources. Capture lessons learned, archive records and issue the closeout report. Confirm how benefits will be measured after handover and communicate closure to stakeholders.',
    [
      mp('Does not close immediately; validates scope and agrees a punch list', ['punch list', 'validate', 'not close'], 2),
      mp('Obtains formal acceptance and closes minor defects with owners and dates', ['acceptance', 'defect', 'owner', 'date'], 2),
      mp('Completes the transition plan, training and support handover', ['transition plan', 'training', 'support', 'handover'], 2),
      mp('Settles contracts and reassigns or releases people', ['contract', 'reassign', 'release'], 2),
      mp('Captures lessons, archives records, reports closure and plans benefits review', ['lesson', 'archive', 'closeout', 'benefit'], 2)
    ],
    'A strong answer protects the customer, the team and the organisation rather than rushing closure.',
    'Do not recommend closing with unresolved defects, untrained support staff or open contracts.'
  )
];
