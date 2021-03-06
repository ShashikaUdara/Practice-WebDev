var counterCar = 0;
let g_temp = 0;

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

function forEachExample()
{
	const numArr = [12, 23, 34, 45, 45, 56, 67, 78];

	g_temp = "<ul><li>Example</li>";
	numArr.forEach(funcForEach);
	g_temp += "</ul>";

	document.getElementById("for-each").innerHTML = g_temp
}

function funcForEach(value, index, array)
{
	console.log(value + " " + index + " " + array);
	// creating the template
	g_temp += `<li>${index}] ${value}</li>`;

}

function mapExample()
{
	const numArr = [90, 34, 65, 32, 21, 54, 756, 456, 7777, 67, 56, 98, 34, 56, 44, 65];
	const numArr2 = numArr.map(funcMap);

	// creating the template
	let temp = "<ul>";

	for(let x of numArr2)
	{
		temp += `<li>${x}</li>`;
		console.log("array element : " + x)
	}
	temp += "</ul>";

	document.getElementById("map-example").innerHTML = temp;
}

function funcMap(value, index, array)
{
	// console.log(value + " " + index + " " + array);
	return value * 2;
}

function callFilter()
{
	const numArr = [1,2,3,4,5,6,7,8,9,23,45,67,78,43];
	const outArr = numArr.filter(funcFilter);

	// creating the template
	let temp = "<ul>";

	for(x of outArr)
	{
		temp += `<li>${x}</li>`;
	}
	temp += "</ul>";

	document.getElementById("filter-func").innerHTML = temp;
}

function funcFilter(value, index, array)
{
	console.log(value + " " + index + " " + array);
	return value > 5;
}

function reduceExample()
{
	const numArr = [1,2,3,4,5,6,7,8,9,12,34,45,67,78];
	let sum = numArr.reduce(funcReduce);
	console.log(sum)
	document.getElementById("reduce-button").innerHTML = sum;
}

function funcReduce(total, val, index, arr)
{
	return total+val;
}

function checkExample()
{
	const numArr = [1,2,3,4,5,6,7,8,9,78,67,56,45,33,23,12,34,65,55,77,99,33];

	// checking whether the numset is grater than 5 or not
	let ret1 = numArr.every(funcEvery_5);

	// checking whether the numset is lesser than 100 or not
	let ret2 = numArr.every(funcEvery_100);

	document.getElementById("every-button").innerHTML = ret1 + " and " + ret2;
}

function funcEvery_5(a,b,c)
{
	console.log(a + " " + b + " " + c);
	return a > 5;
}

function funcEvery_100(a,b,c)
{
	console.log(a + " " + b + " " + c);
	return a < 100
}

function someExample()
{
	const numArr = [1,2,3,4,5,6,7,8,9,10,12,23,34,45,56,78,89,87,76,54,43,32,21];
	let bOver30 = numArr.some(funcSome);
	document.getElementById("some-func").innerHTML = bOver30;
}

function funcSome(value, index, array)
{
	return value > 30;
}

function indexOfExample()
{
	const fruitsArr = ["apple", "mango", "papaya", "lemon", "pin-apple", "orange", "stroberry"];
	let position = fruitsArr.indexOf("papaya");

	document.getElementById("indexof-example").innerHTML = position;
}

function indexOfExampleBack()
{
	const fruitsArr = ["apple", "mango", "papaya", "lemon", "pin-apple", "orange", "stroberry"];
	let position = fruitsArr.indexOf("lemon", 2);

	document.getElementById("indexof-example-back").innerHTML = position;
}

function lastIndexOfExample()
{
	const fruitsArr = ["apple", "mango", "papaya", "lemon", "pin-apple", "orange", "lemon", "stroberry"];
	let position = fruitsArr.lastIndexOf("lemon");

	document.getElementById("last-indexof-example").innerHTML = position;
}

function findExample()
{
	const fruitsArr = ["apple", "mango", "papaya", "lemon", "pin-apple", "orange", "lemon", "stroberry"];
	// finding the first occurence
	let firstPosition = fruitsArr.find(funcFind);

	document.getElementById("find-example").innerHTML = firstPosition;
}

