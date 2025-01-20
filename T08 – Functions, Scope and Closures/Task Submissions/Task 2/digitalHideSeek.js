// Step 1: Define the hide function
function hide(hidingSpot) {
    // Store the hiding spot in a local variable
    let hideLocation = hidingSpot;

    // Define another function seek inside hide
    function seek() {
        return hideLocation;  // Return the hidden location
    }

    // Return the seek function
    return seek;
}

// Step 2: Start the game by calling hide with a hiding spot
const startGame = hide('under the bed');

// Step 3: Log the result of calling startGame (seek function)
console.log(startGame());  // Output: 'under the bed'

// Step 4: Trying to log hideLocation directly (this will give an error)
console.log(hideLocation);  // Error: ReferenceError: hideLocation is not defined

// Step 5: Log the result of calling startGame
console.log(startGame()); // This should log 'under the bed'

// Step 6: Trying to log hideLocation directly
console.log(hideLocation);  // This will cause an error!

