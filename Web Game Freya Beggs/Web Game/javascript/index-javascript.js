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

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;
	document.getElementById("roomText").innerHTML = roomArray[roomIndex].text;
	document.getElementById("roomChoices").innerHTML = "";
	
	var room = 0
	
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		if (roomIndex == 0 || roomIndex == 2)
		{
			room = i + 1;
		}
		else
		{
			room = i + i;
		}
		
		var theButton = "<button value='" + i + "' onClick=SelectRoom(" + (room) + ")>" + roomArray[roomIndex].choices[i].text + "</button>";
		
		document.getElementById("roomChoices").innerHTML += theButton;
	}
}


