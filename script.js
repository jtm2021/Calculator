const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");

function displayCalculator() {
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


displayCalculator();


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