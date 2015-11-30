var cent;
var compCents;
var dollar;
var compDollars;
	function compareAmounts() {
	if (cent == compCents && dollar == compDollars) {
	document.getElementById("amount").style.display = 'none';
	document.getElementById("messageCenter").style.display = '';
	document.getElementById("messageCenter2").style.display = '';
	document.getElementById("messageCenter2").style.display = '';
	document.getElementById("messageCenter").innerHTML = "Congratulations!";
	document.getElementById("messageCenter2").innerHTML = "Tap to Play Again.";
	}
}