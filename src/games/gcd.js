import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const ROUNDS_COUNT = 3;

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (m, n) => {
  const answer = (n === 0)
    ? m
    : getGcd(n, m % n);
  return answer;
};

const getRoundData = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  return {
    question: `${a} ${b}`,
    correctAnswer: String(getGcd(a, b)),
  };
};

export default () => {
  startGameEngine(ROUNDS_COUNT, gameDescription, getRoundData);
};
