
const h2 = document.querySelector("h2");
let selectNumSpan = h2.querySelector(".selectNum");

const numberForm = document.querySelector(".numberForm"),
  numberText = numberForm.querySelector(".numberText");
let rangeInput = numberForm.querySelector("#randomNum");

const resultDiv = document.querySelector(".resultDiv");


function playGame(){
  resultDiv.innerHTML="";//초기화
  let selectNum=selectNumSpan.innerText
  console.log(selectNum);
  const randomNum = Math.floor(Math.random() * (selectNum-0+1))+0;
  const span = document.createElement("span");
  span.innerHTML = "You chose : "+numberText.value+", machine chose : "+randomNum+".<br>";
  
  let strong = document.createElement("strong");
  if(numberText.value==randomNum){
    strong.innerText="You Won!"
  }else{
    strong.innerText="You Lost!"
  }

  resultDiv.appendChild(span);
  resultDiv.appendChild(strong);
  
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = numberText.value;
  if(!isNaN(currentValue)){//수가 맞다면
    console.log("currentValue="+ currentValue);
    playGame();
  }

}

function init() {
  numberForm.addEventListener("submit", handleSubmit);
  rangeInput.addEventListener("input", function() {
    let rangeNum = rangeInput.value;
    selectNumSpan.innerText = rangeNum;    
  });
}

init();
