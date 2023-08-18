import Magician from './magician';
import Daemon from './daemon';

const daemonPlayer = new Daemon('Mike');
daemonPlayer.attack = 3;

const magicianPlayer = new Magician('John');
magicianPlayer.stonedState = true;
magicianPlayer.attack = 5;


// eslint-disable-next-line no-console
console.log([daemonPlayer, magicianPlayer]);
