/* eslint-disable no-console */
import Character from './character';

const player = new Character('someName', 'someType');
console.log(player);
player.levelUp();
console.log(`Ваш уровень повышен! Новые характеристики: Уровень - ${player.level}, Атака - ${player.attack}, Защита - ${player.defence}, Здоровье - ${player.health}`);
player.damage(20);
console.log(`Вам нанесли урон! Новые характеристики: Здоровье - ${player.health}`);
