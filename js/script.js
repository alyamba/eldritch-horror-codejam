const ancient = document.querySelectorAll(".ancient");
const lavel = document.querySelector(".lavel");
const buttonLevel = document.querySelectorAll(".button-lavel");
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
    cardFace: "../assets/MythicCardsImages/blue/blue1.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue2",
    cardFace: "../assets/MythicCardsImages/blue/blue2.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue3",
    cardFace: "../assets/MythicCardsImages/blue/blue3.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue4",
    cardFace: "../assets/MythicCardsImages/blue/blue4.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue5",
    cardFace: "../assets/MythicCardsImages/blue/blue5.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue6",
    cardFace: "../assets/MythicCardsImages/blue/blue6.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue7",
    cardFace: "../assets/MythicCardsImages/blue/blue7.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "blue8",
    cardFace: "../assets/MythicCardsImages/blue/blue8.png",
    difficulty: "hard",
    color: "blue",
  },
  {
    id: "blue9",
    cardFace: "../assets/MythicCardsImages/blue/blue9.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "blue10",
    cardFace: "../assets/MythicCardsImages/blue/blue10.png",
    difficulty: "easy",
    color: "blue",
  },
  {
    id: "blue11",
    cardFace: "../assets/MythicCardsImages/blue/blue11.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "blue12",
    cardFace: "../assets/MythicCardsImages/blue/blue12.png",
    difficulty: "normal",
    color: "blue",
  },
  {
    id: "brown1",
    cardFace: "../assets/MythicCardsImages/brown/brown1.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown2",
    cardFace: "../assets/MythicCardsImages/brown/brown2.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown3",
    cardFace: "../assets/MythicCardsImages/brown/brown3.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown4",
    cardFace: "../assets/MythicCardsImages/brown/brown4.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown5",
    cardFace: "../assets/MythicCardsImages/brown/brown5.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown6",
    cardFace: "../assets/MythicCardsImages/brown/brown6.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown7",
    cardFace: "../assets/MythicCardsImages/brown/brown7.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown8",
    cardFace: "../assets/MythicCardsImages/brown/brown8.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown9",
    cardFace: "../assets/MythicCardsImages/brown/brown9.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown10",
    cardFace: "../assets/MythicCardsImages/brown/brown10.png",
    difficulty: "hard",
    color: "brown",
  },
  {
    id: "brown11",
    cardFace: "../assets/MythicCardsImages/brown/brown11.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown12",
    cardFace: "../assets/MythicCardsImages/brown/brown12.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown13",
    cardFace: "../assets/MythicCardsImages/brown/brown13.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown14",
    cardFace: "../assets/MythicCardsImages/brown/brown14.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "brown15",
    cardFace: "../assets/MythicCardsImages/brown/brown15.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown16",
    cardFace: "../assets/MythicCardsImages/brown/brown16.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown17",
    cardFace: "../assets/MythicCardsImages/brown/brown17.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown18",
    cardFace: "../assets/MythicCardsImages/brown/brown18.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown19",
    cardFace: "../assets/MythicCardsImages/brown/brown19.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown20",
    cardFace: "../assets/MythicCardsImages/brown/brown20.png",
    difficulty: "normal",
    color: "brown",
  },
  {
    id: "brown21",
    cardFace: "../assets/MythicCardsImages/brown/brown21.png",
    difficulty: "easy",
    color: "brown",
  },
  {
    id: "green1",
    cardFace: "../assets/MythicCardsImages/green/green1.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green2",
    cardFace: "../assets/MythicCardsImages/green/green2.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green3",
    cardFace: "../assets/MythicCardsImages/green/green3.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green4",
    cardFace: "../assets/MythicCardsImages/green/green4.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green5",
    cardFace: "../assets/MythicCardsImages/green/green5.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green6",
    cardFace: "../assets/MythicCardsImages/green/green6.png",
    difficulty: "hard",
    color: "green",
  },
  {
    id: "green7",
    cardFace: "../assets/MythicCardsImages/green/green7.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green8",
    cardFace: "../assets/MythicCardsImages/green/green8.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green9",
    cardFace: "../assets/MythicCardsImages/green/green9.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green10",
    cardFace: "../assets/MythicCardsImages/green/green10.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green11",
    cardFace: "../assets/MythicCardsImages/green/green11.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green12",
    cardFace: "../assets/MythicCardsImages/green/green12.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green13",
    cardFace: "../assets/MythicCardsImages/green/green13.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green14",
    cardFace: "../assets/MythicCardsImages/green/green14.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green15",
    cardFace: "../assets/MythicCardsImages/green/green15.png",
    difficulty: "normal",
    color: "green",
  },
  {
    id: "green16",
    cardFace: "../assets/MythicCardsImages/green/green16.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green17",
    cardFace: "../assets/MythicCardsImages/green/green17.png",
    difficulty: "easy",
    color: "green",
  },
  {
    id: "green18",
    cardFace: "../assets/MythicCardsImages/green/green18.png",
    difficulty: "easy",
    color: "green",
  },
];

let ancientActive;

