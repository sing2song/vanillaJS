
const pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList"),
  toDoForm = document.querySelector("form"),
  toDoInput = toDoForm.querySelector("input");

const PENDING_TODOS_LS = "pendingToDos";
const FINISHED_TODOS_LS = "finishedToDos";

let pendingToDos = [];
let finishedToDos = [];

function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_TODOS_LS);
  const loadedFinished = localStorage.getItem(FINISHED_TODOS_LS);
  const parsedPending = JSON.parse(loadedPending || []);
  parsedPending.forEach(function(todo) {
    paintPendingToDo(todo.text);
  });
  const parsedFinished = JSON.parse(loadedFinished || []);
  parsedFinished.forEach(function(todo) {
    paintFinishedToDo(todo.text);
  });
}

function saveToDos() {
  localStorage.setItem(PENDING_TODOS_LS, JSON.stringify(pendingToDos));
  localStorage.setItem(FINISHED_TODOS_LS, JSON.stringify(finishedToDos));
}

function handleSubmit(event) {
  event.preventDefault();
  const toDoText = toDoInput.value;
  paintPendingToDo(toDoText);
  toDoInput.value = "";
}

function handlePendingToFinish(event) {
  const selectedLi = event.target.parentNode.parentNode;
  const text = selectedLi.querySelector("span").innerText;
  deleteSelectedLi(selectedLi);
  deletePendingToDo(selectedLi);
  paintFinishedToDo(text);
}

function handleFinishToPending(event) {
  const selectedLi = event.target.parentNode.parentNode;
  const text = selectedLi.querySelector("span").innerText;
  deleteSelectedLi(selectedLi);
  deleteFinishedToDo(selectedLi);
  paintPendingToDo(text);
}

function handleDeleteTask(event) {
  const buttonContainer = event.target.parentNode;
  const selectedLi = buttonContainer.parentNode;
  deleteSelectedLi(selectedLi);
  deletePendingToDo(selectedLi);
  deleteFinishedToDo(selectedLi);
  saveToDos();
}

function deleteSelectedLi(selectedLi) {
  const list = selectedLi.parentNode;
  list.removeChild(selectedLi);
}

function deletePendingToDo(selectedLi) {
  pendingToDos = pendingToDos.filter(function(todo) {
    return todo.id !== selectedLi.id;
  });
}

function deleteFinishedToDo(selectedLi) {
  finishedToDos = finishedToDos.filter(function(todo) {
    return todo.id !== selectedLi.id;
  });
}

function paintFinishedToDo(text) {
  const li = document.createElement("li");
  const newId = ID();

  const backButton = document.createElement("button");
  backButton.innerText = "⏪";
  backButton.addEventListener("click", handleFinishToPending);
  const delButton = document.createElement("button");
  delButton.innerText = "❌";
  delButton.addEventListener("click", handleDeleteTask);
  const span = document.createElement("span");
  span.innerText = text;
  const div = document.createElement("div");
  div.appendChild(backButton);
  div.appendChild(delButton);

  li.id = newId;
  li.appendChild(span);
  li.appendChild(div);

  finishedList.appendChild(li);
  finishedToDos.push({
    text: text,
    id: newId
  });
  saveToDos();
}

function paintPendingToDo(text) {
  const li = document.createElement("li");
  const newId = ID(); //pendingToDos.length + 1;

  const cplButton = document.createElement("button");
  cplButton.innerText = "✅";
  cplButton.addEventListener("click", handlePendingToFinish);
  const delButton = document.createElement("button");
  delButton.innerText = "❌";
  delButton.addEventListener("click", handleDeleteTask);
  const span = document.createElement("span");
  span.innerText = text;
  const div = document.createElement("div");
  div.appendChild(cplButton);
  div.appendChild(delButton);

  li.id = newId;
  li.appendChild(span);
  li.appendChild(div);

  pendingList.appendChild(li);
  pendingToDos.push({
    text: text,
    id: newId
  });
  saveToDos();
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

var ID = function() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

init();
