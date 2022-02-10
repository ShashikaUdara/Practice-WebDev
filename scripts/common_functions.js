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

	let y = 0.2 +0.1;
	let yTemp = `<li>${y}</li>`;
	let dTemp = `<li>${Date()}</li>`;

	// let d = new Date(dateTime.getTime());
	// d.setHours(0, 0, 0, 0);
	let dnTemp = `<li>${WithoutTime()}</li>`;
	let dnowTemp = `<li>${Date.now()}</li>`;

	temp += dnowTemp;
	temp += dnTemp;
	temp += dTemp;
	temp += yTemp;
	temp += "</ul>";


	document.getElementById("templatesInDiv").innerHTML = temp;
}

function WithoutTime() 
{
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
}

function sortArray()
{
	const fruits = ["Mango", "Apple", "Orange", "Pinapple"];
	fruits.sort();
	let temp = "<ul>";
	for(let x of fruits)
	{
		temp += `<li>${x}</li>`;
	}
	temp += "</ul>";

	const numArr = [45, 67, 34,6, 35, 76, 87, 21];
	numArr.sort(function(a, b){ return a-b })

	let temp2 = "<ul>";
	for(let y of numArr)
	{
		temp2 += `<li>${y}</li>`;
	}
	temp2 += "</ul>";

	document.getElementById("sorted-div").innerHTML = temp + "<br>" + temp2;
}

function shuffleArrayData()
{
	const randArr = [34, 56, 68, 25, 76, 91, 83, 66, 52, 64, 77, 99];

	document.getElementById("shuffle-array").innerHTML = randArr.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("math").innerHTML = Math.random();
}

function fisherYetesMethod()
{
	const numList = [12, 32, 23, 34, 43, 45, 54, 56, 65, 76, 67, 78, 89];

	for (let i = 0; i < numList.length - 1; i++)
	{
		let a = Math.floor(Math.random() * i);
		let b = numList[i];
		numList[i] = numList[a];
		numList[a] = b;
		console.log(i);
	}

	// creating the template
	let temp = "<ul>";
	for(let j of numList)
	{
		temp += `<li>${j}</li>`;
	}
	temp += "</ul>"

	document.getElementById("fisher-yates").innerHTML = temp
}