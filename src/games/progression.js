import { getRandomInt, getRandomMathOperator, gameExpressionOutput } from '../utils.js';
import gameEngine from '../index.js';

const progressionRules = 'What number is missing in the progression?';

const operators = ['+', '-'];

const progressionExpresssion = () => {
  const firstChar = getRandomInt();

  const step = Number(getRandomMathOperator(operators) + getRandomInt(1, 10));

  const progression = [firstChar];

  for (let i = 0; i < 9; i += 1) {
    const newChar = progression[progression.length - 1] + step;
    progression.push(newChar);
  }

  const removeIndex = getRandomInt(progression.length - 1);
  progression[removeIndex] = '..';
  const lineToShow = progression.join(' ');
  gameExpressionOutput(lineToShow);

  if (removeIndex === 0) {
    return progression[1] - step;
  }
  return progression[removeIndex - 1] + step;
};

export default () => {
  gameEngine(progressionRules, progressionExpresssion);
};
