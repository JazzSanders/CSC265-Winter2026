// Reference the HTML
const displayArea = document.getElementById('display-area');


function drawTriangle(triangleSize) {

   // TODO: Add your solution here
   for (let i = 1; i <= triangleSize; i++) {
      console.log('*'.repeat(i));
   }

   // Write to the webpage instead of (or in addition to) the console
   console.log(message);
   displayArea.innerHTML += message + "<br>"; 
}

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);
console.log("---");
drawTriangle(2);
console.log("---");
drawTriangle(6);

// Do NOT remove the following line
export default drawTriangle;