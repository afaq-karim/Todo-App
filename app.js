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
  ul.innerHTML = ""; // Clear the existing list items
  todos.forEach((item) => {
    ul.innerHTML += `<li>${item.name}</li>`; // Append each todo item to the list
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const uuid = generateUUID();
  todos.push({
    id: uuid,
    name: input.value,
  });
  input.value = "";
  renderTodos();
});
