
const mysqlQues = [
    {
        "id": 21,
        "question": "Which clause is used to remove duplicate rows from a SELECT query result?",
        "options": [
            "REMOVE DUPLICATES",
            "DISTINCT",
            "NO DUPLICATE",
            "UNIQUE"
        ],
        "answer": "DISTINCT",
        "roles": ["backend", "fullstack"],
          "type": "mysql"
    },
    {
        "id": 22,
        "question": "What does the COUNT(*) function do in SQL?",
        "options": [
            "Counts only non-null values",
            "Counts only unique rows",
            "Counts all rows including duplicates and nulls",
            "Counts columns"
        ],
        "answer": "Counts all rows including duplicates and nulls",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 23,
        "question": "Which SQL clause is used to sort the result-set?",
        "options": [
            "SORT BY",
            "ORDER BY",
            "GROUP BY",
            "ARRANGE BY"
        ],
        "answer": "ORDER BY",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 24,
        "question": "What does the TRUNCATE command do in MySQL?",
        "options": [
            "Deletes selected rows",
            "Removes all rows without logging individual row deletions",
            "Removes a table entirely",
            "Clears column values only"
        ],
        "answer": "Removes all rows without logging individual row deletions",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 25,
        "question": "Which command is used to grant privileges to a user in MySQL?",
        "options": [
            "PERMIT",
            "ALLOW",
            "GRANT",
            "AUTHORIZE"
        ],
        "answer": "GRANT",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 26,
        "question": "Which JOIN type returns all rows when there is a match in either left or right table?",
        "options": [
            "INNER JOIN",
            "LEFT JOIN",
            "OUTER JOIN",
            "FULL JOIN"
        ],
        "answer": "FULL JOIN",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 27,
        "question": "What is the default port number for MySQL server?",
        "options": [
            "3306",
            "8080",
            "1521",
            "5432"
        ],
        "answer": "3306",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 28,
        "question": "What keyword is used to remove a table from the database?",
        "options": [
            "DELETE",
            "REMOVE",
            "DROP",
            "ERASE"
        ],
        "answer": "DROP",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 29,
        "question": "Which command modifies the structure of a table (e.g., add column)?",
        "options": [
            "CHANGE",
            "MODIFY",
            "ALTER",
            "UPDATE"
        ],
        "answer": "ALTER",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 30,
        "question": "Which type of index improves query speed the most for large data?",
        "options": [
            "FULLTEXT",
            "BTREE",
            "HASH",
            "CLUSTERED"
        ],
        "answer": "CLUSTERED",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 31,
        "question": "What does the AUTO_INCREMENT attribute do?",
        "options": [
            "Generates random numbers",
            "Increments values in a column manually",
            "Automatically increases numeric values for new rows",
            "Sets default values for string columns"
        ],
        "answer": "Automatically increases numeric values for new rows",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 32,
        "question": "Which data type should you use for storing monetary values?",
        "options": [
            "FLOAT",
            "DOUBLE",
            "DECIMAL",
            "VARCHAR"
        ],
        "answer": "DECIMAL",
        "roles": ["backend", "fullstack"],
        "type": "mysql"
    },
    {
        "id": 33,
        "question": "How do you retrieve only the first 10 rows from a MySQL query?",
        "options": [
            "SELECT TOP 10",
            "LIMIT 10",
            "FIRST 10",
            "ROWNUM < 10"
        ],
        "answer": "LIMIT 10",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 34,
        "question": "What is the purpose of the GROUP BY clause?",
        "options": [
            "To sort the results",
            "To eliminate duplicates",
            "To combine rows with the same values into summary rows",
            "To filter results"
        ],
        "answer": "To combine rows with the same values into summary rows",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 35,
        "question": "What is the result of `NULL + 5` in SQL?",
        "options": [
            "5",
            "NULL",
            "0",
            "Error"
        ],
        "answer": "NULL",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 36,
        "question": "Which SQL statement is used to insert new data into a database?",
        "options": [
            "INSERT INTO",
            "UPDATE",
            "ADD",
            "SET"
        ],
        "answer": "INSERT INTO",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 37,
        "question": "What does the UNION clause do?",
        "options": [
            "Combines rows from two queries and removes duplicates",
            "Deletes rows from two tables",
            "Combines columns from two tables",
            "Joins tables using a common column"
        ],
        "answer": "Combines rows from two queries and removes duplicates",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 38,
        "question": "Which clause is used to filter grouped records?",
        "options": [
            "WHERE",
            "HAVING",
            "GROUP BY",
            "LIMIT"
        ],
        "answer": "HAVING",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 39,
        "question": "What does the BETWEEN operator do?",
        "options": [
            "Filters values within a specified range",
            "Searches for values that match a pattern",
            "Selects rows that are not null",
            "Performs mathematical operations"
        ],
        "answer": "Filters values within a specified range",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    },
    {
        "id": 40,
        "question": "Which SQL clause is used to rename a column or table?",
        "options": [
            "MODIFY",
            "RENAME",
            "CHANGE",
            "AS"
        ],
        "answer": "RENAME",
        "roles": ["backend", "fullstack"],
        "type": "mysql"

    }
]


module.exports = mysqlQues;