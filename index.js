
let string = " "
let buttons = document.querySelectorAll("button");
let input = document.getElementById('input').value;

class Calculator {
    constructor() {
        this.string = " ";
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
        string = Math.exp(string)
        document.querySelector('input').value = string
    }
    inverse() {
        string = 1 / string;
        document.querySelector('input').value = string
    }
    square() {
        string = Math.pow(string, 2);
        // console.log(string)
        document.querySelector('input').value = string;
    }
    squareRoot() {
        string = Math.sqrt(string);
        document.querySelector('input').value = string
    }
    changeSign() {
        string = (string) * (-1);
        document.querySelector('input').value = string
    }
    // logarithm() {
    //     // Replace 'log' with 'Math.log10' for logarithmic calculations
    //     console.log("sdf")
    //     this.string = this.string.replace(/log/g, 'Math.log');

    //     // Now, evaluate the expression
    //     try {
    //         string = eval(string);
    //         document.querySelector('input').value = string;
    //     } catch (e) {
    //         document.querySelector('input').value = 'Error';
    //     }
    // }


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

        else {
            ca.stringUpdate(e.target.value)
        }



    })
});

export{input,Calculator,string}