function funcFind(value, index, array)
{
	return value == "lemon";
}

function findMinAndMaxOfArray()
{
	const numArr = [1,2,3,4,5,6,7,8,9,10,12,23,34,45,56,78,89,87,76,54,43,32,21];
	let minVal = Infinity;
	let maxVal = -Infinity;

	// get array length
	let len = numArr.length;
	let minAndMax = [Infinity, -Infinity];

	while(len--)
	{
		if(numArr[len] < minAndMax[0])
		{
			console.log("Min - " + numArr[len]);
			minAndMax[0] = numArr[len];
		}

		if(numArr[len] > minAndMax[1])
		{
			console.log("Max - " + numArr[len]);
			minAndMax[1] = numArr[len];
		}
	}

	return minAndMax;
}

function displayMinAndMax()
{
	document.getElementById("min-and-max").innerHTML = "<ul><li>Max Val: " + findMinAndMaxOfArray()[0] + "</li><li>Min Val: " + 
	findMinAndMaxOfArray()[1] + "</li></ul>"
	console.log(findMinAndMaxOfArray());
}


// sorting an array objects

// Object array
const cars = [
	{type: "Acura", year: "2019"},
	{type: "AlfRomeo", year: "1902"},
	{type: "Audi", year: "2010"},
	{type: "BMW", year: "1904"},
	{type: "Bentley", year: "1906"},
	{type: "Buick", year: "1952"},
	{type: "Cadillac", year: "1929"},
	{type: "Chevrolet", year: "1904"},
	{type: "Chrysler", year: "1901"},
	{type: "Dodge", year: "1979"},
	{type: "Fiat", year: "1930"},
	{type: "Ford", year: "1967"},
	{type: "GMC", year: "1953"},
	{type: "Genesis", year: "1915"},
	{type: "Honda", year: "2002"},
	{type: "Hyundai", year: "1961"},
	{type: "Infiniti", year: "1920"},
	{type: "Jaguar", year: "1998"},
	{type: "Jeep", year: "1960"},
	{type: "Kia", year: "1935"},
	{type: "Land Rover", year: "1967"},
	{type: "Lexus", year: "2002"},
	{type: "Lincoln", year: "2002"},
	{type: "Lotus", year: "1999"},
	{type: "Lucid", year: "1939"},
	{type: "Maserati", year: "1924"},
	{type: "Mazda", year: "2011"},
	{type: "Mercedes-Benz", year: "1911"},
	{type: "Mercury*", year: "2000"},
	{type: "Mini", year: "1979"},
	{type: "Mitsubishi", year: "1916"},
	{type: "Nissan", year: "2006"},
	{type: "Polestar", year: "2010"},
	{type: "Pontiac*", year: "1942"},
	{type: "Porsche", year: "1936"},
	{type: "Ram", year: "1933"},
	{type: "Rivian", year: "1910"},
	{type: "Rolls-Royce", year: "2008"},
	{type: "Saab*", year: "1959"},
	{type: "Saturn*", year: "1978"},
	{type: "Scion*", year: "1923"},
	{type: "Smart", year: "1918"},
	{type: "Subaru", year: "1976"},
	{type: "Suzuki*", year: "1981"},
	{type: "Tesla", year: "1944"},
	{type: "Toyota", year: "1938"},
	{type: "Volkswagen", year: "2022"},
	{type: "Volvo", year: "1906"}
];

function objArraySortYear()
{
	let sortedCarObjArray = cars.sort(function(a, b){return a.year - b.year;});
	console.log(sortedCarObjArray)

	// creating the template
	let temp = "<ul>";

	for(let i of sortedCarObjArray)
	{
		temp += `<li>${i.type} : ${i.year}</li>`;
	}

	temp += "</ul>";

	document.getElementById("sortObjArray-year").innerHTML = temp;
}

