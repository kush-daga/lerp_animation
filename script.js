/** @format */

var value = document.getElementById("value"); // Get the value
var target = document.getElementById("target"); //Get the target

var valueBox = value.getBoundingClientRect(); //To get the left values
var targetBox = target.getBoundingClientRect(); //to get the left valeus

var lerp = function (value1, value2, amount) {
	amount = amount < 0 ? 0 : amount;
	amount = amount > 1 ? 1 : amount;
	return value1 + (value2 - value1) * amount;
};

var interval = setInterval(loop, 33); // To run the Loop function at 30fps
console.log(valueBox.left); //0
console.log(targetBox.left); //500
var temp = valueBox.left;
function loop() {
	temp = lerp(temp, targetBox.left, 0.05); // Setting the temp values between 0(temp) and 500
	// break;
	console.log(temp);
	if (targetBox.left - temp < 0.1) {
		// This much accuracy
		console.log("Done");
		clearInterval(interval);
	}
	value.style.left = temp + "px"; //Setting the style of value to be equal to temp pixels. (So that it moves)
}
