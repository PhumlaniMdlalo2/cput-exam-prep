import type { Chapter } from '../types'
import { def, important, ol, p, table, tip, ul } from '../helpers'

export const chapter13: Chapter = {
  id: 'ch13',
  number: 13,
  title: `Security Engineering`,
  subtitle: `Security dimensions, threats, risk assessment, secure design, guidelines and testing`,
  description: `Security dimensions and terminology, threat types, risk assessment and policy, secure architecture and design guidelines, and why security testing is difficult.`,
  examWeight: `Term 4 — Security`,
  sections: [
    {
      id: 'security-dimensions',
      title: `Security dimensions and levels`,
      blocks: [
        def(`Security`, `System property reflecting its ability to protect itself from accidental or deliberate external attack; a prerequisite for availability, reliability and safety.`),
        table(
          ['Dimension', 'Meaning'],
          [
            ['Confidentiality', 'Information is disclosed to people or programs not authorised to access it'],
            ['Integrity', 'Information is damaged or corrupted so it becomes unreliable'],
            ['Availability', 'Access to a system or its data that is normally available is not possible'],
          ],
        ),
        table(
          ['Level', 'Meaning'],
          [
            ['Infrastructure security', 'Systems management: configure networks/shared services to resist attack'],
            ['Application security', 'Software engineering: design individual applications to resist attack'],
            ['Operational security', 'Human/social issue: ensure people do not compromise security; trade-off with usability'],
          ],
        ),
        important(`Exam trap`, `Configuring middleware to avoid known vulnerabilities is infrastructure security, not application security. Intrusion can change the executing system or data, invalidating reliability and safety assurance.`),
      ],
    },
    {
      id: 'security-terminology',
      title: `Terminology and threats`,
      blocks: [
        table(
          ['Term', 'Definition'],
          [
            ['Asset', 'Something of value to protect, e.g. the system or its data'],
            ['Threat', 'Circumstances with the potential to cause loss or harm'],
            ['Vulnerability', 'Weakness in a system that may be exploited to cause loss or harm'],
            ['Control', 'Protective measure that reduces a vulnerability, e.g. encryption'],
            ['Exposure', 'Possible loss or harm to a computing system'],
            ['Attack', 'Deliberate exploitation of a vulnerability from outside the system'],
          ],
        ),
        table(
          ['Threat type', 'Meaning', 'Example'],
          [
            ['Interception', 'Attacker gains access to an asset', 'Reading a patient record'],
            ['Interruption', 'Part of the system is made unavailable', 'Denial-of-service on a database server'],
            ['Modification', 'Attacker tampers with an asset', 'Altering a patient record'],
            ['Fabrication', 'False information is inserted', 'Adding fake bank transactions'],
          ],
        ),
        p(`Security assurance strategies: vulnerability avoidance (no external connection), attack detection and elimination (virus checkers), exposure limitation and recovery (backups). Mentcare examples: asset = patient record; exposure = unauthorised disclosure; vulnerability = weak authentication; threat = outsider seeking records; attack = SQL injection; control = encryption, input validation and access logging.`),
        p(`Extra threat/control pairs can generate requirements: unauthorised record viewing → role-based access control and audit logs; altered prescription → integrity checks and digital signatures; lost laptop → disk encryption and remote wipe.`),
      ],
    },
    {
      id: 'risk-and-policy',
      title: `Risk assessment and policy`,
      blocks: [
        p(`Security is a business issue: never spend more protecting an asset than its value. Decisions are driven by an organisational security policy covering information access strategy, assets to protect, protection levels, responsibilities of users/managers/organisation, and procedures to maintain.`),
        p(`Risk assessment stages: preliminary (identify generic risks and affordable security), design/life-cycle (use technical design to find vulnerabilities and change requirements), operational (after installation, cover human behaviour and organisational change).`),
        ol([
          `Identify assets and their value.`,
          `Assess exposure (potential losses) and identify threats.`,
          `Decompose threats into attacks.`,
          `Identify controls and assess their feasibility and cost.`,
          `Define infrastructure or application security requirements.`,
        ]),
        p(`Security requirements may be risk avoidance (risk cannot arise), risk detection (identify and neutralise before loss), or risk mitigation (recover and restore after loss).`),
        p(`Unlike safety, security has an intelligent adversary: attackers probe defences over time, may conceal the cause, and may deliberately cause shutdown. Compared with safety, attacks are deliberate rather than accidental, can be hidden, adapt to defences and persist; attackers may intentionally cause shutdown. Security requirements are "shall not" statements, not simple checkable constraints.`),
        tip(`Exam trap`, `Safety problems are accidental; security problems are deliberate. This is why security testing is harder than safety testing.`),
      ],
    },
    {
      id: 'secure-design',
      title: `Secure systems design`,
      blocks: [
        p(`Security must be designed in: it is very difficult to secure an insecure system after implementation. Architecture addresses protection (organise system so critical assets resist attack) and distribution (spread assets so one successful attack does not cause total loss).`),
        p(`These conflict: distributed assets cost more to protect and may compromise usability/performance. Protection is layered: platform-level (controls on the platform), application-level (e.g. extra passwords), record-level (invoked when specific information is accessed). Like a building with a perimeter fence, locked door, locked cabinet and safe, each layer delays an attacker and limits damage if another layer fails.`),
        p(`Distribution is important when denial-of-service risk is high: separate platforms may not share a vulnerability. Local copies of records maintain service during server outages but may need encryption.`),
        ol([
          `Base decisions on an explicit security policy.`,
          `Avoid a single point of failure (e.g. password plus question-based authentication).`,
          `Fail securely (no sensitive data exposed when controls are unavailable).`,
          `Balance security and usability (over-complex passwords get written down).`,
          `Log user actions (who, what, asset, time; deters insiders and supports recovery).`,
          `Use redundancy and diversity (different OS/technology so one vulnerability does not affect all copies).`,
          `Specify input formats (prevents buffer overflow and SQL poisoning).`,
          `Compartmentalise assets (need-to-know limits damage from stolen credentials).`,
          `Design for deployment (view configurations, minimal default privileges, localised settings, easy updates).`,
          `Design for recovery (backup authentication; re-initialise after compromise).`,
        ]),
      ],
    },
    {
      id: 'secure-programming-and-testing',
      title: `Secure programming and testing`,
      blocks: [
        p(`Vulnerabilities are often language-specific: Java checks array bounds, C/C++ does not (buffer overflow exploited by the 1988 Internet worm). Security and reliability are linked: reliability improvements such as input checks also improve security. SQL poisoning inserts SQL fragments via forms; specifying input format avoids it.`),
        p(`Security testing is difficult because requirements are "shall not" statements that cannot be expressed as simple checkable constraints, and attackers are intelligent, persistent, and probe for weaknesses (possibly longer than testers). Unknown attacks cannot be derived into requirements.`),
        table(
          ['Validation approach', 'Description'],
          [
            ['Experience-based testing', 'Review against known attack types using test cases, code review and checklists'],
            ['Penetration testing', 'A team simulates attacks with the goal of breaching security'],
            ['Tool-based analysis', 'Password checkers, static analysis and other security tools'],
            ['Formal verification', 'Mathematical proof that the program meets its security specification'],
          ],
        ),
        p(`Use a risk-based approach: focus testing on the most significant risks and also try to break the system by other means. Formal verification needs specialist expertise and is less cost-effective than static analysis.`),
        p(`Equity trading attacks: malicious orders can move prices, and intrusion can corrupt the transaction database. Counter with strong authentication, input validation, segregated networks, audit logs, anomaly monitoring, redundant transaction copies and recovery procedures.`),
        p(`Validate password protection by checking capture and storage (hash and salt, never plaintext), dictionary/brute-force resistance, lockout and delay policy, default/weak-account removal, password complexity and reset procedures; use password crackers and static analysis tools. Mentcare confidentiality checklist: unauthorised record access, disclosure via lost devices or logs, injection via forms, and weak session/access controls.`),
      ],
    },
  ],
  summary: [
    ul([
      `Dimensions: confidentiality (disclosure), integrity (corruption), availability (access lost).`,
      `Security is prerequisite for availability, reliability and safety; intrusion invalidates assurance.`,
      `Application security = software design; infrastructure = systems management/configuration; operational = human behaviour.`,
      `Asset = value; threat = potential harm; vulnerability = weakness; control = protective measure; exposure = possible loss.`,
      `Threats: interception (access), interruption (unavailable), modification (tamper), fabrication (false data).`,
      `Security is a business issue: spend no more than asset value; driven by an organisational policy.`,
      `Risk assessment: preliminary, design/life-cycle, operational; asset → exposure → threat → attack → control → requirements.`,
      `Requirements: risk avoidance, detection, mitigation. Unlike safety, security has an intelligent adversary.`,
      `Architecture balances protection (platform/application/record layers) and distribution (limit attack impact).`,
      `Ten guidelines: policy, no single point, fail securely, usability, logs, redundancy/diversity, input formats, compartmentalise, deployment, recovery.`,
      `Testing is hard: "shall not" requirements and intelligent attackers; use experience-based, penetration, tool-based and formal validation.`,
    ]),
  ],
  keyTerms: [
    { term: `Security`, definition: `Ability of a system to protect itself from accidental or deliberate external attack.` },
    { term: `Confidentiality`, definition: `Protection against disclosure to unauthorised people or programs.` },
    { term: `Integrity`, definition: `Protection against damage or corruption making information unreliable.` },
    { term: `Availability`, definition: `Legitimate access to a system or its data remains possible.` },
    { term: `Asset`, definition: `Something of value that must be protected.` },
    { term: `Threat`, definition: `Circumstances with the potential to cause loss or harm.` },
    { term: `Vulnerability`, definition: `Weakness that may be exploited to cause loss or harm.` },
    { term: `Control`, definition: `Protective measure that reduces a vulnerability.` },
    { term: `Penetration testing`, definition: `Simulated attacks by a team aiming to breach system security.` },
    { term: `Compartmentalisation`, definition: `Restricting users to only the information they need for their work.` },
  ],
}