function objArraySortType()
{
	let sortedCarObjArray = cars.sort(function(a, b){
		let aa = a.type.toLowerCase();
		let bb = b.type.toLowerCase();

		if(aa > bb){return 1;}
		if(aa < bb){return -1;}

		return 0;
	});

	console.log(sortedCarObjArray)

	// creating the template
	let temp = "<ul>";

	for(let i of sortedCarObjArray)
	{
		temp += `<li>${i.type} : ${i.year}</li>`;
	}

	temp += "</ul>";

	document.getElementById("sortObjArray-type").innerHTML = temp;
}


function dateExampleNew()
{
	const today = new Date();

	// getting year
	let _year = today.getFullYear();
	let _month = today.getMonth();
	let _date = today.getDate();
	let _hour = today.getHours();
	let _munite = today.getMinutes();
	let _second = today.getSeconds();

	document.getElementById("display-date-time").innerHTML = _year+"-"+_month+"-"+_date+" "+_hour+":"+_munite+":"+_second;
}

function setDateInToGivenData()
{
	let date_created = new Date(2012, 5, 5, 6, 20, 50, 0);

	document.getElementById("show-date-2012-05-05-6-20-50-0").innerHTML = date_created;
}


function show_5_elements()
{
	let dateTemp = new Date(2018,5,5,10,54);
	document.getElementById("show-5-elements").innerHTML = dateTemp;

}

function show_4_elements()
{
	let dateTemp = new Date(2018,5,5,10);
	document.getElementById("show-4-elements").innerHTML = dateTemp;

}

function show_3_elements()
{
	let dateTemp = new Date(2018,5,5);
	document.getElementById("show-3-elements").innerHTML = dateTemp;

}

function show_2_elements()
{
	let dateTemp = new Date(2018,5);
	document.getElementById("show-2-elements").innerHTML = dateTemp;

}

function show_1_elements()
{
	let dateTemp = new Date(2020);
	document.getElementById("show-1-elements").innerHTML = dateTemp;
}

// Date inputs -passing dates
function parseDate()
{
	let milli_sec = Date.parse("12 Mar 2022"); // getting milli seconds
	console.log(milli_sec);

	// converting milliseconds to the atual date
	let dateFromMiliSec = new Date(milli_sec);

	document.getElementById("date-from-milli-seconds").innerHTML = dateFromMiliSec;
}

// getting month and converting it to literal form
function getMonthExample()
{
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let mon = new Date();

	let _month = months[mon.getMonth()];

	document.getElementById("month-example-string form").innerHTML = _month;
}

function compareDatesExample()
{
	let today = new Date();
	let someday = new Date();
	let temp = new Date(document.getElementById("date-somday").value);
	
	// temp = temp.replace(/-/g, ",");
	// temp = temp.replace(/,0/g, ",")
	// console.log(today + " " + temp);

	// someday.setFullYear(temp);
	console.log(today + " " + temp);

	if(today < temp)
	{
		document.getElementById("today-someday-example").innerHTML = "Today is before some day";
	}
	else
	{
		document.getElementById("today-someday-example").innerHTML = "Today is after some day";
	}
}

function mathExample()
{
	// Math.E        // returns Euler's number
	// Math.PI       // returns PI
	// Math.SQRT2    // returns the square root of 2
	// Math.SQRT1_2  // returns the square root of 1/2
	// Math.LN2      // returns the natural logarithm of 2
	// Math.LN10     // returns the natural logarithm of 10
	// Math.LOG2E    // returns base 2 logarithm of E
	// Math.LOG10E   // returns base 10 logarithm of E

	mathArr = [Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2, Math.LN2, Math.LN10, Math.LOG2E, Math.LOG10E];
	mathArrLit = ["Math.E", "Math.PI", "Math.SQRT2", "Math.SQRT1_2", "Math.LN2", "Math.LN10", "Math.LOG2E", "Math.LOG10E"];

	// creating the template
	let temp = "<ul>";
	let count = 0
	for(let i of mathArr)
	{
		temp += `<li>${mathArrLit[count]}: ${i}</li>`;
		count++;
	}
	temp += "</ul>";

	document.getElementById("math-func-example").innerHTML = temp;
}

