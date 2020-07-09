import { getRandomInt, getGcd } from '../utility.js';

const gcdRules = () => 'Find the greatest common divisor of given numbers.';

const gcdExpressions = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const lineToShow = `${a} ${b}`;
  const parameters = [a, b];
  return [lineToShow, parameters];
};

const gcdCorrectAnswer = (expression) => {
  const [a, b] = expression;
  return String(getGcd(a, b));
};

export { gcdRules, gcdExpressions, gcdCorrectAnswer };
