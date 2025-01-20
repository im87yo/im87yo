// Function to find the sum of numbers in an array
function findSum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

// Function to subtract second number from the first
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Function to divide the first number by the second, checks for division by zero
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    } else {
        return num1 / num2;
    }
}

// Create an array of numbers
var numbers = [10, 5, 2];

// Call findSum and log the result
var sum = findSum(numbers);
console.log("Sum of numbers: " + sum);

// Call subtractNumbers and log the result
var subtraction = subtractNumbers(numbers[0], numbers[1]);
console.log("Subtraction result: " + subtraction);

// Call multiplyNumbers and log the result
var multiplication = multiplyNumbers(numbers[2], numbers[0]);
console.log("Multiplication result: " + multiplication);

// Call divideNumbers with sum and third number
var division = divideNumbers(sum, numbers[2]);
console.log("Division result: " + division);
