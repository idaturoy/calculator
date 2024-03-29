const clearBtn = document.getElementById("clear-btn");
const workDisplay = document.getElementById("work-display");
const memoryDisplay = document.getElementById("history-display");
const numberBtns = document.querySelectorAll("button.number-btn");
const operatorBtns = document.querySelectorAll("button.operator-btn");
const percentBtn = document.getElementById("percent-btn");
const negativeBtn = document.getElementById("negative-btn");
const equalBtn = document.getElementById("equal-btn");

import Calculator from './calculatorClass.js';

const calculator = new Calculator();


numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        clickNumberBtn(button.innerText);
        updateDisplay();
    });
})

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        clickOperatorBtn(button.innerText);
        updateDisplay();
    })
})

percentBtn.addEventListener("click", () => {
    clickPercentBtn();
    updateDisplay();
});

negativeBtn.addEventListener("click", () => {
    clickNegativeBtn();
    updateDisplay();
});

equalBtn.addEventListener("click", () => {
    let result = clickEqualBtn();
    workDisplay.innerText = result;
    memoryDisplay.innerText = calculator.memory;
});

clearBtn.addEventListener("click", () => {
    clear();
    updateDisplay();
    memoryDisplay.innerText = calculator.memory;
});


function clear() {
    calculator.firstValue = "";
    calculator.secondValue = "";
    calculator.operator = "";
    calculator.memory = ""; 
};

function updateDisplay() {
    let currentCalculation = "";
    if (!calculator.operator){
        currentCalculation = calculator.firstValue;
    } else {
        currentCalculation = calculator.firstValue + " " + calculator.operator + " " +
        calculator.secondValue;
    }
    workDisplay.innerText = currentCalculation;
};


function clickEqualBtn() {
    let result = ""; 
    if (calculator.firstValue === "."){calculator.firstValue = "0.0";} 
    if (calculator.secondValue === "."){calculator.secondValue = "0.0";} 

    if (calculator.firstValue && calculator.secondValue && calculator.operator) {
        calculator.memory = workDisplay.innerText;
        result = calculator.operate();

        if (result === "NaN") {
        result = "Feil";
        calculator.firstValue = "";
        }
        else {
        calculator.firstValue = result;
        }
        calculator.secondValue = "";
        calculator.operator = "";
    }

    if (!calculator.secondValue){
        result = calculator.firstValue;
    }

    return result;
}

function clickNumberBtn(userInput) {
    let currentValue = getCurrentValue();
    if (currentValue.length < 10) {
        let updatedValue;
        if(!calculator.operator) {
            updatedValue = updateCurrentValue(calculator.firstValue,userInput);
            calculator.firstValue = updatedValue;
        }
        else {
            updatedValue = updateCurrentValue(calculator.secondValue,userInput);
            calculator.secondValue = updatedValue;
        }
    }

};

function clickOperatorBtn(chosenOperator) {
    if (!calculator.firstValue) {
        return null
    }
    if (!calculator.secondValue) {
        calculator.operator = chosenOperator;
    }
    else {
        clickEqualBtn();
        calculator.operator = chosenOperator;
        memoryDisplay.innerText = calculator.memory;
    }
};

function updateCurrentValue(value, userInput) {
    if (userInput === "." && (value).includes(".") || userInput === "0" && value === "0") { 
        return;
    } else {
        return value += userInput;
    }
};

function getCurrentValue() {
    if(!calculator.operator) {
        return calculator.firstValue;
    }
    else {
        return calculator.secondValue;
    }
};

function clickPercentBtn() {
    if(!calculator.operator) {
        calculator.firstValue = calculator.firstValue / 100;
    }
    else {
        calculator.secondValue = calculator.secondValue / 100;
    }
}

function clickNegativeBtn(){
    if(!calculator.operator) {
        calculator.firstValue = calculator.firstValue * (-1);
    }
    else {
        calculator.secondValue = calculator.secondValue * (-1);
    }
}