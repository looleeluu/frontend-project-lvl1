import { getRandomInt } from './utility.js';

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

const getEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const evenExpression = () => getRandomInt();

const evenCorrectAnswer = (expression) => {
  if (isEven(expression)) {
    return 'yes';
  }
  return 'no';
};

export { getEvenRules, evenExpression, evenCorrectAnswer };
