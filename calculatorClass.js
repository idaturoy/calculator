export default class Calculator {
  constructor({ num1 = "", num2 = "", operator = "", memory = ""}= {}) {
    this.currentValue = num2;
    this.previousValue = num1;
    this.operator = operator;
    this.memory = memory;
  }
  operate() {
    let computation;
    const pNumber = Number(this.previousValue);
    const cNumber = Number(this.currentValue);

    switch (this.operator) {
      case "+":
        computation = pNumber + cNumber;
        break;
      case "-":
        computation = pNumber - cNumber;
        break;
      case "x":
        computation = pNumber * cNumber;
        break;
      case "/":
        computation = cNumber === 0
          ? "that is a question of time"
          : pNumber / cNumber;
        break;
    }
    return String(computation);
  }

  updateCurrentValue(eventTarget) {
    if (
      eventTarget === "." && (this.currentValue).includes(".") ||
      eventTarget === "0" && this.currentValue === "0"
    ) {
      return;
    } else {
      this.currentValue += eventTarget;
    }
  }

  toDisplay() {
    let currentCalculation;
    if (!this.operator){
      currentCalculation = this.currentValue;
    } else {
      currentCalculation = this.previousValue + " " + this.operator + " " +
      this.currentValue;
    }
    
    return currentCalculation;
  }

  clear() {
    this.currentValue = "";
    this.previousValue = "";
    this.operator = "";
    this.memory = ""; 
  }

  chooseOperator(chosenOperator) {
    this.operator = chosenOperator;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  equal() {
    if (this.previousValue && this.currentValue && this.operator) {
      if (this.currentValue === "."){this.currentValue = "0.0";}
      this.memory = this.toDisplay();
      this.currentValue = this.operate();
      this.previousValue = "";
    }
  }
}