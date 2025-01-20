function swapDigits() {
    var number = document.getElementById("numberInput").value;
    var original = document.getElementById("originalNumber");
    var newNumber = document.getElementById("newNumber");

    // Check if the number has at least 3 digits
    if (number.length < 3) {
        alert("Please enter a number with at least 3 digits.");
        return;
    }

    original.innerHTML = "Original number: " + number;

    // Swap the second and last digits
    var secondDigit = number.charAt(1);
    var lastDigit = number.charAt(number.length - 1);
    
    // Create the new number with swapped digits
    var newNum = number.charAt(0) + lastDigit + number.substring(2, number.length - 1) + secondDigit;

    newNumber.innerHTML = "New number: " + newNum;
}
