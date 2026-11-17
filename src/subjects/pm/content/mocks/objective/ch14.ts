import type { ObjectiveBank } from '../types';
import { mcq, tf } from '../../questionHelpers';

export const ch14Bank: ObjectiveBank = {
  mcq: [
    mcq(
      'ch14-o-m1',
      'Which perspective of the project balanced scorecard includes manage quality, control quality and control scope?',
      ['Internal project', 'Customer', 'Financial', 'Growth and innovation'],
      'b',
      'The customer perspective includes manage quality, control quality and control scope. The financial perspective includes control resources, schedule and costs.',
      'Quality and scope are customer-perspective processes.'
    ),
    mcq(
      'ch14-o-m2',
      'Direct and manage project work is best described as:',
      [
        'Comparing actual performance with the plan',
        'Performing the work defined in the project management plan, including approved changes',
        'Approving or rejecting change requests',
        'Closing the project'
      ],
      'b',
      'Direct and manage project work means performing the work in the plan, including approved changes, to accomplish project objectives.',
      'Monitoring and controlling is the comparison activity.'
    ),
    mcq(
      'ch14-o-m3',
      'Which type of control compares work with the plan on a continual basis?',
      ['Go/no-go control', 'Steering control', 'Scope control', 'Quality control'],
      'b',
      'Steering control continuously compares progress with the plan and allows adjustments as often as necessary. Go/no-go control requires approval to continue at a milestone or decision point.',
      'Steering is continuous; go/no-go is a gate.'
    ),
    mcq(
      'ch14-o-m4',
      'What is the final step in the Perform Integrated Change Control process?',
      [
        'Review the change proposal',
        'Estimate the impact of the change',
        'Approve or decline the change',
        'Manage changes to deliverables, schedule, budget and the project management plan'
      ],
      'd',
      'The steps are document the request, review and estimate impact, decide, then manage the approved change. Managing the change is the final step.',
      'Approval is not the end; the change must still be implemented and documented.'
    ),
    mcq(
      'ch14-o-m5',
      'Work performance information is:',
      [
        'Raw observations and measurements from execution',
        'Performance data analysed in context and integrated across areas',
        'The final project report',
        'A change request form'
      ],
      'b',
      'Work performance data are the raw observations. Work performance information is that data analysed in context and integrated. Reports compile the information.',
      'Data is raw; information is analysed.'
    ),
    mcq(
      'ch14-o-m6',
      'A customer asks for a scope increase after the baseline. The project manager’s first response should be to:',
      [
        'Approve it if it seems reasonable',
        'Perform integrated change control and assess the impact',
        'Calculate the SPI',
        'Reject it without discussion'
      ],
      'b',
      'The project manager should document the request and perform integrated change control: assess impact on scope, schedule, cost, quality, risk and team, then decide through the proper authority.',
      'Do not approve changes before understanding their impact.'
    ),
    mcq(
      'ch14-o-m7',
      'Which quality control tool is a vertical bar chart used to identify the vital few causes of a problem?',
      ['Ishikawa diagram', 'Pareto chart', 'Control chart', 'Run chart'],
      'b',
      'A Pareto chart ranks causes and applies the 80/20 rule to identify the vital few sources responsible for most of the problem.',
      'The Ishikawa diagram organises causes; the Pareto chart ranks them.'
    ),
    mcq(
      'ch14-o-m8',
      'A run chart is used to look for:',
      [
        'Trends, abrupt changes, repeating patterns and outliers over time',
        'The ratio of EV to PV',
        'The cost of conformance',
        'The risk breakdown structure'
      ],
      'a',
      'A run chart shows how one aspect of a process changes over time. Teams look for trends, abrupt changes, repeating patterns and outliers.',
      'A run chart is a time-series view; a control chart adds control limits.'
    ),
    mcq(
      'ch14-o-m9',
      'Earned value management integrates:',
      [
        'Scope, cost and schedule objectives into a single baseline plan',
        'Quality, risk and procurement only',
        'Only cost and schedule',
        'Only scope and quality'
      ],
      'a',
      'EVM integrates scope, cost and schedule into a single baseline plan for tracking performance. It helps forecast cost and schedule outcomes.',
      'EVM is broader than cost tracking alone.'
    ),
    mcq(
      'ch14-o-m10',
      'Which formula calculates the estimate to complete when past cost efficiency is expected to continue?',
      [
        'ETC = BAC − EV',
        'ETC = (BAC − EV) ÷ CPI',
        'ETC = AC + EV',
        'ETC = BAC ÷ SPI'
      ],
      'b',
      'The efficiency method is ETC = (BAC − EV) ÷ CPI. The plan method is ETC = BAC − EV.',
      'Do not forget to divide by CPI in the efficiency method.'
    )
  ],
  tf: [
    tf(
      'ch14-o-t1',
      'Schedule variance is calculated as EV minus PV.',
      true,
      'SV = EV − PV. A negative result means the project is behind schedule; a positive result means it is ahead.',
      'SV starts with EV, not PV.'
    ),
    tf(
      'ch14-o-t2',
      'A CPI greater than 1.0 means the project is under budget.',
      true,
      'CPI = EV ÷ AC. Above 1.0 means the project is earning more value than it is spending, so it is under budget.',
      'CPI is cost efficiency; SPI is schedule efficiency.'
    ),
    tf(
      'ch14-o-t3',
      'An SPI of 0.90 means the project is behind schedule.',
      true,
      'SPI = EV ÷ PV. Below 1.0 means less work has been earned than planned, so the project is behind schedule.',
      'Do not interpret an SPI below 1.0 as over budget.'
    ),
    tf(
      'ch14-o-t4',
      'A negative cost variance means the project is under budget.',
      false,
      'CV = EV − AC. A negative result means earned value is less than actual cost, so the project is over budget.',
      'Negative variance is unfavourable.'
    ),
    tf(
      'ch14-o-t5',
      'EAC is calculated as AC plus ETC.',
      true,
      'EAC = AC + ETC. The actual cost to date plus the estimate to complete gives the forecast total cost.',
      'Do not add ETC to EV or BAC.'
    ),
    tf(
      'ch14-o-t6',
      'A TCPI greater than 1.0 means the team must improve cost efficiency to finish within the remaining budget.',
      true,
      'TCPI compares remaining work with remaining budget. Above 1.0 means the remaining work must be done more efficiently than plan to stay within budget.',
      'TCPI below 1.0 means there is some cost buffer.'
    ),
    tf(
      'ch14-o-t7',
      'Monitoring involves capturing project performance data against the plan.',
      true,
      'Monitoring reviews progress, captures performance data, develops measures and communicates performance information. Controlling uses that information to decide on action.',
      'Monitoring gathers; controlling decides.'
    ),
    tf(
      'ch14-o-t8',
      'Controlling includes comparing actual performance with planned performance and analysing variances.',
      true,
      'Controlling assesses actual performance, compares it with the plan, determines variances, analyses trends, evaluates alternatives and recommends corrective action.',
      'Controlling is not only reporting; it leads to action.'
    ),
    tf(
      'ch14-o-t9',
      'The change control board normally consists only of the project manager.',
      false,
      'The CCB often includes the project manager, sponsor, project core team and perhaps other key stakeholders. It is a formal group with authority to review and decide on changes.',
      'The CCB is broader than one person.'
    ),
    tf(
      'ch14-o-t10',
      'A scope change never affects cost or schedule.',
      false,
      'A scope change always affects cost and/or schedule. That is why proposed scope changes go through integrated change control.',
      'Scope, cost and schedule are linked.'
    ),
    tf(
      'ch14-o-t11',
      'A burn-down chart starts at the total planned work and works toward zero.',
      true,
      'A burn-down chart starts at the total amount of planned work for a sprint and moves toward zero as work is completed.',
      'A burn-up chart starts at zero and rises toward the total.'
    ),
    tf(
      'ch14-o-t12',
      'A burn-up chart starts at the total planned work and works toward zero.',
      false,
      'That describes a burn-down chart. A burn-up chart starts at zero and works up toward the total amount of work expected.',
      'Burn-down goes down; burn-up goes up.'
    ),
    tf(
      'ch14-o-t13',
      'A project audit should produce performance data, process and quality data, and risk/stakeholder data.',
      true,
      'A practical audit pack covers delivery performance against the baseline, process and quality results, and risk, issue and stakeholder outcomes.',
      'An audit is broader than a financial check.'
    ),
    tf(
      'ch14-o-t14',
      'Approved change requests can authorise work even when the original WBS did not include that work.',
      true,
      'The WBS is the main basis for authorising work, but approved changes, risk responses, audit findings, defect repair and other triggers can also authorise work.',
      'The WBS is necessary but not the only trigger.'
    ),
    tf(
      'ch14-o-t15',
      'Earned value management can be used to forecast the project’s final cost.',
      true,
      'EVM uses ETC, EAC and TCPI to forecast the cost needed to complete the project and the efficiency required to finish within budget.',
      'EVM is both a performance measure and a forecasting tool.'
    )
  ]
};
