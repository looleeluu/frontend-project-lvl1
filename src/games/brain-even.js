import { getRandomInt } from '../utils.js';
import startGameEngine, { ROUNDS_COUNT } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const number = getRandomInt();

  return {
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};

export default () => startGameEngine(ROUNDS_COUNT, gameDescription, getRound);
