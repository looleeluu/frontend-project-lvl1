import readlineSync from 'readline-sync';

const numberOfRounds = 3;
let winCounter = 0;

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rules);
  return name;
};

export default (rules, getGameExpression) => {
  const name = greeting(rules);

  while (winCounter !== numberOfRounds) {
    const correctAnswer = getGameExpression();

    const yourAnswer = typeof correctAnswer === 'string'
      ? readlineSync.question('Your answer: ')
      : readlineSync.questionInt('Your answer: ');

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      winCounter += 1;
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      winCounter = 0;
    }
  }

  console.log(`Congratulation, ${name}!`);
};
