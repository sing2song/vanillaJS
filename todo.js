const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos =[];//deleteToDo에서 cleanToDos를 넣어줘야함으로 let으로 선언

function saveToDo(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo){
       return toDo.id !== parseInt(li.id);
       //console.log(toDo.id,li.id );
    });
    toDos = cleanToDos;
    /*
    function에서 체크된 것들을 
    (위의 코드에서는 삭제한 것과 같지 않으면 cleanToDos에 다시 그대로 담아줌)
    array형태로 cleanTodos에 준다.
    */
    saveToDo();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId =toDos.length+1;
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteToDo);//이벤트주기

    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj ={
        text:text,
        id:newId
    };

    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDO){
            //console.log(parsedToDos);
            paintToDo(toDO.text);//object에 text값을 주었으므로 가능
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();