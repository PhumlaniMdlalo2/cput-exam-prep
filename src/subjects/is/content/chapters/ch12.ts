import type { Chapter } from '../types'
import { def, h, important, note, ol, p, table, tip, ul } from '../helpers'

export const chapter12: Chapter = {
  id: 'ch12',
  number: 12,
  title: 'Distributed Database Management Systems',
  subtitle: 'Distributed processing, transparency, replication, 2PC and CAP',
  description:
    'How data and processing are spread across multiple sites: DDBMS components, transparency, fragmentation, replication, allocation, the two-phase commit protocol, the CAP theorem and the 12 commandments.',
  examWeight: 'High-value theory chapter — supports Q1, Q2 and Q3 (essay)',
  sections: [
    {
      id: 'evolution',
      title: 'Evolution of Database Management Systems',
      blocks: [
        def(
          'Distributed database management system (DDBMS)',
          'A DBMS that governs the storage and processing of logically related data over interconnected computer systems in which both data and processing functions are distributed among several sites.',
        ),
        def(
          'Centralized database management system',
          'A DBMS that requires corporate data to be stored in a single central site, with data access provided through dumb terminals.',
        ),
      ],
    },
    {
      id: 'changes',
      title: 'Changes That Affected the Nature of Systems',
      blocks: [
        ul([
          'Globalization of business operations.',
          'Market needs for an on-demand transaction style, based on web-based services.',
          'Rapid social and technological changes fueled by low-cost smart mobile devices.',
          'Data realms converging in the digital world.',
          'The advent of social media to reach new customers and markets.',
        ]),
      ],
    },
    {
      id: 'requirements',
      title: 'Database Requirements in a Dynamic Business Environment',
      blocks: [
        ul([
          'Rapid ad hoc data access: crucial in the quick-response decision-making environment.',
          'Distributed data access: needed to support geographically dispersed business units.',
        ]),
      ],
    },
    {
      id: 'factors',
      title: 'Factors That Influenced DDBMS',
      blocks: [
        ul([
          'Acceptance of the Internet as a platform for business.',
          'The mobile wireless revolution.',
          'Growth of use of “application as a service”.',
          'Focus on mobile business intelligence.',
          'Emphasis on Big Data analytics.',
        ]),
      ],
    },
    {
      id: 'centralized-problems',
      title: 'Potential Centralized DBMS Problems',
      blocks: [
        ul([
          'Performance degradation.',
          'High costs.',
          'Reliability problems.',
          'Scalability problems.',
          'Organizational rigidity.',
        ]),
        important(
          'Why distribute?',
          'These five problems are the push factors that led organizations toward distributed database systems.',
        ),
      ],
    },
    {
      id: 'advantages-disadvantages',
      title: 'Distributed DBMS Advantages and Disadvantages',
      blocks: [
        table(
          ['Advantages', 'Disadvantages'],
          [
            [
              'Data is located near the site of greatest demand; data is dispersed to match business requirements.',
              'Complexity of management and control. Applications must recognize data location and stitch together data from various sites. DBAs must coordinate activities to prevent data anomalies.',
            ],
            [
              'Faster data access; end users often work with only the nearest stored subset of the data.',
              'Technological difficulty. Data integrity, transaction management, concurrency control, security, backup, recovery and query optimization must all be addressed.',
            ],
            [
              'Faster data processing; the workload is spread by processing data at several sites.',
              'Security. The probability of security lapses increases when data is at multiple sites, and management is shared by different people.',
            ],
            [
              'Growth facilitation; new sites can be added without affecting other sites.',
              'Lack of standards. There are no standard communication protocols at the database level; vendors use incompatible techniques.',
            ],
            [
              'Improved communications; local sites are smaller and closer to customers.',
              'Increased storage and infrastructure requirements. Multiple copies of data need additional storage space.',
            ],
            [
              'Reduced operating costs; adding nodes is more cost-effective than updating a mainframe, and development is cheaper on low-cost PCs.',
              'Increased training cost. Training is generally higher than in a centralized model and can offset savings.',
            ],
            [
              'User-friendly interface; PCs and workstations have easy-to-use GUIs that simplify training and use.',
              'Costs. Distributed databases require duplicated infrastructure: physical location, environment, personnel, software and licensing.',
            ],
            [
              'Less danger of a single-point failure; when one computer fails, the workload is picked up by others and data is distributed at multiple sites.',
              '—',
            ],
            [
              'Processor independence; the user can access any available copy of the data and the request is processed by any processor at the data location.',
              '—',
            ],
          ],
          'DDBMS advantages and disadvantages',
        ),
      ],
    },
    {
      id: 'distributed-processing',
      title: 'Distributed Processing and Distributed Databases',
      blocks: [
        def(
          'Distributed processing',
          'The database’s logical processing is shared among two or more physically independent sites via a network.',
        ),
        def(
          'Distributed database',
          'A database that stores logically related data over two or more physically independent sites via a computer network.',
        ),
        def(
          'Database fragments',
          'The parts that make up a distributed database.',
        ),
      ],
    },
    {
      id: 'characteristics',
      title: 'Characteristics of Distributed Management Systems',
      blocks: [
        p('A DDBMS provides the following functions:'),
        ul([
          'Application interface',
          'Validation',
          'Transformation',
          'Query optimization',
          'Mapping',
          'I/O interface',
          'Formatting',
          'Security',
          'Backup and recovery',
          'DB administration',
          'Concurrency control',
          'Transaction management',
        ]),
      ],
    },
    {
      id: 'functions',
      title: 'Functions of a Fully Distributed DBMS',
      blocks: [
        ol([
          'Receive the request of an application or end user.',
          'Validate, analyze and decompose the request.',
          'Map the request’s logical-to-physical data components.',
          'Decompose the request into several I/O operations.',
          'Search, locate, read and validate data.',
          'Ensure database consistency, security and integrity.',
          'Validate data for conditions specified by the request.',
          'Present data in the required format.',
          'Handle all necessary functions transparently to the user.',
        ]),
      ],
    },
    {
      id: 'components',
      title: 'DDBMS Components',
      blocks: [
        ul([
          'Computer workstations or remote devices.',
          'Network hardware and software components.',
          'Communications media.',
          'Transaction processor (TP): the software component in each computer or device that requests data. Also known as the transaction manager (TM) or application processor (AP).',
          'Data processor (DP) or data manager (DM): the software component on each computer or device that stores and retrieves data located at the site.',
        ]),
        table(
          ['Component', 'Role'],
          [
            ['Transaction processor (TP)', 'Requests data; known as transaction manager or application processor.'],
            ['Data processor (DP)', 'Stores and retrieves data at the site; known as data manager.'],
          ],
          'TP and DP',
        ),
      ],
    },
    {
      id: 'spsd',
      title: 'Single-Site Processing, Single-Site Data (SPSD)',
      blocks: [
        ul([
          'Processing is done on a single host computer.',
          'Data is stored on the host computer’s local disk.',
          'Processing is restricted on the end user’s side.',
          'The DBMS is accessed by dumb terminals.',
        ]),
      ],
    },
    {
      id: 'mpsd',
      title: 'Multiple-Site Processing, Single-Site Data (MPSD)',
      blocks: [
        ul([
          'Multiple processes run on different computers sharing a single data repository.',
          'Requires a network file server running conventional applications, accessed through a LAN.',
          'Uses client/server architecture.',
        ]),
        p('Client/server architecture:'),
        ul([
          'Reduces network traffic.',
          'Distributes processing.',
          'Supports data at multiple sites.',
        ]),
      ],
    },
    {
      id: 'mpmd',
      title: 'Multiple-Site Processing, Multiple-Site Data (MPMD)',
      blocks: [
        p(
          'MPMD is a fully distributed database management system that supports multiple data processors and transaction processors at multiple sites.',
        ),
        table(
          ['Classification', 'Meaning'],
          [
            ['Homogeneous', 'Integrates multiple instances of the same DBMS over a network.'],
            ['Heterogeneous', 'Integrates different types of DBMSs over a network.'],
            ['Fully heterogeneous', 'Supports different DBMSs, each supporting a different data model running under different computer systems.'],
          ],
          'DDBMS classifications',
        ),
      ],
    },
    {
      id: 'restrictions',
      title: 'Restrictions of DDBMS',
      blocks: [
        ul([
          'Remote access is provided on a read-only basis.',
          'Restrictions on the number of remote tables that may be accessed in a single transaction.',
          'Restrictions on the number of distinct databases that may be accessed.',
          'Restrictions on the database model that may be accessed.',
        ]),
      ],
    },
    {
      id: 'transparency',
      title: 'Distributed Database Transparency Features',
      blocks: [
        p('A DDBMS provides five transparency features:'),
        table(
          ['Transparency', 'Meaning'],
          [
            ['Distribution transparency', 'Allows management of a physically dispersed database as if it were centralized.'],
            ['Transaction transparency', 'Ensures transactions maintain the distributed database’s integrity and consistency.'],
            ['Failure transparency', 'Ensures the system will operate in case of network failure.'],
            ['Performance transparency', 'Allows a DDBMS to perform as if it were a centralized database.'],
            ['Heterogeneity transparency', 'Allows different DBMSs and data models to be integrated.'],
          ],
          'The five transparency features',
        ),
      ],
    },
    {
      id: 'distribution-transparency',
      title: 'Distribution Transparency',
      blocks: [
        p(
          'Distribution transparency allows the management of a physically dispersed database as if it were centralized. Its levels are fragmentation, location and local mapping.',
        ),
        def(
          'Unique fragment',
          'Each row is unique, regardless of the fragment in which it is located.',
        ),
        p(
          'Distribution transparency is supported by a distributed data dictionary (DDD) or distributed data catalog (DDC). The DDC contains the description of the entire database as seen by the database administrator.',
        ),
        def(
          'Distributed global schema',
          'A common database schema used to translate user requests into subqueries.',
        ),
      ],
    },
    {
      id: 'transaction-transparency',
      title: 'Transaction Transparency',
      blocks: [
        p('Transaction transparency:'),
        ul([
          'Ensures database transactions will maintain the distributed database’s integrity and consistency.',
          'Ensures a transaction is completed only when all database sites involved complete their part.',
        ]),
        p('Distributed database systems require complex mechanisms to manage transactions.'),
      ],
    },
    {
      id: 'requests-transactions',
      title: 'Distributed Requests and Distributed Transactions',
      blocks: [
        table(
          ['Type', 'Definition'],
          [
            ['Remote request', 'A single SQL statement accesses data processed by a single remote database processor.'],
            ['Remote transaction', 'Accesses data at a single remote site and is composed of several requests.'],
            ['Distributed transaction', 'Requests data from several different remote sites on the network.'],
            ['Distributed request', 'A single SQL statement references data at several DP sites.'],
          ],
          'Requests and transactions in a distributed environment',
        ),
      ],
    },
    {
      id: 'distributed-concurrency',
      title: 'Distributed Concurrency Control',
      blocks: [
        p(
          'Concurrency control is especially important in a distributed database environment because multi-site, multiple-process operations are more likely to create inconsistencies and deadlocked transactions.',
        ),
        important(
          'The solution',
          'The solution to an inconsistent distributed database is the two-phase commit protocol.',
        ),
      ],
    },
    {
      id: '2pc',
      title: 'Two-Phase Commit Protocol (2PC)',
      blocks: [
        def(
          'Two-phase commit protocol (2PC)',
          'A protocol that guarantees that if a portion of a transaction operation cannot be committed, all changes made at the other sites will be undone, to maintain a consistent database state.',
        ),
        p('2PC requires that each DP’s transaction log entry be written before the database fragment is updated. It uses:'),
        ul([
          'The DO-UNDO-REDO protocol: rolls transactions back and forward with the help of the system’s transaction log entries.',
          'The write-ahead protocol: forces the log entry to be written to permanent storage before the actual operation takes place.',
        ]),
        p('2PC defines the operations between a coordinator and subordinates. Its phases are:'),
        ol(['Preparation', 'The final COMMIT']),
        note(
          'Why 2PC matters',
          '2PC is the distributed version of commit/rollback. If any site cannot commit, every site rolls back, so the distributed database stays consistent.',
        ),
      ],
    },
    {
      id: 'performance-failure',
      title: 'Performance and Failure Transparency',
      blocks: [
        p(
          'Performance transparency allows a DDBMS to perform as if it were a centralized database. Failure transparency ensures the system will operate in case of network failure.',
        ),
        p(
          'The objective of query optimization is to minimize total costs, which are a function of:',
        ),
        ul([
          'Access time (I/O) cost involved in accessing data from multiple remote sites.',
          'Communication costs associated with data transmission.',
          'CPU time cost associated with processing overhead.',
        ]),
        p('Considerations for resolving data requests in a distributed environment:'),
        ul([
          'Data distribution and data replication.',
          'Network and node availability.',
        ]),
        def(
          'Replica transparency',
          'The DDBMS’s ability to hide multiple copies of data from the user.',
        ),
        def(
          'Network latency',
          'The delay imposed by the amount of time required for a data packet to make a round trip.',
        ),
        def(
          'Network partitioning',
          'The delay imposed when nodes become suddenly unavailable due to a network failure.',
        ),
      ],
    },
    {
      id: 'design',
      title: 'Distributed Database Design',
      blocks: [
        p('Distributed database design has three components:'),
        table(
          ['Component', 'Question answered'],
          [
            ['Data fragmentation', 'How to partition the database into fragments.'],
            ['Data replication', 'Which fragments to replicate.'],
            ['Data allocation', 'Where to locate those fragments and replicas.'],
          ],
          'The three design components',
        ),
      ],
    },
    {
      id: 'fragmentation',
      title: 'Data Fragmentation',
      blocks: [
        def(
          'Data fragmentation',
          'Breaks a single object into two or more segments. The information is stored in the distributed data catalog (DDC).',
        ),
        table(
          ['Strategy', 'Meaning'],
          [
            ['Horizontal fragmentation', 'Division of a relation into subsets (fragments) of tuples (rows).'],
            ['Vertical fragmentation', 'Division of a relation into attribute (column) subsets.'],
            ['Mixed fragmentation', 'A combination of horizontal and vertical strategies.'],
          ],
          'Fragmentation strategies',
        ),
        p('Mixed fragmentation is a two-step procedure:'),
        ol([
          'Horizontal fragmentation, for example customers split by state.',
          'Vertical fragmentation inside each horizontal fragment, for example service department versus collection department attributes.',
        ]),
        p(
          'Example: 3 states × 2 departments = 6 fragments, each holding only that department’s attributes for that state’s rows.',
        ),
      ],
    },
    {
      id: 'replication',
      title: 'Data Replication',
      blocks: [
        def(
          'Data replication',
          'The storage of data copies at multiple sites served by a computer network.',
        ),
        def(
          'Mutual consistency rule',
          'All copies of data fragments must be identical.',
        ),
        p('Styles of replication:'),
        table(
          ['Style', 'Focus', 'How it works'],
          [
            [
              'Push replication',
              'Maintaining data consistency.',
              'After an update, the originating DP node sends the changes to replica nodes immediately. Keeps data consistent but lowers availability because of the latency of updating every node.',
            ],
            [
              'Pull replication',
              'Maintaining data availability and allowing temporary inconsistencies.',
              'After an update, the originating node only sends notification messages; each replica node decides when to apply the update. Updates propagate more slowly, temporary inconsistencies are possible, availability stays high.',
            ],
          ],
          'Push versus pull replication',
        ),
        p('Benefits of replication: better availability, load distribution, failure tolerance and reduced query costs.'),
        p(
          'Costs of replication: extra DDBMS processing overhead, more storage, and longer transaction times because all copies must be updated to meet the mutual consistency rule.',
        ),
        h(3, 'How the DDBMS Handles Replicated Data', 'replication-handling'),
        ul([
          'Decomposes queries into subqueries for the right fragments.',
          'READ: uses the nearest copy.',
          'WRITE: must update all copies.',
          'The TP sends requests to the selected DPs, the DPs execute and return data, and the TP assembles the responses.',
          'Replication information is stored in the DDC and used by the TP to choose which copy to access.',
        ]),
        h(3, 'Data Replication Scenarios', 'replication-scenarios'),
        table(
          ['Scenario', 'Meaning'],
          [
            ['Fully replicated database', 'Stores multiple copies of each database fragment at multiple sites. Often impractical because of the overhead it imposes.'],
            ['Partially replicated database', 'Stores multiple copies of some database fragments at multiple sites. Handled well by most DDBMSs.'],
            ['Unreplicated database', 'Stores each database fragment at a single site.'],
          ],
          'Replication scenarios',
        ),
        p('Factors in deciding whether to replicate:'),
        ul([
          'Database size: storage and transmission cost, network bandwidth.',
          'Usage frequency: frequently used data needs more frequent updates.',
          'Costs: performance, software overhead and management versus the fault-tolerance benefit.',
        ]),
        tip(
          'When replication pays off',
          'Replication is most worthwhile when remote data is used often and the database is large. It also makes lost data recoverable.',
        ),
      ],
    },
    {
      id: 'allocation',
      title: 'Data Allocation Strategies',
      blocks: [
        def(
          'Data allocation',
          'Deciding where to locate data fragments: which data goes where.',
        ),
        table(
          ['Strategy', 'Meaning'],
          [
            ['Centralized data allocation', 'The entire database is stored at one site.'],
            ['Partitioned data allocation', 'The database is divided into two or more disjointed fragments and stored at two or more sites.'],
            ['Replicated data allocation', 'Copies of one or more database fragments are stored at several sites.'],
          ],
          'Data allocation strategies',
        ),
        p('Distribution is achieved by partitioning, replication, or both. Allocation algorithms consider:'),
        ul([
          'Performance and data availability goals.',
          'Size, number of rows and relationships between entities.',
          'Types of transactions and the attributes each accesses.',
          'Disconnected operation for mobile users: loosely disconnected fragments, usually read-only data with longer replica update windows.',
        ]),
        note(
          'No perfect algorithm',
          'No optimal or universally accepted allocation algorithm exists; each vendor implements its own.',
        ),
      ],
    },
    {
      id: 'cap',
      title: 'The CAP Theorem',
      blocks: [
        p('CAP stands for:'),
        ul(['Consistency', 'Availability', 'Partition tolerance']),
        p(
          'The trade-off between consistency and availability generated a new system model in which data is basically available, soft state, eventually consistent (BASE). Data changes are not immediate but propagate slowly through the system until all replicas are consistent.',
        ),
        p(
          'The theorem was proposed by Eric Brewer (2000): a highly distributed system cannot provide all three properties at once, only two at a time.',
        ),
        table(
          ['Property', 'Meaning'],
          [
            ['Consistency', 'All nodes see the same data at the same time; replicas are updated immediately.'],
            ['Availability', 'Every request is fulfilled and none is lost.'],
            ['Partition tolerance', 'The system keeps operating even if a node fails; equivalent to failure transparency.'],
          ],
          'CAP properties',
        ),
        important(
          'Two kinds of consistency',
          'CAP consistency is not the same as transaction consistency (Chapter 10). CAP means all nodes see the same data at the same time; transaction consistency means integrity constraints are satisfied.',
        ),
        p(
          'ACID gets harder in highly distributed systems because of network latency and data contention. Some companies give up consistency and isolation for availability; for example, ticket sites let a customer restart if seats were taken rather than lock the database.',
        ),
        ul([
          'BASE: Basically Available, Soft state, Eventually consistent. NoSQL databases use BASE.',
          'NewSQL tries to give ACID transactions across a highly distributed infrastructure, for example Google Cloud Spanner.',
        ]),
      ],
    },
    {
      id: 'spectrum',
      title: 'Distributed Database Spectrum',
      blocks: [
        table(
          ['DBMS type', 'Consistency', 'Availability', 'Partition tolerance', 'Transaction model', 'Trade-off'],
          [
            ['Centralized DBMS', 'High', 'High', 'n/a', 'ACID', 'No distributed data processing.'],
            ['Relational DDBMS', 'High', 'Relaxed', 'High', 'ACID (2PC)', 'Sacrifices availability for consistency and isolation.'],
            ['NoSQL DDBMS', 'Relaxed', 'High', 'High', 'BASE', 'Sacrifices consistency for availability.'],
            ['NewSQL DDBMS', 'High', 'High', 'Relaxed', 'ACID', 'Sacrifices partition tolerance.'],
          ],
          'The distributed database spectrum',
        ),
      ],
    },
    {
      id: 'commandments',
      title: 'The 12 Commandments for Distributed Databases',
      blocks: [
        ol([
          'Local-site independence: each site acts as an autonomous DBMS with its own security, concurrency control, backup and recovery.',
          'Central-site independence: no site relies on a central site; all sites have the same capabilities.',
          'Failure independence: the system keeps running despite node failures or network expansion.',
          'Location transparency: users need not know where data is.',
          'Fragmentation transparency: users see one logical database and need not know fragment names.',
          'Replication transparency: the DDBMS picks the fragment copy to access.',
          'Distributed query processing: a query may run at several DP sites and optimization is transparent.',
          'Distributed transaction processing: a transaction may update several sites and is executed transparently.',
          'Hardware independence.',
          'Operating system independence.',
          'Network independence.',
          'Database independence: supports any vendor’s database product.',
        ]),
        important(
          'A target, not a reality',
          'No current DDBMS conforms to all 12 commandments. They are a target, formulated by C. J. Date.',
        ),
      ],
    },
  ],
  summary: [
    h(2, 'Chapter 12 Summary', 'summary'),
    p(
      'Use this summary immediately before the chapter test. It focuses on the definitions, transparency types, replication styles, 2PC and CAP that examinations ask you to distinguish.',
    ),
    h(3, 'DDBMS basics', 'summary-basics'),
    ul([
      'A DDBMS governs storage and processing of logically related data over interconnected systems, with data and processing distributed among sites.',
      'A centralized DBMS stores data at one site and is accessed through dumb terminals.',
      'Centralized problems: performance degradation, high costs, reliability, scalability, organizational rigidity.',
      'Distributed processing = logical processing shared among sites; distributed database = logically related data over sites.',
      'Components: workstations, network hardware/software, communications media, TP and DP.',
      'TP requests data (transaction manager/application processor); DP stores and retrieves data (data manager).',
    ]),
    h(3, 'Architectures', 'summary-architectures'),
    ul([
      'SPSD: one host, local data, dumb terminals.',
      'MPSD: multiple processes, one data repository, client/server over a LAN.',
      'MPMD: fully distributed; homogeneous, heterogeneous or fully heterogeneous.',
      'DDBMS restrictions: read-only remote access, limits on remote tables, databases and data models.',
    ]),
    h(3, 'Transparency', 'summary-transparency'),
    ul([
      'Five features: distribution, transaction, failure, performance and heterogeneity transparency.',
      'Distribution transparency levels: fragmentation, location, local mapping; supported by the DDD/DDC and a distributed global schema.',
      'Transaction transparency ensures integrity and that a transaction completes only when all sites complete their part.',
      'Remote request: one SQL statement, one remote processor. Remote transaction: several requests, one remote site.',
      'Distributed transaction: several remote sites. Distributed request: one SQL statement, several DP sites.',
      'Network latency = round-trip delay; network partitioning = nodes suddenly unavailable.',
    ]),
    h(3, 'Design', 'summary-design'),
    ul([
      'Three components: fragmentation, replication, allocation.',
      'Horizontal fragmentation splits rows; vertical splits columns; mixed combines both.',
      'Push replication sends changes immediately (consistency, lower availability).',
      'Pull replication sends notifications; replicas decide when to apply (availability, temporary inconsistency).',
      'Mutual consistency rule: all copies must be identical.',
      'Fully replicated is often impractical; partially replicated is handled well by most DDBMSs.',
      'Allocation: centralized, partitioned or replicated.',
    ]),
    h(3, '2PC and CAP', 'summary-2pc-cap'),
    ul([
      '2PC guarantees that if one site cannot commit, all changes are undone.',
      '2PC uses DO-UNDO-REDO and write-ahead logging; phases are preparation and final COMMIT.',
      'CAP: Consistency, Availability, Partition tolerance; a system can provide only two.',
      'CAP consistency ≠ transaction consistency.',
      'BASE = Basically Available, Soft state, Eventually consistent; used by NoSQL.',
      'NewSQL tries to provide ACID across a distributed infrastructure.',
      'The 12 commandments (C. J. Date) are a target; no DDBMS meets all of them.',
    ]),
  ],
  keyTerms: [
    { term: 'DDBMS', definition: 'A DBMS that governs storage and processing of logically related data over interconnected systems with distributed data and processing.' },
    { term: 'Centralized DBMS', definition: 'A DBMS that stores corporate data at a single central site accessed through dumb terminals.' },
    { term: 'Distributed processing', definition: 'Logical processing shared among two or more physically independent sites via a network.' },
    { term: 'Distributed database', definition: 'Logically related data stored over two or more physically independent sites via a network.' },
    { term: 'Database fragment', definition: 'A part of a distributed database.' },
    { term: 'Transaction processor (TP)', definition: 'The software component that requests data; also called transaction manager or application processor.' },
    { term: 'Data processor (DP)', definition: 'The software component that stores and retrieves data at a site; also called data manager.' },
    { term: 'SPSD', definition: 'Single-site processing, single-site data: one host, local data, dumb terminals.' },
    { term: 'MPSD', definition: 'Multiple-site processing, single-site data: multiple processes share one data repository over a LAN.' },
    { term: 'MPMD', definition: 'Multiple-site processing, multiple-site data: a fully distributed DBMS.' },
    { term: 'Homogeneous DDBMS', definition: 'Integrates multiple instances of the same DBMS over a network.' },
    { term: 'Heterogeneous DDBMS', definition: 'Integrates different types of DBMSs over a network.' },
    { term: 'Distribution transparency', definition: 'Managing a physically dispersed database as if it were centralized.' },
    { term: 'Transaction transparency', definition: 'Ensuring distributed transactions maintain integrity and consistency.' },
    { term: 'Failure transparency', definition: 'Ensuring the system operates in case of network failure.' },
    { term: 'Performance transparency', definition: 'Allowing a DDBMS to perform as if it were centralized.' },
    { term: 'Heterogeneity transparency', definition: 'Integrating different DBMSs and data models.' },
    { term: 'DDC', definition: 'Distributed data catalog: describes the entire database as seen by the DBA.' },
    { term: 'Distributed global schema', definition: 'A common schema used to translate user requests into subqueries.' },
    { term: 'Remote request', definition: 'One SQL statement accessing data on a single remote processor.' },
    { term: 'Remote transaction', definition: 'Several requests accessing data at a single remote site.' },
    { term: 'Distributed transaction', definition: 'A transaction requesting data from several remote sites.' },
    { term: 'Distributed request', definition: 'One SQL statement referencing data at several DP sites.' },
    { term: 'Two-phase commit (2PC)', definition: 'A protocol guaranteeing that if one site cannot commit, all changes at other sites are undone.' },
    { term: 'Replica transparency', definition: 'Hiding multiple copies of data from the user.' },
    { term: 'Network latency', definition: 'The delay for a data packet to make a round trip.' },
    { term: 'Network partitioning', definition: 'The delay when nodes become suddenly unavailable due to network failure.' },
    { term: 'Data fragmentation', definition: 'Breaking a single object into two or more segments.' },
    { term: 'Horizontal fragmentation', definition: 'Splitting a relation into subsets of rows.' },
    { term: 'Vertical fragmentation', definition: 'Splitting a relation into subsets of columns.' },
    { term: 'Mixed fragmentation', definition: 'A combination of horizontal and vertical fragmentation.' },
    { term: 'Data replication', definition: 'Storing data copies at multiple sites on a network.' },
    { term: 'Mutual consistency rule', definition: 'All copies of data fragments must be identical.' },
    { term: 'Push replication', definition: 'Changes are sent to replicas immediately to maintain consistency.' },
    { term: 'Pull replication', definition: 'Replicas are notified and decide when to apply changes, maintaining availability.' },
    { term: 'Data allocation', definition: 'Deciding where to locate data fragments.' },
    { term: 'CAP theorem', definition: 'A distributed system can provide only two of consistency, availability and partition tolerance.' },
    { term: 'BASE', definition: 'Basically Available, Soft state, Eventually consistent; used by NoSQL databases.' },
    { term: 'NewSQL', definition: 'Systems that provide ACID transactions across a highly distributed infrastructure.' },
  ],
}
