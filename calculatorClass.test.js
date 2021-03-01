import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";

import Calculator from "./calculatorClass.js";

Deno.test("Addition", () => {
  const calculator = new Calculator();

  calculator.updateCurrentValue("4");
  calculator.chooseOperator("+");
  calculator.updateCurrentValue("5");
  calculator.equal();

  assertEquals(calculator.currentValue, "9");
});

Deno.test("Subtraction", () => {
  const calculator = new Calculator();

  calculator.updateCurrentValue("4");
  calculator.chooseOperator("-");
  calculator.updateCurrentValue("3");
  calculator.equal();

  assertEquals(calculator.currentValue, "1");
});

Deno.test("Multiplication", () => {
  const calculator = new Calculator();

  calculator.updateCurrentValue("4");
  calculator.chooseOperator("x");
  calculator.updateCurrentValue("5");
  calculator.equal();

  assertEquals(calculator.currentValue, "20");
});

Deno.test("Division", () => {
  const calculator = new Calculator();

  calculator.updateCurrentValue("20");
  calculator.chooseOperator("/");
  calculator.updateCurrentValue("5");
  calculator.equal();

  assertEquals(calculator.currentValue, "4");
});

Deno.test("Division by zero", () => {
  const calculator = new Calculator();

  calculator.updateCurrentValue("20");
  calculator.chooseOperator("/");
  calculator.updateCurrentValue("0");
  calculator.equal();

  assertEquals(calculator.currentValue, "that is a question of time");
});

Deno.test("Memory", () => {
  const calculator = new Calculator();

  calculator.updateCurrentValue("20");
  calculator.chooseOperator("/");
  calculator.updateCurrentValue("5");
  calculator.equal();

  assertEquals(calculator.memory, "20 / 5");

  calculator.updateCurrentValue("5");
  calculator.chooseOperator("-");
  calculator.updateCurrentValue("50");
  calculator.equal();

  assertEquals(calculator.memory, "45 - 50");

  calculator.chooseOperator("+");
  calculator.updateCurrentValue("5.5");
  calculator.equal();

  assertEquals(calculator.memory, "-5 + 5.5");
});
