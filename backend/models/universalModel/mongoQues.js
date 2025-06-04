const mongodb = [
    {
        "id": 1,
        "question": "Which command adds members to the replica set from MongoDB shell?",
        "options": [
            "rs.add(\"<hostname>\")",
            "replicaSetAdd(\"<hostname>\")",
            "rs.insert(\"<hostname>\")",
            "replica.add(\"<hostname>\")"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 2,
        "question": "Which MongoDB shell command should you use to back up a database?",
        "options": [
            "restore",
            "backup",
            "mongobackup",
            "mongodump"
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 3,
        "question": "Which shell query displays all citizens with an age greater than or equal to 21?",
        "options": [
            "db.citizens.select('WHERE age >= 21')",
            "db.citizens.where('age >= 21')",
            "db.citizens.find('WHERE age >= 21')",
            "db.citizens.find({age: {$gte: 21}})"
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 4,
        "question": "What does a MongoDB collection consist of?",
        "options": [
            "data",
            "documents",
            "fields",
            "rows"
        ],
        "answer": [false, true, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 5,
        "question": "Given an ObjectId in _id, how do you get the time it was created?",
        "options": [
            "getDateTime(_id)",
            "_id.createDate()",
            "_id.getTimestamp()",
            "_id.getDateTime()"
        ],
        "answer": [false, false, true, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 6,
        "question": "Given a cursor named myCursor, which command returns a boolean value?",
        "options": [
            "myCursor.hasNext()",
            "myCursor.sort()",
            "myCursor.next()",
            "myCursor.find()"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 7,
        "question": "Which command returns a specific document in the user's collection?",
        "options": [
            "db.users.find({_id: 1})",
            "db.users.seek({_id: 1})",
            "db.users.query({_id: 1})",
            "db.query.users({_id: 1})"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 8,
        "question": "To import a JSON array into Mongo, what flags are needed with MongoDBimport?",
        "options": [
            "--type jsonArray",
            "--json",
            "--type json",
            "--jsonArray"
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 9,
        "question": "Choose the shell command that connects to a MongoDB database.",
        "options": [
            "mongo",
            "mongod",
            "mongoconnect",
            "dbconnect"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 10,
        "question": "In the MongoDB shell, how can you tell if an index was used with a query?",
        "options": [
            "db.customers.find({lastName: 'smith'}).explain()",
            "db.customers.find({lastName: 'smith'}).perf()",
            "db.customers.find({lastName: 'smith'}).plan()",
            "db.customers.find({lastName: 'smith'}).usedIndex()"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 11,
        "question": "Suppose your aggregation pipeline terminated with an exception referring to exceeded memory limit. What is the best way to resolve the issue?",
        "options": [
            "Set useMemory to twice amount indicated in exception.",
            "Switch a 64 bit instance of MongoDB.",
            "Increase the memory of the MongoDB server.",
            "Set allowDiskUse to true."
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 12,
        "question": "What is the recommended way to delete a user?",
        "options": [
            "db.deleteUser(\"user\")",
            "db.removeUser(\"user\") DEPRECATED",
            "db.remove(\"user\")",
            "db.dropUser(\"user\")"
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 13,
        "question": "What the primary database in a replica set fails, when does failover begin?",
        "options": [
            "once the primary has been down for 10 minutes",
            "once the primary reboots",
            "immediately",
            "after the administrator reboots the primary"
        ],
        "answer": [false, false, true, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 14,
        "question": "What is the correct option to set up Kerberos when starting MongoDBd?",
        "options": [
            "--setParameter authenticationMechanisms=GSSAPI",
            "--setAuthentication=GSSAPI",
            "--setParam auth=K",
            "--setAuth method=Kerberos"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 15,
        "question": "What is the purpose of an arbiter in a replica set?",
        "options": [
            "It monitors replica set and sends email in case of failure",
            "It casts the tie-breaking vote in an election.",
            "It holds a backup copy of the database.",
            "It reboots the failed server."
        ],
        "answer": [false, true, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 16,
        "question": "You want to know how many types of items you have in each category. Which query does this?",
        "options": [
            "db.product.group({_id: \"$category\", count: {$sum:1}})",
            "db.product.aggregate($sum: {_id: \"$category\", count: {$group:1}})",
            "db.product.aggregate($group: {_id: \"$category\", count: {$sum:1}})",
            "db.product.aggregate($count: {_id: \"$category\", count: {$group:1}})"
        ],
        "answer": [false, false, true, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 17,
        "question": "To restrict the number of records coming back from a query, which command should you use?",
        "options": [
            "take",
            "limit",
            "max",
            "skip"
        ],
        "answer": [false, true, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 18,
        "question": "You have a collection named restaurants with the geographical information stored in the location property, how do you create a geospatial index on it?",
        "options": [
            "db.restaurants.createIndex({location: \"2dsphere\"})",
            "db.restaurants.geospatial({location: \"2dsphere\"})",
            "db.restaurants.createIndex(\"2dsphere\":\"location\")",
            "db.restaurants.createIndex({geospatial: \"location\"})"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 19,
        "question": "How do you find documents with a matching item in an embedded array?",
        "options": [
            "db.customers.findmatch ({\"jobs\":\"secretary\"})",
            "db.customers.find ({\"jobs:secretary\"})",
            "db.customers.find ({\"jobs\":[\"secretary\"]})",
            "db.customers.find ({\"jobs\":\"secretary\"})"
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 20,
        "question": "Which query bypasses the first 5 customers and returns the next 10?",
        "options": [
            "db.customers.find({}, {skip: 5, limit: 10})",
            "db.customers.find({}.page(5).take(10))",
            "db.customers.find({}).skip(5).take(10)",
            "db.customers.find({}).skip(5).limit(10)"
        ],
        "answer": [false, false, false, true],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 21,
        "question": "Which command returns the hostnames of the members in a replica set?",
        "options": [
            "rs.conf()",
            "rs.members()",
            "rs.status()",
            "rs.hostname()"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 22,
        "question": "Which role can vote in a MongoDB replica set?",
        "options": [
            "primary",
            "secondary",
            "arbiter",
            "hidden"
        ],
        "answer": [true, true, true, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    },
    {
        "id": 23,
        "question": "Which option is used to enable journaling in MongoDB?",
        "options": [
            "--journal",
            "--enableJournal",
            "--journalEnable",
            "--journaling"
        ],
        "answer": [true, false, false, false],
        "roles": ["backend", "fullstack"],
        "type": "mongodb"
    }
]

module.exports = mongodb;