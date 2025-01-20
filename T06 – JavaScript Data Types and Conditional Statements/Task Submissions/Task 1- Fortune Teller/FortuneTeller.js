document.getElementById("fortuneForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop the page from refreshing when the button is clicked

    // Get the values from the inputs
    var mother = document.getElementById("motherName").value;
    var street = document.getElementById("streetName").value;
    var color = document.getElementById("favColour").value;
    var age = Number(document.getElementById("currentAge").value); // Convert input to a number
    var number = Number(document.getElementById("randomNumber").value); // Convert input to a number

    // Do some math and create the fortune
    var yearsToFriend = number; // Number of years to meet their best friend
    var bestFriend = mother + " " + street; // Concatenate with a space between names
    var yearsToMarriage = age + number; // Correctly adds numbers
    var children = age % number; // Modulus to determine the number of children
    var dyeHairYears = Math.round(age / number); // Calculate years to dye hair

    // Create the message
    var message = "In " + yearsToFriend + " years, you will meet your best friend named " + bestFriend + ". ";
    message += "You will get married in " + yearsToMarriage + " years and have " + children + " children. ";
    message += "In " + dyeHairYears + " years, you will dye your hair " + color + ".";

    // Show the fortune
    document.getElementById("output").innerText = message;
});