// Number to Integer
function numToIntigerExample()
{
	document.getElementById("math-num-to-int-roun").innerHTML = "Math.round(6.5): " + Math.round(6.5)
	document.getElementById("math-num-to-int-ceil").innerHTML = "Math.ceil(6.5): " + Math.ceil(6.5)
	document.getElementById("math-num-to-int-floo").innerHTML = "Math.floor(6.5): " + Math.floor(6.5)
	document.getElementById("math-num-to-int-trun").innerHTML = "Math.trunc(6.5): " + Math.trunc(6.5)
}

// sign example - Math.sign returns whether the number is negative positive or zero

function signExample()
{
	document.getElementById("math-sign-positive").innerHTML = "Math.sign(256): " + Math.sign(256);
	document.getElementById("math-sign-zero").innerHTML = "Math.sign(0): " + Math.sign(0);
	document.getElementById("math-sign-negative").innerHTML = "Math.sign(-125): " + Math.sign(-125);
}

// some basic math functions
function mathBasicFunctionsExample()
{
	// let mathArr2 = [0, 150, 30, 20, -8, -200];
	document.getElementById("Math.pow").innerHTML = "Math.pow(5, 5): " + Math.pow(5, 5);
	document.getElementById("Math.sqr").innerHTML = "Math.sqrt(15): " + Math.sqrt(15);
	document.getElementById("Math.abs").innerHTML = "Math.abs(-12.256): " + Math.abs(-12.256);
	document.getElementById("Math.sin").innerHTML = "Math.sin(30 * Math.PI/180): " + Math.sin(30 * Math.PI/180);
	document.getElementById("Math.cos").innerHTML = "Math.cos(60 * Math.PI/180): " + Math.cos(60 * Math.PI/180);
	document.getElementById("Math.max").innerHTML = "Math.max(mathArr2): " + Math.max(0, 150, 30, 20, -8, -200);
	document.getElementById("Math.min").innerHTML = "Math.min(mathArr2): " + Math.min(0, 150, 30, 20, -8, -200);
	document.getElementById("math-rand").innerHTML = "Math.floor(Math.random()*10): " + Math.floor(Math.random()*10);

	document.getElementById("Math.log").innerHTML = "Math.log: " + Math.log(Math.floor(Math.random()*10));
	document.getElementById("Math.log2").innerHTML = "Math.log2: " + Math.log2(Math.floor(Math.random()*100));
	document.getElementById("Math.log10").innerHTML = "Math.log10: " + Math.log10(Math.floor(Math.random()*1000));
}

// A proper random function
function randomFuncExample()
{
	// (Math.random() * (Max -Min)) + Min - Including Min, Excluding Max
	document.getElementById("random-example1").innerHTML = (Math.random() * (100 - 1)) + 1; // range is 1 - 99
	
	// (Math.random() * (Max -Min) + 1) + Min - Including Min and Max
	document.getElementById("random-example2").innerHTML = (Math.random() * (100 - 1) + 1) + 1; // range is 1 - 100
}

// JavaScript Booleans as Objects
function booleanExample()
{
	let x = false; // this will be treated as a boolean
	let y = new Boolean(false); // this will be trated as an object

	document.getElementById("boolean-example1").innerHTML = typeof x; // returns boolean
	document.getElementById("boolean-example2").innerHTML = typeof y; // returns object
}

function getMonth()
{
	const arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	document.getElementById("display-month").innerHTML = arrMonths[document.getElementById("select-month").value-1];
}

function switchExample()
{
	let month = "";
	switch(parseInt(document.getElementById("month-select").value))
	{
		case 1:
		month = "January";
		break;
		
		case 2:
		month = "February";
		break;
		
		case 3:
		month = "March";
		break;
		
		case 4:
		month = "April";
		break;
		
		case 5:
		month = "May";
		break;
		
		case 6:
		month = "June";
		break;
		
		case 7:
		month = "July";
		break;
		
		case 8:
		month = "August";
		break;
		
		case 9:
		month = "September";
		break;
		
		case 10:
		month = "October";
		break;
		
		case 11:
		month = "November";
		break;
		
		case 12:
		month = "December";
		break;

		default:
		month = "Select a valied month";
	}

	document.getElementById("month-select-example").innerHTML = month;
}

