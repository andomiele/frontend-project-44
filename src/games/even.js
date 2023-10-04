import readlineSync from 'readline-sync';
import getrandom from './getrandom.js';
import brainGame from './cli.js';

const even = () => {
  const number = getrandom();
  const userName = brainGame();
  const roundsCount = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  const quest = readlineSync.question(`${'\nYour answer: '}`);

  for (let i = 0; i < roundsCount; i += 1) {
  if ((number % 2 === 0 && quest === 'yes') || (number % 2 !== 0 && quest === 'no')) {
    console.log('Coorect!');
  } else {
    console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    return;
  }
  }
console.log(`Congratulations, ${userName}!`);
};
export default even;