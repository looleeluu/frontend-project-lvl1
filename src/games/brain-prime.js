import { getRandomInt } from '../utils.js';
import startGameEngine, { ROUNDS_COUNT } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomInt();

  return {
    question: `${number}`,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => startGameEngine(ROUNDS_COUNT, gameDescription, getQuestionAndAnswer);
