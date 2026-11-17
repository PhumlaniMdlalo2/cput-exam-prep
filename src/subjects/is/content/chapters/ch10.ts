import type { Chapter } from '../types'
import { added, code, def, h, important, note, ol, p, table, tip, ul } from '../helpers'

export const chapter10: Chapter = {
  id: 'ch10',
  number: 10,
  title: 'Transaction Management and Concurrency Control',
  subtitle: 'Transactions, ACID, locking, isolation and database recovery',
  description:
    'How the DBMS protects data integrity when many users work at the same time: transaction properties, the transaction log, concurrency problems, locking, timestamping, optimistic methods, isolation levels and recovery.',
  examWeight: 'High-value theory chapter — supports Q1, Q2 and Q3 (essay)',
  sections: [
    {
      id: 'transactions',
      title: 'What Is a Transaction?',
      blocks: [
        def(
          'Transaction',
          'A logical unit of work that must be either entirely completed or aborted. A successful transaction changes the database from one consistent state to another, one in which all data integrity constraints are satisfied.',
        ),
        p(
          'Most real-world database transactions are formed by two or more database requests. A database request is the equivalent of a single SQL statement in an application program or transaction.',
        ),
        p(
          'Not all transactions update the database, but SQL code represents a transaction because the database was accessed. Improper or incomplete transactions can have a devastating effect on database integrity. Some DBMSs provide means by which the user can define enforceable constraints; other integrity rules are enforced automatically by the DBMS.',
        ),
      ],
    },
    {
      id: 'properties',
      title: 'Transaction Properties',
      blocks: [
        p(
          'Transactions are described by the ACID properties plus serializability. These properties are the foundation of transaction management.',
        ),
        table(
          ['Property', 'Meaning'],
          [
            ['Atomicity', 'All operations of a transaction must be completed. If any part fails, the whole transaction is aborted.'],
            ['Consistency', 'A transaction must take the database from one consistent state to another; the permanence of the database’s consistent state.'],
            ['Isolation', 'Data used during a transaction cannot be used by a second transaction until the first is completed.'],
            ['Durability', 'Once a transaction is committed, it cannot be undone.'],
            ['Serializability', 'The concurrent execution of several transactions yields consistent results.'],
          ],
          'Transaction properties',
        ),
        important(
          'Multiuser databases',
          'Multiuser databases are subject to multiple concurrent transactions. The DBMS must coordinate them so that the result is the same as if the transactions had run one after another.',
        ),
      ],
    },
    {
      id: 'sql-transactions',
      title: 'Transaction Management with SQL',
      blocks: [
        p(
          'ANSI has defined standards that govern SQL database transactions. Transaction support is provided by two SQL statements: COMMIT and ROLLBACK.',
        ),
        p('A transaction sequence must continue until one of the following occurs:'),
        ul([
          'A COMMIT statement is reached.',
          'A ROLLBACK statement is reached.',
          'The end of the program is reached.',
          'The program is abnormally terminated.',
        ]),
        code(
          'BEGIN TRANSACTION;\n  -- SQL statements\nCOMMIT TRANSACTION;',
          'sql',
          'A simple transaction block',
        ),
        note(
          'COMMIT and ROLLBACK',
          'COMMIT permanently saves the changes made by the transaction. ROLLBACK undoes the changes. In MySQL, autocommit is on by default unless START TRANSACTION or BEGIN is used.',
        ),
      ],
    },
    {
      id: 'transaction-log',
      title: 'The Transaction Log',
      blocks: [
        p('The transaction log stores:'),
        ul([
          'A record for the beginning of the transaction.',
          'For each transaction component: the type of operation being performed (update, delete, insert), the names of the objects affected by the transaction, the “before” and “after” values for updated fields, and pointers to the previous and next transaction log entries for the same transaction.',
          'The ending (COMMIT) of the transaction.',
        ]),
        important(
          'Why the log matters',
          'The log is the basis for recovery. It allows the DBMS to redo committed work and undo uncommitted work after a failure.',
        ),
      ],
    },
    {
      id: 'concurrency',
      title: 'Concurrency Control',
      blocks: [
        def(
          'Concurrency control',
          'The coordination of simultaneous transaction execution in a multiprocessing database. Its objective is to ensure serializability of transactions in a multiuser environment.',
        ),
        p('There are three main concurrency problems:'),
        h(3, 'Lost Updates', 'lost-updates'),
        p(
          'Two concurrent transactions update the same data element, and one of the updates is lost because it is overwritten by the other transaction.',
        ),
        h(3, 'Uncommitted Data', 'uncommitted-data'),
        p(
          'Two transactions are executed concurrently. The first transaction is rolled back after the second transaction has already accessed the uncommitted data.',
        ),
        h(3, 'Inconsistent Retrievals', 'inconsistent-retrievals'),
        p(
          'The first transaction accesses data, the second transaction alters the data, and the first transaction accesses the data again. The transaction might read some data before they are changed and other data after they are changed, yielding inconsistent results.',
        ),
        table(
          ['Problem', 'What goes wrong'],
          [
            ['Lost update', 'Two transactions update the same item; one update overwrites the other.'],
            ['Uncommitted data', 'A transaction reads data written by another transaction that is later rolled back.'],
            ['Inconsistent retrieval', 'A transaction reads the same data twice and gets different values because another transaction changed it in between.'],
          ],
          'The three concurrency problems',
        ),
      ],
    },
    {
      id: 'scheduler',
      title: 'The Scheduler',
      blocks: [
        p(
          'The scheduler is a special DBMS program whose purpose is to establish the order of operations within which concurrent transactions are executed. It interleaves the execution of database operations to ensure serializability and isolation.',
        ),
        def(
          'Serializable schedule',
          'An interleaved execution of transactions that yields the same results as a serial execution of those transactions.',
        ),
      ],
    },
    {
      id: 'locking',
      title: 'Concurrency Control with Locking Methods',
      blocks: [
        def(
          'Lock',
          'A guarantee of exclusive use of a data item to the current transaction. A lock is required to prevent another transaction from reading inconsistent data.',
        ),
        def(
          'Pessimistic locking',
          'The use of locks based on the assumption that conflict between transactions is likely.',
        ),
        def(
          'Lock manager',
          'The DBMS component responsible for assigning and policing the locks used by transactions.',
        ),
        h(3, 'Lock Granularity', 'lock-granularity'),
        p('Lock granularity indicates the level of lock use. Locking can take place at the following levels:'),
        table(
          ['Level', 'What is locked', 'Concurrency'],
          [
            ['Database-level', 'The entire database.', 'Lowest concurrency; simplest.'],
            ['Table-level', 'The entire table.', 'Low concurrency.'],
            ['Page-level', 'An entire disk page.', 'Moderate concurrency.'],
            ['Row-level', 'A single row; different transactions can access different rows of the same table, even on the same page.', 'High concurrency.'],
            ['Field-level', 'A single field (attribute); different transactions can access the same row using different fields.', 'Highest concurrency; most overhead.'],
          ],
          'Levels of lock granularity',
        ),
        h(3, 'Lock Types', 'lock-types'),
        ul([
          'Binary lock: two states, locked (1) or unlocked (0).',
          'Exclusive lock: access is specifically reserved for the transaction that locked the object. It must be used when the potential for conflict exists.',
          'Shared lock: concurrent transactions are granted read access on the basis of a common lock.',
        ]),
        p(
          'A shared lock is used when a transaction only reads data and no other transaction is updating it. Several shared (read) locks can exist on one item. An exclusive lock is issued when a transaction updates (writes) data and no other locks (shared or exclusive) are held on it.',
        ),
        h(3, 'Two-Phase Locking (2PL)', 'two-phase-locking'),
        p('Two-phase locking guarantees serializability of schedules. It has two phases:'),
        ol([
          'Growing phase: the transaction acquires all the locks it needs without releasing any.',
          'Shrinking phase: the transaction releases all locks without acquiring new ones.',
        ]),
        important(
          '2PL and deadlocks',
          'Two-phase locking guarantees serializability but does not prevent deadlocks.',
        ),
      ],
    },
    {
      id: 'deadlocks',
      title: 'Deadlocks',
      blocks: [
        def(
          'Deadlock',
          'Also called a deadly embrace: two or more transactions wait indefinitely for each other to release a lock.',
        ),
        p(
          'There are three control techniques: prevention, detection and avoidance. Deadlocks are still possible at the Serializable isolation level; most DBMSs detect them and reschedule one of the transactions.',
        ),
        added(
          'Added for completeness (approved)',
          'Your notes name the three deadlock techniques but do not explain them. The approved detail below is needed for review question 13.',
        ),
        table(
          ['Technique', 'How it works', 'Trade-off'],
          [
            [
              'Prevention',
              'Stop deadlocks before they can occur. Conservative two-phase locking acquires all locks before the transaction starts. Another approach is to impose a global ordering on locks so that transactions always request them in the same order.',
              'Very restrictive; reduces concurrency and can waste locks.',
            ],
            [
              'Detection',
              'Allow deadlocks to happen, then find them. The DBMS can build a wait-for graph and look for a cycle, or use a timeout. A victim transaction is aborted and rescheduled.',
              'Requires overhead; aborted work is lost.',
            ],
            [
              'Avoidance',
              'Use timestamps to decide whether a transaction should wait or be rolled back, so a cycle cannot form. Wait/die and wound/wait are the two schemes.',
              'More rollbacks, but no deadlock.',
            ],
          ],
          'Deadlock prevention, detection and avoidance',
        ),
      ],
    },
    {
      id: 'timestamping',
      title: 'Time Stamping Methods',
      blocks: [
        p(
          'Time stamping assigns a unique time stamp to each transaction. Conflicting transactions are executed in time stamp order. Two schemes decide which transaction is rolled back and which continues:',
        ),
        table(
          ['Scheme', 'Older transaction requests a lock held by a younger transaction', 'Younger transaction requests a lock held by an older transaction'],
          [
            ['Wait/die', 'The older transaction waits for the younger one.', 'The younger transaction dies (is rolled back and rescheduled).'],
            ['Wound/wait', 'The older transaction wounds the younger one (rolls it back).', 'The younger transaction waits for the older one.'],
          ],
          'Wait/die and wound/wait',
        ),
        added(
          'Added for completeness (approved)',
          'Your notes describe the two schemes but do not list the disadvantages of timestamping. The approved points below are needed for review question 14.',
        ),
        ul([
          'Timestamp maintenance adds overhead to every transaction.',
          'Conflicts cause rollbacks and rescheduling, so useful work can be lost.',
          'Repeated rollbacks can starve a transaction or reduce throughput under heavy conflict.',
          'The DBMS must store and compare timestamps for every transaction and data item.',
          'Conflict resolution is more complex than simple locking.',
        ]),
      ],
    },
    {
      id: 'optimistic',
      title: 'Optimistic Methods',
      blocks: [
        p(
          'Optimistic methods assume that most transactions do not conflict. Transactions run concurrently on private copies of the data. There are three phases:',
        ),
        ol([
          'Read: read the database, compute, and write updates to a private copy (temporary update file).',
          'Validation: check that the changes will not break integrity and consistency. If validation fails, restart the transaction and discard the changes.',
          'Write: permanently apply the changes to the database.',
        ]),
        p('Optimistic methods are suited to mostly read/query systems with few update transactions.'),
        added(
          'Added for completeness (approved)',
          'Your notes do not explain why optimistic methods can take a long time. The approved explanation below is needed for review question 15.',
        ),
        p(
          'If conflicts are frequent, validation fails often and transactions must be restarted from the beginning. Each restart repeats the read and compute work, and a long transaction has a greater chance of conflicting with others. The result can be repeated wasted work and long completion times, even though no locks are held.',
        ),
      ],
    },
    {
      id: 'isolation',
      title: 'ANSI Levels of Transaction Isolation',
      blocks: [
        def(
          'Isolation level',
          'The degree to which a transaction’s data is protected from concurrent transactions.',
        ),
        p('There are three read phenomena to understand:'),
        table(
          ['Read type', 'Meaning'],
          [
            ['Dirty read', 'Reads data that has not yet been committed.'],
            ['Nonrepeatable read', 'The same row is read twice and gives different results because the row was updated or deleted in between.'],
            ['Phantom read', 'The same query is run twice and returns additional rows.'],
          ],
          'Read phenomena',
        ),
        p('The four ANSI isolation levels, from least to most restrictive, are:'),
        table(
          ['Level', 'Dirty read', 'Nonrepeatable read', 'Phantom read'],
          [
            ['Read Uncommitted', 'Yes', 'Yes', 'Yes'],
            ['Read Committed', 'No', 'Yes', 'Yes'],
            ['Repeatable Read', 'No', 'No', 'Yes'],
            ['Serializable', 'No', 'No', 'No'],
          ],
          'ANSI isolation levels',
        ),
        ul([
          'Read Uncommitted: no locks; fastest but least consistent.',
          'Read Committed: the default for most DBMSs (Oracle, SQL Server); uses exclusive locks so others wait until commit.',
          'Repeatable Read: uses shared locks so rows read cannot be updated by others.',
          'Serializable: the most restrictive level.',
        ]),
        important(
          'The trade-off',
          'Higher isolation means more locks, better consistency and lower concurrency. Lower isolation means fewer locks, higher concurrency and a greater risk of inconsistent reads.',
        ),
        p(
          'Oracle and SQL Server also offer Read Only / Snapshot, which sees only data committed when the transaction started. Isolation is set in the transaction statement:',
        ),
        code(
          'BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;\n  -- SQL statements\nCOMMIT TRANSACTION;',
          'sql',
          'Setting the isolation level',
        ),
        ul([
          'Oracle and SQL Server use SET TRANSACTION ISOLATION LEVEL.',
          'MySQL uses START TRANSACTION WITH CONSISTENT SNAPSHOT.',
        ]),
      ],
    },
    {
      id: 'recovery',
      title: 'Database Recovery Management',
      blocks: [
        p(
          'Database recovery restores a database from an inconsistent state to a previous consistent state. It is based on the atomic transaction property: if a transaction cannot complete, it is aborted and all its changes are rolled back.',
        ),
        p('Critical events that trigger recovery:'),
        ul([
          'Hardware or software failures.',
          'Human-caused incidents, unintentional or intentional (for example hackers or viruses).',
          'Natural disasters (fire, flood, earthquake, power failure).',
        ]),
        h(3, 'Concepts Affecting Recovery', 'recovery-concepts'),
        table(
          ['Concept', 'Meaning'],
          [
            ['Write-ahead-log protocol', 'The transaction log is written before the database is updated.'],
            ['Redundant transaction logs', 'Multiple copies of the log so that a disk failure does not prevent recovery.'],
            ['Database buffers', 'Temporary memory areas that speed up disk operations. Updates go to the buffer first, and updated buffers are written to disk in one operation.'],
            ['Checkpoint', 'The DBMS writes all updated (dirty) buffers to disk, pausing other requests, and records the checkpoint in the transaction log. This syncs the physical database with the log.'],
          ],
          'Recovery concepts',
        ),
        p(
          'Checkpoints can run automatically and periodically, or explicitly/implicitly (for example during a backup). Too frequent checkpoints hurt transaction performance; too infrequent checkpoints hurt recovery performance.',
        ),
        h(3, 'Deferred-Write (Deferred Update)', 'deferred-write'),
        p(
          'In deferred-write, operations update only the transaction log. The database is updated only from committed transactions. Aborted transactions need no undo because the database was never changed.',
        ),
        p('Recovery steps:'),
        ol([
          'Find the last checkpoint in the log.',
          'Transactions committed before the checkpoint: nothing to do.',
          'Transactions committed after the checkpoint: redo using “after” values, oldest to newest.',
          'Transactions rolled back or still active at failure: nothing to do.',
        ]),
        h(3, 'Write-Through (Immediate Update)', 'write-through'),
        p(
          'In write-through, the database is updated during execution, before the commit point. Aborted transactions need ROLLBACK/undo using “before” values.',
        ),
        p('Recovery steps:'),
        ol([
          'Find the last checkpoint in the log.',
          'Transactions committed before the checkpoint: nothing to do.',
          'Transactions committed after the checkpoint: redo using “after” values, oldest to newest.',
          'Transactions rolled back or still active at failure: undo using “before” values, newest to oldest.',
        ]),
        p(
          'Trace example: for a committed transaction, find its COMMIT entry, follow the previous pointers back to START, then follow the next pointers forward to reapply each statement.',
        ),
      ],
    },
    {
      id: 'log-template',
      title: 'Transaction Log Template Added for Completeness',
      blocks: [
        added(
          'Added for completeness (approved)',
          'Your notes list what the transaction log stores but do not show a log table. The approved template below is needed for problems that ask you to write a transaction log.',
        ),
        table(
          ['Log record', 'TRX_ID', 'Operation', 'Object', 'Before value', 'After value', 'Previous pointer', 'Next pointer'],
          [
            ['1', 'T1', 'START', '—', '—', '—', '—', '2'],
            ['2', 'T1', 'UPDATE', 'PRODUCT.PROD_QOH', '1205', '1204', '1', '3'],
            ['3', 'T1', 'UPDATE', 'PART.PART_QOH (A)', '567', '566', '2', '4'],
            ['4', 'T1', 'UPDATE', 'PART.PART_QOH (B)', '98', '97', '3', '5'],
            ['5', 'T1', 'UPDATE', 'PART.PART_QOH (C)', '549', '548', '4', '6'],
            ['6', 'T1', 'COMMIT', '—', '—', '—', '5', '—'],
          ],
          'Sample transaction log for one transaction',
        ),
        tip(
          'Exam habit',
          'When asked to trace recovery, first identify the last checkpoint. Redo committed transactions after the checkpoint using after values, oldest to newest. In write-through, undo uncommitted transactions using before values, newest to oldest. In deferred-write, uncommitted transactions need no undo.',
        ),
      ],
    },
  ],
  summary: [
    h(2, 'Chapter 10 Summary', 'summary'),
    p(
      'Use this summary immediately before the chapter test. It focuses on the properties, problems, locking rules, isolation levels and recovery steps that examinations ask you to distinguish.',
    ),
    h(3, 'Transactions and properties', 'summary-properties'),
    ul([
      'A transaction is a logical unit of work that is entirely completed or aborted.',
      'A consistent state satisfies all integrity constraints.',
      'ACID: Atomicity, Consistency, Isolation, Durability. Serializability is the additional concurrency property.',
      'COMMIT saves; ROLLBACK undoes. A transaction ends at COMMIT, ROLLBACK, end of program or abnormal termination.',
      'The transaction log stores the start, each operation with before/after values and object names, pointers, and the COMMIT.',
    ]),
    h(3, 'Concurrency problems and the scheduler', 'summary-concurrency'),
    ul([
      'Lost update: two transactions update the same item and one update is overwritten.',
      'Uncommitted data: a transaction reads data that is later rolled back.',
      'Inconsistent retrieval: a transaction reads the same data twice and gets different values.',
      'The scheduler orders and interleaves operations to ensure serializability and isolation.',
      'A serializable schedule gives the same result as serial execution.',
    ]),
    h(3, 'Locking', 'summary-locking'),
    ul([
      'Granularity levels: database, table, page, row, field.',
      'Binary locks have two states; shared locks allow multiple readers; exclusive locks reserve the item for one writer.',
      'Pessimistic locking assumes conflict is likely.',
      '2PL: growing phase acquires all locks; shrinking phase releases them; it guarantees serializability but not freedom from deadlock.',
      'Deadlock control: prevention, detection, avoidance.',
    ]),
    h(3, 'Timestamping and optimistic methods', 'summary-timestamp-optimistic'),
    ul([
      'Timestamping orders conflicting transactions by unique timestamps.',
      'Wait/die: older waits, younger dies. Wound/wait: older wounds younger, younger waits.',
      'Timestamp disadvantages: overhead, rollbacks, starvation, storage, complexity.',
      'Optimistic methods use private copies: read, validate, write.',
      'Frequent conflicts cause repeated restarts and long completion times.',
    ]),
    h(3, 'Isolation levels', 'summary-isolation'),
    ul([
      'Read Uncommitted allows dirty, nonrepeatable and phantom reads.',
      'Read Committed prevents dirty reads only.',
      'Repeatable Read prevents dirty and nonrepeatable reads, but allows phantom reads.',
      'Serializable prevents all three.',
      'Higher isolation = more locking = better consistency but lower concurrency.',
    ]),
    h(3, 'Recovery', 'summary-recovery'),
    ul([
      'Recovery restores a consistent state; it is based on atomicity.',
      'Triggers: hardware/software failure, human incidents, natural disasters.',
      'Write-ahead logging writes the log before the database.',
      'Checkpoints flush dirty buffers and record the checkpoint in the log.',
      'Deferred-write: update the log first, database only from committed transactions; no undo needed.',
      'Write-through: database updated before commit; undo uncommitted using before values.',
      'Recovery: redo committed after checkpoint (oldest to newest); undo uncommitted (newest to oldest) in write-through.',
    ]),
  ],
  keyTerms: [
    { term: 'Transaction', definition: 'A logical unit of work that must be entirely completed or aborted.' },
    { term: 'Consistent state', definition: 'A database state in which all data integrity constraints are satisfied.' },
    { term: 'Atomicity', definition: 'All operations of a transaction must be completed.' },
    { term: 'Consistency', definition: 'A transaction moves the database from one consistent state to another.' },
    { term: 'Isolation', definition: 'Data used by one transaction cannot be used by another until the first completes.' },
    { term: 'Durability', definition: 'Once committed, a transaction cannot be undone.' },
    { term: 'Serializability', definition: 'Concurrent execution of transactions yields consistent results.' },
    { term: 'Transaction log', definition: 'A record of transaction operations, before/after values, pointers and commit.' },
    { term: 'Lost update', definition: 'Two transactions update the same item and one update overwrites the other.' },
    { term: 'Uncommitted data', definition: 'A transaction reads data written by a transaction that is later rolled back.' },
    { term: 'Inconsistent retrieval', definition: 'A transaction reads the same data twice and gets different values.' },
    { term: 'Scheduler', definition: 'The DBMS program that orders and interleaves concurrent operations.' },
    { term: 'Lock', definition: 'A guarantee of exclusive use of a data item by the current transaction.' },
    { term: 'Lock granularity', definition: 'The level at which a lock is applied: database, table, page, row or field.' },
    { term: 'Two-phase locking', definition: 'A protocol with a growing phase (acquire locks) and a shrinking phase (release locks).' },
    { term: 'Deadlock', definition: 'Two or more transactions wait indefinitely for each other to release a lock.' },
    { term: 'Timestamping', definition: 'Assigning a unique timestamp to each transaction and executing conflicts in timestamp order.' },
    { term: 'Optimistic method', definition: 'A concurrency method using private copies and read/validate/write phases.' },
    { term: 'Isolation level', definition: 'The degree to which a transaction is protected from concurrent transactions.' },
    { term: 'Dirty read', definition: 'Reading data that has not yet been committed.' },
    { term: 'Phantom read', definition: 'Re-running a query returns additional rows.' },
    { term: 'Checkpoint', definition: 'A point at which dirty buffers are flushed to disk and recorded in the log.' },
    { term: 'Deferred-write', definition: 'A recovery technique that updates the log first and the database only from committed transactions.' },
    { term: 'Write-through', definition: 'A recovery technique that updates the database during execution and undoes uncommitted changes.' },
  ],
}
