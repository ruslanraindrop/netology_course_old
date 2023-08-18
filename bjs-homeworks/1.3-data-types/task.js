function calculateTotalMortgage(percent, contribution, amount, date) {
    
	'use strict';

    if (isNaN(percent)) {
    	console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`);
    	return;
    } else if (isNaN(contribution)) {
    	console.log(`Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`);
    }
      else if (isNaN(amount)) {
    	console.log(`Параметр процентная ставка содержит неправильное значение ${amount}`)
    } else {
    	let bodyCredit = amount - contribution;
    	let numberOfMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    	let P = percent / 100 / 12;
    	let monthlyCost = bodyCredit * (P + P / (((1 + P) ** numberOfMonths) - 1));
    	let totalAmount = parseFloat((monthlyCost * numberOfMonths).toFixed(2));
    	console.log(totalAmount);
    	return totalAmount;
    }

}

function getGreeting(name) {
    	if ((name === '') || (name === null) || (name === undefined)) {
    		name = 'Аноним';
    	}
		let greeting = `Привет, мир! Меня зовут ${name}`;
    	console.log(greeting);
    	return greeting;
}
    	