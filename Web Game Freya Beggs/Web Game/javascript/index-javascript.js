/*
Index page Javascript
*/

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;
	document.getElementById("roomText").innerHTML = roomArray[roomIndex].text;
	document.getElementById("roomImage").src = roomArray[roomIndex].image;
	document.getElementById("roomChoices").innerHTML = "";

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var theButton = "<button value='" + i + "' onClick=SelectRoom(" +
				(roomArray[roomIndex].choices[i].index) + ")>" + roomArray[roomIndex].choices[i].text + "</button><br />";
		document.getElementById("roomChoices").innerHTML += theButton;
	}
}



