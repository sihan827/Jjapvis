const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad(event) {}

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `images/${imgNumber}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
