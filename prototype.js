// prototype.js
import { Calculator,string} from './index.js';

// Attach the logarithm method to the Calculator prototype
Calculator.prototype.logarithm = function() {
    console.log("Logarithm function called");

    // Check if the string contains a number followed by 'log' (it can appear anywhere)
    const regex = /(\d+)(log)$/;

    // Find the last match of number followed by 'log' in the string
    const match = string.match(regex);

    if (match) {
        // Extract the number before 'log'
        const number = match[1];

        // Replace the 'numberlog' with 'log(number)' in the string
        string = string.replace(/(\d+)(log)$/, `log(${number})`);

        // Now calculate the logarithm of the number
        const result = Math.log(Number(number));

        // Update the input field with the result
        document.querySelector('input').value = `${string} = ${result}`; // Show log(1) = 0
    } else {
        // Handle case where the input doesn't match the expected pattern
        console.log("Invalid input for logarithm");
        document.querySelector('input').value = "Invalid Input";
    }
};

export { Calculator };
