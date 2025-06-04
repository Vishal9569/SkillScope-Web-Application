
const pythonQues = [
    {
        "id": 1,
        "question": "What is an abstract class?",
        "options": [
            "An abstract class is the name for any class from which you can instantiate an object.",
            "Abstract classes must be redefined any time an object is instantiated from them.",
            "Abstract classes must inherit from concrete classes.",
            "An abstract class exists only so that other \"concrete\" classes can inherit from the abstract class."
        ],
        "role": ["pythondeveloper"],
        "answer": "An abstract class exists only so that other \"concrete\" classes can inherit from the abstract class.",
         "type": "python"
    },
    {
        "id": 2,
        "question": "What happens when you use the built-in function `any()` on a list?",
        "options": [
            "The `any()` function will randomly return any item from the list.",
            "The `any()` function returns True if any item in the list evaluates to True. Otherwise, it returns False.",
            "The `any()` function takes as arguments the list to check inside, and the item to check for. If \"any\" of the items in the list match the item to check for, the function returns True.",
            "The `any()` function returns a Boolean value that answers the question \"Are there any items in this list?\""
        ],
        "role": ["pythonfullstack"],
        "answer": "The `any()` function returns True if any item in the list evaluates to True. Otherwise, it returns False.",
         "type": "python"
    },
    {
        "id": 3,
        "question": "What data structure does a binary tree degenerate to if it isn't balanced properly?",
        "options": [
            "linked list",
            "queue",
            "set",
            "OrderedDict"
        ],
        "role": ["pythondeveloper"],
        "answer": "linked list",
         "type": "python"
    },
    {
        "id": 4,
        "question": "What statement about static methods is true?",
        "options": [
            "Static methods are called static because they always return `None`.",
            "Static methods can be bound to either a class or an instance of a class.",
            "Static methods serve mostly as utility methods or helper methods since they can't access or modify a class's state.",
            "Static methods can access and modify the state of a class or an instance of a class."
        ],
        "role": ["pythonfullstack"],
        "answer": "Static methods serve mostly as utility methods or helper methods since they can't access or modify a class's state.",
        "type": "python"

    },
    {
        "id": 5,
        "question": "What are attributes?",
        "options": [
            "Attributes are long-form versions of an `if/else` statement, used when testing for equality between objects.",
            "Attributes are a way to hold data or describe a state for a class or an instance of a class.",
            "Attributes are strings that describe characteristics of a class.",
            "Function arguments are called \"attributes\" in the context of class methods and instance methods."
        ],
        "role": ["pythondeveloper"],
        "answer": "Attributes are a way to hold data or describe a state for a class or an instance of a class.",
        "type": "python"
    },
    {
        "id": 6,
        "question": "What is the term to describe this code?\n\n`count, fruit, price = (2, 'apple', 3.5)`",
        "options": [
            "Tuple assignment.",
            "Tuple unpacking.",
            "Tuple matching.",
            "Tuple duplication."
        ],
        "role": ["pythonfullstack"],
        "answer": "Tuple unpacking.",
        "type": "python"
    },
    {
        "id": 7,
        "question": "What built-in list method would you use to remove items from a list?",
        "options": [
            ".delete() method",
            "pop(my_list)",
            "del(my_list)",
            ".pop() method"
        ],
        "role": ["pythondeveloper"],
        "answer": ".pop() method",
        "type": "python"
    },
    {
        "id": 8,
        "question": "What is one of the most common uses of Python's `sys` library?",
        "options": [
            "To capture command-line arguments given at a file's runtime.",
            "To connect various systems, such as connecting a web front end, an API service, a database, and a mobile app.",
            "To take a snapshot of all the packages and libraries in your virtual environment.",
            "To scan the health of your Python ecosystem while inside a virtual environment."
        ],
        "role": ["pythonfullstack"],
        "answer": "To capture command-line arguments given at a file's runtime.",
        "type": "python"
    },
    {
        "id": 9,
        "question": "What is the runtime of accessing a value in a dictionary by using its key?",
        "options": [
            "O(n), also called linear time.",
            "O(log n), also called logarithmic time.",
            "O(n^2), also called quadratic time.",
            "O(1), also called constant time."
        ],
        "role": ["pythondeveloper"],
        "answer": "O(1), also called constant time.",
        "type": "python"
    },
    {
        "id": 10,
        "question": "What is the correct syntax for defining a class called Game, if it inherits from a parent class called LogicGame?",
        "options": [
            "class Game(LogicGame): pass",
            "def Game(LogicGame): pass",
            "def Game.LogicGame(): pass",
            "class Game.LogicGame(): pass"
        ],
        "role": ["pythonfullstack"],
        "answer": "class Game(LogicGame): pass",
        "type": "python"
    },
    {
        "id": 11,
        "question": "What is the proper format for writing a doctest?",
        "options": [
            "A\n\n```python\ndef sum(a, b):\n    \"\"\"\n    sum(4, 3)\n    7\n\n    sum(-4, 5)\n    1\n    \"\"\"\n    return a + b\n```",
            "B\n\n```python\ndef sum(a, b):\n    \"\"\"\n    >>> sum(4, 3)\n    7\n\n    >>> sum(-4, 5)\n    1\n    \"\"\"\n    return a + b\n```",
            "C\n\n```python\ndef sum(a, b):\n    \"\"\"\n    # >>> sum(4, 3)\n    # 7\n\n    # >>> sum(-4, 5)\n    # 1\n    \"\"\"\n    return a + b\n```",
            "D\n\n```python\ndef sum(a, b):\n    ###\n    >>> sum(4, 3)\n    7\n\n    >>> sum(-4, 5)\n    1\n    ###\n    return a + b\n```"
        ],
        "role": ["pythondeveloper"],
        "answer": "B\n\n```python\ndef sum(a, b):\n    \"\"\"\n    >>> sum(4, 3)\n    7\n\n    >>> sum(-4, 5)\n    1\n    \"\"\"\n    return a + b\n```",
        "type": "python"
    },
    {
        "id": 12,
        "question": "What built-in Python data type is commonly used to represent a stack?",
        "options": [
            "set",
            "list",
            "None",
            "dictionary",
            "You can only build a stack from scratch."
        ],
        "role": ["pythonfullstack"],
        "answer": "list",
        "type": "python"
    },
    {
        "id": 13,
        "question": "What would this expression return?\n\n```python\ncollege_years = ['Freshman', 'Sophomore', 'Junior', 'Senior']\nreturn list(enumerate(college_years, 2019))\n```",
        "options": [
            "[('Freshman', 2019), ('Sophomore', 2020), ('Junior', 2021), ('Senior', 2022)]",
            "[(2019, 2020, 2021, 2022), ('Freshman', 'Sophomore', 'Junior', 'Senior')]",
            "[('Freshman', 'Sophomore', 'Junior', 'Senior'), (2019, 2020, 2021, 2022)]",
            "[(2019, 'Freshman'), (2020, 'Sophomore'), (2021, 'Junior'), (2022, 'Senior')]"
        ],
        "role": ["pythondeveloper"],
        "answer": "[(2019, 'Freshman'), (2020, 'Sophomore'), (2021, 'Junior'), (2022, 'Senior')]",
        "type": "python"
    },
    {
        "id": 14,
        "question": "What is the purpose of the \"self\" keyword when defining or calling instance methods?",
        "options": [
            "self means that no other arguments are required to be passed into the method.",
            "There is no real purpose for the self method; it's just historic computer science jargon that Python keeps to stay consistent with other programming languages.",
            "self refers to the instance whose method was called.",
            "self refers to the class that was inherited from to create the object using self."
        ],
        "role": ["pythonfullstack"],
        "answer": "self refers to the instance whose method was called.",
        "type": "python"
    },
    {
        "id": 15,
        "question": "Which of these is NOT a characteristic of namedtuples?",
        "options": [
            "You can assign a name to each of the namedtuple members and refer to them that way, similarly to how you would access keys in dictionary.",
            "Each member of a namedtuple object can be indexed directly, just like in a regular tuple.",
            "namedtuples are just as memory efficient as regular tuples.",
            "No import is needed to use namedtuples because they are available in the standard library."
        ],
        "role": ["pythondeveloper"],
        "answer": "No import is needed to use namedtuples because they are available in the standard library.",
        "type": "python"
    },
    {
        "id": 16,
        "question": "What is an instance method?",
        "options": [
            "Instance methods can modify the state of an instance or the state of its parent class.",
            "Instance methods hold data related to the instance.",
            "An instance method is any class method that doesn't take any arguments.",
            "An instance method is a regular function that belongs to a class, but it must return None."
        ],
        "role": ["pythonfullstack"],
        "answer": "Instance methods can modify the state of an instance or the state of its parent class.",
        "type": "python"
    },
    {
        "id": 17,
        "question": "Which statement does NOT describe the object-oriented programming concept of encapsulation?",
        "options": [
            "It protects the data from outside interference.",
            "A parent class is encapsulated and no data from the parent class passes on to the child class.",
            "It keeps data and the methods that can manipulate that data in one place.",
            "It only allows the data to be changed by methods."
        ],
        "role": ["pythondeveloper"],
        "answer": "A parent class is encapsulated and no data from the parent class passes on to the child class.",
        "type": "python"
    },
    {
        "id": 18,
        "question": "What is the use of an if/else statement?",
        "options": [
            "It tells the computer which chunk of code to run if the instructions you coded are incorrect.",
            "It runs one chunk of code if all the imports were successful, and another chunk of code if the imports were not successful.",
            "It executes one chunk of code if a condition is true, but a different chunk of code if the condition is false.",
            "It tells the computer which chunk of code to run if there is enough memory to handle it, and which chunk of code to run if there is not enough memory."
        ],
        "role": ["pythonfullstack"],
        "answer": "It executes one chunk of code if a condition is true, but a different chunk of code if the condition is false.",
        "type": "python"
    }
]


module.exports = pythonQues;