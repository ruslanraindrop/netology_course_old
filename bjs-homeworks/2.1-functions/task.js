// Задача 1

function getSolutions(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  let x1;
  let x2;

  if (D < 0) {
    return {
      D,
      roots: []
    };
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return {
      D,
      roots: [x1]
    };
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      D,
      roots: [x1, x2]
    };
  }
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} = 0`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D > 0) {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }
}

//Вывод в консоль для задачи 1
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задача 2

function getAverageScore(data) {
  const avgData = {};
  if (Object.keys(data).length === 0) {
    avgData.average = 0;
  } else {
    for (let discipline in data) {
      console.log(discipline + ': ' + data[discipline]);
      avgData[discipline] = getAverageMark(data[discipline]);
    }

    let sumAvg = 0;
    for (let key in avgData) {
      sumAvg += avgData[key];
    }

    let average = sumAvg / Object.keys(avgData).length;
    avgData.average = average;
  }
  return avgData;
}

function getAverageMark(marks) {
  let sum = 0;
  if (marks.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }
}

//Вывод в консоль для задачи 2

console.log(
  getAverageScore({
        algebra : [4, 5, 5, 4],
        geometry : [2, 5],
        russian : [3, 3, 4, 5],
        physics : [5, 5],
        music : [ 2, 2, 5],
        english : [4, 4, 3, 3],
        poetry : [5, 3, 4],
        chemistry : [2],
        french : [4, 4] 
  })
);

// Задача 3

function getPersonData(secretData) {
  const newData = {firstName: secretData.aaa, lastName: secretData.bbb};
  newData.firstName = getDecodedValue(newData.firstName);
  newData.lastName = getDecodedValue(newData.lastName);
  return newData;
}

function getDecodedValue(secret) {
  if (secret === 1) {
    return 'Эмильо';
  } else if (secret === 0) {
    return 'Родриго'
  }
}

//Вывод в консоль для задачи 3
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));