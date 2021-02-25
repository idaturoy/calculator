const clearBtn = document.getElementById("clear-btn");
const displayWork = document.getElementById("work-display");
const displayHistory = document.getElementById("history-display");
const numberBtns = document.querySelectorAll("button.number-btn");
const operatorBtns = document.querySelectorAll("button.operator-btn");
const equalBtn = document.getElementById("equal-btn");

import Calculator from './calculatorClass.js';

const calculator = new Calculator();


/* function populateDisplay(result) {
    displayHistory.innerText = calculator.previousValue + calculator.operator + result;
    displayWork.innerText = calculator.currentValue;
} */

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.updateCurrentValue(button.innerText)
        displayWork.innerText = calculator.toDisplay();

    });
})

operatorBtns.forEach(button =>{
    button.addEventListener("click", () => {
        calculator.equal();
        if (calculator.equal()){
            displayHistory.innerText = displayWork.innerText;
        }
        calculator.chooseOperator(button.innerText);
        displayWork.innerText = calculator.toDisplay();
    })
})

equalBtn.addEventListener("click", () => {
    calculator.equal();
    displayWork.innerText = calculator.currentValue;
});

clearBtn.addEventListener("click", () => {
    calculator.clear();
    displayWork.innerText = calculator.toDisplay();
});


/* function ifDivideByZero(result) {
    const messageDiv = document.createElement("div");
    const message = document.createTextNode(result);
    messageDiv.appendChild(message);
    const wrapperDiv = document.getElementsByClassName("wrapper")[0];
    wrapperDiv.appendChild(messageDiv);
} */
