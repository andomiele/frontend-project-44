import readlineSync from 'readline-sync';

export const roundsCount = 3;

const runGame = (description, getGameRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getGameRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
