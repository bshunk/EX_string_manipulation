console.log("ahoy mate")

// 1. Copy the code below into the JavaScript file
// 2. In your HTML, create an text input and a button.
// 3. The text input should only accept letters. No numbers.
// 4. Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// 5. Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// 6. Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// 7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.


// console.log("Numbers = ", [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]
// 	.sort(function(a, b) {
// 		return b - a
// 	}).filter( function(filtered) {
// 		return filtered < 19
// 	}).map(function(mapped) {
// 		return mapped * 1.5 - 1
// 	}).reduce(function(x, y) {
// 		return x + y
// 	}));


function reversal(userInput) {
	var userInput = document.getElementById("userInput");
	userInput.sort(function(userInput) {
		return b - a
	})
}


//
function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);