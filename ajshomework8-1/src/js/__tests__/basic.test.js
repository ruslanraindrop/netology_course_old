import Team from '../team';
import Character from '../character';

test('Нельзя добавить объект другого класса', () => {
  function received() {
    const team = new Team();
    team.add({ Type: 'SomeIncorrectObject' });
  }
  expect(received).toThrow('Персонаж не принадлежит классу Character');
});

test('Нельзя дублировать персонажа', () => {
  function received() {
    const team = new Team();
    const member = new Character('Player');
    team.add(member);
    team.add(member);
  }
  expect(received).toThrow('Персонаж уже добавлен');
});

test('Должен добавить персонажа в команду', () => {
  const team = new Team();
  const member = new Character('Player');
  team.add(member);
  const received = team.members.size;
  expect(received).toBe(1);
});

test('Метод addAll должен добавлять несколько объектов Character', () => {
  const team = new Team();
  const member1 = new Character('Player 1');
  const member2 = new Character('Player 2');
  const member3 = new Character('Player 3');
  team.addAll(member1, member2, member3);
  const received = team.members.size;
  expect(received).toBe(3);
});

test('Метод toArray конвертирует Set в массив', () => {
  const team = new Team();
  team.members.add('Player 1');
  team.members.add('Player 2');
  team.members.add('Player 3');
  expect(team.toArray()).toEqual(['Player 1', 'Player 2', 'Player 3']);
});
