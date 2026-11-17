import type { ChapterTest } from '../../types/content';
import { calcQ, caseQ, mcq, mp, part, shortQ, tf } from '../questionHelpers';

export const chapter14Test: ChapterTest = {
  id: 'ch14-test',
  chapterId: 'ch14',
  title: 'Chapter 14 test — Monitoring, Control and EVM',
  description:
    'A 50-mark test with objective questions, short answers, a change-control case and two earned value calculations.',
  instructions: [
    'Answer all questions.',
    'For every calculation, write the formula, substitute the values, give the answer with units, and interpret the result.',
    'Section A is automatically marked.',
    'Calculation answers are marked automatically where a numeric answer is supplied; written reasoning is checked against the marking guide.'
  ],
  timeLimitMinutes: 75,
  questions: [
    mcq(
      'ch14-t-q1',
      'Which set correctly lists the five aspects of project determination?',
      [
        'Direct, regulate, limit, decide, conclude',
        'Internal, customer, financial, growth, innovation',
        'Plan, do, check, act, review',
        'Scope, schedule, cost, quality, risk'
      ],
      'a',
      'The five aspects are direct, regulate, limit, decide and conclude. The four balanced-scorecard perspectives are internal project, customer, financial, and growth and innovation.',
      'Do not confuse the five aspects with the four perspectives.'
    ),
    mcq(
      'ch14-t-q2',
      'Control resources, control schedule and control costs belong to which balanced-scorecard perspective?',
      ['Internal project', 'Customer', 'Financial', 'Growth and innovation'],
      'c',
      'Control resources, control schedule and control costs are financial perspective processes.',
      'Quality and scope belong to the customer perspective.'
    ),
    mcq(
      'ch14-t-q3',
      'Which formula represents the schedule performance index (SPI)?',
      ['EV − PV', 'EV ÷ PV', 'EV − AC', 'EV ÷ AC'],
      'b',
      'SPI = EV ÷ PV. EV − PV is schedule variance; EV − AC is cost variance; EV ÷ AC is CPI.',
      'SPI is a ratio, not a variance.'
    ),
    mcq(
      'ch14-t-q4',
      'A CPI of 0.80 means that the project:',
      [
        'Is ahead of schedule',
        'Is under budget',
        'Is over budget and earning $0.80 of value for every $1 spent',
        'Has completed 80% of the project'
      ],
      'c',
      'CPI = EV ÷ AC. A CPI of 0.80 means the project earns $0.80 of earned value for every $1.00 spent, so it is over budget. It says nothing directly about schedule.',
      'Do not interpret CPI as percent complete or as a schedule measure.'
    ),
    mcq(
      'ch14-t-q5',
      'Which formula is the first ETC method, where work to date is a good estimate of future performance?',
      [
        'ETC = BAC − EV',
        'ETC = (BAC − EV) ÷ CPI',
        'ETC = AC + EV',
        'ETC = BAC ÷ CPI'
      ],
      'b',
      'The efficiency method is ETC = (BAC − EV) ÷ CPI. ETC = BAC − EV is the second method, which assumes the original plan is a better predictor.',
      'Do not forget to divide by CPI in the first method.'
    ),
    mcq(
      'ch14-t-q6',
      'Which formula represents the to-complete performance index (TCPI)?',
      [
        'TCPI = (BAC − EV) ÷ (BAC − AC)',
        'TCPI = (BAC − EV) ÷ CPI',
        'TCPI = EV ÷ AC',
        'TCPI = AC ÷ EV'
      ],
      'a',
      'TCPI = (BAC − EV) ÷ (BAC − AC). It compares the remaining work with the remaining budget.',
      'ETC uses CPI; TCPI compares remaining work with remaining budget.'
    ),
    tf(
      'ch14-t-q7',
      'A negative schedule variance means the project is behind schedule.',
      true,
      'SV = EV − PV. A negative result means earned value is less than planned value, so the project has completed less work than planned.',
      'A positive SV is ahead of schedule; a negative SV is behind.'
    ),
    tf(
      'ch14-t-q8',
      'EAC is calculated as AC plus ETC.',
      true,
      'Estimate at completion is the actual cost to date plus the estimate to complete the remaining work: EAC = AC + ETC.',
      'Do not add ETC to EV or BAC.'
    ),
    tf(
      'ch14-t-q9',
      'If a customer asks for a change after the baseline, the project manager should approve it immediately to keep the customer happy.',
      false,
      'The project manager should document the request and perform integrated change control: estimate the impact on scope, schedule, cost, quality, risk and team, then approve, decline or delay through the proper authority.',
      'Do not accept changes before understanding their impact.'
    ),
    tf(
      'ch14-t-q10',
      'Project work can only be authorised through the WBS.',
      false,
      'The WBS is the main basis, but approved changes, risk responses, audit findings, customer requests, milestone gates, contract or regulatory changes and defect repair can also trigger authorised work.',
      'The WBS is necessary but not the only trigger.'
    ),
    shortQ(
      'ch14-t-q11',
      3,
      'Distinguish between the five aspects of project determination and the four balanced-scorecard perspectives.',
      'The five aspects of project determination are direct, regulate, limit, decide and conclude. They describe what “determine” means in managing project progress. The four balanced-scorecard perspectives are internal project, customer, financial, and growth and innovation. They organise the monitoring and controlling processes into areas of performance. The aspects are action verbs; the perspectives are categories for organising and reviewing performance.',
      [
        mp('Lists the five aspects', ['direct', 'regulate', 'limit', 'decide', 'conclude'], 1),
        mp('Lists the four perspectives', ['internal', 'customer', 'financial', 'growth', 'innovation'], 1),
        mp('Explains how the two lists fit together', ['action', 'organis', 'categor', 'performance'], 1)
      ],
      'The question may ask for one list or the other. Give the list that matches the wording and explain the relationship.',
      'Do not merge the lists into one answer without distinguishing them.'
    ),
    shortQ(
      'ch14-t-q12',
      3,
      'Explain the difference between monitoring and controlling project work.',
      'Monitoring is reviewing progress and capturing project performance data against the plan; it develops performance measures and communicates performance information. Controlling is assessing the actual performance obtained from monitoring, comparing it with planned performance, determining variances, analysing trends, evaluating alternatives and recommending corrective action. Monitoring gathers the evidence; controlling uses it to decide what to do.',
      [
        mp('Monitoring captures performance data', ['monitor', 'data', 'progress', 'measure'], 1),
        mp('Controlling compares and analyses performance', ['control', 'compare', 'variance', 'trend'], 1),
        mp('Controlling leads to corrective action', ['corrective', 'action', 'decision'], 1)
      ],
      'Monitoring is the data-gathering side; controlling is the decision-making side.',
      'Do not use the terms as synonyms.'
    ),
    shortQ(
      'ch14-t-q13',
      3,
      'Name the three sets of data a project manager should have after a project audit.',
      'A practical audit pack has three sets: performance data (actual cost, schedule, scope and quality compared with the baseline); process and quality data (process performance, defects, rework, inspection and test results, root-cause findings); and risk, issue and stakeholder data (risk events, issues, changes, stakeholder feedback and benefits realised). Together they show whether the project delivered, how well the work was done, and what threatened or helped value.',
      [
        mp('Performance data against the baseline', ['performance', 'cost', 'schedule', 'baseline'], 1),
        mp('Process and quality data', ['process', 'quality', 'defect', 'rework'], 1),
        mp('Risk, issue and stakeholder data', ['risk', 'issue', 'stakeholder', 'benefit'], 1)
      ],
      'This is a supplementary exam bridge. The three sets cover delivery performance, process quality, and risk/stakeholder outcomes.',
      'Do not give three unrelated lists of metrics; group them into the three audit data sets.'
    ),
    caseQ(
      'ch14-t-q14',
      8,
      'Read the case and answer the question.',
      'A project has been baselined and is six weeks into execution. The customer emails the project manager asking for a new reporting dashboard that was not in the scope baseline. The dashboard would take two developers about three weeks and would delay a planned compliance test.',
      'Describe how the project manager should respond. Include the change-control steps, the impact assessment, the role of the change control board and how the decision should be documented and communicated.',
      [
        mp('Documents the request and does not agree immediately', ['document', 'change request', 'not agree', 'impact'], 2),
        mp('Assesses impact on scope, schedule, cost, quality, risk and team', ['scope', 'schedule', 'cost', 'quality', 'risk', 'team'], 2),
        mp('Uses the change control board or proper authority', ['change control board', 'ccb', 'sponsor', 'authority'], 2),
        mp('Manages and documents the approved or declined change', ['update', 'communicate', 'change log', 'plan'], 2)
      ],
      'The project manager should thank the customer, document the request formally, and not agree immediately. Perform integrated change control: review the proposal and estimate its impact on scope, schedule, cost, quality, risk and team. The dashboard adds scope, requires two developers for three weeks, and delays the compliance test, so the impact is significant. The request should go to the change control board or the appropriate authority (project manager, sponsor or customer, depending on the charter and contract). The board may approve, decline or delay. If approved, update the deliverables, schedule, budget and project management plan; assign work; communicate the decision; and manage the change. If declined, record the decision and ensure the rejected change does not slip into the work. The decision and its rationale should be documented in the change log and communicated to the customer and team.',
      'The classic mistake is to say yes immediately. The correct response is to examine the impact and follow integrated change control. Do not ignore the customer or simply refuse the request without analysis.'
    ),
    calcQ(
      'ch14-t-q15',
      'A project has the following values: PV = $300,000; EV = $240,000; AC = $360,000; BAC = $900,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI, and (e) EAC using the efficiency method. Interpret each result.',
      [
        part(
          'a',
          'a',
          'Schedule variance (SV)',
          2,
          'SV = EV − PV = $240,000 − $300,000 = −$60,000. The project is $60,000 behind schedule.',
          { numericAnswer: -60000, tolerance: 1, unit: '$', formula: 'SV = EV − PV' }
        ),
        part(
          'b',
          'b',
          'Cost variance (CV)',
          2,
          'CV = EV − AC = $240,000 − $360,000 = −$120,000. The project is $120,000 over budget.',
          { numericAnswer: -120000, tolerance: 1, unit: '$', formula: 'CV = EV − AC' }
        ),
        part(
          'c',
          'c',
          'Schedule performance index (SPI)',
          2,
          'SPI = EV ÷ PV = $240,000 ÷ $300,000 = 0.80 or 80%. The project has completed 80% of the work planned for this point.',
          { numericAnswer: 0.8, tolerance: 0.001, unit: '', formula: 'SPI = EV ÷ PV' }
        ),
        part(
          'd',
          'd',
          'Cost performance index (CPI)',
          2,
          'CPI = EV ÷ AC = $240,000 ÷ $360,000 = 0.6667 or 66.67%. The project earns about $0.67 of value for every $1.00 spent.',
          { numericAnswer: 0.6667, tolerance: 0.001, unit: '', formula: 'CPI = EV ÷ AC' }
        ),
        part(
          'e',
          'e',
          'Estimate at completion (EAC) using the efficiency method',
          4,
          'First calculate ETC = (BAC − EV) ÷ CPI = ($900,000 − $240,000) ÷ 0.6667 = $660,000 ÷ 0.6667 = $990,000. Then EAC = AC + ETC = $360,000 + $990,000 = $1,350,000. If current cost efficiency continues, the project will finish at about $1,350,000, which is $450,000 above the BAC.',
          { numericAnswer: 1350000, tolerance: 1000, unit: '$', formula: 'ETC = (BAC − EV) ÷ CPI; EAC = AC + ETC' }
        )
      ],
      'The project is behind schedule and over budget. The forecast final cost is $1,350,000 against a budget of $900,000. The project manager should investigate the cost and schedule drivers, forecast the impact, and recommend corrective action through integrated change control.',
      'A common error is to use EAC = BAC ÷ CPI. The prescribed method is EAC = AC + ETC, with ETC based on the chosen assumption.'
    ),
    calcQ(
      'ch14-t-q16',
      'A second project has PV = $150,000; EV = $180,000; AC = $170,000; BAC = $600,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI, and (e) TCPI. Interpret each result.',
      [
        part(
          'a',
          'a',
          'Schedule variance (SV)',
          2,
          'SV = EV − PV = $180,000 − $150,000 = +$30,000. The project is $30,000 ahead of schedule.',
          { numericAnswer: 30000, tolerance: 1, unit: '$', formula: 'SV = EV − PV' }
        ),
        part(
          'b',
          'b',
          'Cost variance (CV)',
          2,
          'CV = EV − AC = $180,000 − $170,000 = +$10,000. The project is $10,000 under budget.',
          { numericAnswer: 10000, tolerance: 1, unit: '$', formula: 'CV = EV − AC' }
        ),
        part(
          'c',
          'c',
          'Schedule performance index (SPI)',
          2,
          'SPI = EV ÷ PV = $180,000 ÷ $150,000 = 1.20 or 120%. The project is ahead of schedule.',
          { numericAnswer: 1.2, tolerance: 0.001, unit: '', formula: 'SPI = EV ÷ PV' }
        ),
        part(
          'd',
          'd',
          'Cost performance index (CPI)',
          2,
          'CPI = EV ÷ AC = $180,000 ÷ $170,000 = 1.0588 or 105.88%. The project is under budget.',
          { numericAnswer: 1.0588, tolerance: 0.001, unit: '', formula: 'CPI = EV ÷ AC' }
        ),
        part(
          'e',
          'e',
          'To-complete performance index (TCPI)',
          3,
          'TCPI = (BAC − EV) ÷ (BAC − AC) = ($600,000 − $180,000) ÷ ($600,000 − $170,000) = $420,000 ÷ $430,000 = 0.9767 or 97.67%. The remaining work can be completed at slightly less than plan efficiency and still finish within the original budget.',
          { numericAnswer: 0.9767, tolerance: 0.001, unit: '', formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)' }
        )
      ],
      'The project is ahead of schedule and under budget. TCPI is below 1.0, which means the team has some cost buffer for the remaining work. The project manager should protect the gains, confirm that the earned value is genuine, and continue monitoring.',
      'Do not interpret an SPI above 1.0 as “over budget”. SPI is schedule; CPI is cost.'
    )
  ]
};
