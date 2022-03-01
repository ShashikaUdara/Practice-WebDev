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