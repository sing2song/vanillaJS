
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const pendingList = document.querySelector(".pendingList");
const finishedList = document.querySelector(".finishedList");

const PENDING = "PENDING";
const FINISHED = "FINISHED";
let toDos = []; //deleteToDo에서 cleanToDos를 넣어줘야함으로 let으로 선언
let endToDos = [];

function saveToDo() {
  localStorage.setItem(PENDING, JSON.stringify(toDos));
  localStorage.setItem(FINISHED, JSON.stringify(endToDos));
}

function checkToDo(event) {
   const btn = event.target;
   const li = btn.parentNode;
   
 const moveBtn = document.createElement("button");
  const newId = event.target.id;
  moveBtn.innerText = "→";
  moveBtn.addEventListener("click", moveToDo); //이벤트주기

  li.appendChild(moveBtn);
  finishedList.appendChild(li);

  const toFinishedDoObj = {
    text: li.firstChild.innerText,
    id: event.target.parentNode.id
  };
  li.removeChild(btn);
  endToDos.push(toFinishedDoObj);
console.log(endToDos);
  saveToDo();
  
}

function moveToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;    
  const checkBtn = document.createElement("button");
   const newId = event.target.id;
   checkBtn.innerText = "✔";
   checkBtn.addEventListener("click", checkToDo); //이벤트주기
 
   li.appendChild(moveBtn);
   pendingList.appendChild(li);
   
   const toDoObj = {
    text: text,
    id: newId
  };
 
   li.removeChild(btn);
   toDoObj.push(toFinishedDoObj);
  console.log(toDoObj);
   saveToDo();
   
 }

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  //console.log(li.id, ul.className);
  ul.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);    
  });
  console.log(cleanToDos);

  const cleanEndToDos = endToDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);    
  });
  console.log(cleanEndToDos);

  toDos = cleanToDos;
  endToDos=cleanEndToDos;
  saveToDo();
}

function pendToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); //이벤트주기
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", checkToDo); //이벤트주기

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  pendingList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };

  toDos.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  pendToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToPend = localStorage.getItem(PENDING);
  const loadedToFinish = localStorage.getItem(FINISHED);

  if (loadedToPend !== null) {
    const parsedToDos = JSON.parse(loadedToPend);
    parsedToDos.forEach(function(toDO) {
      pendToDo(toDO.text); 
    });
  }

  if (loadedToFinish !== null) {
    const parsedToDos = JSON.parse(loadedToFinish);
    parsedToDos.forEach(function(toDO) {
      checkToDo(toDO.text); 
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
