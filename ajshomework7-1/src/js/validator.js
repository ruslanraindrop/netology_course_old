export default class Validator {
  validateUsername(name) {
    if (/^[^a-z]/i.test(name) || /.[^a-z]$/i.test(name)) {
      throw new Error('Никнейм не может начинаться и заканчиваться с цифр, подчеркиваний и тире');
    } else if (/\d{4,}/.test(name)) {
      throw new Error('Нельзя использовать больше трех цифр подряд');
    } else if (!/^[\w-]+$/i.test(name)) {
      throw new Error('Никнейм должен содержать только латинские буквы, цифры, тире и нижнее подчеркивание');
    } else {
      this.name = name;
    }
  }
}
