import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Should throw error if name < 2', () => {
  function received() {
    const player = new Character('n', 'Bowerman');
    return player;
  }
  expect(received).toThrow('Минимальная длина имени — 2 символа');
});

test('Should throw error if name > 10', () => {
  function received() {
    const player = new Character('namenamenamename', 'Bowerman');
    return player;
  }
  expect(received).toThrow('Максимальная длина имени — 10 символов');
});

test('Should throw error if input incorrect type', () => {
  function received() {
    const player = new Character('Name', 'someIncorrectType');
    return player;
  }
  expect(received).toThrow('Выбран несуществующий тип игрока');
});

test('Should convert to string', () => {
  const player = new Bowerman(123, 'Bowerman');
  expect(player).toEqual({
    attack: 25,
    health: 100,
    level: 1,
    name: '123',
    defence: 25,
    type: 'Bowerman',
  });
});

test('Should be Bowerman', () => {
  const player = new Bowerman('Name', 'Bowerman');
  expect(player).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Name',
    type: 'Bowerman',
  });
});

test('Should be Swordsman', () => {
  const player = new Swordsman('Name', 'Swordsman');
  expect(player).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Name',
    type: 'Swordsman',
  });
});

test('Should be Magician', () => {
  const player = new Magician('Name', 'Magician');
  expect(player).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Name',
    type: 'Magician',
  });
});

test('Should be Undead', () => {
  const player = new Undead('Name', 'Undead');
  expect(player).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Name',
    type: 'Undead',
  });
});

test('Should be Zombie', () => {
  const player = new Zombie('Name', 'Zombie');
  expect(player).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Name',
    type: 'Zombie',
  });
});

test('Should be Daemon', () => {
  const player = new Daemon('Name', 'Daemon');
  expect(player).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Name',
    type: 'Daemon',
  });
});
