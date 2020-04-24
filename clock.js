const clockContainer = document.querySelector(".js-clock"),
    clockTitle=clockContainer.querySelector("h2");

function getTime(){

    
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();

  const gap = xmasDay.getTime() - now.getTime(); //두 날짜의 차이

  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  clockTitle.innerText = `${day < 10 ? `0${day}` : day}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();