const { model, default: mongoose } = require("mongoose")

const codingQuesdata =
  [
    {
      "id": "1",
      "title": "Two Sum 1",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "2",
      "title": "Reverse String 2",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "3",
      "title": "Valid Parentheses 3",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    },
    {
      "id": "4",
      "title": "Maximum Subarray 4",
      "description": "Find the contiguous subarray with the largest sum.",
      "difficulty": "easy",
      "inputFormat": "array",
      "outputFormat": "integer",
      "roles": [
        "frontend",
        "backend"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "Math.max",
        "customTests": [
          {
            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
            "expectedOutput": "6"
          }
        ]
      }
    },
    {
      "id": "5",
      "title": "Climbing Stairs 5",
      "description": "Count how many distinct ways to climb to the top.",
      "difficulty": "easy",
      "inputFormat": "integer",
      "outputFormat": "integer",
      "roles": [
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "dynamic programming",
        "customTests": [
          {
            "input": "5",
            "expectedOutput": "8"
          }
        ]
      }
    },
    {
      "id": "6",
      "title": "Two Sum 6",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "7",
      "title": "Reverse String 7",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "8",
      "title": "Valid Parentheses 8",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    },
    {
      "id": "9",
      "title": "Maximum Subarray 9",
      "description": "Find the contiguous subarray with the largest sum.",
      "difficulty": "easy",
      "inputFormat": "array",
      "outputFormat": "integer",
      "roles": [
        "frontend",
        "backend"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "Math.max",
        "customTests": [
          {
            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
            "expectedOutput": "6"
          }
        ]
      }
    },
    {
      "id": "10",
      "title": "Climbing Stairs 10",
      "description": "Count how many distinct ways to climb to the top.",
      "difficulty": "easy",
      "inputFormat": "integer",
      "outputFormat": "integer",
      "roles": [
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "dynamic programming",
        "customTests": [
          {
            "input": "5",
            "expectedOutput": "8"
          }
        ]
      }
    },
    {
      "id": "11",
      "title": "Two Sum 11",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "12",
      "title": "Reverse String 12",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "13",
      "title": "Valid Parentheses 13",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    },
    {
      "id": "14",
      "title": "Maximum Subarray 14",
      "description": "Find the contiguous subarray with the largest sum.",
      "difficulty": "easy",
      "inputFormat": "array",
      "outputFormat": "integer",
      "roles": [
        "frontend",
        "backend"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "Math.max",
        "customTests": [
          {
            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
            "expectedOutput": "6"
          }
        ]
      }
    },
    {
      "id": "15",
      "title": "Climbing Stairs 15",
      "description": "Count how many distinct ways to climb to the top.",
      "difficulty": "easy",
      "inputFormat": "integer",
      "outputFormat": "integer",
      "roles": [
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "dynamic programming",
        "customTests": [
          {
            "input": "5",
            "expectedOutput": "8"
          }
        ]
      }
    },
    {
      "id": "16",
      "title": "Two Sum 16",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "17",
      "title": "Reverse String 17",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "18",
      "title": "Valid Parentheses 18",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    },
    {
      "id": "19",
      "title": "Maximum Subarray 19",
      "description": "Find the contiguous subarray with the largest sum.",
      "difficulty": "easy",
      "inputFormat": "array",
      "outputFormat": "integer",
      "roles": [
        "frontend",
        "backend"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "Math.max",
        "customTests": [
          {
            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
            "expectedOutput": "6"
          }
        ]
      }
    },
    {
      "id": "20",
      "title": "Climbing Stairs 20",
      "description": "Count how many distinct ways to climb to the top.",
      "difficulty": "easy",
      "inputFormat": "integer",
      "outputFormat": "integer",
      "roles": [
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "dynamic programming",
        "customTests": [
          {
            "input": "5",
            "expectedOutput": "8"
          }
        ]
      }
    },
    {
      "id": "21",
      "title": "Two Sum 21",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "22",
      "title": "Reverse String 22",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "23",
      "title": "Valid Parentheses 23",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    },
    {
      "id": "24",
      "title": "Maximum Subarray 24",
      "description": "Find the contiguous subarray with the largest sum.",
      "difficulty": "easy",
      "inputFormat": "array",
      "outputFormat": "integer",
      "roles": [
        "frontend",
        "backend"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "Math.max",
        "customTests": [
          {
            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
            "expectedOutput": "6"
          }
        ]
      }
    },
    {
      "id": "25",
      "title": "Climbing Stairs 25",
      "description": "Count how many distinct ways to climb to the top.",
      "difficulty": "easy",
      "inputFormat": "integer",
      "outputFormat": "integer",
      "roles": [
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "dynamic programming",
        "customTests": [
          {
            "input": "5",
            "expectedOutput": "8"
          }
        ]
      }
    },
    {
      "id": "26",
      "title": "Two Sum 26",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "27",
      "title": "Reverse String 27",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "28",
      "title": "Valid Parentheses 28",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    },
    {
      "id": "29",
      "title": "Maximum Subarray 29",
      "description": "Find the contiguous subarray with the largest sum.",
      "difficulty": "easy",
      "inputFormat": "array",
      "outputFormat": "integer",
      "roles": [
        "frontend",
        "backend"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "Math.max",
        "customTests": [
          {
            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
            "expectedOutput": "6"
          }
        ]
      }
    },
    {
      "id": "30",
      "title": "Climbing Stairs 30",
      "description": "Count how many distinct ways to climb to the top.",
      "difficulty": "easy",
      "inputFormat": "integer",
      "outputFormat": "integer",
      "roles": [
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "dynamic programming",
        "customTests": [
          {
            "input": "5",
            "expectedOutput": "8"
          }
        ]
      }
    },
    {
      "id": "31",
      "title": "Two Sum 31",
      "description": "Find indices of two numbers such that they add up to a target.",
      "difficulty": "easy",
      "inputFormat": "array, integer",
      "outputFormat": "array",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "map",
        "customTests": [
          {
            "input": "[2,7,11,15], 9",
            "expectedOutput": "[0,1]"
          }
        ]
      }
    },
    {
      "id": "32",
      "title": "Reverse String 32",
      "description": "Reverse the characters of a given string.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "string",
      "roles": [
        "frontend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "reverse",
        "customTests": [
          {
            "input": "\"hello\"",
            "expectedOutput": "\"olleh\""
          }
        ]
      }
    },
    {
      "id": "33",
      "title": "Valid Parentheses 33",
      "description": "Determine if the input string is valid using parentheses.",
      "difficulty": "easy",
      "inputFormat": "string",
      "outputFormat": "boolean",
      "roles": [
        "frontend",
        "backend",
        "fullstack"
      ],
      "type": "coding-question",
      "evaluation": {
        "mustInclude": "stack",
        "customTests": [
          {
            "input": "\"()[]{}\"",
            "expectedOutput": "true"
          }
        ]
      }
    }
  ]


module.exports = codingQuesdata;
