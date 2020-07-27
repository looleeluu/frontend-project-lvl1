import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default (roundsCount, gameDecription, getGameExpression) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}`);
  console.log(gameDecription);

  for (let counter = 0; counter < roundsCount; counter += 1) {
    const { question, correctAnswer } = getGameExpression();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulation, ${userName}!`);
};
