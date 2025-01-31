
let string = " "
let buttons = document.querySelectorAll(".btn");
let input = document.getElementById('input').value;
let flag =0;

class Calculator {
    constructor() {
        this.string = " ";
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
        let result = 1/lastNum;
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
        let result = Math.pow(lastNum,2);
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
}
let ca = new Calculator;
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            ca.finalAns();
        }
        else if (e.target.innerHTML == "C") {
            ca.clear();
        }
        else if (e.target.innerHTML == "del") {
            ca.delete();
        }
        else if (e.target.innerHTML == "|x|") {
            ca.absolute();
        }
        else if (e.target.innerHTML == "exp") {
            ca.exponential();
        }
        else if (e.target.innerHTML == "1/x") {
            ca.inverse();
        }
        else if (e.target.value == "xsquare") {
            ca.square();
        }
        else if (e.target.value == "sqrt") {
            ca.squareRoot();
        }
        else if (e.target.value == "opp") {
            ca.changeSign();
        }
        else if (e.target.innerHTML == "log") {
            ca.logNum(document.querySelector('input').value);
        }
        else if (e.target.innerHTML == "ln") {
            ca.lnNum(document.querySelector('input').value);
        }
        else if(e.target.value=="deg"){
            console.log("inside")
            if(flag == 0){
                console.log("rad")
                document.querySelector("#deg").innerHTML="rad";
                flag = 1;
            }
            
            else{
                console.log("deg")
                flag = 0;
                document.querySelector("#deg").innerHTML="deg";
            }
        }
        else if (e.target.innerHTML == "n!") {
            ca.factorial();
        }
        

        else {
            ca.stringUpdate(e.target.value)
        }



    })
});
let select = document.querySelector("#Trigo")
select.addEventListener("change",(e)=>{
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
export{input,Calculator,string,flag}












