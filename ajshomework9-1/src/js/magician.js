import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.health = 100;
    this.level = 2;
    this.defaultAttack = 80;
    this.defence = 100;
    this.type = 'Magician';
  }
}
