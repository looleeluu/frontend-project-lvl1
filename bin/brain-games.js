#!/usr/bin/env node
import { getName, greetingByName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(greetingByName(name));
