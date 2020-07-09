import { getRandomInt } from '../utility.js';

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

const evenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const evenExpressions = () => {
  const number = getRandomInt();
  return [number];
};

const evenCorrectAnswer = (expression) => {
  if (isEven(expression)) {
    return 'yes';
  }
  return 'no';
};

export { evenRules, evenExpressions, evenCorrectAnswer };
