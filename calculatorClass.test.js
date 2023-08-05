import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";

import Calculator from "./calculatorClass.js";

Deno.test("Addition", () => {
  const calculator = new Calculator();

  calculator.firstValue = "4";
  calculator.operator = "+";
  calculator.secondValue = "5";
  let result = calculator.operate();

  assertEquals(result, "9");
});

Deno.test("Subtraction", () => {
  const calculator = new Calculator();

  calculator.firstValue = "4";
  calculator.operator = "-";
  calculator.secondValue = "3";
  let result = calculator.operate();

  assertEquals(result, "1");
});

Deno.test("Multiplication", () => {
  const calculator = new Calculator();

  calculator.firstValue = "4";
  calculator.operator = "x";
  calculator.secondValue = "5";
  let result = calculator.operate();

  assertEquals(result, "20");
});

Deno.test("Division", () => {
  const calculator = new Calculator();

  calculator.firstValue = "20";
  calculator.operator = "/";
  calculator.secondValue = "5";
  let result = calculator.operate();

  assertEquals(result, "4");
});

Deno.test("Division by zero", () => {
  const calculator = new Calculator();

  calculator.firstValue = "20";
  calculator.operator = "/";
  calculator.secondValue = "0";
  let result = calculator.operate();

  assertEquals(result, "NaN");
});

Deno.test("Decimal numbers", () => {
  const calculator = new Calculator();

  calculator.firstValue = "20.3";
  calculator.operator = "/";
  calculator.secondValue = "5";
  let result = calculator.operate();

  assertEquals(result, "4.06");

  calculator.firstValue = "5.5";
  calculator.operator = "-";
  calculator.secondValue = "50";
  result = calculator.operate();

  assertEquals(result, "-44.5");

  calculator.operator = "+";
  calculator.secondValue = "5.5";
  result = calculator.operate();

  assertEquals(result, "11");
});
