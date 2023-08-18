import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const bowerman = new Bowerman('Player1', 'Bowerman');
const swordsman = new Swordsman('Player2', 'Swordsman');
const magician = new Magician('Player3', 'Magician');
const daemon = new Daemon('Player4', 'Daemon');
const undead = new Undead('Player5', 'Undead');
const zombie = new Zombie('Player6', 'Zombie');

const players = [bowerman, swordsman, magician, daemon, undead, zombie];
// eslint-disable-next-line no-console
console.log(players);
