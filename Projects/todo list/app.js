//getting element from dom

let from = document.querySelector("from");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  //creation element
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  //setting values & styles
  todo.appendChild(textEl);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  //attech events

  closeEl.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });
  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
