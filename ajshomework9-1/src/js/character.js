export default class Character {
  constructor(name) {
    this.name = name;
    this.stonedState = false;
  }

  set attack(distance) {
    this.distance = distance;
    if (this.distance > 5 || this.distance < 1) {
      throw new Error('Нельзя атаковать за пределами диапазона');
    }
    this.defaultAttack = (this.defaultAttack / 100) * (100 - (10 * (this.distance - 1)));
  }

  get attack() {
    if (this.stonedState) {
      this.defaultAttack -= Math.log2(this.distance) * 5;
    }
    return Math.round(this.defaultAttack);
  }

  set stoned(value) {
    this.stonedState = value;
  }

  get stoned() {
    return this.stonedState;
  }
}
