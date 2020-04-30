const superEventHandler = {
  range: 0,
  rangeEventHandler() {
    const slider = document.querySelector(".slider");
    const max = document.querySelector(".max");
    slider.addEventListener("change", () => {
      this.range = slider.value;
      max.innerHTML = this.range;
    });
  },
  playEventHandler() {
    const play = document.querySelector(".play");
    const input = document.querySelector(".number");
    const content = document.querySelector(".content");
    const result = document.querySelector(".result");
    play.addEventListener("click", () => {
      const number = input.value;
      if (number !== "") {
        const randomNumber = Math.floor(Math.random() * this.range);
        content.innerHTML = `You chose: ${number} , the machine chose: ${randomNumber}`;
        result.innerHTML = number > randomNumber ? "You win!" : "You lost!";
      }
    });
  }
};

function init() {
  superEventHandler.rangeEventHandler();
  superEventHandler.playEventHandler();
}

init();