import errorStorage from '../app';

test('Конструктур класса ErrorRepository должен создавать map', () => {
  const received = errorStorage.map.size;
  expect(received).toBe(4);
});

test('Метод translate должен преобразовывать код ошибки в сообщение', () => {
  const received = errorStorage.translate(333);
  expect(received).toBe('Время ожидания истекло');
});

test('Метод translate должен выбрасывать ошибку, если код не найден', () => {
  const received = errorStorage.translate(3334);
  expect(received).toBe('Unknown error');
});
