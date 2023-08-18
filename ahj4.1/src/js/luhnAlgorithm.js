export default function luhnAlgorithm(values) {
  let sum = 0;

  for (let i = 0; i < values.length; i += 1) {
    let number = Number(values[i]);

    if ((values.length - i) % 2 === 0) {
      number *= 2;

      if (number > 9) {
        number -= 9;
      }
    }
    sum += number;
  }

  return sum % 10 === 0;
}
