const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperator: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector(".screen__output");
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".calculator");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  } else if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  } else if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  } else if (target.classList.contains("all-clear")) {
    console.log("Ac", target.value);
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperator = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}
