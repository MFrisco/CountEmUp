var cent;
var compCents;
var dollar;
var compDollars;
	function compareAmountsL() {
	if (cent > compCents || dollar > compDollars) {
	document.getElementById("amount").style.display = 'none';
	document.getElementById("messageCenter2").style.display = '';
	document.getElementById("messageCenter").style.display = '';
	document.getElementById("messageCenter").innerHTML = "Bust!!";
	document.getElementById("messageCenter2").innerHTML = "Tap to Try Again.";
	}
}