function iterationExampleFor()
{
	// 1st statment elemination
	let i = 0;
	mathArrLit = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let temp = "<ul>";
	for(;i<mathArrLit.length; i++)
	{
		temp += `<li>Without 1st Statment: ${mathArrLit[i]}</li>`;
	}
	temp += "<li>-----------------------------</li>";

	// 3rd statment elemination
	let j = 0;
	for(;j<mathArrLit.length; )
	{
		temp += `<li>Without 3rd Statment: ${mathArrLit[j]}</li>`;
		j++;
	}
	temp += "</ul>";

	document.getElementById("month-list-for").innerHTML = temp;
}

// JavaScript For In Objects/Arrays and Array.forEach()
const car = {
	name: "Nissan FB15",
	age: 21,
	color: "Siver",
	milage: 150000,
	maxSpeed: "180 km/h",
};

let globStrVal = "";

function forInExampleObj()
{
	let des = "<ul>";
	for(let x in car)
	{
		des += `<li>${x}: ${car[x]}</li>`;
	}
	des += "</ul>";

	document.getElementById("obj-description").innerHTML = des;
}

function forInExampleArr()
{
	const numbers = [45, 4, 9, 16, 25, 56, 67, 78, 43, 54, 76 ,87, 2];
	let des = "<ul>";
	for(let x in numbers)
	{
		des += `<li>${x}: ${numbers[x]}</li>`;
	}
	des += "</ul>";

	document.getElementById("arr-description").innerHTML = des;
}

function forEachExampleObj()
{
	globStrVal = "<ul>";
	Object.keys(car).forEach(forEachExampleObj_function);
	document.getElementById("foreach-obj-description").innerHTML = globStrVal + "</ul>";
}

function forEachExampleObj_function(_value, _index, obj)
{
	globStrVal += `<li>${_index} ${_value} === ${car[_value]}=== --- ${obj}</li>`;
}

function forEachExampleArr()
{
	const numbers = [45, 4, 9, 16, 25, 56, 67, 78, 43, 54, 76 ,87, 2];
	globStrVal = "<ul>";
	numbers.forEach(forEachExampleArr_function);
	document.getElementById("foreach-arr-description").innerHTML = globStrVal + "</ul>";
}

function forEachExampleArr_function(_value, _index, obj)
{
	globStrVal += `<li>${_index} ${_value} --- ${obj}</li>`;
}

// Looping over a String
function loopOverStringExample_in()
{
	let myName = "Udara Abeyrathne";
	// template
	let temp = "<ul>";
	for(let x in myName)
	{
		temp += `<li>${myName[x]}</li>`;
	}
	temp += "</ul>";
	document.getElementById("loop-string-in").innerHTML = temp;
}

// Arrow function use
function loopOverStringExample_forEach_ArrowFunction()
{
	// let myName = "Udara Abeyrathne"; // can't use forEach for stings
	let myName = [45, 4, 9, 16, 25, 56, 67, 78, 43, 54, 76 ,87, 2];

	// template
	let temp = "<ul>";

	myName.forEach((_element, _index, _array) => 
	{
		temp += `<li>${_index} : ${_element} : ${_array}</li>`;
	});

	temp += "</ul>";
	document.getElementById("loop-string-foreach").innerHTML = temp;
}


// Callback function use
function loopOverStringExample_forEach_CallbackFunction()
{
	// let myName = "Udara Abeyrathne"; // can't use forEach for stings
	let myName = [45, 4, 9, 16, 25, 56, 67, 78, 43, 54, 76 ,87, 2];
	// template
	console.log(myName);

	globStrVal = "<ul>";
	myName.forEach(forEach_CallbackFunction);
	globStrVal += "</ul>";

	document.getElementById("loop-string-callBackFunction").innerHTML = globStrVal;
}

