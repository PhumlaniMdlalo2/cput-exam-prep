import type { ChapterTest } from '../../types/content';
import { caseQ, essayQ, mcq, mp, shortQ, tf } from '../questionHelpers';

export const chapter12Test: ChapterTest = {
  id: 'ch12-test',
  chapterId: 'ch12',
  title: 'Chapter 12 test — Quality Management',
  description:
    'A 50-mark test covering quality planning, the core quality concepts, assurance, control and the cost of quality.',
  instructions: [
    'Answer all questions.',
    'Section A is automatically marked.',
    'For written answers, use the marking guide in the memo to check your reasoning.',
    'Written answers can be adjusted after submission if your wording differs from the model answer.'
  ],
  timeLimitMinutes: 60,
  questions: [
    mcq(
      'ch12-t-q1',
      'Which four areas make up Deming’s System of Profound Knowledge?',
      [
        'Planning, control, improvement and inspection',
        'Systems, variation, knowledge and psychology',
        'Define, measure, analyse and control',
        'Customer, process, data and people'
      ],
      'b',
      'Deming’s System of Profound Knowledge covers appreciation for a system, knowledge of variation, theory of knowledge and psychology.',
      'Do not confuse Deming’s four areas with Juran’s trilogy or the DMAIC phases.'
    ),
    mcq(
      'ch12-t-q2',
      'Juran’s Quality Trilogy consists of:',
      [
        'Quality planning, quality control and quality improvement',
        'Define, measure and control',
        'Prevention, appraisal and failure',
        'SIPOC, PDCA and DMAIC'
      ],
      'a',
      'Juran described quality as three managerial processes: quality planning, quality control and quality improvement.',
      'Cost of quality categories are prevention, appraisal, internal failure and external failure, not Juran’s trilogy.'
    ),
    mcq(
      'ch12-t-q3',
      'What does SIPOC stand for?',
      [
        'Supplier, Input, Process, Output, Customer',
        'Supplier, Inspection, Product, Output, Control',
        'System, Input, Process, Organisation, Customer',
        'Scope, Input, Plan, Output, Change'
      ],
      'a',
      'SIPOC is Supplier, Input, Process, Output, Customer. It shows how work flows from suppliers through the project to customers.',
      'SIPOC is a process model, not a control cycle.'
    ),
    mcq(
      'ch12-t-q4',
      'Which sequence correctly represents the PDCA improvement cycle?',
      [
        'Plan, Do, Check, Act',
        'Plan, Decide, Control, Act',
        'Prepare, Do, Change, Adjust',
        'Plan, Do, Control, Analyse'
      ],
      'a',
      'PDCA is Plan, Do, Check, Act. Your review question says “PDAC”, but the notes and the standard model use PDCA.',
      'The third step is Check, not Control or Analyse.'
    ),
    mcq(
      'ch12-t-q5',
      'In which DMAIC phase are possible root causes confirmed through data analysis?',
      ['Define', 'Measure', 'Analyse', 'Control'],
      'c',
      'The Analyse phase identifies possible root causes, collects data and confirms the root causes through data analysis.',
      'Define charters the project; Measure baselines performance; Control sustains the improvement.'
    ),
    mcq(
      'ch12-t-q6',
      'Cost of quality is the sum of:',
      [
        'Prevention and appraisal costs',
        'Internal and external failure costs',
        'Cost of conformance and cost of nonconformance',
        'Direct and indirect project costs'
      ],
      'c',
      'Cost of quality = cost of conformance + cost of nonconformance. Conformance includes prevention and appraisal; nonconformance includes internal and external failure.',
      'Prevention, appraisal and failure are subcategories, not the top-level formula.'
    ),
    tf(
      'ch12-t-q7',
      'Manage quality is forward-looking and focuses primarily on processes, methods and standards.',
      true,
      'Manage quality (quality assurance) is proactive and process-focused. Control quality is backward-looking and focuses on specific deliverables.',
      'Do not reverse manage quality and control quality.'
    ),
    tf(
      'ch12-t-q8',
      'A tolerance limit is also called the voice of the process.',
      false,
      'A tolerance limit is what the customer will accept, so it is the voice of the customer. The control limit reflects what the process can consistently deliver and is the voice of the process.',
      'Tolerance = customer; control limit = process.'
    ),
    tf(
      'ch12-t-q9',
      'A process is capable when its control limits are within the customer’s tolerance limits.',
      true,
      'Capability means the process can consistently meet the customer’s tolerance. Being in control only means the process is stable within its own control limits.',
      'A process can be in control but not capable if its control limits are wider than tolerance.'
    ),
    tf(
      'ch12-t-q10',
      'Leading indicators report performance after the fact, while lagging indicators predict future performance.',
      false,
      'It is the other way round. Leading indicators predict future performance so the team can act early; lagging indicators report results after they have occurred.',
      'Think “lead” = forward-looking, “lag” = after the fact.'
    ),
    shortQ(
      'ch12-t-q11',
      3,
      'Name the four parts of Deming’s System of Profound Knowledge and briefly explain one of them.',
      'The four parts are appreciation for a system, knowledge of variation, theory of knowledge and psychology. For example, appreciation for a system means that organisations are systems of interacting parts, so parts cannot be managed in isolation; improving one part without considering the whole can make the system worse.',
      [
        mp('Names all four parts', ['system', 'variation', 'knowledge', 'psychology'], 2),
        mp('Explains one part accurately', ['interact', 'common', 'special', 'motivat', 'predict'], 1)
      ],
      'Deming’s four parts are a system view, variation, knowledge and psychology. Any one can be explained for the final mark.',
      'Do not list only “variation” and “psychology”; there are four parts.'
    ),
    shortQ(
      'ch12-t-q12',
      3,
      'Explain what a SIPOC model is and how it helps prevent scope creep.',
      'SIPOC stands for Supplier, Input, Process, Output, Customer. It shows that work flows from suppliers through the project to customers. It defines the process boundaries, which helps prevent scope creep, and it identifies stakeholders and feedback loops. The team should think backward from the customer’s desired outputs, then define the process, inputs and suppliers.',
      [
        mp('Defines SIPOC correctly', ['supplier', 'input', 'process', 'output', 'customer'], 1),
        mp('Explains process boundaries and scope creep', ['boundar', 'scope creep', 'scope'], 1),
        mp('Mentions stakeholders or feedback loops', ['stakeholder', 'feedback', 'customer'], 1)
      ],
      'SIPOC is a boundary-setting tool as well as a process description. That is why it helps with scope control.',
      'Do not describe SIPOC as a quality control chart.'
    ),
    shortQ(
      'ch12-t-q13',
      3,
      'Distinguish between common-cause and special-cause variation, and give an example of each.',
      'Common-cause variation is normal, random variation that is part of the process design and stays within predictable limits; for example, small differences in the weight of packaged products. Special-cause variation comes from external or unusual sources and is unpredictable; for example, a machine breaking down or a sudden batch of defective raw material. Common causes are addressed by improving the system; special causes are investigated and removed.',
      [
        mp('Defines common cause as normal or random variation', ['common', 'normal', 'random', 'predictable'], 1),
        mp('Defines special cause as unusual or external variation', ['special', 'unusual', 'external', 'unpredictable'], 1),
        mp('Gives a valid example of each', ['example', 'machine', 'weight', 'defect'], 1)
      ],
      'The response differs: common causes require system improvement, while special causes require investigation of the specific event.',
      'Do not treat every variation as a special cause.'
    ),
    shortQ(
      'ch12-t-q14',
      3,
      'Explain the difference between manage quality and control quality.',
      'Manage quality (quality assurance) is forward-looking and proactive. It focuses on processes, methods and standards, uses quality audits and process analysis, and gives stakeholders confidence that the right methods and people are being used. Control quality is backward-looking and reactive. It focuses on specific deliverables, uses inspection, peer review and testing, and verifies that deliverables are correct, complete and meet standards.',
      [
        mp('Manage quality is proactive and process-focused', ['proactive', 'forward', 'process', 'audit'], 1),
        mp('Control quality is reactive and deliverable-focused', ['reactive', 'backward', 'deliverable', 'inspection'], 1),
        mp('Gives the purpose or methods of each', ['confidence', 'verify', 'testing', 'standards'], 1)
      ],
      'The contrast is direction (forward/backward), focus (process/deliverable) and method (audit/inspection).',
      'Do not say both are the same because both are about quality.'
    ),
    essayQ(
      'ch12-t-q15',
      8,
      'Describe the process of achieving stakeholder satisfaction. How would you address a situation in which two stakeholders have mutually exclusive goals for the project?',
      'The five steps are: identify all stakeholders; prioritise among them; understand the prioritised stakeholders’ requirements; develop standards to ensure the requirements are met; and make trade-off decisions. Stakeholders judge quality of both the work processes and the deliverables. When two stakeholders have mutually exclusive goals, the project manager should clarify each goal and its underlying interest, quantify the impact of each option, identify whether the goals are truly incompatible, facilitate a trade-off, and escalate to the sponsor or governance body if the conflict cannot be resolved within the project’s authority. The decision and its rationale should be documented and communicated.',
      [
        mp('Identifies all stakeholders and prioritises them', ['identify', 'prioriti'], 2),
        mp('Understands requirements and develops standards', ['requirement', 'standard'], 2),
        mp('Makes trade-off decisions', ['trade-off', 'trade off', 'sacrifice'], 2),
        mp('Explains conflict resolution and escalation', ['conflict', 'negotiat', 'sponsor', 'escalat', 'document'], 2)
      ],
      'Stakeholder satisfaction is a structured process, not an attempt to please everyone. Mutually exclusive goals require explicit trade-offs or escalation.',
      'Do not claim that the project manager can always satisfy every stakeholder.'
    ),
    essayQ(
      'ch12-t-q16',
      8,
      'Classify each of the following costs as cost of conformance or cost of nonconformance, and explain your classification: planning, training, scrap, inspection, rework, warranty repairs, quality audit, field testing.',
      'Cost of conformance: planning, training, inspection, quality audit and field testing. These are planned prevention and appraisal activities intended to ensure requirements are met. Cost of nonconformance: scrap, rework and warranty repairs. These arise because defects occurred. Note that the list contains five conformance items and three nonconformance items; the answer should classify all eight correctly and explain the distinction: conformance costs are incurred to prevent or detect defects, while nonconformance costs are incurred because defects happened.',
      [
        mp('Classifies planning, training and inspection as conformance', ['planning', 'training', 'inspection', 'conformance'], 2),
        mp('Classifies quality audit and field testing as conformance', ['audit', 'field testing', 'conformance'], 2),
        mp('Classifies scrap, rework and warranty as nonconformance', ['scrap', 'rework', 'warranty', 'nonconformance'], 2),
        mp('Explains prevention/appraisal versus failure', ['prevent', 'appraisal', 'failure', 'defect'], 2)
      ],
      'Conformance includes prevention and appraisal. Nonconformance includes internal and external failure.',
      'Do not classify inspection as nonconformance just because it finds defects; inspection is an appraisal cost of conformance.'
    ),
    caseQ(
      'ch12-t-q17',
      12,
      'Read the case and answer parts (a) to (d).',
      'A public hospital is introducing an online appointment-booking system. Patients, clinic administrators, doctors and the IT department are stakeholders. The hospital is worried about long waiting times, duplicate bookings and poor adoption by elderly patients.',
      '(a) Construct a SIPOC view of the appointment-booking process. (b) Define two quality metrics, including a target and a threshold for each. (c) Identify three inspection points and explain whether each is prevention or inspection. (d) Explain how you would use PDCA to improve the process after launch.',
      [
        mp('SIPOC covers suppliers, inputs, process, outputs and customers for the booking process', ['supplier', 'input', 'process', 'output', 'customer'], 3),
        mp('Two metrics with targets and thresholds', ['metric', 'target', 'threshold', 'waiting', 'duplicate', 'adoption'], 3),
        mp('Three inspection points with prevention/inspection classification', ['inspection', 'prevention', 'handoff', 'milestone', 'test'], 3),
        mp('PDCA applied to a post-launch improvement', ['plan', 'do', 'check', 'act', 'pilot', 'data'], 3)
      ],
      'A strong answer makes the process concrete: suppliers include patients and clinic staff; inputs include patient details and appointment slots; the process is search-book-confirm; outputs are confirmed appointments and notifications; customers are patients and clinic staff. Metrics might be average booking time (target under 3 minutes, threshold 5 minutes), duplicate-booking rate (target under 1%, threshold 3%) and elderly-patient adoption (target 80%, threshold 65%). Inspection points could be a check of patient identity before booking (prevention), a test of the confirmation screen (inspection), and a handoff check between the booking system and the clinic schedule (inspection). PDCA: plan a change such as simplified screens, pilot it with one clinic, check booking time and errors, and adopt or adjust.',
      'Do not give generic metrics without a target and threshold. The question asks for measurable quality control.'
    )
  ]
};
