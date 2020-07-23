import readlineSync from 'readline-sync';

export default () => {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