function forEach_CallbackFunction(_index, _value, _array)
{
	globStrVal += `<li>${_index} : ${_value} : ${_array}</li>`;
}


// Inline callback function use
function loopOverStringExample_forEach_CallbackFunction_Inline()
{
	// let myName = "Udara Abeyrathne"; // can't use forEach for stings
	let myName = [45, 4, 9, 16, 25, 56, 67, 78, 43, 54, 76 ,87, 2];

	// template
	globStrVal = "<ul>";
	myName.forEach(function(_element, _index, _array){
		globStrVal += `<li>${_element} : ${_index} : ${_array}</li>`;
	});
	globStrVal += "</ul>";

	document.getElementById("loop-string-callBackFunction-inline").innerHTML = globStrVal;
	console.log(globStrVal);
}

// differense betweel for/in and for/of
function diffForInandForOf()
{
	const monthArrLit = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	globStrVal = "<ul><li>--------------For In case--------------</li>";
	for(let x in monthArrLit)
	{
		globStrVal += `<li>${x} -- ${monthArrLit[x]}</li>`;
	}
	globStrVal += "<li>--------------For Of case>--------------</li>";
	for(let y of monthArrLit)
	{
		globStrVal += `<li> --- ${y}</li>`;
	}
	globStrVal += "</ul>";

	document.getElementById("diff-in-of-example").innerHTML = globStrVal;
}

// while example
function whileExample()
{
	let i = 0;
	monthArrLit = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	globStrVal = "<ul><li>--------------While--------------</li>";
	while(i < monthArrLit.length)
	{
		globStrVal += `<li>${monthArrLit[i]}</li>`;
		i++;
	}
	globStrVal += "</ul>";

	document.getElementById("while-example").innerHTML = globStrVal;
}

// do-while example
function doWhileExample()
{
	let i = 0;
	monthArrLit = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	globStrVal = "<ul><li>--------------Do-While--------------</li>";
	
	do
	{
		globStrVal += `<li>${monthArrLit[i]}</li>`;
		i++;
	}
	while(i < monthArrLit.length)
	globStrVal += "</ul>";

	document.getElementById("do-while-example").innerHTML = globStrVal;
}

// The Break and continue Statements
function breadkAndContinueExample()
{
	// break statment will forcefully terminates the execution of the immediate loop completly.
	let i = 0;
	globStrVal = "<ul><li>--------------Break Example terminates from 5 onwards--------------</li>";
	for(i=0;i<10;i++)
	{
		if(i+1 == 5) break;
		globStrVal += `<li> --- ${i+1} --- </li>`;
	}
	globStrVal += "<li>--------------Continue Example avoids 5--------------</li>";
	for(i=0;i<10;i++)
	{
		if(i+1 == 5) continue;
		globStrVal += `<li> --- ${i+1} --- </li>`;
	}
	globStrVal += "</ul>";
	document.getElementById("break-continue-example").innerHTML = globStrVal;
}

// JavaScript Labels
function lableExample()
{
	const monthArrLit = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let textList = "";
	list:
	{
		textList += monthArrLit[0] + "<br>";
		textList += monthArrLit[1] + "<br>";
		textList += monthArrLit[2] + "<br>";
		textList += monthArrLit[3] + "<br>";
		break list;
		textList += monthArrLit[4] + "<br>";
		textList += monthArrLit[5] + "<br>";
		textList += monthArrLit[6] + "<br>";
		textList += monthArrLit[7] + "<br>";
		textList += monthArrLit[8] + "<br>";
		textList += monthArrLit[9] + "<br>";
		textList += monthArrLit[10] + "<br>";
		textList += monthArrLit[11] + "<br>";
	}
	document.getElementById("show-labled-list").innerHTML = textList;
	console.log(typeof list);
}

