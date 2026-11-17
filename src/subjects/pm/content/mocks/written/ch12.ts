import type { Question } from '../../../types/content';
import { caseQ, essayQ, mp } from '../../questionHelpers';

export const ch12Written: Question[] = [
  essayQ(
    'w12-01',
    10,
    'Explain the contributions of Deming, Juran, Crosby and Ishikawa to project quality management.',
    'Deming contributed the System of Profound Knowledge: appreciation for a system, knowledge of variation, theory of knowledge and psychology. Juran contributed the Quality Trilogy: quality planning, quality control and quality improvement. Crosby argued that quality means meeting requirements rather than exceeding them, that the burden of quality falls on those who do the work, and that quality costs least when work is done correctly the first time. Ishikawa argued that quality starts with understanding customers, that root causes rather than symptoms must be removed, that all workers must engage, and that most problems can be solved with simple tools. Together they support prevention, customer focus, fact-based management and continuous improvement.',
    [
      mp('Deming: systems, variation, knowledge and psychology', ['deming', 'system', 'variation', 'psychology'], 2),
      mp('Juran: quality planning, control and improvement trilogy', ['juran', 'planning', 'control', 'improvement'], 2),
      mp('Crosby: meet requirements, do work correctly first time', ['crosby', 'requirements', 'first time'], 2),
      mp('Ishikawa: customer focus, root causes, all workers, simple tools', ['ishikawa', 'root cause', 'customer', 'simple tools'], 2),
      mp('Links the contributions to prevention and continuous improvement', ['prevention', 'continuous improvement', 'customer focus'], 2)
    ],
    'Each leader needs a distinctive contribution, not a generic statement that they cared about quality.',
    'Do not attribute PDCA to Juran or the Quality Trilogy to Deming.'
  ),
  essayQ(
    'w12-02',
    10,
    'Explain the four core project quality concepts and how they work together.',
    'The four core concepts are stakeholder satisfaction, process management, fact-based management and empowered performance. Stakeholder satisfaction means identifying and prioritising stakeholders, understanding their quality requirements and setting standards. Process management means understanding, controlling and improving the processes that produce deliverables, using tools such as SIPOC and PDCA. Fact-based management means understanding variation, deciding what to measure, collecting reliable data and using information appropriately. Empowered performance means having capable and willing workers at every level, recognising individuality, strengths, responsibilities and collaboration. They work together because stakeholders define quality, processes deliver it, facts show whether it is happening, and empowered people sustain it.',
    [
      mp('Stakeholder satisfaction: identify, prioritise and meet requirements', ['stakeholder satisfaction', 'identify', 'prioritise', 'requirement'], 2),
      mp('Process management: understand, control and improve processes', ['process management', 'control', 'improve', 'sipoc'], 2),
      mp('Fact-based management: variation, measurement, data and information', ['fact-based', 'variation', 'measure', 'data'], 2),
      mp('Empowered performance: capable, willing and responsible workers', ['empowered', 'capable', 'responsib', 'collaboration'], 2),
      mp('Explains how the four concepts reinforce one another', ['together', 'reinforce', 'sustain', 'define'], 2)
    ],
    'The four concepts are not alternatives; they are complementary parts of one quality system.',
    'Do not list only one or two concepts when the question asks for all four.'
  ),
  essayQ(
    'w12-03',
    10,
    'Distinguish between quality and grade, and between precision and accuracy. Give an example of each.',
    'Quality is the degree to which a deliverable meets its requirements; grade is a category or rank assigned to deliverables that serve the same purpose but have different technical characteristics. A low-grade but fully compliant product can still be high quality, while a high-grade product that fails requirements is low quality. Precision is the degree to which repeated measurements give the same result; accuracy is how close a measurement is to the true value. A scale can be precise but inaccurate if it consistently reads 2 kg too high. A project needs both accurate and precise measurement to make sound quality decisions.',
    [
      mp('Quality is conformance to requirements', ['quality', 'requirements', 'conformance'], 2),
      mp('Grade is a rank or category based on technical characteristics', ['grade', 'rank', 'category', 'characteristics'], 2),
      mp('Low grade can still be high quality; high grade can still be low quality', ['low grade', 'high grade', 'quality'], 2),
      mp('Precision is repeatability of measurement; accuracy is closeness to truth', ['precision', 'repeat', 'accuracy', 'true value'], 2),
      mp('Uses a clear example that shows the distinction', ['example', 'scale', 'measurement'], 2)
    ],
    'Quality is not the same as luxury or high grade; it is conformance to requirements.',
    'Do not treat precision and accuracy as synonyms.'
  ),
  essayQ(
    'w12-04',
    10,
    'Describe the purpose and typical contents of a quality management plan.',
    'The quality management plan defines how the project will plan, manage and control quality. It typically includes quality objectives and standards, roles and responsibilities, the quality management approach, the processes and tools to be used, quality metrics and acceptance criteria, the approach to quality assurance and control, reporting and communication, and the resources and timing for quality activities. It should be aligned with stakeholder requirements, the scope baseline and the project management plan. It also identifies who has authority to approve quality decisions.',
    [
      mp('Defines how quality will be planned, managed and controlled', ['plan', 'manage', 'control'], 2),
      mp('Includes quality objectives, standards and acceptance criteria', ['objective', 'standard', 'acceptance criteria'], 2),
      mp('Defines roles, responsibilities and authority', ['role', 'responsibility', 'authority'], 2),
      mp('Specifies processes, tools, metrics and reporting', ['process', 'tool', 'metric', 'report'], 2),
      mp('Aligns with stakeholder requirements and the project management plan', ['stakeholder', 'requirement', 'project management plan'], 2)
    ],
    'The quality management plan is a subsidiary plan of the project management plan.',
    'Do not confuse the quality management plan with the quality control results.'
  ),
  essayQ(
    'w12-05',
    10,
    'Explain the difference between manage quality and control quality, and give an example of each.',
    'Manage quality is the process of translating the quality management plan into executable quality activities. It is preventive and process-oriented: it includes quality audits, process analysis, design for quality and ensuring the team follows the plan. Control quality is the process of monitoring and recording results of quality activities to assess performance and recommend corrective action. It is inspection-oriented and product-focused: it includes testing, inspection, checklists and statistical sampling. Manage quality asks whether we are following the right process; control quality asks whether the output meets requirements. Both feed improvement and change control.',
    [
      mp('Manage quality translates the plan into quality activities', ['manage quality', 'plan', 'activities'], 2),
      mp('Manage quality is preventive and process-oriented', ['prevent', 'process', 'audit'], 2),
      mp('Control quality monitors results and recommends corrective action', ['control quality', 'monitor', 'corrective'], 2),
      mp('Control quality is inspection- and product-oriented', ['inspection', 'testing', 'product'], 2),
      mp('Both support improvement and change control', ['improvement', 'change control', 'both'], 2)
    ],
    'Manage quality is about the process; control quality is about the output.',
    'Do not describe quality assurance as only final inspection.'
  ),
  essayQ(
    'w12-06',
    10,
    'Describe the seven basic quality tools and explain how a project manager would use them.',
    'The seven basic quality tools are cause-and-effect diagrams, flowcharts, check sheets, Pareto charts, histograms, control charts and scatter diagrams. Cause-and-effect diagrams organise possible causes of a problem into categories. Flowcharts show process steps and decision points. Check sheets standardise data collection. Pareto charts rank causes by frequency and highlight the vital few. Histograms show the distribution of data. Control charts distinguish common from special cause variation using control limits. Scatter diagrams show relationships between two variables. The project manager selects the tool based on the question being asked and uses the results to prioritise improvement.',
    [
      mp('Cause-and-effect diagram and flowchart', ['cause-and-effect', 'fishbone', 'flowchart'], 2),
      mp('Check sheet and Pareto chart', ['check sheet', 'pareto', 'vital few'], 2),
      mp('Histogram and control chart', ['histogram', 'control chart', 'control limit'], 2),
      mp('Scatter diagram shows relationships between variables', ['scatter', 'relationship', 'variable'], 2),
      mp('Selects the tool based on the question and prioritises improvement', ['select', 'question', 'prioritise', 'improvement'], 2)
    ],
    'A tool is useful only when it answers a specific quality question.',
    'Do not confuse a Pareto chart with a histogram.'
  ),
  essayQ(
    'w12-07',
    10,
    'Explain the cost of quality and distinguish between conformance and nonconformance costs.',
    'The cost of quality is the total cost of ensuring quality and of failing to ensure it. Conformance costs are incurred to prevent or detect defects and include prevention costs and appraisal costs. Prevention costs include training, quality planning and process improvement. Appraisal costs include inspection, testing and audits. Nonconformance costs arise because defects have occurred and include internal failure costs and external failure costs. Internal failure includes rework and scrap before delivery; external failure includes warranty claims, complaints, returns and reputational damage. Prevention is usually cheaper than failure.',
    [
      mp('Cost of quality covers both conformance and nonconformance', ['cost of quality', 'conformance', 'nonconformance'], 2),
      mp('Prevention costs: training, planning and process improvement', ['prevention', 'training', 'planning'], 2),
      mp('Appraisal costs: inspection, testing and audits', ['appraisal', 'inspection', 'testing'], 2),
      mp('Internal failure: rework and scrap before delivery', ['internal failure', 'rework', 'scrap'], 2),
      mp('External failure: warranty, complaints, returns and reputation', ['external failure', 'warranty', 'complaint'], 2)
    ],
    'Prevention and appraisal are investments; internal and external failure are losses.',
    'Do not classify training as a failure cost.'
  ),
  essayQ(
    'w12-08',
    10,
    'Explain how quality audits and continuous improvement support project quality.',
    'A quality audit is a structured, independent review of quality processes and results against the quality management plan, standards and requirements. It identifies strengths, gaps, nonconformities and improvement opportunities. Findings should be documented, assigned to an owner and tracked to closure. Continuous improvement uses tools such as PDCA and DMAIC to improve processes rather than only correcting outputs. Improvement can be incremental or breakthrough. Lessons learned from audits should be shared and incorporated into future work. Together, audits provide evidence and improvement converts evidence into better processes.',
    [
      mp('Quality audit is an independent review against plan and standards', ['audit', 'independent', 'standard'], 2),
      mp('Identifies strengths, gaps, nonconformities and opportunities', ['strength', 'gap', 'nonconformity', 'opportunit'], 2),
      mp('Findings are documented, owned and tracked to closure', ['document', 'owner', 'closure'], 2),
      mp('Continuous improvement uses PDCA, DMAIC or similar methods', ['pdca', 'dmaic', 'continuous improvement'], 2),
      mp('Lessons are shared and used to improve future work', ['lesson', 'share', 'future'], 2)
    ],
    'An audit is not a blame exercise; it is a learning and improvement mechanism.',
    'Do not stop at identifying problems; require ownership and follow-up.'
  ),
  essayQ(
    'w12-09',
    10,
    'Explain how Agile teams build quality into their work.',
    'Agile teams build quality in through short iterations, frequent feedback and a shared definition of done. They use test-driven development, automated testing, continuous integration and refactoring to catch defects early. Pair programming and code reviews improve work as it is produced. The product owner and customers review working increments at iteration reviews, providing early validation. Retrospectives identify process improvements. Cross-functional teams share responsibility for quality. The emphasis is on preventing defects and adapting quickly rather than relying on a final inspection phase.',
    [
      mp('Short iterations and frequent feedback', ['iteration', 'feedback', 'frequent'], 2),
      mp('Definition of done provides a shared quality standard', ['definition of done', 'standard', 'shared'], 2),
      mp('Test-driven development, automated testing and continuous integration', ['test-driven', 'automated test', 'continuous integration'], 2),
      mp('Pair programming, code reviews and refactoring improve quality', ['pair programming', 'code review', 'refactor'], 2),
      mp('Iteration reviews and retrospectives drive validation and improvement', ['review', 'retrospective', 'validation'], 2)
    ],
    'Agile quality is continuous and team-owned, not a final inspection step.',
    'Do not assume Agile projects have no documentation or standards.'
  ),
  caseQ(
    'w12-10',
    10,
    'Analyse the case and recommend a quality improvement approach.',
    'A software project has a rising defect rate, missed iteration goals and repeated customer complaints about the same features. The project manager wants to improve quality without simply adding more testers at the end.',
    'The project manager should treat the problem as a process and system issue, not only an inspection issue. Apply the four core concepts: understand stakeholder requirements, examine the process, use facts, and empower the team. Use quality tools such as a Pareto chart to identify the vital few defect causes, a cause-and-effect diagram to find root causes, and control charts to separate common from special cause variation. Analyse the cost of quality and invest in prevention and appraisal rather than external failure. Strengthen the definition of done, automated testing, code reviews and continuous integration. Use PDCA or retrospectives to test improvements and track results.',
    [
      mp('Treats the problem as a process and system issue', ['process', 'system', 'root cause'], 2),
      mp('Applies stakeholder, process, fact-based and empowered concepts', ['stakeholder', 'process', 'fact', 'empowered'], 2),
      mp('Uses Pareto, cause-and-effect or control charts to analyse defects', ['pareto', 'cause-and-effect', 'control chart', 'defect'], 2),
      mp('Invests in prevention and appraisal rather than failure costs', ['prevention', 'appraisal', 'cost of quality'], 2),
      mp('Uses definition of done, testing, reviews and PDCA or retrospectives', ['definition of done', 'testing', 'review', 'pdca', 'retrospective'], 2)
    ],
    'A strong answer rejects the “test more at the end” shortcut and improves the process.',
    'Do not recommend only more inspection without addressing root causes.'
  )
];
