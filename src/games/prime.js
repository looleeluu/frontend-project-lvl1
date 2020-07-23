import { getRandomInt } from '../utils.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeExpressions = () => {
  const number = getRandomInt();
  return [number];
};

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeCorrectAnswer = (expression) => {
  if (isPrime(expression)) {
    return 'yes';
  }
  return 'no';
};

export { primeRules, primeExpressions, primeCorrectAnswer };
