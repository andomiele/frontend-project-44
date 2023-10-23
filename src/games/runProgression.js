import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const calculation = (first, step, length) => {
  const progression = [];
  progression[0] = first;
  for (let i = 1; i <= length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const runProgression = () => {
  const first = getRandomNumber(0, 10);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(6, 8);

  const correctProgression = calculation(first, step, length);
  const randomIndex = getRandomNumber(1, correctProgression.length);
  const answerNum = correctProgression[randomIndex];
  const answer = answerNum.toString();
  correctProgression[randomIndex] = '..';
  const question = `${correctProgression.join(' ')}`;
  return [question, answer];
};
export default () => runGame(description, runProgression);
