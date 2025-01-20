function calculateBill() {
    // Get the amount of water used from the input box
    var waterUsed = document.getElementById("waterInput").value;
    waterUsed = parseFloat(waterUsed);

    // Get whether the user is an indigent household
    var isIndigent = document.getElementById("indigentYes").checked;

    // Tariff rates
    var step1Rate = 15.73; // 0–6,000 litres
    var step2Rate = 22.38; // 6,001–10,500 litres
    var step3Rate = 31.77; // 10,501–35,000 litres
    var step4Rate = 69.76; // 35,001 litres and above

    // Initialize the total cost
    var totalCost = 0;

    // Check if waterUsed is a valid number
    if (isNaN(waterUsed) || waterUsed <= 0) {
        document.getElementById("output").innerHTML = "Please enter a valid number of litres.";
        return;
    }

    // Calculate the bill based on indigent or non-indigent status
    if (isIndigent) {
        // Indigent households don't pay for Step 1 and Step 2
        if (waterUsed <= 10500) {
            totalCost = 0; // No charge
        } else if (waterUsed <= 35000) {
            totalCost = ((waterUsed - 10500) / 1000) * step3Rate; // Step 3 charge
        } else {
            totalCost = ((35000 - 10500) / 1000) * step3Rate + ((waterUsed - 35000) / 1000) * step4Rate;
        }
    } else {
        // Non-indigent households pay for all steps
        if (waterUsed <= 6000) {
            totalCost = (waterUsed / 1000) * step1Rate;
        } else if (waterUsed <= 10500) {
            totalCost = (6000 / 1000) * step1Rate + ((waterUsed - 6000) / 1000) * step2Rate;
        } else if (waterUsed <= 35000) {
            totalCost = (6000 / 1000) * step1Rate + (4500 / 1000) * step2Rate + ((waterUsed - 10500) / 1000) * step3Rate;
        } else {
            totalCost = (6000 / 1000) * step1Rate + (4500 / 1000) * step2Rate + (24500 / 1000) * step3Rate + ((waterUsed - 35000) / 1000) * step4Rate;
        }
    }

    // Show the result
    document.getElementById("output").innerHTML = "Your total water bill is R" + totalCost.toFixed(2);
}
