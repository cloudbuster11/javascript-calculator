const display = document.querySelector('.screen__output');
display.value = 0;

const calculator = {
  displayValue: '0',
  firstOperand: null,
  secondOperand: null,
  operator: null,
  timeForSecondOperand: false,
};

// Lyssnar efter vilka knappar som trycks.
const keys = document.querySelector('.calculator');
keys.addEventListener('click', (event) => {
  const { target } = event;
  // console.log(target); Target är själva html taggen
  // console.log(event); Event är själva klicket
  // target.value är värdet value i html taggen

  if (!target.matches('button')) {
    return;
  } else if (target.classList.contains('operator')) {
    operator(target.value);
    updateDisplay();
    return;
  } else if (target.classList.contains('all-clear')) {
    console.log('Ac', target.value);
    allClear();
    return;
  } else if (target.classList.contains('equal')) {
    calculate();
    console.log(target.value);
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});

// Matar in sifforna i objektet
function inputDigit(digit) {
  let { displayValue, timeForSecondOperand, secondOperand } =
    calculator;

  if (timeForSecondOperand === true) {
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit;
    calculator.secondOperand = Number(calculator.displayValue);

    console.log(`Second operand = ${calculator.secondOperand}`);
    console.log('andra rundan');
    console.log(`Andra runda tryckt siffra är ${digit}`);
    console.log(
      `Andra runda siffran i displayvalue är ${calculator.displayValue}`
    );
    // timeForSecondOperand = false;
    return;
  } else {
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit;
    console.log(`Tryckt siffra är ${digit}`);
    console.log(
      `Siffran i displayvalue är ${calculator.displayValue}`
    );
    console.log('första runda');

    return;
  }
}

// Uppdaterar display
function updateDisplay() {
  const display = document.querySelector('.screen__output');
  display.value = calculator.displayValue;
}

// Om en operator blir tryckt
function operator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  calculator.firstOperand = Number(calculator.displayValue);
  calculator.displayValue = '0';
  calculator.timeForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator.operator);
  console.log(calculator);

  // updateDisplay();
  // inputDigit();
  return;
}

function inputDecimal() {}

function calculate() {
  const { firstOperand, operator, secondOperand } = calculator;
  console.log('dags att addera');
  console.log(`First operand = ${firstOperand}`);
  console.log(`Second operand = ${secondOperand}`);
  console.log(`Operator är ${operator}`);
  console.log(calculator.timeForSecondOperand);
  let result;
  if (operator === '+') {
    result = firstOperand + secondOperand;
    console.log(result);
    calculator.displayValue = result;
    calculator.timeForSecondOperand = false;
    updateDisplay();
  } else if (operator === '-') {
    result = firstOperand - secondOperand;
    console.log(result);
    calculator.timeForSecondOperand = false;
    calculator.displayValue = result;
    updateDisplay();
  } else if (operator === '/') {
    result = firstOperand / secondOperand;
    console.log(result);
    calculator.timeForSecondOperand = false;
    calculator.displayValue = result;
    updateDisplay();
  } else if (operator === '*') {
    result = firstOperand * secondOperand;
    console.log(result);
    calculator.timeForSecondOperand = false;
    calculator.displayValue = result;
    updateDisplay();
  }
}

function allClear() {
  calculator.timeForSecondOperand = false;
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.secondOperand = null;
  calculator.operator = null;
  console.log(calculator);
  updateDisplay();
}
