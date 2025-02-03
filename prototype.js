import { Calculator, string, input, flag } from './index.js';


Calculator.prototype.logNum = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }

    let result = Math.log10(lastNum).toFixed(4);
    let tempInput = document.querySelector('input').value.slice(0, document.querySelector('input').value.length - lastNum.length);
    document.querySelector('input').value = tempInput + result;
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
    let parts = expression.split(/[^0-9.]/);
    return parts.filter(num => num !== "").pop();
}
function updateInputField(lastNum, result) {
    let inputField = document.querySelector('input');
    let tempInput = inputField.value.slice(0, inputField.value.length - lastNum.length);
    inputField.value = tempInput + result;
}
Calculator.prototype.sin = (lastNum) => {
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    let result = (document.querySelector("#deg").value == "deg") ?  Math.sin(lastNum * (Math.PI / 180)):Math.sin(lastNum);
    updateInputField(lastNum, result);
}
Calculator.prototype.cos = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    let result = (document.querySelector("#deg").value == "deg") ? Math.cos(lastNum * (Math.PI / 180)) : Math.cos(lastNum);
    updateInputField(lastNum, result);
}
Calculator.prototype.tan = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    let result = (document.querySelector("#deg").value == "deg") ?  Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);
    updateInputField(lastNum, result);
}
Calculator.prototype.cot = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    let result = (document.querySelector("#deg").value == "deg") ? 1 / Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);
    updateInputField(lastNum, result);
}
Calculator.prototype.cosec = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    let result = (document.querySelector("#deg").value == "deg") ? 1 / Math.sin(lastNum * (Math.PI / 180)) : 1 / Math.sin(lastNum);
    updateInputField(lastNum, result);
}
Calculator.prototype.sec = (expression) => {
    let lastNum = getLastNumber(expression);
    if (lastNum === "") {
        document.querySelector('input').value = 'Error: Invalid Log';
        return;
    }
    console.log(lastNum);
    let result = (document.querySelector("#deg").value == "deg") ? 1 / Math.cos(lastNum * (Math.PI / 180)) : 1 / Math.cos(lastNum);
    updateInputField(lastNum, result);
}
export { Calculator };