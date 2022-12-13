const displayAbove = document.querySelector(".display1");
const displayBelow = document.querySelector(".display2");
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const positiveNegative = document.querySelector(".positive-negative");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operation");
const operation = document.querySelector(".equals");

let input1 = "";
let input2 = "";
let operator = "";
let recentOperator = "";
let decimal = false;

numberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !decimal) {
      decimal = true;
    } else if (e.target.innerText === "." && decimal) {
      return;
    }
    input2 += e.target.innerText;
    displayBelow.innerText = input2;
    // console.log();
  });
});

operatorButtons.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!input2) return;
    decimal = false;
    const operator = e.target.innerText;
    if (input1 && input2 && operator) {
      operate();
    } else {
      output = parseFloat(input2);
    }
    clearVar(operator);
    recentOperator = operator;
    // console.log(operator);
  });
});

function clearVar(name = "") {
  input1 += output + " " + name + " ";
  displayAbove.innerText = input1;
  displayBelow.innerText = "";
  input2 = "";
  displayBelow
}

function operate() {
  if (recentOperator === "+") {
    output = sum(parseFloat(output), parseFloat(input2));
  } else if (recentOperator === "-") { 
    output = subtract(parseFloat(output), parseFloat(input2));
  } else if (recentOperator === "x") {
    output = multiply(parseFloat(output), parseFloat(input2));
  } else if (recentOperator === "/") {
    if (input2 === "0") {
      alert("You can't divide it by 0");
      return;
    }
    output = divide(parseFloat(output), parseFloat(input2));
  } else if (recentOperator === "%") {
    output = modulo(parseFloat(output), parseFloat(input2));
  }
}

operation.addEventListener("click", () => {
  if (!input1 || !input2) return;
  decimal = false;
  operate();
  clearVar();
  displayBelow.innerText = output;
  input2 = output;
  input1 = "";
});

clear.addEventListener("click", clearDisplay => {
  displayAbove.innerText = "";
  displayBelow.innerText = "";
  input1 = "";
  input2 = "";
  output = "";
});

deleteButton.addEventListener("click", deleteDisplay => {
  displayBelow.innerText = displayBelow.innerText.slice(0, -1);
  input2 = input2.slice(0, -1);
});

positiveNegative.addEventListener("click", positiveNegativeDisplay => {
  if (displayBelow.innerText.includes("-")) {
    displayBelow.innerText = displayBelow.innerText.replace("-", "");
    displayAbove.innerText = displayAbove.innerText.replace("-", "");
  } else {
    displayBelow.innerText = "-" + displayBelow.innerText;
  }
});


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