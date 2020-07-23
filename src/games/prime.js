import { getRandomInt, gameExpressionOutput } from '../utils.js';
import gameEngine from '../index.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeExpressions = () => {
  const number = getRandomInt();
  gameExpressionOutput(number);

  if (isPrime(number)) {
    return 'yes';
  }
  return 'false';
};

export default () => {
  gameEngine(primeRules, primeExpressions);
};
