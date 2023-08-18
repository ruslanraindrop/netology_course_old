String.prototype.isPalindrome = function () {
    let normal = this.toLowerCase().match(/[а-я]/gi).reverse();
    if (normal.join('') === normal.reverse().join('')) {
    	return true
    } else {
    	return false
    }

    console.log('А роза упала на лапу Азора'.isPalindrome());
}


function getAverageMark(marks) {
    let roundedAverage;
    let sum = 0;

    if (marks.length == 0) {
        return 0   
    } else {
        for (i = 0; i < marks.length; i++) {
            sum += marks[i];
    }
        let average = sum / marks.length;
        roundedAverage = Math.round(average);
        return roundedAverage
    }

}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}