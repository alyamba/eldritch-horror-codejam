const ancient = document.querySelectorAll(".ancient");
const lavel = document.querySelector(".lavel");
const buttonLavel = document.querySelectorAll(".button-lavel");
const cardDeckButton = document.querySelector(".card-deck");
const cardCounter = document.querySelector(".card-counter");
const deck = document.querySelector(".deck");

const firstGreen = document.querySelector(".first-green");
const firstBrown = document.querySelector(".first-brown");
const firstBlue = document.querySelector(".first-blue");

const secondGreen = document.querySelector(".second-green");
const secondBrown = document.querySelector(".second-brown");
const secondBlue = document.querySelector(".second-blue");

const thirdGreen = document.querySelector(".third-green");
const thirdBrown = document.querySelector(".third-brown");
const thirdBlue = document.querySelector(".third-blue");

let ancientActive;

//Выбирает древнего
function clickAncient(item) {
  console.log(item.alt);
  buttonLavel.forEach((item) => item.classList.remove("button-lavel-active"));
  if (ancientActive) {
    ancientActive = item.alt;
    ancient.forEach((item) => item.classList.remove("ancient-active"));
    item.classList.add("active");
    item.classList.add("ancient-active");
  } else {
    ancientActive = item.alt;
    item.classList.add("active");
    item.classList.add("ancient-active");
  }

  displayLavel();
}
ancient.forEach((item) =>
  item.addEventListener("click", () => clickAncient(item))
);

//Показывает уровни
function displayLavel() {
  lavel.classList.remove("lavel-display");
}

let buttonActive;

//Выбирает уровень
function clickLavel(item) {
  console.log(item.id);
  if (buttonActive) {
    buttonActive = item.id;
    buttonLavel.forEach((item) => item.classList.remove("button-lavel-active"));
    item.classList.add("active");
    item.classList.add("button-lavel-active");
  } else {
    buttonActive = item.id;
    item.classList.add("active");
    item.classList.add("button-lavel-active");
  }

  cardDeck();
}
buttonLavel.forEach((item) =>
  item.addEventListener("click", () => clickLavel(item))
);

//Кнопка замешать колоду
function cardDeck() {
  cardDeckButton.classList.remove("card-deck-display");
}

//Данные карт
function deckData() {
  cardDeckButton.classList.add("card-deck-display");
  cardCounter.classList.remove("display");
  deck.classList.remove("display");

  console.log(ancientActive);
  console.log(buttonActive);

  if (ancientActive === "azathoth") {
    firstGreen.textContent = 1;
    firstBrown.textContent = 2;
    firstBlue.textContent = 1;

    secondGreen.textContent = 2;
    secondBrown.textContent = 3;
    secondBlue.textContent = 1;

    thirdGreen.textContent = 2;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
  } else if (ancientActive === "cthulhu") {
    firstGreen.textContent = 0;
    firstBrown.textContent = 2;
    firstBlue.textContent = 2;

    secondGreen.textContent = 1;
    secondBrown.textContent = 3;
    secondBlue.textContent = 0;

    thirdGreen.textContent = 3;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
  } else if (ancientActive === "iogSothoth") {
    firstGreen.textContent = 0;
    firstBrown.textContent = 2;
    firstBlue.textContent = 1;

    secondGreen.textContent = 2;
    secondBrown.textContent = 3;
    secondBlue.textContent = 1;

    thirdGreen.textContent = 3;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
  } else {
    firstGreen.textContent = 1;
    firstBrown.textContent = 2;
    firstBlue.textContent = 1;

    secondGreen.textContent = 3;
    secondBrown.textContent = 2;
    secondBlue.textContent = 1;

    thirdGreen.textContent = 2;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
  }
}
cardDeckButton.addEventListener("click", deckData);
