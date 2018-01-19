/*
Index page Javascript
*/

function StorePlayerData()
{
	var playerName = document.getElementById("playername").value;
	localStorage.setItem("playername", playerName);
}

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
		
		var theButton = "<button value='" + i + "' onClick=SelectRoom(" + (room) + ")>" + roomArray[roomIndex].choices[i].text + "</button>" + "<br />";
		
		document.getElementById("roomChoices").innerHTML += theButton;
	}
}


