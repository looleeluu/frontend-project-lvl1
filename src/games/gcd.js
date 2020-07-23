import { getRandomInt, gameExpressionOutput } from '../utils.js';
import gameEngine from '../index.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return getGcd(n, m % n);
};

const gcdExpressions = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const lineToShow = `${a} ${b}`;
  gameExpressionOutput(lineToShow);

  return getGcd(a, b);
};

export default () => {
  gameEngine(gcdRules, gcdExpressions);
};
