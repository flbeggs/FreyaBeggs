function CreatePlayer()
{
 var playerName = document.getElementById("playername").value;
 var playerColour = document.getElementById("playercolour").value;
 var playerHealth = document.getElementById("playerHealth").value;
 var playerWeapon = document.getElementById("playerWeapon").value;
 
 document.getElementById("name").innerHTML = playerName;
 document.getElementById("colour").style.backgroundColor = playerColour;
 document.getElementById("health").innerHTML = playerHealth;
 
 if (playerWeapon == 1) {
	document.getElementById("weapon").innerHTML = "Crossbow of nuch hurting";
 }
 else if (playerWeapon ==2) {
	document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
 }
 else {
	document.getElementById("weapon").innerHTML = "Wand of amaze magics";
 }
