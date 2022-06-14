// set variables 
let currentValue = ""; // store mathematical outcome
let newValue = ""; // new temporary variable goes here
let upperDisplay = ""; // string to display at top of the calculator
let lowerDisplay = "0"; // bottom display
let operatorSelected = "";

// assign variables to buttons to allow detection when pressed
let allClearButton = document.querySelector("#allClearBtn");
let clearButton = document.querySelector("#clearBtn");
let digitButton = document.querySelectorAll(".digit");
let operatorButton = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equalBtn");

// event listener for digit buttons
digitButton.forEach(button => 
    button.addEventListener("click", () => combineNumbers(button.textContent)));

// event listener for operator buttons
operatorButton.forEach(button => 
    button.addEventListener("click", () => detectOperator(button.textContent)));

// event listener for equal button
equalButton.addEventListener("click", () => evaluate());
// event listener for clear button

// event listener for all clear button

// **************** 1. Occurs when digit buttons are pressed ****************
// a) function to combine new number with existing number
// b) update new value
// c) call function to display new value
function combineNumbers(newNumber) {
    lowerDisplay = parseInt(lowerDisplay + newNumber);
    newValue = lowerDisplay;
    updateBottomDisplay(lowerDisplay);
}

// function to update the bottom display
function updateBottomDisplay(displayNum) {
    // get bot display and assign text as displayNum
    let botDisplay = document.querySelector("#bot-display");
    botDisplay.textContent = displayNum;
}

// **************** 2. Occurs when operator buttons are pressed ****************
// function to detect type of operator used
function detectOperator(operator) {
    operatorSelected = operator;
    // push lowerDisplay to currentValue
    currentValue = lowerDisplay;
    upperDisplay += lowerDisplay;
    lowerDisplay = ""; // reset lower display

    // call updateTopDisplay
    updateTopDisplay(upperDisplay, operatorSelected);

};

// to update upper display
function updateTopDisplay(equation, operator) {
    let topDisplay = document.querySelector("#top-display");
    upperDisplay = equation + " " + operator
    topDisplay.textContent = upperDisplay;
}

// **************** 3. Occurs when equal button are pressed ****************
// a)calculate currentValue, b)update upperDisplay, c)update lowerDisplay
function evaluate() {
    if (operatorSelected === "÷") {
        currentValue = division(currentValue, newValue);
    } else if (operatorSelected === "×") {
        currentValue = multiplication(currentValue, newValue);
    } else if (operatorSelected === "+") {
        currentValue = addition(currentValue, newValue);
    } else if (operatorSelected === "-") {
        currentValue = subtraction(currentValue, newValue);
    };
    upperDisplay = upperDisplay + " " + newValue;
    updateTopDisplay(upperDisplay, "=")
    updateBottomDisplay(currentValue);
}

function addition(current, num2) {
    return current + num2;
}

function subtraction(current, num2) {
    return current - num2;
}

function multiplication(current, num2) {
    return current * num2;
}

function division(current, num2) {
    return current / num2;
}