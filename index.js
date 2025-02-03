
let string = " "
const buttons = document.querySelectorAll(".btn");
const input = document.querySelector('input');
let flag = 0;

class Calculator {
    constructor() {
        this.string = " ";
        this.memory = 0;
    }
    getLastNumber(expression) {
        let parts = expression.split(/[^0-9.]/);
        return parts.filter(num => num !== "").pop();
    }
    updateInputField(lastNum, result) {
        let inputField = input;
        let tempInput = inputField.value.slice(0, inputField.value.length - lastNum.length);
        inputField.value = tempInput + result;
    }
    stringUpdate(value) {
        string += value;
        document.querySelector('input').value = string
    }
    finalAns() {
        string = eval(input.value);
        input.value = string

    }
    clear() {
        string = " ";
        input.value = string
    }
    delete() {
        string = string.slice(0, -1);
        input.value = string
    }
    absolute() {
        string = Math.abs(string)
        input.value = string
    }
    exponential() {
        let lastNum = this.getLastNumber(input.value); 
        let result = Math.exp(lastNum);
        this.updateInputField(lastNum, result);
    }
    inverse() {
        string = 1 / string;
        let lastNum = this.getLastNumber(input.value); 
        let result = 1 / lastNum;
        this.updateInputField(lastNum, result);
    }
    square() {
        let lastNum = this.getLastNumber(input.value); 
        let result = Math.pow(lastNum, 2);
        this.updateInputField(lastNum, result);
    }
    squareRoot() {
        let lastNum = this.getLastNumber(input.value); 
        let result = Math.sqrt(lastNum);
        this.updateInputField(lastNum, result);
    }
    factorial() {
        let lastNum = this.getLastNumber(input.value); 
        let num = parseInt(lastNum);
        if (isNaN(num) || num < 0) {
            input.value = 'Error: Invalid Input';
            return;
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        this.updateInputField(lastNum, result);
    }
    changeSign() {
        string = (string) * (-1);
        input.value = string
    }
    memoryStore() {
        let lastNum = this.getLastNumber(input.value);
        this.memory = parseFloat(lastNum);
    }
    memoryClear() {
        this.memory = 0;
        console.log("Memory Cleared");
    }
    memoryRecall() {
        input.value = this.memory
    }
    memoryAdd() {
        let lastNum = this.getLastNumber(input.value);
        this.memory += parseFloat(lastNum);
    }
    memorySubtract() {
        let lastNum = this.getLastNumber(input.value);
        this.memory -= parseFloat(lastNum);
    }
}
let ca = new Calculator;
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        switch (e.target.value) {
            case "=":
                ca.finalAns();
                break;
            case "C":
                ca.clear();
                break;
            case "del":
                ca.delete();
                break;
            case "|x|":
                ca.absolute();
                break;
            case "exp":
                ca.exponential();
                break;
            case "1/x":
                ca.inverse();
                break;
            case "xsquare":
                ca.square();
                break;
            case "sqrt":
                ca.squareRoot();
                break;
            case "opp":
                ca.changeSign();
                break;
            case "log":
                ca.logNum(input.value);
                break;
            case "ln":
                ca.lnNum(input.value);
                break;
            case "deg":
                console.log("inside");

                console.log("rad");
                document.querySelector("#deg").value = "red";
                document.querySelector("#deg").innerHTML = "RAD";
                break;
            case "red":
                console.log("deg");
                document.querySelector("#deg").value = "deg";
                document.querySelector("#deg").innerHTML = "deg";
                break;
            case "n!":
                ca.factorial();
                break;
            case "MS":
                ca.memoryStore();
                break;
            case "MC":
                ca.memoryClear();
                break;
            case "MR":
                ca.memoryRecall();
                break;
            case "M+":
                ca.memoryAdd();
                break;
            case "M-":
                ca.memorySubtract();
                break;
            default:
                ca.stringUpdate(e.target.value);
                break;
        }
    })
});
let select = document.querySelector("#Trigo")
select.addEventListener("change", (e) => {
    let lastNum = ca.getLastNumber(input.value);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    switch (e.target.value) {
        case "Sin":
            ca.sin(lastNum);
            break;
        case "Cos":
            ca.cos(lastNum);
            break;
        case "Tan":
            ca.tan(lastNum);
            break;
        case "Cot":
            ca.cot(lastNum);
            break;
        case "Cosec":
            ca.cosec(lastNum);
            break;
        case "Sec":
            ca.sec(lastNum);
            break;
        default:
            ca.stringUpdate(e.target.value);
            break;
    }
}
)
export { input, Calculator, string, flag }