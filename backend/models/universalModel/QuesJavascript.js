const javascritdb = [
    {
        "id": 1,
        "question": "Which operator returns true if the two compared values are not equal?",
        options: ["<>", "~", "==!", "!=="],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 2,
        "question": "How is a forEach statement different from a for statement?",
        options: [
            "Only a for statement uses a callback function.",
            "A for statement is more generic and can be used with various iterable objects, while a forEach statement is mainly designed for arrays but can also be used with other iterable objects like Sets.",
            "Only a forEach statement lets you specify your own iterator.",
            "A forEach statement is generic, but a for statement can be used only with an array."
        ],
        "roles": ["fullstack"],
        "type": "javascript"
    },
    {
        "id": 3,
        "question": "Which statement calls the addTax function and passes 50 as an argument?",
        options: ["addTax = 50;", "return addTax 50;", "addTax(50);", "addTax 50;"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 4,
        "question": "Which statement is the correct way to create a variable called rate and assign it the value 100?",
        options: ["let rate = 100;", "let 100 = rate;", "100 = let rate;", "rate = 100;"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 5,
        "question": "Which statement creates a new object using the Person constructor?",
        options: [
            "var student = new Person();",
            "var student = construct Person;",
            "var student = Person();",
            "var student = construct Person();"
        ],
        "roles": ["backend"],
        "type": "javascript"
    },
    {
        "id": 6,
        "question": "When would 'Results shown' be logged to the console?",
        options: [
            "after 10 second",
            "after results are received from the HTTP request",
            "after 10000 seconds",
            "immediately"
        ],
        "roles": ["backend"],
        "type": "javascript"
    },
    {
        "id": 7,
        "question": "Which snippet could you add to this code to print 'food' to the console?",
        options: [
            "a.prototype.belly[0]",
            "Object.getPrototype0f (a).belly[0]",
            "Animal.belly[0]",
            "a.belly[0]"
        ],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 8,
        "question": "How does a function create a closure?",
        options: [
            "It reloads the document whenever the value changes.",
            "It returns a reference to a variable in its parent scope.",
            "It completes execution without returning.",
            "It copies a local variable to the global scope."
        ],
        "roles": ["backend"],
        "type": "javascript"
    },
    {
        "id": 9,
        "question": "Which regular expression would work for matching time value like 12:00:32?",
        options: [
            "/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/",
            "/\\d\\d:\\d\\d:\\d\\d/",
            "/[0-9]+:[0-9]+:[0-9]+/",
            "/ : : /"
        ],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 10,
        "question": "What is the result of the 'use strict' constructor function?",
        options: ["undefined", "window", "{desc: 'logger'}", "function"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 11,
        "question": "How would you reference the text 'avenue' in the array?",
        options: ["roadTypes.2", "roadTypes[3]", "roadTypes.3", "roadTypes[2]"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 12,
        "question": "What is the result of running: typeof 42?",
        options: ["'float'", "'value'", "'number'", "'integer'"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 13,
        "question": "Which property references the DOM object that dispatched an event?",
        options: ["self", "object", "target", "source"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 14,
        "question": "Which code should be in the if statement to specify an error message?",
        options: [
            "exception('One or both parameters are not numbers')",
            "catch('One or both parameters are not numbers')",
            "error('One or both parameters are not numbers')",
            "throw('One or both parameters are not numbers')"
        ],
        "roles": ["backend"],
        "type": "javascript"
    },
    {
        "id": 15,
        "question": "Which method converts JSON data to a JavaScript object?",
        options: ["JSON.fromString();", "JSON.parse()", "JSON.toObject()", "JSON.stringify()"],
        "roles": ["backend"],
        "type": "javascript"
    },
    {
        "id": 16,
        "question": "When would you use a conditional statement?",
        options: [
            "When you want to reuse a set of statements multiple times.",
            "When you want your code to choose between multiple options.",
            "When you want to group data together.",
            "When you want to loop through a group of statement."
        ],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 17,
        "question": "What would be the result of logging i in a for loop from 0 to 5?",
        options: ["1 2 3 4 5", "1 2 3 4", "0 1 2 3 4", "0 1 2 3 4 5"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 18,
        "question": "Which Object method returns an iterable to iterate over the properties of an object?",
        options: ["Object.get()", "Object.loop()", "Object.each()", "Object.keys()"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 19,
        "question": "What will be logged to the console from an array where a[100] = 'fox'?",
        options: ["101", "3", "4", "100"],
        "roles": ["frontend"],
        "type": "javascript"
    },
    {
        "id": 20,
        "question": "What is one difference between Map and Object?",
        options: [
            "You can iterate over values in a Map in their insertion order.",
            "You can count the records in a Map with a single method call.",
            "Keys in Maps can be strings.",
            "You can access values in a Map without iterating over the whole collection."
        ],
        "roles": ["backend"],
        "type": "javascript"
    }
];

module.exports = javascritdb;
