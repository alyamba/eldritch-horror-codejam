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

const lastCard = document.querySelector(".last-card");

const cardsData = [
  {
    id: "blue1",
    cardFace: "../assets/MythicCards/blue/blue1.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue2",
    cardFace: "../assets/MythicCards/blue/blue2.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue3",
    cardFace: "../assets/MythicCards/blue/blue3.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue4",
    cardFace: "../assets/MythicCards/blue/blue4.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue5",
    cardFace: "../assets/MythicCards/blue/blue5.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue6",
    cardFace: "../assets/MythicCards/blue/blue6.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue7",
    cardFace: "../assets/MythicCards/blue/blue7.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "blue8",
    cardFace: "../assets/MythicCards/blue/blue8.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue9",
    cardFace: "../assets/MythicCards/blue/blue9.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "blue10",
    cardFace: "../assets/MythicCards/blue/blue10.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue11",
    cardFace: "../assets/MythicCards/blue/blue11.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "blue12",
    cardFace: "../assets/MythicCards/blue/blue12.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "brown1",
    cardFace: "../assets/MythicCards/brown/brown1.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown2",
    cardFace: "../assets/MythicCards/brown/brown2.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown3",
    cardFace: "../assets/MythicCards/brown/brown3.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown4",
    cardFace: "../assets/MythicCards/brown/brown4.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown5",
    cardFace: "../assets/MythicCards/brown/brown5.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown6",
    cardFace: "../assets/MythicCards/brown/brown6.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown7",
    cardFace: "../assets/MythicCards/brown/brown7.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown8",
    cardFace: "../assets/MythicCards/brown/brown8.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown9",
    cardFace: "../assets/MythicCards/brown/brown9.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown10",
    cardFace: "../assets/MythicCards/brown/brown10.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown11",
    cardFace: "../assets/MythicCards/brown/brown11.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown12",
    cardFace: "../assets/MythicCards/brown/brown12.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown13",
    cardFace: "../assets/MythicCards/brown/brown13.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown14",
    cardFace: "../assets/MythicCards/brown/brown14.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown15",
    cardFace: "../assets/MythicCards/brown/brown15.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown16",
    cardFace: "../assets/MythicCards/brown/brown16.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown17",
    cardFace: "../assets/MythicCards/brown/brown17.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown18",
    cardFace: "../assets/MythicCards/brown/brown18.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown19",
    cardFace: "../assets/MythicCards/brown/brown19.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown20",
    cardFace: "../assets/MythicCards/brown/brown20.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown21",
    cardFace: "../assets/MythicCards/brown/brown21.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "green1",
    cardFace: "../assets/MythicCards/green/green1.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green2",
    cardFace: "../assets/MythicCards/green/green2.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green3",
    cardFace: "../assets/MythicCards/green/green3.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green4",
    cardFace: "../assets/MythicCards/green/green4.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green5",
    cardFace: "../assets/MythicCards/green/green5.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green6",
    cardFace: "../assets/MythicCards/green/green6.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green7",
    cardFace: "../assets/MythicCards/green/green7.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green8",
    cardFace: "../assets/MythicCards/green/green8.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green9",
    cardFace: "../assets/MythicCards/green/green9.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green10",
    cardFace: "../assets/MythicCards/green/green10.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green11",
    cardFace: "../assets/MythicCards/green/green11.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green12",
    cardFace: "../assets/MythicCards/green/green12.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green13",
    cardFace: "../assets/MythicCards/green/green13.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green14",
    cardFace: "../assets/MythicCards/green/green14.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green15",
    cardFace: "../assets/MythicCards/green/green15.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green16",
    cardFace: "../assets/MythicCards/green/green16.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green17",
    cardFace: "../assets/MythicCards/green/green17.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green18",
    cardFace: "../assets/MythicCards/green/green18.png",
    difficulty: "easy",
    color: "green",
  },
];

let ancientActive;

//Выбирает древнего
function clickAncient(item) {
  console.log(item.alt);
  buttonLavel.forEach((item) => item.classList.remove("button-lavel-active"));
  if (ancientActive) {
    ancientActive = item.alt;
    ancient.forEach((item) => item.classList.remove("ancient-active"));
    cardDeckButton.classList.add("card-deck-display");
    cardCounter.classList.add("display");
    deck.classList.add("display");
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
    cardCounter.classList.add("display");
    deck.classList.add("display");
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

let result = {};
const regularCards = cardsData.filter((data) => data.difficulty === "normal");

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

  if (buttonActive === "super-easy") {
    result = cardsData.filter((data) => data.difficulty === "easy");
  }

  if (buttonActive === "easy") {
    result = cardsData.filter((data) => data.difficulty !== "hard");
  }

  if (buttonActive === "normal") {
    result = cardsData;
  }

  if (buttonActive === "hard") {
    result = cardsData.filter((data) => data.difficulty !== "easy");
  }

  if (buttonActive === "super-hard") {
    result = cardsData.filter((data) => data.difficulty === "hard");
  }

  console.log(result);

  const allGreen =
    parseInt(firstGreen.textContent) +
    parseInt(secondGreen.textContent) +
    parseInt(thirdGreen.textContent);
  const allBrown =
    parseInt(firstBrown.textContent) +
    parseInt(secondBrown.textContent) +
    parseInt(thirdBrown.textContent);
  const allBlue =
    parseInt(firstBlue.textContent) +
    parseInt(secondBlue.textContent) +
    parseInt(thirdBlue.textContent);

  console.log(allGreen, allBrown, allBlue);
}
cardDeckButton.addEventListener("click", deckData);

function getCard(cardDeck, stepColor) {
  let cardNumber = Math.floor(Math.random() * (cardDeck.length - 0) + 0);
  console.log(cardDeck[cardNumber].cardFace);
  lastCard.style.backgroundImage = `url('${cardDeck[cardNumber].cardFace}')`;
  stepColor.textContent = stepColor.textContent - 1;
}

function displayCard() {
  const coloredGreen = result.filter((card) => card.color === "green");
  const coloredBrown = result.filter((card) => card.color === "brown");
  const coloredBlue = result.filter((card) => card.color === "blue");
  if (firstGreen.textContent > 0) {
    getCard(coloredGreen, firstGreen);
  } else if (firstBrown.textContent > 0) {
    getCard(coloredBrown, firstBrown);
  } else if (firstBlue.textContent > 0) {
    getCard(coloredBlue, firstBlue);
  } else if (secondGreen.textContent > 0) {
    getCard(coloredGreen, secondGreen);
  } else if (secondBrown.textContent > 0) {
    getCard(coloredBrown, secondBrown);
  } else if (secondBlue.textContent > 0) {
    getCard(coloredBlue, secondBlue);
  } else if (thirdGreen.textContent > 0) {
    getCard(coloredGreen, thirdGreen);
  } else if (thirdBrown.textContent > 0) {
    getCard(coloredBrown, thirdBrown);
  } else if (thirdBlue.textContent > 0) {
    getCard(coloredBlue, thirdBlue);
  } else {
    let data = confirm("Колода закончена");
    console.log(data);
  }
}
deck.addEventListener("click", displayCard);
