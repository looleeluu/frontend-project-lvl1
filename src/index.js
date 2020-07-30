import readlineSync from 'readline-sync';

export const ROUNDS_COUNT = 3;

export default (roundsCount, gameDecription, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameDecription);

  for (let round = 1; round <= roundsCount; round += 1) {
    const { question, correctAnswer } = getRound();
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
