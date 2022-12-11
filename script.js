const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const positiveNegative = document.querySelector(".positive-negative");

function firstInput() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      display.innerText += button.innerText;
    });
  console.log(display.innerText);
});
}

function clearDisplay() {
  display.innerText = "";
}

clear.addEventListener("click", clearDisplay);

function positiveNegativeDisplay() {
  if (display.innerText.includes("-")) {
    display.innerText = display.innerText.replace("-", "");
  } else {
    display.innerText = "-" + display.innerText;
  }
}

positiveNegative.addEventListener("click", positiveNegativeDisplay);

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function modulo(a, b) {
  return a % b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

firstInput();