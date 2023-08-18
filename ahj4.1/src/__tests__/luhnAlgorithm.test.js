import luhnAlgorithm from '../js/luhnAlgorithm';

test('Должен вернуть false', () => {
  expect(luhnAlgorithm('1231235683')).toBeFalsy();
});

test('Должен вернуть true', () => {
  expect(luhnAlgorithm('4532286557951187')).toBeTruthy();
  expect(luhnAlgorithm('6011747482295532')).toBeTruthy();
  expect(luhnAlgorithm('30058283504456')).toBeTruthy();
  expect(luhnAlgorithm('2221003671270869')).toBeTruthy();
  expect(luhnAlgorithm('5243809210649166')).toBeTruthy();
  expect(luhnAlgorithm('3537730505304772')).toBeTruthy();
  expect(luhnAlgorithm('36875620111784')).toBeTruthy();
  expect(luhnAlgorithm('6394926776621705')).toBeTruthy();
  expect(luhnAlgorithm('371176963923619')).toBeTruthy();
  expect(luhnAlgorithm('5424531309427228')).toBeTruthy();
  expect(luhnAlgorithm('5893832341480650')).toBeTruthy();
});
