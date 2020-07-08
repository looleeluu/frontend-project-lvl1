import { getRandomInt, getGcd } from './utility.js';

const getGcdRules = () => 'Find the greatest common divisor of given numbers.';

const gcdExpression = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  return `${a} ${b}`;
};

const gcdCorrectAnswer = (expression) => {
  const makeOutExpression = expression.split(' ');
  const [a, b] = makeOutExpression;
  return String(getGcd(a, b));
};

export { getGcdRules, gcdExpression, gcdCorrectAnswer };
