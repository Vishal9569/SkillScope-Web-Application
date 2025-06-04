
const mcqdata = [
    {
        "id": 1,
        "question": "Which image matches the flex layout defined in this style rule?",
        "css": ".container { display: flex; } .container div:last-child { margin-left: auto; }",
        "options": [
            "images/Q1-A.jpg",
            "images/Q1-B.jpg",
            "images/Q1-C.jpg",
            "images/Q1-D.jpg"
        ],
        "reference": "https://jsfiddle.net/mrvahid/zohd8k2n/",
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 2,
        "question": "Variables declared with the 'let' keyword have what type of scope?",
        "options": [
            "Function scope",
            "Block scope",
            "Inline scope",
            "Global scope"
        ],
        "roles": ["fullstack"],
        "type": "html"
    },
    {
        "id": 3,
        "question": "Why would you surround a piece of text with <h1></h1> tags?",
        "options": [
            "To indicate that this text is the main heading on the page",
            "To make the text bold",
            "To ensure that search engines treat the keywords as being important for this page",
            "To demonstrate to screen readers that this text is important"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 4,
        "question": "When might an empty 'alt' attribute be the correct value?",
        "options": [
            "When you cannot think of useful alt text",
            "When you don't think it would be interesting to someone who cannot see it",
            "When the image has come from a CMS",
            "When the image is purely decorative"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 5,
        "question": "Which HTML attribute must have a unique value each time it is used in a document?",
        "options": [
            "title",
            "class",
            "style",
            "id"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 6,
        "question": "Which CSS property will NOT trigger layout recalculation (reflow)?",
        "options": [
            "top",
            "opacity",
            "width",
            "height"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 7,
        "question": "What will be the value of the variable 'selected' after this code is executed?",
        "code": "let pocket = ['turnip', 'stone', 'log', 'apple']; let selected = pocket[1];",
        "options": [
            "log",
            "apple",
            "stone",
            "turnip"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 8,
        "question": "What does the '===' comparison operator do in JavaScript?",
        "options": [
            "It sets one variable equal to another in both value and type",
            "It tests for equality of type only",
            "It tests for equality of value only",
            "It tests for equality of value and type"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 9,
        "question": "Given the code `let fruit = 'apple';`, how would you change the value of 'fruit' to 'plum'?",
        "code": "let fruit = 'apple';",
        "options": [
            "let fruit = 'plum'",
            "var fruit = 'plum'",
            "const fruit = 'plum'",
            "fruit = 'plum'"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 10,
        "question": "What is the purpose of the <label> element in HTML forms?",
        "options": [
            "To identify the different parts of a figure",
            "To explain what needs to be entered into a form field",
            "As a caption for images",
            "As a heading for tables"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 11,
        "question": "What is the correct syntax for referring to an external script called 'script.js'?",
        "options": [
            "<script src='script.js'></script>",
            "<script href='script.js'></script>",
            "<script name='script.js'></script>",
            "<script file='script.js'></script>"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 12,
        "question": "Which of the following is NOT a valid CSS selector?",
        "options": [
            ".container",
            "#id",
            "div#",
            "p.class"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 13,
        "question": "How do you declare a constant in JavaScript?",
        "options": [
            "let constant = 5;",
            "const constant = 5;",
            "var constant = 5;",
            "constant = 5;"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 14,
        "question": "What does the CSS 'z-index' property do?",
        "options": [
            "Sets the stacking order of elements",
            "Controls the element's transparency",
            "Sets the width of an element",
            "Controls the element's visibility"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 15,
        "question": "Which of the following is the correct way to access an element by ID in JavaScript?",
        "options": [
            "document.getElementById('id')",
            "document.querySelector('#id')",
            "document.getElementById(id)",
            "document.getById('id')"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 16,
        "question": "Which of the following properties is used to change the font size in CSS?",
        "options": [
            "font-size",
            "text-size",
            "font-style",
            "text-font"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 17,
        "question": "In JavaScript, what is the purpose of 'console.log()'?",
        "options": [
            "To output messages to the console",
            "To alert the user with a message",
            "To log errors in code",
            "To create a new log file"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 18,
        "question": "Which of these CSS properties can be used to create rounded corners on an element?",
        "options": [
            "border-radius",
            "corner-radius",
            "round-corner",
            "border-style"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 19,
        "question": "What is the purpose of the 'return' statement in JavaScript?",
        "options": [
            "To stop the execution of a function",
            "To exit from a loop",
            "To return a value from a function",
            "To call a function"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 20,
        "question": "Which CSS property is used to set the background color of an element?",
        "options": [
            "background-color",
            "background-coloration",
            "bg-color",
            "color"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 21,
        "question": "What does the 'undefined' value represent in JavaScript?",
        "options": [
            "A value assigned to a variable",
            "A variable that has been declared but not assigned a value",
            "A function that does not return anything",
            "A null value"
        ],
        "roles": ["fullstack"],
        "type": "html"

    },
    {
        "id": 22,
        "question": "Which tag is used to create a hyperlink in HTML?",
        "options": [
            "<a href=''></a>",
            "<link></link>",
            "<hyperlink></hyperlink>",
            "<url></url>"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 23,
        "question": "Which HTML element is used to display images?",
        "options": [
            "<img>",
            "<picture>",
            "<image>",
            "<imgage>"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 24,
        "question": "What is the default display value of most HTML elements?",
        "options": [
            "inline",
            "block",
            "none",
            "flex"
        ],
        "roles": ["frontend"],
        "type": "html"

    },
    {
        "id": 25,
        "question": "What is the correct way to write a comment in CSS?",
        "options": [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "<!-- This is a comment -->"
        ],
        "roles": ["frontend"],
        "type": "html"

    }
]


module.exports = mcqdata;
