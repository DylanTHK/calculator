// set variables 
let currentValue = ""; // store mathematical outcome (int)
let newValue = ""; // new temporary variable goes here
let upperDisplay = ""; // string to display at top of the calculator
let lowerDisplay = ""; // bottom display
let operatorSelected = "";

// assign variables to buttons to allow detection when pressed
let allClearButton = document.querySelector("#allClearBtn");
let clearButton = document.querySelector("#clearBtn");
let digitButton = document.querySelectorAll(".digit");
let operatorButton = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equalBtn");

// event listener for 
// digit, operator, equal, all clear, clear buttons, 
digitButton.forEach(button => 
    button.addEventListener("click", () => combineNumbers(button.textContent)));
operatorButton.forEach(button => 
    button.addEventListener("click", () => detectOperator(button.textContent)));
equalButton.addEventListener("click", () => evaluate());
// event listener for clear button
clearButton.addEventListener("click", () => clearBottom());
// event listener for all clear button
allClearButton.addEventListener("click", () => allClear());

let topDisplay = document.querySelector("#top-display");
let botDisplay = document.querySelector("#bot-display");

// **************** 1. Occurs when digit buttons are pressed ****************
// a) function to combine new number with existing number
// b) update new value
// c) call function to display new value
function combineNumbers(newNumber) {
    // lowerDisplay = parseInt(lowerDisplay + newNumber);
    lowerDisplay += newNumber;
    newValue = lowerDisplay;
    updateBottomDisplay(lowerDisplay);
}

// function to update the bottom display
function updateBottomDisplay(displayNum) {
    // get bot display and assign text as displayNum
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

}

// to update upper display
function updateTopDisplay(equation, operator) {
    upperDisplay = equation + " " + operator
    topDisplay.textContent = upperDisplay;
}

// **************** 3. Occurs when equal button depressed ****************
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

// arithmatic functions 
function addition(current, num2) {
    return parseInt(current) + parseInt(num2);
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
    topDisplay.textContent = upperDisplay;
    botDisplay.textContent = lowerDisplay;
}