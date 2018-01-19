function CreatePlayer()
{

 document.getElementById("name").innerHTML = document.getElementById("playername").value;
 document.getElementById("colour").style.backgroundColor = document.getElementById("playercolour").value;
 document.getElementById("health").innerHTML = document.getElementById("playerhealth").value;
 var option = document.getElementById("playerweapon").value;

 if (option == 1)
 {
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
 }
 else if (option == 2)
 {
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
 }
 else
 {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
 }
}