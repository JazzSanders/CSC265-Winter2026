/**
 * Draws a triangle of asterisks in the console.
 * @param {number} triangleSize - The number of lines to draw.
 */
function drawTriangle(triangleSize) {
    // We loop from 1 up to (and including) the triangleSize
    for (let i = 1; i <= triangleSize; i++) {
        // Create a string of asterisks based on the current line number 'i'
        let line = "*".repeat(i);
        
        // Output the line to the console
        console.log(line);
    }
}

// Initial test call as per example
console.log("Testing drawTriangle(4):");
drawTriangle(4);