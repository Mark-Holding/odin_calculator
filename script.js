let num1;
let num2;
let operator;

function add(a , b) {
    return a + b;
};

function subtract(a, b) {
 return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, c){
    if(c === '+') {
        return add(a, b);
    } else if (c === '-'){
        return subtract(a, b);
    } else if (c === '*'){
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

