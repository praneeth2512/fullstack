function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

// Example usage:
console.log("Add:", add(5, 3));         // Output: 8
console.log("Subtract:", subtract(5, 3)); // Output: 2
console.log("Multiply:", multiply(5, 3)); // Output: 15
console.log("Divide:", divide(10, 2));    // Output: 5
console.log("Divide by zero:", divide(10, 0));  // Output: Error message
