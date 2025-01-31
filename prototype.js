import { Calculator, string, input, flag } from './index.js';

// Attach the logarithm method to the Calculator prototype
Calculator.prototype.logNum = (expression) => {
    let lastNum = getLastNumber(expression);  //Added this line to get the last number before 'log'

    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    // Calculate the log of the last number
    let result = Math.log10(lastNum).toFixed(4); //  Using Math.log() to calculate the logarithm
    let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
    document.querySelector('input').value = tempInput + result; // Updated input value with the log result
}
Calculator.prototype.lnNum = (expression) => {
    let lastNum = getLastNumber(expression);

    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    let result = Math.LN2 * (lastNum);
    let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
    document.querySelector('input').value = tempInput + result;
}
function getLastNumber(expression) {
    let parts = expression.split(/[^0-9.]/); //Split the expression by non-numeric characters
    return parts.filter(num => num !== "").pop(); //Return the last number from the array
}


Calculator.prototype.sin = (expression) => {
    
    let lastNum =  getLastNumber(expression);
    let result
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    if(flag == 0){
        result = Math.sin(lastNum*(Math.PI/180));
    }else{
        result = Math.sin(lastNum);
    }
    
    let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
    document.querySelector('input').value = tempInput + result;
}

Calculator.prototype.cos = (expression) => {
   
    let lastNum =  getLastNumber(expression);
    let result
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    if(flag == 0){
        result = Math.cos(lastNum*(Math.PI/180));
    }else{
        result = Math.cos(lastNum);
    }
    
    let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
    document.querySelector('input').value = tempInput + result;
}

    export { Calculator };