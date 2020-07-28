import { getRandomInt } from '../utils.js';
import startGameEngine, { ROUNDS_COUNT } from '../index.js';

const PROGRESSION_LENGTH = 9;
const HIDE_MARKER = '..';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const firstNumber = getRandomInt(-100, 100);
  const step = getRandomInt(-10, 10);
  const progression = [firstNumber];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const nextNumber = progression[progression.length - 1] + step;
    progression.push(nextNumber);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();

  const hiddenNumberIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[hiddenNumberIndex];

  progression[hiddenNumberIndex] = HIDE_MARKER;

  return {
    question: progression.join(' '),
    correctAnswer: String(answer),
  };
};

export default () => {
  startGameEngine(ROUNDS_COUNT, gameDescription, getQuestionAndAnswer);
};
