import { getRandomInt, getRandomMathOperator, gameExpressionOutput } from '../utils.js';
import gameEngine from '../index.js';

const calcRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcExpressions = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = getRandomMathOperator(operators);
  const lineToShow = `${a} ${operator} ${b}`;

  gameExpressionOutput(lineToShow);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

export default () => {
  gameEngine(calcRules, calcExpressions);
};
