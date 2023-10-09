import readlineSync from 'readline-sync';
import getrandom from '../getrandom.js';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getrandom(0, 10);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question(`${'\nYour answer: '}`);
    if ((number % 2 === 0 && userAnswer === 'yes') || (number % 2 !== 0 && userAnswer === 'no')) {
      console.log('Coorect!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);

};

export default even;
