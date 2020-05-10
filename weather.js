const weather = document.querySelector(".js-weather");

const API_KEY="41d3fd8e58c752ef27d86b4ab3b73d7d";
const COORDS ='coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            //then()을 2번쓰는 이유 위의 json의 로딩 후 함수를 움직이게 할려고
            //console.log(json);

            const temparature = json.main.temp;
            const place = json.name;

            weather.innerText = `${temparature} @ ${place}`;
        });
}


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
   getWeather(latitude,longitude);
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
        const parseCoords=JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();