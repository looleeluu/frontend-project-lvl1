import { getRandomInt, getRandomMathOperator } from './utility.js';

const getCalcRules = () => 'What is the result of the expression?';

const calcExpressions = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = getRandomMathOperator();

  return `${a} ${operator} ${b}`;
};

const calcCorrectAnswer = (expression) => {
  let result;

  const makeOutExpression = expression.split(' ');
  const a = Number(makeOutExpression[0]);
  const b = Number(makeOutExpression[2]);
  const operator = makeOutExpression[1];

  if (operator === '+') {
    result = a + b;
  }
  if (operator === '-') {
    result = a - b;
  }
  if (operator === '*') {
    result = a * b;
  }
  return String(result);
};

export { getCalcRules, calcExpressions, calcCorrectAnswer };
