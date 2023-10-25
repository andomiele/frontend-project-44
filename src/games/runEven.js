import getRandomNumber from '../utils.js';
import getTask from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

const getGameRounds = () => {
  const num = getRandomNumber(0, 10);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  getTask(description, getGameRounds)
};
export default runEven;