// The For Of Loop
function forOfLoopExample()
{
	const monthArrLit = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const myName = "Udara Abeyrathne";

	let template = "<ul>";

	// iterating over array
	for(let x of monthArrLit)
	{
		template += `<li>${x}</li>`; 
	}
	template += "+++++++++++++++"; 

	// iterating over string
	for(let y of myName)
	{
		template += `<li>${y}</li>`; 
	}
	template += "</ul>";

	document.getElementById("for-of-example").innerHTML = template;
}


// Iterating Over a Set
function iteratingOverSetExample()
{
	const lettersOfName = new Set(['U','d','a','r','a','','A','b','e','y','r','a','t','h','n','e']);

	let template = "<ul>";
	for(let x of lettersOfName)
	{
		template += `<li>${x}</li>`; 
	}
	template += "</ul>";

	// the output of this operation is a set, means that the some of the duplicate letters will be removed in the process.
	document.getElementById("set-iteration-example").innerHTML = template;
}

// Iterating Over a Map
function mapExample()
{
	const carMap = new Map([
		["Nissan", 2005],
		["Toyota", 2001],
		["Peugeot", 1995],
		["Audi", 2020],
		["Mitsubishi", 2007],
	]);

	let template = "<ul>";
	for(let x of carMap)
	{
		template += `<li>${x[0]} --- ${x[1]}</li>`; 
	}
	template += "</ul>";

	document.getElementById("map-iteration-example").innerHTML = template;


	// The set() Method
	carMap.set("Cadillac", 1990);
	carMap.set("Mazda", 1980);
	carMap.set("RangeROver", 1945);
	carMap.set("Benz", 1918);

	template = "<ul>";
	for(let x of carMap)
	{
		template += `<li>${x[0]} --- ${x[1]}</li>`; 
	}
	template += "</ul>";
	document.getElementById("map.set()-example").innerHTML = template;

	// The get() Method
	template = "<ul>";
	template += `<li>${carMap.get("Cadillac")}</li>`;
	template += `<li>${carMap.get("Mazda")}</li>`;
	template += `<li>${carMap.get("Benz")}</li>`;
	template += "</ul>";
	document.getElementById("map.get()-example").innerHTML = template;

	// map.size
	document.getElementById("map.size-example").innerHTML = carMap.size;

	// map.has method - use#1
	document.getElementById("map.has(Cadillac)-example1").innerHTML = "map.has(Cadillac)-example1 - " + carMap.has("Cadillac");

	// The delete() Method
	carMap.delete("Cadillac");
	carMap.delete("Mazda");
	carMap.delete("Benz");
	template = "<ul>";
	for(let x of carMap)
	{
		template += `<li>${x[0]} --- ${x[1]}</li>`; 
	}
	template += "</ul>";
	document.getElementById("map.delete()-example").innerHTML = template;

	// map.has method - use#2
	document.getElementById("map.has(Cadillac)-example2").innerHTML = "map.has(Cadillac)-example2 - " + carMap.has("Cadillac");

	// The forEach() Method
	template = "<ul>";
	carMap.forEach(function(key, value)
	{
		template += `<li>${key} = ${value}</li>`;
	})
	template += "</ul>";
	document.getElementById("map.forEach()-example").innerHTML = template;

	// The entries() Method
	template = "<ul>";
	for(const i of carMap.entries())
	{
		template += `<li>${i} = ${i[0]} and ${i[1]}</li>`;
	}
	template += "</ul>";
	document.getElementById("map.entries()-example").innerHTML = template;
}

