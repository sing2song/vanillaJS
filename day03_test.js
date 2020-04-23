// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title=document.querySelector("h2");

//함수정의
function mouseenter(){
  title.innerHTML="The mouse is here!";
  title.style.color=colors[0];
}

function mouseleave(){
    title.innerHTML="The mouse is gone!";
    title.style.color=colors[1];
}

function resize(){
  title.innerHTML="You just resized!!";
  title.style.color=colors[2];
}

function contextmenu(){
    title.innerHTML="That was a right click!";
    title.style.color=colors[4];
}

//이벤트걸기
title.addEventListener("mouseenter",mouseenter)

title.addEventListener("mouseleave",mouseleave)

window.addEventListener("resize",resize)

window.addEventListener("contextmenu",contextmenu)


const superEventHandler = {
  //글위에 마우스
  mouseenter:mouseenter,

  //글밖에 마우스
  mouseleave:mouseleave,

  //창 리사이즈
  resize:resize,

  //우클릭
  contextmenu:contextmenu
};



////////////////////////////////////////////////////////
//정답
const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleSelect: function() {
    h2.innerText = "You're selecting me!";
    h2.style.color = colors[3];
  },
  handleContext: function() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  }
};
//객체로 불러옴
h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);


