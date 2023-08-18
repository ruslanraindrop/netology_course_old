import Validator from '../validator';

test('Должен выдать ошибку, если строка начинается с цифр', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('123RuS-123_lAn');
  }
  expect(received).toThrow('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
});

test('Должен выдать ошибку, если строка начинается с тире', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('-RuS-123_lAn');
  }
  expect(received).toThrow('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
});

test('Должен выдать ошибку, если строка начинается с подчеркивания', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('_RuS-123_lAn');
  }
  expect(received).toThrow('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
});

test('Должен выдать ошибку, если строка заканчивается цифрами', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('RuS-123_lAn123');
  }
  expect(received).toThrow('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
});

test('Должен выдать ошибку, если строка заканчивается тире', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('RuS-123_lAn-');
  }
  expect(received).toThrow('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
});

test('Должен выдать ошибку, если строка заканчивается подчеркиванием', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('RuS-123_lAn_');
  }
  expect(received).toThrow('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
});

test('Должен выдать ошибку, если используется более 3 цифр подряд', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('RuS-1234_lAn');
  }
  expect(received).toThrow('Нельзя использовать больше трех цифр подряд');
});

test('Должен выдать ошибку, если содержит недопустимые символы — все, кроме цифр, латинских букв, тире и подчеркиваний', () => {
  function received() {
    const player = new Validator();
    player.validateUsername('Ru!S-123_lAn');
  }
  expect(received).toThrow('Никнейм должен содержать только латинские буквы, цифры, тире и нижнее подчеркивание');
});

test('Должен присвоить имя при правильной валидации', () => {
  const player = new Validator();
  player.validateUsername('RuS-123_lAn');
  expect(player.name).toBe('RuS-123_lAn');
});
