// Задача 1

function parseCount (inputNumber) {
  if (isNaN(Number.parseInt(inputNumber))) {
    throw new Error('Невалидное значение');
  }
  return Number.parseInt(inputNumber);
}

function validateCount(inputNumber) {
  try {
    return parseCount(inputNumber);
  } catch(err) {
    return err;
  }
}

// Задача 2

class Triangle {
  constructor (a, b, c) {
    if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
      throw new Error('Треугольник с такими сторонами не существует');
    } 

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
    const newTriangle = new Triangle (a, b, c);  
    return newTriangle;
  } catch {
    const errorObj = {
      getPerimeter() {return 'Ошибка! Неправильный треугольник'},
      getArea () {return 'Ошибка! Неправильный треугольник'}
    }
    return errorObj;
  }
}