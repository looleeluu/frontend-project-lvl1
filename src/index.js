import readlineSync from 'readline-sync';

const numberOfRounds = 3;
let counter = 0;

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rules);
  return name;
};

export default (rules, getGameExpression, getCorrectAnswer) => {
  const name = greeting(rules);

  while (counter !== numberOfRounds) {
    const gameData = getGameExpression();

    const expression = gameData[0];
    const expressionParameters = gameData.length === 1 ? gameData[0]
      : gameData[1];

    const correctAnswer = getCorrectAnswer(expressionParameters);
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
