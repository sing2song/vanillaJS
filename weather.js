const API_KEY='41d3fd8e58c752ef27d86b4ab3b73d7d';

const COORDS ='coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj={
       latitude,
       longitude
   };
   //객체의 변수 이름과 key의 이름을 같게 저장할 때 위와 같이 생략가능

   saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    //navigator API를 사용해서 좌표를 가져온다
    //매개변수 = (좌표를 가져올 때 성공했을 때 처리 함수,실패했을 때 처리 함수)
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);

}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords==null){
        askForCoords();//좌표처리
    }else{

    }
}

function init(){
    loadCoords();
}

init();