//Выбирает древнего
function clickAncient(item) {
  buttonLevel.forEach((item) => item.classList.remove("button-lavel-active"));
  if (ancientActive) {
    ancientActive = item.alt;
    ancient.forEach((item) => item.classList.remove("ancient-active"));
    cardDeckButton.classList.add("card-deck-display");
    cardCounter.classList.add("display");
    deck.classList.add("display");
    item.classList.add("active");
    item.classList.add("ancient-active");
    lastCard.classList.add("display");
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
  if (buttonActive) {
    buttonActive = item.id;
    buttonLevel.forEach((item) => item.classList.remove("button-lavel-active"));
    item.classList.add("active");
    item.classList.add("button-lavel-active");
    cardCounter.classList.add("display");
    deck.classList.add("display");
    lastCard.classList.add("display");
  } else {
    buttonActive = item.id;
    item.classList.add("active");
    item.classList.add("button-lavel-active");
  }

  cardDeck();
}
buttonLevel.forEach((item) =>
  item.addEventListener("click", () => clickLavel(item))
);

//Показ кнопки замешать колоду
function cardDeck() {
  cardDeckButton.classList.remove("card-deck-display");
}

let result = [];
let usedCardNumber = [];
let usedAdditionalCardNumber = [];
const regularCards = cardsData.filter((data) => data.difficulty === "normal");

//Данные карт
function deckData() {
  cardDeckButton.classList.add("card-deck-display");
  cardCounter.classList.remove("display");
  deck.classList.remove("display");

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

  usedCardNumber = {
    green: [],
    brown: [],
    blue: [],
  };
  usedAdditionalCardNumber = {
    green: [],
    brown: [],
    blue: [],
  };
}
cardDeckButton.addEventListener("click", deckData);

function getCard(cardDeck, stepColor) {
  const cardDeckColor = cardDeck[0].color;
  if (usedCardNumber[cardDeckColor].length !== cardDeck.length) {
    const cardNumber = Math.floor(Math.random() * (cardDeck.length - 0) + 0);
    if (
      usedCardNumber[cardDeckColor].find((el) => el === cardDeck[cardNumber].id)
    ) {
      getCard(cardDeck, stepColor);
    } else {
      lastCard.style.backgroundImage = `url('${cardDeck[cardNumber].cardFace}')`;
      stepColor.textContent = stepColor.textContent - 1;
      usedCardNumber[cardDeckColor] = [
        ...usedCardNumber[cardDeckColor],
        cardDeck[cardNumber].id,
      ];
    }
  } else {
    getAdditionalCard(stepColor, cardDeckColor);
  }
}

function getAdditionalCard(stepColor, cardDeckColor) {
  const normalCardDeck = cardsData
    .filter((data) => data.difficulty === "normal")
    .filter((card) => card.color === stepColor.classList[1]);
  const cardNumber = Math.floor(
    Math.random() * (normalCardDeck.length - 0) + 0
  );
  if (
    usedAdditionalCardNumber[cardDeckColor].find(
      (el) => el === normalCardDeck[cardNumber].id
    )
  ) {
    getAdditionalCard(stepColor);
  } else {
    lastCard.style.backgroundImage = `url('${normalCardDeck[cardNumber].cardFace}')`;
    stepColor.textContent = stepColor.textContent - 1;
    usedAdditionalCardNumber[cardDeckColor] = [
      ...usedAdditionalCardNumber[cardDeckColor],
      normalCardDeck[cardNumber].id,
    ];
  }
}

function displayCard() {
  lastCard.classList.remove("display");

  const firstStageRemainingCards =
    parseInt(firstGreen.textContent) +
    parseInt(firstBrown.textContent) +
    parseInt(firstBlue.textContent);
  const secondStageRemainingCards =
    parseInt(secondGreen.textContent) +
    parseInt(secondBrown.textContent) +
    parseInt(secondBlue.textContent);
  const thirdStageRemainingCards =
    parseInt(thirdGreen.textContent) +
    parseInt(thirdBrown.textContent) +
    parseInt(thirdBlue.textContent);

  if (firstStageRemainingCards > 0) {
    getRandomColorCard(firstGreen, firstBrown, firstBlue);
  } else if (secondStageRemainingCards > 0) {
    getRandomColorCard(secondGreen, secondBrown, secondBlue);
  } else if (thirdStageRemainingCards > 0) {
    getRandomColorCard(thirdGreen, thirdBrown, thirdBlue);
  } else {
    let data = confirm("Колода собрана");
    console.log(data);
  }
}

function getRandomColorCard(green, brown, blue) {
  const coloredGreen = result.filter((card) => card.color === "green");
  const coloredBrown = result.filter((card) => card.color === "brown");
  const coloredBlue = result.filter((card) => card.color === "blue");

  const colors = [green, brown, blue];
  const colorsDeck = [coloredGreen, coloredBrown, coloredBlue];
  const colorNumber = Math.floor(Math.random() * colors.length);

  if (colors[colorNumber].textContent > 0) {
    getCard(colorsDeck[colorNumber], colors[colorNumber]);
  } else {
    getRandomColorCard(green, brown, blue);
  }
}

deck.addEventListener("click", displayCard);
