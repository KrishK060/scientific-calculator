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


// Helper function to update the input field
function updateInputField(lastNum, result) {
    let inputField = document.querySelector('input');
    let tempInput = inputField.value.slice(0, inputField.value.length - lastNum.length);
    inputField.value = tempInput + result;
}

Calculator.prototype.sin = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }

    let result = (flag == 0) ? Math.sin(lastNum * (Math.PI / 180)) : Math.sin(lastNum);

    // Calling a helper function
    updateInputField(lastNum, result);
}

Calculator.prototype.cos = (expression) => {
   
    let lastNum =  getLastNumber(expression);
    let result;
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    result = (flag == 0) ? Math.cos(lastNum * (Math.PI / 180)) : Math.cos(lastNum);

    
    updateInputField(lastNum, result);
}
Calculator.prototype.tan = (expression) => {
   
    let lastNum =  getLastNumber(expression);
    let result;
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    if(flag == 0){
        result = Math.tan(lastNum*(Math.PI/180));
    }else{
        result = Math.tan(lastNum);
    }
    
    updateInputField(lastNum, result);
}
Calculator.prototype.cot = (expression) => {
   
    let lastNum =  getLastNumber(expression);
    let result;
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    result = (flag == 0) ? 1 / Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);

    
    updateInputField(lastNum, result);
}
Calculator.prototype.cosec = (expression) => {
   
    let lastNum =  getLastNumber(expression);
    let result;
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    result = (flag == 0) ? 1 / Math.sin(lastNum * (Math.PI / 180)) : 1 / Math.sin(lastNum);

    updateInputField(lastNum, result);
}
Calculator.prototype.sec = (expression) => {
   
    let lastNum =  getLastNumber(expression);
    let result;
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    result = (flag == 0) ? 1 / Math.cos(lastNum * (Math.PI / 180)) : 1 / Math.cos(lastNum);

    
    updateInputField(lastNum, result);
}
    export { Calculator };