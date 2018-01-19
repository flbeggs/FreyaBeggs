function StorePlayerData()
{
	var playerName = document.getElementById("playername").value;
	localStorage.setItem("playername", playerName);
	
	var playerHealth = document.getElementById("playerhealth").value;
	localStorage.setItem("playerhealth", playerHealth);
	
	var playerColour = document.getElementById("playercolour").value;
	localStorage.setItem("playercolour", playerColour);
}