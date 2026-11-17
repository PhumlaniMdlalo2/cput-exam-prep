import type { Question } from '../../../types/content';
import { caseQ, essayQ, mp } from '../../questionHelpers';

export const ch11Written: Question[] = [
  essayQ(
    'w11-01',
    10,
    'Explain the risk management process and state the main purpose of each step.',
    'The risk management process moves through planning, identification, analysis, response planning and monitoring. Plan risk management sets the approach, roles, funding and timing. Identify risks determines which risks could affect the project and records their characteristics. Perform qualitative risk analysis prioritises risks by probability and impact. Perform quantitative risk analysis numerically evaluates the combined effect of priority risks on objectives. Plan risk responses selects options and actions to enhance opportunities and reduce threats. Monitor risks tracks identified risks, identifies new risks, evaluates response effectiveness and adjusts the risk register and reserves.',
    [
      mp('Plan risk management: approach, roles, funding and timing', ['plan risk management', 'approach', 'roles'], 2),
      mp('Identify risks: determine and record risks and characteristics', ['identify', 'risk register', 'characteristics'], 2),
      mp('Analyse risks: qualitative prioritisation and quantitative evaluation', ['qualitative', 'quantitative', 'prioritise'], 2),
      mp('Plan risk responses: enhance opportunities and reduce threats', ['response', 'opportunit', 'threat'], 2),
      mp('Monitor risks: track, review, identify new risks and adjust reserves', ['monitor', 'track', 'reserve'], 2)
    ],
    'A full-mark answer follows the process in order and gives the purpose of each step, not just a list of names.',
    'Do not confuse risk identification with risk response planning.'
  ),
  essayQ(
    'w11-02',
    10,
    'Distinguish between a risk and an issue, and between risk appetite and risk tolerance. Use examples.',
    'A risk is an uncertain event that may occur in the future and, if it occurs, affects project objectives. An issue is a problem that has already occurred and must be managed now. Risk appetite is the degree of uncertainty an organisation is willing to accept in pursuit of reward. Risk tolerance is the measurable amount or range of variation the organisation can accept in a specific area. A project may have an appetite for schedule risk but a low tolerance for safety risk. Positive risks are opportunities; negative risks are threats. A supplier delay that might happen is a risk; a supplier delay that has already happened is an issue.',
    [
      mp('Risk is uncertain and future; issue has already occurred', ['uncertain', 'future', 'already occurred', 'issue'], 2),
      mp('Risk appetite is willingness to accept uncertainty for reward', ['appetite', 'willing', 'reward'], 2),
      mp('Risk tolerance is the measurable acceptable variation or range', ['tolerance', 'measurable', 'range', 'variation'], 2),
      mp('Distinguishes positive risk (opportunity) and negative risk (threat)', ['opportunit', 'threat', 'positive', 'negative'], 2),
      mp('Uses a relevant example to show the distinction', ['example', 'supplier', 'delay', 'safety'], 2)
    ],
    'The distinction is about timing and certainty: risk is uncertain and in the future; an issue is certain and present.',
    'Do not describe risk appetite and risk tolerance as the same thing.'
  ),
  essayQ(
    'w11-03',
    10,
    'Describe the contents and purpose of a risk register. Explain how it is used during the project.',
    'The risk register is the living document that records identified risks and how they will be managed. It typically contains a risk ID, risk description, cause and effect, category, owner, probability, impact, priority or risk score, response strategy, response actions, trigger or warning sign, residual risk and status. It is used to prioritise attention, assign ownership, plan responses, track triggers, record changes, report to stakeholders and support reserve analysis. It is updated at reviews and whenever a risk occurs, closes or changes. It links to the risk management plan and lessons learned.',
    [
      mp('Records risk ID, description, cause and effect', ['risk id', 'description', 'cause', 'effect'], 2),
      mp('Contains owner, probability, impact and priority or score', ['owner', 'probability', 'impact', 'priority', 'score'], 2),
      mp('Records response strategy, actions and trigger', ['response', 'trigger', 'action'], 2),
      mp('Tracks residual risk and status, and is updated regularly', ['residual', 'status', 'update'], 2),
      mp('Supports reporting, reserve analysis and lessons learned', ['report', 'reserve', 'lessons learned'], 2)
    ],
    'A good answer treats the risk register as a living management tool, not a one-off list.',
    'Do not omit the risk owner and the response strategy.'
  ),
  essayQ(
    'w11-04',
    10,
    'Explain how qualitative risk analysis prioritises risks. Include the probability–impact matrix and the role of the risk owner.',
    'Qualitative risk analysis prioritises identified risks for further analysis or action by assessing probability of occurrence, impact on objectives if it occurs, and other factors such as urgency, proximity and manageability. A probability–impact matrix plots risks into zones such as low, moderate, high or critical, producing a priority ranking. The organisation defines the scale and thresholds. The risk owner is assigned to monitor the risk, implement the response and report changes. Qualitative analysis is fast and useful when numerical data is limited; it must be repeated as the project changes.',
    [
      mp('Assesses probability and impact on objectives', ['probability', 'impact', 'objectives'], 2),
      mp('Uses a probability–impact matrix with defined scales and zones', ['matrix', 'scale', 'zone', 'threshold'], 2),
      mp('Produces a priority ranking for further action', ['priority', 'rank', 'further'], 2),
      mp('Assigns a risk owner to monitor and report', ['owner', 'monitor', 'report'], 2),
      mp('Recognises it is iterative and used when numerical data is limited', ['iterative', 'repeat', 'limited', 'data'], 2)
    ],
    'Qualitative analysis prioritises; it does not normally produce a precise monetary value for the risk.',
    'Do not claim that the matrix gives an exact expected monetary value.'
  ),
  essayQ(
    'w11-05',
    10,
    'Discuss quantitative risk analysis techniques and explain when they are useful.',
    'Quantitative risk analysis numerically analyses the effect of identified risks on overall project objectives. Techniques include expected monetary value (EMV), decision trees, Monte Carlo simulation, sensitivity analysis and modelling. EMV multiplies probability by impact and is useful for comparing alternatives. Decision trees show choices, chances and outcomes. Monte Carlo simulates many combinations of risks to show the range of possible cost or schedule outcomes. Sensitivity analysis identifies which risks have the greatest effect. These techniques require reliable data and are most useful for large, complex or strategically important projects.',
    [
      mp('Numerically analyses the combined effect of risks on objectives', ['numerical', 'combined', 'objectives'], 2),
      mp('Expected monetary value: probability × impact', ['expected monetary value', 'emv', 'probability', 'impact'], 2),
      mp('Decision trees, Monte Carlo simulation or sensitivity analysis', ['decision tree', 'monte carlo', 'sensitivity', 'simulation'], 2),
      mp('Shows a range of outcomes and supports contingency reserve decisions', ['range', 'reserve', 'contingency', 'outcome'], 2),
      mp('Requires reliable data and suits large or complex projects', ['reliable data', 'large', 'complex', 'strategic'], 2)
    ],
    'Quantitative analysis is not automatically better; it depends on the quality of the data.',
    'Do not use EMV as a guarantee of the actual outcome.'
  ),
  essayQ(
    'w11-06',
    10,
    'Explain the negative risk response strategies and give an example of each.',
    'Negative risk responses are avoid, transfer, mitigate, accept and escalate. Avoid changes the plan to eliminate the threat or its cause, for example choosing a proven technology instead of an unproven one. Transfer shifts the impact to a third party, for example insurance or a fixed-price contract, but not the ownership of the risk. Mitigate reduces the probability or impact, for example testing early or adding redundancy. Accept acknowledges the risk and prepares a contingency plan or reserve. Escalate moves the risk to a higher authority when it is outside the project’s scope or authority.',
    [
      mp('Avoid eliminates the threat or its cause', ['avoid', 'eliminate', 'cause'], 2),
      mp('Transfer shifts impact to a third party, not ownership', ['transfer', 'third party', 'insurance', 'not ownership'], 2),
      mp('Mitigate reduces probability or impact', ['mitigate', 'reduce', 'probability', 'impact'], 2),
      mp('Accept acknowledges the risk and uses contingency or reserve', ['accept', 'contingency', 'reserve'], 2),
      mp('Escalate moves the risk to higher authority where appropriate', ['escalate', 'higher authority', 'outside'], 2)
    ],
    'Each strategy needs a concrete example. Transfer does not remove the risk from the project.',
    'Do not say transfer eliminates the risk; it shifts the financial or contractual impact.'
  ),
  essayQ(
    'w11-07',
    10,
    'Explain the positive risk response strategies and give an example of each.',
    'Positive risk responses are exploit, share, enhance, accept and escalate. Exploit ensures the opportunity is realised, for example assigning the best resources to a high-value feature. Share allocates ownership of the opportunity to a third party best able to capture it, for example a joint venture or partnership. Enhance increases the probability or impact of the opportunity, for example adding resources to finish early. Accept acknowledges the opportunity but takes no proactive action unless it occurs. Escalate moves the opportunity to a higher authority when it is outside the project’s authority.',
    [
      mp('Exploit ensures the opportunity is realised', ['exploit', 'realis', 'ensure'], 2),
      mp('Share allocates ownership to a third party best able to capture it', ['share', 'third party', 'partnership', 'joint venture'], 2),
      mp('Enhance increases probability or impact', ['enhance', 'increase', 'probability', 'impact'], 2),
      mp('Accept acknowledges the opportunity without proactive action', ['accept', 'acknowledge'], 2),
      mp('Escalate moves the opportunity to higher authority', ['escalate', 'higher authority'], 2)
    ],
    'The positive strategies mirror the negative ones, but the objective is to capture the opportunity.',
    'Do not use “avoid” for an opportunity.'
  ),
  essayQ(
    'w11-08',
    10,
    'Describe how risks are monitored and controlled throughout the project.',
    'Monitor risks involves tracking identified risks, monitoring residual risks, identifying new risks, evaluating the effectiveness of responses and adjusting the risk management approach. Activities include risk reviews, risk audits, reserve analysis, technical performance measurement and status meetings. Triggers or warning signs show when a risk is about to occur, so the response can be activated. The risk register is updated, closed risks are recorded and lessons are captured. Risk monitoring should be continuous and should involve the risk owners and relevant stakeholders.',
    [
      mp('Tracks identified and residual risks and identifies new risks', ['track', 'residual', 'new risk'], 2),
      mp('Evaluates response effectiveness and adjusts the approach', ['effectiveness', 'adjust', 'response'], 2),
      mp('Uses reviews, audits, reserve analysis and status meetings', ['review', 'audit', 'reserve', 'status meeting'], 2),
      mp('Uses triggers or warning signs to activate responses', ['trigger', 'warning sign', 'activate'], 2),
      mp('Updates the risk register and captures lessons learned', ['update', 'risk register', 'lessons learned'], 2)
    ],
    'Monitoring is not passive reporting; it leads to adjustments and action.',
    'Do not treat risk monitoring as a one-time end-of-project activity.'
  ),
  essayQ(
    'w11-09',
    10,
    'Explain how Agile approaches manage uncertainty and risk differently from plan-driven approaches.',
    'Agile approaches accept uncertainty and manage it through short iterations, frequent delivery and continuous feedback rather than trying to specify everything upfront. The product backlog is prioritised, and the highest-value or highest-risk items are tackled early. Practices such as spikes, prototypes, retrospectives, continuous integration and definition of done reduce uncertainty. Risks are discussed in daily stand-ups and iteration reviews. Plan-driven approaches rely more on upfront risk identification, detailed analysis, documented response plans and reserve funds. Both approaches use risk registers and owners, but Agile shortens feedback loops.',
    [
      mp('Agile accepts uncertainty and uses short iterations and feedback', ['uncertainty', 'iteration', 'feedback'], 2),
      mp('Prioritises high-value or high-risk items early in the backlog', ['backlog', 'priorit', 'early'], 2),
      mp('Uses spikes, prototypes, retrospectives or continuous integration', ['spike', 'prototype', 'retrospective', 'continuous integration'], 2),
      mp('Plan-driven relies on upfront identification, analysis and documented responses', ['upfront', 'identification', 'documented', 'plan-driven'], 2),
      mp('Both use risk ownership and monitoring, but Agile shortens feedback loops', ['owner', 'monitor', 'shorter feedback', 'both'], 2)
    ],
    'The contrast is about when and how often risk is addressed, not whether risk matters.',
    'Do not claim Agile projects have no risk management.'
  ),
  caseQ(
    'w11-10',
    10,
    'Identify the risk, assess its impact, and recommend how the project manager should respond and monitor it.',
    'A construction project relies on a single supplier for a critical component. The supplier has warned that delivery may slip by four weeks because of a labour dispute. The project manager has not yet assessed the impact on the schedule or budget.',
    'Identify the risk and classify it as a threat or opportunity. Assess its probability and impact on scope, schedule, cost and quality. Record it in the risk register with an owner, trigger and response. Evaluate response options such as finding a second supplier (mitigate), negotiating a fixed delivery penalty or insurance (transfer), re-sequencing work (avoid or mitigate), or accepting the delay with a contingency reserve. Monitor the labour dispute and update the schedule and budget forecasts.',
    [
      mp('Identifies the supplier delay as a negative risk or threat', ['supplier', 'delay', 'threat', 'negative'], 2),
      mp('Assesses probability and impact on schedule, cost, scope and quality', ['probability', 'impact', 'schedule', 'cost'], 2),
      mp('Records the risk with an owner, trigger and response in the risk register', ['register', 'owner', 'trigger', 'response'], 2),
      mp('Evaluates appropriate responses such as mitigate, transfer, avoid or accept', ['mitigate', 'transfer', 'avoid', 'accept', 'second supplier'], 2),
      mp('Monitors the risk and updates forecasts and reserves', ['monitor', 'forecast', 'reserve', 'update'], 2)
    ],
    'A strong answer moves through identification, analysis, response and monitoring, and applies it to the case.',
    'Do not jump straight to a solution without assessing impact.'
  )
];
