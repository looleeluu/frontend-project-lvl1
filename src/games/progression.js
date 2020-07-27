import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const ROUNDS_COUNT = 3;
const PROGRESSION_LENGTH = 9;
const HIDE_MARKER = '..';

const gameDescription = 'What number is missing in the progression?';

const getRoundData = () => {
  const firstNumber = getRandomInt(-100, 100);
  const step = getRandomInt(-10, 10);
  const progression = [firstNumber];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const nextNumber = progression[progression.length - 1] + step;
    progression.push(nextNumber);
  }

  const hiddenNumberIndex = getRandomInt(0, progression.length - 1);
  progression[hiddenNumberIndex] = HIDE_MARKER;

  const answer = hiddenNumberIndex === 0
    ? progression[1] - step
    : progression[hiddenNumberIndex - 1] + step;

  return {
    question: progression.join(' '),
    correctAnswer: String(answer),
  };
};

export default () => {
  startGameEngine(ROUNDS_COUNT, gameDescription, getRoundData);
};
