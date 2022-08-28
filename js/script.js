const ancient = document.querySelectorAll(".ancient");
const lavel = document.querySelector(".lavel");
const buttonLavel = document.querySelectorAll(".button-lavel")
const cardDeckButton = document.querySelector(".card-deck");
const cardCounter = document.querySelector(".card-counter");
const deck = document.querySelector(".deck");


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
}
cardDeckButton.addEventListener('click', deckData);
