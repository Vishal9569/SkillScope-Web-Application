export const projectTasks = [
    {
        id: 1,
        title: "Todo List Project",
        description: "Create a Todo list with ability to add tasks.",
        starterCode: `
// Your HTML
document.body.innerHTML = \`
  <input id="taskInput" />
  <button onclick="addTask()">Add</button>
  <ul id="taskList"></ul>
\`;

// Your JavaScript
function addTask() {
  const task = document.getElementById("taskInput").value;
  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("taskList").appendChild(li);
}
    `,
        evaluation: {
            mustInclude: ["createElement", "appendChild"],
            customTests: [
                {
                    codeToRun: `!!document.getElementById("taskInput")`,
                    expected: true,
                },
                {
                    codeToRun: `typeof addTask === 'function'`,
                    expected: true,
                }
            ]
        }
    }
];
