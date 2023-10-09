import readlineSync from 'readline-sync';
import getrandom from '../getrandom.js';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
  console.log('What is the result of the expression?');
  const operatorArray = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) { 
    const num1 = getrandom(0, 10);
    const num2 = getrandom(0, 10);
    const index = getrandom(0, 3);
    const operator = operatorArray[index];
    const question = (`${num1} ${operator} ${num2}`);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`${'\nYour answer: '}`);

    const calculation = (num1, num2, operator) => {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          throw new Error(`Unkown order state: '${operator}'!`);
      }
    }
    const answer = calculation(num1, num2, operator);
    if (String(answer) === userAnswer){
      console.log('Coorect!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calc;