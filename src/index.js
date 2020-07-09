import readlineSync from 'readline-sync';
import { welcome, getName, greetingByName } from './games/cli.js';

export default (getRules, getGameExpression, getCorrectAnswer) => {
  console.log(welcome());
  const name = getName();
  console.log(greetingByName(name));
  console.log(getRules());

  let counter = 0;
  while (counter !== 3) {
    const gameData = getGameExpression();

    const expression = gameData[0];
    const responseData = gameData.length === 1 ? gameData[0]
      : gameData[1];

    const correctAnswer = getCorrectAnswer(responseData);
    console.log(`Question: ${expression}`);

    const yourAnswer = typeof correctAnswer === 'string'
      ? readlineSync.question('Your answer: ')
      : readlineSync.questionInt('Your answer: ');

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      counter = 0;
    }
  }

  console.log(`Congratulation, ${name}!`);
};
