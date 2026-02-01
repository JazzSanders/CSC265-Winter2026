/**
 * Calculates the sum of two strings if they are numbers.
 * @param {string} x 
 * @param {string} y 
 */
function printSum(x, y) {
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    const xIsNaN = isNaN(numX);
    const yIsNaN = isNaN(numY);

    if (xIsNaN && yIsNaN) {
        // Both are not numbers
        console.log(`'${x}' and '${y}' are not numbers.`);
    } else if (xIsNaN) {
        // Only x is not a number
        console.log(`'${x}' is not a number.`);
    } else if (yIsNaN) {
        // Only y is not a number
        console.log(`'${y}' is not a number.`);
    } else {
        // Both are valid numbers
        const sum = numX + numY;
        console.log(`Sum is ${sum}.`);
    }
}

// Example test calls
console.log("--- Initial Test Cases ---");
printSum("3", "6");       // Sum is 9.
printSum("hello", "6");   // 'hello' is not a number.
printSum("hello", "hi");  // 'hello' and 'hi' are not numbers.
console.log("--------------------------");