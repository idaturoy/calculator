export default class Calculator {
  constructor({ firstValue = "", operator = "", secondValue = "", memory = ""}= {}) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.operator = operator;
    this.memory = memory;
  }
  
  operate() {
    let computation;
    const firstValue = Number(this.firstValue);
    const secondValue = Number(this.secondValue);

    switch (true) {
      case (this.operator === "+"):
        computation = firstValue + secondValue;
        break;
      case (this.operator === "-"):
        computation = firstValue - secondValue;
        break;
      case (this.operator === "x"):
        computation = firstValue * secondValue;
        break;
      case (this.operator === "/" && secondValue === 0):
        computation = NaN;
        break;
      case (this.operator === "/"):
        computation = firstValue / secondValue;
        break;
    }
    return String(Number(computation.toFixed(2)));
  }



}