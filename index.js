
let string = " "
let buttons = document.querySelectorAll(".btn");
let input = document.getElementById('input').value;
let flag =0;

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












