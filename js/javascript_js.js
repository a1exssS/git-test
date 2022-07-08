"Use strict"

// lesson first

/*

let firstName = 'Alex';
let age = 16;
let student = true;

console.log("Hello", firstName);
console.log("I am", age, "years old");
console.log("Enrolled", student);

document.getElementById('p1').innerHTML = 'Hello ' + firstName
document.getElementById('p2').innerHTML = 'I am ' + age + ' years old'
document.getElementById('p3').innerHTML = 'Enrolled ' + student

*/



// lesson second

/* let students = 25;

students = students + 1;
students = students - 1;
studentsInGroup = students / 5;
studentsInGroup = students * 2;
extraStudents = students % 3;

/ short form /

students += 1;
students -= 1;
studentsInGroup = students / 5;
studentsInGroup = students * 5;
extraStudents = students % 3;

console.log(students);
document.getElementById('p1').innerHTML = 'We have now ' + students + ' students'

console.log(studentsInGroup);
document.getElementById('p1').innerHTML = 'We have now ' + studentsInGroup + ' students in 5 groups'

console.log(extraStudents);
document.getElementById('p1').innerHTML = 'We have now ' + extraStudents + ' people who do not find a group';*/



// lesson third



/* // easy way

 let userName = window.prompt("What's your name?");
 console.log(userName);

  //practical way

let userName;

document.getElementById('submitMyName').onclick = function () {
	userName = document.getElementById("myName").value;
	document.getElementById('p1').innerHTML = "your name is " + userName
	console.log(userName)
}
*/



// lesson fourth
/*
let num = window.prompt('tell me how many pizzas do you want?');
num = Number(num)
num += 1000;
document.getElementById('p1').innerHTML = 'your social credit is ' + '- ' + num
*/



// lesson fifth

/*
const PI = 3.14159;
let radius;
let circumference;

radius = Number(radius)

document.getElementById('answer').onclick = function () {
	radius = document.getElementById("radius").value;
	circumference = 2 * PI * radius;
	document.getElementById('p1').innerHTML = "your radius is: " + circumference
	console.log(circumference)
}*/



// leson sixth

/*let x;
let y = 4;
let z = 6;
let min;
let max;

document.getElementById('answer').onclick = function () {
	math = document.getElementById('math').value;
	// x = Math.round(math); округляет нормально
	// x = Math.floor(math); окрузлает в меньшую сторону
	// x = Math.ceil(math); округляет в большую торону
	// x = Math.pow(math, math = document.getElementById('math').value); число возводит в степень сама себя
	// x = Math.pow(math, 2) возводит в степень на 2
	// x = Math.sqrt(math); возводит в квадратный корень
	// x = Math.abs(math); модуль
	// min = Math.min(x, y, z)  минимальное значение
	// max = Math.max(y, x, z) максимальное значение
	// x = Math.PI
	document.getElementById('p1').innerHTML = "your number is " + x
}*/



// lesson seventh

/*let a;
let b;
let c;

document.getElementById('answer').onclick = function () {
	a = document.getElementById('sideA').value;
	a = Number(a)
	b = document.getElementById('sideB').value;
	b = Number(b)
	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
	document.getElementById('p1').innerHTML = "your number is " + c
}*/




// lesson eighth
/*
let count = 0

document.getElementById('plusBtn').onclick = function () {
	count += 1;
	document.getElementById('count').innerHTML = count
}
document.getElementById('resetBtn').onclick = function () {
	count = 0;
	document.getElementById('count').innerHTML = count
}
document.getElementById('minusBtn').onclick = function () {
	count -= 1;
	document.getElementById('count').innerHTML = count
}
*/




// lesson nineth
/*
let x;
let y;
let z;

document.getElementById('roll').onclick = function () {
	x = Math.floor(Math.random() * 6) + 1;
	y = Math.floor(Math.random() * 6) + 1;
	z = Math.floor(Math.random() * 6) + 1;
	document.getElementById('random1').innerHTML = x
	document.getElementById('random2').innerHTML = y
	document.getElementById('random3').innerHTML = z
}*/




// lesson tenth

