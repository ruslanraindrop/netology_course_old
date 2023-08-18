import Validator from './validator';

const player = new Validator();
player.validateUsername('RuS-123_lAn');
// eslint-disable-next-line no-console
console.log(player.name);

export default player;
