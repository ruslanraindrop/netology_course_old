import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const response = await read();
      return await json(response);
    } catch (error) {
      return error;
    }
  }
}
