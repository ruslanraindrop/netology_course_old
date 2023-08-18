import obj from '../obj';
import orderByProps from '../app';

test('should sort the object by name & level', () => {
  const received = orderByProps(obj, ['name', 'level']);

  expect(received).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('should sort the object by defence & attack', () => {
  const received = orderByProps(obj, ['defence', 'attack']);

  expect(received).toEqual([
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('should sort the object by alphabet', () => {
  const received = orderByProps(obj, []);

  expect(received).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});
