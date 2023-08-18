export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 90;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }

  levelUp() {
    if (this.health === 0) {
      throw (new Error('Нельзя повысить левел погибшему персонажу'));
    }

    this.level += 1;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
    this.health = 100;
  }

  damage(points) {
    if (this.health < 0) {
      throw (new Error('Вы погибли'));
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
