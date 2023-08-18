/* eslint-disable no-console */
import Character from './character';
import Team from './team';

const team = new Team();
const member = new Character('Player 1');
team.add(member);
const player = new Character('Player 2');
const newPlayer = new Character('Player 3');
team.addAll(player, newPlayer);
team.toArray();
console.log(team);
console.log(team.toArray());
