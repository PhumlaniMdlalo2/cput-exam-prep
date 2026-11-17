import type { Chapter } from '../types'
import { added, code, def, h, img, important, ol, p, table, tip, ul } from '../helpers'

export const chapter08: Chapter = {
  id: 'ch08',
  number: 8,
  title: 'Advanced SQL',
  subtitle: 'Joins, subqueries, functions, set operators, views, procedural SQL and constraints',
  description:
    'Advanced SQL techniques for combining data, writing nested queries, using functions and set operators, creating views and sequences, writing procedural SQL, and enforcing integrity with constraints.',
  examWeight: 'Core SQL chapter — supports Q4 (SQL, 40 marks) and Q1/Q2/Q3',
  sections: [
    {
      id: 'joins',
      title: 'SQL Join Operators',
      blocks: [
        p(
          'A join operation merges rows from two tables and returns rows that do one of the following: have common values in common columns, meet a given join condition, or have common values in common columns or have no matching values. An inner join returns only rows that meet the criteria.',
        ),
        table(
          ['Join type', 'What it returns'],
          [
            ['INNER JOIN', 'Only rows that meet the join criteria.'],
            ['NATURAL JOIN', 'Rows with matching values in the common columns; duplicate columns are eliminated.'],
            ['JOIN USING', 'Rows with matching values in the column named in the USING clause.'],
            ['JOIN ON', 'Rows that meet the specified join condition; the tables need not share common attributes.'],
            ['CROSS JOIN', 'The relational product (Cartesian product) of the two tables.'],
            ['LEFT OUTER JOIN', 'Matching rows plus unmatched rows from the left table.'],
            ['RIGHT OUTER JOIN', 'Matching rows plus unmatched rows from the right table.'],
            ['FULL OUTER JOIN', 'Matching rows plus unmatched rows from both tables.'],
          ],
          'Join operators at a glance',
        ),
        h(3, 'Cross Join', 'cross-join'),
        p(
          'A cross join performs the relational product of two tables. It is also called a Cartesian product. Every row of the first table is paired with every row of the second table.',
        ),
        code(
          'SELECT column-list\nFROM table1 CROSS JOIN table2;',
          'sql',
          'Cross join syntax',
        ),
        p('A cross join can be used to yield specified attributes from the combined result.'),
        h(3, 'Natural Join', 'natural-join'),
        p(
          'A natural join returns all rows with matching values in the matching columns and eliminates duplicate columns. It is used when the tables share one or more common attributes with common names.',
        ),
        code(
          'SELECT column-list\nFROM table1 NATURAL JOIN table2;',
          'sql',
          'Natural join syntax',
        ),
        h(3, 'JOIN USING Clause', 'join-using'),
        p(
          'JOIN USING returns only rows with matching values in the column indicated in the USING clause. The JOIN USING operand does not require table qualifiers; Oracle returns an error if a table name is specified.',
        ),
        code(
          'SELECT column-list\nFROM table1 JOIN table2 USING (common-column);',
          'sql',
          'JOIN USING syntax',
        ),
        h(3, 'JOIN ON Clause', 'join-on'),
        p(
          'JOIN ON is used when the tables have no common attributes. It returns only the rows that meet the join condition, which typically includes an equality comparison expression of two columns.',
        ),
        code(
          'SELECT column-list\nFROM table1 JOIN table2\nON join-condition;',
          'sql',
          'JOIN ON syntax',
        ),
        h(3, 'Outer Joins', 'outer-joins'),
        p(
          'Outer joins return rows that match the join condition and also return rows with unmatched attribute values for the tables being joined. There are three types: left, right and full. Left and right designate the order in which the tables are processed.',
        ),
        table(
          ['Type', 'Behaviour', 'Syntax'],
          [
            [
              'Left outer join',
              'Returns matching rows and rows in the left-side table with unmatched values.',
              'SELECT column-list FROM table1 LEFT [OUTER] JOIN table2 ON join-condition',
            ],
            [
              'Right outer join',
              'Returns matching rows and rows in the right-side table with unmatched values.',
              'SELECT column-list FROM table1 RIGHT [OUTER] JOIN table2 ON join-condition',
            ],
            [
              'Full outer join',
              'Returns matching rows and all rows with unmatched values in either side table.',
              'SELECT column-list FROM table1 FULL [OUTER] JOIN table2 ON join-condition',
            ],
          ],
          'Outer join types',
        ),
      ],
    },
    {
      id: 'subqueries',
      title: 'Subqueries and Correlated Queries',
      blocks: [
        p(
          'It is often necessary to process data based on other processed data. A subquery is a query inside a query, normally written inside parentheses. The first query is the outer query; the query inside it is the inner query. The inner query is executed first, and the output of the inner query is used as input for the outer query. A subquery is sometimes referred to as a nested query.',
        ),
        h(3, 'WHERE Subqueries', 'where-subqueries'),
        p(
          'The most common type uses an inner SELECT subquery on the right side of a WHERE comparison. It requires a subquery that returns only one single value, and the value generated by the subquery must be of a comparable data type. Subqueries can be used in combination with joins.',
        ),
        code(
          'SELECT column-list\nFROM table\nWHERE column = (SELECT single-value FROM table2 WHERE condition);',
          'sql',
          'A single-value WHERE subquery',
        ),
        h(3, 'IN Subqueries', 'in-subqueries'),
        p(
          'IN subqueries are used when comparing a single attribute to a list of values. The inner query may return multiple rows, and the outer query checks whether the attribute appears in that list.',
        ),
        img(
          '/assets/Pasted image 20260831122104.png',
          'Example of an IN subquery joining CUSTOMER, INVOICE, LINE and PRODUCT to list customers who bought products with descriptions containing zhammerz or zsavx.',
          'IN subquery example from your notes',
        ),
        h(3, 'HAVING Subqueries', 'having-subqueries'),
        p(
          'The HAVING clause restricts the output of a GROUP BY query. A subquery inside HAVING applies a conditional criterion to the grouped rows.',
        ),
        img(
          '/assets/Pasted image 20260831122155.png',
          'Example of a HAVING subquery on grouped line data.',
          'HAVING subquery example from your notes',
        ),
        h(3, 'Multirow Subquery Operators: ANY and ALL', 'any-all'),
        p(
          'ANY and ALL allow comparison of a single value with a list of values using inequality comparison. “Greater than ALL” is equivalent to “greater than the highest in the list”. “Less than ALL” is equivalent to “less than the lowest”. Using the equal-to-ANY operator is equivalent to the IN operator.',
        ),
        table(
          ['Expression', 'Equivalent meaning'],
          [
            ['> ALL (subquery)', 'Greater than the highest value in the list'],
            ['< ALL (subquery)', 'Less than the lowest value in the list'],
            ['= ANY (subquery)', 'Equivalent to IN (subquery)'],
          ],
          'ANY and ALL equivalences',
        ),
        h(3, 'FROM Subqueries', 'from-subqueries'),
        p(
          'A FROM subquery specifies the tables from which the data will be drawn. A SELECT subquery can be used in the FROM clause, and the resulting view name can be used anywhere a table is expected.',
        ),
        h(3, 'Attribute List Subqueries', 'attribute-list-subqueries'),
        p(
          'A SELECT statement uses an attribute list to indicate the columns to project in the resulting set. Columns can be attributes of base tables or the result of an aggregate function. An attribute list can also include a subquery expression, called an inline subquery, which must return one single value. An alias cannot be used in the attribute list.',
        ),
        h(3, 'Correlated Subqueries', 'correlated-subqueries'),
        p(
          'A correlated subquery executes once for each row in the outer query. It is correlated because the inner query is related to the outer query: the inner query references a column of the outer query. Correlated subqueries can also be used with the EXISTS special operator.',
        ),
        code(
          'SELECT column-list\nFROM table1 t1\nWHERE EXISTS (\n  SELECT 1\n  FROM table2 t2\n  WHERE t2.key = t1.key\n);',
          'sql',
          'Correlated subquery with EXISTS',
        ),
      ],
    },
    {
      id: 'functions',
      title: 'SQL Functions',
      blocks: [
        p(
          'Generating information from data often requires many data manipulations. SQL functions are similar to functions in programming languages. Functions always use a numerical, date or string value. The value may be part of a command or an attribute in a table, and a function may appear anywhere in an SQL statement.',
        ),
        h(3, 'Date and Time Functions', 'date-time-functions'),
        ul([
          'All SQL-standard DBMSs support date and time functions.',
          'Date functions take one parameter and return a value.',
          'Date/time data types are implemented differently by different DBMS vendors.',
          'The ANSI SQL standard defines date data types, but not how the data types are stored.',
        ]),
        h(3, 'Numeric Functions', 'numeric-functions'),
        p(
          'Numeric functions are grouped in different ways: algebraic, trigonometric, logarithmic, and so on. Do not confuse them with aggregate functions: aggregate functions operate over sets, while numeric functions operate over a single row. Numeric functions take one numeric parameter and return one value.',
        ),
        img(
          '/assets/Pasted image 20260831122700.png',
          'Table of numeric functions including ABS, ROUND, and CEIL/CEILING/FLOOR with syntax and examples.',
          'Numeric functions from your notes',
        ),
        h(3, 'String Functions', 'string-functions'),
        p(
          'String manipulations are the most used functions in programming. Examples include concatenation, printing in uppercase, and finding the length of an attribute.',
        ),
        h(3, 'Conversion Functions', 'conversion-functions'),
        p(
          'Conversion functions take a value of a given data type and convert it to the equivalent value in another data type. Oracle conversion functions include TO_CHAR, which takes a date value and converts it to a character string, and TO_DATE, which takes a character string representing a date and converts it to an actual date in Oracle format. SQL Server uses the CAST and CONVERT functions.',
        ),
      ],
    },
    {
      id: 'set-operators',
      title: 'Relational Set Operators',
      blocks: [
        p(
          'The relational set operators are UNION, INTERSECT and MINUS. They work properly if the relations are union-compatible: the names of the relation attributes must be the same and their data types must be identical.',
        ),
        h(3, 'UNION', 'union'),
        p(
          'UNION combines rows from two or more queries without including duplicate rows. It can be used to unite more than two queries.',
        ),
        code(
          'SELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER\nUNION\nSELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER_2;',
          'sql',
          'UNION example',
        ),
        h(3, 'UNION ALL', 'union-all'),
        p(
          'UNION ALL produces a relation that retains duplicate rows. It can also be used to unite more than two queries.',
        ),
        code(
          'SELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER\nUNION ALL\nSELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER_2;',
          'sql',
          'UNION ALL example',
        ),
        h(3, 'INTERSECT', 'intersect'),
        p(
          'INTERSECT combines rows from two queries and returns only the rows that appear in both sets. Syntax: query INTERSECT query.',
        ),
        code(
          'SELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER\nINTERSECT\nSELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER_2;',
          'sql',
          'INTERSECT example',
        ),
        h(3, 'MINUS', 'minus'),
        p(
          'MINUS combines rows from two queries and returns only the rows that appear in the first set but not in the second. Syntax: query MINUS query.',
        ),
        code(
          'SELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER\nMINUS\nSELECT CUS_LNAME, CUS_FNAME, CUS_INITIAL, CUS_AREACODE\nFROM CUSTOMER_2;',
          'sql',
          'MINUS example',
        ),
        h(3, 'Syntax Alternatives', 'set-syntax-alternatives'),
        p(
          'IN and NOT IN subqueries can be used in place of INTERSECT. The example below returns customers in area code 615 who also appear in the INVOICE table.',
        ),
        code(
          "SELECT CUS_CODE\nFROM CUSTOMER\nWHERE CUS_AREACODE = '615'\n  AND CUS_CODE IN (SELECT DISTINCT CUS_CODE FROM INVOICE);",
          'sql',
          'IN subquery used in place of INTERSECT',
        ),
      ],
    },
    {
      id: 'dml',
      title: 'INSERT, UPDATE, DELETE and Transaction Control',
      blocks: [
        h(3, 'INSERT with a SELECT Subquery', 'insert-select'),
        p(
          'An INSERT with a SELECT subquery copies rows from one table into another. INSERT is the outer query and SELECT is the inner query.',
        ),
        code(
          'INSERT INTO target [(column-list)]\nSELECT column-list\nFROM source;',
          'sql',
          'INSERT with a SELECT subquery',
        ),
        p(
          "The target column list is required if source columns differ from the target's attribute names, characteristics or order. The subquery output must match the target attributes and data types, in order.",
        ),
        added(
          'Added for completeness: basic INSERT',
          'Your notes only show INSERT with a SELECT subquery. A single row can also be inserted with INSERT INTO table (column-list) VALUES (value-list). The column list is optional when values are supplied for every column in table order. Character and date values are written in quotes; numeric values are not.',
        ),
        code(
          "INSERT INTO EMP_1 (EMP_NUM, EMP_LNAME, EMP_FNAME, EMP_INITIAL, EMP_HIREDATE, JOB_CODE)\nVALUES ('101', 'News', 'John', 'G', '08-NOV-00', '502');",
          'sql',
          'Basic INSERT with VALUES',
        ),
        h(3, 'UPDATE', 'update'),
        p(
          'UPDATE modifies attribute values in one or more rows. It is set-oriented: if there is no WHERE clause, all rows are updated. INSERT creates new rows; UPDATE changes existing rows.',
        ),
        code(
          'UPDATE tablename\nSET columnname = expression [, columnname = expression]\n[WHERE conditionlist];',
          'sql',
          'UPDATE syntax',
        ),
        p(
          'Arithmetic can be used in the SET clause, for example SET P_QOH = P_QOH + 20. The WHERE clause can use ranges, IN or OR to target several rows.',
        ),
        h(3, 'DELETE', 'delete'),
        p(
          'DELETE removes rows from a table. The WHERE clause can use any attribute, not just the primary key. DELETE is set-oriented: if there is no WHERE clause, all rows are deleted.',
        ),
        code(
          'DELETE FROM tablename\n[WHERE conditionlist];',
          'sql',
          'DELETE syntax',
        ),
        important(
          'MySQL safe mode',
          'In MySQL safe mode, UPDATE and DELETE must include a WHERE clause on the primary key. Safe mode can be disabled temporarily with SET SQL_SAFE_UPDATES = 0;',
        ),
        h(3, 'COMMIT and ROLLBACK', 'commit-rollback'),
        ul([
          'COMMIT [WORK] permanently saves all changes (rows added, modified or deleted). Unsaved changes are lost if the session is interrupted, for example during a power outage.',
          'ROLLBACK undoes all changes made since the last COMMIT.',
          'The purpose is database update integrity in transaction management (Chapter 10).',
          'COMMIT and ROLLBACK work only on data manipulation commands (INSERT, UPDATE, DELETE).',
          'Data definition commands (such as CREATE TABLE) are auto-committed and cannot be rolled back. Oracle auto-commits on DDL; for example, CREATE INDEX commits earlier changes.',
          'MS Access has no COMMIT/ROLLBACK and auto-saves each command.',
          'MySQL auto-commits each command unless START TRANSACTION or BEGIN is used.',
        ]),
      ],
    },
    {
      id: 'views-sequences',
      title: 'Views, Materialized Views and Oracle Sequences',
      blocks: [
        h(3, 'Virtual Tables: Creating a View', 'creating-a-view'),
        def(
          'View',
          'A virtual table based on a SELECT query. It is not stored as a separate table of data; it is re-created on demand each time it is invoked.',
        ),
        def(
          'Base tables',
          'The tables on which a view is based.',
        ),
        code(
          'CREATE VIEW viewname AS\nSELECT query;',
          'sql',
          'CREATE VIEW syntax',
        ),
        p(
          'CREATE VIEW is a data definition command; it stores the SELECT query in the data dictionary. A view name can be used anywhere a table name is expected.',
        ),
        ul([
          'Views are dynamically updated: they are re-created on demand each time they are invoked.',
          'Views provide security by restricting users to specific columns and rows.',
          'Views can be the basis for reports.',
          'MS Access has no CREATE VIEW; a query is saved instead.',
        ]),
        code(
          'CREATE VIEW PROD_STATS AS\nSELECT V_CODE,\n       SUM(P_QOH * P_PRICE) AS TOTCOST,\n       MAX(P_QOH) AS MAXQTY\nFROM PRODUCT\nGROUP BY V_CODE;',
          'sql',
          'View used as the basis for a report',
        ),
        h(3, 'Updatable Views', 'updatable-views'),
        p(
          'A batch update routine pools multiple transactions into a single batch and updates a master table field in a single operation. An updatable view is a view that can be used to update attributes in the base tables.',
        ),
        p('Not all views are updatable. The main restrictions are:'),
        ul([
          'GROUP BY expressions or aggregate functions cannot be used.',
          'Set operators cannot be used.',
          'Most restrictions are based on the use of JOINs.',
        ]),
        p(
          'Batch update example: subtract monthly sales (PRODSALES.PS_QTY) from stock (PRODMASTER.PROD_QOH). The tables have a 1:1 relationship.',
        ),
        code(
          'UPDATE PRODMASTER, PRODSALES\nSET PRODMASTER.PROD_QOH = PROD_QOH - PS_QTY\nWHERE PRODMASTER.PROD_ID = PRODSALES.PROD_ID;',
          'sql',
          'Batch update through joined tables',
        ),
        ul([
          'The statement joins the tables, then updates each matching PRODMASTER row.',
          'PRODSALES must be a base table, not a view.',
          'The statement works in MySQL and Access; Oracle returns an error.',
          'SQL Server needs UPDATE ... SET ... FROM table1 JOIN table2 ON ...',
        ]),
        added(
          'Added for completeness: materialized view',
          'A materialized view stores the result of its query physically, unlike an ordinary view which is virtual and recomputed on demand. Because the result is stored, a materialized view can be refreshed periodically or on demand. It can improve performance for expensive aggregate or join queries, but the stored copy may be stale between refreshes. An ordinary view always reflects the current base-table data but may be slower to evaluate.',
        ),
        h(3, 'Oracle Sequences', 'oracle-sequences'),
        p(
          'MS Access uses the AutoNumber data type to fill a column with unique numeric values. Oracle uses sequences instead.',
        ),
        ul([
          'A sequence is an independent object in the database.',
          'It is named and can be used anywhere a value is expected.',
          'It is not tied to a table or column.',
          'It generates numeric values that can be assigned to any column in any table.',
          'It can be created and deleted at any time.',
        ]),
        added(
          'Added for completeness: sequence syntax',
          'Oracle sequence syntax is CREATE SEQUENCE sequence_name [START WITH n] [INCREMENT BY n] [NOCACHE]. NEXTVAL returns the next value and CURRVAL returns the current value for the session. The example creates a sequence starting at 2000.',
        ),
        code(
          'CREATE SEQUENCE CUST_NUM_SEQ\nSTART WITH 2000\nINCREMENT BY 1;',
          'sql',
          'Creating an Oracle sequence',
        ),
        code(
          "INSERT INTO CUSTOMER (CUST_NUM, CUST_LNAME, CUST_FNAME, CUST_BALANCE)\nVALUES (CUST_NUM_SEQ.NEXTVAL, 'Powers', 'Ruth', 500);",
          'sql',
          'Using NEXTVAL to generate a key value',
        ),
      ],
    },
    {
      id: 'procedural-sql',
      title: 'Procedural SQL',
      blocks: [
        p(
          'SQL does not support conditional execution. Procedural SQL isolates critical code so that all applications access shared code, which gives better maintenance and logic control. A persistent stored module (PSM) is a block of code containing standard SQL statements and procedural extensions, stored and executed at the DBMS server.',
        ),
        p(
          'Procedural SQL (PL/SQL) enables you to store procedural code and SQL statements in the database and to merge SQL with traditional programming constructs. Procedural code is executed by the DBMS when invoked by an end user: anonymous PL/SQL blocks and triggers, stored procedures and PL/SQL functions.',
        ),
        h(3, 'Triggers', 'triggers'),
        p(
          'A trigger is procedural SQL code that is automatically invoked by the RDBMS on a data manipulation event. A trigger definition specifies:',
        ),
        ul([
          'Triggering timing: BEFORE or AFTER.',
          'Triggering event: INSERT, UPDATE or DELETE.',
          'Triggering level: statement-level trigger or row-level trigger.',
          'Triggering action.',
        ]),
        p('A trigger is removed with DROP TRIGGER trigger_name.'),
        added(
          'Added for completeness: trigger syntax',
          'A row-level Oracle trigger that adds a new invoice amount to a customer balance would follow the pattern below. The :NEW qualifier refers to the new row being inserted.',
        ),
        code(
          'CREATE OR REPLACE TRIGGER trg_updatecustbalance\nAFTER INSERT ON INVOICE\nFOR EACH ROW\nBEGIN\n  UPDATE CUSTOMER\n  SET CUST_BALANCE = CUST_BALANCE + :NEW.INV_AMOUNT\n  WHERE CUST_NUM = :NEW.CUST_NUM;\nEND;',
          'sql',
          'Trigger example: update customer balance after an invoice insert',
        ),
        h(3, 'Stored Procedures', 'stored-procedures'),
        p(
          'A stored procedure is a named collection of procedural and SQL statements. Its advantages are that it substantially reduces network traffic and increases performance because individual SQL statements are not transmitted over the network, and it reduces code duplication through code isolation and code sharing. This minimises the chance of errors and the cost of application development and maintenance.',
        ),
        added(
          'Added for completeness: stored procedure syntax',
          'A simple Oracle procedure that inserts a customer would follow the pattern below. Parameters are declared in the parameter list and the procedure body runs between BEGIN and END.',
        ),
        code(
          'CREATE OR REPLACE PROCEDURE prc_cust_add(\n  p_cust_num   IN CUSTOMER.CUST_NUM%TYPE,\n  p_cust_lname IN CUSTOMER.CUST_LNAME%TYPE,\n  p_cust_fname IN CUSTOMER.CUST_FNAME%TYPE,\n  p_balance    IN CUSTOMER.CUST_BALANCE%TYPE\n) AS\nBEGIN\n  INSERT INTO CUSTOMER (CUST_NUM, CUST_LNAME, CUST_FNAME, CUST_BALANCE)\n  VALUES (p_cust_num, p_cust_lname, p_cust_fname, p_balance);\nEND;',
          'sql',
          'Stored procedure example',
        ),
        h(3, 'PL/SQL Processing with Cursors', 'cursors'),
        def(
          'Cursor',
          'A special construct in procedural SQL that holds the data rows returned by an SQL query. It is a reserved memory area on the DBMS server, not the client, and behaves like an array of rows and columns.',
        ),
        ul([
          'An implicit cursor is automatically created when SQL returns only one value.',
          'An explicit cursor holds the output of an SQL statement that may return two or more rows.',
          'A cursor-style processor retrieves data from the cursor one row at a time; the current row is copied to PL/SQL variables.',
          'Without a cursor, a SQL statement returning more than one row inside PL/SQL causes an error.',
        ]),
        p('A cursor is declared in the DECLARE section: CURSOR cursor_name IS select-query;'),
        p('The cursor commands are used between BEGIN and END:'),
        ol([
          'OPEN: executes the query and populates the cursor. DECLARE only reserves memory.',
          'FETCH cursor_name INTO var1 [, var2 ...]: copies the current row into PL/SQL variables, then moves the pointer to the next row.',
          'CLOSE: closes the cursor.',
        ]),
        p(
          'Variables must be declared with data types compatible with the fetched columns, one variable per column.',
        ),
        table(
          ['Cursor attribute', 'Meaning'],
          [
            ['%ROWCOUNT', 'Number of rows fetched so far.'],
            ['%FOUND', 'TRUE if the last FETCH returned a row.'],
            ['%NOTFOUND', 'TRUE if the last FETCH returned no row; used to EXIT the loop.'],
            ['%ISOPEN', 'TRUE if the cursor is open.'],
          ],
          'Cursor attributes',
        ),
        p(
          '%TYPE lets a variable inherit the data type of a table column or another variable. The typical pattern is OPEN → LOOP → FETCH → EXIT WHEN %NOTFOUND → CLOSE. Cursors give both set-oriented and record-oriented processing.',
        ),
        h(3, 'PL/SQL Stored Functions', 'stored-functions'),
        p(
          'A stored function is a named group of procedural and SQL statements that returns a value. It can only be called from stored procedures or triggers, not directly from SQL statements (barring strict compliance rules). It is not the same as a built-in SQL function such as MIN, MAX or AVG.',
        ),
        code(
          'CREATE FUNCTION function_name(argument IN data-type, ...)\nRETURN data-type\n[IS]\nBEGIN\n  PL/SQL statements;\n  ...\n  RETURN (value or expression);\nEND;',
          'sql',
          'Stored function syntax',
        ),
      ],
    },
    {
      id: 'embedded-sql',
      title: 'Embedded SQL',
      blocks: [
        p(
          'There are three key differences between SQL and procedural languages: a run-time mismatch, a processing mismatch and a data type mismatch.',
        ),
        ul([
          'Run-time mismatch: SQL is executed one instruction at a time, while the host language typically runs at the client side in its own memory space.',
          'Processing mismatch: the host language processes one data element at a time.',
          'Data type mismatch: SQL and the host language represent data differently.',
        ]),
        p('The embedded SQL framework defines:'),
        ul([
          'A standard syntax to identify embedded SQL code within the host language.',
          'A standard syntax to identify host variables.',
          'A communication area that exchanges status and error information between SQL and the host language.',
        ]),
        p(
          'Embedded SQL means SQL statements inside a host language such as Java, C#, COBOL or VB.NET. The host language is any language containing embedded SQL. Embedded SQL is still the most common way to add procedural capability to DBMS applications.',
        ),
        code(
          'EXEC SQL\n  SQL statement;\nEND-EXEC;',
          'sql',
          'Embedded SQL syntax',
        ),
        p(
          'The EXEC SQL block works for SELECT, INSERT, UPDATE and DELETE. Host variables are host-language variables that send or receive data and are preceded by a colon, for example: DELETE FROM EMPLOYEE WHERE EMP_NUM = :W_EMP_NUM; They must be declared in the host language first.',
        ),
        p(
          'The communication area (SQLCA) holds SQLCODE and SQLSTATE. It should be checked after each statement, for example: IF SQLCODE = 0 THEN data routine ELSE error routine.',
        ),
        p(
          'Multi-row queries need cursors: DECLARE cursor FOR select → OPEN → FETCH INTO :host_vars → CLOSE. A call-level interface (CLI) is an alternative in which the programmer uses an API such as ODBC in Windows.',
        ),
        h(3, 'Building an Embedded SQL Program', 'embedded-build'),
        ol([
          'Write SQL within host language code.',
          'A preprocessor from the DBMS vendor converts embedded SQL into DBMS-specific procedure calls.',
          'The host language compiler creates object code.',
          'The linker binds object code to DBMS run-time libraries, creating an “access plan” module.',
          'Run the executable.',
        ]),
        h(3, 'Static SQL', 'static-sql'),
        p(
          'Static SQL is embedded SQL in which the programmer uses predefined SQL statements and parameters. End users of the program are limited to actions that were specified in the application programs, and the SQL statements do not change while the application is running.',
        ),
        code(
          "SELECT P_CODE, P_DESCRIPT\nFROM PRODUCT\nWHERE P_PRICE > 100;",
          'sql',
          'Static SQL: attributes, table and condition are known in advance',
        ),
        h(3, 'Dynamic SQL', 'dynamic-sql'),
        p(
          'Dynamic SQL is SQL that is not known in advance but is generated at run time. The program can generate SQL statements required to respond to ad hoc queries. The attribute list and condition are not known until the end user specifies them. Dynamic SQL tends to be much slower than static SQL and requires more computer resources.',
        ),
        code(
          'SELECT :W_ATTRIBUTE_LIST\nFROM :W_TABLE\nWHERE :W_CONDITION;',
          'sql',
          'Dynamic SQL: text variables are filled from end-user input at run time',
        ),
        p(
          'Dynamic SQL gives flexibility but costs speed and resources, and can have inconsistent DBMS vendor support.',
        ),
      ],
    },
    {
      id: 'status',
      title: 'SQL Status and Error Reporting',
      blocks: [
        p('SQL provides two status variables for error reporting: SQLCODE and SQLSTATE.'),
        table(
          ['Variable', 'Value', 'Explanation'],
          [
            [
              'SQLCODE',
              '0',
              'Successful completion of the command.',
            ],
            [
              'SQLCODE',
              '100',
              'No data: the SQL statement did not return any rows and did not select, update or delete any rows.',
            ],
            [
              'SQLCODE',
              'negative value',
              'An error occurred.',
            ],
            [
              'SQLSTATE',
              '00000',
              'Successful completion of the command.',
            ],
            [
              'SQLSTATE',
              'XXYYY',
              'Multiple values in the format XXYYY, where XX represents the class code and YYY represents the subclass code.',
            ],
          ],
          'SQLCODE and SQLSTATE',
        ),
        ul([
          'SQLCODE is the old-style error reporting variable, supported for backward compatibility only. It returns an integer value (positive, zero or negative).',
          'SQLSTATE was added by the SQL-92 standard to provide predefined error codes. It is a character string five characters long.',
        ]),
        img(
          '/assets/Pasted image 20260831123911.png',
          'Table comparing SQLCODE and SQLSTATE values and explanations.',
          'SQL status variables from your notes',
        ),
      ],
    },
    {
      id: 'constraints',
      title: 'Constraints, Table Creation and ALTER TABLE',
      blocks: [
        added(
          'Added for completeness (approved)',
          'Your Chapter 8 notes cover joins, subqueries, views, sequences and procedural SQL, but they do not define SQL constraints, table creation with constraints, or ALTER TABLE. These topics are required by review questions 1–8 and by many of the SQL problems, so the approved supplementary material is included below.',
        ),
        h(3, 'Types of Integrity', 'integrity-types'),
        table(
          ['Integrity type', 'What it ensures'],
          [
            [
              'Entity integrity',
              'Every row has a unique, non-null primary key. Declaring a PRIMARY KEY enforces entity integrity.',
            ],
            [
              'Referential integrity',
              'A foreign key value must match an existing primary key value in the referenced table, or be null (where allowed). Declaring a FOREIGN KEY enforces referential integrity.',
            ],
            [
              'Domain integrity',
              'Values in a column come from a defined domain: data type, length, range, format and valid entries. CHECK, NOT NULL and data types help enforce domain integrity.',
            ],
            [
              'User-defined integrity',
              'Business rules that cannot be expressed by the built-in constraints; often enforced with triggers or application logic.',
            ],
          ],
          'The four integrity types',
        ),
        h(3, 'What Is a Constraint?', 'what-is-a-constraint'),
        p(
          'A constraint is a rule enforced by the DBMS on the data in a table. Constraints prevent invalid data from being inserted, updated or deleted. Common constraints are PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK and DEFAULT.',
        ),
        table(
          ['Constraint', 'Purpose'],
          [
            ['PRIMARY KEY', 'Uniquely identifies each row; implies NOT NULL and UNIQUE.'],
            ['FOREIGN KEY', 'Links a column to a primary key in another table and enforces referential integrity.'],
            ['NOT NULL', 'Prevents null values in the column.'],
            ['UNIQUE', 'Requires every non-null value in the column to be different.'],
            ['CHECK', 'Restricts values to a condition or list of valid values.'],
            ['DEFAULT', 'Supplies a value when none is given on insert.'],
          ],
          'Common SQL constraints',
        ),
        h(3, 'Column Constraints vs Table Constraints', 'column-vs-table-constraints'),
        p(
          'A column constraint is declared as part of a single column definition. A table constraint is declared separately after the column definitions and may involve one or more columns. Use a table constraint when the constraint involves multiple columns (for example a composite primary key) or when you want to name the constraint explicitly.',
        ),
        code(
          'CREATE TABLE EMP_1 (\n  EMP_NUM     CHAR(3)      NOT NULL,\n  EMP_LNAME   VARCHAR(15)  NOT NULL,\n  EMP_FNAME   VARCHAR(15)  NOT NULL,\n  EMP_INITIAL CHAR(1),\n  EMP_HIREDATE DATE,\n  JOB_CODE    CHAR(3),\n  CONSTRAINT PK_EMP_1 PRIMARY KEY (EMP_NUM),\n  CONSTRAINT FK_EMP_1_JOB FOREIGN KEY (JOB_CODE)\n    REFERENCES JOB (JOB_CODE)\n);',
          'sql',
          'Column constraints and table constraints together',
        ),
        p(
          'In the example, NOT NULL is a column constraint. PRIMARY KEY and FOREIGN KEY are table constraints because they are declared separately and are named.',
        ),
        h(3, 'Referential Constraint Actions', 'referential-actions'),
        p(
          'Referential constraint actions define what happens to dependent rows when the referenced primary key is updated or deleted. They are declared with ON UPDATE and ON DELETE.',
        ),
        table(
          ['Action', 'Effect'],
          [
            ['CASCADE', 'The change is propagated to the dependent rows (the child rows are updated or deleted).'],
            ['SET NULL', 'The foreign key value in the dependent rows is set to null.'],
            ['SET DEFAULT', 'The foreign key value in the dependent rows is set to its default.'],
            ['RESTRICT', 'The update or delete is rejected if dependent rows exist.'],
            ['NO ACTION', 'The update or delete is rejected if dependent rows exist (checked at the end of the statement).'],
          ],
          'Referential actions',
        ),
        code(
          'ALTER TABLE INVOICE\nADD CONSTRAINT FK_INVOICE_CUSTOMER\nFOREIGN KEY (CUST_NUM) REFERENCES CUSTOMER (CUST_NUM)\nON DELETE CASCADE\nON UPDATE CASCADE;',
          'sql',
          'Referential actions on a foreign key',
        ),
        h(3, 'The Purpose of a CHECK Constraint', 'check-constraint'),
        p(
          'A CHECK constraint restricts the values that can be stored in a column. It is used to enforce a domain, such as a list of allowed codes, a range of numbers, or a date rule. For example, a status column can be restricted to the values IN, OUT and LOST.',
        ),
        code(
          "CREATE TABLE VIDEO (\n  VID_NUM    CHAR(5) PRIMARY KEY,\n  VID_STATUS CHAR(4) DEFAULT 'IN',\n  CONSTRAINT CHK_VID_STATUS CHECK (VID_STATUS IN ('IN', 'OUT', 'LOST'))\n);",
          'sql',
          'CHECK constraint enforcing a domain',
        ),
        h(3, 'Why Use ALTER TABLE?', 'alter-table'),
        p(
          'ALTER TABLE is used to change an existing table structure without dropping and recreating the table and losing its data. It is needed when requirements change: a new attribute must be added, a data type or size must change, a column must be removed, or a constraint must be added or dropped.',
        ),
        table(
          ['Task', 'Typical syntax'],
          [
            ['Add a column', 'ALTER TABLE table_name ADD column_name data_type;'],
            ['Change a column', 'ALTER TABLE table_name MODIFY column_name new_data_type; (Oracle) / ALTER COLUMN in SQL Server'],
            ['Drop a column', 'ALTER TABLE table_name DROP COLUMN column_name;'],
            ['Add a constraint', 'ALTER TABLE table_name ADD CONSTRAINT name constraint_definition;'],
            ['Drop a constraint', 'ALTER TABLE table_name DROP CONSTRAINT name;'],
          ],
          'Common ALTER TABLE operations',
        ),
        code(
          'ALTER TABLE EMP_2\nADD (EMP_PCT NUMBER(4,2), PROJ_NUM CHAR(3));',
          'sql',
          'Adding two attributes to an existing table',
        ),
        h(3, 'Character vs Numeric Data Types for Digits', 'char-vs-numeric'),
        p(
          'An attribute that contains only digits may still be better declared as a character data type. Character storage preserves leading zeros and exact formatting, which matters for identifiers such as telephone numbers, postal codes, student numbers and account numbers that are never used in arithmetic. A numeric data type is appropriate when the value will be calculated, compared numerically or used in aggregate functions. Declaring a formatted identifier as numeric can lose leading zeros and allow meaningless arithmetic.',
        ),
        h(3, 'INSERT vs UPDATE', 'insert-vs-update'),
        table(
          ['Command', 'What it does'],
          [
            ['INSERT', 'Adds new rows to a table.'],
            ['UPDATE', 'Changes values in existing rows; it does not create new rows.'],
          ],
          'INSERT and UPDATE compared',
        ),
        h(3, 'CREATE TABLE vs INSERT with a Subquery', 'create-vs-insert-subquery'),
        p(
          'Using a subquery with CREATE TABLE creates a new table and copies the structure (and optionally the rows) from the query result. Using a subquery with INSERT adds rows to a table that already exists. The CREATE TABLE form defines a new object; the INSERT form populates an existing object.',
        ),
        code(
          'CREATE TABLE EMP_2 AS\nSELECT * FROM EMP_1;',
          'sql',
          'CREATE TABLE ... AS SELECT copies structure and data',
        ),
        code(
          'INSERT INTO EMP_2 (EMP_NUM, EMP_LNAME, EMP_FNAME)\nSELECT EMP_NUM, EMP_LNAME, EMP_FNAME\nFROM EMPLOYEE\nWHERE EMP_NUM > 200;',
          'sql',
          'INSERT ... SELECT adds rows to an existing table',
        ),
        tip(
          'Exam habit',
          'When a question asks for a constraint, say what the constraint enforces (entity, referential or domain integrity) and where it is declared (column or table). When a question asks why ALTER TABLE is needed, connect it to changing requirements without losing existing data.',
        ),
      ],
    },
  ],
  summary: [
    h(2, 'Chapter 8 Summary', 'summary'),
    p(
      'Use this summary immediately before the chapter test. It covers the concepts most likely to be examined and the SQL syntax you should be able to reproduce.',
    ),
    h(3, 'Joins', 'summary-joins'),
    ul([
      'INNER JOIN returns only rows meeting the join condition.',
      'NATURAL JOIN matches on all common columns and removes duplicate columns.',
      'JOIN USING matches on one named common column; do not qualify the column with a table name.',
      'JOIN ON is used when there are no common attributes and the condition is written explicitly.',
      'CROSS JOIN is the Cartesian product.',
      'LEFT, RIGHT and FULL OUTER JOIN also return unmatched rows from the left, right or both tables.',
    ]),
    h(3, 'Subqueries', 'summary-subqueries'),
    ul([
      'A subquery is a query inside another query; the inner query runs first.',
      'A WHERE subquery must return a single value of a comparable type.',
      'IN subqueries compare one attribute with a list of values.',
      'HAVING subqueries restrict grouped rows.',
      '> ALL means greater than the highest; < ALL means less than the lowest; = ANY is equivalent to IN.',
      'A correlated subquery runs once for each outer row and can use EXISTS.',
    ]),
    h(3, 'Set operators and functions', 'summary-set-functions'),
    ul([
      'UNION removes duplicates; UNION ALL keeps them; INTERSECT returns common rows; MINUS returns rows in the first set only.',
      'Relations must be union-compatible: same attribute names and identical data types.',
      'Numeric functions work on one row; aggregate functions work over sets.',
      'Oracle conversion functions: TO_CHAR and TO_DATE. SQL Server uses CAST and CONVERT.',
    ]),
    h(3, 'DML and transaction control', 'summary-dml'),
    ul([
      'INSERT adds rows; UPDATE changes existing rows; DELETE removes rows.',
      'No WHERE in UPDATE or DELETE affects all rows.',
      'COMMIT saves changes permanently; ROLLBACK undoes changes since the last COMMIT.',
      'COMMIT/ROLLBACK apply to DML, not DDL. DDL is auto-committed in Oracle.',
    ]),
    h(3, 'Views and sequences', 'summary-views'),
    ul([
      'A view is a virtual table based on a SELECT query and is stored in the data dictionary.',
      'Views provide security and can be used in place of tables.',
      'Updatable views cannot use GROUP BY, aggregate functions, set operators or most joins.',
      'A materialized view stores its result physically and must be refreshed.',
      'An Oracle sequence is an independent object that generates numeric values; use NEXTVAL and CURRVAL.',
    ]),
    h(3, 'Procedural SQL', 'summary-procedural'),
    ul([
      'Triggers run automatically on INSERT, UPDATE or DELETE; timing is BEFORE or AFTER; level is statement or row.',
      'Stored procedures reduce network traffic and code duplication.',
      'Cursors process multi-row results one row at a time: OPEN, FETCH, CLOSE.',
      'Cursor attributes: %ROWCOUNT, %FOUND, %NOTFOUND, %ISOPEN.',
      'Stored functions return a value and are called from procedures or triggers.',
    ]),
    h(3, 'Embedded SQL and status', 'summary-embedded'),
    ul([
      'Embedded SQL is SQL inside a host language, written with EXEC SQL ... END-EXEC.',
      'Host variables are preceded by a colon and must be declared in the host language.',
      'SQLCA holds SQLCODE and SQLSTATE.',
      'SQLCODE: 0 = success, 100 = no data, negative = error.',
      'SQLSTATE: 00000 = success; otherwise XXYYY with class and subclass codes.',
    ]),
    h(3, 'Constraints and ALTER TABLE', 'summary-constraints'),
    ul([
      'PRIMARY KEY enforces entity integrity; FOREIGN KEY enforces referential integrity.',
      'CHECK enforces a domain; NOT NULL prevents nulls; UNIQUE prevents duplicates; DEFAULT supplies a value.',
      'A column constraint belongs to one column; a table constraint can involve several columns and can be named.',
      'Referential actions: CASCADE, SET NULL, SET DEFAULT, RESTRICT, NO ACTION.',
      'ALTER TABLE adds, changes or drops columns and constraints without losing existing data.',
      'Use a character type for identifiers that only contain digits but are not used in arithmetic.',
    ]),
  ],
  keyTerms: [
    { term: 'Join', definition: 'An operation that merges rows from two tables based on common values or a join condition.' },
    { term: 'Cartesian product', definition: 'The result of a cross join: every row of one table paired with every row of the other.' },
    { term: 'Subquery', definition: 'A query nested inside another query; the inner query executes first.' },
    { term: 'Correlated subquery', definition: 'A subquery that executes once for each row of the outer query and references the outer query.' },
    { term: 'Union-compatible', definition: 'Relations with the same attribute names and identical data types, required for set operators.' },
    { term: 'View', definition: 'A virtual table based on a SELECT query, stored as a query in the data dictionary.' },
    { term: 'Materialized view', definition: 'A view whose result is physically stored and refreshed periodically.' },
    { term: 'Sequence', definition: 'An independent Oracle object that generates numeric values for columns.' },
    { term: 'Trigger', definition: 'Procedural SQL code automatically invoked by the DBMS on a data manipulation event.' },
    { term: 'Stored procedure', definition: 'A named collection of procedural and SQL statements stored at the server.' },
    { term: 'Cursor', definition: 'A construct that holds the rows returned by a query so they can be processed one row at a time.' },
    { term: 'Constraint', definition: 'A DBMS-enforced rule that restricts the data allowed in a table.' },
    { term: 'Entity integrity', definition: 'The rule that each row has a unique, non-null primary key.' },
    { term: 'Referential integrity', definition: 'The rule that a foreign key value must match an existing primary key value or be null.' },
  ],
}
