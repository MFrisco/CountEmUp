
var cent = 0;
var one = 1;
var five = 5;
var ten = 10;
var twentyfive = 25;

function increaseOneCent()
{
cent++;
document.getElementById('userCents').innerHTML= cent;
}

function increaseFiveCent()
{
cent = cent + five;
document.getElementById('userCents').innerHTML= cent;
}

function increaseTenCent()
{
cent = cent + ten;
document.getElementById('userCents').innerHTML= cent;
}

function increaseTwentyFiveCent()
{
cent = cent + twentyfive;
document.getElementById('userCents').innerHTML= cent;
}

