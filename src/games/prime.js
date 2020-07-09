import { getRandomInt, isPrime } from '../utility.js';

const primeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeExpressions = () => {
  const number = getRandomInt();
  return [number];
};

const primeCorrectAnswer = (expression) => {
  if (isPrime(expression)) {
    return 'yes';
  }
  return 'no';
};

export { primeRules, primeExpressions, primeCorrectAnswer };
