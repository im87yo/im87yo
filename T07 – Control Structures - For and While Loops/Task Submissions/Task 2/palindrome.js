function checkWord() {
    var word = document.getElementById("wordInput").value;
    
    // Remove spaces and convert to lowercase
    word = word.replace(/\s+/g, '').toLowerCase();

    var reverseWord = "";
    var i;

    // Create the reversed word
    for (i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    // Check if the word is the same as its reverse
    if (word === reverseWord) {
        document.getElementById("output").innerText = word + " is a palindrome!";
    } else {
        document.getElementById("output").innerText = word + " is not a palindrome!";
    }
}
