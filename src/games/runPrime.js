import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  const  limit = Math.sqrt(num);
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameRound = () => {
  const num = getRandomNumber(0, 10);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  runGame(description, getGameRound);
};
export default runPrime;
