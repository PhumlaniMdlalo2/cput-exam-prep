import type { ObjectiveBank } from '../types';
import { mcq, tf } from '../../questionHelpers';

export const ch11Bank: ObjectiveBank = {
  mcq: [
    mcq(
      'ch11-o-m1',
      'The risk management plan primarily describes:',
      [
        'The list of all project risks and their owners',
        'How risk management processes will be implemented, prioritised, monitored and performed',
        'The project schedule and cost baseline',
        'The quality standards for deliverables'
      ],
      'b',
      'The risk management plan describes how risks are identified, prioritised and monitored, and how risk management activities will be planned and performed. The risk register holds the individual risks.',
      'The risk register is a repository of risks; the risk management plan is the process plan.'
    ),
    mcq(
      'ch11-o-m2',
      'A risk breakdown structure (RBS) is best described as:',
      [
        'A hierarchical organisation of risks by category',
        'A list of project team roles',
        'A schedule of risk review meetings',
        'A budget for risk responses'
      ],
      'a',
      'An RBS presents a hierarchical organisation of risks based on categories such as operational, strategic, finance, external and project management.',
      'Do not confuse the RBS with the WBS or resource breakdown structure.'
    ),
    mcq(
      'ch11-o-m3',
      'A contingency reserve is intended to cover:',
      [
        'Unknown-unknowns',
        'Known-unknowns that have been identified and may be triggered',
        'All project costs',
        'Only opportunities'
      ],
      'b',
      'Known-unknowns are identified risks that may or may not happen. A contingency reserve is established to pay for them if they are triggered.',
      'Unknown-unknowns are covered by a management reserve.'
    ),
    mcq(
      'ch11-o-m4',
      'A management reserve is usually sized by:',
      [
        'Adding 10% to every work package',
        'Negotiating based on stakeholder confidence in the project understanding',
        'Dividing the contingency reserve by two',
        'Using the CPI'
      ],
      'b',
      'The management reserve covers unknown-unknowns. Its amount is often negotiated based on the confidence the project manager and key stakeholders have in their understanding of the project.',
      'The management reserve is not a fixed percentage.'
    ),
    mcq(
      'ch11-o-m5',
      'During a risk brainstorming session, the facilitator should:',
      [
        'Reject ideas that seem unrealistic',
        'Record every idea without rejecting it during the session',
        'Limit the session to the project manager’s list',
        'Only consider threats'
      ],
      'b',
      'Every idea is treated as useful during brainstorming because an odd idea can trigger a real risk. Ideas can be evaluated later.',
      'Judging ideas too early reduces the number of risks identified.'
    ),
    mcq(
      'ch11-o-m6',
      'The main advantage of the Delphi technique is that it:',
      [
        'Requires all experts to meet in person',
        'Uses anonymous expert input to avoid groupthink and prejudice',
        'Produces a quantitative Monte Carlo model',
        'Eliminates the need for a risk register'
      ],
      'b',
      'Delphi collects anonymous expert opinions, summarises them and recirculates them until consensus is reached. Anonymity reduces groupthink and prejudice.',
      'Delphi does not require face-to-face meetings.'
    ),
    mcq(
      'ch11-o-m7',
      'SWOT analysis examines:',
      [
        'Strengths, weaknesses, opportunities and threats',
        'Scope, work, organisation and time',
        'Schedule, work, output and testing',
        'Suppliers, workers, owners and teams'
      ],
      'a',
      'SWOT stands for strengths, weaknesses, opportunities and threats. It identifies positive risks as well as negative ones.',
      'SWOT is broader than a threat-only review.'
    ),
    mcq(
      'ch11-o-m8',
      'Root cause analysis is used to:',
      [
        'Calculate the expected monetary value of a risk',
        'Determine the fundamental reason for a variance, defect or risk',
        'Rank risks by probability only',
        'Transfer risk to a contractor'
      ],
      'b',
      'Root cause analysis determines the fundamental or causal reason affecting one or more variances, defects or risks.',
      'Root cause analysis explains why; it does not by itself price the risk.'
    ),
    mcq(
      'ch11-o-m9',
      'A trigger condition is:',
      [
        'A risk that has already occurred',
        'A predefined situation that prompts the team to invoke a risk strategy or action',
        'The total budget for risk responses',
        'The risk owner’s authority limit'
      ],
      'b',
      'A trigger condition is a situation identified in advance that prompts the team to invoke a risk strategy or action. It is an early warning.',
      'A trigger is not the same as the risk event.'
    ),
    mcq(
      'ch11-o-m10',
      'The risk register is best described as:',
      [
        'A one-time list created at project initiation',
        'A living repository recording the outputs of risk management processes',
        'A contract with the risk owner',
        'A substitute for the risk management plan'
      ],
      'b',
      'The risk register is a living repository. It is built in stages as identification, analysis and response planning add information.',
      'The register must be updated as risks change.'
    ),
    mcq(
      'ch11-o-m11',
      'Qualitative risk analysis primarily uses which two criteria?',
      [
        'Cost and schedule',
        'Probability and impact',
        'Scope and quality',
        'Likelihood and budget'
      ],
      'b',
      'Qualitative analysis assesses the probability of occurrence and the impact on objectives, then combines them to prioritise risks.',
      'Cost and schedule are impact categories, not the two analysis criteria.'
    ),
    mcq(
      'ch11-o-m12',
      'Monte Carlo simulation is a technique used in:',
      [
        'Qualitative risk analysis only',
        'Quantitative risk analysis',
        'Cost-benefit analysis only',
        'Stakeholder analysis'
      ],
      'b',
      'Monte Carlo simulation is a quantitative technique that models uncertainties and their impact on project objectives.',
      'Simulation is quantitative, not qualitative.'
    ),
    mcq(
      'ch11-o-m13',
      'A tornado diagram is most closely associated with:',
      [
        'Sensitivity analysis',
        'Decision tree analysis',
        'FMEA',
        'Root cause analysis'
      ],
      'a',
      'Sensitivity analysis is often represented by a tornado diagram, which ranks uncertainties by their impact on a project goal.',
      'Decision trees use EMV; FMEA studies failure modes.'
    ),
    mcq(
      'ch11-o-m14',
      'A fixed-price contract is often used to:',
      [
        'Avoid all risk',
        'Transfer cost risk to the contractor',
        'Eliminate the need for a risk register',
        'Guarantee that the project will be on time'
      ],
      'b',
      'A fixed-price contract transfers cost risk to the contractor, who usually charges a higher price for accepting it. The risk is moved, not removed.',
      'Fixed-price contracts do not eliminate risk or guarantee schedule performance.'
    ),
    mcq(
      'ch11-o-m15',
      'Which strategy shares an opportunity with another party that can help realise it?',
      ['Exploit', 'Enhance', 'Share', 'Transfer'],
      'c',
      'Sharing an opportunity involves another party, such as a joint venture or selling the rights. Exploit and enhance are also opportunity strategies, but they do not necessarily involve sharing.',
      'Transfer is a threat strategy; share is an opportunity strategy.'
    )
  ],
  tf: [
    tf(
      'ch11-o-t1',
      'A risk can have either a negative or a positive impact on project objectives.',
      true,
      'Threats are negative risks; opportunities are positive risks. Both are uncertainties that can affect objectives.',
      'Do not define risk as only a bad event.'
    ),
    tf(
      'ch11-o-t2',
      'Every identified risk must have a full contingency plan, no matter how minor.',
      false,
      'Minor risks can be placed on a watch list and monitored informally. Major risks need contingency plans or further analysis. The response should be proportionate to the risk.',
      'Not every risk needs the same level of response.'
    ),
    tf(
      'ch11-o-t3',
      'Quantitative risk analysis is used on every project.',
      false,
      'All projects use qualitative analysis, but quantitative analysis is used only when needed and when sufficient data exists to develop appropriate models.',
      'Quantitative analysis is selective, not universal.'
    ),
    tf(
      'ch11-o-t4',
      'A risk register should record a risk owner.',
      true,
      'A named owner creates accountability for monitoring the risk and ensuring the response is carried out.',
      'A risk can have contributors, but one person should own it.'
    ),
    tf(
      'ch11-o-t5',
      'Avoiding a risk eliminates the threat by changing the plan or scope.',
      true,
      'Avoidance changes the plan or scope so that the threat is eliminated, or decides not to do the project when the risks outweigh the benefits.',
      'Avoidance is not the same as mitigation or acceptance.'
    ),
    tf(
      'ch11-o-t6',
      'Mitigation reduces the probability and/or impact of a risk.',
      true,
      'Mitigation can lower the probability, reduce the impact, build redundancy, or use more reliable methods.',
      'Mitigation does not necessarily eliminate the risk.'
    ),
    tf(
      'ch11-o-t7',
      'Residual risk is the risk that remains after a response has been applied.',
      true,
      'Residual risks must still be monitored. A response may reduce but not eliminate a risk.',
      'Do not assume a response removes all risk.'
    ),
    tf(
      'ch11-o-t8',
      'A trigger condition is the same thing as a risk event.',
      false,
      'A trigger condition is an early warning that a risk event may be about to happen. The risk event is the uncertain event itself.',
      'Trigger = warning sign; risk event = the event.'
    ),
    tf(
      'ch11-o-t9',
      'Most project risks are typically discovered late in the project life cycle.',
      false,
      'More risks are generally uncovered early in the life of a project, and the cost per risk discovered early is lower. Late discoveries can be expensive.',
      'Early identification is cheaper and more useful.'
    ),
    tf(
      'ch11-o-t10',
      'A fixed-price contract transfers cost risk to the contractor.',
      true,
      'The contractor accepts more cost risk under a fixed-price contract and usually charges a higher price for doing so. The risk is transferred, not eliminated.',
      'Transfer moves risk; it does not make the risk disappear.'
    )
  ]
};
