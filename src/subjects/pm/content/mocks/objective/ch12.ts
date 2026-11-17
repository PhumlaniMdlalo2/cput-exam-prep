import type { ObjectiveBank } from '../types';
import { mcq, tf } from '../../questionHelpers';

export const ch12Bank: ObjectiveBank = {
  mcq: [
    mcq(
      'ch12-o-m1',
      'The first step in project quality management is:',
      [
        'Control quality',
        'Plan quality management',
        'Perform quality assurance',
        'Close the project'
      ],
      'b',
      'Plan quality management identifies quality requirements and standards and documents how the project will demonstrate compliance. It is the first quality process.',
      'Control and assurance happen after planning.'
    ),
    mcq(
      'ch12-o-m2',
      'Which quality perspective defines quality as the ratio of benefits to price?',
      ['Product', 'Value', 'Manufacturing', 'Customer'],
      'b',
      'The value perspective defines quality as the ratio of benefits to price. The product perspective focuses on desired attributes, manufacturing on consistency, and customer on satisfying needs.',
      'Value is about benefits relative to price, not just low cost.'
    ),
    mcq(
      'ch12-o-m3',
      'Who is best known for the Quality Trilogy?',
      ['Deming', 'Juran', 'Crosby', 'Ishikawa'],
      'b',
      'Juran’s Quality Trilogy is quality planning, quality control and quality improvement.',
      'Deming is known for the System of Profound Knowledge.'
    ),
    mcq(
      'ch12-o-m4',
      'Crosby’s view of quality is best summarised as:',
      [
        'Quality is meeting requirements, not exceeding them',
        'Quality is a function of statistical variation only',
        'Quality is the responsibility of the quality department',
        'Quality is impossible to measure'
      ],
      'a',
      'Crosby argued that quality is meeting requirements, not exceeding them; the burden falls on those who do the work, and quality costs least when work is done correctly the first time.',
      'Crosby focuses on conformance to requirements.'
    ),
    mcq(
      'ch12-o-m5',
      'Which Baldrige core value means managing the organisation as a unified whole?',
      ['Systems perspective', 'Valuing people', 'Agility and resilience', 'Societal contribution'],
      'a',
      'The systems perspective means managing the organisation as a unified whole and recognising that parts interact.',
      'Valuing people is about the workforce and stakeholders.'
    ),
    mcq(
      'ch12-o-m6',
      'How many quality management principles does ISO 9001 describe?',
      ['Three', 'Five', 'Seven', 'Ten'],
      'c',
      'ISO 9001 describes seven principles: customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making and relationship management.',
      'Do not confuse the seven ISO principles with the four core quality concepts.'
    ),
    mcq(
      'ch12-o-m7',
      'Six Sigma quality problems are measured in:',
      [
        'Parts per hundred',
        'Parts per million opportunities',
        'Dollars per defect',
        'Defects per project'
      ],
      'b',
      'Six Sigma quality literally means quality problems are measured in parts per million opportunities. Sigma stands for standard deviation.',
      'Six Sigma is much stricter than a percentage defect rate.'
    ),
    mcq(
      'ch12-o-m8',
      'Which DMAIC phase establishes the current performance baseline?',
      ['Define', 'Measure', 'Analyse', 'Improve'],
      'b',
      'The Measure phase describes the process in detail, defines needed data and the collection plan, and baselines current performance.',
      'Define charters the project; Analyse confirms root causes.'
    ),
    mcq(
      'ch12-o-m9',
      'The four core project quality concepts are:',
      [
        'Planning, control, assurance and improvement',
        'Stakeholder satisfaction, process management, fact-based management and empowered performance',
        'Cost, schedule, scope and quality',
        'Deming, Juran, Crosby and Ishikawa'
      ],
      'b',
      'The four core concepts are stakeholder satisfaction, process management, fact-based management and empowered performance.',
      'The thought leaders are not the four core concepts.'
    ),
    mcq(
      'ch12-o-m10',
      'In a SIPOC model, the team should think backward from:',
      [
        'The supplier',
        'The customer’s desired outputs',
        'The project budget',
        'The quality audit'
      ],
      'b',
      'SIPOC thinking starts with the customer’s desired outputs, then defines the process, inputs and suppliers. This helps design the process around customer needs.',
      'Start with the customer, not the supplier.'
    ),
    mcq(
      'ch12-o-m11',
      'Which PDCA step compares before-and-after results?',
      ['Plan', 'Do', 'Check', 'Act'],
      'c',
      'Check compares before and after the trial. Act adopts the change if it is good enough, or tries again.',
      'Do is the small-scale trial; Check is the comparison.'
    ),
    mcq(
      'ch12-o-m12',
      'A quality audit is primarily a method of:',
      [
        'Control quality',
        'Manage quality (quality assurance)',
        'Validate scope',
        'Close the project'
      ],
      'b',
      'Quality audits are a quality assurance method. They evaluate project activities and identify which should be improved versus which meet standards. Inspection and testing belong to control quality.',
      'Audit is assurance, inspection is control.'
    ),
    mcq(
      'ch12-o-m13',
      'Benchmarking is:',
      [
        'Comparing actual cost with budget',
        'A structured consideration of how another organisation performs a process',
        'Inspecting every unit in a population',
        'A statistical control chart'
      ],
      'b',
      'Benchmarking studies how another organisation performs a process well, then adapts the methods to fit the organisation.',
      'Benchmarking is not the same as budget variance analysis.'
    ),
    mcq(
      'ch12-o-m14',
      'A process is precise when:',
      [
        'Its outputs are consistently similar',
        'Its outputs are always what the customer wants',
        'Its control limits are wider than tolerances',
        'It uses statistical sampling'
      ],
      'a',
      'Precision means outputs are consistently similar, such as shots clustered near each other. Accuracy means the average output is what the customer wants.',
      'Precision is consistency; accuracy is hitting the target.'
    ),
    mcq(
      'ch12-o-m15',
      'A leading indicator is used to:',
      [
        'Report what already happened',
        'Predict future performance so the team can act early',
        'Replace the project baseline',
        'Calculate the cost of quality'
      ],
      'b',
      'Leading indicators predict future performance and allow early action. Lagging indicators report results after the fact.',
      'Leading is forward-looking; lagging is after the fact.'
    )
  ],
  tf: [
    tf(
      'ch12-o-t1',
      'Deming believed that understanding variation is essential to improving quality.',
      true,
      'Understanding common and special causes of variation is one of Deming’s central ideas and part of his System of Profound Knowledge.',
      'Variation is central to Deming’s thinking.'
    ),
    tf(
      'ch12-o-t2',
      'Total Quality Management (TQM) is unrelated to the Malcolm Baldrige award.',
      false,
      'The Baldrige Performance Excellence Award is based on a common description of TQM developed by quality specialists. Its core values and concepts reflect TQM ideas.',
      'Baldrige is closely linked to TQM.'
    ),
    tf(
      'ch12-o-t3',
      'ISO 9001 is a quality management standard developed by the International Organization for Standardization.',
      true,
      'ISO 9001 is the quality management standard; the 2015 revision is the version referenced in the notes. It provides a comprehensive set of principles.',
      'ISO is an international standards body.'
    ),
    tf(
      'ch12-o-t4',
      'The DMAIC methodology has five phases and fifteen steps.',
      true,
      'DMAIC has five phases — define, measure, analyse, improve and control — with three steps in each phase, for fifteen steps.',
      'Do not confuse the five phases with the seven ISO principles.'
    ),
    tf(
      'ch12-o-t5',
      'Stakeholders judge the quality of deliverables but not the quality of work processes.',
      false,
      'Stakeholders judge the quality of both the work processes and the deliverables. Process quality affects the customer’s experience and the reliability of outputs.',
      'Both process and deliverable quality matter.'
    ),
    tf(
      'ch12-o-t6',
      'A special cause of variation is normal random variation that is part of the process design.',
      false,
      'That describes a common cause. A special cause comes from external or unusual sources and is unpredictable.',
      'Common = normal; special = unusual.'
    ),
    tf(
      'ch12-o-t7',
      'A quality metric should state what will be measured, how it will be measured, and the target value.',
      true,
      'The quality baseline includes metrics that define what is measured, how, and the target. A metric also needs a threshold for corrective action.',
      'A metric without a target or threshold is not a decision tool.'
    ),
    tf(
      'ch12-o-t8',
      'Quality assurance is primarily concerned with finding defects in finished deliverables.',
      false,
      'Quality assurance is forward-looking and process-focused. Control quality is primarily concerned with verifying finished deliverables through inspection and testing.',
      'Assurance improves the process; control checks the deliverable.'
    ),
    tf(
      'ch12-o-t9',
      'The cost of nonconformance includes rework, scrap and warranty repairs.',
      true,
      'These are internal and external failure costs. They occur because defects happened.',
      'Nonconformance is the cost of failure, not prevention.'
    ),
    tf(
      'ch12-o-t10',
      'A process can be in control but still not capable of meeting the customer’s tolerance.',
      true,
      'In control means outputs stay within the process’s own control limits. Capable means those limits fit within the customer’s tolerance. A stable process can still be too variable to satisfy the customer.',
      'In control is not the same as capable.'
    )
  ]
};
