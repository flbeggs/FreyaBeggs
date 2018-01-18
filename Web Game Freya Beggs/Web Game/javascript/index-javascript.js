/*
Index page Javascript
*/

var today = new Date(); //Create a new date
var hourNow = today.getHours(); //Find the current hour
var greeting;

//Display the appropriate message based on the current time
if (hourNow >= 18) {
	greeting = "Good Evening";
} else if (hourNow >= 12) {
	greeting = "Good Afternoon";
} else if (hourNow >= 0) {
	greeting = "Good Morning";
} else {
	greeting = "Welcome";
}

document.getElementById("hello").textContent = greeting;

/*
Change Text with button Javascript
*/

function theBeginning() {
	var name = document.getElementById("name").value
	
	var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
	
	var y = document.getElementById("hello");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
	
	var z = document.getElementById("filler");
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
	
	var a = document.getElementById("button");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
	
    document.getElementById("start").innerHTML = "Start" + " " + name;
	
	
}
