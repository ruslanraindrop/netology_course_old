// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  const object = JSON.parse(saving);
  Object.getPrototypeOf(object);
}, (error) => {
  throw (new Error(error));
});
