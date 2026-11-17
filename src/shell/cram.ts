export type CramCard = {
  title: string
  points: string[]
}

export type CramSheet = {
  heading: string
  intro: string
  cards: CramCard[]
  reminder: string
}

export const cramSheets: Record<string, CramSheet> = {
  adt: {
    heading: 'ADT in five minutes',
    intro: 'The chapters that carry the most exam weight, reduced to the points you must be able to say out loud.',
    cards: [
      {
        title: 'Software evolution · Ch 9',
        points: [
          'Systems must change; plan for evolution instead of a perfect first release.',
          'Legacy systems: understand before replacing; wrapping and re-engineering are options.',
          'Maintenance types: corrective, adaptive, perfective and preventive.',
        ],
      },
      {
        title: 'Dependability & reliability · Ch 10–11',
        points: [
          'Dependability covers availability, reliability, safety, security and resilience.',
          'Fault → error → failure. Remove faults, tolerate faults or prevent them.',
          'Metrics: POFOD, ROCOF, MTTF and availability — match the metric to the question.',
          'Fault tolerance: N-version programming, recovery blocks and triple modular redundancy.',
        ],
      },
      {
        title: 'Safety & security · Ch 12–13',
        points: [
          'Safety is freedom from unacceptable risk; hazard analysis drives the safety case.',
          'Security pillars: confidentiality, integrity and availability.',
          'Identify assets, threats and controls before choosing countermeasures.',
          'Validate inputs, log user actions, compartmentalise assets and design for recovery.',
        ],
      },
      {
        title: 'Resilience & systems · Ch 14, 19',
        points: [
          'The 4 Rs: resistance, recognition, recovery and reinstatement.',
          'Emergent properties belong to the whole system, not one component.',
          'Sociotechnical systems include people, process, technology and organisation.',
        ],
      },
    ],
    reminder: 'For essays, name the theory, define it, then apply it to the scenario in the question.',
  },
  is: {
    heading: 'IS in five minutes',
    intro: 'SQL patterns, design rules and transaction concepts that recur across the paper.',
    cards: [
      {
        title: 'Advanced SQL · Ch 8',
        points: [
          'INNER JOIN drops non-matches; LEFT JOIN keeps every row from the left table.',
          'A correlated subquery runs once per outer row; use EXISTS for existence tests.',
          'WHERE filters rows, GROUP BY groups them and HAVING filters the groups.',
          'UNION removes duplicates; UNION ALL keeps them.',
        ],
      },
      {
        title: 'Database design · Ch 9',
        points: [
          'SDLC covers planning, analysis, design, implementation and support; the DBLC mirrors it for data.',
          'Work from business rules to entities, attributes and relationships.',
          'Normalisation removes redundancy; design top-down: conceptual → logical → physical.',
        ],
      },
      {
        title: 'Transactions & concurrency · Ch 10',
        points: [
          'ACID: atomicity, consistency, isolation and durability.',
          'COMMIT makes changes permanent; ROLLBACK undoes them.',
          'Locks, timestamps and optimistic control prevent lost updates and deadlocks.',
        ],
      },
      {
        title: 'Tuning & distributed DBs · Ch 11–12',
        points: [
          'Index selective columns used in WHERE and JOIN; avoid functions on indexed columns.',
          'Two-phase commit coordinates a distributed transaction.',
          'CAP trades consistency, availability and partition tolerance.',
          'Fragmentation, replication and allocation decide where data lives.',
        ],
      },
    ],
    reminder: 'In SQL answers, write the query first, then state the join or aggregate choice in one line.',
  },
  pm: {
    heading: 'PM in five minutes',
    intro: 'The formulas and process sequences that earn marks even when the scenario is unfamiliar.',
    cards: [
      {
        title: 'Risk · Ch 11',
        points: [
          'Plan → identify → qualitative analysis → quantitative analysis → responses → monitor.',
          'The risk register records probability, impact, owner, response and status.',
          'Qualitative analysis prioritises; quantitative analysis models impact numerically.',
        ],
      },
      {
        title: 'Quality · Ch 12',
        points: [
          'Manage quality improves the process; control quality checks the deliverables.',
          'Prevention and appraisal are cheaper than internal and external failure.',
          'Cost of quality = prevention + appraisal + failure costs.',
        ],
      },
      {
        title: 'Earned value · Ch 14',
        points: [
          'SV = EV − PV; CV = EV − AC. Negative means behind schedule or over budget.',
          'SPI = EV ÷ PV; CPI = EV ÷ AC. Below 1.0 is unfavourable.',
          'ETC = (BAC − EV) ÷ CPI or BAC − EV; EAC = AC + ETC.',
          'TCPI = (BAC − EV) ÷ (BAC − AC); above 1.0 means efficiency must improve.',
        ],
      },
      {
        title: 'Closing · Ch 15',
        points: [
          'Validate scope → obtain acceptance → close the project → close procurements.',
          'Early termination still needs formal closure and documented reasons.',
          'Record lessons learned, release the team and archive the project files.',
        ],
      },
    ],
    reminder: 'Always write the EVM formula before substituting numbers — method marks are easy to lose.',
  },
  appdev: {
    heading: 'App Dev in five minutes',
    intro: 'Pattern categories, SOLID and the Spring concepts that appear repeatedly in tests and mocks.',
    cards: [
      {
        title: 'Design patterns',
        points: [
          'Creational: Abstract Factory, Builder, Factory Method, Singleton.',
          'Structural: Adapter, Bridge, Composite, Decorator, Flyweight.',
          'Behavioural: Command, Visitor, Interpreter, Observer, Iterator, Strategy.',
          'Decorator wraps to add behaviour; Observer publishes changes to many dependants.',
        ],
      },
      {
        title: 'SOLID',
        points: [
          'SRP: one reason to change. OCP: extend without modifying.',
          'LSP: a subclass must be usable wherever its base class is expected.',
          'ISP: split large interfaces. DIP: depend on abstractions, not concrete classes.',
        ],
      },
      {
        title: 'Spring REST & JPA',
        points: [
          '@RestController plus @GetMapping/@PostMapping map HTTP requests to methods.',
          '@Entity maps a table; the repository handles persistence and the service holds business logic.',
          'Validate @RequestBody with @Valid and keep DTOs at the API boundary.',
        ],
      },
      {
        title: 'Security',
        points: [
          '@CrossOrigin allows a listed browser origin to call the API.',
          'The security filter chain authenticates before the controller runs.',
          'Send JWTs in Authorization: Bearer; hash passwords and never log secrets.',
        ],
      },
    ],
    reminder: 'For pattern questions, name the category first, then the intent, then where you would use it.',
  },
  ep: {
    heading: 'Exam prep in five minutes',
    intro: 'A cross-subject sweep for the final hour before the paper.',
    cards: [
      {
        title: 'ADT spine',
        points: [
          'Evolution → dependability → reliability → safety → security → resilience → systems engineering.',
          'Define the term, give one property, then apply it to the scenario.',
        ],
      },
      {
        title: 'IS spine',
        points: [
          'Joins and subqueries → database design → ACID and concurrency → tuning → distributed databases.',
          'Write the SQL, then justify the join, aggregate or index choice.',
        ],
      },
      {
        title: 'PM spine',
        points: [
          'Risk → quality → earned value → closing.',
          'Memorise SV, CV, SPI, CPI, ETC, EAC and TCPI before the paper.',
        ],
      },
      {
        title: 'Paper technique',
        points: [
          'Read the marking guide after every attempt; marks follow specific keywords and steps.',
          'Answer true/false and multiple choice first, then calculations, then essays.',
          'Show working for every calculation and keep essays structured: definition, theory, application.',
        ],
      },
    ],
    reminder: 'The SQL paper is 20 MC + 20 matching + 20 essay + 40 SQL marks — protect time for the SQL section.',
  },
}
