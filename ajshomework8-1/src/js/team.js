import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (member instanceof Character) {
      if (this.members.has(member)) {
        throw (new Error('Персонаж уже добавлен'));
      }
      this.members.add(member);
    } else {
      throw (new Error('Персонаж не принадлежит классу Character'));
    }
  }

  addAll(...rest) {
    rest.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
