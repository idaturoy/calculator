
const clearBtn = document.getElementById("clear-btn");
let displayContent = document.getElementById("number-on-screen");
const numberBtns = document.querySelectorAll("button.number-btn");
const operatorBtns = document.querySelectorAll("button.operator-btn")
const equalBtn = document.getElementById("equal-btn");
let firstValue = "0";
let operatorClicked = " ";

function populateDisplay (){
    if (displayContent.innerHTML == 0){displayContent.innerHTML=" ";}
    if (operatorClicked != " "){return displayContent}
    else displayContent.innerHTML += this.innerHTML;
}

function temporalSaving() {
    firstValue = displayContent.innerHTML;
    operatorClicked = this.innerHTML;
}

const letsCrackIt = (operator, firstValue, secondValue) => {
    operate(operator, firstValue, secondValue)
}

clearBtn.addEventListener("click", () =>{
    displayContent.innerHTML = "0";
});

numberBtns.forEach(button => {
    button.addEventListener("click", populateDisplay)
})

operatorBtns.forEach(button => {
    button.addEventListener("click", populateDisplay, temporalSaving)
})

equalBtn.addEventListener("click", function(){
    displayContent.innerHTML = operate(operatorClicked, firstValue, displayContent.innerHTML);
})

