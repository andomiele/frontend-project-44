import readlineSync from 'readline-sync';
import getrandom from '../getrandom.js';

const calculation = (firstNumber, step, progressionLength) => {
  const arrow = [];
  arrow[0] = firstNumber;
  for (let i = 1; i <= progressionLength; i += 1) {
    arrow[i] = arrow[i - 1] + step;
  }
  return arrow;
};

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
  console.log('What number is missing in the progression?');

  for (let j = 0; j < 3; j += 1) {
    const firstNumber = getrandom(0, 10);
    const step = getrandom(1, 10);
    const progressionLength = 3;


    const correctArr = calculation(firstNumber, step, progressionLength);
    const randomIndex = getrandom(1, correctArr.length);
    const safeIndex = correctArr[randomIndex];
    correctArr[randomIndex] = '..'; 

    const question = (`${correctArr}`);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`${'\nYour answer: '}`);
    const correctAnswer = String(safeIndex);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer}${' is wrong answer ;(. Correct answer was '}${correctAnswer}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default progression;