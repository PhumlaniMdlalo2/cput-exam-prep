export type CramCard = {
  title: string
  tag?: string
  points: string[]
}

export type CramSheet = {
  heading: string
  intro: string
  shortlist: string[]
  cards: CramCard[]
  reminder: string
}

export const cramSheets: Record<string, CramSheet> = {
  adt: {
    heading: 'ADT: the 80/20 cram sheet',
    intro: 'Master this small set of high-yield ideas first — they recur across essays, scenarios and short questions.',
    shortlist: [
      'Fault → error → failure, and the five dependability properties.',
      'Reliability metrics and fault-tolerance architectures.',
      'Hazard analysis, risk reduction and the safety case.',
      'Security pillars, assets, threats and secure design guidelines.',
      'The 4 Rs of resilience and emergent system properties.',
      'Maintenance types and legacy-system options.',
    ],
    cards: [
      {
        title: 'Software evolution · Ch 9',
        tag: 'Must know',
        points: [
          'Systems must change; plan for evolution instead of a perfect first release.',
          'Change drivers: new requirements, business change, repairs, new hardware and higher performance or reliability demands.',
          'Legacy options: keep and maintain, wrap, re-engineer or replace.',
          'Maintenance types: corrective, adaptive, perfective and preventive.',
          'Evolution cost rises when structure has decayed — record decisions and keep documentation current.',
        ],
      },
      {
        title: 'Dependability & reliability · Ch 10–11',
        tag: 'Must know',
        points: [
          'Dependability covers availability, reliability, safety, security and resilience.',
          'Fault → error → failure. Remove faults, tolerate faults or prevent them.',
          'Availability is uptime at a point in time; reliability is failure-free operation over a period.',
          'Metrics: POFOD, ROCOF, MTTF and availability — match the metric to the question.',
          'Fault tolerance: N-version programming, recovery blocks and triple modular redundancy.',
          'Achievement methods: fault avoidance, fault removal and fault tolerance.',
        ],
      },
      {
        title: 'Safety & security · Ch 12–13',
        points: [
          'Safety is freedom from unacceptable risk; hazard analysis drives the safety case.',
          'A hazard is a condition with harm potential; risk combines probability and consequence.',
          'Safety strategies: hazard avoidance, detection and recovery, and damage limitation.',
          'Security pillars: confidentiality, integrity and availability.',
          'Identify assets, threats and controls before choosing countermeasures.',
          'Secure design: validate inputs, log user actions, compartmentalise assets and design for recovery.',
          'Misuse cases model hostile interactions as rigorously as use cases model intended ones.',
        ],
      },
      {
        title: 'Resilience & systems · Ch 14, 19',
        points: [
          'The 4 Rs: resistance, recognition, recovery and reinstatement.',
          'Swiss cheese model: layers of defence fail when the holes line up.',
          'Emergent properties belong to the whole system, not one component.',
          'Sociotechnical systems include people, process, technology and organisation.',
          'Reliability depends on context — the same system can be reliable in one setting and unsafe in another.',
          'Procurement and system lifetime decisions strongly affect evolution cost.',
        ],
      },
      {
        title: 'Exam method · All chapters',
        points: [
          'For application questions, name the property threatened, then name a concrete control.',
          'Use exact keywords: hazard, risk, fault tolerance, emergent property, dependability.',
          'For reliability questions, state the metric, then interpret the result in plain language.',
          'Structure essays as definition → theory → application to the scenario → short conclusion.',
        ],
      },
    ],
    reminder: '80/20 move: if you only revise four things, revise fault chains, reliability metrics, safety cases and the 4 Rs.',
  },
  is: {
    heading: 'IS: the 80/20 cram sheet',
    intro: 'SQL earns a large share of the marks, so prioritise query patterns before the longer theory chapters.',
    shortlist: [
      'Joins, correlated subqueries and EXISTS.',
      'GROUP BY, HAVING, aggregate functions and set operators.',
      'DML/DDL syntax with COMMIT and ROLLBACK.',
      'ACID, concurrency control and isolation levels.',
      'Indexes, execution plans and query optimisation.',
      'DDBMS transparency, two-phase commit and CAP.',
    ],
    cards: [
      {
        title: 'Advanced SQL · Ch 8',
        tag: 'Must know',
        points: [
          'INNER JOIN drops non-matches; LEFT JOIN keeps every row from the left table.',
          'Use LEFT JOIN with IS NULL to find rows with no match.',
          'A correlated subquery runs once per outer row; use EXISTS for existence tests.',
          'COUNT(*) counts rows; COUNT(column) ignores NULLs.',
          'WHERE filters rows, GROUP BY groups them and HAVING filters the groups.',
          'UNION removes duplicates; UNION ALL keeps them.',
          'Logical order: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.',
        ],
      },
      {
        title: 'Database design · Ch 9',
        tag: 'Must know',
        points: [
          'SDLC covers planning, analysis, design, implementation and support; the DBLC mirrors it for data.',
          'Conceptual design says what; logical design says tables and keys; physical design says storage and indexes.',
          'Work from business rules to entities, attributes and relationships.',
          'A primary key uniquely identifies a row; a foreign key enforces a relationship.',
          'Normalisation removes repeating groups, partial dependencies and transitive dependencies.',
        ],
      },
      {
        title: 'Transactions & concurrency · Ch 10',
        points: [
          'ACID: atomicity, consistency, isolation and durability.',
          'COMMIT makes changes permanent; ROLLBACK undoes them.',
          'Locks, timestamps and optimistic control prevent lost updates and deadlocks.',
          'A deadlock is a cycle of waiting transactions; the DBMS breaks it by aborting one.',
          'Isolation levels trade concurrency against dirty reads, non-repeatable reads and phantoms.',
          'Optimistic control validates at commit; pessimistic locking happens before use.',
        ],
      },
      {
        title: 'Tuning & distributed DBs · Ch 11–12',
        points: [
          'Read the execution plan; the optimiser chooses access paths from database statistics.',
          'Index selective columns used in WHERE and JOIN; avoid functions on indexed columns.',
          'Selectivity is the fraction of rows retrieved — fewer rows means a more useful index.',
          'Two-phase commit coordinates a distributed transaction.',
          'CAP trades consistency, availability and partition tolerance.',
          'Fragmentation, replication and allocation decide where data lives.',
          'Replication improves availability and read speed but makes consistency harder.',
        ],
      },
      {
        title: 'SQL exam technique · Section D',
        points: [
          'Section D carries 40 marks — protect at least 40 minutes for it.',
          'Write the query first, then state the join, aggregate or index choice in one line.',
          'Qualify columns with aliases when tables share names.',
          'Test a query mentally with one sample row before moving on.',
          'If the question is ambiguous, state the assumption, for example INNER versus LEFT JOIN.',
        ],
      },
    ],
    reminder: '80/20 move: drill joins, subqueries, GROUP BY/HAVING and DML until they are automatic — they underpin most SQL marks.',
  },
  pm: {
    heading: 'PM: the 80/20 cram sheet',
    intro: 'EVM formulas and process sequences earn marks even when the scenario is unfamiliar — learn those first.',
    shortlist: [
      'EVM formulas: SV, CV, SPI, CPI, ETC, EAC and TCPI.',
      'Risk sequence, risk register and response strategies.',
      'Quality four concepts, manage versus control, and cost of quality.',
      'Integrated change control and the balanced scorecard.',
      'Validate scope, early termination and lessons learned.',
      'Agile measurement: flow, WIP, cycle time and feedback.',
    ],
    cards: [
      {
        title: 'Risk · Ch 11',
        tag: 'Must know',
        points: [
          'Plan → identify → qualitative analysis → quantitative analysis → responses → monitor.',
          'Threats are negative risks; opportunities are positive risks.',
          'The risk register records probability, impact, owner, response and status.',
          'A risk breakdown structure organises risks by category.',
          'Qualitative analysis prioritises using probability × impact; quantitative analysis models numerically.',
          'Responses: avoid, transfer, mitigate, accept; for opportunities: exploit, share, enhance, accept.',
        ],
      },
      {
        title: 'Quality · Ch 12',
        tag: 'Must know',
        points: [
          'Four core concepts: stakeholder satisfaction, process management, fact-based management and empowered performance.',
          'Manage quality improves the process; control quality checks the deliverables.',
          'Tolerance is the customer voice; control limits are the process voice.',
          'Cost of quality = conformance costs + nonconformance costs.',
          'Conformance costs are prevention and appraisal; nonconformance costs are internal and external failure.',
          'SIPOC maps Supplier, Input, Process, Output, Customer; PDCA is Plan-Do-Check-Act.',
        ],
      },
      {
        title: 'Earned value · Ch 14',
        tag: 'Must know',
        points: [
          'BAC = budget at completion; PV = planned value; EV = earned value; AC = actual cost.',
          'SV = EV − PV; CV = EV − AC. Negative means behind schedule or over budget.',
          'SPI = EV ÷ PV; CPI = EV ÷ AC. Below 1.0 is unfavourable.',
          'ETC = (BAC − EV) ÷ CPI or BAC − EV; EAC = AC + ETC.',
          'TCPI = (BAC − EV) ÷ (BAC − AC); above 1.0 means efficiency must improve.',
          'Common traps: AC in the SPI denominator, PV in the CPI denominator, or EAC = AC + EV.',
        ],
      },
      {
        title: 'Monitoring & change · Ch 14',
        points: [
          'Balanced scorecard views: financial, customer, internal process, and learning and growth.',
          'Integrated change control reviews scope, schedule, cost, quality, risk and resources together.',
          'A change to one constraint normally affects at least one other constraint.',
          'Agile measures flow, work in progress, cycle time and feedback at each iteration.',
          'Use the measurement that matches the delivery cadence — one-off, multiple releases or periodic releases.',
        ],
      },
      {
        title: 'Closing · Ch 15',
        points: [
          'Validate scope → obtain acceptance → close the project → close procurements.',
          'A punch list records outstanding items before acceptance.',
          'Early termination reasons: mutual agreement, default and convenience.',
          'The closeout report records results, acceptance and final costs.',
          'Capture lessons learned, release the team and archive the project files.',
          'Agile closure includes final increment review, retrospective and handover of backlog and archives.',
        ],
      },
    ],
    reminder: '80/20 move: memorise the EVM formulas and the risk sequence first — they appear in calculations and scenarios every paper.',
  },
  appdev: {
    heading: 'App Dev: the 80/20 cram sheet',
    intro: 'Pattern intent, SOLID and the Spring request flow cover most short questions and mock scenarios.',
    shortlist: [
      'Pattern categories: creational, structural and behavioural.',
      'Adapter vs Decorator vs Observer vs Strategy distinctions.',
      'SOLID one-liners with a concrete example each.',
      'Spring layers, mappings, validation and status codes.',
      'JPA entity, repository and relationship annotations.',
      'Security filter chain, CORS and JWT verification.',
    ],
    cards: [
      {
        title: 'Design patterns',
        tag: 'Must know',
        points: [
          'Creational: Abstract Factory, Builder, Factory Method, Singleton.',
          'Structural: Adapter, Bridge, Composite, Decorator, Flyweight.',
          'Behavioural: Command, Visitor, Interpreter, Observer, Iterator, Strategy.',
          'Factory Method delegates creation to subclasses; Abstract Factory creates families of related objects.',
          'Builder separates construction of a complex object from its representation.',
          'Singleton ensures one instance with global access.',
          'Adapter converts an interface; Composite treats objects and groups uniformly; Decorator adds behaviour by wrapping.',
          'Strategy swaps algorithms at runtime; Command encapsulates a request as an object.',
        ],
      },
      {
        title: 'SOLID',
        tag: 'Must know',
        points: [
          'SRP: one reason to change. OCP: extend without modifying.',
          'LSP: a subclass must be usable wherever its base class is expected.',
          'ISP: split large interfaces. DIP: depend on abstractions, not concrete classes.',
          'DIP also means high-level and low-level modules should both depend on abstractions.',
          'Example: inject a repository interface into a service instead of constructing a concrete repository.',
        ],
      },
      {
        title: 'Pattern traps',
        points: [
          'Adapter solves interface mismatch; Decorator adds responsibility without subclassing.',
          'Facade simplifies a subsystem; Proxy controls access to an object.',
          'Observer is one-to-many notification; Mediator centralises communication between objects.',
          'Flyweight shares fine-grained state; State changes behaviour when internal state changes.',
          'Name the category first, then the intent, then a use case.',
        ],
      },
      {
        title: 'Spring REST & JPA',
        points: [
          '@RestController plus @GetMapping/@PostMapping map HTTP requests to methods.',
          '@RequestBody maps JSON; @PathVariable and @RequestParam capture URL and query values.',
          'Use @Service for business logic and JpaRepository for data access.',
          '@Entity and @Id map a domain object to a table; @OneToMany and @ManyToOne map relationships.',
          'Validate @RequestBody with @Valid and keep DTOs at the API boundary.',
          'Return meaningful status codes: 200, 201, 400, 404.',
        ],
      },
      {
        title: 'Security',
        points: [
          '@CrossOrigin allows a listed browser origin to call the API.',
          'The filter chain authenticates before the controller runs, then authorises the request.',
          'Send JWTs in Authorization: Bearer; verify the signature and expiry on every request.',
          'JWT structure is header.payload.signature.',
          'CORS is a browser policy — it does not replace server-side authorisation.',
          'Use role checks at the controller or service boundary and never log secrets.',
        ],
      },
    ],
    reminder: '80/20 move: know the three pattern categories, five SOLID letters and the Spring filter chain before fine detail.',
  },
  ep: {
    heading: 'Exam Prep: the 80/20 cram sheet',
    intro: 'A final-hour sweep of the topics that keep paying off across all five exam papers.',
    shortlist: [
      'ADT dependability chain, reliability metrics and safety case.',
      'IS joins, subqueries, aggregates and ACID.',
      'PM EVM formulas with written working.',
      'Pattern categories, SOLID and Spring security flow.',
      'Essay structure: definition → theory → application → conclusion.',
      'Mock review: fix the missed keyword, not just the topic.',
    ],
    cards: [
      {
        title: 'ADT spine',
        tag: 'Must know',
        points: [
          'Evolution → dependability → reliability → safety → security → resilience → systems engineering.',
          'Reusable chain: fault → error → failure → control → residual risk.',
          'Safety = hazard and risk; security = assets, threats and controls; resilience = the 4 Rs.',
          'Define the term, give one property, then apply it to the scenario.',
        ],
      },
      {
        title: 'IS spine',
        tag: 'Must know',
        points: [
          'Joins and subqueries → database design → ACID and concurrency → tuning → distributed databases.',
          'SQL: joins, correlated subqueries, GROUP BY/HAVING, set operators, DML and DDL.',
          'Design: entities, keys and normalisation. Transactions: ACID, locks and isolation levels.',
          'Performance: indexes and execution plans. Distribution: transparency, 2PC and CAP.',
          'Write the SQL, then justify the join, aggregate or index choice.',
        ],
      },
      {
        title: 'PM spine',
        points: [
          'Risk → quality → earned value → closing.',
          'Risk sequence, register and response strategies.',
          'Quality four concepts, manage versus control, and cost of quality.',
          'Memorise SV, CV, SPI, CPI, ETC, EAC and TCPI before the paper.',
          'Show every EVM step; signs and interpretation earn marks even if arithmetic slips.',
        ],
      },
      {
        title: 'App Dev spine',
        points: [
          'Patterns grouped by purpose: creational, structural, behavioural.',
          'Adapter = interface mismatch; Decorator = added behaviour; Observer = notification; Strategy = interchangeable algorithm.',
          'SOLID one-liners: SRP, OCP, LSP, ISP, DIP.',
          'Spring layers: controller → service → repository, with DTOs and validation at the boundary.',
          'Security flow: filter chain authentication, authorisation, then controller; JWT verified each request.',
        ],
      },
      {
        title: 'Paper technique',
        points: [
          'Mark breakdown: 20 MC + 20 matching + 20 essay + 40 SQL.',
          'Allocate roughly one minute per mark and leave at least 40 minutes for SQL.',
          'Answer MC and matching first, then calculations, then essays.',
          'Essays: definition → theory → application → short conclusion.',
          'After each mock, log the exact missed keyword rather than only the topic name.',
        ],
      },
    ],
    reminder: '80/20 move: drill the six shortlist items above; they transfer across every subject and every paper format.',
  },
}
