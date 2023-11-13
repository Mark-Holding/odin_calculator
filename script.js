const display = document.getElementById('displ');

document.addEventListener('keydown', function(event){
    const validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','/','*']
    if(validKeys.includes(event.key)){
    pressedKeys += event.key;
    display.value = pressedKeys;
    }  
})

let pressedKeys = '';
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

console.log(displayValue)