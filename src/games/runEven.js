import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

const getGameRound = () => {
  const num = getRandomNumber(0, 10);
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  runGame(description, getGameRound);
};
export default runEven;
