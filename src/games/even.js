import { getRandomInt, gameExpressionOutput } from '../utils.js';
import gameEngine from '../index.js';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

const evenExpressions = () => {
  const number = getRandomInt();
  gameExpressionOutput(number);

  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  gameEngine(evenRules, evenExpressions);
};
