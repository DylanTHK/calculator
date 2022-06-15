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

// assign variables for important html elements
let topDisplay = document.querySelector("#top-display");
let botDisplay = document.querySelector("#bot-display");

// eventlisteners for all calculator buttons (digits, operator, AC, C)
digitButton.forEach(button => 
    button.addEventListener("click", () => appendNumber(button.textContent)));
operatorButton.forEach(button => 
    button.addEventListener("click", () => evaluate(button.textContent)));
equalButton.addEventListener("click", () => operate(currentOperation, previousValue, currentValue));
allClearButton.addEventListener("click", () => allClear(allClearButton));
clearButton.addEventListener("click", () => clearLast(clearButton));


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

function updateBotDisplay(number) {
    botDisplay.textContent = number;
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
    if (operator === "×") {
        let value = multiplication(A,B);
        updateBotDisplay(value);
        return value;
    } else if (operator === "÷") {
        let value = division(A,B);
        updateBotDisplay(value);
        return value;
    } else if (operator === "+") {
        let value = addition(A,B);
        updateBotDisplay(value);
        return value;
    } else {
        let value = subtraction(A,B);
        updateBotDisplay(value);
        return value;
    }
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