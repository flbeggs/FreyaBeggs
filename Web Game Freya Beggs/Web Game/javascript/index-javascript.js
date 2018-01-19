/*
Index page Javascript
*/

function StorePlayerData()
{
	var playerName = document.getElementById("playername").value;
	localStorage.setItem("playername", playerName);
	
	var playerHealth = document.getElementById("playerhealth").value;
	localStorage.setItem("playerhealth", playerHealth);
	
	var playerColour = document.getElementById("playercolour").value;
	localStorage.setItem("playercolour", playerColour);
}

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


