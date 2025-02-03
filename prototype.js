import { Calculator, convert } from './index.js';

Calculator.prototype.logNum=function(lastNum){
    let result = Math.log10(lastNum).toFixed(4);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.lnNum = function(lastNum){
    let result = Math.LN2 * (lastNum);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.sin = function(lastNum){
    let result = (convert.value == "deg") ? Math.sin(lastNum * (Math.PI / 180)) : Math.sin(lastNum);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.cos = function(lastNum){
    let result = (convert.value == "deg") ? Math.cos(lastNum * (Math.PI / 180)) : Math.cos(lastNum);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.tan = function(lastNum){
    let result = (convert.value == "deg") ? Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.cot = function(lastNum){
    let result = (convert.value == "deg") ? 1 / Math.tan(lastNum * (Math.PI / 180)) : 1 / Math.tan(lastNum);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.cosec = function(lastNum){
    let result = (convert.value == "deg") ? 1 / Math.sin(lastNum * (Math.PI / 180)) : 1 / Math.sin(lastNum);
    this.updateInputField(lastNum, result);
}

Calculator.prototype.sec = function(lastNum){
    let result = (convert.value == "deg") ? 1 / Math.cos(lastNum * (Math.PI / 180)) : 1 / Math.cos(lastNum);
    this.updateInputField(lastNum, result);
}

export { Calculator };