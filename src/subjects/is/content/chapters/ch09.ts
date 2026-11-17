import type { Chapter } from '../types'
import { added, def, h, img, important, ol, p, table, tip, ul } from '../helpers'

export const chapter09: Chapter = {
  id: 'ch09',
  number: 9,
  title: 'Database Design',
  subtitle: 'Information systems, SDLC, DBLC and the database design process',
  description:
    'How information systems are developed, how the SDLC and DBLC organise the work, and how conceptual, logical and physical database design turn business requirements into an implemented database.',
  examWeight: 'Design theory chapter — supports Q1, Q2 and Q3 (essay)',
  sections: [
    {
      id: 'information-system',
      title: 'The Information System',
      blocks: [
        p(
          'An information system provides for data collection, storage and retrieval. It is composed of people, hardware, software, databases, application programs and procedures.',
        ),
        def(
          'Systems analysis',
          'The process that establishes the need for an information system and the extent of that system.',
        ),
        def(
          'Systems development',
          'The process of creating an information system.',
        ),
        h(3, 'Applications', 'applications'),
        p(
          'Applications transform data into information that forms the basis for decision making. They usually produce formal reports, tabulations and graphic displays. An application is composed of two parts: data and code (program instructions).',
        ),
        p('Application performance depends on three factors:'),
        ul([
          'Database design and implementation.',
          'Application design and implementation.',
          'Administrative procedures.',
        ]),
        def(
          'Database development',
          'The process of database design and implementation.',
        ),
        p('The implementation phase of database development includes:'),
        ul([
          'Creating the database storage structure.',
          'Loading data into the database.',
          'Providing for data management.',
        ]),
      ],
    },
    {
      id: 'sdlc',
      title: 'The Systems Development Life Cycle (SDLC)',
      blocks: [
        p(
          'The Systems Development Life Cycle traces the history (life cycle) of an information system. Database design and application development are mapped out and evaluated within it.',
        ),
        p('The SDLC is divided into five phases:'),
        ol(['Planning', 'Analysis', 'Detailed systems design', 'Implementation', 'Maintenance']),
        important(
          'Iterative, not sequential',
          'The SDLC is an iterative rather than a sequential process. Phases can be revisited as understanding improves.',
        ),
        h(3, 'Planning', 'sdlc-planning'),
        p('Planning gives a general overview of the company and its objectives. It includes:'),
        ul([
          'An assessment of flow-and-extent requirements: should the existing system be continued, modified or replaced?',
          'Study and evaluation of alternate solutions: technical aspects of hardware and software requirements, system cost and operational cost.',
        ]),
        h(3, 'Analysis', 'sdlc-analysis'),
        p(
          'Problems defined during planning are examined in greater detail during analysis. Analysis includes a thorough audit of user requirements, and the existing hardware and software systems are studied.',
        ),
        p('The goal is a better understanding of:'),
        ul([
          "The system's functional areas.",
          'Actual and potential problems.',
          'Opportunities.',
        ]),
        h(3, 'Detailed Systems Design', 'sdlc-detailed-design'),
        p(
          'The designer completes the design of the system processes and includes all necessary technical specifications. The steps for conversion from the old to the new system are laid out, and training principles and methodologies are planned. The design is submitted for management approval.',
        ),
        h(3, 'Implementation', 'sdlc-implementation'),
        p(
          'Hardware, DBMS software and application programs are installed, and the database design is implemented. A cycle of coding, testing and debugging continues until the database is ready for delivery. The database is created and the system is customised, including the creation of tables and views and user authorisations.',
        ),
        h(3, 'Maintenance', 'sdlc-maintenance'),
        p('There are three types of maintenance activity:'),
        ul([
          'Corrective maintenance.',
          'Adaptive maintenance.',
          'Perfective maintenance.',
        ]),
        p(
          'Computer-aided systems engineering (CASE) is used to produce better systems within a reasonable amount of time and at a reasonable cost. CASE-produced applications are structured, documented and standardised.',
        ),
      ],
    },
    {
      id: 'dblc',
      title: 'The Database Life Cycle (DBLC)',
      blocks: [
        p('The Database Life Cycle has six phases:'),
        ol([
          'Database initial study.',
          'Database design.',
          'Implementation and loading.',
          'Testing and evaluation.',
          'Operation.',
          'Maintenance and evolution.',
        ]),
        img(
          '/assets/Pasted image 20260915102432.png',
          'Diagram of the DBLC phases and their activities, including initial study, design, implementation and loading, testing and evaluation, operation, and maintenance and evolution.',
          'The Database Life Cycle from your notes',
        ),
        h(3, 'The Database Initial Study', 'dblc-initial-study'),
        p('The overall purpose of the initial study is to:'),
        ul([
          'Analyze the company situation.',
          'Define problems and constraints.',
          'Define objectives.',
          'Define scope and boundaries.',
        ]),
        p(
          'Interactive and iterative processes are required to complete this first phase successfully.',
        ),
        ul([
          'Analyze the company situation: the general conditions in which the company operates, its organisational structure and its mission. Discover what the operational components are, how they function and how they interact.',
          'Define problems and constraints: use formal and informal information sources. Finding precise answers is important, but an accurate problem definition does not always yield a solution.',
          'Database system objectives must correspond to those envisioned by end users. Ask what the proposed system’s initial objective is, whether it will interface with other systems, and whether it will share data with other systems or users.',
        ]),
        def(
          'Scope',
          'The extent of the design according to operational requirements.',
        ),
        def(
          'Boundaries',
          'The limits that are external to the system.',
        ),
        h(3, 'Database Design', 'dblc-design'),
        p(
          'Database design concentrates on the data characteristics required to build the database model. There are two views of data within the system:',
        ),
        ul([
          'The business view: data as an information source.',
          'The designer’s view: data structure, access and the activities required to transform data into information.',
        ]),
        h(3, 'Implementation and Loading', 'dblc-implementation'),
        p(
          'This phase implements all design specifications from the previous phase. It includes installing the DBMS, creating the database, and loading or converting the data.',
        ),
        def(
          'Virtualization',
          'The creation of logical representations of computing resources independent of physical resources.',
        ),
        h(3, 'Testing and Evaluation', 'dblc-testing'),
        p(
          'Testing and evaluation occurs in parallel with applications programming. Database tools are used to prototype applications. If implementation fails to meet some of the system’s evaluation criteria, the designer can fine-tune specific system and DBMS configuration parameters, modify the physical or logical design, or upgrade the software and/or hardware platform.',
        ),
        p('Integrity is enforced through proper use of primary and foreign key rules.'),
        p('Backup and recovery includes three backup levels: full backup, differential backup and transaction log backup.'),
        h(3, 'Operation', 'dblc-operation'),
        p(
          'Once the database has passed the evaluation stage it is considered operational. The beginning of the operational phase starts the process of system evolution. Problems not foreseen during testing surface. Solutions may include load-balancing software to distribute transactions among multiple computers, or increasing the available cache.',
        ),
        h(3, 'Maintenance and Evolution', 'dblc-maintenance'),
        p('Required periodic maintenance includes:'),
        ul([
          'Preventive maintenance (backup).',
          'Corrective maintenance (recovery).',
          'Adaptive maintenance.',
          'Assignment of access permissions and their maintenance for new and old users.',
          'Generation of database access statistics.',
          'Periodic security audits.',
          'Periodic system-usage summaries.',
        ]),
      ],
    },
    {
      id: 'design-process',
      title: 'The Database Design Process',
      blocks: [
        h(3, 'Conceptual Design Stage', 'conceptual-design'),
        p(
          'Data modelling creates an abstract database structure that represents real-world objects. Conceptual design embodies a clear understanding of the business and its functional areas. It ensures that all data needed are in the model, and that all data in the model are needed. It requires four steps.',
        ),
        h(4, 'Step 1: Data Analysis and Requirements', 'data-analysis'),
        p(
          'The designer discovers data element characteristics from different sources. This requires a thorough understanding of the company’s data types and their extent and uses. Business rules, derived from the description of operations, must be taken into account.',
        ),
        h(4, 'Step 2: Entity Relationship Modelling and Normalization', 'er-modelling'),
        p(
          'The designer enforces standards in design documentation: the use of diagrams and symbols, documentation writing style, layout and other conventions. Business rules must be incorporated into the conceptual model. The ER model is a communications tool as well as a design blueprint.',
        ),
        img(
          '/assets/Pasted image 20260915105054.png',
          'Table 9.3 listing the steps for developing the conceptual model using ER diagrams: identify and refine business rules, identify entities, define relationships, define attributes and keys, normalize entities, complete the initial ER diagram, validate against user requirements, and modify the ER model.',
          'Table 9.3: Developing the conceptual model using ER diagrams',
        ),
        h(4, 'Step 3: Data Model Verification', 'model-verification'),
        p(
          'The data model is verified against the proposed system processes. The original design is revised with a careful reevaluation of entities and a detailed examination of the attributes describing those entities. The design’s major components are defined as modules. A module is an information system component that handles a specific function.',
        ),
        img(
          '/assets/Pasted image 20260915105133.png',
          'Table 9.5 listing the ER model verification process: identify the central entity, identify each module and its components, identify each module’s transaction requirements, verify all processes against system requirements, make changes, and repeat for all modules.',
          'Table 9.5: The ER model verification process',
        ),
        h(4, 'Step 4: Distributed Database Design', 'distributed-design'),
        p(
          'Portions of the database may reside in different physical locations. A database fragment is a subset of a database stored at a given location. Processes accessing the database vary from one location to another. The designer must also develop data distribution and allocation strategies.',
        ),
        h(3, 'DBMS Software Selection Stage', 'dbms-selection'),
        p(
          'DBMS software selection is critical to the information system’s smooth operation. Common factors affecting purchasing decisions are:',
        ),
        ul([
          'Cost.',
          'DBMS features and tools.',
          'Underlying model.',
          'Portability.',
          'DBMS hardware requirements.',
        ]),
        h(3, 'Logical Design Stage', 'logical-design'),
        p(
          'Logical design maps the conceptual design to a specific data model. It is still independent of physical-level details. It requires all objects to be mapped to the specific constructs used by the selected database software, including the definition of attribute domains, the design of required tables, and access restriction formats. Tables must correspond to entities in the conceptual design. Logical design translates the software-independent conceptual model into a software-dependent model.',
        ),
        h(4, 'Step 1: Map the Conceptual Model to the Logical Model', 'map-conceptual'),
        p('The conceptual model is mapped to the chosen database constructs. Five mapping steps are involved:'),
        ol([
          'Strong entities.',
          'Supertype/subtype relationships.',
          'Weak entities.',
          'Binary relationships.',
          'Higher-degree relationships.',
        ]),
        h(4, 'Step 2: Validate the Logical Model Using Normalization', 'validate-normalization'),
        p(
          'Translation requires the definition of attribute domains and appropriate constraints, and all defined constraints must be supported by the logical data model. Special attention should be placed on ensuring that security is enforced; security restrictions may have to be considered at multiple locations.',
        ),
        p('Normalization check:'),
        ul([
          'Mapping may reveal new attributes or new multivalued/composite attributes, so new attributes or whole tables may be added.',
          'Every table (old and new) must have all attributes fully dependent on the primary key.',
          'Tables must be in at least 3NF.',
          'Design is iterative: each pass refines and documents the model further.',
        ]),
        h(4, 'Step 3: Validate Logical Model Integrity Constraints', 'validate-integrity'),
        ul([
          'Define attribute domains: type, range, display format, length and valid entries.',
          'Map domains to relational constraints, for example CHECK IN to restrict CLASS_DAYS to valid codes (MWF, TR, M, T, W, R, F, S).',
          'Define which attributes are mandatory and which are optional.',
          'Ensure entity integrity and referential integrity are maintained.',
          'Define access rights through views, for example CREATE VIEW VSCHEDULE AS SELECT ... FROM PROFESSOR, CLASS, COURSE WHERE (join conditions).',
          'Ensure all views can be resolved and that data privacy and security are enforced.',
        ]),
        h(4, 'Step 4: Validate the Logical Model Against User Requirements', 'validate-user'),
        p(
          'This is the final step of logical design. All logical definitions are validated against end-user data, transaction and security requirements. Logical design translates the software-independent conceptual model into a software-dependent model and sets the stage for physical design.',
        ),
        h(3, 'Physical Design Stage', 'physical-design'),
        p(
          'Physical design is the process of selecting the data storage and data access characteristics of the database. Storage characteristics are a function of the device types supported by the hardware, the type of data access methods supported by the system, and the DBMS. Physical design is more complex when data are distributed. It is the last stage of database design and determines data storage organisation and access characteristics to ensure integrity, security and performance. It is hardware- and software-dependent.',
        ),
        p('Physical design has three steps:'),
        ol([
          'Define data storage organisation.',
          'Define integrity and security measures.',
          'Determine performance measures.',
        ]),
        h(4, 'Step 1: Define Data Storage Organization', 'data-storage-organization'),
        p('The designer must determine data volume and data usage patterns. These influence:'),
        ul([
          'The location and physical storage organisation for each table.',
          'Which indexes and which type of indexes to use for each table.',
          'Which views and which type of views to use on each table.',
        ]),
        ul([
          'Data volume: for each table, identify transactions, their frequency and volume to size storage space.',
          'Usage patterns: how often data is inserted, updated and retrieved (for example weekly batch uploads or monthly reports). This is critical in distributed design.',
          'Location and physical storage organisation: tables are stored in table spaces, and a table space can hold several tables. Clustered tables store related rows of two related tables in adjacent data blocks, reducing access time.',
          'Indexes: ensure uniqueness and speed lookups. The DBMS automatically creates a unique index on each primary key.',
          'Views: limit access by user or transaction need and simplify end-user access. The designer must ensure all views can be implemented and give only the required data.',
        ]),
        h(4, 'Step 2: Define Integrity and Security Measures', 'integrity-security-measures'),
        ul([
          'Define user and security groups and roles. A database role is a set of database privileges that can be assigned as a unit to a user or group.',
          'Assign security controls: specific access rights on database objects to a user or group. Rights can also be revoked during operation to assist with backups or maintenance events.',
          'Users must be authenticated before accessing data.',
        ]),
        p(
          'Role example: an Advisor role with Read access to the VSCHEDULE view. Access right example: grant SELECT and UPDATE on the CLASS table to one user. Revoking rights is useful during backups, scheduled maintenance and data breach incidents.',
        ),
        h(4, 'Step 3: Determine Performance Measures', 'performance-measures'),
        p(
          'Performance can be affected by storage media, seek time, sector and block (page) size, buffer pool size, the number of disk platters and read/write heads, and index creation. Fine-tuning the DBMS and queries ensures that they meet end-user performance requirements. Distributed data adds complexity because communication throughput affects performance. Relational DBMSs hide most physical detail, yet physical storage properties still affect performance. Logical and physical design can run in parallel, table by table.',
        ),
      ],
    },
    {
      id: 'strategies',
      title: 'Database Design Strategies',
      blocks: [
        h(3, 'Top-Down Design', 'top-down'),
        p(
          'Top-down design identifies data sets and then defines the data elements for each of those sets. It involves the definition of the different entity types and the definition of each entity’s attributes.',
        ),
        h(3, 'Bottom-Up Design', 'bottom-up'),
        p(
          'Bottom-up design identifies data elements (items) and groups them together in data sets. Attributes come first and are then grouped into entities.',
        ),
        table(
          ['Strategy', 'Starts with', 'Best suited to'],
          [
            ['Top-down', 'Data sets, then data elements', 'Large, complex problems where the number, variety and complexity of entities, relations and transactions is overwhelming'],
            ['Bottom-up', 'Data elements, then data sets', 'Small databases with few entities and transactions'],
          ],
          'Top-down vs bottom-up',
        ),
        p(
          'Top-down is easier when the number, variety and complexity of entities, relations and transactions is overwhelming. Bottom-up suits small databases with few entities and transactions. The two approaches are complementary, not mutually exclusive. ER modelling is top-down; normalization (revising table structures) is bottom-up. The choice depends on the scope of the problem or personal preference; companies often have set standards.',
        ),
      ],
    },
    {
      id: 'centralized-decentralized',
      title: 'Centralized vs Decentralized Design',
      blocks: [
        h(3, 'Centralized Design', 'centralized-design'),
        p(
          'Centralized design is used when the data component is composed of a small number of objects and procedures. It is typical of small systems. A single DBA or a small informal team can do the whole process: define the problem, create and verify the conceptual design, and define processes and constraints. Centralized design is not limited to small companies; large companies can have simple database environments. One conceptual design is completed and then validated.',
        ),
        h(3, 'Decentralized Design', 'decentralized-design'),
        p(
          'Decentralized design is used when the data component has a large number of entities and complex relations on which complex operations are performed, and the problem is spread across several operational sites. All modules are integrated into one model.',
        ),
        p('Decentralized design needs a team:'),
        ul([
          'A lead designer sets criteria and assigns modules to design groups.',
          'The boundaries and relationships between data subsets must be defined very precisely.',
          'Each group builds a conceptual model for its module and verifies it against that module’s user views, processes and constraints.',
          'The modules are then integrated into one conceptual model; the data dictionary plays a vital role in integration.',
          'The lead designer verifies that the combined model still supports all required transactions.',
        ]),
        h(3, 'Aggregation Problems', 'aggregation-problems'),
        p('When modules are integrated, several aggregation problems must be addressed:'),
        table(
          ['Problem', 'Meaning', 'Example'],
          [
            ['Synonyms', 'Different names for the same object (entity, attribute or relationship).', 'CUSTOMER and CLIENT refer to the same entity.'],
            ['Homonyms', 'The same name used for different objects.', 'Two departments both use the attribute “ID” for different things.'],
            ['Entity and entity subtypes', 'A department may treat a subtype as a separate entity.', 'Integrate the subtype into a higher-level entity.'],
            ['Conflicting object definitions', 'Attributes recorded as different types, different domains for the same attribute, or varying constraints.', 'The same attribute is CHAR(10) in one module and NUMBER(8) in another.'],
          ],
          'Aggregation problems in decentralized design',
        ),
        p('Conflicts must be removed from the model before the modules are integrated.'),
      ],
    },
    {
      id: 'sdlc-vs-dblc',
      title: 'SDLC vs DBLC',
      blocks: [
        table(
          ['Life cycle', 'What it traces', 'Number of phases'],
          [
            ['SDLC', 'The history of an application within the information system', '5: planning, analysis, detailed systems design, implementation, maintenance'],
            ['DBLC', 'The history of the database within the information system', '6: initial study, design, implementation and loading, testing and evaluation, operation, maintenance and evolution'],
          ],
          'SDLC and DBLC compared',
        ),
        p('Both life cycles are iterative, not sequential.'),
      ],
    },
    {
      id: 'design-foundations',
      title: 'Design Foundations Added for Completeness',
      blocks: [
        added(
          'Added for completeness (approved)',
          'Your notes mention the following ideas but do not define them in full. The approved supplementary definitions below are needed to answer review questions 6, 8, 9 and 15.',
        ),
        h(3, 'The Minimal Data Rule', 'minimal-data-rule'),
        def(
          'Minimal data rule',
          'The conceptual model must contain all the data needed by the system, and no data that are not needed. Every attribute in the model must serve a purpose.',
        ),
        p(
          'The rule is important because unnecessary data add redundancy, increase storage and maintenance cost, and can lead to inconsistency. It supports normalization and keeps the model focused on the business requirements.',
        ),
        h(3, 'Business Rules', 'business-rules'),
        def(
          'Business rules',
          'Statements that describe the policies, constraints and operations of the business. They are derived from the description of operations and from interviews with users and managers.',
        ),
        p(
          'Business rules are important to a database designer because they define which entities and relationships exist, which attributes belong to each entity, what values are valid, and which constraints must be enforced. They are incorporated into the conceptual model and later translated into integrity constraints.',
        ),
        h(3, 'The Data Dictionary', 'data-dictionary'),
        def(
          'Data dictionary',
          'A central repository of metadata that describes the database objects: tables, columns, data types, lengths, constraints, relationships, views, users and access rights.',
        ),
        p('The data dictionary’s functions in database design include:'),
        ul([
          'Documenting the design consistently across modules and sites.',
          'Helping integrate modules in decentralized design by exposing synonyms, homonyms and conflicting definitions.',
          'Validating that names, data types and constraints are used consistently.',
          'Supporting the DBMS in checking access rights and resolving object names.',
        ]),
        h(3, 'The Three Backup Levels', 'backup-levels'),
        table(
          ['Backup level', 'What it contains', 'Recovery use'],
          [
            [
              'Full backup',
              'A complete copy of the database.',
              'Restores the whole database to the point of the backup.',
            ],
            [
              'Differential backup',
              'Only the changes made since the last full backup.',
              'Restore the last full backup, then the latest differential backup.',
            ],
            [
              'Transaction log backup',
              'The transaction log records since the last backup (full or log).',
              'Replay committed transactions and roll back uncommitted ones; supports point-in-time recovery.',
            ],
          ],
          'The three backup levels',
        ),
        tip(
          'Exam habit',
          'For design questions, name the life cycle, the phase and the activity. For example: “In the DBLC testing and evaluation phase, integrity is enforced through primary and foreign key rules, and backup and recovery uses full, differential and transaction-log backups.”',
        ),
      ],
    },
  ],
  summary: [
    h(2, 'Chapter 9 Summary', 'summary'),
    p(
      'Use this summary immediately before the chapter test. It focuses on the definitions, phase names and distinctions that essay questions reward.',
    ),
    h(3, 'Information systems and life cycles', 'summary-lifecycles'),
    ul([
      'An information system collects, stores and retrieves data; it is made of people, hardware, software, databases, application programs and procedures.',
      'Systems analysis establishes the need for and extent of the system; systems development creates it.',
      'SDLC has five phases: planning, analysis, detailed systems design, implementation, maintenance.',
      'DBLC has six phases: initial study, design, implementation and loading, testing and evaluation, operation, maintenance and evolution.',
      'Both life cycles are iterative, not sequential.',
    ]),
    h(3, 'SDLC phases', 'summary-sdlc'),
    ul([
      'Planning: overview, assess whether to continue/modify/replace, evaluate alternatives and costs.',
      'Analysis: audit user requirements, study existing systems, understand problems and opportunities.',
      'Detailed systems design: complete process design, technical specifications, conversion plan, training plan, management approval.',
      'Implementation: install hardware/DBMS/applications, code, test, debug, create tables/views, authorise users.',
      'Maintenance: corrective, adaptive and perfective; CASE supports structured, documented, standardised systems.',
    ]),
    h(3, 'DBLC phases', 'summary-dblc'),
    ul([
      'Initial study: analyse the company, define problems and constraints, objectives, scope and boundaries.',
      'Database design: focus on data characteristics; business view vs designer’s view.',
      'Implementation and loading: install DBMS, create database, load or convert data; virtualization.',
      'Testing and evaluation: prototype, fine-tune, modify design or upgrade; integrity via PK/FK; backup levels.',
      'Operation: system becomes operational; unforeseen problems; load balancing and cache.',
      'Maintenance and evolution: preventive, corrective and adaptive maintenance; permissions, statistics, audits.',
    ]),
    h(3, 'Design process', 'summary-design-process'),
    ul([
      'Conceptual design: data analysis and requirements, ER modelling and normalization, data model verification, distributed database design.',
      'DBMS selection factors: cost, features and tools, underlying model, portability, hardware requirements.',
      'Logical design: map conceptual model, validate with normalization, validate integrity constraints, validate against user requirements.',
      'Five mapping steps: strong entities, supertype/subtype, weak entities, binary relationships, higher-degree relationships.',
      'Physical design: define data storage organisation, define integrity and security measures, determine performance measures.',
      'Tables are in at least 3NF; all attributes fully depend on the primary key.',
    ]),
    h(3, 'Strategies and organisation', 'summary-strategies'),
    ul([
      'Top-down: data sets first, then data elements; ER modelling is top-down.',
      'Bottom-up: data elements first, then data sets; normalization is bottom-up.',
      'Centralized design: small number of objects and procedures; one design completed and validated.',
      'Decentralized design: many entities, complex relations, multiple sites; modules integrated; data dictionary is vital.',
      'Aggregation problems: synonyms, homonyms, entity/subtype conflicts, conflicting definitions.',
    ]),
    h(3, 'Added definitions', 'summary-added'),
    ul([
      'Minimal data rule: include all needed data and no unnecessary data.',
      'Business rules: policies and constraints derived from operations; they define entities, relationships, attributes and constraints.',
      'Data dictionary: metadata repository; documents and integrates the design and supports validation.',
      'Backup levels: full, differential, transaction log.',
    ]),
  ],
  keyTerms: [
    { term: 'Information system', definition: 'A system that collects, stores and retrieves data, composed of people, hardware, software, databases, applications and procedures.' },
    { term: 'Systems analysis', definition: 'The process that establishes the need for and extent of an information system.' },
    { term: 'Systems development', definition: 'The process of creating an information system.' },
    { term: 'SDLC', definition: 'Systems Development Life Cycle: five iterative phases tracing an application’s history.' },
    { term: 'DBLC', definition: 'Database Life Cycle: six iterative phases tracing a database’s history.' },
    { term: 'Conceptual design', definition: 'Abstract data modelling of real-world objects, independent of any DBMS.' },
    { term: 'Logical design', definition: 'Mapping the conceptual model to the constructs of a chosen data model, still independent of physical details.' },
    { term: 'Physical design', definition: 'Selecting storage and access characteristics; the last, hardware- and software-dependent design stage.' },
    { term: 'Minimal data rule', definition: 'The model contains all needed data and no unnecessary data.' },
    { term: 'Business rules', definition: 'Statements describing business policies and constraints that shape the database design.' },
    { term: 'Data dictionary', definition: 'A metadata repository describing database objects, constraints and access rights.' },
    { term: 'Top-down design', definition: 'Identifies data sets first, then defines their data elements.' },
    { term: 'Bottom-up design', definition: 'Identifies data elements first, then groups them into data sets.' },
    { term: 'Centralized design', definition: 'Design completed by one DBA or small team for a small number of objects and procedures.' },
    { term: 'Decentralized design', definition: 'Design split across modules and sites, then integrated into one model.' },
  ],
}
