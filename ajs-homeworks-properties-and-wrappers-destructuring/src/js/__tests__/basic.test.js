import unit from '../unit';
import getValuesByUnit from '../app';

test('Должен дать массив с описанием атак юнита', () => {
  const result = getValuesByUnit(unit);

  expect(result).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]);
});
