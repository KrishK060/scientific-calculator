let string = " "
const buttons = document.querySelectorAll(".btn");
const input = document.querySelector('input');
const convert = document.querySelector("#deg")

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

    exponential(lastNum) {
        let result = Math.exp(lastNum);
        this.updateInputField(lastNum, result);
    }

    inverse(lastNum) {
        string = 1 / string;
        let result = 1 / lastNum;
        this.updateInputField(lastNum, result);
    }

    square(lastNum) {
        let result = Math.pow(lastNum, 2);
        this.updateInputField(lastNum, result);
    }

    squareRoot(lastNum) {
        let result = Math.sqrt(lastNum);
        this.updateInputField(lastNum, result);
    }

    factorial(lastNum) {
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

    memoryStore(lastNum) {
        this.memory = parseFloat(lastNum);
    }
    memoryClear() {
        this.memory = 0;
    }

    memoryRecall() {
        input.value = this.memory
    }

    memoryAdd(lastNum) {
        this.memory += parseFloat(lastNum);
    }

    memorySubtract(lastNum) {
        this.memory -= parseFloat(lastNum);
    }
}
let ca = new Calculator;
buttons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        let lastNum = ca.getLastNumber(input.value);
        if (lastNum === "") {
            document.querySelector('input').value = 'Error: Invalid Log';
            return;
        }
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
                ca.exponential(lastNum);
                break;

            case "1/x":
                ca.inverse(lastNum);
                break;

            case "xsquare":
                ca.square(lastNum);
                break;

            case "sqrt":
                ca.squareRoot(lastNum);
                break;

            case "opp":
                ca.changeSign();
                break;

            case "log":
                ca.logNum(lastNum);
                break;

            case "ln":
                ca.lnNum(lastNum);
                break;

            case "deg":
                convert.value = "red";
                convert.innerHTML = "RAD";
                break;

            case "red":
                convert.value = "deg";
                convert.innerHTML = "DEG";
                break;

            case "n!":
                ca.factorial(lastNum);
                break;

            case "MS":
                ca.memoryStore(lastNum);
                break;

            case "MC":
                ca.memoryClear(lastNum);
                break;

            case "MR":
                ca.memoryRecall(lastNum);
                break;

            case "M+":
                ca.memoryAdd(lastNum);
                break;

            case "M-":
                ca.memorySubtract(lastNum);
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
export { Calculator,convert }