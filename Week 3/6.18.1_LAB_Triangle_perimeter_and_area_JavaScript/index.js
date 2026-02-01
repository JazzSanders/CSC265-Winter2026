function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
    // TODO: Write your code here
   const side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
   const side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
   const side3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
   return side1 + side2 + side3;
}

function triangleArea(x1, y1, x2, y2, x3, y3) {
    // TODO: Write your code here
   const calculation = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
   return Math.abs(calculation) / 2;
}

console.log("Testing trianglePerimeter()...");
let perimeter = trianglePerimeter(1, 0, 2, 4, 4, 3);
console.log("Perimeter = " + perimeter);

console.log("Testing triangleArea()...");
let area = triangleArea(1, 0, 2, 4, 4, 3);
console.log("Area = " + area);



// Do NOT remove the following line:
export { trianglePerimeter, triangleArea };