/**
 * Calculates the perimeter of a triangle given three vertices.
 * Uses the distance formula: d = sqrt((x2-x1)^2 + (y2-y1)^2)
 */
function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
    const side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
    const side3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    
    return side1 + side2 + side3;
}

/**
 * Calculates the area of a triangle given three vertices.
 * Area = |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)| / 2
 */
function triangleArea(x1, y1, x2, y2, x3, y3) {
    const numerator = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
    return Math.abs(numerator) / 2;
}

// Function to handle the UI interaction
function calculate() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const x3 = parseFloat(document.getElementById('x3').value);
    const y3 = parseFloat(document.getElementById('y3').value);

    const perimeter = trianglePerimeter(x1, y1, x2, y2, x3, y3);
    const area = triangleArea(x1, y1, x2, y2, x3, y3);

    document.getElementById('perimeterResult').innerText = perimeter;
    document.getElementById('areaResult').innerText = area;
}