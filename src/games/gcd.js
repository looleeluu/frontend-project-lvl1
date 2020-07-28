import { getRandomInt } from '../utils.js';
import startGameEngine, { ROUNDS_COUNT } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  const answer = (secondNumber === 0)
    ? firstNumber : getGcd(secondNumber, firstNumber % secondNumber);
  return answer;
};

const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  return {
    question: `${a} ${b}`,
    correctAnswer: String(getGcd(a, b)),
  };
};

export default () => {
  startGameEngine(ROUNDS_COUNT, gameDescription, getQuestionAndAnswer);
};
