let string = document.getElementById("input");
let button = document.getElementById("button");
let gimmeIt = document.getElementById("box");
let button1 = 
var testString = "";
// adds a keyup event listener for the enter button and if true it runs the letterOnly fuction



button.addEventListener("click", doTheThing);

function doTheThing() {
	let newString = string.value.split("");
	let revString = reversal(newString);
	gimmeIt.innerHTML += alphabits(newString);
	gimmeIt.innerHTML += palindrome(newString, revString);
};

function reversal(str) {
	var rev = str.reverse().join("");
	gimmeIt.innerHTML += `<p>${rev}</p>`; 
	return rev
}

function alphabits(str) {
	return str.sort().join("");;
};

function palindrome(str, revStr) {
	if (revStr === string.value) {
		return `<p>This is a palindrome</p>`
	} else {
		return `<p>This is not a palindrome</p>`
	}
}

function letterOnly() {
	// make a function that grabs the element for the text string, puts it into a variablr, creates a condition stating that if the input is NOT a letter- it's alerts that only letters are allowed and clears it, yet if it is a letter ir uns the doTheThing functions  
	// 
	// if (!letter.match(/[a-zA-z]/))
}

function clearInput() {
	testString = "";
	output.innerHTML = "";
}
