import type { Chapter } from '../../types/content';
import { callout, def, h3, h4, img, list, p, steps, table } from '../blocks';

export const chapter12: Chapter = {
  id: 'ch12',
  number: 12,
  title: 'Quality Management',
  subtitle: 'Plan, manage and control quality in projects',
  description:
    'The quality management plan, the ideas of the quality thought leaders, the four core project quality concepts, process management, quality assurance and quality control.',
  examFocus: [
    'The quality management plan and quality baseline',
    'Development of contemporary quality concepts',
    'Process management, SIPOC and PDCA',
    'The four core project quality concepts',
    'Manage quality versus control quality',
    'The cost of quality',
    'Validating scope (cross-reference to Chapter 15)'
  ],
  topics: ['Quality plan', 'Quality concepts', 'SIPOC', 'PDCA', 'Quality control', 'Cost of quality'],
  sections: [
    {
      id: 'quality-foundations',
      title: 'Quality foundations',
      blocks: [
        def(
          'Plan quality management',
          'The process of identifying quality requirements and/or standards for the project and its deliverables, and documenting how the project will demonstrate compliance with those quality requirements and/or standards.'
        ),
        p(
          'Project quality is all the necessary work to ensure that project deliverables satisfy their intended purpose. The first step in project quality management is plan quality management, which may be performed simultaneously with other aspects of project planning.'
        ),
        h3('Four perspectives on quality'),
        table(
          ['Perspective', 'Quality means…'],
          [
            ['Product', 'The presence of desired attributes.'],
            ['Value', 'The ratio of benefits to price.'],
            ['Manufacturing', 'Consistency in goods and services.'],
            ['Customer', 'The ability to satisfy given needs and expectations.']
          ]
        ),
        callout(
          'info',
          'Quality and validation',
          'Control quality verifies that deliverables are complete, correct and acceptable. Validate scope, covered in Chapter 15, is the formal acceptance of the completed deliverables by the customer or sponsor. Verification and acceptance are related but not the same.'
        ),
        p(
          'Quality decisions must be made with risk in mind. A quality standard that is too strict can add cost and time; a standard that is too loose can create rework, dissatisfaction and safety or compliance problems.'
        )
      ]
    },
    {
      id: 'quality-thought',
      title: 'Contemporary quality concepts',
      blocks: [
        h3('W. Edwards Deming and the System of Profound Knowledge'),
        p(
          'Deming argued that understanding variation is essential to improving quality, that organisations operate as systems, that managers need insight to predict the future, and that leaders need to understand individual motivations. These ideas form the System of Profound Knowledge.'
        ),
        img(
          'deming-profound-knowledge.png',
          'Deming’s System of Profound Knowledge with four parts: variation, knowledge, psychology and systems',
          'Deming’s four-part System of Profound Knowledge: appreciation for a system, knowledge of variation, theory of knowledge, and psychology.'
        ),
        list([
          'Systems: organisations are systems of interacting parts. Parts cannot be managed in isolation.',
          'Variation: managers must understand common and special causes and work to reduce both.',
          'Knowledge: managers must learn from the past and understand cause-and-effect relationships to predict future behaviour.',
          'Psychology: leaders must understand what motivates each individual and how people and groups interact.'
        ]),
        h3('Juran’s Quality Trilogy'),
        img(
          'juran-quality-trilogy.png',
          'Juran’s Quality Trilogy: quality planning, quality control and quality improvement',
          'Juran’s Quality Trilogy treats quality as three linked managerial processes.'
        ),
        table(
          ['Process', 'What it involves'],
          [
            [
              'Quality planning',
              'Identify all customers and their needs, develop requirements based on those needs, and develop the methods to satisfy those requirements.'
            ],
            [
              'Quality control',
              'Determine what to control, establish measurement systems, establish standards, compare performance to standards, and act on differences.'
            ],
            [
              'Quality improvement',
              'Select and support improvement projects, prove causes, select and implement solutions, and maintain control of improved processes.'
            ]
          ]
        ),
        h3('Plan-driven project roles'),
        img(
          'quality-thought-leaders.png',
          'Quality thought leaders and their key contributions, including Clifton, Crosby, Harrington, Ishikawa, Senge and Zeithaml',
          'Quality thought leaders and the ideas that influenced modern project quality management.'
        ),
        table(
          ['Thought leader', 'Key contribution'],
          [
            [
              'Clifton',
              'High-quality organisations encourage individuals to develop their strengths.'
            ],
            [
              'Crosby',
              'Quality is meeting requirements, not exceeding them. The burden of quality falls on those who do the work. Quality costs least when work is done correctly the first time.'
            ],
            [
              'Harrington',
              'Quality improves more by preventing defects than by fixing them. Business processes can be improved using a systematic method.'
            ],
            [
              'Ishikawa',
              'Quality outputs start with understanding customers and their desires. Work to identify and remove root causes, not just symptoms. All workers at all levels must engage. Most quality problems can be solved with simple tools.'
            ],
            [
              'Senge',
              'Team learning is necessary to improve quality. Societal networking accelerates improvement. When continual improvement is not enough, a breakthrough is needed.'
            ],
            [
              'Zeithaml',
              'Reducing variation saves money. Project deliverables improve with a focus on improving methods. Services pose different challenges from manufacturing.'
            ]
          ]
        ),
        h3('Total Quality Management and the Malcolm Baldrige award'),
        p(
          'Government, business, consulting and academic quality specialists in the United States worked together to develop a common description of total quality management (TQM). That description forms the key areas of the Malcolm Baldrige Performance Excellence Award.'
        ),
        img(
          'baldrige-core-values.png',
          'Malcolm Baldrige Performance Excellence Program core values and concepts with brief interpretations',
          'The Baldrige core values and concepts describe what a high-performing organisation looks like.'
        ),
        table(
          ['Core value', 'Brief interpretation'],
          [
            ['Systems perspective', 'Manage the organisation as a unified whole.'],
            ['Visionary leadership', 'Demonstrate clear values and set high expectations.'],
            [
              'Customer-focused excellence',
              'Consider all characteristics that contribute to customer success.'
            ],
            ['Valuing people', 'Value the workforce and all stakeholders.'],
            [
              'Agility and resilience',
              'Anticipate, prepare for and recover from disruptions.'
            ],
            [
              'Organisational learning',
              'Continuously improve, and significantly change, leading to new goals.'
            ],
            [
              'Focus on success and innovation',
              'Drive change in products, services and operations to create value.'
            ],
            [
              'Management by fact',
              'Measure and analyse performance to support decision making.'
            ],
            [
              'Societal contribution',
              'Be role models for the well-being of communities.'
            ],
            [
              'Ethics and transparency',
              'Stress ethical behaviour and transparency in all interactions.'
            ],
            [
              'Delivering value and results',
              'Balance finance and process results, customer and worker satisfaction.'
            ]
          ]
        ),
        h3('ISO 9001:2015'),
        p(
          'ISO 9001 is a quality management standard developed by the International Organization for Standardization. The 2015 version is the latest revision referred to in the notes. It began with a focus on technical standards for documenting work processes and evolved into a comprehensive set of quality management principles.'
        ),
        img(
          'iso-9001-principles.png',
          'Seven ISO 9001 quality management principles with brief descriptions',
          'The seven ISO quality management principles.'
        ),
        table(
          ['Principle', 'Brief description'],
          [
            [
              'Customer focus',
              'Meet customer requirements and exceed customer expectations.'
            ],
            [
              'Leadership',
              'Establish unity of purpose and create conditions for people to succeed.'
            ],
            [
              'Engagement of people',
              'Competent, empowered and engaged people create and deliver value.'
            ],
            [
              'Process approach',
              'Understand and manage processes to produce desired results.'
            ],
            [
              'Improvement',
              'Successful organisations consistently focus on improvement.'
            ],
            [
              'Evidence-based decision making',
              'Decisions based on analysis and evaluation produce desired results.'
            ],
            [
              'Relationship management',
              'Manage relationships with all interested parties, including suppliers.'
            ]
          ]
        ),
        h3('Lean Six Sigma and DMAIC'),
        p(
          'Sigma stands for standard deviation, a statistical term for the amount of variation in data. Six Sigma quality literally means that quality problems are measured in parts per million opportunities.'
        ),
        p(
          'Many projects have few routine activities and many unusual, non-routine activities, so the statistical rigour of Six Sigma is not always applicable. Six Sigma uses a disciplined process called DMAIC — define, measure, analyse, improve and control — to plan and manage improvement projects. DMAIC is a 15-step process broken into five project phases.'
        ),
        img(
          'dmaic.png',
          'The DMAIC methodology with 15 steps across define, measure, analyse, improve and control',
          'DMAIC: 15 steps across five phases.'
        ),
        table(
          ['Phase', 'Steps'],
          [
            [
              'Define',
              'Understand the voice of the customer; describe the process at an overview level; charter the improvement project.'
            ],
            [
              'Measure',
              'Describe the process in detail; define the needed data and the collection plan; baseline current performance.'
            ],
            [
              'Analyse',
              'Identify possible root causes; collect data; confirm root causes through data analysis.'
            ],
            [
              'Improve',
              'Develop possible solutions for the root cause; select and pilot the solution; analyse and confirm results.'
            ],
            [
              'Control',
              'Create procedures and documentation; train workers and monitor performance; share learnings.'
            ]
          ]
        )
      ]
    },
    {
      id: 'core-quality-concepts',
      title: 'The four core project quality concepts',
      blocks: [
        p(
          'The four core project quality concepts are stakeholder satisfaction, process management, fact-based management and empowered performance. They work together: satisfied stakeholders define what quality means, processes deliver it, facts show whether it is happening, and empowered people make it sustainable.'
        ),
        h3('1. Stakeholder satisfaction'),
        def(
          'Stakeholder satisfaction',
          'Identifying all stakeholders and understanding their ultimate quality goals using a structured process to determine relevant quality standards.'
        ),
        p(
          'External stakeholders may include customers, suppliers, the public and other groups. Internal stakeholders may include shareholders and workers at all levels and functions within the organisation, including project team members.'
        ),
        steps([
          'Identify all stakeholders.',
          'Prioritise among the stakeholders.',
          'Understand the prioritised stakeholders’ requirements.',
          'Develop standards to ensure the requirements are met.',
          'Make trade-off decisions.'
        ]),
        list([
          'Stakeholders judge the quality of both the work processes and the deliverables.',
          '“Measure twice, cut once”: plan and check the plan.',
          'Meet requirements but exceed expectations.',
          'Develop capable customers so that they can use the deliverables successfully.'
        ]),
        h3('2. Process management'),
        def(
          'Process',
          'A sequence of linked activities intended to achieve some result, such as producing a good or service for a customer.'
        ),
        p(
          'To manage project processes effectively, project managers need to understand, control and improve them.'
        ),
        h4('Understand with SIPOC'),
        def(
          'SIPOC',
          'Supplier, Input, Process, Output, Customer. A process model that shows how work flows from suppliers through the project to customers.'
        ),
        list([
          'Shows that all work flows from suppliers, through the project, to customers.',
          'Defines process boundaries, which helps prevent scope creep.',
          'Identifies stakeholders and feedback loops.',
          'Think backward from the customers’ desired outputs, then define the process, inputs and suppliers.',
          'Decide early, at chartering, whether the process is capable of delivering.',
          'Design quality into the process. Making junk and remaking it costs more, adds schedule pressure, and inspectors still miss defects.'
        ]),
        h4('Control the process'),
        p(
          'Process control establishes standards, measures actual performance, calculates the difference between standards and performance (variance), and strives to reduce unwanted variance so that outputs are predictable. The detail of control is covered in Chapter 14.'
        ),
        h4('Improve with PDCA'),
        p(
          'When output is unpredictable or unsatisfactory, improve the process using PDCA. Improvement can be continuous (many small steps) or breakthrough (substantial change).'
        ),
        table(
          ['PDCA step', 'What happens'],
          [
            [
              'Plan',
              'Choose the improvement, understand the process and the trouble, and write a plan.'
            ],
            ['Do', 'Trial the change on a small scale and collect data.'],
            ['Check', 'Compare before and after.'],
            [
              'Act',
              'Adopt the change if it is good enough; otherwise try again.'
            ]
          ]
        ),
        callout(
          'warn',
          'PDCA, not PDAC',
          'Your review question says “PDAC”, but the notes and the standard model say PDCA: Plan, Do, Check, Act.'
        ),
        h3('3. Fact-based management'),
        p(
          'Opinions can get in the way, and project decisions often need to be made quickly. Taking just enough time to get the facts usually yields better results. The four aspects of fact-based management are understanding variation, deciding what to measure, working correctly with data, and using the resulting information appropriately.'
        ),
        h4('Understanding variation'),
        def(
          'Common cause',
          'Variation that results from the product design and the method of making it and is exhibited by a random pattern within predictable limits.'
        ),
        def(
          'Special cause',
          'Variation that comes from external sources that are not inherent in the process and can be quite unpredictable.'
        ),
        h4('Deciding what to measure'),
        list([
          'Avoid the extreme of measuring nothing because the team is in a hurry.',
          'Avoid the extreme of measuring too many things just to be safe.',
          'Refer to lessons learned from previous projects.',
          'Acceptance criteria from the milestone schedule are a good starting point.',
          'Agree on what will be measured, when, and under what circumstances.'
        ]),
        def(
          'Quality metric',
          'A measurement meant to ensure that customers receive acceptable products or deliverables.'
        ),
        p(
          'Measures may include project attributes such as on-time or on-budget performance, product specifications, or attributes such as defect frequency.'
        ),
        h4('Working correctly with data'),
        p(
          'Data is information in an unorganised form representing conditions, ideas or objects. Generally, the people closest to the situation are best placed to collect data. Data must be complete, without errors, and timely. Simple tools can reveal patterns and trends. Larger, more complex and sophisticated Six Sigma projects may use more detailed statistical analysis.'
        ),
        h4('Using the resulting information appropriately'),
        def(
          'Information',
          'Knowledge gained through study, communication, research or instruction. Useful information is accurate and timely, specific and organised for a purpose, presented in a context that gives it meaning, and able to increase understanding and decrease uncertainty.'
        ),
        list([
          'Encourage truth and transparency in communication.',
          'Use information to challenge opinions and decisions.',
          'Follow the project communication plan for sharing information.'
        ]),
        h3('4. Empowered performance'),
        p(
          'The goal of empowered performance is to have capable and willing workers at every level and every function within the company. Corporate leaders develop the organisational culture; project sponsors and managers develop the project culture.'
        ),
        list([
          'Recognise individuality: projects benefit from diversity, and the project manager should discuss each person’s goals for the project one-on-one.',
          'Capitalise on individual strengths: let people use their unique skills and create opportunities for them to improve.',
          'Emphasise individual responsibilities: the project manager and core team carry much of the responsibility; subject-matter experts are responsible for their individual activities; functional managers are responsible for work methods in their areas; sponsors share high-level responsibility for project completion with project managers; customer representatives are responsible for understanding the impact of their directives.',
          'Use appropriate collaboration: cross-functional teams are most effective when individual, team and organisational learning flourishes.'
        ]),
        img(
          'core-quality-concepts-1.png',
          'Summary of stakeholder satisfaction as a core project quality concept',
          'Stakeholder satisfaction: identify, prioritise, understand, set standards and make trade-offs.'
        ),
        img(
          'core-quality-concepts-2.png',
          'Summary of process improvement, fact-based management and empowered performance',
          'Process improvement, fact-based management and empowered performance complete the four core concepts.'
        )
      ]
    },
    {
      id: 'quality-management-plan',
      title: 'The quality management plan',
      blocks: [
        def(
          'Quality management plan',
          'A component of the project management plan that specifies the acceptable level of quality, typically defined by the customer, and provides a detailed account of how the project will meet that level of quality with its deliverables and work processes.'
        ),
        h3('Quality policy'),
        p(
          'The quality policy reflects top management’s principles for achieving quality and the benefits they hope to achieve from good quality practices and products. The project policy must not violate the parent company’s or major customer’s policy.'
        ),
        p(
          'A quality policy may include references to customers, improving processes, satisfying requirements, products and services, value to customers, and cost control.'
        ),
        h3('Contents of the quality management plan'),
        list([
          'Quality objectives.',
          'Key project deliverables and the standards used to evaluate each.',
          'Deliverable completeness and correctness criteria from the customer’s point of view.',
          'Processes to be reviewed for meeting and maintaining desired quality levels.',
          'Quality standards.',
          'Quality control and assurance activities.',
          'Quality roles and responsibilities.',
          'Quality tools.',
          'A plan for reporting quality control and assurance problems.'
        ]),
        h3('Quality baseline'),
        p(
          'The quality baseline reflects the agreed-upon quality objectives. It includes the standards chosen for materials and inputs, work activities, documents and deliverables, based on a clear scope statement or WBS.'
        ),
        p(
          'The project manager is responsible for selecting standards, taking cues from functional managers and subject-matter experts for methods, and from customers for documentation and deliverables.'
        ),
        p(
          'The baseline may include metrics that define exactly what will be measured, how each item will be measured, and the target value of each.'
        ),
        h3('Process improvement plan'),
        def(
          'Process improvement plan',
          'A component plan of the comprehensive project management plan that documents the steps for analysing processes with a focus on improving them.'
        ),
        p(
          'The plan includes process boundaries, process configuration, process metrics and targets for improved performance. A definition of “done” should be stated explicitly.'
        )
      ]
    },
    {
      id: 'manage-quality',
      title: 'Manage quality',
      blocks: [
        def(
          'Manage quality',
          'The process of using the quality plan and policy to perform tasks that will most likely lead to creating project outputs to customers’ satisfaction. A key part of managing quality is forward-looking quality assurance.'
        ),
        def(
          'Perform quality assurance',
          'A practice primarily concerned with overall process improvements to ensure that every deliverable produced is error-free.'
        ),
        h3('Quality audits'),
        def(
          'Quality audit',
          'A structured review and evaluation of project activities that identifies those which should be improved versus those that meet the quality standards.'
        ),
        p('Quality audits sometimes show the need to request changes:'),
        list([
          'Preventive actions: steps taken when the project is trending away from the planned scope, schedule, cost or quality requirements. Preventive actions are proactive, based on variance and trend analysis.',
          'Corrective actions: steps taken when the project has already deviated from the planned scope, schedule, cost or quality requirements. Corrective actions are reactive and bring performance back into alignment with the agreed baselines.',
          'Defect repair: steps taken when a product or deliverable does not meet the specified quality requirements. Not all defects can be repaired, so judgement is needed to decide whether to repair or scrap and remake the output.'
        ]),
        h3('Process analysis'),
        def(
          'Process analysis',
          'A step-by-step breakdown of the phases of a process, used to determine the inputs, outputs and operations that take place during each phase.'
        ),
        p(
          'Process analysis improves understanding of how a process operates and identifies potential targets for improvement by eliminating waste and increasing efficiency.'
        ),
        h3('Benchmarking'),
        def(
          'Benchmarking',
          'A structured consideration of how another organisation performs a process, with the aim of determining how to improve one’s own performance.'
        ),
        steps([
          'Determine a process that needs dramatic improvement.',
          'Identify another organisation that performs that process very well.',
          'Make a deal with that organisation to learn from them; they might require payment or the sharing of one of your best practices.',
          'Determine what needs to be observed and what questions need to be asked.',
          'Make a site visit to observe and question the other organisation.',
          'Decide which observed methods will help your organisation.',
          'Adapt the methods to fit your organisation’s culture and situation.',
          'Try the new methods on a small scale.',
          'Evaluate the results.',
          'If the methods are good enough, adopt them.'
        ]),
        h3('Manage quality versus control quality'),
        table(
          ['', 'Manage quality (quality assurance)', 'Control quality'],
          [
            ['Direction', 'Forward-looking, proactive', 'Backward-looking, reactive'],
            ['Focus', 'Processes, methods and standards', 'Specific deliverables'],
            ['Scope', 'Broad management activities', 'Detailed technical activities'],
            [
              'Methods',
              'Quality audit, process analysis',
              'Inspection, peer review, testing'
            ],
            [
              'Purpose',
              'Give stakeholders confidence that the right methods and people are being used',
              'Verify that deliverables are correct, complete and meet standards'
            ]
          ]
        )
      ]
    },
    {
      id: 'control-quality',
      title: 'Control quality',
      blocks: [
        def(
          'Control quality',
          'The activities used to verify that deliverables are of acceptable quality and that they are complete and correct. Examples include inspection, deliverable peer reviews and the testing process.'
        ),
        p(
          'The purposes of quality control are to reduce the number of defects and inefficiencies, and to improve the project process and outputs.'
        ),
        h3('What quality control includes'),
        list([
          'Monitoring the project to ensure that everything is proceeding according to plan.',
          'Identifying when things are different enough from the plan to warrant preventive or corrective action.',
          'Repairing defects.',
          'Determining and eliminating root causes of problems.',
          'Providing specific measurements for quality assurance.',
          'Providing recommendations for corrective and preventive actions.',
          'Implementing approved changes as directed by the project’s integrated change control system.'
        ]),
        h3('Monitor project quality: inputs, processes and outputs'),
        list([
          'Inputs: ensure that the assigned people can do their work, and work with suppliers so that materials, information and other inputs meet specifications and perform satisfactorily.',
          'Processes: minimise rework, because it wastes time, effort and money.',
          'Outputs: use internal inspection to ensure the performance of deliverables before they are sent to the customer.'
        ]),
        h3('Timing and types of inspection'),
        list([
          'Conduct an inspection before a critical or expensive process to make sure the inputs are good before spending a large amount of money or time.',
          'Process stages where one worker hands off work to another are good times for both workers to conduct inspections.',
          'Milestones identified in the project charter provide good inspection points.',
          'In software development, think of inspection in terms of units (individual components), integration (how components work together) and the system (how the deliverable performs).'
        ]),
        h3('Quality control terms'),
        table(
          ['Term pair', 'Meaning'],
          [
            [
              'Prevention versus inspection',
              'Prevention keeps errors out of a process. Inspection tries to find errors after they occur so they can be corrected before reaching the customer.'
            ],
            [
              'Sample versus population',
              'A population is all possible items in a set. A sample is a subset. Inspecting an entire population is often costly, difficult or impossible, so a random sample is inspected.'
            ],
            [
              'Attribute versus variable',
              'An attribute is a yes/no judgment: good enough or not. A variable is a quantitative data point assessed by measuring a physical characteristic.'
            ],
            [
              'Precision versus accuracy',
              'A process is precise when outputs are consistently similar. A process is accurate when, on average, it produces what the customer wants.'
            ],
            [
              'Tolerance versus control limit',
              'A tolerance limit is what the customer will accept (the voice of the customer). A control limit reflects what the process can consistently deliver when behaving normally (the voice of the process). Control limits are often set at three standard deviations above and below the process average.'
            ],
            [
              'Capable versus in control',
              'A process is in control when outputs are within the statistically calculated control limits. It is capable when the control limits are within the customer’s tolerance limits, so customers can remain consistently satisfied.'
            ],
            [
              'Special versus common cause',
              'Special causes are statistically unlikely events that usually mean something is different from normal. Common causes are normal or random variations that are part of operating the system at its current capability.'
            ],
            [
              'Preventive versus corrective action',
              'Preventive action is proactive: making a change because a problem may occur. Corrective action is reactive: making a change to fix a problem that has occurred.'
            ]
          ]
        ),
        callout(
          'exam',
          'The most examinable distinctions',
          'Manage quality is proactive and process-focused; control quality is reactive and deliverable-focused. Prevention is better than inspection because inspection does not create quality. Tolerance is the customer’s voice; control limits are the process’s voice. Capable means the process can meet tolerance; in control means the process is stable.'
        )
      ]
    },
    {
      id: 'cost-of-quality',
      title: 'Cost of quality',
      blocks: [
        def(
          'Cost of quality',
          'The sum of the cost of conformance to quality and the cost of nonconformance to quality.'
        ),
        img(
          'cost-of-quality.png',
          'Cost of quality divided into cost of conformance and cost of nonconformance, with example cost categories',
          'Quality decisions should be based on the costs associated with all of these factors.'
        ),
        table(
          ['Cost of conformance', 'Cost of nonconformance'],
          [
            [
              'Planning; training; process control and validation; product design validation; test and evaluation; quality audits; maintenance and calibration; inspection; field testing',
              'Scrap; rework and repair; additional material; inventory; warranty repairs and service; complaint handling; liability judgments; product recalls; field service; expediting'
            ]
          ]
        ),
        p(
          'Cost of conformance is spent to prevent defects and to check that requirements are met. Cost of nonconformance is incurred when defects occur. The purpose of the cost-of-quality view is to compare the total cost of getting quality right with the total cost of getting it wrong.'
        ),
        callout(
          'warn',
          'Not a simple “spend more” rule',
          'The goal is not to minimise conformance cost or nonconformance cost in isolation. The goal is to minimise the total cost of quality while meeting stakeholder requirements.'
        )
      ]
    },
    {
      id: 'develop-plan-kickoff',
      title: 'Develop the project management plan and kick off',
      blocks: [
        h3('Resolve conflicts'),
        list([
          'What do stakeholders really want and need most from the project?',
          'Are all quality standards truly mandatory, or can one be relaxed a little?',
          'Is the imposed deadline critical, or can it be relaxed considering the impact on costs and risks?',
          'Is the budget a true maximum, or can it be adjusted to secure the desired features?'
        ]),
        h3('Set up configuration management'),
        def(
          'Configuration management system',
          'The system used to identify and control project items, manage deliverables and documents, record and report changes, and verify correctness.'
        ),
        steps([
          'Establish a process for identifying and uniquely naming items to be controlled.',
          'Manage the project deliverables and documentation.',
          'Record and report all changes.',
          'Verify the correctness of all deliverables and their components.'
        ]),
        h3('Apply sanity tests to all project plans'),
        list([
          'Does the critical path look reasonable?',
          'Do the milestones look achievable?',
          'Are some resources overallocated?',
          'Does everyone understand what they are supposed to do?',
          'Do we really understand our customers?',
          'Are the customers’ desires likely to change?',
          'How well do we understand the standards we will be judged against?',
          'Are the methods for completing the work really sensible?',
          'Are we confident we can gather and analyse the data needed to control the plan?'
        ]),
        h3('Kick off the project'),
        p(
          'A formal kickoff gives stakeholders a chance to see how everything fits together. It convinces stakeholders that the project leaders will be good stewards of assets, and it helps all interested parties commit to the project and get on with the work.'
        ),
        h4('Preconditions for a successful kickoff'),
        list([
          'The sponsor and project manager set clear direction during planning.',
          'The core team commits to the project first.',
          'Create an atmosphere of trust and relationship building.',
          'Project leaders practise active listening.',
          'Include as many people as possible in planning to enhance buy-in.'
        ]),
        h4('Typical kickoff activities'),
        list([
          'The sponsor and project manager describe the importance of the project.',
          'Customers describe their acceptance standards, sense of urgency and budget concerns.',
          'The project manager outlines the project goals.',
          'The project manager and core team describe work expectations.',
          'The project manager unfolds the project plan and its current status, if work has started.',
          'The core team explains the communications, risk and quality plans.',
          'Everyone asks questions and makes suggestions.',
          'The project manager authorises appropriate changes to the project plan.',
          'Everyone concurs with the overall plan and their individual action items.'
        ]),
        h3('Baseline and communicate the plan'),
        p(
          'A baseline is the approved plan. A project plan becomes official when enough information is available for key stakeholders to commit to it and baseline it. At that point most of the planning is done and most of the executing is just beginning.'
        )
      ]
    },
    {
      id: 'agile-quality',
      title: 'Agile quality terms',
      blocks: [
        p(
          'Agile approaches build quality into short, frequent cycles rather than inspecting quality in at the end. The following terms are useful for exam questions that compare plan-driven and Agile quality.'
        ),
        table(
          ['Term', 'Meaning'],
          [
            [
              'Build quality in',
              'Workflow is reduced and waste increases if mistakes are made, so quality must be designed into the work.'
            ],
            [
              'Continuous improvement',
              'Pursue perfection by enlisting everyone in a never-ending effort to get better.'
            ],
            [
              'Make process explicit',
              'Ensure everyone understands how a process works.'
            ],
            [
              'Value stream mapping',
              'A visual flowchart identifying value and non-value activities.'
            ],
            [
              'Inspection',
              'Everyone examines the work, trying to improve the product, process and people.'
            ],
            [
              'Testing',
              'Evaluating whether the deliverable meets requirements; an important feedback mechanism.'
            ],
            [
              'Test-driven development',
              'Writing tests before writing the code.'
            ],
            [
              'Test plan',
              'Determining how work will be verified as acceptable before performing it.'
            ],
            ['Unit test', 'Ensuring small functions or classes work properly.'],
            [
              'Integration test',
              'Ensuring new functionality works immediately in the existing system.'
            ],
            [
              'Acceptance test',
              'Verifying for the customer that the entire system works correctly.'
            ],
            [
              'Continuous integration',
              'Immediately ensuring each bit works in the system.'
            ],
            [
              'Refactoring',
              'Simplifying and cleaning a product to make it stable and maintainable.'
            ]
          ]
        ),
        p(
          'Agile creates and manages quality in small batch sizes. Agile projects may allow more variability in quality processes — achieving a minimum viable product (MVP) — in exchange for speed to market.'
        )
      ]
    },
    {
      id: 'quality-exam-bridge',
      title: 'Exam bridge: approved supplementary concepts',
      blocks: [
        callout(
          'info',
          'Source note',
          'The concepts in this section are supplementary additions approved for exam preparation. They are not all in the November chapter notes, but they answer review questions in your question bank.'
        ),
        h3('Leading versus lagging indicators'),
        table(
          ['Indicator', 'What it does', 'Examples'],
          [
            [
              'Leading indicator',
              'Predicts future performance so the team can act before results are locked in.',
              'Open defects, requirements churn, team velocity, supplier lead-time warnings, risk trigger conditions, employee engagement.'
            ],
            [
              'Lagging indicator',
              'Reports performance after the fact.',
              'Final cost, schedule variance, customer complaints, warranty claims, number of defects found by the customer, benefits realised.'
            ]
          ]
        ),
        p(
          'Use leading indicators to steer; use lagging indicators to confirm. A balanced scorecard should contain both.'
        ),
        h3('Servant leadership and quality'),
        p(
          'A servant leader puts the team’s needs first, removes obstacles, develops people, shares power and builds trust. This supports empowered performance: capable and willing workers are more likely to take responsibility for quality, speak up about defects, and improve processes. Servant leadership does not mean abandoning accountability; it means creating the conditions in which accountability can succeed.'
        ),
        h3('Efficiency versus effectiveness'),
        table(
          ['Concept', 'Question it answers', 'Example'],
          [
            [
              'Efficiency',
              'Are we doing things right, with the least waste of resources?',
              'Producing a report in half the time with the same accuracy.'
            ],
            [
              'Effectiveness',
              'Are we doing the right things to achieve the intended outcome?',
              'Producing a report that stakeholders actually use to make a decision.'
            ]
          ]
        ),
        p(
          'A process can be efficient but ineffective: it produces something quickly that nobody needs. Improve efficiency through process analysis, waste elimination and Lean techniques. Improve effectiveness by understanding stakeholder requirements, validating scope and measuring benefits realisation.'
        ),
        h3('Thresholds for project metrics'),
        p(
          'A threshold is the limit beyond which corrective action is triggered. Each metric should state the desired baseline and the threshold. Without a threshold, a metric produces data but not a decision rule.'
        ),
        h3('Lessons learned in quality planning'),
        p(
          'Lessons learned from previous projects should inform quality standards, metrics, inspection points, supplier requirements and process-improvement targets. They turn historical experience into forward-looking quality planning rather than leaving it as a report at the end of the project.'
        ),
        h3('When value is delivered'),
        table(
          ['Approach', 'When value is delivered'],
          [
            [
              'Predictive (plan-driven)',
              'Often near the end of the project or phase, when the completed deliverables are accepted and put into use.'
            ],
            [
              'Agile',
              'At the end of each iteration and release, through demonstrations of working increments; value is realised earlier and feedback is continuous.'
            ]
          ]
        )
      ]
    }
  ],
  summary: {
    overview:
      'Quality management ensures that the project and its deliverables meet stakeholder requirements. It starts with a quality plan, is supported by the ideas of Deming, Juran, Baldrige, ISO and Six Sigma, and is delivered through the four core concepts: stakeholder satisfaction, process management, fact-based management and empowered performance.',
    groups: [
      {
        title: 'Quality planning',
        points: [
          'Plan quality management identifies requirements and standards and documents how compliance will be demonstrated.',
          'The quality management plan includes objectives, deliverables, standards, assurance and control activities, roles, tools and reporting.',
          'The quality baseline records agreed standards and metrics.',
          'The quality policy must align with the parent organisation and major customer.'
        ]
      },
      {
        title: 'Quality thought',
        points: [
          'Deming: System of Profound Knowledge — systems, variation, knowledge and psychology.',
          'Juran: quality planning, quality control and quality improvement.',
          'Baldrige: a set of core values and concepts for performance excellence.',
          'ISO 9001: seven quality management principles.',
          'Lean Six Sigma: reduce variation and defects; DMAIC has 15 steps in five phases.'
        ]
      },
      {
        title: 'Four core concepts',
        points: [
          'Stakeholder satisfaction: identify, prioritise, understand, set standards and trade off.',
          'Process management: understand with SIPOC, control output, improve with PDCA.',
          'Fact-based management: understand variation, decide what to measure, work correctly with data, use information appropriately.',
          'Empowered performance: recognise individuality, capitalise on strengths, emphasise responsibilities and collaborate.'
        ]
      },
      {
        title: 'Assurance and control',
        points: [
          'Manage quality is proactive and process-focused; control quality is reactive and deliverable-focused.',
          'Quality audits and process analysis are assurance methods; inspection, peer review and testing are control methods.',
          'Prevention is preferable to inspection.',
          'Tolerance is the customer’s voice; control limits are the process’s voice.',
          'A process is capable when control limits fit within tolerance.'
        ]
      },
      {
        title: 'Cost and closeout',
        points: [
          'Cost of quality = cost of conformance + cost of nonconformance.',
          'Conformance costs include prevention and appraisal; nonconformance costs include internal and external failure.',
          'Resolve plan conflicts, set up configuration management, apply sanity tests, kick off and baseline the plan.'
        ]
      }
    ],
    quickReference: [
      { label: 'Core concepts', value: 'Stakeholder satisfaction · Process management · Fact-based management · Empowered performance' },
      { label: 'Process model', value: 'SIPOC — Supplier, Input, Process, Output, Customer' },
      { label: 'Improvement cycle', value: 'PDCA — Plan, Do, Check, Act' },
      { label: 'Six Sigma cycle', value: 'DMAIC — Define, Measure, Analyse, Improve, Control' },
      { label: 'Assurance vs control', value: 'Proactive process focus vs reactive deliverable focus' },
      { label: 'Cost of quality', value: 'Conformance + nonconformance' },
      { label: 'Tolerance', value: 'What the customer will accept' },
      { label: 'Control limit', value: 'What the process can consistently deliver' }
    ]
  }
};
