var myDrinks= new Array();
myDrinks[0] = "Macchiato,";
myDrinks[1] = "Espresso,";
myDrinks[2] = "Lattes,";
myDrinks[3] = "Cappuccino,";

document.write(myDrinks[2]);

<!-- Hide script from old browsers
	// This script copyright 1997, Tom Negrino and Dori Smith.
	// This script is from "JavaScript for the WWW, Visual QuickStart Guide, 2nd Ed."
	// For more information, see <http://www.chalcedony.com/javascript/>.
	// This script may be used and modified, but the copyright notice must remain intact.

	now = new Date

	if (now.getHours() < 5) {
		document.write(" What are you doing up so late?")
	}
	else if (now.getHours() < 10) {
		document.write(" Good Morning! Time for Coffee!")
	}
	else if (now.getHours() < 11) {
		document.write(" No sleeping in class!")
	}
	else {
		document.write(" Good Evening!")
	}
	
	// End hiding script from old browsers -->

	
var userDrinks = prompt("How many cups of coffee do you drink in a day?");
	
var userDrinks = userDrinks/1;
alert("You can drink " + userDrinks);


if(userDrinks<3) {
	
	alert("You could use a little more.");
}	
		else {
		
		alert("That's a lot!");
		
	}