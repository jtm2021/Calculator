const wholeDisplay = document.querySelector(".display");
const displayAbove = document.querySelector(".display1");
const displayBelow = document.querySelector(".display2");
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const positiveNegative = document.querySelector(".positive-negative");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operation");
const equalsCalculate = document.querySelector(".equals");

let input1 = "";
let operator = "";
let input2 = "";
let inputPlusOperator = "";

function firstInput() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      input1 = displayAbove.textContent += button.textContent;
      // input1 = parseFloat(input1);
      console.log(typeof(input1 * 1));
      return input1;
    });
});
}

function chooseOperator() {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      operator = button.textContent;
      displayAbove.textContent += operator;
      // console.log(operator);
      // return inputPlusOperator;
    });
  });
}

function secondInput() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      input2 = button.textContent;
      console.log(input2 * 1);
      return input2;
    });
  });
}

function calculateNow() {
  equalsCalculate.addEventListener("click", () => {
    if (operator === "+") {
      totalSum = sum(input1, input2);
      console.log(totalSum);
      displayBelow.textContent = totalSum;
    }
  });
}

function clearDisplay() {
  displayAbove.innerText = "";
  displayBelow.innerText = "";
}

clear.addEventListener("click", clearDisplay);

// function positiveNegativeDisplay() {
//   if (displayAbove.innerText.includes("-")) {
//     displayAbove.innerText = displayAbove.innerText.replace("-", "");
//   } else {
//     displayAbove.innerText = "-" + displayAbove.innerText;
//   }
// }

// positiveNegative.addEventListener("click", positiveNegativeDisplay);

function deleteDisplay() {
  displayAbove.innerText = displayAbove.innerText.slice(0, -1);
  displayBelow.innerText = displayBelow.innerText.slice(0, 0);
}

deleteButton.addEventListener("click", deleteDisplay);

function sum(a, b) {
  return a + b;
}

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function modulo(a, b) {
//   return a % b;
// }

// function operate(operator, a, b) {
//   return operator(a, b);
// }

function calculator() {
  firstInput();
  chooseOperator();
  secondInput();
  calculateNow();
}

calculator();	