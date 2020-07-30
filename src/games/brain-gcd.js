import { getRandomInt } from '../utils.js';
import startGameEngine, { ROUNDS_COUNT } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  const answer = (secondNumber === 0)
    ? firstNumber : getGcd(secondNumber, firstNumber % secondNumber);
  return answer;
};

const getRound = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: String(getGcd(firstNumber, secondNumber)),
  };
};

export default () => startGameEngine(ROUNDS_COUNT, gameDescription, getRound);
