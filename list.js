

//Hide script from old browsers
	// This script copyright 1997, Tom Negrino and Dori Smith.
	// This script is from "JavaScript for the WWW, Visual QuickStart Guide, 2nd Ed."
	// For more information, see <http://www.chalcedony.com/javascript/>.
	// This script may be used and modified, but the copyright notice must remain intact.

	var now = new Date();

	if (now.getHours() < 5) {
		document.write(" Shouldn't have drank so much ");
	}
	else if (now.getHours() < 10) {
		document.write(" Good Morning! Time for Coffee!");
	}
	else if (now.getHours() < 11) {
		document.write(" I could go for a ");
	}
	else {
		document.write(" Good Evening!");
	}
	
	// End hiding script from old browsers -->
var myDrinks= new Array();
myDrinks[0] = "Macchiato,";
myDrinks[1] = "Espresso,";
myDrinks[2] = "Latte (:";
myDrinks[3] = "Cappuccino,";

document.write(myDrinks[2]);



var userDrinks = prompt("How many cups of coffee do you drink in a day?");
	
var userDrinks = userDrinks/1;
alert("You can drink " + userDrinks);


if(userDrinks<3) {
	
	alert("You could use a little more.");
}	
		else {
		
		alert("That's a lot!");
		
	}

var myDemo = document.getElementById("demoparent");
console.log("myDemo="+ myDemo);

var listLength=myDemo.childNodes.length;

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");

console.log ("Number of li items in Menu: "+ linksInMenu.length);


var myComments = document.getElementById("comments");

myComments.setAttributes("align", "right");

myComments.setAttributes("style", "color: red");

var newItem = document.createElement("li");

var newText = document.createTextNode("Hey, this is new!");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

