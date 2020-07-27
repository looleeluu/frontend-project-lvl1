import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default () => {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};
