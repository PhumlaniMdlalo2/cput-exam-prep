import type { Chapter } from '../types'
import { code, def, h, important, note, p, table, tip, ul } from '../helpers'

export const sqlLab: Chapter = {
  id: 'sql-lab',
  number: 7,
  title: 'SQL Lab: Writing SQL for the Exam',
  subtitle: 'A practical, clause-by-clause guide to writing every kind of SQL the paper can ask for',
  description:
    'Learn to write full SQL answers from scratch: single-table queries, grouping, joins, subqueries, set operators, functions, DML, transactions, DDL, constraints, views, sequences, indexes, procedural SQL, and query tuning. Every topic ends with exam-ready syntax you can reproduce under pressure.',
  examWeight: 'Practical SQL — drives Section D (40 marks) and every coding question',
  sections: [
    {
      id: 'sql-method',
      title: 'How to Answer a SQL Question',
      blocks: [
        p(
          'SQL questions are marked clause by clause. You do not lose all the marks for one typo: a marker looks for the SELECT list, the FROM/JOIN, the WHERE condition, the GROUP BY, the HAVING and the ORDER BY. The safest way to earn marks is to build the answer in the same order the clauses are evaluated, then tidy the layout.',
        ),
        h(3, 'Write order vs execution order', 'sql-method-order'),
        table(
          ['Written order (how you type it)', 'Execution order (what the DBMS does)'],
          [
            ['SELECT', 'FROM / JOIN — get the rows'],
            ['FROM / JOIN', 'WHERE — filter rows'],
            ['WHERE', 'GROUP BY — form groups'],
            ['GROUP BY', 'HAVING — filter groups'],
            ['HAVING', 'SELECT — compute the output columns'],
            ['ORDER BY', 'DISTINCT — remove duplicates'],
            ['LIMIT / FETCH', 'ORDER BY — sort the result'],
            ['', 'LIMIT / FETCH — cut the result down'],
          ],
          'The two orders are different — this is why an alias from SELECT cannot be used in WHERE',
        ),
        h(3, 'The skeleton to memorise', 'sql-method-skeleton'),
        code(
          'SELECT   [DISTINCT] column-list\nFROM     table1 [alias]\n  [JOIN table2 ON condition]\nWHERE    row-condition\nGROUP BY grouping-columns\nHAVING   group-condition\nORDER BY sort-columns [ASC|DESC]\nLIMIT    n;',
          'sql',
          'Every SELECT answer is a variation of this skeleton',
        ),
        h(3, 'Rules that earn marks', 'sql-method-rules'),
        ul([
          'Read the schema first and write down the exact column names. Never invent a column.',
          'Put one clause on its own line. Markers scan for clauses, so make them obvious.',
          'Alias tables when two or more tables are used, and qualify every shared column (C.CUST_ID, I.CUST_ID).',
          'Use single quotes for text and dates, no quotes for numbers. Use IS NULL, never = NULL.',
          'Finish every statement with a semicolon. For multi-statement questions, separate statements clearly.',
          'If the question does not name a DBMS, write standard SQL and add a one-line note where Oracle, MySQL and SQL Server differ.',
        ]),
        important(
          'Marks follow the clause',
          'For a 5-mark SQL question, expect roughly one mark per required clause or feature: the correct tables, the join condition, the filter, the grouping/aggregate, and the sorting or output column. Write every clause the question implies, even if you are unsure of the exact syntax.',
        ),
        table(
          ['The question says…', 'The SQL feature being tested'],
          [
            ['“List / show / display…”', 'SELECT with the named columns'],
            ['“…where / only those…”', 'WHERE with the exact condition'],
            ['“…sorted / highest first…”', 'ORDER BY with ASC or DESC'],
            ['“…for each / per / total per…”', 'GROUP BY with an aggregate'],
            ['“…having / groups with more than…”', 'HAVING'],
            ['“…and their / together with…”', 'JOIN on the shared key'],
            ['“…who have never / do not have…”', 'NOT EXISTS or LEFT JOIN … IS NULL'],
            ['“…above the average…”', 'Subquery returning a single value'],
            ['“Create / add / remove a rule…”', 'DDL: CREATE TABLE, ALTER TABLE, constraint'],
          ],
          'Translate the English verb into the SQL feature before you start typing',
        ),
      ],
    },
    {
      id: 'single-table',
      title: 'Single-Table Queries: SELECT, WHERE and ORDER BY',
      blocks: [
        p(
          'Almost every SQL answer starts with a single table. Get this pattern perfect and you can extend it into joins, grouping and subqueries.',
        ),
        code(
          'SELECT CUST_NAME, CUST_CITY, CREDIT_LIMIT\nFROM CUSTOMER\nWHERE CUST_CITY = \'Cape Town\'\n  AND CREDIT_LIMIT > 5000\nORDER BY CUST_NAME ASC;',
          'sql',
          'Filter rows, choose columns, then sort',
        ),
        h(3, 'Comparison and boolean operators', 'single-table-operators'),
        table(
          ['Operator', 'Meaning', 'Example'],
          [
            ['=', 'Equal to', "CUST_CITY = 'Durban'"],
            ['<> or !=', 'Not equal to', "CUST_CITY <> 'Durban'"],
            ['> >= < <=', 'Greater / less than (or equal)', 'CREDIT_LIMIT >= 1000'],
            ['AND', 'Both conditions must be true', 'CITY = \'Durban\' AND CREDIT_LIMIT > 1000'],
            ['OR', 'Either condition may be true', 'CITY = \'Durban\' OR CITY = \'Cape Town\''],
            ['NOT', 'Reverses a condition', 'NOT (CITY = \'Durban\')'],
            ['BETWEEN a AND b', 'Inclusive range', 'CREDIT_LIMIT BETWEEN 1000 AND 5000'],
            ['IN (list)', 'Matches any value in the list', "CITY IN ('Durban', 'Cape Town')"],
            ['LIKE', 'Pattern match with % and _', "CUST_NAME LIKE 'S%'"],
            ['IS NULL / IS NOT NULL', 'Tests for an unknown value', 'CREDIT_LIMIT IS NULL'],
          ],
          'WHERE operators you must recognise instantly',
        ),
        h(3, 'LIKE, BETWEEN, IN and NULL', 'single-table-special'),
        code(
          "-- names starting with S\nSELECT CUST_NAME FROM CUSTOMER WHERE CUST_NAME LIKE 'S%';\n\n-- second letter is a\nSELECT CUST_NAME FROM CUSTOMER WHERE CUST_NAME LIKE '_a%';\n\n-- inclusive range\nSELECT CUST_NAME FROM CUSTOMER WHERE CREDIT_LIMIT BETWEEN 1000 AND 5000;\n\n-- list of values\nSELECT CUST_NAME FROM CUSTOMER\nWHERE CUST_CITY IN ('Durban', 'Cape Town');\n\n-- missing value\nSELECT CUST_NAME FROM CUSTOMER WHERE CREDIT_LIMIT IS NULL;",
          'sql',
          'The four special WHERE patterns',
        ),
        note(
          'AND binds tighter than OR',
          'CITY = \'Durban\' OR CITY = \'Cape Town\' AND CREDIT_LIMIT > 5000 is read as CITY = \'Durban\' OR (CITY = \'Cape Town\' AND CREDIT_LIMIT > 5000). Use brackets to say exactly what you mean.',
        ),
        h(3, 'DISTINCT and calculated columns', 'single-table-distinct'),
        code(
          "SELECT DISTINCT CUST_CITY FROM CUSTOMER;\n\nSELECT CUST_NAME,\n       CREDIT_LIMIT * 12 AS ANNUAL_CREDIT\nFROM CUSTOMER;",
          'sql',
          'Remove duplicate rows; create a derived column with an alias',
        ),
        h(3, 'Sorting', 'single-table-order'),
        code(
          'SELECT CUST_NAME, CUST_CITY, CREDIT_LIMIT\nFROM CUSTOMER\nORDER BY CUST_CITY ASC, CREDIT_LIMIT DESC;',
          'sql',
          'Sort by city, then by the highest credit limit inside each city',
        ),
        ul([
          'ASC is the default; DESC reverses the order.',
          'ORDER BY is always the last clause (before LIMIT).',
          'You may sort by a column you did not select.',
          'LIMIT n (MySQL/PostgreSQL) or SELECT TOP n (SQL Server) or FETCH FIRST n ROWS ONLY (standard/Oracle 12c+) cuts the result down.',
        ]),
        code(
          'SELECT CUST_NAME, CREDIT_LIMIT\nFROM CUSTOMER\nORDER BY CREDIT_LIMIT DESC\nLIMIT 5;',
          'sql',
          'The five customers with the highest credit limits (MySQL/PostgreSQL form)',
        ),
        tip(
          'Exam habit',
          'When a question says “latest”, “highest” or “top”, it is testing ORDER BY … DESC plus a row limit. State the dialect you are using in one short note if the limit syntax differs.',
        ),
      ],
    },
    {
      id: 'aggregates',
      title: 'Aggregate Functions, GROUP BY and HAVING',
      blocks: [
        p(
          'An aggregate function collapses many rows into one value. This is how the paper asks for totals, counts and averages “per” something.',
        ),
        table(
          ['Function', 'Returns'],
          [
            ['COUNT(*)', 'The number of rows in the group, including rows with nulls.'],
            ['COUNT(column)', 'The number of non-null values in that column.'],
            ['SUM(column)', 'The total of the numeric values.'],
            ['AVG(column)', 'The mean of the numeric values.'],
            ['MIN(column) / MAX(column)', 'The smallest or largest value.'],
          ],
          'The five aggregate functions',
        ),
        code(
          'SELECT CUST_CITY,\n       COUNT(*)        AS CUSTOMER_COUNT,\n       AVG(CREDIT_LIMIT) AS AVG_CREDIT\nFROM CUSTOMER\nGROUP BY CUST_CITY;',
          'sql',
          'One output row per city',
        ),
        h(3, 'WHERE filters rows, HAVING filters groups', 'aggregates-where-having'),
        code(
          'SELECT CUST_CITY,\n       COUNT(*) AS CUSTOMER_COUNT\nFROM CUSTOMER\nWHERE CREDIT_LIMIT > 1000      -- rows are filtered first\nGROUP BY CUST_CITY\nHAVING COUNT(*) > 2            -- then groups are filtered\nORDER BY CUSTOMER_COUNT DESC;',
          'sql',
          'Both filters in one query',
        ),
        table(
          ['Clause', 'Runs', 'Filters', 'Can use an aggregate?'],
          [
            ['WHERE', 'Before grouping', 'Individual rows', 'No'],
            ['HAVING', 'After grouping', 'Groups', 'Yes'],
          ],
          'The most examined distinction in this chapter',
        ),
        important(
          'The GROUP BY rule',
          'Every column in the SELECT list must either appear in the GROUP BY clause or be wrapped in an aggregate function. SELECT CUST_CITY, CUST_NAME, COUNT(*) … GROUP BY CUST_CITY is invalid because CUST_NAME is neither grouped nor aggregated.',
        ),
        note(
          'COUNT(*) is not COUNT(column)',
          'COUNT(*) counts rows. COUNT(CREDIT_LIMIT) ignores rows where CREDIT_LIMIT is null. If the question asks how many customers exist, use COUNT(*). If it asks how many have a credit limit recorded, use COUNT(CREDIT_LIMIT).',
        ),
        code(
          'SELECT VEND_ID,\n       COUNT(*)      AS PRODUCTS,\n       MIN(PROD_PRICE) AS CHEAPEST,\n       MAX(PROD_PRICE) AS DEAREST,\n       SUM(PROD_PRICE) AS TOTAL_PRICE\nFROM PRODUCT\nGROUP BY VEND_ID\nHAVING COUNT(*) >= 3;',
          'sql',
          'Several aggregates in one grouped query',
        ),
        tip(
          'Exam habit',
          'Highlight the word “per”, “each”, “every” or “for each” in the question. That word is the instruction to use GROUP BY. Highlight “more than”, “at least” or “whose total” to spot HAVING.',
        ),
      ],
    },
    {
      id: 'joins',
      title: 'Joins: Combining Tables',
      blocks: [
        p(
          'A join returns rows built from two or more tables. The join condition tells the DBMS how the rows are related — almost always a foreign key equal to a primary key.',
        ),
        table(
          ['Join', 'Returns'],
          [
            ['INNER JOIN', 'Only rows that match in both tables.'],
            ['LEFT [OUTER] JOIN', 'All rows from the left table, plus matches from the right; unmatched right columns are null.'],
            ['RIGHT [OUTER] JOIN', 'All rows from the right table, plus matches from the left.'],
            ['FULL [OUTER] JOIN', 'All rows from both tables, matched where possible.'],
            ['CROSS JOIN', 'Every row of the first table paired with every row of the second (Cartesian product).'],
            ['NATURAL JOIN', 'Matches on all columns with the same name and removes the duplicate column.'],
            ['JOIN … USING (col)', 'Matches on one named common column; do not table-qualify it.'],
            ['Self-join', 'A table joined to itself using two different aliases.'],
          ],
          'Join types you must be able to write',
        ),
        h(3, 'INNER JOIN', 'joins-inner'),
        code(
          'SELECT I.INV_ID, I.INV_DATE, C.CUST_NAME\nFROM INVOICE I\n  INNER JOIN CUSTOMER C ON C.CUST_ID = I.CUST_ID\nORDER BY I.INV_DATE;',
          'sql',
          'List each invoice with the customer name',
        ),
        h(3, 'LEFT JOIN', 'joins-left'),
        code(
          'SELECT C.CUST_NAME, I.INV_ID\nFROM CUSTOMER C\n  LEFT JOIN INVOICE I ON C.CUST_ID = I.CUST_ID\nORDER BY C.CUST_NAME;',
          'sql',
          'Every customer, including those with no invoice (their INV_ID is null)',
        ),
        p(
          'To find only the customers with no invoice, add WHERE I.INV_ID IS NULL after the LEFT JOIN. This is the standard “who has never…” pattern and is often easier to mark than NOT EXISTS.',
        ),
        h(3, 'Self-join', 'joins-self'),
        code(
          'SELECT E.EMP_NAME AS EMPLOYEE, M.EMP_NAME AS MANAGER\nFROM EMPLOYEE E\n  LEFT JOIN EMPLOYEE M ON E.MANAGER_ID = M.EMP_ID;',
          'sql',
          'Join a table to itself by giving it two aliases',
        ),
        h(3, 'NATURAL JOIN, USING and CROSS JOIN', 'joins-variants'),
        code(
          '-- natural join: matches every common column name\nSELECT CUST_NAME, INV_ID\nFROM CUSTOMER NATURAL JOIN INVOICE;\n\n-- using: matches one named common column\nSELECT CUST_NAME, INV_ID\nFROM CUSTOMER JOIN INVOICE USING (CUST_ID);\n\n-- cross join: Cartesian product, use with care\nSELECT C.CUST_NAME, P.PROD_DESC\nFROM CUSTOMER C CROSS JOIN PRODUCT P;',
          'sql',
          'The three special join forms',
        ),
        important(
          'Never forget the join condition',
          'FROM A, B with no WHERE link produces a Cartesian product: every A row paired with every B row. The result is wrong and the marker sees it immediately. Use explicit JOIN … ON and check that the ON condition compares the foreign key to the primary key.',
        ),
        code(
          'SELECT C.CUST_NAME, I.INV_ID, L.PROD_ID, P.PROD_DESC\nFROM CUSTOMER C\n  JOIN INVOICE I   ON C.CUST_ID = I.CUST_ID\n  JOIN LINE L      ON I.INV_ID = L.INV_ID\n  JOIN PRODUCT P   ON L.PROD_ID = P.PROD_ID\nWHERE C.CUST_CITY = \'Durban\';',
          'sql',
          'A four-table join: chain one ON condition per table',
        ),
        tip(
          'Exam habit',
          'Build joins one table at a time. Start with the main table, add a JOIN for each related table the question mentions, and write the ON condition immediately. Alias everything with the first letter of the table.',
        ),
      ],
    },
    {
      id: 'subqueries',
      title: 'Subqueries and Correlated Queries',
      blocks: [
        p(
          'A subquery is a SELECT inside another SELECT, written in brackets. The inner query runs first and its result feeds the outer query. Subqueries are how you answer “compared with the average”, “who has never”, and “more than their department”.',
        ),
        h(3, 'A single-value subquery in WHERE', 'subqueries-scalar'),
        code(
          'SELECT PROD_DESC, PROD_PRICE\nFROM PRODUCT\nWHERE PROD_PRICE > (SELECT AVG(PROD_PRICE) FROM PRODUCT);',
          'sql',
          'The inner query returns one number; the outer query compares every row to it',
        ),
        h(3, 'IN and NOT IN', 'subqueries-in'),
        code(
          'SELECT CUST_NAME\nFROM CUSTOMER\nWHERE CUST_ID IN (SELECT CUST_ID FROM INVOICE);',
          'sql',
          'Customers who have at least one invoice — the inner query returns a list',
        ),
        code(
          'SELECT CUST_NAME\nFROM CUSTOMER\nWHERE CUST_ID NOT IN (SELECT CUST_ID FROM INVOICE);',
          'sql',
          'Customers with no invoice — but see the NULL warning below',
        ),
        h(3, 'ANY and ALL', 'subqueries-any-all'),
        table(
          ['Expression', 'Meaning'],
          [
            ['> ALL (subquery)', 'Greater than the highest value in the list.'],
            ['< ALL (subquery)', 'Less than the lowest value in the list.'],
            ['> ANY (subquery)', 'Greater than at least one value in the list.'],
            ['= ANY (subquery)', 'Equivalent to IN (subquery).'],
          ],
          'Multirow comparison operators',
        ),
        code(
          'SELECT EMP_NAME, SALARY\nFROM EMPLOYEE\nWHERE SALARY > ALL (SELECT SALARY FROM EMPLOYEE WHERE DEPT_ID = 20);',
          'sql',
          'Employees paid more than everyone in department 20',
        ),
        h(3, 'EXISTS and correlated subqueries', 'subqueries-exists'),
        p(
          'A correlated subquery references a column from the outer query, so it runs once for each outer row. EXISTS is true as soon as the inner query returns any row, which makes it fast for “does a related row exist?” questions.',
        ),
        code(
          'SELECT C.CUST_NAME\nFROM CUSTOMER C\nWHERE EXISTS (\n  SELECT 1\n  FROM INVOICE I\n  WHERE I.CUST_ID = C.CUST_ID\n);',
          'sql',
          'Customers with at least one invoice — the inner query references C.CUST_ID',
        ),
        code(
          'SELECT C.CUST_NAME\nFROM CUSTOMER C\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM INVOICE I\n  WHERE I.CUST_ID = C.CUST_ID\n);',
          'sql',
          'Customers who have never placed an invoice — the safest “never” pattern',
        ),
        h(3, 'A subquery in FROM (a derived table)', 'subqueries-from'),
        code(
          'SELECT CUST_ID, TOTAL_SPENT\nFROM (\n  SELECT CUST_ID, SUM(INV_TOTAL) AS TOTAL_SPENT\n  FROM INVOICE\n  GROUP BY CUST_ID\n) AS SPENDING\nWHERE TOTAL_SPENT > 10000;',
          'sql',
          'Group first in a subquery, then filter the grouped result in the outer query',
        ),
        important(
          'The NOT IN NULL trap',
          'If the subquery returns a NULL, NOT IN can return no rows at all, because comparing with NULL is unknown. Use NOT EXISTS when the column may be null, or add WHERE CUST_ID IS NOT NULL inside the subquery.',
        ),
        tip(
          'Exam habit',
          'If the question says “average”, “minimum”, “maximum” or “total of all”, write the inner SELECT first and put it in brackets after the comparison operator. If it says “never”, “does not have” or “has no”, choose NOT EXISTS or LEFT JOIN … IS NULL.',
        ),
      ],
    },
    {
      id: 'set-functions',
      title: 'Set Operators and SQL Functions',
      blocks: [
        p(
          'Set operators combine the results of two complete SELECT statements. The queries must be union-compatible: the same number of columns, in the same order, with compatible data types.',
        ),
        table(
          ['Operator', 'Returns', 'Duplicates'],
          [
            ['UNION', 'All rows from both queries', 'Removed'],
            ['UNION ALL', 'All rows from both queries', 'Kept'],
            ['INTERSECT', 'Only rows that appear in both results', 'Removed'],
            ['MINUS (Oracle) / EXCEPT (standard, SQL Server, PostgreSQL)', 'Rows in the first result that are not in the second', 'Removed'],
          ],
          'The four set operators',
        ),
        code(
          "SELECT CUST_NAME, CUST_CITY FROM CUSTOMER WHERE CUST_CITY = 'Durban'\nUNION\nSELECT CUST_NAME, CUST_CITY FROM CUSTOMER WHERE CUST_CITY = 'Cape Town'\nORDER BY CUST_CITY, CUST_NAME;",
          'sql',
          'UNION removes duplicate rows; ORDER BY goes once at the very end',
        ),
        code(
          'SELECT CUST_ID FROM INVOICE\nINTERSECT\nSELECT CUST_ID FROM CREDIT_NOTE;',
          'sql',
          'Customers who appear in both tables',
        ),
        code(
          'SELECT CUST_ID FROM INVOICE\nMINUS\nSELECT CUST_ID FROM CREDIT_NOTE;',
          'sql',
          'Customers with an invoice but no credit note (use EXCEPT outside Oracle)',
        ),
        note(
          'UNION vs UNION ALL',
          'UNION sorts and removes duplicates, so it is slower. UNION ALL keeps duplicates and is faster. The paper often asks for the difference: duplicates, and therefore performance.',
        ),
        h(3, 'Built-in functions', 'set-functions-builtin'),
        table(
          ['Category', 'Typical functions', 'Example'],
          [
            ['String', 'UPPER, LOWER, LENGTH/LEN, SUBSTR/SUBSTRING, TRIM, CONCAT or ||', "UPPER(CUST_NAME)"],
            ['Numeric', 'ROUND, ABS, CEIL/CEILING, FLOOR, MOD', 'ROUND(PROD_PRICE, 2)'],
            ['Date', 'CURRENT_DATE, SYSDATE, TO_CHAR, TO_DATE, DATEDIFF, DATEADD', "TO_CHAR(INV_DATE, 'YYYY-MM')"],
            ['Conversion', 'CAST, CONVERT, TO_CHAR, TO_DATE', 'CAST(CREDIT_LIMIT AS CHAR(10))'],
          ],
          'Functions are grouped by the kind of value they return',
        ),
        code(
          "SELECT UPPER(CUST_NAME) AS NAME_IN_CAPS,\n       ROUND(CREDIT_LIMIT, 0) AS ROUNDED_CREDIT,\n       LENGTH(CUST_NAME) AS NAME_LENGTH\nFROM CUSTOMER;",
          'sql',
          'Functions can appear in the SELECT list',
        ),
        code(
          "SELECT CUST_NAME, TO_CHAR(INV_DATE, 'DD MON YYYY') AS INVOICE_DAY\nFROM CUSTOMER C JOIN INVOICE I ON C.CUST_ID = I.CUST_ID\nWHERE INV_DATE >= TO_DATE('01-JAN-2024', 'DD-MON-YYYY');",
          'sql',
          'Oracle conversion functions: TO_CHAR and TO_DATE',
        ),
        note(
          'Do not confuse the two families',
          'Aggregate functions (SUM, AVG, COUNT) work over many rows. Scalar functions (UPPER, ROUND, TO_CHAR) work on one row at a time. A common exam error is using UPPER inside GROUP BY thinking it aggregates.',
        ),
        tip(
          'Exam habit',
          'Write standard SQL (CAST, || or CONCAT) unless the question names Oracle or SQL Server. If you use a vendor function such as NVL, SYSDATE or IFNULL, add its standard equivalent in a short note.',
        ),
      ],
    },
    {
      id: 'dml',
      title: 'DML and Transactions: INSERT, UPDATE, DELETE',
      blocks: [
        p(
          'Data manipulation changes the rows, not the structure. Every DML question is marked on the target table, the column list, the values or subquery, and the WHERE clause.',
        ),
        h(3, 'INSERT one row', 'dml-insert-values'),
        code(
          "INSERT INTO CUSTOMER (CUST_ID, CUST_NAME, CUST_CITY, CREDIT_LIMIT)\nVALUES (101, 'Ndlovu', 'Durban', 7500);",
          'sql',
          'List the columns in the same order as the values. Text and dates go in quotes; numbers do not',
        ),
        h(3, 'INSERT rows from another table', 'dml-insert-select'),
        code(
          'INSERT INTO CUSTOMER_ARCHIVE (CUST_ID, CUST_NAME, CUST_CITY)\nSELECT CUST_ID, CUST_NAME, CUST_CITY\nFROM CUSTOMER\nWHERE CUST_CITY = \'Durban\';',
          'sql',
          'INSERT … SELECT copies rows; the SELECT must match the target columns in number, order and type',
        ),
        h(3, 'UPDATE', 'dml-update'),
        code(
          'UPDATE PRODUCT\nSET PROD_PRICE = PROD_PRICE * 1.10\nWHERE VEND_ID = 5;',
          'sql',
          'Change existing rows; arithmetic may use the old value',
        ),
        code(
          'UPDATE CUSTOMER\nSET CREDIT_LIMIT = CREDIT_LIMIT + 1000\nWHERE CUST_ID IN (\n  SELECT CUST_ID FROM INVOICE WHERE INV_TOTAL > 5000\n);',
          'sql',
          'UPDATE with a subquery: give a raise to customers who spend a lot',
        ),
        h(3, 'DELETE', 'dml-delete'),
        code(
          "DELETE FROM INVOICE\nWHERE INV_DATE < '2023-01-01';",
          'sql',
          'Remove rows that match the condition',
        ),
        code(
          'DELETE FROM CUSTOMER\nWHERE CUST_ID NOT IN (SELECT CUST_ID FROM INVOICE);',
          'sql',
          'Remove customers with no invoices (beware the NOT IN NULL trap)',
        ),
        important(
          'No WHERE means every row',
          'UPDATE PRODUCT SET PROD_PRICE = 0 with no WHERE changes every product. DELETE FROM INVOICE with no WHERE empties the table. If the question wants every row, say so; otherwise always write the WHERE clause.',
        ),
        h(3, 'COMMIT, ROLLBACK and SAVEPOINT', 'dml-transactions'),
        code(
          'START TRANSACTION;\nUPDATE PRODUCT SET PROD_QOH = PROD_QOH - 5 WHERE PROD_ID = 100;\n-- check the update, then either:\nCOMMIT;\n-- or undo everything since the start:\nROLLBACK;',
          'sql',
          'A transaction groups DML so it can be saved or undone as one unit',
        ),
        ul([
          'COMMIT permanently saves every change since the last COMMIT.',
          'ROLLBACK undoes every change since the last COMMIT (or since the transaction started).',
          'SAVEPOINT name marks a point you can roll back to without losing the whole transaction: ROLLBACK TO SAVEPOINT name;',
          'COMMIT and ROLLBACK apply to DML (INSERT, UPDATE, DELETE), not to DDL. In Oracle, DDL such as CREATE TABLE is auto-committed.',
          'In MySQL, each statement auto-commits unless you start a transaction with START TRANSACTION or BEGIN.',
        ]),
        tip(
          'Exam habit',
          'If a question says “then commit” or “include a rollback path”, write the transaction keywords explicitly. If it says “reduce the quantity by 5”, write the arithmetic against the old value: SET PROD_QOH = PROD_QOH - 5.',
        ),
      ],
    },
    {
      id: 'ddl',
      title: 'DDL, Constraints and ALTER TABLE',
      blocks: [
        p(
          'DDL defines and changes the structure of the database. In this section you learn to write CREATE TABLE with every constraint, change a table with ALTER TABLE, and choose the correct data type.',
        ),
        h(3, 'CREATE TABLE with constraints', 'ddl-create-table'),
        code(
          'CREATE TABLE EMPLOYEE (\n  EMP_ID     CHAR(4)      NOT NULL,\n  EMP_NAME   VARCHAR(40)  NOT NULL,\n  SALARY     DECIMAL(10,2) DEFAULT 0,\n  DEPT_ID    CHAR(3),\n  HIRE_DATE  DATE,\n  CONSTRAINT PK_EMPLOYEE PRIMARY KEY (EMP_ID),\n  CONSTRAINT FK_EMPLOYEE_DEPT FOREIGN KEY (DEPT_ID)\n    REFERENCES DEPARTMENT (DEPT_ID),\n  CONSTRAINT CHK_SALARY CHECK (SALARY >= 0)\n);',
          'sql',
          'Column constraints are written beside the column; table constraints are named separately at the end',
        ),
        table(
          ['Constraint', 'What it enforces', 'Example'],
          [
            ['PRIMARY KEY', 'Entity integrity: unique, non-null row identifier', 'PRIMARY KEY (EMP_ID)'],
            ['FOREIGN KEY', 'Referential integrity: the value must exist in the parent table', 'FOREIGN KEY (DEPT_ID) REFERENCES DEPARTMENT (DEPT_ID)'],
            ['NOT NULL', 'Domain integrity: no missing value', 'EMP_NAME VARCHAR(40) NOT NULL'],
            ['UNIQUE', 'No duplicate non-null values', 'UNIQUE (EMAIL)'],
            ['CHECK', 'A condition or list of allowed values', "CHECK (STATUS IN ('IN','OUT','LOST'))"],
            ['DEFAULT', 'Supplies a value when none is given', "STATUS CHAR(4) DEFAULT 'IN'"],
          ],
          'The six constraints',
        ),
        h(3, 'Referential actions', 'ddl-referential-actions'),
        table(
          ['Action', 'Effect when the parent row is deleted or updated'],
          [
            ['CASCADE', 'Apply the same change to the child rows (delete the children or update their key).'],
            ['SET NULL', 'Set the child foreign key to null.'],
            ['SET DEFAULT', 'Set the child foreign key to its default value.'],
            ['RESTRICT / NO ACTION', 'Reject the change while child rows exist.'],
          ],
          'ON DELETE and ON UPDATE actions',
        ),
        code(
          'ALTER TABLE INVOICE\n  ADD CONSTRAINT FK_INVOICE_CUSTOMER\n  FOREIGN KEY (CUST_ID) REFERENCES CUSTOMER (CUST_ID)\n  ON DELETE CASCADE\n  ON UPDATE CASCADE;',
          'sql',
          'Delete a customer and all their invoices automatically',
        ),
        h(3, 'ALTER TABLE', 'ddl-alter-table'),
        code(
          'ALTER TABLE EMPLOYEE ADD EMAIL VARCHAR(100);\n\nALTER TABLE EMPLOYEE MODIFY SALARY DECIMAL(12,2);   -- Oracle\n-- ALTER TABLE EMPLOYEE ALTER COLUMN SALARY DECIMAL(12,2); -- SQL Server\n\nALTER TABLE EMPLOYEE DROP COLUMN EMAIL;\n\nALTER TABLE EMPLOYEE ADD CONSTRAINT CHK_SALARY CHECK (SALARY >= 0);\n\nALTER TABLE EMPLOYEE DROP CONSTRAINT CHK_SALARY;',
          'sql',
          'Add, change and remove columns and constraints without losing data',
        ),
        h(3, 'Other DDL you may be asked for', 'ddl-other'),
        code(
          '-- copy structure and data into a new table\nCREATE TABLE EMPLOYEE_BACKUP AS\nSELECT * FROM EMPLOYEE;\n\n-- remove all rows but keep the table (DDL, cannot be rolled back in Oracle)\nTRUNCATE TABLE EMPLOYEE_BACKUP;\n\n-- remove the table completely\nDROP TABLE EMPLOYEE_BACKUP;',
          'sql',
          'CREATE TABLE … AS SELECT, TRUNCATE and DROP',
        ),
        important(
          'Choosing a data type',
          'Use a character type for identifiers that only contain digits but are never used in arithmetic — telephone numbers, postal codes, student numbers, account numbers. It preserves leading zeros and prevents meaningless arithmetic. Use a numeric type when the value will be calculated, compared numerically or aggregated.',
        ),
        tip(
          'Exam habit',
          'When asked for a constraint, say what it enforces (entity, referential or domain integrity) and whether it is a column constraint or a table constraint. Name table constraints with a clear prefix such as PK_, FK_ or CHK_.',
        ),
      ],
    },
    {
      id: 'views-sequences-indexes',
      title: 'Views, Sequences and Indexes',
      blocks: [
        h(3, 'Creating and using a view', 'views-create'),
        def(
          'View',
          'A virtual table based on a stored SELECT query. It holds no data of its own; it is rebuilt from the base tables each time it is queried.',
        ),
        code(
          'CREATE VIEW V_CUSTOMER_INVOICE AS\nSELECT C.CUST_NAME, I.INV_ID, I.INV_TOTAL\nFROM CUSTOMER C JOIN INVOICE I ON C.CUST_ID = I.CUST_ID;',
          'sql',
          'The view stores the query, not the rows',
        ),
        code(
          'CREATE OR REPLACE VIEW V_CITY_STATS AS\nSELECT CUST_CITY,\n       COUNT(*)          AS CUSTOMERS,\n       AVG(CREDIT_LIMIT) AS AVG_CREDIT\nFROM CUSTOMER\nGROUP BY CUST_CITY;',
          'sql',
          'A view can summarise data for reports',
        ),
        ul([
          'A view is used exactly like a table: SELECT * FROM V_CITY_STATS;',
          'Views provide security by exposing only chosen rows and columns.',
          'A view is updatable only if it maps simply back to one base table.',
          'A view is not updatable if it uses GROUP BY, aggregate functions, set operators, DISTINCT or most joins.',
        ]),
        note(
          'Materialized view',
          'An ordinary view is virtual and always current. A materialized view stores the result physically, so it is fast to read but can be stale until it is refreshed. Use it for expensive joins and aggregates that do not need to be real-time.',
        ),
        h(3, 'Sequences', 'sequences'),
        p(
          'A sequence is an independent object that generates numbers. It is not tied to a table or column, and it is the Oracle equivalent of AutoNumber / IDENTITY.',
        ),
        code(
          'CREATE SEQUENCE SEQ_CUST_ID\nSTART WITH 1000\nINCREMENT BY 1;\n\nINSERT INTO CUSTOMER (CUST_ID, CUST_NAME, CUST_CITY)\nVALUES (SEQ_CUST_ID.NEXTVAL, \'Mokoena\', \'Pretoria\');',
          'sql',
          'NEXTVAL generates the next number; CURRVAL returns the current number for the session',
        ),
        h(3, 'Indexes', 'indexes'),
        def(
          'Index',
          'An ordered structure that lets the DBMS find rows without scanning the whole table. It speeds up lookups on the indexed column but adds work to INSERT, UPDATE and DELETE.',
        ),
        code(
          'CREATE INDEX IDX_CUST_NAME ON CUSTOMER (CUST_NAME);\n\nCREATE UNIQUE INDEX IDX_CUST_EMAIL ON CUSTOMER (EMAIL);\n\nDROP INDEX IDX_CUST_NAME;',
          'sql',
          'Create, make unique, and drop an index',
        ),
        ul([
          'Index columns used often in WHERE, JOIN … ON and ORDER BY.',
          'Indexes help most when the column has high selectivity: many different values, few duplicate rows.',
          'A primary key is indexed automatically in most DBMSs; a foreign key is not always indexed.',
          'Too many indexes slow down data changes and waste space.',
        ]),
        tip(
          'Exam habit',
          'A sequence question usually wants three things: CREATE SEQUENCE with START WITH and INCREMENT BY, then an INSERT that uses name.NEXTVAL. An index question wants CREATE INDEX name ON table (column), plus one sentence on selectivity.',
        ),
      ],
    },
    {
      id: 'procedural',
      title: 'Procedural and Embedded SQL',
      blocks: [
        p(
          'Procedural SQL stores code inside the database. The paper may ask you to recognise it, complete it, or explain when it runs.',
        ),
        h(3, 'Triggers', 'procedural-triggers'),
        p(
          'A trigger is code the DBMS runs automatically when a data-change event happens. Its definition states the timing (BEFORE or AFTER), the event (INSERT, UPDATE or DELETE), the level (statement or row) and the action.',
        ),
        code(
          'CREATE OR REPLACE TRIGGER TRG_UPDATE_BALANCE\nAFTER INSERT ON INVOICE\nFOR EACH ROW\nBEGIN\n  UPDATE CUSTOMER\n  SET CUST_BALANCE = CUST_BALANCE + :NEW.INV_TOTAL\n  WHERE CUST_ID = :NEW.CUST_ID;\nEND;\n/',
          'sql',
          ':NEW refers to the row being inserted; :OLD refers to the row being deleted or updated',
        ),
        note(
          'Trigger timing and level',
          'BEFORE runs before the change is applied, AFTER runs after it. A statement-level trigger fires once for the whole statement; a row-level trigger fires once per affected row (FOR EACH ROW). Use row-level when the action needs :NEW or :OLD values.',
        ),
        h(3, 'Stored procedures and functions', 'procedural-procedures'),
        code(
          'CREATE OR REPLACE PROCEDURE PRC_ADD_CUSTOMER (\n  P_ID    IN CUSTOMER.CUST_ID%TYPE,\n  P_NAME  IN CUSTOMER.CUST_NAME%TYPE,\n  P_CITY  IN CUSTOMER.CUST_CITY%TYPE\n) AS\nBEGIN\n  INSERT INTO CUSTOMER (CUST_ID, CUST_NAME, CUST_CITY)\n  VALUES (P_ID, P_NAME, P_CITY);\nEND;\n/',
          'sql',
          'A stored procedure: named code stored on the server and called by name',
        ),
        ul([
          'A stored procedure reduces network traffic because the statements are not sent one by one from the client.',
          'It reduces duplication and centralises business logic, which lowers maintenance cost.',
          'A stored function returns a value and is called from a procedure, a trigger or (in some DBMSs) a SQL statement.',
        ]),
        h(3, 'Cursors', 'procedural-cursors'),
        p(
          'A cursor holds the rows returned by a query so procedural code can process them one at a time. The pattern is DECLARE, OPEN, FETCH, exit when there are no more rows, then CLOSE.',
        ),
        code(
          'DECLARE\n  CURSOR C_CUSTOMER IS\n    SELECT CUST_ID, CUST_NAME FROM CUSTOMER;\n  V_ID   CUSTOMER.CUST_ID%TYPE;\n  V_NAME CUSTOMER.CUST_NAME%TYPE;\nBEGIN\n  OPEN C_CUSTOMER;\n  LOOP\n    FETCH C_CUSTOMER INTO V_ID, V_NAME;\n    EXIT WHEN C_CUSTOMER%NOTFOUND;\n    DBMS_OUTPUT.PUT_LINE(V_ID || \' \' || V_NAME);\n  END LOOP;\n  CLOSE C_CUSTOMER;\nEND;\n/',
          'sql',
          'The standard cursor loop; %NOTFOUND ends it',
        ),
        table(
          ['Cursor attribute', 'Meaning'],
          [
            ['%ROWCOUNT', 'Number of rows fetched so far.'],
            ['%FOUND', 'True if the last FETCH returned a row.'],
            ['%NOTFOUND', 'True if the last FETCH returned no row; used to EXIT the loop.'],
            ['%ISOPEN', 'True while the cursor is open.'],
          ],
          'Cursor attributes',
        ),
        h(3, 'Embedded SQL', 'procedural-embedded'),
        code(
          'EXEC SQL\n  UPDATE CUSTOMER\n  SET CREDIT_LIMIT = CREDIT_LIMIT + 500\n  WHERE CUST_ID = :W_CUST_ID;\nEND-EXEC;',
          'sql',
          'Embedded SQL sits inside a host language; host variables start with a colon',
        ),
        table(
          ['Status variable', 'Value', 'Meaning'],
          [
            ['SQLCODE', '0', 'Success.'],
            ['SQLCODE', '100', 'No data found.'],
            ['SQLCODE', 'negative', 'An error occurred.'],
            ['SQLSTATE', '00000', 'Success.'],
            ['SQLSTATE', 'XXYYY', 'Class code XX and subclass code YYY describe the condition.'],
          ],
          'How embedded SQL reports what happened',
        ),
        note(
          'Static vs dynamic SQL',
          'Static SQL is written in advance and cannot change while the program runs, so it is fast and predictable. Dynamic SQL is built at run time from user input; it is flexible but slower and uses more resources.',
        ),
      ],
    },
    {
      id: 'sql-tuning',
      title: 'Writing SQL That Performs',
      blocks: [
        p(
          'Chapter 11 examines performance. In a SQL question this usually appears as “rewrite the query to use an index” or “explain why this query is slow”. The key idea is to keep the indexed column alone on one side of the comparison.',
        ),
        table(
          ['Avoid', 'Write instead', 'Why'],
          [
            ["WHERE UPPER(CUST_NAME) = 'SMITH'", "WHERE CUST_NAME = 'SMITH' (store data consistently)", 'A function on the column usually stops the index being used.'],
            ["WHERE PROD_PRICE * 1.1 > 100", 'WHERE PROD_PRICE > 100 / 1.1', 'The calculation is moved to the constant side.'],
            ["WHERE INV_DATE >= TO_DATE('2024-01-01')", 'Compare dates in their native type', 'Conversion on the column defeats the index.'],
            ['SELECT *', 'SELECT only the needed columns', 'Less data read and less network traffic.'],
            ['… AND column LIKE \'%son\'', 'Avoid a leading wildcard when possible', 'The index is ordered from the left, so a leading % cannot be used.'],
          ],
          'Sargable predicates: keep the column bare',
        ),
        code(
          'EXPLAIN\nSELECT CUST_NAME\nFROM CUSTOMER\nWHERE CUST_CITY = \'Durban\';',
          'sql',
          'EXPLAIN shows the access plan: scan, index lookup, join order and cost',
        ),
        ul([
          'Index selectivity: a column with many distinct values (an email address) is very selective; a column with few values (a status flag) is not.',
          'Use EXISTS instead of IN when checking for related rows, because EXISTS can stop at the first match.',
          'Avoid unnecessary DISTINCT and unnecessary sorting; they add work.',
          'Keep statistics up to date so the optimizer can choose a good plan.',
          'An optimizer hint (for example /*+ INDEX(C IDX_CUST_NAME) */) forces a plan, but it is a last resort.',
        ]),
        tip(
          'Exam habit',
          'If a question shows a slow query, name the problem (function on the indexed column, leading wildcard, SELECT *, missing index, Cartesian product) and then rewrite it. Two or three specific sentences earn the marks.',
        ),
      ],
    },
    {
      id: 'explain-patterns',
      title: 'Worked Exam Patterns',
      blocks: [
        p(
          'These are the eight shapes that appear most often in the SQL section. Learn the shape, not just the example: swap in the tables and columns the paper gives you.',
        ),
        h(3, 'Pattern 1 — List with a filter and a sort', 'patterns-list'),
        code(
          "SELECT CUST_NAME, CREDIT_LIMIT\nFROM CUSTOMER\nWHERE CUST_CITY = 'Durban' AND CREDIT_LIMIT > 5000\nORDER BY CREDIT_LIMIT DESC;",
          'sql',
          '“List the customers in Durban with a credit limit above 5000, highest first.”',
        ),
        h(3, 'Pattern 2 — Per-group totals with a HAVING filter', 'patterns-group'),
        code(
          'SELECT CUST_CITY, COUNT(*) AS TOTAL, AVG(CREDIT_LIMIT) AS AVERAGE\nFROM CUSTOMER\nGROUP BY CUST_CITY\nHAVING COUNT(*) > 2;',
          'sql',
          '“For each city with more than two customers, show the number and the average credit limit.”',
        ),
        h(3, 'Pattern 3 — Join two tables', 'patterns-join'),
        code(
          'SELECT I.INV_ID, I.INV_DATE, C.CUST_NAME\nFROM INVOICE I JOIN CUSTOMER C ON I.CUST_ID = C.CUST_ID\nWHERE I.INV_TOTAL > 1000;',
          'sql',
          '“List every invoice over 1000 with the customer name.”',
        ),
        h(3, 'Pattern 4 — Include rows that have no match', 'patterns-outer'),
        code(
          'SELECT C.CUST_NAME, COUNT(I.INV_ID) AS INVOICES\nFROM CUSTOMER C LEFT JOIN INVOICE I ON C.CUST_ID = I.CUST_ID\nGROUP BY C.CUST_NAME\nORDER BY INVOICES DESC;',
          'sql',
          '“Show every customer and how many invoices they have, including customers with none.”',
        ),
        h(3, 'Pattern 5 — Compare with the average', 'patterns-average'),
        code(
          'SELECT PROD_DESC, PROD_PRICE\nFROM PRODUCT\nWHERE PROD_PRICE > (SELECT AVG(PROD_PRICE) FROM PRODUCT);',
          'sql',
          '“List the products priced above the average product price.”',
        ),
        h(3, 'Pattern 6 — Who has never…', 'patterns-never'),
        code(
          'SELECT C.CUST_NAME\nFROM CUSTOMER C\nWHERE NOT EXISTS (\n  SELECT 1 FROM INVOICE I WHERE I.CUST_ID = C.CUST_ID\n);',
          'sql',
          '“List the customers who have never placed an invoice.”',
        ),
        h(3, 'Pattern 7 — More than their own group', 'patterns-correlated'),
        code(
          'SELECT E.EMP_NAME, E.SALARY, E.DEPT_ID\nFROM EMPLOYEE E\nWHERE E.SALARY > (\n  SELECT AVG(E2.SALARY)\n  FROM EMPLOYEE E2\n  WHERE E2.DEPT_ID = E.DEPT_ID\n);',
          'sql',
          '“List employees paid more than the average salary of their own department.”',
        ),
        h(3, 'Pattern 8 — Combine two result sets', 'patterns-set'),
        code(
          "SELECT CUST_NAME, 'DURBAN' AS SOURCE FROM CUSTOMER WHERE CUST_CITY = 'Durban'\nUNION ALL\nSELECT CUST_NAME, 'CAPE TOWN' AS SOURCE FROM CUSTOMER WHERE CUST_CITY = 'Cape Town';",
          'sql',
          '“Return the Durban and Cape Town customers in one list, keeping duplicates.”',
        ),
        important(
          'The 40-mark SQL section',
          'Work through the questions in order of confidence, but answer every one. Each answer is a small number of clauses: tables, join, filter, group, sort. Do not spend ten minutes perfecting one query while three easy queries are left blank.',
        ),
      ],
    },
  ],
  summary: [
    h(2, 'SQL Lab Summary', 'summary'),
    p(
      'Use this page in the last hour before the paper. If you can write each pattern below without looking, you can answer the SQL section.',
    ),
    h(3, 'Clause order', 'summary-clauses'),
    ul([
      'Written order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.',
      'Execution order: FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY, LIMIT.',
      'Every non-aggregate column in SELECT must appear in GROUP BY.',
      'WHERE filters rows; HAVING filters groups and may use aggregates.',
    ]),
    h(3, 'Single-table and grouping', 'summary-single'),
    ul([
      'Text and dates in single quotes; numbers without quotes; IS NULL instead of = NULL.',
      'LIKE uses % for any sequence and _ for one character.',
      'ORDER BY goes last; DESC reverses it; LIMIT/TOP/FETCH cuts the result.',
      'COUNT(*) counts rows; COUNT(column) counts non-null values.',
    ]),
    h(3, 'Joins and subqueries', 'summary-joins-subqueries'),
    ul([
      'INNER JOIN keeps matches; LEFT/RIGHT/FULL keep unmatched rows too; CROSS is the Cartesian product.',
      'Always write the ON condition comparing foreign key to primary key.',
      'LEFT JOIN … WHERE right-key IS NULL finds rows with no match.',
      'A scalar subquery returns one value; IN returns a list; EXISTS tests for any related row.',
      'A correlated subquery runs once per outer row and references the outer query.',
      'NOT EXISTS is safer than NOT IN when the subquery can return null.',
    ]),
    h(3, 'Set operators and functions', 'summary-set'),
    ul([
      'UNION removes duplicates; UNION ALL keeps them; INTERSECT returns common rows; MINUS/EXCEPT returns first-set-only rows.',
      'Queries must be union-compatible: same columns, same order, compatible types.',
      'ORDER BY is written once at the end of the whole set operation.',
      'String: UPPER, LOWER, LENGTH, SUBSTR, CONCAT/||. Numeric: ROUND, ABS, CEIL, FLOOR. Conversion: CAST, TO_CHAR, TO_DATE.',
    ]),
    h(3, 'DML and transactions', 'summary-dml'),
    ul([
      'INSERT … VALUES for one row; INSERT … SELECT to copy rows.',
      'UPDATE table SET column = expression WHERE condition; arithmetic uses the old value.',
      'DELETE FROM table WHERE condition; no WHERE means every row.',
      'COMMIT saves; ROLLBACK undoes; SAVEPOINT marks a partial rollback point.',
      'DML can be rolled back; DDL is auto-committed in Oracle.',
    ]),
    h(3, 'DDL and objects', 'summary-ddl'),
    ul([
      'PRIMARY KEY = entity integrity; FOREIGN KEY = referential integrity; CHECK/NOT NULL = domain integrity.',
      'Referential actions: CASCADE, SET NULL, SET DEFAULT, RESTRICT/NO ACTION.',
      'ALTER TABLE adds, modifies or drops columns and constraints without losing data.',
      'A view stores a query; it is updatable only if it maps simply to one base table.',
      'A sequence is independent of any table: CREATE SEQUENCE, then NEXTVAL.',
      'An index speeds up reads on selective columns and slows down writes.',
    ]),
    h(3, 'Procedural and tuning', 'summary-procedural'),
    ul([
      'Trigger: BEFORE/AFTER, INSERT/UPDATE/DELETE, statement/row, action; :NEW and :OLD.',
      'Procedure: named server code; function: returns a value.',
      'Cursor: DECLARE, OPEN, FETCH, EXIT WHEN %NOTFOUND, CLOSE.',
      'Embedded SQL uses EXEC SQL … END-EXEC, host variables with a colon, and SQLCODE/SQLSTATE.',
      'Keep the indexed column bare in WHERE; avoid functions on it and leading wildcards.',
    ]),
  ],
  keyTerms: [
    { term: 'Predicate', definition: 'A condition in WHERE or HAVING that is either true, false or unknown for each row.' },
    { term: 'Sargable', definition: 'A condition the DBMS can evaluate with an index, usually because the indexed column is not wrapped in a function.' },
    { term: 'Aggregate function', definition: 'A function that reduces many rows to one value, such as COUNT, SUM, AVG, MIN or MAX.' },
    { term: 'Group', definition: 'The set of rows that share the same values in the GROUP BY columns.' },
    { term: 'Join condition', definition: 'The ON or USING expression that tells the DBMS which rows from two tables belong together.' },
    { term: 'Cartesian product', definition: 'The result of joining every row of one table to every row of another, usually a mistake when a join condition is missing.' },
    { term: 'Correlated subquery', definition: 'A subquery that references the outer query and therefore runs once for each outer row.' },
    { term: 'Derived table', definition: 'A subquery used in the FROM clause as if it were a table.' },
    { term: 'Union-compatible', definition: 'Two queries with the same number of columns, in the same order, with compatible data types.' },
    { term: 'Constraint', definition: 'A DBMS-enforced rule that restricts the data allowed in a table.' },
    { term: 'Referential action', definition: 'What happens to child rows when the parent key is updated or deleted: CASCADE, SET NULL, SET DEFAULT, RESTRICT.' },
    { term: 'View', definition: 'A virtual table stored as a query and rebuilt each time it is used.' },
    { term: 'Sequence', definition: 'An independent database object that generates numeric values.' },
    { term: 'Index', definition: 'An ordered access structure that speeds up row lookup on a column.' },
    { term: 'Transaction', definition: 'A group of DML statements that is committed or rolled back as one unit.' },
  ],
}
