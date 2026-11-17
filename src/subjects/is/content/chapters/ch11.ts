import type { Chapter } from '../types'
import { code, def, h, important, note, ol, p, table, tip, ul } from '../helpers'

export const chapter11: Chapter = {
  id: 'ch11',
  number: 11,
  title: 'Database Performance Tuning and Query Optimization',
  subtitle: 'Client/server tuning, query processing, indexes and optimizers',
  description:
    'How database performance is measured and improved: client-side SQL tuning, server-side DBMS tuning, query processing phases, indexes, optimizer choices, hints and access plans.',
  examWeight: 'High-value theory chapter — supports Q1, Q2 and Q3 (essay)',
  sections: [
    {
      id: 'performance-concepts',
      title: 'Database Performance-Tuning Concepts',
      blocks: [
        p('The goal of database performance is to execute queries as fast as possible.'),
        def(
          'Database performance tuning',
          'A set of activities and procedures designed to reduce the response time of the database system.',
        ),
        p(
          'All factors must operate at an optimum level with minimal bottlenecks. Good database performance starts with good database design.',
        ),
      ],
    },
    {
      id: 'client-server',
      title: 'Performance Tuning: Client and Server',
      blocks: [
        table(
          ['Side', 'Goal', 'Name'],
          [
            [
              'Client side',
              'Generate a SQL query that returns the correct answer in the least amount of time, using the minimum amount of resources at the server.',
              'SQL performance tuning',
            ],
            [
              'Server side',
              'Configure the DBMS environment to respond to clients’ requests as fast as possible, with optimum use of existing resources.',
              'DBMS performance tuning',
            ],
          ],
          'Client-side versus server-side tuning',
        ),
      ],
    },
    {
      id: 'architecture',
      title: 'DBMS Architecture',
      blocks: [
        p('All data in a database is stored in data files.'),
        ul([
          'Data files automatically expand in predefined increments known as extents.',
          'Data files are grouped in file groups or table spaces.',
        ]),
        def(
          'Table space (file group)',
          'A logical grouping of several data files that store data with similar characteristics.',
        ),
        def(
          'Data cache (buffer cache)',
          'A shared, reserved memory area that stores the most recently accessed data blocks in RAM.',
        ),
        def(
          'SQL cache (procedure cache)',
          'A shared, reserved memory area that stores the most recently executed SQL statements, including PL/SQL procedures, triggers and functions.',
        ),
        p(
          'The DBMS retrieves data from permanent storage and places it in RAM. An input/output (I/O) request is a low-level data access operation to or from computer devices. The data cache is faster than data in data files because the DBMS does not wait for the hard disk to retrieve the data.',
        ),
        important(
          'Where tuning effort goes',
          'The majority of performance-tuning activities focus on minimizing I/O operations.',
        ),
        p('Typical DBMS processes include:'),
        ul(['Listener', 'User', 'Scheduler', 'Lock manager', 'Optimizer']),
      ],
    },
    {
      id: 'optimization-modes',
      title: 'Database Query Optimization Modes',
      blocks: [
        table(
          ['Mode', 'Meaning'],
          [
            ['Automatic query optimization', 'The DBMS finds the most cost-effective access path without user intervention.'],
            ['Manual query optimization', 'The optimization must be selected and scheduled by the end user or programmer.'],
            ['Static query optimization', 'Takes place at compilation time.'],
            ['Dynamic query optimization', 'Takes place at execution time.'],
          ],
          'Query optimization modes',
        ),
        p('There are two broad families of optimization algorithms:'),
        table(
          ['Algorithm family', 'Basis'],
          [
            ['Statistically based', 'Uses statistical information about the database. Statistics can be generated dynamically or manually.'],
            ['Rule-based', 'Based on a set of user-defined rules that determine the best query access strategy.'],
          ],
          'Optimization algorithm families',
        ),
      ],
    },
    {
      id: 'statistics',
      title: 'Database Statistics',
      blocks: [
        p('Database statistics are measurements about database objects and available resources, for example:'),
        ul([
          'Tables',
          'Indexes',
          'Number of processors used',
          'Processor speed',
          'Temporary space available',
        ]),
        p(
          'Statistics are used to make critical decisions about improving query processing efficiency. They can be gathered manually by the DBA or automatically by the DBMS.',
        ),
      ],
    },
    {
      id: 'query-processing',
      title: 'Query Processing',
      blocks: [
        p('The DBMS processes queries in three phases:'),
        ol([
          'Parsing: the DBMS parses the query and chooses the most efficient access/execution plan.',
          'Execution: the DBMS executes the query using the chosen execution plan.',
          'Fetching: the DBMS fetches the data and sends the result back to the client.',
        ]),
      ],
    },
    {
      id: 'parsing',
      title: 'The SQL Parsing Phase',
      blocks: [
        p('Parsing breaks the query into smaller units and transforms the original SQL query into a slightly different version of the original SQL code that is:'),
        ul([
          'Fully equivalent: optimized query results are always the same as the original query.',
          'More efficient: the optimized query will almost always execute faster than the original query.',
        ]),
        p('The query optimizer analyzes the SQL query and finds the most efficient way to access the data. The query is:'),
        ol([
          'Validated for syntax compliance.',
          'Validated against the data dictionary: table and column names are correct and the user has proper access rights.',
          'Analyzed and decomposed into components.',
          'Optimized.',
          'Prepared for execution.',
        ]),
        p(
          'Access plans are DBMS-specific. They translate the client’s SQL query into a series of complex I/O operations required to read the data from the physical data files and generate the result set.',
        ),
        p(
          'The DBMS checks whether an access plan already exists for the query in the SQL cache. If so, it reuses the access plan to save time. If not, the optimizer evaluates various plans and places the chosen plan in the SQL cache.',
        ),
      ],
    },
    {
      id: 'execution-fetching',
      title: 'SQL Execution and Fetching Phases',
      blocks: [
        p('During execution, all I/O operations indicated in the access plan are executed:'),
        ul([
          'Locks are acquired.',
          'Data is retrieved and placed in the data cache.',
          'Transaction management commands are processed.',
        ]),
        p(
          'During fetching, the rows of the resulting query result set are returned to the client. The DBMS may use temporary table space to store temporary data.',
        ),
      ],
    },
    {
      id: 'bottlenecks',
      title: 'Query Processing Bottlenecks',
      blocks: [
        def(
          'Bottleneck',
          'A delay introduced in the processing of an I/O operation that slows the system.',
        ),
        p('Bottlenecks can occur at the:'),
        ul(['CPU', 'RAM', 'Hard disk', 'Network', 'Application code']),
      ],
    },
    {
      id: 'indexes',
      title: 'Indexes and Query Optimization',
      blocks: [
        def(
          'Index',
          'An ordered set of values that contains an index key and pointers. Indexes are crucial in speeding up data access.',
        ),
        p(
          'Indexes facilitate searching, sorting, and using aggregate functions as well as join operations. It is more efficient to use an index to access a table than to scan all rows in the table sequentially.',
        ),
        def(
          'Data sparsity',
          'The number of different values a column could possibly have.',
        ),
        p('Indexes are implemented using:'),
        ul(['Hash indexes', 'B-tree indexes', 'Bitmap indexes']),
        p('DBMSs determine the best type of index to use.'),
      ],
    },
    {
      id: 'optimizer-choices',
      title: 'Optimizer Choices',
      blocks: [
        table(
          ['Optimizer', 'How it works'],
          [
            ['Rule-based optimizer', 'Uses preset rules and points. The rules assign a fixed cost to each operation.'],
            ['Cost-based optimizer', 'Uses algorithms based on statistics about the objects being accessed. It adds up processing cost, I/O costs and resource costs to derive the total cost.'],
          ],
          'Rule-based versus cost-based optimizers',
        ),
        p('The cost-based optimizer total cost is:'),
        code(
          'Total cost = processing cost + I/O cost + resource cost (RAM and temporary space)',
          'text',
          'Cost-based optimizer formula',
        ),
        p(
          'During optimization the DBMS decides which indexes to use, how to perform joins, and which table to use first. Each DBMS has its own algorithms.',
        ),
      ],
    },
    {
      id: 'hints',
      title: 'Using Hints to Affect Optimizer Choices',
      blocks: [
        p(
          'The optimizer might not choose the best plan because it makes decisions based on existing statistics, and statistics may be old, leading to less-efficient decisions.',
        ),
        def(
          'Optimizer hints',
          'Special instructions for the optimizer embedded in the SQL command text.',
        ),
        note(
          'Hints are not magic',
          'A hint only influences the optimizer. The optimizer may ignore a hint if it would produce an invalid plan.',
        ),
      ],
    },
    {
      id: 'sql-tuning',
      title: 'SQL Performance Tuning',
      blocks: [
        p('SQL performance tuning is evaluated from the client perspective:'),
        ul([
          'Most current relational DBMSs perform automatic query optimization at the server end.',
          'Most SQL performance optimization techniques are DBMS-specific and rarely portable.',
          'The majority of performance problems are related to poorly written SQL code.',
          'A carefully written query usually outperforms a poorly written query.',
        ]),
      ],
    },
    {
      id: 'index-selectivity',
      title: 'Index Selectivity',
      blocks: [
        def(
          'Index selectivity',
          'A measure of how likely an index will be used.',
        ),
        p('Indexes are used when:'),
        ul([
          'The indexed column appears by itself in the search criteria of a WHERE or HAVING clause.',
          'The indexed column appears by itself in a GROUP BY or ORDER BY clause.',
          'The MAX or MIN function is applied to the indexed column.',
          'Data sparsity on the indexed column is high.',
        ]),
        p('General guidelines for indexes:'),
        ul([
          'Create indexes for each attribute in a WHERE, HAVING, ORDER BY or GROUP BY clause.',
          'Do not use indexes in small tables or tables with low sparsity.',
          'Declare primary and foreign keys so the optimizer can use indexes in join operations.',
          'Declare indexes on join columns other than PK/FK.',
        ]),
        h(3, 'Indexes in Access Plans', 'indexes-access-plans'),
        p(
          'An access plan shows how the optimizer will run a query and its estimated cost. Compare plans before and after creating an index. Common findings:',
        ),
        ul([
          'An index helps when the ORDER BY column is indexed: the optimizer scans the index and reaches rows by row ID, one of the fastest access methods. Example: query cost cut by about 30%.',
          'An index may not help when the table is small, when the query accesses a large percentage of the table’s rows anyway, or when the way the query is written stops the index being used.',
          'A function on an indexed column, for example UPPER(V_NAME), adds extra operations and can raise cost. Avoid wrapping indexed columns in functions.',
          'MAX/MIN on an indexed column can be answered from the index alone, so the table is never accessed. Example: cost cut by two-thirds.',
        ]),
        tip(
          'The tuning goal',
          'Indexes are recommended on high-sparsity columns used in search conditions and are best for selecting a small subset of rows from a large table. The goal is to optimize overall database performance for all requests, not a single query.',
        ),
        p(
          'Oracle, MySQL and SQL Server all provide graphical tools to view and test access plans. The EXPLAIN PLAN statement is commonly used to display the access plan.',
        ),
      ],
    },
    {
      id: 'conditional-expressions',
      title: 'Conditional Expressions',
      blocks: [
        p(
          'Conditional expressions are normally expressed within the WHERE or HAVING clauses of an SQL statement. They restrict the output of a query to only rows matching the conditional criteria.',
        ),
        p('Common practices for efficient SQL:'),
        ul([
          'Use simple columns or literals in conditionals.',
          'Numeric field comparisons are faster.',
          'Equality comparisons are faster than inequality comparisons.',
          'Transform conditional expressions to use literals.',
          'Write equality conditions first.',
          'For AND, use the condition most likely to be false first.',
          'For OR, use the condition most likely to be true first.',
          'Avoid NOT.',
        ]),
        table(
          ['Practice', 'Reason'],
          [
            ['Simple columns or literals', 'Functions and expressions on columns force extra processing per row.'],
            ['Numeric comparisons', 'Numbers compare faster than strings.'],
            ['Equality before inequality', 'Equality can use an index more directly.'],
            ['AND: false first', 'If the first condition is false, the rest need not be evaluated.'],
            ['OR: true first', 'If the first condition is true, the rest need not be evaluated.'],
            ['Avoid NOT', 'Negation is harder to optimize and often prevents index use.'],
          ],
          'Efficient conditional expressions',
        ),
      ],
    },
    {
      id: 'query-formulation',
      title: 'Query Formulation',
      blocks: [
        p('When writing a query, follow these steps:'),
        ol([
          'Identify what columns and computations are required.',
          'Identify the source tables.',
          'Determine how to join the tables.',
          'Determine what selection criteria is needed.',
          'Determine in what order to display the output.',
        ]),
      ],
    },
    {
      id: 'dbms-tuning',
      title: 'DBMS Performance Tuning',
      blocks: [
        p(
          'DBMS performance tuning includes managing DBMS processes in primary memory and structures in physical storage. At the server end it focuses on setting parameters used for the:',
        ),
        ul(['Data cache', 'SQL cache', 'Sort cache', 'Optimizer mode']),
        p(
          'Server-side tasks include managing DBMS processes in memory (allocating memory for caches) and managing physical storage structures (allocating space for data files).',
        ),
        p('Some general recommendations for creating databases:'),
        ul([
          'Use RAID (Redundant Array of Independent Disks) to provide a balance between performance and fault tolerance.',
          'Minimize disk contention.',
          'Put high-usage tables in their own table spaces.',
          'Assign separate data files in separate storage volumes for indexes, system and high-usage tables.',
          'Take advantage of table storage organizations in the database.',
          'Partition tables based on usage.',
          'Use denormalized tables where appropriate.',
          'Store computed and aggregate attributes in tables.',
        ]),
        important(
          'Server tuning focus',
          'Server-side tuning is about memory allocation for caches and physical storage allocation. Client-side tuning is about writing efficient SQL. Both are needed for good performance.',
        ),
      ],
    },
  ],
  summary: [
    h(2, 'Chapter 11 Summary', 'summary'),
    p(
      'Use this summary immediately before the chapter test. It focuses on the client/server split, the three query phases, index rules and optimizer choices that examinations ask you to distinguish.',
    ),
    h(3, 'Performance concepts', 'summary-concepts'),
    ul([
      'Goal: execute queries as fast as possible.',
      'Database performance tuning reduces response time and minimizes bottlenecks.',
      'Client-side = SQL performance tuning; server-side = DBMS performance tuning.',
      'Good performance starts with good database design.',
      'Most tuning effort focuses on minimizing I/O operations.',
    ]),
    h(3, 'Architecture', 'summary-architecture'),
    ul([
      'Data files expand in extents and are grouped into table spaces or file groups.',
      'Data cache stores recently accessed data blocks in RAM; SQL cache stores recently executed SQL and procedures.',
      'I/O request = low-level data access operation.',
      'Typical DBMS processes: listener, user, scheduler, lock manager, optimizer.',
    ]),
    h(3, 'Optimization and query processing', 'summary-query'),
    ul([
      'Automatic vs manual; static (compile time) vs dynamic (execution time).',
      'Statistically based uses database statistics; rule-based uses fixed rules and costs.',
      'Cost-based total cost = processing cost + I/O cost + resource cost.',
      'Three query phases: parsing, execution, fetching.',
      'Parsing validates syntax and the data dictionary, then optimizes and prepares an access plan.',
      'Access plans are DBMS-specific and cached in the SQL cache.',
      'Bottlenecks: CPU, RAM, hard disk, network, application code.',
    ]),
    h(3, 'Indexes and optimizers', 'summary-indexes'),
    ul([
      'An index is an ordered set of values with an index key and pointers.',
      'Types: hash, B-tree, bitmap.',
      'Data sparsity = number of different values a column can have.',
      'Index selectivity = how likely an index will be used.',
      'Index helps with WHERE, HAVING, GROUP BY, ORDER BY, MAX/MIN and high-sparsity columns.',
      'Do not index small tables or low-sparsity columns.',
      'Indexes can be skipped if the query uses functions on indexed columns or reads most rows anyway.',
      'Optimizer hints are instructions embedded in the SQL text; statistics can be stale.',
    ]),
    h(3, 'SQL tuning', 'summary-sql'),
    ul([
      'Most performance problems come from poorly written SQL.',
      'Use simple columns or literals; prefer numeric and equality comparisons.',
      'AND: put the most likely false condition first. OR: put the most likely true condition first. Avoid NOT.',
      'Query formulation: columns, tables, joins, selection criteria, output order.',
      'DBMS tuning: data cache, SQL cache, sort cache, optimizer mode; RAID, minimize contention, separate files, partition tables.',
    ]),
  ],
  keyTerms: [
    { term: 'Database performance tuning', definition: 'Activities and procedures that reduce the response time of the database system.' },
    { term: 'SQL performance tuning', definition: 'Client-side tuning: writing SQL that returns the correct answer in the least time using the fewest server resources.' },
    { term: 'DBMS performance tuning', definition: 'Server-side tuning: configuring the DBMS environment to respond as fast as possible.' },
    { term: 'Extent', definition: 'A predefined increment by which a data file automatically expands.' },
    { term: 'Table space', definition: 'A logical grouping of data files storing data with similar characteristics.' },
    { term: 'Data cache', definition: 'A shared memory area storing the most recently accessed data blocks in RAM.' },
    { term: 'SQL cache', definition: 'A shared memory area storing the most recently executed SQL statements and procedures.' },
    { term: 'I/O request', definition: 'A low-level data access operation to or from a computer device.' },
    { term: 'Automatic query optimization', definition: 'The DBMS chooses the most cost-effective access path without user intervention.' },
    { term: 'Static query optimization', definition: 'Optimization that takes place at compilation time.' },
    { term: 'Dynamic query optimization', definition: 'Optimization that takes place at execution time.' },
    { term: 'Database statistics', definition: 'Measurements about database objects and resources used to make optimization decisions.' },
    { term: 'Parsing', definition: 'The query phase that validates, decomposes and optimizes the query and prepares an access plan.' },
    { term: 'Access plan', definition: 'A DBMS-specific plan translating a query into the I/O operations needed to produce the result set.' },
    { term: 'Bottleneck', definition: 'A delay in an I/O operation that slows the system.' },
    { term: 'Index', definition: 'An ordered set of values with an index key and pointers that speeds up data access.' },
    { term: 'Data sparsity', definition: 'The number of different values a column could possibly have.' },
    { term: 'Index selectivity', definition: 'A measure of how likely an index will be used.' },
    { term: 'Rule-based optimizer', definition: 'An optimizer using preset rules that assign fixed costs to operations.' },
    { term: 'Cost-based optimizer', definition: 'An optimizer that sums processing, I/O and resource costs using statistics.' },
    { term: 'Optimizer hint', definition: 'A special instruction for the optimizer embedded in the SQL command text.' },
  ],
}
