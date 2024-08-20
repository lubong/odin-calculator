function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

// function that finally operates the statement and returns a real number
function operate(num1, num2, op){
    switch (op) {
        case "+":
            display.textContent = add(num1, num2);
            break;
        case "-":
            display.textContent = subtract(num1, num2);
            break;
        case "/":
            display.textContent = divide(num1, num2);
            break;
        case "x":
            display.textContent = multiply(num1, num2);
            break;
    }
    data.op = op;
}

const display = document.querySelector("#display");
const hiddendiv = document.querySelector("#hiddendiv");
const buttons = document.querySelector("#calculatorbody");
buttons.addEventListener("click", (event)=> {
    const target = event.target;
    if (target.tagName.toLowerCase() != "button"){
        return;
    }
})