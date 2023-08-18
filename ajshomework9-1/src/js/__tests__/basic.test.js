import Magician from '../magician';
import Daemon from '../daemon';

test('Должен выдать ошибку, если расстояние больше 5', () => {
  function received() {
    const player = new Magician('Player Magician');
    player.attack = 6;
  }
  expect(received).toThrow('Нельзя атаковать за пределами диапазона');
});

test('Должен выдать ошибку, если расстояние меньше ближайшей клетки', () => {
  function received() {
    const player = new Daemon('Player Magician');
    player.attack = 0;
  }
  expect(received).toThrow('Нельзя атаковать за пределами диапазона');
});

test('Игрок атакует ближайшую клетку без изменений', () => {
  const player = new Magician('Player Magician');
  player.attack = 1;
  expect(player.attack).toBe(80);
});

test('Игрок атакует пятую клетку без дурмана', () => {
  const player = new Daemon('Player Daemon');
  player.attack = 5;
  expect(player.attack).toBe(60);
});

test('Игрок атакует вторую клетку после дурмана', () => {
  const player = new Daemon('Player Daemon');
  player.attack = 2;
  player.stonedState = true;
  expect(player.attack).toBe(85);
});

test('Активирует дурман', () => {
  const player = new Daemon('Player Daemon');
  player.stonedState = true;
  expect(player.stonedState).toBe(true);
});

test('Деактивирует дурман', () => {
  const player = new Daemon('Player Daemon');
  player.stonedState = false;
  expect(player.stonedState).toBe(false);
});
