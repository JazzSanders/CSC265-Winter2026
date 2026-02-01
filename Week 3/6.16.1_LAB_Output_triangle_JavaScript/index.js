function drawTriangle(triangleSize) {

   // TODO: Add your solution here
   for (let i = 1; i <= triangleSize; i++) {
      console.log('*'.repeat(i));
   }
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);
console.log("---");
drawTriangle(2);
console.log("---");
drawTriangle(6);

// Do NOT remove the following line
export default drawTriangle;