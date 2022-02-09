var counterCar = 0;

const person = {
	firstName: "Udara",
	lastName: "Abeyrathne",
	age: 30,
	id: "911260565v",
	fullName : function()
	{
		// return this.firstName + " " + this.lastName;
		document.getElementById("get-name").innerHTML = this.firstName + " " + this.lastName;
	}
};

function changePara()
{
	document.getElementById("demo").innerHTML = "Hello JavaScript!";
	document.write("This is a simple string");
	window.alert("Pop");
	console.log("this is console.log");
}

function changeColumnCount()
{
	document.getElementById("para").style.columnCount = 4;
}

function printPage()
{
	window.print();
}

function checkVarandLet()
{
	var a;
	let b;
	document.write(a + " and " + b);
	a = "apple";
	b = "ball";
	document.write("<br>");
	document.write(a + " and " + b);
}

function carNameChanger()
{
	const car = ["Nissan", "Toyota", "Peugeot", "Audi"];
	const color = ["Chartreuse", "CornflowerBlue", "Crimson", "BurlyWood"];
	console.log(car[counterCar]);
	document.body.style.backgroundColor = color[counterCar];
	counterCar++;
	if(counterCar>car.length-1)
	{
		counterCar = 0;
	}
}


function showTime()
{
	document.getElementById("show-time").innerHTML = Date();
}

// code changes the content of its own element 
function showTimeInButton()
{
	document.getElementById("date-button").innerHTML = Date();
}

function detectChange()
{
	console.log("paragraph has been changed");
}

function ditectMouseOver()
{
	// document.getElementById("hower-over-detect").innerHTML.backgroundColor = blue;
	console.log("ditectMouseOver");
	stringMethods();
}

function stringMethods()
{
	let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	console.log(str.length);
	console.log(str.slice(5, 10));
	console.log(str.substring(5, 10));
	console.log(str.substr(5, 10));
}

function templateLiterals()
{
	let a = "Udara";
	let b = "Abeyrathne";
// 
	let text = `My name is ${a} ${b}.`;
	let c = 0.25;
	let tax = ` The new govermant tax is for one lak is ${100000*0.25.toFixed(2)}`;
	text += tax;

	document.getElementById("template").innerHTML = text;

}

function loopExample()
{
	let header = "Loop example";
	const fruits = ["Mango", "Apple", "Orange", "Pinapple"];

	// template is here
	let temp = `<h2>${header}</h2><ul>`;

	for (const x of fruits)
	{
		temp += `<li>${x}</li>`;
	}
	temp += "</ul>";

	
	document.getElementById("templatesInDiv").innerHTML = temp;
}