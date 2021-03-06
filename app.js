// temporary variables for calculator operation
let previousValue = "";
let currentValue = "";
let operationState = false;
let currentOperation = null;

// assign variables to HTML elements
let digitButton = document.querySelectorAll(".digit");
let operatorButton = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equalBtn");
let allClearButton = document.querySelector("#allClearBtn");
let clearButton = document.querySelector("#clearBtn");
let decimalButton = document.querySelector("#digit-decimal");

// assign variables for important html elements
let topDisplay = document.querySelector("#top-display");
let botDisplay = document.querySelector("#bot-display");

// eventlisteners for all calculator buttons (digits, operator, AC, C)
digitButton.forEach(button => 
    button.addEventListener("click", () => appendNumber(button.textContent)));
operatorButton.forEach(button => 
    button.addEventListener("click", () => evaluate(button.textContent)));
decimalButton.addEventListener("click", () => addDecimal(currentValue));
equalButton.addEventListener("click", () => operate(currentOperation, previousValue, currentValue));
allClearButton.addEventListener("click", () => allClear(allClearButton));
clearButton.addEventListener("click", () => clearLast(clearButton));

// to allow for keyboard shortcuts to work with calculator
window.addEventListener("keydown", e => manageKeyBoard(e.key));

function manageKeyBoard(key) {
    if (key >= 0 & key <= 9) appendNumber(key);
    if (key === ".") appendDecimal(currentValue);
    if (key === "-" | key === "+") evaluate(key);
    if (key === "/") evaluate("÷");
    if (key === "*") evaluate("×");
    if (key === "=" | key === "Enter") operate(currentOperation, previousValue, currentValue);
    if (key === "Backspace") clearLast(clearButton);
    if (key === "Escape") allClear(allClearButton);
}

// **************** 1. Occurs when digit button depressed ****************
// function to add numbers to current operations (bottom)
function appendNumber(newNumber) {
    if (currentValue === "0") {
        currentValue = ""
        currentValue += newNumber
    } else {
        currentValue += newNumber;
    }
    updateBotDisplay(currentValue);
}

function addDecimal(item) {
    if (item.includes(".")) {
        return
    } else {
        currentValue += ".";
        botDisplay.textContent += ".";
    }
}

function updateBotDisplay(value) {
    botDisplay.textContent = value;
}

function roundNumber(num) {
    return Math.round(num*100) / 100;
}

// **************** 2. Occurs when operator button depressed ****************
// checks if to call operate() or wait for 1 more number
function evaluate(operator) {
    if (!operationState) {
        currentOperation = operator;
        previousValue = currentValue;
        currentValue = "";
        operationState = true;
    } else {
        previousValue = operate(currentOperation, previousValue, currentValue)
        currentOperation = operator;
        currentValue = "";
    }
}


// **************** . Occurs when operator or equal button depressed ****************
function operate(operator, A, B) {
    let value = "";
    if (operator === null) return;
    if (operator === "×") {
        value = multiplication(A,B);
    } else if (operator === "÷") {
        if (currentValue == 0) {
            alert("Error! Unable to divide by 0");
            return;
        } else {
            value = division(A,B);
        }
    } else if (operator === "+") {
        value = addition(A,B);
    } else {
        value = subtraction(A,B);
    }
    value = roundNumber(value);
    updateBotDisplay(value);
    return value;
}

// Arithmetic functions 
function addition(current, newNum) {
    return parseInt(current) + parseInt(newNum);
}

function subtraction(current, newNum) {
    return parseInt(current) - parseInt(newNum);
}

function multiplication(current, newNum) {
    return parseInt(current) * parseInt(newNum);
}

function division(current, newNum) {
    return parseInt(current) / parseInt(newNum);
}

// **************** 4. Occurs when clear button depressed ****************
// removes last item in the bottom display
function clearLast() {
    let stringLength = currentValue.length;
    if (stringLength > 1) {
        currentValue = currentValue.substring(0, stringLength-1);
    } else {
        currentValue = "0"
    }
    updateBotDisplay(currentValue);
}

// **************** 5. Occurs when all clear button depressed ****************
function allClear() {
    previousValue = "";
    currentValue = "0";
    operationState = false;
    currentOperation = null;
    botDisplay.textContent = "0";
}