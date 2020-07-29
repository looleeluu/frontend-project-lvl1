import { getRandomInt } from '../utils.js';
import startGameEngine, { ROUNDS_COUNT } from '../index.js';

const OPERATORS = ['+', '-', '*'];

const getRandomMathOperator = (operators) => operators[getRandomInt(0, operators.length - 1)];

const gameDescription = 'What is the result of the expression?';

const mapSmthToSmth = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
};

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();
  const operator = getRandomMathOperator(OPERATORS);
  const calculateOperation = mapSmthToSmth[operator];

  return {
    question: `${firstOperand} ${operator} ${secondOperand}`,
    correctAnswer: String(calculateOperation(firstOperand, secondOperand)),
  };
};

export default () => startGameEngine(ROUNDS_COUNT, gameDescription, getQuestionAndAnswer);
