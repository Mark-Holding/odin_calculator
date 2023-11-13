const display = document.getElementById('displ');
let pressedKeys = '';
let calcArray = [];

document.addEventListener('keydown', function(event) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*'];

    if (validKeys.includes(event.key)) {
        pressedKeys += event.key;
        display.value = pressedKeys;
    } else if (event.key === '=') {
        calcArray = pressedKeys.split(/([+\-*\/])/).filter(Boolean);
        // Remove the following line to keep the display value after processing the calculation
        display.value = operate(calcArray[0], calcArray[2], calcArray[1])


        console.log('Pressed Keys:', pressedKeys);
        console.log('Calc Array:', calcArray);
    }
});

function operate(a, b, c){
    a = Number(a);
    b = Number(b);
    
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



