
let string = " "
let buttons = document.querySelectorAll(".btn");
const input = document.getElementById('input');
let flag = 0;

class Calculator {
    constructor() {
        this.string = " ";
        this.memory = 0;
    }
    getLastNumber(expression) {
        let parts = expression.split(/[^0-9.]/); //Split the expression by non-numeric characters
        return parts.filter(num => num !== "").pop(); //Return the last number from the array
    }
    stringUpdate(value) {
        string += value;
        document.querySelector('input').value = string
    }

    finalAns() {
        string = eval(document.querySelector('input').value);
        document.querySelector('input').value = string

    }
    clear() {
        string = " ";
        document.querySelector('input').value = string
    }
    delete() {
        string = string.slice(0, -1);
        document.querySelector('input').value = string
    }
    absolute() {
        string = Math.abs(string)
        document.querySelector('input').value = string
    }
    exponential() {
        // string = Math.exp(string)
        let lastNum = this.getLastNumber(document.querySelector('input').value); // Use 'this' to call the method on the instance

        if (lastNum === "") {
            document.querySelector('input').value = 'Error: Invalid Log';
            return;
        }
        let result = Math.exp(lastNum);
        let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
        document.querySelector('input').value = tempInput + result;
    }
    inverse() {
        string = 1 / string;
        let lastNum = this.getLastNumber(document.querySelector('input').value); // Use 'this' to call the method on the instance

        if (lastNum === "") {
            document.querySelector('input').value = 'Error: Invalid Log';
            return;
        }
        let result = 1 / lastNum;
        let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
        document.querySelector('input').value = tempInput + result;
    }
    square() {
        // string = Math.pow(string, 2);

        let lastNum = this.getLastNumber(document.querySelector('input').value); // Use 'this' to call the method on the instance

        if (lastNum === "") {
            document.querySelector('input').value = 'Error: Invalid Log';
            return;
        }
        let result = Math.pow(lastNum, 2);
        let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
        document.querySelector('input').value = tempInput + result;
    }
    squareRoot() {

        let lastNum = this.getLastNumber(document.querySelector('input').value); // Use 'this' to call the method on the instance

        if (lastNum === "") {
            document.querySelector('input').value = 'Error: Invalid Log';
            return;
        }
        let result = Math.sqrt(lastNum);
        let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
        document.querySelector('input').value = tempInput + result;
    }
    factorial() {
        let lastNum = this.getLastNumber(document.querySelector('input').value); // Use 'this' to call the method on the instance

        if (lastNum === "") {
            document.querySelector('input').value = 'Error: Invalid Input';
            return;
        }
        let num = parseInt(lastNum);
        if (isNaN(num) || num < 0) {
            document.querySelector('input').value = 'Error: Invalid Input';
            return;
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
        document.querySelector('input').value = tempInput + result;

    }
    changeSign() {
        string = (string) * (-1);
        document.querySelector('input').value = string
    }
    memoryStore() {
        let lastNum = this.getLastNumber(document.querySelector('input').value);
        // console.log(lastNum)
        this.memory = parseFloat(lastNum);

        console.log("Stored to Memory: " + this.memory);
    }

    // Memory Clear (MC)
    memoryClear() {
        this.memory = 0;
        console.log("Memory Cleared");
    }
    memoryRecall() {
        document.querySelector('input').value = this.memory
        console.log("Memory Recalled: " + this.memory);
    }

    // Memory Add (M+)
    memoryAdd() {
        let lastNum = this.getLastNumber(document.querySelector('input').value);

        this.memory += parseFloat(lastNum);
        console.log("Subtracted from Memory: " + this.memory);
    }



    // Memory Subtract (M-)
    memorySubtract() {
        let lastNum = this.getLastNumber(document.querySelector('input').value);

        this.memory -= parseFloat(lastNum);
        console.log("Subtracted from Memory: " + this.memory);
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
                ca.logNum(document.querySelector('input').value);
                break;
            case "ln":
                ca.lnNum(document.querySelector('input').value);
                break;
            case "deg":
                console.log("inside");
                if (flag === 0) {
                    console.log("rad");
                    document.querySelector("#deg").innerHTML = "rad";
                    flag = 1;
                } else {
                    console.log("deg");
                    flag = 0;
                    document.querySelector("#deg").innerHTML = "deg";
                }
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
    if (e.target.value == "Sin") {
        console.log("sin")
        ca.sin(document.querySelector('input').value);
    }
    else if (e.target.value == "Cos") {
        console.log("cos")
        ca.cos(document.querySelector('input').value);
    }
    else if (e.target.value == "Tan") {
        console.log("tan")
        ca.tan(document.querySelector('input').value);
    }
    else if (e.target.value == "Cot") {
        console.log("cot")
        ca.cot(document.querySelector('input').value);
    }
    else if (e.target.value == "Cosec") {
        console.log("Cosec")
        ca.cosec(document.querySelector('input').value);
    }
    else if (e.target.value == "Sec") {
        console.log("Sec")
        ca.sec(document.querySelector('input').value);
    }
    else {
        ca.stringUpdate(e.target.value)
    }
}
)
export { input, Calculator, string, flag }