/*let userName;

document.getElementById('nameBtn').onclick = function () {
	userName = String(userName)
	userName = document.getElementById('nameType').value;
	// document.getElementById('nameShow').innerHTML = userName.length измеряет длинну введенного текста
	// document.getElementById('nameShow').innerHTML = userName.charAt(0) выводит ту букву корая написана в charAt() только если она есть в веденном тексте
	// document.getElementById('nameShow').innerHTML = userName.indexOf("e") находит первую букву и выводит длину на которой она находится
	// document.getElementById('nameShow').innerHTML = userName.lastIndexOf('e')находит последнюю букву и выводит длину на которой она находится
	// document.getElementById('nameShow').innerHTML = userName.trim() убирает до и посде пробелы
	// document.getElementById('nameShow').innerHTML = userName.toUpperCase() выводит все в upper
	// document.getElementById('nameShow').innerHTML = userName.toLowerCase() выводит все в lower
	// document.getElementById('nameShow').innerHTML = userName.replaceAll("/", "-") переделывает 1 значение на другое
}*/




// lesson eleventh

/*
let fullName;

document.getElementById('showFullName').onclick = function () {
	fullName = String(fullName)
	fullName = document.getElementById('yourName').value;
	document.getElementById('firstName').innerHTML = "your first name is " + fullName.slice(0, fullName.indexOf(" "))
	document.getElementById('secondName').innerHTML = "your second name is" + fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(" "))
	document.getElementById('thirdName').innerHTML = "your third name is" + fullName.slice(fullName.lastIndexOf(" "))

}*/




// lesson 12

/*let userName;

document.getElementById('showFullName').onclick = function () {
	userName = String(userName);
	userName = document.getElementById('yourName').value;

	document.getElementById('firstName').innerHTML = "your name is " +
		userName.charAt(0).toUpperCase() + userName.slice(1)
}
*/




// lesson 13

/*let age;

document.getElementById('showYourAge').onclick = function () {
	age = document.getElementById('yourAge').value;
	// if (age > 18) {
	// 	document.getElementById('Age').innerHTML = "you can buy an alcohol"
	// }
	// else {
	// 	document.getElementById('Age').innerHTML = "you can't buy an alcohol"
	// }

	if (age == "Russia") {
		document.getElementById('Age').innerHTML = "you can buy an alcohol"
	}

	else if (age == "US") {
		document.getElementById('Age').innerHTML = "you are a great person"
	}

	else {
		document.getElementById('Age').innerHTML = "you can't buy an alcohol"
	}
}*/


// lesson 14

/*
document.getElementById('submitMyCheckbox').onclick = function () {
	let gay = document.getElementById('myCheckbox')
	if (gay.checked) {
		document.getElementById('p1').innerHTML = "do not tach me"
	}
	else {
		document.getElementById('p1').innerHTML = "you are my friend"
	}
}
document.getElementById('submit2').onclick = function () {
	let female = document.getElementById('myRadio1')
	let male = document.getElementById('myRadio2')
	let other = document.getElementById('myRadio3')

	if (female.checked) {
		document.getElementById('p2').innerHTML = "go to a kichen woman"
	}

	else if (male.checked) {
		document.getElementById('p2').innerHTML = "go drink an alcohol"
	}

	else if (other.checked) {
		document.getElementById('p2').innerHTML = "you are fucking GAY!"
	}
	else {
		document.getElementById('p2').innerHTML = "you have to select your gender"
	}
}*/


// lesson 15


/*document.getElementById('submitYourGrade').onclick = function () {
	grades = document.getElementById('inputYourGrade').value;
	switch (true) {
		case grades == 5:
			document.getElementById('p1').innerHTML = "you did a great job"
			break;
		case grades == 4:
			document.getElementById('p1').innerHTML = "you did a good job"
			break;
		case grades == 3:
			document.getElementById('p1').innerHTML = "you were close to fail"
			break;
		case grades == 2:
			document.getElementById('p1').innerHTML = "you are failed"
			break;
		case grades == 1:
			document.getElementById('p1').innerHTML = "you are failed"
			break;
		default:
			document.getElementById('p1').innerHTML = grades + " it's not a gread"
	}
}*/
console.log('asdf')