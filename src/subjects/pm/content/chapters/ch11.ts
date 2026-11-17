import type { Chapter } from '../../types/content';
import { callout, def, h3, h4, img, list, p, steps, table } from '../blocks';

export const chapter11: Chapter = {
  id: 'ch11',
  number: 11,
  title: 'Risk Management',
  subtitle: 'Plan, identify, analyse, respond to and monitor project risk',
  description:
    'How project teams decide what could affect project success, how to analyse and prioritise it, and how to respond to both threats and opportunities.',
  examFocus: [
    'Risk events and the difference between threats and opportunities',
    'Plan risk management, the risk management plan and the risk breakdown structure',
    'Identify and define risk events',
    'Qualitative and quantitative risk analysis',
    'Plan risk responses, including the eight risk strategies',
    'The risk register and monitoring risk',
    'Positive and negative risk'
  ],
  topics: ['Risk events', 'Risk planning', 'Risk analysis', 'Risk responses', 'Risk register'],
  sections: [
    {
      id: 'risk-and-success',
      title: 'Risk and project success',
      blocks: [
        p(
          'Plan risk management describes how the risk management processes are implemented and how they fit with the other project management processes. A future event is considered a project risk if it threatens the successful accomplishment of one or more project goals.'
        ),
        def(
          'Project risk',
          'Anything that may impact the project team’s ability to achieve the general project success measures and the specific project stakeholders’ priorities, which together are referred to as project objectives.'
        ),
        def(
          'Threat',
          'A risk that would adversely impact one or more project objectives if it occurs. A threat is a negative risk.'
        ),
        def(
          'Opportunity',
          'Any uncertainty that has a positive impact on one or more project objectives. An opportunity is a positive risk.'
        ),
        h3('Four categories of project success measures'),
        p(
          'A risk can affect any of the four success measures below. This is why risk management starts by understanding what “success” means for the project and its stakeholders.'
        ),
        table(
          ['Success measure', 'What it means'],
          [
            [
              'Meeting agreements',
              'Cost, schedule and specifications are met, including performance and quality requirements.'
            ],
            [
              'Customer’s success',
              'Needs are met, deliverables are actually used, and the customer is satisfied.'
            ],
            [
              'Performing organization’s success',
              'Market share, new products and new technology result from the project.'
            ],
            [
              'Project team’s success',
              'Loyalty, development, satisfaction, reward and recognition for the people doing the work.'
            ]
          ]
        ),
        h3('Stakeholder priorities and trade-offs'),
        p(
          'Different stakeholders value different outcomes. Plan risk management must therefore identify what the project plan calls for, which improvements the most important stakeholders value, and where stakeholders are willing to sacrifice to enable those improvements.'
        ),
        h4('Three risk management activities'),
        list(
          [
            'Decide what level of risk premium to charge for the project. The team rates factors such as project size, complexity, technology and type. The combined ratings dictate a risk premium of zero, ten or twenty percent added to the estimated project cost; very risky projects may require executive approval.',
            'Mitigate risk external to the firm through contract clauses, and risk internal to the firm through agreements.',
            'Manage the risk carefully through specifically designed meetings and reports, such as weekly conference calls.'
          ],
          true
        ),
        callout(
          'exam',
          'Exam link',
          'If a question asks for the four categories of project success measures, answer with meeting agreements, customer’s success, performing organization’s success and project team’s success. If it asks for threats and opportunities, define both as uncertainties with negative and positive impacts on project objectives.'
        )
      ]
    },
    {
      id: 'risk-management-planning',
      title: 'Plan risk management',
      blocks: [
        def(
          'Risk management plan',
          'The part of the project management plan that describes how risks are identified, prioritised and monitored for changing priorities, and how prioritised risk management activities will be planned and performed. It is also used for communicating with stakeholders and for follow-up analysis.'
        ),
        def(
          'Risk breakdown structure (RBS)',
          'A hierarchical organisation of risks based on categories such as operational, strategic, finance, external and project management. It is similar to a work breakdown structure (WBS) or resource breakdown structure in its hierarchical representation.'
        ),
        h3('Roles and responsibilities'),
        list([
          'Encourage wide participation in risk management activities.',
          'More perspectives considered means more risks are uncovered.',
          'Participation encourages buy-in to the risk management approach.',
          'Identify who is responsible for each risk.'
        ]),
        h3('Categories and definitions'),
        list([
          'More project risks are generally uncovered early in the life of a project.',
          'The cost per risk discovered early is lower; risks discovered late can be expensive.',
          'Categorising risks often leads to more thorough risk identification.',
          'Risks can be classified by stage of the project life cycle, the project objective that would be impacted, external versus internal to the project, or what is known versus unknown (uncertainty).'
        ]),
        h3('Knowns and unknowns'),
        table(
          ['Type', 'Meaning', 'How it is handled'],
          [
            [
              'Known-known',
              'Something that can be planned and managed with certainty. It is not a risk.',
              'Plan and manage it as ordinary project work.'
            ],
            [
              'Known-unknown',
              'A risk that can be identified, but its likelihood and impact are not known. It may or may not happen.',
              'Identify it, analyse it qualitatively (and quantitatively if useful), plan a response, and establish a contingency reserve.'
            ],
            [
              'Unknown-unknown',
              'A true uncertainty that cannot even be envisioned, so the required time and money cannot be estimated reliably.',
              'Cover it with a management reserve. The size is often negotiated based on the confidence the project manager and key stakeholders have in their understanding of the project.'
            ]
          ]
        ),
        callout(
          'warn',
          'Do not confuse the reserves',
          'Known-unknowns are covered by a contingency reserve. Unknown-unknowns are covered by a management reserve.'
        )
      ]
    },
    {
      id: 'identify-risks',
      title: 'Identify risks',
      blocks: [
        def(
          'Identify risks',
          'The process of determining which risks might affect the project and documenting their characteristics.'
        ),
        p(
          'Risk identification should involve the project team, stakeholders and people with relevant experience. A wide range of perspectives produces a more realistic risk list. Team members who have worked on similar projects are especially valuable, and team members should take a leadership role in monitoring risks during execution.'
        ),
        h3('Information-gathering techniques'),
        h4('Brainstorming'),
        list([
          'A facilitator repeatedly asks “What could go wrong?” for every activity in the WBS.',
          'Write one risk per sticky note.',
          'Treat every idea as useful; do not reject a risk during the session, because even an odd idea can trigger a real one.',
          'Virtual teams can use the same approach with careful planning.'
        ]),
        h4('Interviews and surveys'),
        p('Useful when the project is big, complex and uncertain.'),
        h4('SWOT analysis'),
        p(
          'A detailed analysis of the project’s strengths, weaknesses, opportunities and threats. Unlike techniques that only look for problems, SWOT also helps identify opportunities.'
        ),
        h4('Delphi technique'),
        p(
          'A group of experts gives input anonymously. Responses are summarised and recirculated until consensus is reached. Anonymity avoids groupthink and prejudice.'
        ),
        h3('Structured reviews of project documents'),
        p(
          'Review each planning document with a risk question in mind. Every wrong assumption becomes a risk.'
        ),
        table(
          ['Review of', 'Question to ask'],
          [
            ['Charter', 'Is each section clear and consistent with the others?'],
            ['Stakeholder register', 'What could upset any stakeholder?'],
            ['Communication plan', 'Where could poor communication cause trouble?'],
            [
              'Assumptions',
              'Can each be verified? Every wrong assumption becomes a risk.'
            ],
            ['Constraints', 'How does each constraint make the project harder?'],
            ['WBS', 'What can go wrong with each work package?'],
            ['Schedule', 'Which milestones and handoffs are troublesome?'],
            ['Resource demands', 'Where are people overloaded?'],
            [
              'Touchpoints',
              'What goes wrong when work is handed from one person to another?'
            ],
            [
              'Literature and previous projects',
              'What happened on similar projects? Check the lessons-learned database.'
            ],
            ['Peers and senior management', 'What additional risks can they see?']
          ]
        ),
        h3('Understanding relationships'),
        p(
          'Use a flow chart of how people, money, data or materials flow, and examine each handoff. Tacit knowledge is often lost at handoffs.'
        ),
        def(
          'Root cause analysis',
          'An analytical technique used to ascertain the fundamental or causal reason or reasons that affect one or more variances, defects or risks.'
        ),
        p(
          'Take each risk and ask “why?” repeatedly. A fishbone (cause-and-effect) diagram organises the causes. Once the causes are known, they can serve as trigger conditions.'
        ),
        def(
          'Trigger condition',
          'A situation that has been identified in advance that prompts the team to invoke a risk strategy or risk action.'
        ),
        callout(
          'tip',
          'Identification in practice',
          'A supplier who stops returning calls or emails is a trigger condition: it indicates that a risk is likely to occur. A trigger is not the risk event itself; it is the warning sign.'
        )
      ]
    },
    {
      id: 'risk-register',
      title: 'The risk register',
      blocks: [
        def(
          'Risk register',
          'A repository in which the outputs of the risk management processes are recorded. It identifies all identified risks, including description, category, cause, probability of occurrence, impact on objectives, proposed responses, owners and current status.'
        ),
        p('The risk register is built in stages:'),
        steps([
          'Risk identification adds categories, risks, causes and potential responses.',
          'Risk analysis adds probability, impact and priority.',
          'Risk response planning adds the strategy, risk owner and any plan changes.'
        ]),
        h3('What each register entry records'),
        list([
          'Risk description (the event).',
          'Cause and impact category: scope, schedule, cost, quality, business, technology, communications or procurement.',
          'Probability, impact and risk score.',
          'Response strategy.',
          'Risk owner.',
          'Trigger condition.',
          'Any schedule, budget or resource changes needed.'
        ]),
        h3('Example row'),
        table(
          ['Field', 'Example'],
          [
            ['Risk', 'Incomplete requirements in the RFP'],
            ['Probability', '5'],
            ['Impact', '4'],
            ['Score', '20'],
            [
              'Response',
              'Hold detailed requirements sessions and have the client confirm decisions'
            ]
          ]
        ),
        callout(
          'exam',
          'Why only one owner?',
          'A risk should have one named owner so that accountability is clear. The owner is responsible for monitoring the risk and ensuring the agreed response is carried out. Shared ownership without a named accountable person tends to produce no action.'
        )
      ]
    },
    {
      id: 'qualitative-analysis',
      title: 'Perform qualitative risk analysis',
      blocks: [
        def(
          'Perform qualitative risk analysis',
          'The process of evaluating the importance of each risk in order to categorise and then prioritise risks for further analysis or action by assessing and combining their probability of occurrence and impact.'
        ),
        p(
          'Qualitative analysis uses two primary questions: How likely is this risk to happen? If it does happen, how big will the impact be?'
        ),
        img(
          'risk-matrix.png',
          'Probability and impact risk matrix with a thick line separating major and catastrophic risks from minor and moderate risks',
          'The thick line separates the risks that need contingency plans or further analysis from those that can be listed and monitored informally.'
        ),
        h3('Reading the matrix'),
        list([
          'The thick line separates major and catastrophic risks, which need contingency plans or more analysis, from minor and moderate risks, which can be listed and monitored informally.',
          'Some teams colour-code the cells red, yellow and green.',
          'Rank risks higher when they are likely to occur early in the project.',
          'Rank risks higher when their trigger is hard to notice.'
        ]),
        h3('Cause-and-effect relationships'),
        p(
          'One way to assess the magnitude of an effect is to understand its cause. This is part of root cause analysis: changing the underlying cause can change the effect. A cause-and-effect diagram lists the risk as the effect at the head of the fish, names the big “bones” as categories, and completes the smaller bones with causes.'
        ),
        callout(
          'exam',
          'Major versus minor',
          'A major risk has a high probability and/or a high impact and requires a contingency plan or further analysis. A minor risk can be placed on a watch list and monitored. The matrix is a prioritisation tool, not a guarantee that a low-scoring risk will never happen.'
        )
      ]
    },
    {
      id: 'quantitative-analysis',
      title: 'Perform quantitative risk analysis',
      blocks: [
        def(
          'Perform quantitative risk analysis',
          'The process of developing insight using a detailed numerical estimate of the overall impact of identified risks on project objectives.'
        ),
        p(
          'All projects use qualitative risk analysis. Quantitative analysis is used only when it is needed and when there is sufficient data to develop appropriate models. It is more rigorous and more expensive.'
        ),
        h3('Quantitative techniques'),
        h4('Decision tree analysis'),
        p(
          'A graphic tool depicting alternative choices as branches, multiple options for each alternative, and evaluating potential outcomes in terms of uncertainty and monetary value. Potential outcomes are often determined using the expected monetary value (EMV) method.'
        ),
        h4('Expected monetary value (EMV) analysis'),
        p(
          'A statistical technique used to calculate the present value of future outcomes so that the best alternative can be chosen. It is generally used in engineering economics and cost-benefit analysis.'
        ),
        h4('Failure mode and effect analysis (FMEA)'),
        p(
          'Failure mode means the ways, or modes, in which something might fail. Failures are errors or defects, which can be potential or actual. Effects analysis studies the consequences of those failures. FMEA documents current knowledge and actions about the risks of failures and can be used for continuous improvement.'
        ),
        h4('Sensitivity analysis'),
        p(
          'A quantitative what-if technique that presents comparative analyses of various desirable outcomes with respect to a financial measure or uncertainty. It determines which risks have the most impact on project outcomes or goals.'
        ),
        p(
          'Tornado diagrams are often used to represent sensitivity analysis. A tornado diagram is a special type of bar chart: project goals are listed vertically and risk uncertainties are depicted horizontally. The largest bar appears at the top and the smallest at the bottom.'
        ),
        h4('Simulation'),
        p(
          'A technique that mimics real situations using uncertainties and assessing their impact on project objectives. In projects, Monte Carlo simulation is used to develop a probability distribution of risks and their impact on goals such as cost and time.'
        ),
        callout(
          'exam',
          'Which technique is which?',
          'Sensitivity analysis → tornado diagram. Simulation → Monte Carlo. Decision trees → EMV. Failure analysis → FMEA. Root cause → fishbone. Do not mix up the tool with the technique.'
        )
      ]
    },
    {
      id: 'plan-risk-responses',
      title: 'Plan risk responses',
      blocks: [
        def(
          'Plan risk responses',
          'The process of developing options and actions to enhance opportunities and reduce threats to project objectives. It determines effective response actions for prioritised individual risks and for the overall risk of the project.'
        ),
        h3('Strategies for threats (negative risks)'),
        h4('Avoid risk'),
        p(
          'Change the plan or scope to eliminate the threat, improve communication, or decide not to do the project when the risks outweigh the benefits. Every decision may affect something else, so consider stakeholder priorities.'
        ),
        h4('Transfer risk'),
        p(
          'Move the risk to another party through insurance, contracts or hiring an expert and holding them accountable. Insurance transfers more risk when the premium is higher; the team must decide whether and how much risk to transfer.'
        ),
        p(
          'With contracts, a fixed-price contract transfers risk to the contractor, who usually charges a higher price. A cost-plus contract keeps risk with the owner and suits incomplete scope. Risk is moved, not removed.'
        ),
        h4('Mitigate risk'),
        p(
          'Reduce the probability and/or impact of the risk. Three tactics are: lower the probability (for example, hire the key person early and do not assign them to other projects), build redundancy (train a backup), or use more reliable methods. Redundancy can be too costly or heavy, as with aircraft.'
        ),
        h4('Accept risk'),
        p(
          'For minor risks, deal with the risk if it happens. Set a trigger condition (the point where monitoring stops and action starts, such as a frost forecast for growers) and hold time and/or cost contingency.'
        ),
        h4('Research risk'),
        p(
          'Get better information, verify assumptions or build a prototype so that the team can make a better decision.'
        ),
        h3('Strategies for opportunities (positive risks)'),
        h4('Exploit opportunity'),
        p(
          'Assign more or better resources to the project, remove barriers, and give the opportunity more visibility in management reviews so that the positive outcome is realised.'
        ),
        h4('Share opportunity'),
        p(
          'Share the opportunity with another party that can help realise it. The parent organisation may spin off a nimble subsidiary, form a joint venture with another firm, or sell the rights.'
        ),
        h4('Enhance opportunity'),
        p(
          'Increase the probability and/or impact of the opportunity. Adding more or better resources is one way to enhance an opportunity.'
        ),
        callout(
          'exam',
          'Eight responses',
          'Threats: avoid, transfer, mitigate, accept, research. Opportunities: exploit, share, enhance. Accept can also apply to opportunities. A single project may combine responses; for example, mitigate a key-supplier risk, transfer part of it through a contract, and accept the residual risk with a contingency reserve.'
        ),
        h3('Risk register updates'),
        list([
          'Add the probability of each risk occurring and its impact to the register.',
          'Document the results of quantitative risk analysis in the register.',
          'Add the chosen response strategy, the risk owner and any changes to the project plan.'
        ])
      ]
    },
    {
      id: 'monitor-risk',
      title: 'Monitor and implement risk responses',
      blocks: [
        def(
          'Monitor risks',
          'The process of adhering to the risk response plan by tracking identified risks, identifying new risks, monitoring residual risks and evaluating the effectiveness of the risk response process throughout the project.'
        ),
        list([
          'Track the identified risks.',
          'Execute the response plans.',
          'Evaluate the effectiveness of the responses.',
          'Watch residual risks: what remains after a response has been applied.',
          'Identify new risks as the project changes.',
          'Use the risk register and the issues log.'
        ]),
        p(
          'Two categories of project management methods help deal with previously unidentified risks: recognise “unknown” risks by holding a contingency reserve of time and budget, and consider the level of control the project team has over the risk so that it can be mitigated.'
        ),
        def(
          'Implement risk responses',
          'The process in which, when a risk event occurs or is quite likely to occur soon, the person assigned to that risk executes the strategy identified in the risk management plan.'
        ),
        img(
          'risk-resolution-strategies.png',
          'Risk event resolution strategies showing how different levels of team control and risk ownership affect the response',
          'Risk event resolution strategies: the team’s level of control and the source of the risk influence how the response is handled.'
        ),
        callout(
          'info',
          'Agile risk discussions',
          'On Agile projects, risk can be discussed in stand-ups, retrospectives, risk-based spikes and other frequent team meetings. A premortum is also a structured way to imagine that the project has already failed and then identify why.'
        )
      ]
    },
    {
      id: 'agile-uncertainty',
      title: 'Development approach and uncertainty',
      blocks: [
        p(
          'The development approach and project life cycle affect how the team plans for uncertainty. The PMBOK Guide 7e highlights the following.'
        ),
        h3('Stakeholders'),
        p(
          'The project team works collaboratively with stakeholders to elicit requirements and expectations, then attempts to resolve issues and concerns while developing the risk plan. Periodic communication with stakeholders is highly desirable, with a focus on new developments and changes in the risk management plan.'
        ),
        h3('Team'),
        p(
          'Identifying risks is easier and more realistic when team members have experience with similar projects and know the risks associated with them. Team members assume a leadership role in monitoring risks during execution.'
        ),
        h3('Development approach'),
        p(
          'When requirements are identified with greater confidence and less uncertainty, a predictive development approach is used. In an adaptive approach, uncertainty and ambiguity are often associated with defining requirements.'
        ),
        h3('Planning'),
        p(
          'In predictive planning, develop a detailed WBS and forecast the possible risks associated with each work package. In an adaptive approach, high-level themes or epics are used to develop features that are further decomposed into stories.'
        ),
        h3('Delivery and measurement'),
        p(
          'If uncertainty in defining requirements is minimised, a predictive approach and detailed scope development help identify, monitor and manage risks. If requirements are uncertain and volatile, the scope is narrowed using an adaptive approach so that acceptance criteria, measures and the definition of done can be determined.'
        ),
        h3('Uncertainty'),
        p(
          'Risks occur when uncertainty exists in defining requirements, and the presence of risk adds to the uncertainty. Ambiguity, volatility and complexity are factors that increase the risks associated with a project.'
        ),
        img(
          'agile-risk-terms.png',
          'Table of Agile terms related to risk and uncertainty, including work item pool, manage flow, work in progress and task switching',
          'Agile terms that help a team see and manage uncertainty.'
        ),
        h3('Agile terms to know'),
        table(
          ['Term', 'Meaning'],
          [
            [
              'Work item pool',
              'All work to do: new requirements, defects, training and so on.'
            ],
            ['Manage flow', 'Teams focus on reducing the time needed to complete work.'],
            [
              'Work-in-progress (WIP)',
              'Work that has been started but not completed. It costs work time, is not yet of value, and may become obsolete.'
            ],
            [
              'Minimise WIP',
              'Focus on work that has been started and finish it promptly.'
            ],
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
        )
      ]
    }
  ],
  summary: {
    overview:
      'Risk management is the discipline of deciding how much uncertainty the project can tolerate, identifying what could help or hurt the project, analysing and prioritising those risks, choosing responses, and monitoring the results. Risks include both threats and opportunities.',
    groups: [
      {
        title: 'Foundations',
        points: [
          'Project risk is anything that may affect the team’s ability to meet project objectives.',
          'A threat is a negative risk; an opportunity is a positive risk.',
          'The four success measures are agreements, customer success, performing organization success and team success.',
          'The risk management plan describes how risk activities will be prioritised, monitored, planned and performed.',
          'The RBS groups risks hierarchically by category.'
        ]
      },
      {
        title: 'Identification',
        points: [
          'Use brainstorming, interviews and surveys, SWOT, Delphi, document reviews, relationship mapping and root cause analysis.',
          'Every wrong assumption becomes a risk.',
          'A trigger condition is an early warning that a risk is about to happen.',
          'The risk register records the event, cause, category, probability, impact, score, response, owner, trigger and any plan changes.',
          'A risk should have one accountable owner.'
        ]
      },
      {
        title: 'Analysis',
        points: [
          'Qualitative analysis assesses probability and impact to prioritise risks.',
          'Quantitative analysis puts numbers on the overall impact and is used only when needed and supported by data.',
          'Decision trees use EMV; sensitivity analysis uses tornado diagrams; simulation uses Monte Carlo; FMEA studies failure modes and effects.',
          'Known-unknowns use a contingency reserve; unknown-unknowns use a management reserve.'
        ]
      },
      {
        title: 'Responses',
        points: [
          'Threats: avoid, transfer, mitigate, accept, research.',
          'Opportunities: exploit, share, enhance.',
          'Transfer moves risk, it does not remove it.',
          'Mitigation reduces probability and/or impact.',
          'Acceptance is appropriate for minor risks and requires a trigger and contingency.'
        ]
      },
      {
        title: 'Monitoring',
        points: [
          'Monitor identified risks, new risks, residual risks and the effectiveness of responses.',
          'Implement the response when the risk occurs or is about to occur.',
          'Agile teams discuss risk frequently in stand-ups, retrospectives and spikes.',
          'The development approach changes how much uncertainty is planned for up front.'
        ]
      }
    ],
    quickReference: [
      { label: 'Threat strategies', value: 'Avoid · Transfer · Mitigate · Accept · Research' },
      { label: 'Opportunity strategies', value: 'Exploit · Share · Enhance' },
      { label: 'Known-unknown reserve', value: 'Contingency reserve' },
      { label: 'Unknown-unknown reserve', value: 'Management reserve' },
      { label: 'Qualitative criteria', value: 'Probability × impact' },
      { label: 'Sensitivity tool', value: 'Tornado diagram' },
      { label: 'Simulation tool', value: 'Monte Carlo' },
      { label: 'Risk register', value: 'Event, cause, category, probability, impact, score, response, owner, trigger' }
    ]
  }
};
