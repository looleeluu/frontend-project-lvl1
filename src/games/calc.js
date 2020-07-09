import { getRandomInt, getRandomMathOperator } from '../utility.js';

const calcRules = () => 'What is the result of the expression?';

const calcExpressions = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = getRandomMathOperator('+', '-', '*');

  const lineToShow = `${a} ${operator} ${b}`;
  const parameters = [a, operator, b];
  return [lineToShow, parameters];
};

const calcCorrectAnswer = (expression) => {
  const a = expression[0];
  const b = expression[2];
  const operator = expression[1];

  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  return a * b;
};

export { calcRules, calcExpressions, calcCorrectAnswer };
