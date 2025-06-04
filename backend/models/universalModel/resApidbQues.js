const restApiQues = [
    {
        "id": 1,
        "question": "What type of relationship is defined as one resource existing only if another parent resource exists\u2014for example, pages in a book?",
        "options": [
            "Partial",
            "dependent",
            "associative",
            "linked"
        ],
        "answer": "dependent",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 2,
        "question": "Which URL pattern is recommended when working with one resource and a collection of resources?",
        "options": [
            "/companies/{id} and /company",
            "/company/{id} and /companies",
            "/companies/{id} and /companies",
            "/company/{id} and /company"
        ],
        "answer": "/companies/{id} and /companies",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 3,
        "question": "When dealing with JSON Web Tokens (JWTs), what is a claim?",
        "options": [
            "data in the token",
            "Ownership",
            "a permission",
            "an integer"
        ],
        "answer": "data in the token",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 4,
        "question": "Which REST constraint specifies that knowledge and understanding obtained from one component of the API should be generally applicable elsewhere in the API?",
        "options": [
            "Uniform Interface",
            "Client-Server",
            "Stateless",
            "Cacheable"
        ],
        "answer": "Uniform Interface",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 5,
        "question": "What would you enable to allow a browser on another site to make an AJAX request to your API?",
        "options": [
            "HTTP",
            "REST",
            "OPTIONS",
            "CORS"
        ],
        "answer": "CORS",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 6,
        "question": "APIs commonly use webhooks to ______.",
        "options": [
            "notify other systems of an event",
            "catch error faster",
            "improve error logging",
            "log additional data"
        ],
        "answer": "notify other systems of an event",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 7,
        "question": "What is the underlying goal of all APIs?",
        "options": [
            "to add new technologies to an organization's infrastructure.",
            "to share features and functionality with other system.",
            "to move infrastructure to the cloud.",
            "to appease the latest digital transformation effort."
        ],
        "answer": "to share features and functionality with other system.",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 8,
        "question": "Which is a common command-line tool for using or exploring an API?",
        "options": [
            "bash",
            "curl",
            "ssh",
            "powerShell"
        ],
        "answer": "curl",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 9,
        "question": "What is the modern specification for describing an API?",
        "options": [
            "OpenAPI (Swagger)",
            "WADL",
            "WSDL",
            "OAuth"
        ],
        "answer": "OpenAPI (Swagger)",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    },
    {
        "id": 10,
        "question": "Which HTTP verb is normally used to update or create a resource in an API?",
        "options": [
            "SUBMIT",
            "WRITE",
            "POST",
            "CREATE"
        ],
        "answer": "POST",
        "roles": ["backend", "fullstack"],
        "type": "restapi"
    }
]


module.exports = restApiQues;