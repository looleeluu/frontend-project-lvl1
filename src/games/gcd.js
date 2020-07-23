import { getRandomInt } from '../utils.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

const gcdExpressions = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const lineToShow = `${a} ${b}`;
  const parameters = [a, b];
  return [lineToShow, parameters];
};

const getGcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return getGcd(n, m % n);
};

const gcdCorrectAnswer = (expression) => {
  const [a, b] = expression;
  return String(getGcd(a, b));
};

export { gcdRules, gcdExpressions, gcdCorrectAnswer };
