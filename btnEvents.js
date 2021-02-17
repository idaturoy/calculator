const clearBtn = document.getElementById("clear-btn");
let displayContent = document.getElementById("number-on-screen");
const numberBtns = document.querySelectorAll("button.number-btn");
const operatorBtns = document.querySelectorAll("button.operator-btn")
const equalBtn = document.getElementById("equal-btn");
var currentValue = "";
var previousValue = "";
var operatorClicked = undefined;

function populateDisplay (e){
    if (displayContent.innerHTML == 0){displayContent.innerHTML="";}
    if (e.target.className === "number-btn"){
        currentValue += e.target.innerHTML
    };
    displayContent.innerHTML += e.target.innerHTML;
}

function temporalSaving(e) {
    previousValue = currentValue;
    operatorClicked = e.target.innerHTML;
    currentValue = "";
}

clearBtn.addEventListener("click", () =>{
    displayContent.innerHTML = "0";
    previousValue = "";
    currentValue = "";
});

numberBtns.forEach(button => {
    button.addEventListener("click", populateDisplay);
})

operatorBtns.forEach(button =>{
    button.addEventListener("click", e => {
        temporalSaving(e);
        populateDisplay(e);
    })
})

equalBtn.addEventListener("click", function(){
    result = calculate();
    displayContent.innerHTML += "=" + result;
    currentValue = result;
})

function calculate(){
    return operate(operatorClicked, Number(previousValue), Number(currentValue));
}

