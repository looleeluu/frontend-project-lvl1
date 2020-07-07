import readlineSync from 'readline-sync';
import { welcome, getName, greetingByName } from './cli.js';

export default (getRules, getGameExpression, getCorrectAnswer) => {
  console.log(welcome());
  const name = getName();
  console.log(greetingByName(name));
  console.log(getRules());

  let counter = 0;
  while (counter !== 3) {
    const expression = getGameExpression();
    const correctAnswer = getCorrectAnswer(expression);
    console.log(`Question: ${expression}`);

    const yourAnswer = readlineSync.question('Your answer: ');
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
