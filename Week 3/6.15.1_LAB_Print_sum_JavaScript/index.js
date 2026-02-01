// Reference the HTML
const displayArea = document.getElementById('display-area');


function printSum(x, y) {
   // TODO: Add your solution here
   const numX = parseFloat(x);
   const numY = parseFloat(y);

   const xIsNaN = isNaN(numX);
   const yIsNaN = isNaN(numY);

   if (xIsNaN && yIsNaN) {
      console.log(`'${x}' and '${y}' are not numbers.`);
   } else if (xIsNaN) {
      console.log(`'${x}' is not a number.`);
   } else if (yIsNaN) {
      console.log(`'${y}' is not a number.`);
   } else {
      const sum = numX + numY;
      console.log(`Sum is ${sum}.`);
   }


// Write to the webpage instead of (or in addition to) the console
   console.log(message);
   displayArea.innerHTML += message + "<br>"; 
}

// Running the tests
printSum(3, 6);            // 9
printSum(3.5, 6.1);        // 9.6
printSum("hello", 6);      // 'hello' is not a number
printSum(10, "hi");        // 'hi' is not a number
printSum("hello", "hi");   // 'hello' and 'hi' are not numbers


// Do NOT remove the following line
export default printSum;