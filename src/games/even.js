import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const ROUNDS_COUNT = 3;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getRoundData = () => {
  const number = getRandomInt();

  return {
    question: `${number}`,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};

export default () => {
  startGameEngine(ROUNDS_COUNT, gameDescription, getRoundData);
};
