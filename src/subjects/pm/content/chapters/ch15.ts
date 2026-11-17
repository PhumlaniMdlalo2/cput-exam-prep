import type { Chapter } from '../../types/content';
import { callout, def, h3, h4, img, list, p, steps, table } from '../blocks';

export const chapter15: Chapter = {
  id: 'ch15',
  number: 15,
  title: 'Project Closing',
  subtitle: 'Validate scope, close the project and realise benefits',
  description:
    'How projects are accepted, closed or terminated early; how lessons are captured and used; and how plan-driven and Agile approaches differ at the end.',
  examFocus: [
    'Validate scope and the punch list',
    'Terminating projects early: mutual agreement, default and convenience',
    'Closing the project, the transition plan and the closeout report',
    'Capturing, disseminating and using lessons learned',
    'Celebrating completion and post-project activities',
    'Closing projects in Agile and plan-driven approaches'
  ],
  topics: ['Validate scope', 'Early termination', 'Lessons learned', 'Closeout', 'Benefits realisation'],
  sections: [
    {
      id: 'validate-scope',
      title: 'Validate scope',
      blocks: [
        def(
          'Validate scope',
          'Formally accepting the completed project deliverables. Stakeholders validate that scope is complete with interim deliverables throughout the project and with final deliverables near the end.'
        ),
        p(
          'A project moves into the closing stage once the deliverables have been formally accepted, or when the project is terminated early. Validate scope is the transition from executing to closing. The buyer provides the seller with formal written acceptance.'
        ),
        h3('What the project manager checks'),
        p(
          'The project manager must ensure that all project work has been successfully completed. Refer to the charter, scope statement, WBS, schedule and all communications plans to verify that everything the team committed to do is actually done.'
        ),
        p('A project closeout checklist can itemise project activities and deliverables.'),
        h3('The punch list'),
        def(
          'Punch list',
          'The list of work items that are identified during a final inspection that need to be completed.'
        ),
        p(
          'The punch list allows a project to move toward closure without pretending that every minor item is already finished. Each item should have an owner, a completion date and a clear acceptance condition.'
        ),
        callout(
          'exam',
          'Validate scope versus control quality',
          'Control quality verifies that a deliverable is correct, complete and meets its quality requirements. Validate scope is the customer’s or sponsor’s formal acceptance of the completed deliverables. Verification comes before acceptance.'
        )
      ]
    },
    {
      id: 'early-termination',
      title: 'Terminate projects early',
      blocks: [
        p('A project can be terminated early in three main ways.'),
        h3('Mutual agreement'),
        p(
          'If both parties agree to stop the project before its planned completion, a negotiated settlement may take place. Ideally, both parties agree which deliverables or partial deliverables go to the buyer, what compensation goes to the seller, and how outstanding issues are resolved.'
        ),
        p(
          'If agreement cannot be reached through direct negotiation, either legal action or alternative dispute resolution methods can be used to reach a settlement. It is in the best interest of all parties to finish the project as it stands and part as friends.'
        ),
        p(
          'Remaining deliverables need to be integrated into another project, stopped altogether, or continued as a lesser project or a further phase of the final project.'
        ),
        h3('Termination for default'),
        p(
          'Terminations for default occur for projects executed externally and often result from a problem with the project’s cost, schedule or performance. A buyer can also decide to terminate early because they have lost confidence in the contractor performing the project.'
        ),
        h3('Termination for convenience of the buyer'),
        p(
          'Sometimes the buyer faces unexpected difficulties or changing priorities. If a customer decides to terminate a project for convenience, it invokes a contract clause. The clause normally stipulates that the contractor is reimbursed for the money spent up to that point, and the customer takes ownership of the deliverables in whatever form they currently exist.'
        ),
        h3('Two avenues to head off early termination'),
        steps([
          'Look for other stakeholders in the customer organisation or elsewhere who can provide funds to keep the project viable, even if the scope has to be reduced.',
          'Look internally for ways of continuing the project at a lower cost.'
        ]),
        p(
          'A project manager who has been serious about managing stakeholder relationships is better placed to find these alternatives.'
        ),
        callout(
          'exam',
          'Three termination routes',
          'Mutual agreement = both parties negotiate. Default = a problem with cost, schedule or performance, or loss of confidence in the contractor. Convenience = the buyer’s priorities or circumstances change and a contract clause is invoked.'
        )
      ]
    },
    {
      id: 'close-project',
      title: 'Close the project',
      blocks: [
        def(
          'Closure of a project',
          'Ensuring that all work has been accomplished, all resources have been reassigned, and all documentation is complete.'
        ),
        p(
          'The project manager and team can review the project charter, WBS and schedule to make sure that everything promised was delivered.'
        ),
        h3('Write the transition plan'),
        def(
          'Project transition plan',
          'A sort of instruction manual for how the customer should use the project deliverables once the project team has completed its work.'
        ),
        p('A transition plan helps to ensure that:'),
        list([
          'Quality problems are avoided during the transition.',
          'The project deliverables move into their service or operational role.',
          'The needed maintenance, upgrades and training take place.'
        ]),
        h3('Knowledge management: capture lessons learned'),
        def(
          'Lessons learned',
          'The useful knowledge gained by project team members as they perform a project and then reflect on both the process of doing the work and the results that transpired.'
        ),
        p(
          'Lessons learned can include what worked well and should be copied or adapted for future work. They can also include areas where a different method may yield better results. Information about mistakes and what went wrong should be captured so that the team does not repeat them.'
        ),
        h4('Capture early and often'),
        list([
          'Capture lessons at milestones and in meetings, for example using a Plus-Delta format, because memory fades on long projects.',
          'Ask the core team first, then all stakeholders.',
          'Capture tacit knowledge from team members before they move on.',
          'Use a customer feedback form covering quality, schedule control, budget control, stakeholder relationships, communication, overall satisfaction and how to improve.'
        ]),
        h4('End-of-project lessons session'),
        steps([
          'Email participants and ask them for the major issues.',
          'At the meeting, each person writes their top issues where everyone can see them.',
          'The group votes on the top five issues, or the top ten on a large project.',
          'Go through each issue, asking leading questions about what went wrong and how to avoid it next time.'
        ]),
        h3('Disseminate and use lessons learned'),
        p(
          'Many organisations that do a good job with lessons learned assign one person to own and maintain the lessons-learned database. Every project team sends new lessons to this owner, who compares them with existing lessons and decides whether to modify, combine or add lessons, and possibly remove an old one.'
        ),
        p(
          'Another idea is for the person who submitted each lesson to list their phone number and email so that another person considering the lesson can contact them for clarification.'
        ),
        p(
          'Coding each lesson by factors such as project type, stage in the project life cycle or phase, the issue it concerns, and the project knowledge area helps future teams find relevant lessons.'
        ),
        p(
          'Some lessons are transferred more effectively by informal means, such as conversations, unscheduled meetings, or having a team member also serve on another project.'
        ),
        h3('Create the closeout report'),
        p('The closeout report usually includes:'),
        list([
          'A summary status of the project, drawn from progress reports.',
          'Lessons learned.',
          'A review of the project’s original justification.'
        ]),
        p(
          'A closeout report template for a small project may contain the project charter, the original WBS, a summary of weekly progress reports, and a client feedback summary.'
        ),
        p(
          'The project manager must ensure that records are in a workable format and stored so that others in the organisation can access them for lessons learned, financial audits or other uses.'
        )
      ]
    },
    {
      id: 'post-project',
      title: 'Post-project activities',
      blocks: [
        h3('Reassign workers'),
        p(
          'Wise project managers treat their members well. A reputation for taking good care of team members makes it easier to recruit people for future projects. Helping good workers secure follow-on work is one of the most important things a project manager must do toward the end of a project.'
        ),
        p(
          'Understand each person’s aspirations and recognise their strengths so that you can make sound recommendations for future assignments.'
        ),
        h3('Celebrate success and reward participants'),
        p(
          'Celebrations serve several purposes. They can be remembered through the following sequence:'
        ),
        table(
          ['Element', 'What it does'],
          [
            ['Challenge', 'Remind people of the challenge they just met.'],
            ['Energise', 'Energise the team to finish the last administrative chores.'],
            ['Limit', 'Signal that the project is over and limit additional work.'],
            ['Exert', 'Encourage the team to exert themselves to finish the last items.'],
            ['Believe', 'Persuade members that they can do a little more than they thought.'],
            ['Recognise', 'Recognise effort and results.'],
            ['Acknowledge', 'Acknowledge contributions publicly.'],
            ['Transition', 'Mark the transition as people leave one project for another.'],
            ['Ease stress', 'Ease the stress of working hard for a prolonged period.']
          ]
        ),
        p(
          'When people are reminded of recent accomplishments, they realise they met a large challenge and are motivated to take on new ones. Recognising accomplishments helps them accept that the project is over and that additional work should be limited. Celebration is an excellent time to recognise both effort and results.'
        ),
        h3('Provide ongoing support'),
        p(
          'The project manager should ensure that customers can effectively use the project deliverables. This may include training, change management or other services. A transition plan can guide this support.'
        ),
        h3('Ensure project benefits are realised'),
        p(
          'Many organisations insist that project managers follow up with customers weeks or months after the deliverables are put to use. One of the most important measures of project success is how well customers can use the deliverables.'
        ),
        p(
          'When considering the full impact of the project, think about direct customers and other stakeholders (people), profit for the parent company, and sustainability of the planet — the triple bottom line.'
        )
      ]
    },
    {
      id: 'plan-driven-vs-agile',
      title: 'Closing in plan-driven and Agile approaches',
      blocks: [
        p(
          'Both approaches validate scope, transition the deliverable, capture lessons and release the team. The timing and the mechanisms differ.'
        ),
        img(
          'closing-comparison.png',
          'Comparison of plan-driven and Agile approaches for finishing the project and realising benefits',
          'Plan-driven and Agile closing compared across scope validation, early termination, knowledge management, team reassignment and ongoing support.'
        ),
        table(
          ['Question', 'Plan-driven', 'Agile'],
          [
            [
              'When is scope validated?',
              'At the end of the project or phase.',
              'In demonstrations at the end of iterations and releases.'
            ],
            [
              'How is a project terminated early?',
              'By mutual agreement, default or convenience of the buyer.',
              'The Product Owner pivots using “money for nothing” or “change for free” contract clauses.'
            ],
            [
              'How is knowledge management handled?',
              'Lessons learned are captured at the end of a phase or project and added to a repository.',
              'Retrospectives are conducted at the end of every iteration.'
            ],
            [
              'What happens to team members at the end?',
              'They are individually reassigned or disbanded.',
              'The team is reassigned as a unit.'
            ],
            [
              'How is ongoing support handled?',
              'Through a transition plan.',
              'Through a transition plan.'
            ]
          ]
        ),
        h3('Agile validation and closure'),
        list([
          'Scope needs to be validated on any project so the customer can formally accept the deliverables and state their satisfaction.',
          'On Agile projects, scope is validated at every iteration and release when the team demonstrates to the customer how the items they produced work.',
          'Frequent, early, direct feedback from customers and other stakeholders improves solutions and increases customer satisfaction.',
          'In an adaptive life cycle, the Product Owner ultimately decides when the team has gone as far as necessary, based on the definition of done.',
          'If a predictive approach is used, there may be little to deliver until near the end of the project.'
        ]),
        h3('Agile contract clauses'),
        table(
          ['Clause', 'What it allows'],
          [
            [
              'Money for nothing',
              'The customer can terminate early and pay for the work done so far, rather than being locked into the full contract.'
            ],
            [
              'Change for free',
              'The customer can change scope without changing the total cost or schedule, usually by swapping one backlog item for another of equal size.'
            ]
          ]
        ),
        callout(
          'exam',
          'Similarities and differences',
          'Similarities: both validate scope, use a transition plan, capture lessons learned, release the team, celebrate completion and pursue benefits realisation. Differences: plan-driven projects validate at the end or phase and capture lessons at the end; Agile projects validate at every iteration and release, hold retrospectives every iteration, and reassign the team as a unit.'
        )
      ]
    },
    {
      id: 'closing-exam-bridge',
      title: 'Exam bridge: closing scenarios',
      blocks: [
        h3('What to do with an incomplete deliverable at closure'),
        list([
          'Complete it before closure if the customer requires it and time allows.',
          'Place remaining work on a punch list with an owner and a completion date.',
          'Move the work to another project or a later phase.',
          'Negotiate a reduced scope or partial acceptance through formal change control.',
          'Document the outstanding item, its risk and its owner, and obtain customer agreement.',
          'Terminate or descope the item formally rather than leaving it ambiguous.'
        ]),
        h3('What customers are asked to do at closing'),
        list([
          'Provide formal written acceptance of the deliverables.',
          'Confirm that the deliverables meet the agreed requirements.',
          'Provide feedback through a customer feedback form or lessons-learned session.',
          'Participate in transition, training and ongoing support arrangements.',
          'Confirm whether the expected benefits are being realised.'
        ]),
        h3('Why close a project that was terminated early'),
        p(
          'Even an early termination needs closure: formally accept or dispose of partial deliverables, settle payments and contracts, reassign people, capture lessons, archive records, communicate with stakeholders, and ensure that the team can move on. Closing prevents loose ends from becoming legal, financial or operational problems.'
        ),
        h3('How celebration benefits the project manager'),
        list([
          'Builds a reputation for treating people well, which makes future recruitment easier.',
          'Motivates the team to finish administrative work.',
          'Provides public recognition and closure.',
          'Reduces stress and signals a healthy transition.',
          'Reinforces the behaviours the organisation wants on future projects.'
        ])
      ]
    }
  ],
  summary: {
    overview:
      'Closing begins when the deliverables are formally accepted or the project is terminated early. It includes validating scope, completing the punch list, writing the transition plan, capturing and sharing lessons learned, producing the closeout report, reassigning people, celebrating success and following up on benefits.',
    groups: [
      {
        title: 'Validate scope',
        points: [
          'Validate scope is the formal acceptance of completed deliverables.',
          'Interim deliverables are validated throughout the project; final deliverables near the end.',
          'The punch list records work found during final inspection.',
          'Check the charter, scope statement, WBS, schedule and communications plans.',
          'Quality control verifies correctness; validate scope obtains acceptance.'
        ]
      },
      {
        title: 'Early termination',
        points: [
          'Mutual agreement: negotiate deliverables, compensation and outstanding issues.',
          'Default: cost, schedule or performance problems, or loss of confidence in the contractor.',
          'Convenience: the buyer’s circumstances change and invokes a contract clause.',
          'If negotiation fails, use legal action or alternative dispute resolution.',
          'Head off termination by finding other stakeholders or lowering internal cost.'
        ]
      },
      {
        title: 'Close and learn',
        points: [
          'Closure means all work done, resources reassigned and documentation complete.',
          'The transition plan is an instruction manual for the customer.',
          'Lessons learned should be captured early and often, including tacit knowledge.',
          'Disseminate lessons through a database owner, coding, contact details and informal transfer.',
          'The closeout report includes status, lessons learned and a review of the original justification.'
        ]
      },
      {
        title: 'Post-project',
        points: [
          'Help team members secure follow-on work.',
          'Celebrate success to recognise effort, create closure and reduce stress.',
          'Provide ongoing support through training and change management.',
          'Follow up to confirm that customers can use the deliverables and that benefits are realised.',
          'Consider the triple bottom line: people, profit and planet.'
        ]
      },
      {
        title: 'Plan-driven versus Agile',
        points: [
          'Plan-driven validates at the end or phase; Agile validates every iteration and release.',
          'Plan-driven captures lessons at the end; Agile holds retrospectives every iteration.',
          'Plan-driven reassigns people individually; Agile reassigns the team as a unit.',
          'Both use a transition plan and both pursue benefits realisation.',
          'Agile early termination can use money-for-nothing and change-for-free clauses.'
        ]
      }
    ],
    quickReference: [
      { label: 'Validate scope', value: 'Formal acceptance of completed deliverables' },
      { label: 'Punch list', value: 'Work items found during final inspection that must be completed' },
      { label: 'Early termination', value: 'Mutual agreement · Default · Convenience of buyer' },
      { label: 'Transition plan', value: 'Instruction manual for using the deliverables' },
      { label: 'Lessons learned', value: 'Knowledge gained from doing and reflecting on the work' },
      { label: 'Closeout report', value: 'Status summary + lessons learned + review of original justification' },
      { label: 'Celebration', value: 'Challenge · Energise · Limit · Exert · Believe · Recognise · Acknowledge · Transition · Ease stress' },
      { label: 'Agile closing', value: 'Validate every iteration/release; retrospectives every iteration' }
    ]
  }
};
