
var dollar = 0;
var one = 1;
var five = 5;
var ten = 10;
var twenty = 20;
var fifty = 50;

function increaseDollar()
{
dollar++;
document.getElementById('userDollars').innerHTML= dollar;
}
function increaseFiveDollar()
{
dollar = dollar + five;
document.getElementById('userDollars').innerHTML= dollar;
}
function increaseTenDollar()
{
dollar = dollar + ten;
document.getElementById('userDollars').innerHTML= dollar;
}
function increaseTwentyDollar()
{
dollar = dollar + twenty;
document.getElementById('userDollars').innerHTML= dollar;
}
function increaseFiftyDollar()
{
dollar = dollar + fifty;
document.getElementById('userDollars').innerHTML= dollar;
}

