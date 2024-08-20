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
    const Num1 = Number(num1);
    const Num2 = Number(num2);
    switch (op) {
        case "+":
            return add(Num1, Num2).toString();
        case "-":
            return subtract(Num1, Num2).toString();
        case "/":
            return divide(Num1, Num2).toString();
        case "x":
            return multiply(Num1, Num2).toString();
    }
}

const num_working = document.querySelector("#hiddennumworking"); 
const num_reserve = document.querySelector("#hiddennumreserve");
const op_container = document.querySelector("#hiddenop");

const display = document.querySelector("#display"); 
const buttons = document.querySelector("#calculatorbody");
buttons.addEventListener("click", (event)=> {
    const target = event.target;
    if (target.tagName.toLowerCase() != "button"){
        return;
    }

    const target_is_num = target.classList.contains("num");
    const target_is_operator = target.classList.contains("operator");
    if (target_is_num){
        if (op_container.textContent && num_working.textContent){
            num_reserve.textContent = num_working.textContent;
            num_working.textContent = "";
            display.textContent = "0";
        }
        // only adjusting the display number
        const num_to_add = target.textContent;
        const num_curr = display.textContent;
        display.textContent = (num_curr === "0") ? num_to_add : num_curr + num_to_add;
    } else if (target_is_operator){
        num_working.textContent = display.textContent;
        const op_is_pending = op_container.textContent;
        if (op_is_pending){
            //execute previous operation
            const result = operate(num_reserve.textContent,num_working.textContent,op_container.textContent);
            num_working.textContent = result;
            display.textContent = result;
        }
        const op = target.textContent;
        op_container.textContent = op;
        console.log("operator clicked");
    }
})