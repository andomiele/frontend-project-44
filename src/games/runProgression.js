import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const calculate = (first, step, length) => {
  const progression = [];
  progression[0] = first;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const getGameRound = () => {
  const first = getRandomNumber(0, 5);
  const step = getRandomNumber(1, 6);
  const length = getRandomNumber(7, 10);
  const progression = calculate(first, step, length);
  const randomIndex = getRandomNumber(1, progression.length - 1);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgression = () => {
  runGame(description, getGameRound);
};
export default runProgression;
