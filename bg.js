const body = document.querySelector("body");


const IMG_NUMBER=4;

/*
//API에서 처리해준다면 필요할 함수
function handleImageLoad(){
    console.log("good");
}
*/

function paintImage(imgNumber){
    const img = new Image();
    img.src=`images/${imgNumber+1}.jpg`;
    //img.addEventListener('loadend',handleImageLoad);
    img.classList.add('bgImage');
    //body.appendChild(img);//body하단에 붙음 
    body.prepend(img);//body상단에 붙음 어디든 상관없다
}


function getNumber(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
 const randomNumber = getNumber();
 paintImage(randomNumber);
}

init();