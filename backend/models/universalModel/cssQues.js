const cssQuestion = [
    {
        "id": 1,
        "question": "What is the highest specificity selector among the following?\n\n```css\nul li a\na\n.example a\ndiv a\n```",
        "options": [
            ".example a",
            "div a",
            "a",
            "ul li a"
        ],
        "roles": ["frontend", "frontend"],
        "type": "css"
    },
    {
        "id": 2,
        "question": "How do you select an `<a>` element with a 'title' attribute using an attribute selector?",
        "options": [
            "a[title]{...}",
            "a > title {...}",
            "a.title {...}",
            "a=title {...}"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 3,
        "question": "What CSS selector targets an `<a>` tag containing the 'title' attribute?",
        "options": [
            "a[title]",
            "a > title",
            "a=title",
            "a.title"
        ],
        "roles": ["frontend", "fullstack"],
        "type": "css"
    },
    {
        "id": 4,
        "question": "Which two techniques are valid for clearing floats?",
        "options": [
            "Use 'clearfix hack' on floated element and float the parent.",
            "Use overflow on floated element or 'clearfix hack' on either.",
            "Use 'clearfix hack' on floated element or overflow on parent.",
            "Use 'clearfix hack' on parent or overflow with value other than 'visible'."
        ],
        "roles": ["fullstack"],
        "type": "css"
    },
    {
        "id": 5,
        "question": "What do these CSS selectors match?\n\n```css\n1) .nav { ... }\n2) nav { ... }\n3) #nav { ... }\n```",
        "options": [
            "1: ID 'nav', 2: nav element, 3: class 'nav'",
            "They all target the same nav element.",
            "1: class 'nav', 2: nav element, 3: ID 'nav'",
            "1: class 'nav', 2: nav element, 3: div with ID 'nav'"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 6,
        "question": "What's the difference between `opacity` and `background: rgba()` for transparency?",
        "options": [
            "Opacity affects children; rgba() affects only background.",
            "Opacity affects only background; rgba() affects element and content.",
            "Opacity affects element and content; rgba() affects only background.",
            "Opacity affects parent and children; rgba() affects only parent."
        ],
        "roles": ["frontend", "fullstack"],
        "type": "css"
    },
    {
        "id": 7,
        "question": "Which statement is true about block and inline elements?",
        "options": [
            "Block elements have content size; inline span container width.",
            "Block elements span container width; inline have content size.",
            "<nav> is inline; <header> is block.",
            "<span> is block; <div> is inline."
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 8,
        "question": "For `.grid { display: grid; width: 500px; grid-template-columns: 50px 1fr 2fr; }`, what are the column widths?",
        "options": [
            "50px, 50px, 100px",
            "50px, 150px, 300px",
            "50px, 300px, 150px",
            "50px, 500px, 1000px"
        ],
        "roles": ["frontend", "fullstack"],
        "type": "css"

    },
    {
        "id": 9,
        "question": "If container width is 500px, what are the column widths for `.grid { display: grid; grid-template-columns: 50px 1fr 2fr; }`?",
        "options": [
            "50px, 150px, 300px",
            "50px, 200px, 300px",
            "50px, 100px, 200px",
            "50px, 50px, 100px"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 10,
        "question": "What is the purpose of the `line-height` property?",
        "options": [
            "Control space between lines of content",
            "Control space between heading elements",
            "Control the height of the character size",
            "Control the width of the space between characters"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 11,
        "question": "Which statement is NOT true about class selectors?",
        "options": [
            "Multiple classes per element are allowed.",
            "Same class can be used multiple times per page.",
            "Class selectors start with a period.",
            "Classes cannot be used multiple times within the same element."
        ],
        "roles": ["fullstack"],
        "type": "css"
    },
    {
        "id": 12,
        "question": "What is NOT true about class selectors?",
        "options": [
            "Only one class value can be assigned to an element.",
            "An element can have multiple class values.",
            "Class selectors are marked with a leading period.",
            "More than one element can have the same class value."
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 13,
        "question": "Which property should align a fixed global navigation bar at the top?",
        "options": [
            "position",
            "flexbox",
            "grid",
            "float"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 14,
        "question": "In `background: blue url(image.jpg) no-repeat scroll 0px 0px;`, which properties are represented?",
        "options": [
            "background-color, background-image, background-repeat, background-attachment, background-position",
            "background-color, background-img, background-position, background-scroll, background-size",
            "background-color, background-src, background-repeat, background-wrap, background-position",
            "background-color, background-src, background-repeat, background-scroll, background-position"
        ],
        roles: ["fullstack"],
        "type": "css"
    },
    {
        "id": 15,
        "question": "In the given CSS and HTML, what color will the link be?\n\n```css\n.example { color: yellow; }\nul li a { color: blue; }\nul a { color: green; }\na { color: red; }\n```\n\n```html\n<ul><li><a href=\"#\" class=\"example\">link</a></li><li>list item</li><li>list item</li></ul>\n```",
        "options": [
            "green",
            "yellow",
            "blue",
            "red"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 16,
        "question": "Which statements are true about the `z-index` property?",
        "options": [
            "Larger values on top, +/- numbers, only on positioned elements.",
            "Smaller values on top, +/- numbers, must be positioned.",
            "Larger values on top, only + numbers, must be positioned.",
            "Smaller values on top, +/- numbers, can be used without positioning."
        ],
        "roles": ["fullstack"],
        "type": "css"
    },
    {
        "id": 17,
        "question": "Which set of statements is true about the `z-index` property?",
        "options": [
            "1. Larger on top, 2. +/- numbers, 3. Only positioned.",
            "1. Smaller on top, 2. +/- numbers, 3. With or without positioned.",
            "1. Smaller on top, 2. +/- numbers, 3. Must be positioned.",
            "1. Larger on top, 2. Only + numbers, 3. Must be positioned."
        ],
        "roles": ["frontend", "fullstack"],
        "type": "css"
    },
    {
        "id": 18,
        "question": "What's the difference between `line-height: 20px;` and `line-height: 2;`?",
        "options": [
            "20px is fixed; 2 is twice the font-size.",
            "20px is fixed; 2 is invalid.",
            "20px is fixed; 2 defaults to 2px.",
            "20px is fixed; 2 is 20% of font-size."
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 19,
        "question": "What color will paragraph one and paragraph two be in the following?\n\n```html\n<section><p>paragraph one</p></section><p>paragraph two</p>\n```\n\n```css\nsection p { color: red; }\nsection + p { color: blue; }\n```",
        "options": [
            "Paragraph one: blue, paragraph two: red",
            "Both paragraphs will be blue.",
            "Paragraph one: red, paragraph two: blue",
            "Both paragraphs will be red."
        ],
        roles: ["frontend", "fullstack"],
        "type": "css"
    },
    {
        "id": 20,
        "question": "What are three valid ways of adding CSS to an HTML page?",
        "options": [
            "1. External, 2. Inline (in <head>), 3. Internal (within tags)",
            "1. External (linked in <header>), 2. Inline (in tag), 3. Internal (in <header>)",
            "1. External (linked in <head>), 2. Internal (in <header>), 3. Inline (in tag)",
            "1. External (linked in <head>), 2. Inline (in tag), 3. Internal (in <head>)"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 21,
        "question": "Which statement is true for the SVG image format?",
        "options": [
            "CSS can be applied, but not JavaScript.",
            "Best for creating 3D graphics.",
            "Vector or coded with <svg>, <line>, <ellipse>, etc.",
            "HAML-based markup for vector graphics."
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 22,
        "question": "In `a:active { color: pink; }`, when will the anchor element be pink?",
        "options": [
            "After click or on mouse hover.",
            "On mouse hover.",
            "While the link is being clicked.",
            "Before it has been clicked."
        ],
        "roles": ["frontend", "fullstack"],
        "type": "css"
    },
    {
        "id": 23,
        "question": "Which CSS property changes the color of an SVG?",
        "options": [
            "background-fill and stroke/border",
            "Color cannot be changed with CSS.",
            "fill or background and stroke",
            "fill and stroke"
        ],
        "roles": ["fullstack"],
        "type": "css"
    },
    {
        "id": 24,
        "question": "When using `position: fixed`, what is the element positioned relative to?",
        "options": [
            "Closest element with position: relative",
            "The viewport",
            "The parent element",
            "The wrapper element"
        ],
        "roles": ["frontend"],
        "type": "css"
    },
    {
        "id": 25,
        "question": "By default, a background image will repeat...",
        "options": [
            "only if `background-repeat` is set to `repeat`",
            "indefinitely, vertically, and horizontally",
            "indefinitely on the horizontal axis only",
            "once, on the x and y axis"
        ],
        "roles": ["frontend", "frontend"],
        "type": "css"
    }
];

module.exports = cssQuestion;
