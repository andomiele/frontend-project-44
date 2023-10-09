import readlineSync from 'readline-sync';
import getrandom from '../getrandom.js';

const calculation = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes';
};

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
  console.log('What number is missing in the progression?');

  for (let j = 0; j < 3; j += 1) {
    const number = getrandom(0, 10);
    const correctNum = calculation(number)
    const question = (`${number}`);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`${'\nYour answer: '}`);
    const correctAnswer = correctNum;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer}${' is wrong answer ;(. Correct answer was '}${correctAnswer}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default prime;