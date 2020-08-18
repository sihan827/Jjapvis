const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function removeName() {
  localStorage.removeItem(USER_LS);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function handleReset(event) {
  removeName();
  input.value = "";
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  const resetBtn = document.createElement("button");
  resetBtn.classList.add("js-reset");
  resetBtn.addEventListener("click", handleReset);
  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-redo-alt");
  resetBtn.appendChild(icon);
  greeting.appendChild(resetBtn);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  askForName();
  if (currentUser === null) {
    return;
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
