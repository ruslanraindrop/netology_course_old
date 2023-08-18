function emulateDiceRoll(n = 10) {  
  return Math.floor(1 + Math.random() * n);
}

function getIntervalTime() {
  return Math.floor(5 + Math.random() * 6 ) * 1000;
}

const messages = [{
  type: 'action',
    content: 'Идёт перемещение мяча по полю, игроки и той, и другой команды активно пытаются атаковать'
  },
  {
    type: 'freekick',
    content: 'Нарушение правил, будет штрафной удар',
  },
  {
    type: 'goal',
    content: 'Отличный удар! И Г-О-Л!',
  },
  {
    type: 'start',
    content: 'Игра началась!',
  },
  {
    type: 'end',
    content: 'Игра завершилась!',
  },
];

function getActionType(number) {
  switch(number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      return messages[0];
      break;
    case 2:
    case 4:
    case 8:
    case 10:
      return messages[1];
      break;
    case 6:
      return messages[2];
      break;
    case 'start':
      return messages[3];
      break;
    default:
      return messages[4];
      break; 
  }
}

module.exports = { 
    emulateDiceRoll, 
    getIntervalTime,
    getActionType,
 };