const reactjsQues = [
    {
        "id": 1,
        "question": "If you want to import just the Component from the React library, what syntax do you use?",
        "options": [
            "import React.Component from 'react'",
            "import [ Component ] from 'react'",
            "import Component from 'react'",
            "import { Component } from 'react'"
        ],
        "answer": [
            false,
            false,
            false,
            true
        ],
        "roles": [
            "frontend",
            "fullstack"
        ],
        "type": "reactjs"
    },
    {
        "id": 2,
        "question": "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        "options": [
            "Wrap it in the React.memo higher-order component.",
            "Implement the useReducer Hook.",
            "Implement the useMemo Hook.",
            "Implement the shouldComponentUpdate lifecycle method."
        ],
        "answer": [
            true,
            false,
            false,
            false
        ],
        "roles": [
            "frontend",
            "fullstack"
        ],
        "type": "reactjs"
    },
    {
        "id": 3,
        "question": "How do you fix the syntax error that results from running this code?",
        "options": [
            "Wrap the object in parentheses.",
            "Call the function from another file.",
            "Add a return statement before the first curly brace.",
            "Replace the object with an array."
        ],
        "answer": [
            true,
            false,
            false,
            false
        ],
        "roles": [
            "frontend",
            "fullstack"
        ],
        "type": "reactjs"
    },
    {
        "id": 4,
        "question": "If you see the following import in a file, what is being used for state management in the component?\n\nimport React, {useState} from 'react';",
        "options": [
            "React Hooks",
            "stateful components",
            "math",
            "class components"
        ],
        "answer": [
            true,
            false,
            false,
            false
        ],
        "roles": [
            "frontend",
            "fullstack"
        ],
        "type": "reactjs"
    },
    {
        "id": 5,
        "question": "Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?",
        "options": [
            "{{name: \"Rachel\", age: 31}}",
            "{name: \"Rachel\", age: 31}",
            "{person: \"Rachel\", person: 31}}",
            "{person: {name: \"Rachel\", age: 31}}"
        ],

        "roles": [
            "frontend",
            "fullstack"
        ],
        "type": "reactjs"
    }
]

module.exports = reactjsQues;