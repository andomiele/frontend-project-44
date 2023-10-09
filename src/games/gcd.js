import readlineSync from 'readline-sync';
import getrandom from '../getrandom.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  
  if (!y) return x;
  return NOD(y, x % y);
}

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) { 
    const num1 = getrandom(0, 10);
    const num2 = getrandom(0, 10);
    const str = '';
    const question = (`${num1} ${num2}`);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`${'\nYour answer: '}`);
    const correctAnswer = NOD(num1, num2);
    const answerString = `${str}${correctAnswer}`;
    if (userAnswer === answerString) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer}${' is wrong answer ;(. Correct answer was '}${answerString}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gcd;
