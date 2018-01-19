var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];

function OnLoad()
{
	for (var i = 0; i <= 2; i++)
	{
		var weapon = "<option id='weapon'" + i + "value='0'>" + weaponsArray[i] + "</option>"
		var selection = document.getElementById("weapons");

		selection.innerHTML += weapon;
	}
}

function SelectWeapon()
{
	var display = document.getElementById("currentWeapon");
	var selection = document.getElementById("weapons");
	var selectOption = selection.options[selection.selectedIndex].text;

	display.innerHTML = selectOption;
}
