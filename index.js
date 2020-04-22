///////////////////////////
//Day 01

console.log('Im Working. Im JS. Im Beautiful. Imworth it');
console.log("hello");
console.log('hello');

///////////////////////////
//Day 02
const array=[["1","A"],["2","B"],["3","C"]];//배열안에 배열
console.log(array);

const info={
name:"ssong",
like:["comic","movie"],//객체 안에 배열
food:[
    {
     name:"choco",
        sweet:true
    },
    {
        name:"berry",
        sweet:true//객체 안에 배열 안에 객체
    }
]
};

console.log(info);

const object={
name:"me",
color:{
    bright:true,
    name:"pink"
},
age:55
};//객체 안에 객체

console.log(object);

///////////////////////////
//Day 03
/*
function sayHello(name,age){
    console.log(`Hello im ${name}! im ${age} years old.`);
}
const nicoInfo=sayHello("nico",15);

console.log(nicoInfo);//정의되지않음! return값이 없어서!
*/
function sayHello(name,age){
    return `Hello im ${name}! im ${age} years old.`;
}
const nicoInfo=sayHello("nico",15);
console.log(nicoInfo);//한번만

const calculator={
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    divide:function(a,b){
        return a/b;
    },
    multi:function(a,b){
        return a*b;
    },
    pow:function(a,b){
        return a**b;
    }
}
const plus=calculator.plus(5,5);
const minus=calculator.minus(5,5);
const divide=calculator.divide(5,5);
const multi=calculator.multi(5,5);
const pow=calculator.pow(5,5);
console.log(plus, minus, divide,multi,pow);

console.log(document);
//index.html에 id줬음
const title=document.getElementById("title");
console.log(title);
title.innerHTML="Hi From JS";
title.style.color="black";

function handleResize(){
    //console.log("I have been resized")
    title.innerHTML="resized!!";
    title.style.color='#9b59b6';
}

window.addEventListener("resize",handleResize);
//handleResize()라고 쓰면 바로 호출의 의미로 resize하지 않아도 log가 찍히게 됨

title.addEventListener("mouseenter",function(){
    title.innerHTML="The mouse is here!";
    title.style.color='#1abc9c';
  })
title.addEventListener("mouseleave",function(){
    title.innerHTML="The mouse is gone!";
    title.style.color='#3498db';
  })

  window.addEventListener("contextmenu",function(){
    title.innerHTML="That was a right click!";
    title.style.color='#f39c12';
  })