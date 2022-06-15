let currentOperation = "";

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
    button.addEventListener("click", () => console.log(button)));

equalButton.addEventListener("click", () => console.log(equalButton));
allClearButton.addEventListener("click", () => console.log(allClearButton));
clearButton.addEventListener("click", () => console.log(clearButton));


// **************** 1. Occurs when digit button depressed ****************
// function to add numbers to current operations (bottom)
function appendNumber(newNumber) {
    let temp = botDisplay.textContent + newNumber;
    botDisplay.textContent = parseInt(temp).toString();
}

// **************** 2. Occurs when operator button depressed ****************


// **************** . Occurs when operator or equal button depressed ****************
function operate(operator, current, newNum) {

}

// Arithmetic functions 
function addition(current, newNum) {
    return parseInt(current) + parseInt(newNum);
}

function subtraction(current, newNum) {
    return current - newNum;
}

function multiplication(current, newNum) {
    return current * newNum;
}

function division(current, newNum) {
    return current / newNum;
}

// **************** 4. Occurs when clear button depressed ****************
// removes last item in the bottom display
function clearBottom() {
    let stringLength = lowerDisplay.length;
    if (stringLength > 1) {
        lowerDisplay = lowerDisplay.substring(0, lowerDisplay.length-1);
    } else {
        lowerDisplay = "";
    }
    updateBottomDisplay(lowerDisplay);
}

// **************** 5. Occurs when all clear button depressed ****************
function allClear() {
    currentValue = ""; 
    newValue = ""; 
    upperDisplay = ""; 
    lowerDisplay = ""; 
    operatorSelected = "";
    topDisplay.textContent = "";
    botDisplay.textContent = "0";
}