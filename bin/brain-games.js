#!/usr/bin/env node
import { welcome, getName, greetingByName } from '../src/games/cli.js';

console.log(welcome());
const name = getName();
console.log(greetingByName(name));
