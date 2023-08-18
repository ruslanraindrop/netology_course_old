import checkPaymentSystem from '../js/checkPaymentSystem';

test('Должен вернуть строку mir', () => {
  expect(checkPaymentSystem('2')).toBe('mir');
});


test('Должен вернуть строку visa', () => {
  expect(checkPaymentSystem('4')).toBe('visa');
});

test('Должен вернуть строку americanexpress', () => {
  expect(checkPaymentSystem('34')).toBe('americanexpress');
  expect(checkPaymentSystem('37')).toBe('americanexpress');
});

test('Должен вернуть строку dinersclub', () => {
  expect(checkPaymentSystem('30')).toBe('dinersclub');
  expect(checkPaymentSystem('36')).toBe('dinersclub');
  expect(checkPaymentSystem('38')).toBe('dinersclub');
});

test('Должен вернуть строку maestro', () => {
  expect(checkPaymentSystem('50')).toBe('maestro');
  expect(checkPaymentSystem('56')).toBe('maestro');
  expect(checkPaymentSystem('57')).toBe('maestro');
  expect(checkPaymentSystem('58')).toBe('maestro');
  expect(checkPaymentSystem('63')).toBe('maestro');
  expect(checkPaymentSystem('67')).toBe('maestro');
});

test('Должен вернуть строку mastercard', () => {
  expect(checkPaymentSystem('51')).toBe('mastercard');
  expect(checkPaymentSystem('52')).toBe('mastercard');
  expect(checkPaymentSystem('53')).toBe('mastercard');
  expect(checkPaymentSystem('54')).toBe('mastercard');
  expect(checkPaymentSystem('55')).toBe('mastercard');
});

test('Должен вернуть строку jcb', () => {
  expect(checkPaymentSystem('31')).toBe('jcb');
  expect(checkPaymentSystem('35')).toBe('jcb');
});

test('Должен вернуть строку unionpay', () => {
  expect(checkPaymentSystem('62')).toBe('unionpay');
});

test('Должен вернуть строку discover', () => {
  expect(checkPaymentSystem('60')).toBe('discover');
});

test('Должен вернуть undefined', () => {
  expect(checkPaymentSystem('0')).toBe(undefined);
});
