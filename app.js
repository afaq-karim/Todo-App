const todos = [];
const input = document.getElementById("new-todo");
const form = document.querySelector("form");
const ul = document.getElementById("todo-list");

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function renderTodos() {
  ul.innerHTML = "";
  todos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;

    if (item.completed) {
      li.classList.add("strikethrough");
    }

    ul.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const uuid = generateUUID();
  todos.push({
    id: uuid,
    name: input.value,
    completed: false,
  });
  input.value = "";
  renderTodos();
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("strikethrough");

    const liText = event.target.textContent;
    const todo = todos.find((item) => item.name === liText);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }
});
