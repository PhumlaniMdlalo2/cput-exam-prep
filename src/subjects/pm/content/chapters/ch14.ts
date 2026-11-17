import type { Chapter } from '../../types/content';
import { callout, def, formula, h3, h4, img, list, p, steps, table } from '../blocks';

export const chapter14: Chapter = {
  id: 'ch14',
  number: 14,
  title: 'Monitoring, Controlling and Earned Value',
  subtitle: 'Measure progress, manage change and calculate project performance',
  description:
    'The project balanced scorecard, integrated change control, performance reporting, quality control tools, and the earned value formulas that carry 30 marks in the exam.',
  examFocus: [
    'Integrated change control and managing communication',
    'The project balanced scorecard and five aspects of project determination',
    'Financial issues, especially earned value management',
    'Variances, indexes, estimates and the to-complete performance index',
    'Know the formulas, show all steps and interpret the results',
    'Quality control tools and Agile progress measurement'
  ],
  topics: ['Balanced scorecard', 'Change control', 'EVM', 'Variances', 'Indexes', 'Forecasting'],
  sections: [
    {
      id: 'balanced-scorecard',
      title: 'The project balanced scorecard',
      blocks: [
        p(
          'Monitoring and controlling a project covers five aspects of project determination and is organised using the four perspectives of a balanced scorecard, treating the project as a temporary organisation.'
        ),
        h3('Five aspects of project determination'),
        p('“Determine” can mean:'),
        list(
          [
            'To give direction to or decide the course of.',
            'To be the cause of, to influence, or to regulate.',
            'To limit in scope.',
            'To reach a decision.',
            'To come to a conclusion or resolution.'
          ],
          true
        ),
        p(
          'In short, the five aspects are direct, regulate, limit, decide and conclude. During execution a project manager may need to give directions, re-plan, influence, guard the scope, and follow up to ensure proper results are delivered. Decision making may involve making decisions personally, delegating them, being part of a group, or facilitating a decision-making process.'
        ),
        h3('Four balanced-scorecard perspectives'),
        table(
          ['Perspective', 'Processes in the perspective'],
          [
            [
              'Internal project',
              'Direct and manage work; monitor and control work; perform integrated change control; implement risk responses; monitor risks; manage and monitor communication.'
            ],
            [
              'Customer',
              'Manage quality; control quality; control scope.'
            ],
            [
              'Financial',
              'Control resources; control schedule; control costs.'
            ],
            [
              'Growth and innovation',
              'Knowledge management and team development, including lessons learned (Chapter 15).'
            ]
          ]
        ),
        p(
          'The aspects interact. A change to one aspect, such as scope, affects quality, schedule and cost. Check each aspect and then the combined impact.'
        ),
        callout(
          'exam',
          'Review question 1: do not mix the two lists',
          'The five aspects of project determination are direct, regulate, limit, decide and conclude. The four balanced-scorecard perspectives are internal project, customer, financial, and growth and innovation. The question wording may ask for “five aspects” or “four perspectives”; give the list that matches the wording, then explain how the two frameworks fit together.'
        )
      ]
    },
    {
      id: 'internal-project',
      title: 'Internal project issues',
      blocks: [
        h3('Direct and manage project work'),
        def(
          'Direct and manage project work',
          'Performing the work as defined in the various components of the project management plan, including approved changes, with the intent of accomplishing project objectives.'
        ),
        p(
          'Perform the work in the plan, including approved changes. Empower others as far as possible and control as far as necessary. It must be clear who authorises each portion of work to start.'
        ),
        h3('Monitor and control project work'),
        def(
          'Monitor and control project work',
          'A series of activities such as identifying work packages for tracking, reviewing and documenting progress to ensure that project execution meets the performance objectives defined in the project plan.'
        ),
        list([
          'Compare progress with the plan and take corrective or preventive action.',
          'Letting workers self-control their own work is efficient and motivating.',
          'Self-control works best when expectations, standards and feedback are clear.'
        ]),
        def(
          'Monitoring',
          'Reviewing progress, capturing project performance data with reference to the project plan, developing performance measures, and communicating performance information.'
        ),
        def(
          'Controlling',
          'Assessing actual performance obtained from monitoring a work element, comparing it with planned performance, determining variances, analysing trends, evaluating possible alternatives, and recommending appropriate corrective action as needed.'
        ),
        def(
          'Variance',
          'A measurable departure from a planned baseline or expected value. Variance is often measured quantitatively, but qualitative measures cannot be ruled out.'
        ),
        img(
          'owner-rep-skills.png',
          'Useful owner representative skills in project trade-off decision making, including partnership, management, leadership and technical skills',
          'Owner representatives need partnership, management, leadership and technical skills to make sound trade-off decisions.'
        ),
        img(
          'monitoring-decisions.png',
          'Monitoring and controlling decisions matched to four levels of project progress',
          'The size of the monitoring decision depends on how far actual progress differs from the plan.'
        ),
        table(
          ['Situation', 'Appropriate decision'],
          [
            [
              'Actual progress is very different from the original intent',
              'Revisit the project charter to ensure the project still makes sense.'
            ],
            [
              'Progress is somewhat different from what was planned, but the charter is still a good guide',
              'Adjust the project plan.'
            ],
            [
              'The project plan is still a useful guide and progress has only minor differences',
              'Make adjustments in day-to-day instructions within the executing stage.'
            ],
            [
              'The results indicate the customer is ready to accept the deliverables',
              'Proceed into the project closing stage.'
            ]
          ]
        ),
        h3('Types of project control'),
        def(
          'Steering control',
          'Work is compared with the plan on a continual basis to see whether progress is equal to, better than, or worse than the plan. Adjustments can be made as often as necessary.'
        ),
        def(
          'Go/no-go control',
          'The project manager must receive approval to continue. It is often used at milestones or when someone must decide whether a key deliverable is acceptable. If acceptable, work continues as planned; if not, the work is redone or the project may be cancelled.'
        ),
        h3('Perform integrated change control'),
        def(
          'Perform integrated change control',
          'Reviewing all change proposals, estimating their impact on project goals wherever appropriate, approving or declining changes, and managing changes to deliverables, schedules, budgets and the project management plan.'
        ),
        def(
          'Change control',
          'A process in which change proposals to project planning elements are acknowledged, formally documented, and either approved or declined after review. It includes considering the impact of a change, deciding whether to agree, and documenting and managing the change.'
        ),
        def(
          'Change control board (CCB)',
          'A formal group authorised and responsible for reviewing, evaluating, approving, delaying or rejecting changes to any aspect of the project plan, following a formal method of documenting the decision process.'
        ),
        p(
          'The change control board often consists of the project manager, sponsor, project core team and perhaps other key stakeholders.'
        ),
        h4('Integrated change control in depth'),
        steps([
          'A change request is raised and documented formally on a change request form.',
          'Review the proposal and estimate its impact on scope, schedule, cost, quality, risk and team.',
          'Decide whether to approve, decline or delay. The sponsor or customer approves anything that changes the charter or contract; the project manager may approve within their authority; a change control board handles formal projects.',
          'Manage the change: update deliverables, schedule, budget and the project management plan; communicate; assign work.'
        ]),
        callout(
          'warn',
          'The classic mistake',
          'Do not say yes immediately to please the customer. The right response is: “Let me see what impact this has on schedule, budget, quality and the team.” Do not let rejected changes slip in. A scope change always affects cost and/or schedule.'
        ),
        p(
          'Scope control allows only necessary changes to the scope baseline. Changes can be to product scope (features) or project scope (the work). On Agile projects, the Product Owner reprioritises the backlog each iteration, so change is absorbed during planning.'
        ),
        h3('Monitor and implement risk responses'),
        def(
          'Monitor risks',
          'Adhering to the risk response plan by tracking identified risks, identifying new risks, monitoring residual risks and evaluating the effectiveness of the risk response process throughout the project.'
        ),
        list([
          'Track identified risks.',
          'Execute the response plans.',
          'Evaluate the effectiveness of the responses.',
          'Watch residual risks: what remains after a response.',
          'Identify new risks.',
          'Use the risk register and the issues log.'
        ]),
        def(
          'Implement risk responses',
          'When a risk event occurs or is quite likely to occur soon, the person assigned to that risk executes the strategy identified in the risk management plan.'
        ),
        img(
          'risk-resolution-strategies.png',
          'Risk event resolution strategies grouped by risks within, partially within and outside project control',
          'Risk event resolution depends on how much control the team has over the risk.'
        ),
        h3('Manage communications'),
        def(
          'Manage communications',
          'All the work connected with the project communications plan: planning for it, generating it, organising and sharing it, and finally storing and disposing of it.'
        ),
        h4('Collect information on executed work and work in progress'),
        list([
          'How well is this activity proceeding in terms of time and budget?',
          'How well is the entire project proceeding in terms of time and budget?',
          'How much more money will need to be spent to complete the project?',
          'To what extent does the quality of this work meet requirements?',
          'How many hours of human resources were used compared with the estimate?',
          'What methods are worth repeating?',
          'What methods require improvement before the work is done again?'
        ]),
        h4('Report performance'),
        def(
          'Work performance data',
          'The actual and raw observations and measurements made during execution of project activities.'
        ),
        def(
          'Work performance information',
          'Information from performance data, collected from the monitoring processes, analysed in context, integrated, and considered in relation to other areas.'
        ),
        def(
          'Work performance reports',
          'The compilation of work performance information in physical or electronic form, organised and presented as project documents intended to generate awareness, discussion, decision making or other action.'
        ),
        h4('Reporting times'),
        p(
          'Detailed progress can be reported informally but frequently within the project team and to functional managers who control resources — perhaps weekly or even daily when time is critical. More general progress may be reported formally but less frequently to sponsors, senior management and clients — perhaps semiweekly or monthly.'
        ),
        h4('Three time horizons for progress reports'),
        table(
          ['Horizon', 'What to report', 'Why it matters'],
          [
            [
              'Past time period',
              'What was planned to be accomplished between the last report and now, what was actually accomplished, any variance and the reasons for it.',
              'Creates a factual retrospective and shows whether the plan is being met.'
            ],
            [
              'Current time period',
              'What work is to be accomplished between now and the next report (the current plan), what risks and issues are foreseen, and what changes need approval.',
              'Lets the team and sponsor act on the immediate plan and approve changes before they become urgent.'
            ],
            [
              'Future time period',
              'What is known about the period after the next report, especially future risks and issues.',
              'Allows sponsors to address risks before they become real and reflects rolling-wave planning.'
            ]
          ]
        ),
        def(
          'Monitor communications',
          'Monitoring and controlling communications throughout the project life cycle to make certain that the information needs of all project stakeholders are met.'
        )
      ]
    },
    {
      id: 'customer-issues',
      title: 'Customer issues: quality and scope',
      blocks: [
        def(
          'Manage quality',
          'Using and improving the quality plan and policy to perform tasks that will most likely create project outputs to the customer’s satisfaction.'
        ),
        def(
          'Control quality',
          'The activities used to verify that deliverables are of acceptable quality and that they are complete and correct.'
        ),
        h3('Seven quality control tools'),
        table(
          ['Tool', 'What it does', 'When to use it'],
          [
            [
              'Flow chart',
              'Shows the steps of a process and where it starts and ends, at any level of detail.',
              'At the start of quality control, to understand the process and locate possible problem points.'
            ],
            [
              'Check sheet',
              'A customised form for recording how often events occur, with date/time and notes.',
              'When collecting data repeatedly; include an “other” category because problems can come from unexpected sources.'
            ],
            [
              'Pareto chart',
              'A vertical bar chart that ranks causes and applies the 80/20 rule.',
              'To identify the vital few sources that cause most of the problem.'
            ],
            [
              'Cause-and-effect diagram',
              'Also called an Ishikawa or fishbone diagram; organises categories of probable cause around a problem statement.',
              'To find and remove root causes, not just symptoms.'
            ],
            [
              'Histogram',
              'Shows the distribution of data. A normal bell shape suggests nothing unusual; a highly skewed shape suggests a strong effect.',
              'To see the pattern and spread of measurements.'
            ],
            [
              'Run chart',
              'Shows how one aspect of a process changes over time.',
              'To look for trends, abrupt changes, repeating patterns and outliers.'
            ],
            [
              'Control chart',
              'Plots performance over time against statistically calculated control limits.',
              'To distinguish common-cause variation from special-cause variation and decide when to act.'
            ]
          ]
        ),
        h3('Control scope'),
        def(
          'Control scope',
          'Closely monitoring the project and product scope status and only allowing necessary changes to the scope baseline.'
        ),
        p(
          'Project managers and teams should practise scope control proactively by understanding what might cause changes to product scope (the features of the deliverables) or project scope (the work required to create the deliverables).'
        ),
        def(
          'Scope change',
          'Any change to the project work activities or a deliverable.'
        ),
        p(
          'When scope changes, project cost and/or schedule also need to change. Proposed scope changes therefore go through integrated change control so that the impact on other critical aspects of the project goals is considered.'
        ),
        def(
          'Variance analysis',
          'Determining both the cause and the amount of difference between planned and actual performance. It includes how large the difference is, why it occurred, and whether action is necessary.'
        )
      ]
    },
    {
      id: 'financial-issues',
      title: 'Financial issues',
      blocks: [
        def(
          'Control resources',
          'A process by which all the physical resources needed to perform the project are planned and monitored, and changes are made if needed. It occurs throughout the life of the project.'
        ),
        p(
          'If resources are not available when needed, the project can be delayed. If needed resources are in short supply, both cost and schedule may be affected unfavourably.'
        ),
        h3('Control schedule and costs'),
        p(
          'Schedule and cost control are very similar in concept. Start with the approved cost and schedule baseline, determine the current status, and formally recommend and manage changes through integrated change control so that impacts on other areas are considered.'
        ),
        p(
          'Cost control has one additional consideration: ensure that no more money is spent than the authorised amount.'
        )
      ]
    },
    {
      id: 'evm-foundations',
      title: 'Earned value management foundations',
      blocks: [
        def(
          'Earned value management (EVM)',
          'A disciplined and quantitative method that integrates scope, cost and schedule objectives into a single baseline plan for tracking contract performance. It helps the team understand progress in terms of cost and schedule and make predictions until project conclusion.'
        ),
        p(
          'EVM is a decision-making tool. It compares the value of work that should have been done, the value of work actually done, and what that work actually cost.'
        ),
        img(
          'evm-terms.png',
          'Earned value management terms table mapping questions to planned value, earned value, actual cost, budget at completion, variances, indexes and forecasts',
          'The EVM question map: every formula answers a specific management question.'
        ),
        h3('The four known values'),
        table(
          ['Term', 'Symbol', 'Meaning', 'Question it answers'],
          [
            [
              'Planned value',
              'PV',
              'The approved value of the work to be completed in a given time; the value that should have been earned as per the schedule.',
              'How much work should be done by now?'
            ],
            [
              'Earned value',
              'EV',
              'The value of the work actually completed to date.',
              'How much work is done?'
            ],
            [
              'Actual cost',
              'AC',
              'The total cost incurred in accomplishing the work during a given period.',
              'How much did the work that is done cost?'
            ],
            [
              'Budget at completion',
              'BAC',
              'The total amount budgeted for the entire project.',
              'How much was the total project supposed to cost?'
            ]
          ]
        ),
        h3('The standard worked example'),
        p(
          'The notes use the following values throughout the Chapter 14 explanation. Learn this example; it is the fastest way to check that you understand every formula.'
        ),
        table(
          ['Given', 'Value'],
          [
            ['PV', '$250,000'],
            ['EV', '$200,000'],
            ['AC', '$400,000'],
            ['BAC', '$750,000']
          ]
        ),
        p(
          'The team planned to have earned $250,000 of value by now, has actually earned $200,000, and has spent $400,000 to earn that $200,000. The total project budget is $750,000.'
        )
      ]
    },
    {
      id: 'evm-variances',
      title: 'Variances: schedule and cost',
      blocks: [
        h3('Schedule variance (SV)'),
        formula(
          'Schedule variance',
          'SV = EV − PV',
          'SV is the difference between earned value and planned value. It denotes schedule performance.'
        ),
        p(
          'In the example: SV = $200,000 − $250,000 = −$50,000. The variance is negative, so the project is behind schedule.'
        ),
        h3('Cost variance (CV)'),
        formula(
          'Cost variance',
          'CV = EV − AC',
          'CV is the difference between earned value and actual cost. It reflects cost performance.'
        ),
        p(
          'In the example: CV = $200,000 − $400,000 = −$200,000. The variance is negative, so the project is over budget.'
        ),
        table(
          ['Result', 'Schedule', 'Cost'],
          [
            ['Positive', 'Ahead of schedule (favourable)', 'Under budget (favourable)'],
            ['Zero', 'On schedule', 'On budget'],
            ['Negative', 'Behind schedule (unfavourable)', 'Over budget (unfavourable)']
          ]
        ),
        callout(
          'warn',
          'Sign trap',
          'SV and CV are differences, not ratios. A negative variance is unfavourable. Do not reverse the subtraction order: SV is EV minus PV; CV is EV minus AC.'
        )
      ]
    },
    {
      id: 'evm-indexes',
      title: 'Indexes: SPI and CPI',
      blocks: [
        h3('Schedule performance index (SPI)'),
        formula(
          'Schedule performance index',
          'SPI = EV ÷ PV',
          'SPI expresses schedule performance as a ratio.'
        ),
        p(
          'In the example: SPI = $200,000 ÷ $250,000 = 0.80 or 80%. The project has accomplished 80% of the work that was planned by now, so it is behind schedule.'
        ),
        h3('Cost performance index (CPI)'),
        formula(
          'Cost performance index',
          'CPI = EV ÷ AC',
          'CPI expresses cost performance as a ratio.'
        ),
        p(
          'In the example: CPI = $200,000 ÷ $400,000 = 0.50 or 50%. The project has received $0.50 of earned value for every $1.00 spent, so it is over budget.'
        ),
        table(
          ['Index result', 'Meaning'],
          [
            ['Greater than 1.0 (>100%)', 'Better than planned: ahead of schedule or under budget.'],
            ['Equal to 1.0 (100%)', 'Right on plan.'],
            ['Less than 1.0 (<100%)', 'Worse than planned: behind schedule or over budget.']
          ]
        ),
        p(
          'With performance indexes, 100% means right on plan, less than 100% means less efficient than planned, and more than 100% means more efficient than planned.'
        ),
        callout(
          'exam',
          'Variance or index?',
          'A variance answers “how much?” in dollars. An index answers “how efficient?” as a ratio. A sponsor may prefer variances because they show the size of the problem, while a project manager may prefer indexes because they show efficiency and are easier to compare across projects.'
        )
      ]
    },
    {
      id: 'evm-estimates',
      title: 'Estimates and forecasts: ETC, EAC and TCPI',
      blocks: [
        h3('Estimate to complete (ETC)'),
        def(
          'Estimate to complete',
          'The expected budget required to complete all the remaining project work.'
        ),
        p(
          'There are two common methods. The method chosen depends on what the team believes about future performance.'
        ),
        h4('Method 1: work to date is a good estimate of future performance'),
        formula(
          'ETC — efficiency method',
          'ETC = (BAC − EV) ÷ CPI',
          'Use when past cost efficiency is expected to continue.'
        ),
        p(
          'In the example: ETC = ($750,000 − $200,000) ÷ 0.50 = $550,000 ÷ 0.50 = $1,100,000. Unless efficiency improves, the remaining work will cost more than the original total project budget.'
        ),
        h4('Method 2: the original plan is a better estimate of future performance'),
        formula(
          'ETC — plan method',
          'ETC = BAC − EV',
          'Use when past performance was unusual and is unlikely to continue.'
        ),
        p(
          'In the example: ETC = $750,000 − $200,000 = $550,000.'
        ),
        h3('Estimate at completion (EAC)'),
        def(
          'Estimate at completion',
          'The total cost of completing all the project work, expressed as the sum of the actual cost to date and the estimate to complete.'
        ),
        formula(
          'Estimate at completion',
          'EAC = AC + ETC',
          'The forecast total cost depends on which ETC method is used.'
        ),
        table(
          ['Forecast assumption', 'ETC', 'EAC'],
          [
            [
              'Past efficiency continues (Method 1)',
              '$1,100,000',
              '$400,000 + $1,100,000 = $1,500,000'
            ],
            [
              'Original plan is a better predictor (Method 2)',
              '$550,000',
              '$400,000 + $550,000 = $950,000'
            ]
          ]
        ),
        p(
          'Because cost efficiency is only half of the plan, the project is expected to cost double the original estimate unless efficiency improves. Even if the team matches the original plan for the rest of the work, the project will still finish over budget.'
        ),
        h3('To-complete performance index (TCPI)'),
        def(
          'To-complete performance index',
          'A measure of the cost performance required to complete the remaining project work within the remaining budget. It is the ratio of the remaining work to the remaining budget.'
        ),
        formula(
          'TCPI',
          'TCPI = (BAC − EV) ÷ (BAC − AC)',
          'The prescribed exam formula, where the target is to finish within the original budget (BAC).'
        ),
        p(
          'In the example: TCPI = ($750,000 − $200,000) ÷ ($750,000 − $400,000) = $550,000 ÷ $350,000 = 1.571… = 157%. The team has been performing at a CPI of 50% and would need to raise cost efficiency to 157% for the remainder of the project to finish on budget.'
        ),
        callout(
          'info',
          'TCPI interpretation',
          'A TCPI greater than 1.0 means the team must perform better than plan to finish within the remaining budget. A TCPI equal to 1.0 means the remaining work can be completed at plan efficiency. A TCPI less than 1.0 means the remaining work can be completed with less efficiency than plan and still finish within budget.'
        )
      ]
    },
    {
      id: 'evm-formula-sheet',
      title: 'EVM formula sheet and exam method',
      blocks: [
        h3('Formula sheet'),
        table(
          ['Measure', 'Formula', 'What it tells you'],
          [
            ['Schedule variance', 'SV = EV − PV', 'Dollar amount ahead of or behind schedule.'],
            ['Cost variance', 'CV = EV − AC', 'Dollar amount under or over budget.'],
            ['Schedule performance index', 'SPI = EV ÷ PV', 'Schedule efficiency as a ratio.'],
            ['Cost performance index', 'CPI = EV ÷ AC', 'Cost efficiency as a ratio.'],
            [
              'Estimate to complete — efficiency method',
              'ETC = (BAC − EV) ÷ CPI',
              'Expected cost to finish if current cost efficiency continues.'
            ],
            [
              'Estimate to complete — plan method',
              'ETC = BAC − EV',
              'Expected cost to finish if the original plan is a better predictor.'
            ],
            ['Estimate at completion', 'EAC = AC + ETC', 'Forecast total project cost.'],
            [
              'To-complete performance index',
              'TCPI = (BAC − EV) ÷ (BAC − AC)',
              'Cost efficiency needed to finish within the remaining budget.'
            ]
          ]
        ),
        h3('Step-by-step exam method'),
        steps([
          'Write down the given values with their symbols: PV, EV, AC, BAC.',
          'Write the formula before substituting numbers.',
          'Substitute the values and show the arithmetic.',
          'Give the answer with the correct unit: dollars for variances and estimates, a ratio or percentage for indexes.',
          'Interpret the result: favourable or unfavourable, ahead or behind, under or over budget.',
          'State the management action: investigate the cause, forecast the impact, and recommend a response.'
        ]),
        h3('Common mistakes to avoid'),
        list([
          'Reversing SV or CV: both start with EV.',
          'Using AC in the SPI denominator or PV in the CPI denominator.',
          'Forgetting to divide by CPI in the first ETC method.',
          'Adding ETC to EV instead of AC when calculating EAC.',
          'Using the wrong denominator in TCPI: the remaining budget is BAC − AC.',
          'Reporting a ratio as a dollar amount, or a variance as a percentage.',
          'Giving a number without interpreting it. The exam scope explicitly says “know formulas… show all steps and interpret results.”'
        ]),
        callout(
          'tip',
          'A quick sanity check',
          'If EV is below PV, SPI and SV should both be unfavourable. If AC is above EV, CPI and CV should both be unfavourable. If your answer contradicts that, recheck the substitution.'
        )
      ]
    },
    {
      id: 'agile-measurement',
      title: 'Agile progress measurement',
      blocks: [
        img(
          'agile-risk-terms.png',
          'Agile terms including work item pool, manage flow, work in progress, task switching, waiting, trend analysis, burn-down chart, burn-up chart and pivot',
          'Agile measurement focuses on flow, finishing work and responding to feedback.'
        ),
        table(
          ['Term', 'Meaning'],
          [
            [
              'Work item pool',
              'All work to do: new requirements, defects, training and so on.'
            ],
            ['Manage flow', 'Focus on reducing the time to complete work.'],
            [
              'Work-in-progress (WIP)',
              'Work that has been started but not completed. It costs work time, is not yet of value, and may become obsolete.'
            ],
            ['Minimise WIP', 'Finish started work promptly before starting more.'],
            [
              'Task switching',
              'Time and concentration are lost when a person changes the work they are doing.'
            ],
            [
              'Waiting',
              'Delays may mean later feedback and task switching; work is not ready.'
            ],
            ['Trend analysis', 'A quantitative review of changes in performance over time.'],
            [
              'Burn-down chart',
              'Starts at the total planned work for a sprint and works toward zero.'
            ],
            [
              'Burn-up chart',
              'Starts at zero and works up toward the total amount of work expected.'
            ],
            [
              'Pivot',
              'Changing direction on the next sprint based on customer desires.'
            ]
          ]
        ),
        h3('Cadence and reporting'),
        p(
          'Project cadence — single delivery, multiple deliveries or periodic deliveries — dictates the nature and frequency of measuring and reporting progress. Agile teams measure results at the end of each iteration and release. The team demonstrates working increments to the customer, obtains feedback, and uses that feedback to adjust the next iteration.'
        ),
        h3('Agile progress meeting time periods'),
        p(
          'The three time horizons used in progress reporting can be applied to Agile meetings. The exact labels vary by team; a practical mapping is:'
        ),
        table(
          ['Horizon', 'Agile focus'],
          [
            [
              'Past',
              'What the team planned for the last iteration or increment, what was completed, what was not, and why. Retrospective findings and velocity trends belong here.'
            ],
            [
              'Current',
              'What the team is doing in the current iteration, what risks or blockers are in the way, and what changes the Product Owner wants to make.'
            ],
            [
              'Future',
              'What is planned for upcoming iterations and releases, what dependencies or risks are visible on the roadmap, and what feedback may change priorities.'
            ]
          ]
        ),
        callout(
          'info',
          'Source note',
          'The three Agile time periods above are a supplementary exam bridge. Your notes give the general past/current/future horizons; applying them explicitly to Agile meetings is the approved addition.'
        ),
        h3('Work authorisation beyond the WBS'),
        p(
          'The WBS is the main basis for authorising work, but work can also be triggered by:'
        ),
        list([
          'Approved change requests, including product or project scope changes.',
          'Risk response triggers and implementation of a risk response.',
          'Quality audit findings, inspection results or defect repair.',
          'Customer or stakeholder requests that have gone through change control.',
          'Milestone or phase-gate approvals that release the next portion of work.',
          'Contract changes, regulatory changes or compliance requirements.',
          'Rework required to bring a deliverable back to specification.'
        ]),
        h3('Three sets of data after a project audit'),
        p(
          'A practical audit pack contains three sets of data. This is a supplementary answer for review question 9:'
        ),
        table(
          ['Data set', 'What it contains', 'Why it matters'],
          [
            [
              'Performance data',
              'Actual cost, schedule, scope and quality results compared with the baseline.',
              'Shows whether the project delivered what it promised, within the approved constraints.'
            ],
            [
              'Process and quality data',
              'Process performance, defect and rework data, inspection and test results, and root-cause findings.',
              'Shows how well the work was done and where the process should improve.'
            ],
            [
              'Risk, issue and stakeholder data',
              'Risk events that occurred, issues, changes, stakeholder feedback and benefits realised.',
              'Shows what threatened or helped the project and whether stakeholders received value.'
            ]
          ]
        ),
        h3('Efficiency versus effectiveness'),
        p(
          'Efficiency is doing things right with the least waste; effectiveness is doing the right things to achieve the intended outcome. A team can be efficient at producing a deliverable that the customer does not need. Use process analysis and Lean thinking to improve efficiency; use stakeholder requirements, validation and benefits realisation to improve effectiveness.'
        )
      ]
    }
  ],
  summary: {
    overview:
      'Monitoring and controlling compares actual performance with the plan, manages changes and reports performance. The project balanced scorecard organises this work across internal project, customer, financial, and growth and innovation perspectives. Earned value management turns scope, schedule and cost into a small set of formulas that show whether the project is ahead or behind, under or over budget, and what it will take to finish.',
    groups: [
      {
        title: 'Balanced scorecard',
        points: [
          'Five aspects of project determination: direct, regulate, limit, decide, conclude.',
          'Four perspectives: internal project, customer, financial, growth and innovation.',
          'The perspectives interact; a change in one affects the others.',
          'Steering control is continuous; go/no-go control requires approval to continue.'
        ]
      },
      {
        title: 'Change and communication',
        points: [
          'Integrated change control reviews all change proposals, estimates impact, approves or declines, and manages approved changes.',
          'The CCB often includes the project manager, sponsor, core team and key stakeholders.',
          'Do not accept a change before understanding its impact.',
          'Work performance data → information → reports.',
          'Report across the past, current and future time horizons.'
        ]
      },
      {
        title: 'EVM values',
        points: [
          'PV is the value of work that should have been done; EV is the value of work actually done; AC is what was actually spent; BAC is the total budget.',
          'SV = EV − PV; CV = EV − AC.',
          'SPI = EV ÷ PV; CPI = EV ÷ AC.',
          'A negative variance or an index below 1.0 is unfavourable.'
        ]
      },
      {
        title: 'EVM forecasts',
        points: [
          'ETC (efficiency method) = (BAC − EV) ÷ CPI.',
          'ETC (plan method) = BAC − EV.',
          'EAC = AC + ETC.',
          'TCPI = (BAC − EV) ÷ (BAC − AC).',
          'TCPI above 1.0 means the team must improve cost efficiency to finish on budget.'
        ]
      },
      {
        title: 'Quality and Agile measurement',
        points: [
          'Seven quality control tools: flow chart, check sheet, Pareto, cause-and-effect, histogram, run chart, control chart.',
          'Pareto applies the 80/20 rule; the largest bar often becomes the head of the fishbone.',
          'Burn-down starts at total work and moves to zero; burn-up starts at zero and moves to total work.',
          'Agile measures flow, WIP, cycle time and feedback at each iteration.'
        ]
      }
    ],
    quickReference: [
      { label: 'SV', value: 'EV − PV' },
      { label: 'CV', value: 'EV − AC' },
      { label: 'SPI', value: 'EV ÷ PV' },
      { label: 'CPI', value: 'EV ÷ AC' },
      { label: 'ETC (efficiency)', value: '(BAC − EV) ÷ CPI' },
      { label: 'ETC (plan)', value: 'BAC − EV' },
      { label: 'EAC', value: 'AC + ETC' },
      { label: 'TCPI', value: '(BAC − EV) ÷ (BAC − AC)' },
      { label: 'Favourable', value: 'Positive variance; index > 1.0' },
      { label: 'Unfavourable', value: 'Negative variance; index < 1.0' }
    ]
  }
};