// javascript Sets
function setExample()
{
	const carSet = new Set(["Nissan", "Toyota", "Peugeot"]);
	carSet.add("Mitsubishi");
	carSet.add("Honda");
	carSet.add("Cadillac");
	carSet.add("Daihutu");
	carSet.add("Audi");

	let template = "<ul>";
	for(let x of carSet)
	{
		template += `<li>${x}</li>`; 
	}
	template += "</ul>";

	document.getElementById("show-set-elements-example").innerHTML = template;

	// for each
	let text = "";
	carSet.forEach(function(value, index, setE)
	{
		text += value + " : " + index + " : " + setE + "<br>";
	});

	document.getElementById("show-set-elements-forEach-example").innerHTML = text;
	document.getElementById("show-set.values()-example").innerHTML = carSet.values();

	template = "<br><br><ul>";
	for(let x of carSet.values())
	{
		template += `<li>${x}</li>`; 
	}
	template += "</ul>";
	document.getElementById("show-for-set.values()-example").innerHTML = template;
	document.getElementById("show-for-set.has()-example").innerHTML = "carSet.has(Honda): " + carSet.has("Honda");
	document.getElementById("show-for-set.delete()-example").innerHTML = "carSet.delete(Honda): " + carSet.delete("Honda");
	document.getElementById("show-for-set.has()-after-delete-example").innerHTML = "carSet.has(Honda): " + carSet.has("Honda");

	// after delete
	template = "<br><br><ul>";
	for(let x of carSet.values())
	{
		template += `<li>${x}</li>`; 
	}
	template += "</ul>";
	document.getElementById("show-for-set.values()-afterDelete-example").innerHTML = template;
}

// JavaScript Type Conversion
function typeConversionExample()
{
	// Converting Strings to Numbers
	let template = "<ul>";
	template +=`<li>Number("3.14"): ${Number("3.14")}</li>`;
	template +=`<li>Number(" "): ${Number(" ")}</li>`;
	template +=`<li>Number(""): ${Number("")}</li>`;
	template +=`<li>Number("99 88"): ${Number("99 88")}</li>`;
	template += "</ul>";
	document.getElementById("typeConv-number-example").innerHTML = template;

	// Number Methods
	// parseFloat
	template = "<ul>";
	template +=`<li>parseFloat("3.14"): ${parseFloat("3.14")}</li>`;
	template +=`<li>parseFloat(" "): ${parseFloat(" ")}</li>`;
	template +=`<li>parseFloat(""): ${parseFloat("")}</li>`;
	template +=`<li>parseFloat("99 88"): ${parseFloat("99 88")}</li>`;
	template += "</ul>";
	document.getElementById("typeConv-parseFloat-example").innerHTML = template;

	// parseInt
	template = "<ul>";
	template +=`<li>parseInt("3.14"): ${parseInt("3.14")}</li>`;
	template +=`<li>parseInt(" "): ${parseInt(" ")}</li>`;
	template +=`<li>parseInt(""): ${parseInt("")}</li>`;
	template +=`<li>parseInt("99 88"): ${parseInt("99 88")}</li>`;
	template += "</ul>";
	document.getElementById("typeConv-parseInt-example").innerHTML = template;
}

// Operator impacts
function unaryOperatorExample()
{
	// The Unary + Operator
	let sA = "12.25";
	let iA = sA;
	let iB = + sA;

	console.log("sA: " + typeof sA);
	console.log("iA: " + typeof iA);
	console.log("iB: " + typeof iB);

	// Converting Numbers to Strings
	console.log("String(123): " + typeof String(123));
	console.log("String(123.25): " + typeof String(123.25));
	console.log("String(1.23E5): " + typeof String(1.23E5));
	console.log("String(99+26): " + typeof String(99+26));
	console.log("String(): " + typeof String());

	// Converting Dates to Numbers
	console.log("Todays date converted to Number: " + Number(new Date()));
	console.log("Todays date converted to Time: " + (new Date()).getTime());
	console.log("Todays date converted to Time -> Number: " + Number((new Date()).getTime()));

	// date to string
	console.log("Date converted to String: " + Date().toString());

	// Converting Booleans to Numbers
	console.log("Number(true): " + Number(true));
	console.log("Number(false): " + Number(false));

	// Converting Booleans to Strings
	console.log("String(true): " + String(true));
	console.log("String(false): " + String(false));

	// Automatic Type Conversion
	console.log('5 + null :- ' + 5 + null );
	console.log('"5" + null :- ' + "5" + null );
	console.log('"5" + 2 :- ' + "5" + 2 );
	console.log('"5" - 2 :- ' + "5" - 2 );
	console.log('"5" * "2" :- ' + "5" * "2" );
}