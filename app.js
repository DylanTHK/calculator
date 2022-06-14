// set variables 
let currentValue = ""; // store mathematical outcome
let upperString = "";
let upperDisplay = "";
let lowerDisplay = ""; // bottom display
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

// event listener for clear button

// event listener for all clear button

// **************** 1. Taking in first digits ****************
// function to combine new number with existing number
function combineNumbers(newNumber) {
    lowerDisplay += newNumber;
    updateBottomDisplay(lowerDisplay);
}

// function to update the bottom display
function updateBottomDisplay(displayNum) {
    // get bot display and assign text as displayNum
    let botDisplay = document.querySelector("#bot-display");
    botDisplay.textContent = displayNum;
}

// **************** 2. Taking operator  ****************
// function to detect type of operator used
function detectOperator(operator) {
    operatorSelected = operator;
    // push numDisplayBot to currentValue
    currentValue = lowerDisplay;
    upperString += lowerDisplay;
    numDisplayBot = ""; // reset numDisplayBot

    // call updateTopDisplay
    updateTopDisplay(upperString, operatorSelected);

};

// to update upper display
function updateTopDisplay(equation, operator) {
    let topDisplay = document.querySelector("#top-display");
    topDisplay.textContent = equation + " " + operator;
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