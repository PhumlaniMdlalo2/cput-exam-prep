import type { ObjectiveBank } from '../types';
import { mcq, tf } from '../../questionHelpers';

export const ch15Bank: ObjectiveBank = {
  mcq: [
    mcq(
      'ch15-o-m1',
      'Which activity formally accepts the completed project deliverables?',
      ['Control quality', 'Validate scope', 'Manage quality', 'Control scope'],
      'b',
      'Validate scope is the formal acceptance of completed deliverables by the customer or sponsor. Control quality verifies correctness before acceptance.',
      'Validation is acceptance; control is verification.'
    ),
    mcq(
      'ch15-o-m2',
      'A project typically moves into the closing stage when:',
      [
        'The project charter is signed',
        'Deliverables have been formally accepted or the project is terminated early',
        'The first risk is identified',
        'The project budget is approved'
      ],
      'b',
      'Closing begins after formal acceptance of the deliverables, or when the project is terminated early. Validate scope is the transition from executing to closing.',
      'Closing is not triggered by the charter or budget approval.'
    ),
    mcq(
      'ch15-o-m3',
      'Which document is described as an instruction manual for how the customer should use the deliverables?',
      ['Risk register', 'Transition plan', 'Punch list', 'Closeout report'],
      'b',
      'A transition plan explains how the customer should use the deliverables once the project team has finished. It supports maintenance, upgrades and training.',
      'The closeout report summarises the project; the transition plan guides use.'
    ),
    mcq(
      'ch15-o-m4',
      'Which of the following is a cost of nonconformance?',
      ['Training', 'Quality audit', 'Warranty repairs', 'Field testing'],
      'c',
      'Warranty repairs are an external failure cost, part of the cost of nonconformance. Training, quality audits and field testing are conformance costs.',
      'Conformance costs prevent or detect defects; nonconformance costs arise because defects occurred.'
    ),
    mcq(
      'ch15-o-m5',
      'The first step in an end-of-project lessons-learned session is to:',
      [
        'Vote on the top five issues',
        'Email participants and ask for the major issues',
        'Write the closeout report',
        'Celebrate completion'
      ],
      'b',
      'The steps are: email participants for major issues; at the meeting each person writes top issues where all can see; the group votes on the top five or ten; then discuss each issue and how to avoid it next time.',
      'Voting happens after the issues are surfaced.'
    ),
    mcq(
      'ch15-o-m6',
      'A termination for default often results from:',
      [
        'A buyer’s change in priorities',
        'A problem with cost, schedule or performance, or loss of confidence in the contractor',
        'A mutual agreement to stop the project',
        'The project finishing early'
      ],
      'b',
      'Termination for default occurs for externally executed projects and often results from cost, schedule or performance problems, or a loss of confidence in the contractor.',
      'Convenience is about the buyer’s changing circumstances.'
    ),
    mcq(
      'ch15-o-m7',
      'Which of the following is a post-project activity?',
      [
        'Approving the project charter',
        'Reassigning workers and helping them find follow-on work',
        'Creating the WBS',
        'Performing qualitative risk analysis'
      ],
      'b',
      'Reassigning workers, celebrating success, providing ongoing support and ensuring benefits are realised are post-project activities.',
      'Charter, WBS and risk analysis happen earlier.'
    ),
    mcq(
      'ch15-o-m8',
      'In an Agile project, scope is typically validated:',
      [
        'Only at the end of the project',
        'At the end of every iteration and release',
        'Only when the project is terminated',
        'Only by the project manager'
      ],
      'b',
      'Agile teams validate scope at every iteration and release when they demonstrate working items to the customer. This provides frequent feedback and early acceptance.',
      'Agile validation is frequent, not end-only.'
    ),
    mcq(
      'ch15-o-m9',
      'A “money for nothing” clause in an Agile contract allows the customer to:',
      [
        'Receive all deliverables for free',
        'Terminate early and pay for the work done so far',
        'Change scope without any cost',
        'Avoid validating scope'
      ],
      'b',
      'Money for nothing allows the customer to terminate early and pay for the work done so far rather than being locked into the full contract. Change for free is a separate clause about swapping scope.',
      'Money for nothing is about early termination, not free deliverables.'
    ),
    mcq(
      'ch15-o-m10',
      'Why is closing important even when a project is terminated early?',
      [
        'It avoids the need to communicate with stakeholders',
        'It formally disposes of partial deliverables, settles contracts, reassigns people, captures lessons and archives records',
        'It guarantees the project will restart',
        'It replaces the need for a transition plan'
      ],
      'b',
      'Early termination still requires closure: accept or dispose of partial deliverables, settle payments and contracts, reassign people, capture lessons, archive records and communicate with stakeholders.',
      'Early termination is not an excuse to skip closure.'
    )
  ],
  tf: [
    tf(
      'ch15-o-t1',
      'Validate scope is the formal acceptance of completed deliverables.',
      true,
      'Validate scope confirms that the completed deliverables are accepted by the customer or sponsor. It can occur for interim deliverables and for final deliverables.',
      'Validation is formal acceptance, not just inspection.'
    ),
    tf(
      'ch15-o-t2',
      'The punch list records work items found during final inspection that still need to be completed.',
      true,
      'A punch list allows closure to proceed with known, owned and dated outstanding items.',
      'The punch list is a controlled list of remaining work.'
    ),
    tf(
      'ch15-o-t3',
      'A project manager should refer only to the WBS to confirm that all planned work is complete.',
      false,
      'The project manager should refer to the charter, scope statement, WBS, schedule and all communications plans to verify that everything committed to was actually done.',
      'Use several planning documents, not only the WBS.'
    ),
    tf(
      'ch15-o-t4',
      'A termination for convenience usually requires the contractor to absorb all costs incurred.',
      false,
      'A convenience termination normally entitles the contractor to be reimbursed for costs incurred, and the customer takes ownership of the deliverables as they currently exist.',
      'Convenience is not the contractor’s fault; reimbursement is typical.'
    ),
    tf(
      'ch15-o-t5',
      'If parties cannot agree on a mutual early termination through direct negotiation, they may use legal action or alternative dispute resolution.',
      true,
      'Direct negotiation is preferred, but legal action or alternative dispute resolution can be used to reach a settlement if negotiation fails.',
      'There is a path beyond direct negotiation.'
    ),
    tf(
      'ch15-o-t6',
      'Lessons learned should be captured only at the end of the project.',
      false,
      'Capture lessons early and often, at milestones and in meetings, because memory fades and people leave. An end-of-project session is still useful, but it should not be the only capture point.',
      'Early and often is better than end-only.'
    ),
    tf(
      'ch15-o-t7',
      'Tacit knowledge should be captured before team members move on.',
      true,
      'Tacit knowledge is often lost when people leave. Capture it before team members move to other projects.',
      'Tacit knowledge is personal and hard to document later.'
    ),
    tf(
      'ch15-o-t8',
      'A closeout report normally includes lessons learned and a review of the project’s original justification.',
      true,
      'The closeout report includes a summary status, lessons learned and often a review of the original justification. Records must be stored accessibly.',
      'The closeout report is more than a final budget.'
    ),
    tf(
      'ch15-o-t9',
      'Helping team members secure follow-on work is an ethical and practical part of project closing.',
      true,
      'Treating team members well builds a reputation that makes future recruitment easier. Helping good workers find follow-on work is one of the most important late-project tasks.',
      'Closing includes caring for the team, not only the deliverables.'
    ),
    tf(
      'ch15-o-t10',
      'Celebrating completion can help the team accept that the project is over and limit additional work.',
      true,
      'Celebration recognises effort and results, marks the transition, and signals that additional work on the project should be limited.',
      'Celebration supports closure, not just morale.'
    ),
    tf(
      'ch15-o-t11',
      'Plan-driven projects typically capture lessons learned at the end of a phase or project.',
      true,
      'Plan-driven projects often capture lessons at the end of a phase or project and add them to a repository. Agile projects use retrospectives each iteration.',
      'The timing differs between the approaches.'
    ),
    tf(
      'ch15-o-t12',
      'Agile teams are often reassigned as a unit at the end of a project.',
      true,
      'The comparison table says Agile teams are reassigned as a unit, while plan-driven team members are often individually reassigned or disbanded.',
      'Do not assume individual reassignment in Agile.'
    ),
    tf(
      'ch15-o-t13',
      'A transition plan helps ensure that maintenance, upgrades and training take place.',
      true,
      'The transition plan supports the move into service or operational use and covers quality during transition, maintenance, upgrades and training.',
      'The transition plan is about successful operational handover.'
    ),
    tf(
      'ch15-o-t14',
      'Project benefits are realised automatically once the deliverables are handed over.',
      false,
      'Benefits are not automatic. Many organisations follow up with customers weeks or months after handover to confirm that the deliverables are being used and that the intended benefits are realised.',
      'Handover is not the same as benefits realisation.'
    ),
    tf(
      'ch15-o-t15',
      'A project manager can help head off early termination by finding other stakeholders or reducing internal costs.',
      true,
      'Two avenues are: find other stakeholders who can provide funds to keep the project viable, even with reduced scope; and look internally for ways to continue at lower cost.',
      'Early termination can sometimes be avoided through stakeholder and cost action.'
    )
  ]
};
