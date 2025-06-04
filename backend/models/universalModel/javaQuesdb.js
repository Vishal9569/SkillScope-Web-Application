const javaQues = [
  {
    "id": 1,
    "question": "Given the string 'strawberries' saved in a variable called fruit, what would fruit.substring(2, 5) return?",
    "options": ["rawb", "raw", "awb", "traw"],
    "answer": "raw",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },

  {
    "id": 2,
    "question": "How can you achieve runtime polymorphism in Java?",
    "options": ["method overloading", "method overrunning", "method overriding", "method calling"],
    "answer": "method overriding",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 3,
    "question": "Which of these expressions will NOT evaluate to true?\n\nboolean b1 = true, b2 = false; int i1 = 1, i2 = 2;",
    "options": ["(i1 | i2) == 3", "i2 && b1", "b1 || !b2", "(i1 ^ i2) < 4"],
    "answer": "i2 && b1",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 4,
    "question": "What is the output of this code using array.size() instead of array.length in Java?",
    "options": [
      "It will not compile because of line 4.",
      "It will not compile because of line 3.",
      "123",
      "1234"
    ],
    "answer": "It will not compile because of line 4.",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 5,
    "question": "Which of the following can replace the CODE SNIPPET to make the code below print 'Hello World' from static methods in interfaces?",
    "options": [
      "super1.print(); super2.print();",
      "this.print();",
      "super.print();",
      "Interface1.print(); Interface2.print();"
    ],
    "answer": "Interface1.print(); Interface2.print();",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 6,
    "question": "What does this code print?\n\nString str = \"abcde\";\nstr.trim(); str.toUpperCase(); str.substring(3, 4);\nSystem.out.println(str);",
    "options": ["CD", "CDE", "D", "abcde"],
    "answer": "abcde",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 7,
    "question": "What is the result of this code with method return or throw Exception based on input?",
    "options": [
      "It will show a stack trace with a runtime exception.",
      "java.lang.Exception",
      "It will run and throw an exception.",
      "It will not compile."
    ],
    "answer": "java.lang.Exception",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 8,
    "question": "Which class can compile given two interfaces with default methods with the same signature?",
    "options": ["A", "B", "C", "D"],
    "answer": "D",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 9,
    "question": "What is the output when adding a string and an int to an ArrayList and checking instanceof?",
    "options": ["The code does not compile.", "truefalse", "truetrue", "falsetrue"],
    "answer": "truetrue",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 10,
    "question": "What is the output when importing two classes named Math from different packages?",
    "options": ["Lines 1 and 2 generate compiler errors due to class name conflicts.", "-123", "It will throw an exception on line 5.", "123"],
    "answer": "123",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 11,
    "question": "What is the result of this code that attempts to override a final method and call it in a static context?",
    "options": [
      "It will not compile because of line 10.",
      "Hello!",
      "It will not compile because of line 2.",
      "World!"
    ],
    "answer": "It will not compile because of line 10.",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 12,
    "question": "Given this code with command-line args, which command will output '2'?",
    "options": [
      "java Main 1 2 \"3 4\" 5",
      "java Main 1 \"2\" \"2\" 5",
      "java Main.class 1 \"2\" 2 5",
      "java Main 1 \"2\" \"3 4\" 5"
    ],
    "answer": "java Main 1 \"2\" \"2\" 5",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 13,
    "question": "What is the output when assigning a very large number to an int?",
    "options": [
      "123451234512345",
      "Nothing - this will not compile.",
      "a negative integer value",
      "12345100000"
    ],
    "answer": "Nothing - this will not compile.",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 14,
    "question": "What is the output of this code with invalid substring range?",
    "options": [
      "The code does not compile.",
      "A runtime exception is thrown.",
      "world!!world",
      "world!world!"
    ],
    "answer": "A runtime exception is thrown.",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 15,
    "question": "How do you write a for-each loop that will iterate over ArrayList<Pencil> pencilCase?",
    "options": [
      "for (Pencil pencil : pencilCase) {}",
      "for (pencilCase.next()) {}",
      "for (Pencil pencil : pencilCase.iterator()) {}",
      "for (pencil in pencilCase) {}"
    ],
    "answer": "for (Pencil pencil : pencilCase) {}",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 16,
    "question": "What does this code print?\n\nSystem.out.print(\"apple\".compareTo(\"banana\"));",
    "options": ["0", "positive number", "negative number", "compilation error"],
    "answer": "negative number",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 17,
    "question": "You have an ArrayList of names that you want to sort alphabetically. Which approach would NOT work?",
    "options": [
      "names.sort(Comparator.comparing(String::toString))",
      "Collections.sort(names)",
      "names.sort(List.DESCENDING)",
      "names.stream().sorted((s1, s2) -> s1.compareTo(s2)).collect(Collectors.toList())"
    ],
    "answer": "names.sort(List.DESCENDING)",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 18,
    "question": "By implementing encapsulation, you cannot directly access the class's _ properties unless you are writing code inside the class itself.",
    "options": ["private", "protected", "no-modifier", "public"],
    "answer": "private",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 19,
    "question": "Which is the most up-to-date way to instantiate the current date?",
    "options": [
      "new SimpleDateFormat(\"yyyy-MM-dd\").format(new Date())",
      "new Date(System.currentTimeMillis())",
      "LocalDate.now()",
      "Calendar.getInstance().getTime()"
    ],
    "answer": "LocalDate.now()",
    "roles": ["backend", "fullstack"],
    "type": "java"
  },
  {
    "id": 20,
    "question": "Fill in the blank to create a piece of code that will tell whether int0 is divisible by 5:\n\nboolean isDivisibleBy5 = _____",
    "options": [
      "int0 / 5 ? true: false",
      "int0 % 5 == 0",
      "int0 % 5 != 5",
      "Math.isDivisible(int0, 5)"
    ],
    "answer": "int0 % 5 == 0",
    "roles": ["backend", "fullstack"],
    "type": "java"
  }
]

module.exports = javaQues;