let userEyes = 'your eyes color';
console.log(userEyes)

let user = 'Даниил';
let userName = 'Даниил';
console.log(user)

if (0) {
	console.log('false');
} else if (" ") {
	console.log('true');
}

for (let name = 1; name < 10; name++) {
	console.log(name);
	if (name == 5) break
}
console.log(`иди нахуй for не работает ${name}`)


for (let num = 0; num < 4; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) break;
		console.log(size);
	}
}

function showName() {
	console.log(1);
}
setTimeout(showName, 0)
console.log(2);

'use strict'

let showMessage;

if (2 > 1) {
	showMessage = function () {
		console.log('hi');
	};
}
showMessage();



let userInfo = {
	name: "vasia",
	age: "30",
	showInfo() {
		console.log(`${this.name}`);
	}
}
let userw = userInfo;
userInfo = null;
userw.showInfo();

userInfo = {
	name: "Vasia",
	age: 30,
}
delete userInfo.name
for (let key in userInfo) {
	console.log(userInfo[key]);
}