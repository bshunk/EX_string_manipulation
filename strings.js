// 1. Copy the code below into the JavaScript file
// 2. In your HTML, create an text input and a button.
// 3. The text input should only accept letters. No numbers.
// 4. Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the 
// result in the DOM, below the text input.
// 5. Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the 
// result in the DOM, below the text input.
// 6. Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display 
// the text "Your string is a palidrome" in the DOM, below the text input.
// 7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable 
// (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

var string = document.getElementById("input");
var button = document.getElementById("button").addEventListener("click", doTheThing);
var gimmeIt = document.getElementById("box");

function doTheThing() {
	var newString = string.value.split("");
	var revString = reversal(newString);
	gimmeIt.innerHTML += alphabits(newString);
	gimmeIt.innerHTML += palindrome(newString, revString);
};

function reversal(str) {
	var rev = str.reverse().join("");
	gimmeIt.innerHTML += `<p>${rev}</p>`; 
	return rev
}

function alphabits(str) {
	return `<p>${str.sort().join("")}</p>`;
}

function palindrome(str, revStr) {
	if (revStr === string.value) {
		return `<p>This is a palindrome</p>`
	} else {
		return `<p>This is not a palindrome</p>`
	}
}

// FUNCTIONS RETURN TO WHERE IT IS CALLED

var testString = document.getElementById("input");

function reversal(testString) {
	gimmeIt.innerHTML += `<p>${string.value.split("").reverse().join("")}</p>`; 
	console.log("reversal", gimmeIt.innerHTML);
	return string.value.split("").reverse().join("")
};

function alphabits(testString) {
	gimmeIt.innerHTML += `<p>${string.value.split("").sort().join("")}</p>`;
	console.log("alphabits ", gimmeIt.innerHTML);
};

function palindrome(testString) {
	if (string.value.split("").reverse().join("") === string.value) {
		return `<p>This is a palindrome</p>`
	}else {
		return `<p>This is NOT a palindrome</p>`
	}
};



