export default class Character {
  constructor(inputName, inputType) {
    const name = String(inputName);
    const type = String(inputType);
    this.type = type;

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2) {
      throw (new Error('Минимальная длина имени — 2 символа'));
    } else if (name.length > 10) {
      throw (new Error('Максимальная длина имени — 10 символов'));
    }
    if (types.includes(type) === false) {
      throw (new Error('Выбран несуществующий тип игрока'));
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
