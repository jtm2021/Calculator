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
let recentOperator = "";
let output = null;
let decimal = false;

numberButtons.forEach(number => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !decimal){
      decimal = true;
    } else if ((e.target.innerText === "." && decimal) || (recentInput === "0" && e.target.innerText === "0")) {
      return;
    } else if (displayBelow.innerText.includes("Infinity") || displayBelow.innerText.includes("NaN")) {
      displayBelow.innerText = "";
      recentInput = "";
      priorInput = "";
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
      output = divide(parseFloat(output), parseFloat(recentInput));
      output = parseFloat(output.toFixed(4));
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
  decimal = false;
});

deleteButton.addEventListener("click", deleteDisplay => {
  if (displayBelow.innerText === "") {
    displayAbove.innerText = "";
    priorInput = "";
  } else if (displayBelow.innerText === "Infinity" || displayBelow.innerText === "NaN") {
    displayBelow.innerText = "";
    displayAbove.innerText = "";
    priorInput = "";
  }
  displayBelow.innerText = displayBelow.innerText.slice(0, -1);
  recentInput = displayBelow.innerText;
});

positiveNegative.addEventListener("click", positiveNegativeDisplay => {
  if (displayBelow.innerText === "" || displayBelow.innerText === "0" || displayBelow.innerText === "0.") {
    return;
  }
  displayBelow.innerText = displayBelow.innerText * -1;
  recentInput = displayBelow.innerText;
  return;
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

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    pressNumberButton(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    pressOperatorButton(e.key);
  } else if (e.key === "*") {
    pressOperatorButton("x");
  } else if (e.key == "Enter" || e.key === "=") {
    equalSign.click();
  } else if (e.key === "Backspace") {
    deleteButton.click();
  } else if (e.key === "Escape" || e.key === "Delete") {
    clear.click();
  }	else if (e.key === "n") {
    positiveNegative.click();
  }
});

function pressNumberButton(key) {
  numberButtons.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function pressOperatorButton(key) {
  operatorButtons.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
