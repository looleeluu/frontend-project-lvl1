import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const greetingByName = (name) => {
  return `Hello, ${name}!`;
};

export { getName, greetingByName };