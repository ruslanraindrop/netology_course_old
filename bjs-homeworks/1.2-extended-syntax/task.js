"use strict";

function getResult(a,b,c){
    let d = b**2 - 4*a*c;
    let x = [];
    let result;

    if (d === 0) {
    	result = (Math.sqrt(d) - b) / (2 * a);
    	x.push(result);
    } else if (d > 0) {
    	result = (Math.sqrt(d) - b) / (2 * a);
    	x.push(result);
    	result = (0 - b - Math.sqrt(d)) / (2 * a);
    	x.push(result);  
    }

	return x;
}

function getAverageMark(marks){

	if (marks.length === 0) {
		return 0;
	} else if (marks.length > 5) {
		console.log("Оценок не может быть больше пяти! Выведен результат первых пяти значений.");
		marks.splice(5);
	}

	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum = sum + marks[i];
	}

	let averageMark = sum / marks.length;

	return averageMark;
}

function askDrink(name,dateOfBirthday){

	let userYear = dateOfBirthday.getFullYear();
	let todayYear = new Date().getFullYear();
	let age = todayYear - userYear;
	let result;

	if (age > 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
	} else if (age < 18) {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
	}

	return result;
}