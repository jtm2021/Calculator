const displayAbove = document.querySelector(".display1");
const displayBelow = document.querySelector(".display2");
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const positiveNegative = document.querySelector(".positive-negative");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operation");
const equalSign = document.querySelector(".equals");

let priorInput = "";
let recentInput = "";
let operator = "";
let recentOperator = "";
let output = null;
let decimal = false;

numberButtons.forEach( number => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !decimal) {
      decimal = true;
    } else if (e.target.innerText === "." && decimal) {
      return;
    }
    recentInput += e.target.innerText;
    displayBelow.innerText = recentInput;
  });
});

operatorButtons.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!recentInput) return;
    decimal = false;
    const operator = e.target.innerText;
    if (priorInput && recentInput && operator) {
      operate();
    } else {
      output = parseFloat(recentInput);
    }
    clearLine(operator);
    recentOperator = operator;
  });
});

function clearLine(operatorSymbol = " ") {
  priorInput += recentInput + " " + operatorSymbol + " ";
  displayAbove.innerText = priorInput;
  displayBelow.innerText = "";
  recentInput = "";
}

function operate() {
  if (recentOperator === "+") {
    output = sum(parseFloat(output), parseFloat(recentInput));
  } else if (recentOperator === "-") { 
    output = subtract(parseFloat(output), parseFloat(recentInput));
  } else if (recentOperator === "x") {
    output = multiply(parseFloat(output), parseFloat(recentInput));
  } else if (recentOperator === "/") {
    if (recentInput === "0") {
      alert("You can't divide it by 0");
      displayAbove.tinnerText = "";
      displayBelow.innerText = "";
      priorInput = "";
      recentInput = "";
      return;
    } else output = divide(parseFloat(output), parseFloat(recentInput));
  } else if (recentOperator === "%") {
    output = modulo(parseFloat(output), parseFloat(recentInput));
  }
}

equalSign.addEventListener("click", () => {
  if (!priorInput || !recentInput) return;
  decimal = false;
  operate();
  clearLine();
  displayBelow.innerText = output;
  recentInput = output;
  priorInput = "";
});

clear.addEventListener("click", clearDisplay => {
  displayAbove.innerText = "";
  displayBelow.innerText = "";
  priorInput = "";
  recentInput = "";
  output = "";
});

deleteButton.addEventListener("click", deleteDisplay => {
  if (displayBelow.innerText === "") {
    displayAbove.innerText = "";
  }
  displayBelow.innerText = displayBelow.innerText.slice(0, -1);
  recentInput = displayBelow.innerText;
});

positiveNegative.addEventListener("click", positiveNegativeDisplay => {
  if (displayBelow.innerText.includes("-")) {
    recentInput.innerText = recentInput.innerText.replace("-", "");
    displayBelow.innerText = displayBelow.innerText.replace("-", "");
  } else {
    recentInput = "-" + recentInput;
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
