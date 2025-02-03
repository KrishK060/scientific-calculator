import { Calculator, string, input, convert } from './index.js';

Calculator.prototype.logNum = (lastNum) => {
    let result = Math.log10(lastNum).toFixed(4);
    updateInputField(lastNum, result);
}

Calculator.prototype.lnNum = (lastNum) => {
    let result = Math.LN2 * (lastNum);
    updateInputField(lastNum, result);
}

function updateInputField(lastNum, result) {
    let inputField = input;
    let tempInput = inputField.value.slice(0, inputField.value.length - lastNum.length);
    inputField.value = tempInput + result;
}

Calculator.prototype.sin = (lastNum) => {
    let result = (convert.value == "deg") ? Math.sin(lastNum * (Math.PI / 180)) : Math.sin(lastNum);
    updateInputField(lastNum, result);
}

Calculator.prototype.cos = (lastNum) => {
    let result = (convert.value == "deg") ? Math.cos(lastNum * (Math.PI / 180)) : Math.cos(lastNum);
    updateInputField(lastNum, result);
}

Calculator.prototype.tan = (lastNum) => {
    let result = (convert.value == "deg") ? Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);
    updateInputField(lastNum, result);
}

Calculator.prototype.cot = (lastNum) => {
    let result = (convert.value == "deg") ? 1 / Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);
    updateInputField(lastNum, result);
}

Calculator.prototype.cosec = (lastNum) => {
    let result = (convert.value == "deg") ? 1 / Math.sin(lastNum * (Math.PI / 180)) : 1 / Math.sin(lastNum);
    updateInputField(lastNum, result);
}

Calculator.prototype.sec = (lastNum) => {
    let result = (convert.value == "deg") ? 1 / Math.cos(lastNum * (Math.PI / 180)) : 1 / Math.cos(lastNum);
    updateInputField(lastNum, result);
}

export { Calculator };