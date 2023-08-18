import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.health = 100;
    this.level = 1;
    this.defaultAttack = 100;
    this.defence = 70;
    this.type = 'Daemon';
  }
}
