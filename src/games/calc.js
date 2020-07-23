import { getRandomInt, getRandomMathOperator } from '../utils.js';

const calcRules = 'What is the result of the expression?';

const calcExpressions = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = getRandomMathOperator('+', '-', '*');

  const lineToShow = `${a} ${operator} ${b}`;
  const parameters = [a, operator, b];
  return [lineToShow, parameters];
};

const calcCorrectAnswer = (expression) => {
  const [a, operator, b] = expression;

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

export { calcRules, calcExpressions, calcCorrectAnswer };
