// set variables 
let currentValue = "";
let newNumber = "";
let numDisplayTop = "";
let numDisplayBot = ""; // bottom display
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

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

// function to detect type of operator used
function detectOperator(operator) {
    if (operator === "×") {
        operatorSelected = "*";
    } else if (operator === "÷") {
        operatorSelected = "/";
    } else if (operator === "-") {
        operatorSelected = "-";
    } else {
        operatorSelected = "+";
    }
    // call updateTopDisplay

    // push numDisplayBot to currentValue

    // rest numDisplayBot


};

// function to combine new number with existing number
function combineNumbers(newNumber) {
    numDisplayBot += newNumber;
    updateBottomDisplay(numDisplayBot);
}

// function to update the bottom display
function updateBottomDisplay(displayNum) {
    // get bot display and assign text as displayNum
    let botDisplay = document.querySelector("#bot-display");
    botDisplay.textContent = displayNum;
}

