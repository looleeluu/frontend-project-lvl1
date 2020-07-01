#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, getName, greetingByName } from '../src/cli.js';
import { getRandomInt, getRules, isEven } from '../src/even.js';

console.log(welcome());
const name = getName();
console.log(greetingByName(name));

console.log(getRules());
let counter = 0;

while (counter !== 3) {
  const number = getRandomInt();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);

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
