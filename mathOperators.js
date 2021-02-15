/* Addition */
const add = (a, b) => a + b;
/* Substraction */
const substract = (a, b) => a - b;
/* Multiplication */
const multiply = (a, b) => a * b;
/* Division */
const divide = (a, b) => a / b;

const operate = (operator, num1, num2) => {
    switch (operator){
        case '+': 
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
};
