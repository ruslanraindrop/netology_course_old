import Character from '../character';

test('Should throw error if health = 0', () => {
  function received() {
    const player = new Character('SomeName', 'SomeType');
    player.health = 0;
    player.levelUp();
  }
  expect(received).toThrow('Нельзя повысить левел погибшему персонажу');
});

test('Should throw error if health < 0', () => {
  function received() {
    const player = new Character('SomeName', 'SomeType');
    player.health = -5;
    player.damage(20);
  }
  expect(received).toThrow('Вы погибли');
});

test('Should be correct input', () => {
  const received = new Character('SomeName', 'SomeType');
  const expected = {
    name: 'SomeName',
    type: 'SomeType',
    health: 90,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Should level up', () => {
  const received = new Character('SomeName', 'SomeType');
  received.levelUp();

  const expected = {
    name: 'SomeName',
    type: 'SomeType',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(received).toEqual(expected);
});

test('Should take damage', () => {
  const received = new Character('SomeName', 'SomeType');
  received.damage(20);

  const expected = {
    name: 'SomeName',
    type: 'SomeType',
    health: 78,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
