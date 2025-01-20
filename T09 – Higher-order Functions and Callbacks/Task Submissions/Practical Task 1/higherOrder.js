// higherOrder.js

// This is a custom filter function that works like the built-in filter() method in JavaScript.
// It takes an array and a callback function as arguments.
function myFilterFunction(wordsArray, testFunction) {
    let filteredArray = []; // An empty array to store the results.
  
    // Loop through each element in the array.
    for (let index = 0; index < wordsArray.length; index++) {
      // Check if the word passes the test in the callback function.
      if (testFunction(wordsArray[index])) {
        filteredArray.push(wordsArray[index]); // Add the word to the results array.
      }
    }
  
    // Return the array containing the filtered words.
    return filteredArray;
  }
  
  // An example list of words to filter.
  let exampleWords = [
    "banana",
    "apple",
    "cherry",
    "grapes",
    "orange",
    "papaya",
    "peachy",
    "tomato",
    "lemony",
    "melons"
  ];
  
  // A function that checks if a word has exactly six letters.
  let checkSixLetters = function(word) {
    return word.length === 6;
  };
  
  // Using the custom filter function to get words with six letters.
  let sixLetterWords = myFilterFunction(exampleWords, checkSixLetters);
  
  // Output the results to the console.
  console.log(sixLetterWords); // Expected: ["banana", "orange", "papaya"]
  