import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const ROUNDS_COUNT = 3;
const OPERATORS = ['+', '-', '*'];

const getRandomMathOperator = (operators) => operators[getRandomInt(0, operators.length - 1)];

const gameDescription = 'What is the result of the expression?';

const getRoundData = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = getRandomMathOperator(OPERATORS);
  const operation = {
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  };

  const calculateOperation = operation[operator];

  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: String(calculateOperation(a, b)),
  };
};

export default () => {
  startGameEngine(ROUNDS_COUNT, gameDescription, getRoundData);
};
