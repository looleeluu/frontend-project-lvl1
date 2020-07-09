import readlineSync from 'readline-sync';

const welcome = () => 'Welcome to the Brain Games!';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const greetingByName = (name) => `Hello, ${name}!`;

export { welcome, getName, greetingByName };
