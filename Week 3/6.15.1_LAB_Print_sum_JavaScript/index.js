// Reference the HTML element
const displayArea = document.getElementById('display-area');

function printSum(x, y) {
   const numX = parseFloat(x);
   const numY = parseFloat(y);

   const xIsNaN = isNaN(numX);
   const yIsNaN = isNaN(numY);

   let message = ""; // Variable to hold the string

   if (xIsNaN && yIsNaN) {
      message = `'${x}' and '${y}' are not numbers.`;
   } else if (xIsNaN) {
      message = `'${x}' is not a number.`;
   } else if (yIsNaN) {
      message = `'${y}' is not a number.`;
   } else {
      const sum = numX + numY;
      message = `Sum is ${sum}.`;
   }

   // Write to the webpage instead of (or in addition to) the console
   console.log(message);
   displayArea.innerHTML += message + "<br>"; 
}

// Running the tests
printSum(3, 6);
printSum(3.5, 6.1);
printSum("hello", 6);
printSum(10, "hi");
printSum("hello", "hi");

export default printSum;